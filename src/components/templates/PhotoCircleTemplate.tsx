
import React from 'react';
import { Guest, WeddingDetails } from '@/types/guest';

interface PhotoCircleTemplateProps {
  guest: Guest | null;
  weddingDetails: WeddingDetails;
  isPreview?: boolean;
}

const PhotoCircleTemplate: React.FC<PhotoCircleTemplateProps> = ({ 
  guest, 
  weddingDetails,
  isPreview = false 
}) => {
  return (
    <div 
      id="invitation-container"
      className="w-[350px] h-[700px] relative bg-gradient-to-br from-rose-100 to-pink-200 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, #f472b6 0%, transparent 50%), radial-gradient(circle at 80% 80%, #ec4899 0%, transparent 50%)'
        }}></div>
      </div>

      {/* Large Circular Photo */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 p-2 shadow-2xl">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            {weddingDetails.couplePhotoUrl ? (
              <img 
                src={weddingDetails.couplePhotoUrl} 
                alt="Couple"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-6xl">💕</div>
            )}
          </div>
        </div>
      </div>

      {/* Names */}
      <div className="absolute top-80 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-2xl font-serif text-rose-800 mb-2">
          {weddingDetails.groomName}
        </h1>
        <div className="text-lg text-rose-600 font-light mb-2">&</div>
        <h1 className="text-2xl font-serif text-rose-800">
          {weddingDetails.brideName}
        </h1>
      </div>

      {/* Wedding Details */}
      <div className="absolute top-[420px] left-1/2 transform -translate-x-1/2 text-center px-6">
        <div className="text-base text-rose-700 mb-2 font-medium">
          {weddingDetails.weddingDate} à {weddingDetails.ceremonyTime}
        </div>
        <div className="text-sm text-rose-600">
          {weddingDetails.venue}
        </div>
        <div className="text-sm text-rose-500 mt-1">
          {weddingDetails.venueLocation}
        </div>
      </div>

      {/* Guest Info */}
      {guest && (
        <div className="absolute top-[520px] left-1/2 transform -translate-x-1/2 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-rose-200">
            <div className="text-base font-medium text-rose-800">
              {guest.name}
            </div>
            <div className="text-sm text-rose-600">
              Table {guest.tableNumber}
            </div>
          </div>
        </div>
      )}

      {/* Website */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-sm text-rose-600">
          {weddingDetails.websiteUrl}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-16 left-8 text-rose-300 text-xl opacity-60">🌸</div>
      <div className="absolute top-20 right-8 text-pink-300 text-lg opacity-50">✨</div>
      <div className="absolute bottom-32 left-6 text-rose-400 text-2xl opacity-40">🌹</div>
      <div className="absolute bottom-28 right-6 text-pink-400 text-xl opacity-50">💐</div>
    </div>
  );
};

export default PhotoCircleTemplate;
