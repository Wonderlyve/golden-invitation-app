
import React from 'react';
import { Guest, WeddingDetails } from '@/types/guest';

interface PhotoHeartTemplateProps {
  guest: Guest | null;
  weddingDetails: WeddingDetails;
  isPreview?: boolean;
}

const PhotoHeartTemplate: React.FC<PhotoHeartTemplateProps> = ({ 
  guest, 
  weddingDetails,
  isPreview = false 
}) => {
  return (
    <div 
      id="invitation-container"
      className="w-[350px] h-[700px] relative bg-gradient-to-b from-red-50 to-pink-100 overflow-hidden"
    >
      {/* Heart-shaped Photo Container */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
        <div className="relative w-44 h-40">
          <div 
            className="w-full h-full bg-gradient-to-br from-red-300 to-pink-400 shadow-2xl flex items-center justify-center overflow-hidden"
            style={{
              clipPath: 'path("M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5 C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3 C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z")',
              transform: 'scale(6)'
            }}
          >
            {weddingDetails.couplePhotoUrl ? (
              <img 
                src={weddingDetails.couplePhotoUrl} 
                alt="Couple"
                className="w-full h-full object-cover"
                style={{
                  clipPath: 'path("M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5 C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3 C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z")',
                  transform: 'scale(6)'
                }}
              />
            ) : (
              <div className="text-4xl text-white">💖</div>
            )}
          </div>
        </div>
      </div>

      {/* Names */}
      <div className="absolute top-72 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-3xl font-serif text-red-800 mb-3 tracking-wide">
          {weddingDetails.groomName}
        </h1>
        <div className="text-xl text-red-600 font-light mb-3">❤️</div>
        <h1 className="text-3xl font-serif text-red-800 tracking-wide">
          {weddingDetails.brideName}
        </h1>
      </div>

      {/* Wedding Details */}
      <div className="absolute top-[420px] left-1/2 transform -translate-x-1/2 text-center px-6">
        <div className="text-lg text-red-700 mb-2 font-medium">
          {weddingDetails.weddingDate}
        </div>
        <div className="text-base text-red-600 mb-2">
          {weddingDetails.ceremonyTime}
        </div>
        <div className="text-sm text-red-600">
          {weddingDetails.venue}
        </div>
        <div className="text-sm text-red-500 mt-1">
          {weddingDetails.venueLocation}
        </div>
      </div>

      {/* Guest Info */}
      {guest && (
        <div className="absolute top-[540px] left-1/2 transform -translate-x-1/2 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg border border-red-200">
            <div className="text-base font-medium text-red-800">
              {guest.name}
            </div>
            <div className="text-sm text-red-600">
              Table {guest.tableNumber}
            </div>
          </div>
        </div>
      )}

      {/* Website */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-sm text-red-600">
          {weddingDetails.websiteUrl}
        </div>
      </div>

      {/* Decorative Hearts */}
      <div className="absolute top-12 left-4 text-red-300 text-lg opacity-60">💕</div>
      <div className="absolute top-16 right-6 text-pink-300 text-sm opacity-50">💝</div>
      <div className="absolute bottom-32 left-8 text-red-400 text-xl opacity-40">💗</div>
      <div className="absolute bottom-24 right-4 text-pink-400 text-lg opacity-50">💘</div>
    </div>
  );
};

export default PhotoHeartTemplate;
