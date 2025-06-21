
import React, { useState } from 'react';
import { MessageCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Guest } from '@/types/guest';
import { generateInvitationImage, shareToWhatsApp } from '@/utils/shareUtils';
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
      console.log('Génération de l\'image pour', guest.name);
      
      // Générer l'image de l'invitation
      const imageBlob = await generateInvitationImage();
      
      if (imageBlob) {
        console.log('Image générée avec succès, taille:', imageBlob.size);
        
        await shareToWhatsApp(guest.name, guest.tableNumber, imageBlob);
        
        toast({
          title: "Invitation partagée",
          description: `L'invitation pour ${guest.name} a été préparée. L'image a été téléchargée et WhatsApp s'ouvre.`,
        });
      } else {
        throw new Error('Impossible de générer l\'image');
      }
      
    } catch (error) {
      console.error('Erreur lors du partage:', error);
      
      // Fallback sans image
      await shareToWhatsApp(guest.name, guest.tableNumber);
      
      toast({
        title: "Invitation partagée",
        description: `L'invitation pour ${guest.name} a été partagée via WhatsApp (sans image).`,
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
          <Download className="w-3 h-3" />
          WhatsApp
        </>
      )}
    </Button>
  );
};

export default ShareButton;

