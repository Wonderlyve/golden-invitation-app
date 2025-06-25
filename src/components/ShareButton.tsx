
import React from 'react';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { Guest } from '@/types/guest';
import { shareToWhatsApp } from '@/utils/shareUtils';

interface ShareButtonProps {
  guest: Guest;
  onComplete?: () => void;
}

const ShareButton: React.FC<ShareButtonProps> = ({ guest, onComplete }) => {
  const handleShare = async () => {
    await shareToWhatsApp(guest.name, guest.tableNumber);
    onComplete?.();
  };

  return (
    <Button
      onClick={handleShare}
      className="w-full flex items-center gap-3 bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-white p-4 h-auto"
    >
      <Share2 className="w-5 h-5" />
      <div className="text-left">
        <div className="font-medium">Partager sur WhatsApp</div>
        <div className="text-sm opacity-90">Envoyer l'invitation personnalisée</div>
      </div>
    </Button>
  );
};

export default ShareButton;
