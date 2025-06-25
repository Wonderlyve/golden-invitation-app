
import React from 'react';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { Guest } from '@/types/guest';
import { shareToWhatsApp } from '@/utils/shareUtils';
import { useWeddingDetails } from '@/hooks/useWeddingDetails';

interface ShareButtonProps {
  guest: Guest;
  className?: string;
  showLabel?: boolean;
}

const ShareButton: React.FC<ShareButtonProps> = ({ 
  guest, 
  className = "",
  showLabel = false 
}) => {
  const { weddingDetails } = useWeddingDetails();

  const handleShare = () => {
    shareToWhatsApp(guest, weddingDetails);
  };

  return (
    <Button
      onClick={handleShare}
      variant="outline"
      className={className}
    >
      <Share2 className="w-4 h-4 text-green-600" />
      {showLabel && (
        <div className="text-left ml-2">
          <div className="font-medium">Partager sur WhatsApp</div>
          <div className="text-sm text-gray-500">Envoyer l'invitation</div>
        </div>
      )}
    </Button>
  );
};

export default ShareButton;
