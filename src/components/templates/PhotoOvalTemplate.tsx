
import React from 'react';
import { Guest, WeddingDetails } from '@/types/guest';

interface PhotoOvalTemplateProps {
  guest: Guest | null;
  weddingDetails: WeddingDetails;
  isPreview?: boolean;
}

const PhotoOvalTemplate: React.FC<PhotoOvalTemplateProps> = ({ 
  guest, 
  weddingDetails,
  isPreview = false 
}) => {
  return (
    <div 
      id="invitation-container"
      className="w-[350px] h-[700px] relative bg-gradient-to-b from-emerald-50 to-teal-100 overflow-hidden"
    >
      {/* Oval Photo */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
        <div className="w-52 h-36 rounded-full bg-gradient-to-br from-emerald-300 to-teal-400 p-2 shadow-2xl">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            {weddingDetails.couplePhotoUrl ? (
              <img 
                src={weddingDetails.couplePhotoUrl} 
                alt="Couple"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-4xl">👰🤵</div>
            )}
          </div>
        </div>
      </div>

      {/* Elegant Border Frame */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-60 h-44 rounded-full border-2 border-emerald-200 opacity-50"></div>

      {/* Names with Elegant Typography */}
      <div className="absolute top-64 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-3xl font-serif text-emerald-800 mb-2 tracking-wide">
          {weddingDetails.groomName}
        </h1>
        <div className="flex items-center justify-center mb-2">
          <div className="w-8 h-px bg-emerald-400"></div>
          <span className="mx-3 text-emerald-600 text-lg">𝒶𝓃𝒹</span>
          <div className="w-8 h-px bg-emerald-400"></div>
        </div>
        <h1 className="text-3xl font-serif text-emerald-800 tracking-wide">
          {weddingDetails.brideName}
        </h1>
      </div>

      {/* Wedding Details in Elegant Box */}
      <div className="absolute top-[380px] left-1/2 transform -translate-x-1/2 text-center px-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-200">
          <div className="text-lg text-emerald-700 mb-2 font-medium">
            {weddingDetails.weddingDate}
          </div>
          <div className="text-base text-emerald-600 mb-3">
            {weddingDetails.ceremonyTime}
          </div>
          <div className="w-12 h-px bg-emerald-300 mx-auto mb-3"></div>
          <div className="text-sm text-emerald-600">
            {weddingDetails.venue}
          </div>
          <div className="text-sm text-emerald-500 mt-1">
            {weddingDetails.venueLocation}
          </div>
        </div>
      </div>

      {/* Guest Info */}
      {guest && (
        <div className="absolute top-[560px] left-1/2 transform -translate-x-1/2 text-center">
          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-8 py-3 shadow-lg border border-emerald-200">
            <div className="text-base font-medium text-emerald-800">
              {guest.name}
            </div>
            <div className="text-sm text-emerald-600">
              Table {guest.tableNumber}
            </div>
          </div>
        </div>
      )}

      {/* Website */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-sm text-emerald-600 italic">
          {weddingDetails.websiteUrl}
        </div>
      </div>

      {/* Nature Decorations */}
      <div className="absolute top-8 left-4 text-emerald-300 text-xl opacity-60">🌿</div>
      <div className="absolute top-12 right-6 text-teal-300 text-lg opacity-50">🍃</div>
      <div className="absolute bottom-32 left-8 text-emerald-400 text-2xl opacity-40">🌱</div>
      <div className="absolute bottom-28 right-4 text-teal-400 text-xl opacity-50">🌿</div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, #10b981 20px, #10b981 21px)'
        }}></div>
      </div>
    </div>
  );
};

export default PhotoOvalTemplate;
