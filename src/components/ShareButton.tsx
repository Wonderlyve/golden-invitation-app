
import React from 'react';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { Guest } from '@/types/guest';

interface ShareButtonProps {
  guest: Guest;
  onShare?: () => void;
}

const ShareButton: React.FC<ShareButtonProps> = ({ guest, onShare }) => {
  const handleShare = () => {
    const shareText = `Invitation de mariage pour ${guest.name} - Table ${guest.tableNumber}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Invitation de mariage',
        text: shareText,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback pour les navigateurs qui ne supportent pas l'API Share
      navigator.clipboard.writeText(`${shareText} - ${window.location.href}`);
    }
    
    onShare?.();
  };

  return (
    <Button
      onClick={handleShare}
      variant="outline"
      size="sm"
      className="gap-2"
    >
      <Share2 className="h-4 w-4" />
      Partager
    </Button>
  );
};

export default ShareButton;
