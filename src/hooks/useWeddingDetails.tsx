import { useState, useEffect } from 'react';
import { WeddingDetails } from '@/types/guest';

const STORAGE_KEY = 'wedding-details';

const defaultWeddingDetails: WeddingDetails = {
  groomName: 'Jack',
  brideName: 'Sofia',
  ceremonyTime: '10AM',
  weddingDate: '22ᵀᴴ OCT',
  venue: 'Sheraton Kauai Resort',
  venueLocation: 'Hawaii',
  websiteUrl: 'www.jackandsofia.com',
  couplePhotoUrl: '',
  invitationText: 'Nous avons l\'honneur de vous inviter à célébrer notre union dans un cadre magique. Votre présence illuminera cette journée exceptionnelle.',
  template: 'winter'
};

export const useWeddingDetails = () => {
  const [weddingDetails, setWeddingDetails] = useState<WeddingDetails>(defaultWeddingDetails);

  useEffect(() => {
    const savedDetails = localStorage.getItem(STORAGE_KEY);
    if (savedDetails) {
      try {
        const parsed = JSON.parse(savedDetails);
        setWeddingDetails(parsed);
      } catch (error) {
        console.error('Error parsing wedding details:', error);
      }
    }
  }, []);

  const updateWeddingDetails = (details: WeddingDetails) => {
    setWeddingDetails(details);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(details));
  };

  return {
    weddingDetails,
    updateWeddingDetails
  };
};
