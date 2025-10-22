import React from 'react';
import { Guest, WeddingDetails } from '@/types/guest';

interface InvitationPreviewProps {
  guest: Guest | null;
  weddingDetails: WeddingDetails;
  isPreview?: boolean;
  template?: string;
}

const InvitationPreview: React.FC<InvitationPreviewProps> = ({
  guest,
  weddingDetails,
  isPreview = false,
  template = 'winter'
}) => {
  return (
    <div className="w-full mx-auto" style={{ maxWidth: '540px', aspectRatio: '1080/1920' }}>
      <div className="relative w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Section haute - Image du couple (900px / 1920px = 46.875%) */}
        <div className="relative w-full" style={{ height: '46.875%' }}>
          {weddingDetails.couplePhotoUrl ? (
            <>
              <img
                src={weddingDetails.couplePhotoUrl}
                alt="Couple"
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
              {/* Dégradé de transition */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f5f1e8] to-transparent" />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-pink-200 via-rose-100 to-amber-50 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-sm">Image du couple</p>
                <p className="text-xs mt-1">1080 × 900 px</p>
              </div>
            </div>
          )}
        </div>

        {/* Section basse - Contenu texte (1020px / 1920px = 53.125%) */}
        <div 
          className="relative w-full px-5 py-3 flex flex-col gap-2"
          style={{ 
            height: '53.125%',
            backgroundColor: '#f5f1e8'
          }}
        >
          {/* En-tête avec noms des mariés */}
          <div className="text-center space-y-0.5">
            <h1 className="font-playfair text-2xl font-bold text-gray-800 leading-tight">
              {weddingDetails.groomName} & {weddingDetails.brideName}
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-600" />
              <span className="text-amber-600 text-base">❤</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-600" />
            </div>
          </div>

          {/* Nom de l'invité et table */}
          {guest && (
            <div className="text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-2.5 shadow-sm border border-amber-200/30">
                <p className="text-[10px] font-sans text-gray-600 mb-0.5">Invitation pour</p>
                <p className="font-cormorant text-lg font-semibold text-gray-800 leading-tight">
                  {guest.name}
                </p>
                {guest.tableNumber && (
                  <p className="text-[10px] font-sans text-gray-600 mt-0.5">
                    Table <span className="font-semibold text-amber-700">{guest.tableNumber}</span>
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Texte d'invitation */}
          <div className="text-center">
            <p className="font-sans text-[11px] text-gray-700 leading-snug italic px-2">
              {weddingDetails.invitationText}
            </p>
          </div>

          {/* Date et lieu */}
          <div className="text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-2.5 shadow-sm border border-amber-200/30">
              <p className="font-cormorant text-base font-semibold text-gray-800 leading-tight">
                {weddingDetails.weddingDate}
              </p>
              <p className="font-sans text-[11px] text-gray-600 mt-0.5">
                {weddingDetails.ceremonyTime}
              </p>
              <div className="mt-1.5 pt-1.5 border-t border-amber-200/30">
                <p className="font-sans text-xs font-medium text-gray-800 leading-tight">
                  {weddingDetails.venue}
                </p>
                <p className="font-sans text-[10px] text-gray-600 mt-0.5 leading-tight">
                  {weddingDetails.venueLocation}
                </p>
              </div>
            </div>
          </div>

          {/* Site web */}
          {weddingDetails.websiteUrl && (
            <div className="text-center">
              <p className="font-sans text-[9px] text-gray-500">
                {weddingDetails.websiteUrl}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvitationPreview;
