
import React from 'react';
import { InvitationTemplate } from '@/types/template';
import { Guest, WeddingDetails } from '@/types/guest';

// Import all template components
import PinkElegantTemplate from './templates/PinkElegantTemplate';
import AfricaDayTemplate from './templates/AfricaDayTemplate';
import PhotoCircleTemplate from './templates/PhotoCircleTemplate';
import PhotoHeartTemplate from './templates/PhotoHeartTemplate';
import PhotoHexagonTemplate from './templates/PhotoHexagonTemplate';
import PhotoDiamondTemplate from './templates/PhotoDiamondTemplate';
import PhotoOvalTemplate from './templates/PhotoOvalTemplate';

interface InvitationTemplatesProps {
  template: InvitationTemplate;
  guest: Guest | null;
  weddingDetails: WeddingDetails;
  isPreview?: boolean;
}

const InvitationTemplates: React.FC<InvitationTemplatesProps> = ({
  template,
  guest,
  weddingDetails,
  isPreview = false
}) => {
  // Base invitation with consistent dimensions
  const BaseInvitation = ({ children }: { children: React.ReactNode }) => (
    <div className="w-[350px] h-[700px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white flex flex-col justify-between overflow-hidden">
      {children}
    </div>
  );

  // Default template content
  const DefaultTemplate = () => (
    <BaseInvitation>
      <div className="text-center pt-16 px-6">
        <div className="mb-8">
          {weddingDetails.couplePhotoUrl ? (
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
              <img src={weddingDetails.couplePhotoUrl} alt="Couple" className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-32 h-32 mx-auto rounded-full bg-yellow-400 flex items-center justify-center text-4xl">
              💑
            </div>
          )}
        </div>
        
        <h1 className="text-3xl font-bold mb-2">{weddingDetails.groomName}</h1>
        <div className="text-xl font-light mb-2">&</div>
        <h1 className="text-3xl font-bold mb-8">{weddingDetails.brideName}</h1>
        
        <div className="mb-6">
          <div className="text-lg mb-2">{weddingDetails.weddingDate}</div>
          <div className="text-base">{weddingDetails.ceremonyTime}</div>
        </div>
        
        <div className="mb-8">
          <div className="text-base font-medium">{weddingDetails.venue}</div>
          <div className="text-sm">{weddingDetails.venueLocation}</div>
        </div>
        
        {guest && (
          <div className="bg-yellow-400 text-slate-900 rounded-lg px-4 py-3 mb-6">
            <div className="font-semibold">{guest.name}</div>
            <div className="text-sm">Table {guest.tableNumber}</div>
          </div>
        )}
      </div>
      
      <div className="text-center pb-8 px-6">
        <div className="text-sm">{weddingDetails.websiteUrl}</div>
      </div>
    </BaseInvitation>
  );

  // Render specific template based on selection
  switch (template) {
    case 'pink-elegant':
      return <PinkElegantTemplate guest={guest} weddingDetails={weddingDetails} isPreview={isPreview} />;
    case 'africa-day':
      return <AfricaDayTemplate guest={guest} weddingDetails={weddingDetails} isPreview={isPreview} />;
    case 'photo-circle':
      return <PhotoCircleTemplate guest={guest} weddingDetails={weddingDetails} isPreview={isPreview} />;
    case 'photo-heart':
      return <PhotoHeartTemplate guest={guest} weddingDetails={weddingDetails} isPreview={isPreview} />;
    case 'photo-hexagon':
      return <PhotoHexagonTemplate guest={guest} weddingDetails={weddingDetails} isPreview={isPreview} />;
    case 'photo-diamond':
      return <PhotoDiamondTemplate guest={guest} weddingDetails={weddingDetails} isPreview={isPreview} />;
    case 'photo-oval':
      return <PhotoOvalTemplate guest={guest} weddingDetails={weddingDetails} isPreview={isPreview} />;
    default:
      return <DefaultTemplate />;
  }
};

export default InvitationTemplates;
