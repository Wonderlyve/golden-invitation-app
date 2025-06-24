
import React from 'react';
import { Guest, WeddingDetails } from '@/types/guest';

interface PhotoHexagonTemplateProps {
  guest: Guest | null;
  weddingDetails: WeddingDetails;
  isPreview?: boolean;
}

const PhotoHexagonTemplate: React.FC<PhotoHexagonTemplateProps> = ({ 
  guest, 
  weddingDetails,
  isPreview = false 
}) => {
  return (
    <div 
      id="invitation-container"
      className="w-[350px] h-[700px] relative bg-gradient-to-br from-slate-100 to-blue-100 overflow-hidden"
    >
      {/* Hexagonal Photo */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
        <div className="relative w-48 h-48">
          <div 
            className="w-full h-full bg-gradient-to-br from-blue-300 to-indigo-400 shadow-2xl flex items-center justify-center overflow-hidden"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
          >
            {weddingDetails.couplePhotoUrl ? (
              <img 
                src={weddingDetails.couplePhotoUrl} 
                alt="Couple"
                className="w-full h-full object-cover"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                }}
              />
            ) : (
              <div className="text-5xl text-white">👫</div>
            )}
          </div>
        </div>
      </div>

      {/* Geometric Decorations */}
      <div className="absolute top-16 left-6">
        <div 
          className="w-8 h-8 bg-blue-200 opacity-60"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        ></div>
      </div>
      <div className="absolute top-20 right-8">
        <div 
          className="w-6 h-6 bg-indigo-300 opacity-50"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        ></div>
      </div>

      {/* Names */}
      <div className="absolute top-80 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-2 tracking-wider">
          {weddingDetails.groomName}
        </h1>
        <div className="w-16 h-px bg-blue-400 mx-auto mb-2"></div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-wider">
          {weddingDetails.brideName}
        </h1>
      </div>

      {/* Wedding Details */}
      <div className="absolute top-[420px] left-1/2 transform -translate-x-1/2 text-center px-6">
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-blue-200">
          <div className="text-base text-slate-700 mb-2 font-medium">
            {weddingDetails.weddingDate} • {weddingDetails.ceremonyTime}
          </div>
          <div className="text-sm text-slate-600">
            {weddingDetails.venue}
          </div>
          <div className="text-sm text-slate-500 mt-1">
            {weddingDetails.venueLocation}
          </div>
        </div>
      </div>

      {/* Guest Info */}
      {guest && (
        <div className="absolute top-[540px] left-1/2 transform -translate-x-1/2 text-center">
          <div 
            className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-6 py-3 shadow-lg"
            style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)' }}
          >
            <div className="text-base font-medium">
              {guest.name}
            </div>
            <div className="text-sm opacity-90">
              Table {guest.tableNumber}
            </div>
          </div>
        </div>
      )}

      {/* Website */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-sm text-slate-600">
          {weddingDetails.websiteUrl}
        </div>
      </div>

      {/* Geometric Pattern Background */}
      <div className="absolute bottom-8 left-4">
        <div 
          className="w-4 h-4 bg-blue-300 opacity-30"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        ></div>
      </div>
      <div className="absolute bottom-12 right-6">
        <div 
          className="w-6 h-6 bg-indigo-300 opacity-40"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        ></div>
      </div>
    </div>
  );
};

export default PhotoHexagonTemplate;
