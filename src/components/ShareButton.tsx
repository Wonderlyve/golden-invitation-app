
import React from 'react';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { Guest } from '@/types/guest';
import { useWeddingDetails } from '@/hooks/useWeddingDetails';

interface ShareButtonProps {
  guest: Guest;
  onShare?: () => void;
}

const ShareButton: React.FC<ShareButtonProps> = ({ guest, onShare }) => {
  const { weddingDetails } = useWeddingDetails();

  const handleShare = () => {
    // Get current domain for the invitation link
    const currentDomain = window.location.origin;
    const invitationLink = `${currentDomain}/invitation?name=${encodeURIComponent(guest.name)}&table=${encodeURIComponent(guest.tableNumber)}`;
    
    // Create a personalized WhatsApp message with all invitation details
    const message = `🎉 *Invitation de mariage*

✨ Bonjour ${guest.name} !

Vous êtes officiellement invité(e) au mariage de ${weddingDetails.groomName} & ${weddingDetails.brideName}

📅 *${weddingDetails.weddingDate} à ${weddingDetails.ceremonyTime}*
📍 *${weddingDetails.venue}, ${weddingDetails.venueLocation}*
🪑 *Table ${guest.tableNumber}*

👆 *Cliquez sur ce lien pour voir et télécharger votre invitation personnalisée :*
${invitationLink}

Nous avons hâte de célébrer avec vous ! 💕`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    
    console.log('Generated invitation link:', invitationLink);
    console.log('WhatsApp message:', message);
    
    // Open WhatsApp with the personalized message
    window.open(whatsappUrl, '_blank');
    
    onShare?.();
  };

  return (
    <Button
      onClick={handleShare}
      variant="outline"
      size="sm"
      className="gap-2 share-button-hidden"
    >
      <Share2 className="h-4 w-4" />
      Partager
    </Button>
  );
};

export default ShareButton;
