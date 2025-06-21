
// Ce fichier est remplacé par InvitationTemplates.tsx
// Gardé pour compatibilité temporaire
import React from 'react';
import InvitationTemplates from './InvitationTemplates';
import { Guest, WeddingDetails } from '@/types/guest';

interface WeddingInvitationProps {
  guest: Guest | null;
  weddingDetails: WeddingDetails;
  isPreview?: boolean;
}

const WeddingInvitation: React.FC<WeddingInvitationProps> = ({ 
  guest, 
  weddingDetails,
  isPreview = false 
}) => {
  return (
    <InvitationTemplates
      template={weddingDetails.template}
      guest={guest}
      weddingDetails={weddingDetails}
      isPreview={isPreview}
    />
  );
};

export default WeddingInvitation;
