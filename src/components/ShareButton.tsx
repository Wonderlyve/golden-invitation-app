
import React, { useState } from 'react';
import { Share2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Guest } from '@/types/guest';
import { shareToWhatsApp, generateInvitationImage } from '@/utils/shareUtils';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonProps {
  guest: Guest;
}

const ShareButton: React.FC<ShareButtonProps> = ({ guest }) => {
  const [isSharing, setIsSharing] = useState(false);
  const { toast } = useToast();

  const handleShare = async () => {
    setIsSharing(true);
    
    try {
      console.log('Sharing invitation for:', guest.name, 'Table:', guest.tableNumber);
      
      // Generate the invitation image with current state
      const imageBlob = await generateInvitationImage('invitation-container');
      
      await shareToWhatsApp(guest.name, guest.tableNumber, imageBlob);
      
      toast({
        title: "Invitation prête à partager",
        description: `L'invitation pour ${guest.name} a été générée et partagée`,
      });
    } catch (error) {
      console.error('Erreur lors du partage:', error);
      toast({
        title: "Erreur",
        description: "Impossible de partager l'invitation. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <Button
      onClick={handleShare}
      disabled={isSharing}
      className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 text-xs"
      size="sm"
    >
      {isSharing ? (
        <>
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          Génération...
        </>
      ) : (
        <>
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </>
      )}
    </Button>
  );
};

export default ShareButton;
