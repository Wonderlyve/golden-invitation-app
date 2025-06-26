import { useState, useEffect } from 'react';
import { Guest } from '@/types/guest';

const STORAGE_KEY = 'wedding-guests';

export const useGuests = () => {
  const [guests, setGuests] = useState<Guest[]>([]);

  useEffect(() => {
    const savedGuests = localStorage.getItem(STORAGE_KEY);
    if (savedGuests) {
      const parsedGuests = JSON.parse(savedGuests).map((guest: any) => ({
        ...guest,
        phoneNumber: guest.phoneNumber || '', // Assurer la compatibilité avec les anciens invités
        createdAt: new Date(guest.createdAt)
      }));
      setGuests(parsedGuests);
    }
  }, []);

  const saveToStorage = (updatedGuests: Guest[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedGuests));
    setGuests(updatedGuests);
  };

  const addGuest = (name: string, tableNumber: string, phoneNumber: string) => {
    // Limiter à 2 invités en mode démo
    if (guests.length >= 2) {
      return false; // Indique que l'ajout a échoué
    }
    
    const newGuest: Guest = {
      id: Date.now().toString(),
      name,
      tableNumber,
      phoneNumber,
      isVerified: false,
      createdAt: new Date()
    };
    const updatedGuests = [...guests, newGuest];
    saveToStorage(updatedGuests);
    return true; // Indique que l'ajout a réussi
  };

  const updateGuest = (id: string, name: string, tableNumber: string, phoneNumber: string) => {
    const updatedGuests = guests.map(guest => 
      guest.id === id ? { ...guest, name, tableNumber, phoneNumber } : guest
    );
    saveToStorage(updatedGuests);
  };

  const deleteGuest = (id: string) => {
    const updatedGuests = guests.filter(guest => guest.id !== id);
    saveToStorage(updatedGuests);
  };

  const verifyGuest = (id: string) => {
    const updatedGuests = guests.map(guest => 
      guest.id === id ? { ...guest, isVerified: !guest.isVerified } : guest
    );
    saveToStorage(updatedGuests);
  };

  return {
    guests,
    addGuest,
    updateGuest,
    deleteGuest,
    verifyGuest
  };
};
