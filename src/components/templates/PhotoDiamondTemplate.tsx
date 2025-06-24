
import React from 'react';
import { Guest, WeddingDetails } from '@/types/guest';

interface PhotoDiamondTemplateProps {
  guest: Guest | null;
  weddingDetails: WeddingDetails;
  isPreview?: boolean;
}

const PhotoDiamondTemplate: React.FC<PhotoDiamondTemplateProps> = ({ 
  guest, 
  weddingDetails,
  isPreview = false 
}) => {
  return (
    <div 
      id="invitation-container"
      className="w-[350px] h-[700px] relative bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden"
    >
      {/* Diamond Photo */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
        <div className="relative w-44 h-44">
          <div 
            className="w-full h-full bg-gradient-to-br from-purple-300 to-pink-400 shadow-2xl flex items-center justify-center overflow-hidden transform rotate-45"
          >
            {weddingDetails.couplePhotoUrl ? (
              <img 
                src={weddingDetails.couplePhotoUrl} 
                alt="Couple"
                className="w-full h-full object-cover transform -rotate-45 scale-150"
              />
            ) : (
              <div className="text-4xl text-white transform -rotate-45">💎</div>
            )}
          </div>
        </div>
      </div>

      {/* Sparkle Effects */}
      <div className="absolute top-12 left-8 text-purple-300 text-lg opacity-60">✨</div>
      <div className="absolute top-16 right-6 text-pink-300 text-sm opacity-70">⭐</div>
      <div className="absolute top-36 left-4 text-purple-400 text-xs opacity-50">💫</div>
      <div className="absolute top-40 right-8 text-pink-400 text-lg opacity-60">✨</div>

      {/* Names */}
      <div className="absolute top-76 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-2xl font-serif text-purple-800 mb-2 italic">
          {weddingDetails.groomName}
        </h1>
        <div className="text-lg text-purple-600 font-light mb-2">💎</div>
        <h1 className="text-2xl font-serif text-purple-800 italic">
          {weddingDetails.brideName}
        </h1>
      </div>

      {/* Elegant Divider */}
      <div className="absolute top-[340px] left-1/2 transform -translate-x-1/2">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full mx-auto -mt-1"></div>
      </div>

      {/* Wedding Details */}
      <div className="absolute top-[380px] left-1/2 transform -translate-x-1/2 text-center px-6">
        <div className="text-base text-purple-700 mb-2 font-medium">
          {weddingDetails.weddingDate}
        </div>
        <div className="text-sm text-purple-600 mb-3">
          {weddingDetails.ceremonyTime}
        </div>
        <div className="text-sm text-purple-600">
          {weddingDetails.venue}
        </div>
        <div className="text-sm text-purple-500 mt-1">
          {weddingDetails.venueLocation}
        </div>
      </div>

      {/* Guest Info */}
      {guest && (
        <div className="absolute top-[520px] left-1/2 transform -translate-x-1/2 text-center">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg border border-purple-200">
            <div className="text-base font-medium text-purple-800">
              {guest.name}
            </div>
            <div className="text-sm text-purple-600">
              Table {guest.tableNumber}
            </div>
          </div>
        </div>
      )}

      {/* Website */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-sm text-purple-600">
          {weddingDetails.websiteUrl}
        </div>
      </div>

      {/* Bottom Sparkles */}
      <div className="absolute bottom-32 left-6 text-purple-300 text-xl opacity-40">✨</div>
      <div className="absolute bottom-28 right-4 text-pink-300 text-lg opacity-50">💎</div>
      <div className="absolute bottom-24 left-12 text-purple-400 text-sm opacity-30">⭐</div>
    </div>
  );
};

export default PhotoDiamondTemplate;
