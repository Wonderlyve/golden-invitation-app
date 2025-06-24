
import React from 'react';
import { Guest, WeddingDetails } from '@/types/guest';

interface AfricaDayTemplateProps {
  guest: Guest | null;
  weddingDetails: WeddingDetails;
  isPreview?: boolean;
}

const AfricaDayTemplate: React.FC<AfricaDayTemplateProps> = ({ 
  guest, 
  weddingDetails,
  isPreview = false 
}) => {
  return (
    <div 
      id="invitation-container"
      className="w-[350px] h-[700px] relative bg-gradient-to-b from-yellow-400 via-orange-300 to-red-400 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f59e0b 0%, #fb923c 30%, #f97316 60%, #dc2626 100%)'
      }}
    >
      {/* Decorative Pattern Top */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-red-600 to-orange-600 opacity-80">
        <div className="w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.1) 5px, rgba(255,255,255,0.1) 10px)'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-4">
        <div className="w-8 h-8 bg-green-500 rounded-full opacity-70"></div>
      </div>
      <div className="absolute top-12 right-6">
        <div className="w-6 h-6 bg-yellow-300 rotate-45 opacity-80"></div>
      </div>
      
      {/* Leaves decoration */}
      <div className="absolute top-16 right-4 text-green-600 text-2xl opacity-70">🌿</div>
      <div className="absolute top-20 left-8 text-green-500 text-xl opacity-60">🍃</div>

      {/* Photo Circle */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-orange-200 to-red-300 p-1 shadow-2xl">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            {weddingDetails.couplePhotoUrl ? (
              <img 
                src={weddingDetails.couplePhotoUrl} 
                alt="Couple"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-4xl">💑</div>
            )}
          </div>
        </div>
      </div>

      {/* Event Title */}
      <div className="absolute top-80 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-2xl font-bold text-white mb-2 drop-shadow-lg tracking-wide">
          MARIAGE
        </h1>
        <div className="text-lg font-semibold text-orange-100 drop-shadow-md">
          FESTIVAL
        </div>
      </div>

      {/* Date and Time */}
      <div className="absolute top-96 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-lg font-bold text-white mb-1 drop-shadow-lg">
          {weddingDetails.weddingDate} - {weddingDetails.ceremonyTime}
        </div>
        <div className="text-base text-orange-100 drop-shadow-md">
          {weddingDetails.groomName} • {weddingDetails.brideName}
        </div>
      </div>

      {/* Venue */}
      <div className="absolute top-[450px] left-1/2 transform -translate-x-1/2 text-center px-6">
        <div className="text-sm text-white drop-shadow-lg font-medium">
          {weddingDetails.venue}
        </div>
        <div className="text-xs text-orange-100 mt-1 drop-shadow-md">
          {weddingDetails.venueLocation}
        </div>
      </div>

      {/* Guest Info */}
      {guest && (
        <div className="absolute top-[500px] left-1/2 transform -translate-x-1/2 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
            <div className="text-base font-semibold text-gray-800">
              {guest.name}
            </div>
            <div className="text-sm text-gray-600">
              Table {guest.tableNumber}
            </div>
          </div>
        </div>
      )}

      {/* Website */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-xs text-white drop-shadow-lg">
          {weddingDetails.websiteUrl}
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-4 left-4 text-yellow-300 text-xl opacity-70">🌟</div>
      <div className="absolute bottom-8 right-6 text-orange-300 text-lg opacity-60">🎉</div>
      
      {/* Social Media Icons */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-3">
        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
          <div className="text-xs text-white">f</div>
        </div>
        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
          <div className="text-xs text-white">@</div>
        </div>
        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
          <div className="text-xs text-white">in</div>
        </div>
      </div>
    </div>
  );
};

export default AfricaDayTemplate;
