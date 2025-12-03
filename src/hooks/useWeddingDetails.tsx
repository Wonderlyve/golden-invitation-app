import { useState, useEffect } from 'react';
import { WeddingDetails } from '@/types/guest';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

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
  rsvpPhoneNumber: '',
  template: 'modern'
};

export const useWeddingDetails = () => {
  const [weddingDetails, setWeddingDetails] = useState<WeddingDetails>(defaultWeddingDetails);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      if (data.user) {
        fetchWeddingDetails();
      } else {
        loadFromLocalStorage();
      }
    });
  }, []);

  const loadFromLocalStorage = () => {
    const savedDetails = localStorage.getItem(STORAGE_KEY);
    if (savedDetails) {
      try {
        const parsed = JSON.parse(savedDetails);
        if (parsed.template === 'winter') {
          parsed.template = 'modern';
        }
        setWeddingDetails(parsed);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      } catch (error) {
        console.error('Error parsing wedding details:', error);
      }
    }
  };

  const fetchWeddingDetails = async () => {
    const { data, error } = await (supabase
      .from('wedding_details' as any)
      .select('*')
      .maybeSingle() as any);

    if (error) {
      console.error('Error fetching wedding details:', error);
      return;
    }

    if (data) {
      const details: WeddingDetails = {
        groomName: data.groom_name,
        brideName: data.bride_name,
        ceremonyTime: data.ceremony_time,
        weddingDate: data.wedding_date,
        venue: data.venue,
        venueLocation: data.venue_location,
        websiteUrl: data.website_url,
        couplePhotoUrl: data.couple_photo_url || '',
        invitationText: data.invitation_text,
        rsvpPhoneNumber: data.rsvp_phone_number,
        template: data.template as any
      };
      setWeddingDetails(details);
    } else {
      await updateWeddingDetails(defaultWeddingDetails);
    }
  };

  const updateWeddingDetails = async (details: WeddingDetails) => {
    setWeddingDetails(details);

    if (user) {
      const { error } = await (supabase
        .from('wedding_details' as any)
        .upsert({
          user_id: user.id,
          groom_name: details.groomName,
          bride_name: details.brideName,
          ceremony_time: details.ceremonyTime,
          wedding_date: details.weddingDate,
          venue: details.venue,
          venue_location: details.venueLocation,
          website_url: details.websiteUrl,
          couple_photo_url: details.couplePhotoUrl,
          invitation_text: details.invitationText,
          rsvp_phone_number: details.rsvpPhoneNumber,
          template: details.template
        }) as any);

      if (error) {
        console.error('Error updating wedding details:', error);
        toast.error('Erreur lors de la mise à jour');
        return;
      }
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(details));
    }
  };

  return {
    weddingDetails,
    updateWeddingDetails
  };
};
