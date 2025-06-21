
import React from 'react';
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
    <div 
      id="wedding-invitation" 
      className="relative bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-lg shadow-2xl max-w-md mx-auto text-white overflow-hidden"
      style={{ minHeight: '600px' }}
    >
      {/* Snowflakes Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 10 + 8}px`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-6 relative z-10">
        <p className="text-yellow-400 text-sm font-light tracking-wide uppercase">
          Ceremony on {weddingDetails.ceremonyTime}
        </p>
        <h1 className="text-yellow-400 text-2xl font-bold tracking-wider mt-2 mb-4">
          SAVE THE DATE
        </h1>
      </div>

      {/* Couple Photo */}
      <div className="flex justify-center mb-6 relative z-10">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 shadow-lg">
            <div 
              className="w-full h-full rounded-full bg-cover bg-center bg-gray-300"
              style={{
                backgroundImage: weddingDetails.couplePhotoUrl ? 
                  `url(${weddingDetails.couplePhotoUrl})` : 
                  'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)'
              }}
            >
              {!weddingDetails.couplePhotoUrl && (
                <div className="w-full h-full rounded-full flex items-center justify-center text-gray-400 text-2xl">
                  💑
                </div>
              )}
            </div>
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-yellow-400 animate-pulse"></div>
        </div>
      </div>

      {/* Couple Names */}
      <div className="text-center mb-6 relative z-10">
        <h2 className="text-3xl font-bold text-white">
          {weddingDetails.groomName} & {weddingDetails.brideName}
        </h2>
      </div>

      {/* Description */}
      <div className="text-center mb-6 relative z-10">
        <p className="text-gray-300 text-sm leading-relaxed px-4">
          Nous avons l'honneur de vous inviter à célébrer notre union dans un cadre magique. 
          Votre présence illuminera cette journée exceptionnelle.
        </p>
      </div>

      {/* Wedding Date */}
      <div className="text-center mb-4 relative z-10">
        <p className="text-yellow-400 text-lg font-semibold">
          JOIN MARRIAGE ON {weddingDetails.weddingDate}
        </p>
      </div>

      {/* Venue */}
      <div className="text-center mb-6 relative z-10">
        <p className="text-white font-medium">{weddingDetails.venue}</p>
        <p className="text-gray-300 text-sm">{weddingDetails.venueLocation}</p>
        {weddingDetails.websiteUrl && (
          <p className="text-yellow-400 text-sm mt-2">{weddingDetails.websiteUrl}</p>
        )}
      </div>

      {/* Guest Info */}
      {guest && (
        <div className="text-center mt-8 pt-4 border-t border-yellow-400/30 relative z-10">
          <p className="text-yellow-400 font-medium">
            Cher(e) {guest.name}
          </p>
          <p className="text-white text-sm mt-1">
            Table {guest.tableNumber}
          </p>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 text-yellow-400 opacity-30">
        <div className="w-8 h-8 border-t-2 border-l-2 border-yellow-400"></div>
      </div>
      <div className="absolute top-4 right-4 text-yellow-400 opacity-30">
        <div className="w-8 h-8 border-t-2 border-r-2 border-yellow-400"></div>
      </div>
      <div className="absolute bottom-4 left-4 text-yellow-400 opacity-30">
        <div className="w-8 h-8 border-b-2 border-l-2 border-yellow-400"></div>
      </div>
      <div className="absolute bottom-4 right-4 text-yellow-400 opacity-30">
        <div className="w-8 h-8 border-b-2 border-r-2 border-yellow-400"></div>
      </div>
    </div>
  );
};

export default WeddingInvitation;
