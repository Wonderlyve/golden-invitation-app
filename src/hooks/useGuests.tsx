import { useState, useEffect } from 'react';
import { Guest } from '@/types/guest';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const STORAGE_KEY = 'wedding-guests';

export const useGuests = () => {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check if user is authenticated
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      if (data.user) {
        fetchGuests();
      } else {
        loadFromLocalStorage();
      }
    });
  }, []);

  const loadFromLocalStorage = () => {
    const savedGuests = localStorage.getItem(STORAGE_KEY);
    if (savedGuests) {
      const parsedGuests = JSON.parse(savedGuests).map((guest: any) => ({
        ...guest,
        phoneNumber: guest.phoneNumber || '',
        createdAt: new Date(guest.createdAt)
      }));
      setGuests(parsedGuests);
    }
  };

  const fetchGuests = async () => {
    const { data, error } = await (supabase
      .from('guests' as any)
      .select('*')
      .order('created_at', { ascending: false }) as any);

    if (error) {
      console.error('Error fetching guests:', error);
      return;
    }

    if (data) {
      const mappedGuests: Guest[] = data.map((guest: any) => ({
        id: guest.id,
        name: guest.name,
        tableNumber: guest.table_number,
        phoneNumber: guest.phone_number || '',
        isVerified: guest.is_verified,
        createdAt: new Date(guest.created_at)
      }));
      setGuests(mappedGuests);
    }
  };

  const saveToStorage = (updatedGuests: Guest[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedGuests));
    setGuests(updatedGuests);
  };

  const addGuest = async (name: string, tableNumber: string, phoneNumber: string) => {
    if (guests.length >= 2) {
      return false;
    }

    if (user) {
      const { error } = await (supabase
        .from('guests' as any)
        .insert([{
          user_id: user.id,
          name,
          table_number: tableNumber,
          phone_number: phoneNumber,
          is_verified: false
        }]) as any);

      if (error) {
        console.error('Error adding guest:', error);
        toast.error('Erreur lors de l\'ajout de l\'invité');
        return false;
      }

      await fetchGuests();
      return true;
    } else {
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
      return true;
    }
  };

  const updateGuest = async (id: string, name: string, tableNumber: string, phoneNumber: string) => {
    if (user) {
      const { error } = await (supabase
        .from('guests' as any)
        .update({
          name,
          table_number: tableNumber,
          phone_number: phoneNumber
        })
        .eq('id', id) as any);

      if (error) {
        console.error('Error updating guest:', error);
        toast.error('Erreur lors de la mise à jour');
        return;
      }

      await fetchGuests();
    } else {
      const updatedGuests = guests.map(guest => 
        guest.id === id ? { ...guest, name, tableNumber, phoneNumber } : guest
      );
      saveToStorage(updatedGuests);
    }
  };

  const deleteGuest = async (id: string) => {
    if (user) {
      const { error } = await (supabase
        .from('guests' as any)
        .delete()
        .eq('id', id) as any);

      if (error) {
        console.error('Error deleting guest:', error);
        toast.error('Erreur lors de la suppression');
        return;
      }

      await fetchGuests();
    } else {
      const updatedGuests = guests.filter(guest => guest.id !== id);
      saveToStorage(updatedGuests);
    }
  };

  const verifyGuest = async (id: string) => {
    if (user) {
      const guest = guests.find(g => g.id === id);
      if (!guest) return;

      const { error } = await (supabase
        .from('guests' as any)
        .update({ is_verified: !guest.isVerified })
        .eq('id', id) as any);

      if (error) {
        console.error('Error verifying guest:', error);
        toast.error('Erreur lors de la vérification');
        return;
      }

      await fetchGuests();
    } else {
      const updatedGuests = guests.map(guest => 
        guest.id === id ? { ...guest, isVerified: !guest.isVerified } : guest
      );
      saveToStorage(updatedGuests);
    }
  };

  return {
    guests,
    addGuest,
    updateGuest,
    deleteGuest,
    verifyGuest
  };
};
