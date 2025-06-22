
import React, { useState } from 'react';
import { Share2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Guest } from '@/types/guest';
import { shareToWhatsApp } from '@/utils/shareUtils';
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
      
      await shareToWhatsApp(guest.name, guest.tableNumber);
      
      toast({
        title: "Invitation prête à partager",
        description: `Le lien d'invitation pour ${guest.name} a été ouvert dans WhatsApp`,
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
          Partage...
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
