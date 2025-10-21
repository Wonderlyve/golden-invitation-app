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
          className="relative w-full px-8 py-6 flex flex-col justify-between"
          style={{ 
            height: '53.125%',
            backgroundColor: '#f5f1e8'
          }}
        >
          {/* En-tête avec noms des mariés */}
          <div className="text-center space-y-2">
            <h1 className="font-playfair text-3xl font-bold text-gray-800">
              {weddingDetails.groomName} & {weddingDetails.brideName}
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-600" />
              <span className="text-amber-600 text-xl">❤</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-600" />
            </div>
          </div>

          {/* Nom de l'invité et table */}
          {guest && (
            <div className="text-center space-y-3 my-4">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-amber-200/30">
                <p className="text-sm font-sans text-gray-600 mb-1">Invitation pour</p>
                <p className="font-cormorant text-2xl font-semibold text-gray-800">
                  {guest.name}
                </p>
                {guest.tableNumber && (
                  <p className="text-sm font-sans text-gray-600 mt-2">
                    Table <span className="font-semibold text-amber-700">{guest.tableNumber}</span>
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Texte d'invitation */}
          <div className="text-center">
            <p className="font-sans text-sm text-gray-700 leading-relaxed italic">
              {weddingDetails.invitationText}
            </p>
          </div>

          {/* Date et lieu */}
          <div className="text-center space-y-2">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-amber-200/30">
              <p className="font-cormorant text-xl font-semibold text-gray-800">
                {weddingDetails.weddingDate}
              </p>
              <p className="font-sans text-sm text-gray-600 mt-1">
                {weddingDetails.ceremonyTime}
              </p>
              <div className="mt-3 pt-3 border-t border-amber-200/30">
                <p className="font-sans text-sm font-medium text-gray-800">
                  {weddingDetails.venue}
                </p>
                <p className="font-sans text-xs text-gray-600 mt-1">
                  {weddingDetails.venueLocation}
                </p>
              </div>
            </div>
          </div>

          {/* Site web */}
          {weddingDetails.websiteUrl && (
            <div className="text-center">
              <p className="font-sans text-xs text-gray-500">
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
