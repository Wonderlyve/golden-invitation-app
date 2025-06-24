import React from 'react';
import { Guest, WeddingDetails } from '@/types/guest';
import { InvitationTemplate } from '@/types/template';

interface InvitationTemplatesProps {
  template: InvitationTemplate;
  guest: Guest | null;
  weddingDetails: WeddingDetails;
  isPreview?: boolean;
}

const WinterTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
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
        {weddingDetails.invitationText}
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

const ElegantTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-black p-8 rounded-lg shadow-2xl max-w-md mx-auto text-white overflow-hidden"
    style={{ minHeight: '600px' }}
  >
    {/* Elegant Pattern Background */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
    </div>

    {/* Header */}
    <div className="text-center mb-6 relative z-10">
      <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-4"></div>
      <p className="text-purple-300 text-sm font-light tracking-widest uppercase">
        {weddingDetails.ceremonyTime}
      </p>
      <h1 className="text-purple-300 text-xl font-serif tracking-wider mt-2 mb-4">
        VOUS ÊTES INVITÉS
      </h1>
      <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
    </div>

    {/* Couple Photo */}
    <div className="flex justify-center mb-6 relative z-10">
      <div className="relative">
        <div className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 shadow-lg">
          <div 
            className="w-full h-full rounded-full bg-cover bg-center bg-gray-300"
            style={{
              backgroundImage: weddingDetails.couplePhotoUrl ? 
                `url(${weddingDetails.couplePhotoUrl})` : 
                'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)'
            }}
          >
            {!weddingDetails.couplePhotoUrl && (
              <div className="w-full h-full rounded-full flex items-center justify-center text-gray-400 text-xl">
                💑
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    {/* Couple Names */}
    <div className="text-center mb-6 relative z-10">
      <h2 className="text-2xl font-serif text-white">
        {weddingDetails.groomName}
      </h2>
      <div className="text-purple-300 text-lg my-2 font-serif">&</div>
      <h2 className="text-2xl font-serif text-white">
        {weddingDetails.brideName}
      </h2>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-300 text-sm leading-relaxed px-6 font-serif italic">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Wedding Date */}
    <div className="text-center mb-4 relative z-10">
      <p className="text-purple-300 text-base font-serif tracking-wide">
        {weddingDetails.weddingDate}
      </p>
    </div>

    {/* Venue */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-white font-medium font-serif">{weddingDetails.venue}</p>
      <p className="text-gray-300 text-sm">{weddingDetails.venueLocation}</p>
      {weddingDetails.websiteUrl && (
        <p className="text-purple-400 text-sm mt-2 font-serif">{weddingDetails.websiteUrl}</p>
      )}
    </div>

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 pt-4 border-t border-purple-400/30 relative z-10">
        <p className="text-purple-300 font-medium font-serif">
          {guest.name}
        </p>
        <p className="text-white text-sm mt-1">
          Table {guest.tableNumber}
        </p>
      </div>
    )}
  </div>
);

const RomanticTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative bg-gradient-to-br from-pink-100 via-rose-200 to-pink-300 p-8 rounded-lg shadow-2xl max-w-md mx-auto text-gray-800 overflow-hidden"
    style={{ minHeight: '600px' }}
  >
    {/* Floral Background */}
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute text-pink-300 opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 8 + 12}px`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        >
          🌸
        </div>
      ))}
    </div>

    {/* Header */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-rose-600 text-sm font-light tracking-wide">
        Cérémonie à {weddingDetails.ceremonyTime}
      </p>
      <h1 className="text-rose-700 text-xl font-script tracking-wider mt-2 mb-4">
        Avec Amour
      </h1>
    </div>

    {/* Couple Photo */}
    <div className="flex justify-center mb-6 relative z-10">
      <div className="relative">
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 p-1 shadow-lg">
          <div 
            className="w-full h-full rounded-full bg-cover bg-center bg-white"
            style={{
              backgroundImage: weddingDetails.couplePhotoUrl ? 
                `url(${weddingDetails.couplePhotoUrl})` : 
                'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)'
            }}
          >
            {!weddingDetails.couplePhotoUrl && (
              <div className="w-full h-full rounded-full flex items-center justify-center text-rose-400 text-2xl">
                💑
              </div>
            )}
          </div>
        </div>
        <div className="absolute -top-2 -right-2 text-2xl">🌹</div>
      </div>
    </div>

    {/* Couple Names */}
    <div className="text-center mb-6 relative z-10">
      <h2 className="text-3xl font-script text-rose-700">
        {weddingDetails.groomName} & {weddingDetails.brideName}
      </h2>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-700 text-sm leading-relaxed px-4 italic">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Wedding Date */}
    <div className="text-center mb-4 relative z-10">
      <p className="text-rose-600 text-lg font-medium">
        {weddingDetails.weddingDate}
      </p>
    </div>

    {/* Venue */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-800 font-medium">{weddingDetails.venue}</p>
      <p className="text-gray-600 text-sm">{weddingDetails.venueLocation}</p>
      {weddingDetails.websiteUrl && (
        <p className="text-rose-600 text-sm mt-2">{weddingDetails.websiteUrl}</p>
      )}
    </div>

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 pt-4 border-t border-rose-300 relative z-10">
        <p className="text-rose-600 font-medium">
          Cher(e) {guest.name}
        </p>
        <p className="text-gray-700 text-sm mt-1">
          Table {guest.tableNumber}
        </p>
      </div>
    )}

    {/* Heart decoration */}
    <div className="absolute bottom-4 right-4 text-rose-400 text-2xl opacity-60">
      💕
    </div>
  </div>
);

const ModernTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative bg-white p-8 rounded-lg shadow-2xl max-w-md mx-auto text-gray-900 overflow-hidden border"
    style={{ minHeight: '600px' }}
  >
    {/* Geometric Background */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
    </div>

    {/* Header */}
    <div className="text-center mb-8 relative z-10 pt-8">
      <p className="text-indigo-600 text-xs font-semibold tracking-widest uppercase">
        {weddingDetails.ceremonyTime}
      </p>
      <h1 className="text-gray-900 text-lg font-light tracking-wide mt-4">
        INVITATION
      </h1>
    </div>

    {/* Couple Photo */}
    <div className="flex justify-center mb-8 relative z-10">
      <div className="relative">
        <div className="w-24 h-24 rounded-sm bg-gradient-to-r from-indigo-500 to-purple-600 p-0.5 shadow-lg">
          <div 
            className="w-full h-full rounded-sm bg-cover bg-center bg-gray-100"
            style={{
              backgroundImage: weddingDetails.couplePhotoUrl ? 
                `url(${weddingDetails.couplePhotoUrl})` : 
                'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
            }}
          >
            {!weddingDetails.couplePhotoUrl && (
              <div className="w-full h-full rounded-sm flex items-center justify-center text-gray-400 text-xl">
                💑
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    {/* Couple Names */}
    <div className="text-center mb-8 relative z-10">
      <h2 className="text-2xl font-light text-gray-900 tracking-wide">
        {weddingDetails.groomName.toUpperCase()}
      </h2>
      <div className="w-8 h-0.5 bg-indigo-500 mx-auto my-3"></div>
      <h2 className="text-2xl font-light text-gray-900 tracking-wide">
        {weddingDetails.brideName.toUpperCase()}
      </h2>
    </div>

    {/* Description */}
    <div className="text-center mb-8 relative z-10">
      <p className="text-gray-600 text-sm leading-relaxed px-8 font-light">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Wedding Date */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-indigo-600 text-base font-medium tracking-wide">
        {weddingDetails.weddingDate}
      </p>
    </div>

    {/* Venue */}
    <div className="text-center mb-8 relative z-10">
      <p className="text-gray-900 font-medium">{weddingDetails.venue}</p>
      <p className="text-gray-600 text-sm mt-1">{weddingDetails.venueLocation}</p>
      {weddingDetails.websiteUrl && (
        <p className="text-indigo-600 text-sm mt-2">{weddingDetails.websiteUrl}</p>
      )}
    </div>

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 pt-6 border-t border-gray-200 relative z-10">
        <p className="text-indigo-600 font-medium">
          {guest.name}
        </p>
        <p className="text-gray-600 text-sm mt-1">
          Table {guest.tableNumber}
        </p>
      </div>
    )}
  </div>
);

const BalloonsTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative p-8 rounded-lg shadow-2xl max-w-md mx-auto text-gray-800 overflow-hidden"
    style={{ 
      minHeight: '600px',
      backgroundImage: `url('/lovable-uploads/329c0785-da3d-46e0-ada1-275da18b586c.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="absolute inset-0 bg-pink-200/40 rounded-lg"></div>
    
    {/* Header */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-pink-700 text-sm font-light tracking-wide">
        Cérémonie à {weddingDetails.ceremonyTime}
      </p>
      <h1 className="text-pink-800 text-xl font-bold tracking-wider mt-2 mb-4">
        SAVE THE DATE
      </h1>
    </div>

    {/* Couple Photo */}
    <div className="flex justify-center mb-6 relative z-10">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 shadow-lg">
        <div 
          className="w-full h-full rounded-full bg-cover bg-center bg-white"
          style={{
            backgroundImage: weddingDetails.couplePhotoUrl ? 
              `url(${weddingDetails.couplePhotoUrl})` : 
              'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)'
          }}
        >
          {!weddingDetails.couplePhotoUrl && (
            <div className="w-full h-full rounded-full flex items-center justify-center text-pink-500 text-2xl">
              💑
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Couple Names */}
    <div className="text-center mb-6 relative z-10">
      <h2 className="text-3xl font-bold text-pink-800">
        {weddingDetails.groomName} & {weddingDetails.brideName}
      </h2>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-700 text-sm leading-relaxed px-4 bg-white/80 py-3 rounded-lg">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Wedding Date */}
    <div className="text-center mb-4 relative z-10">
      <p className="text-pink-700 text-lg font-semibold bg-white/80 py-2 px-4 rounded-lg inline-block">
        {weddingDetails.weddingDate}
      </p>
    </div>

    {/* Venue */}
    <div className="text-center mb-6 relative z-10">
      <div className="bg-white/80 py-3 px-4 rounded-lg">
        <p className="text-gray-800 font-medium">{weddingDetails.venue}</p>
        <p className="text-gray-600 text-sm">{weddingDetails.venueLocation}</p>
        {weddingDetails.websiteUrl && (
          <p className="text-pink-600 text-sm mt-2">{weddingDetails.websiteUrl}</p>
        )}
      </div>
    </div>

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 relative z-10">
        <div className="bg-white/90 py-3 px-4 rounded-lg">
          <p className="text-pink-700 font-medium">
            Cher(e) {guest.name}
          </p>
          <p className="text-gray-700 text-sm mt-1">
            Table {guest.tableNumber}
          </p>
        </div>
      </div>
    )}
  </div>
);

const CelebrationTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative p-8 rounded-lg shadow-2xl max-w-md mx-auto text-gray-800 overflow-hidden"
    style={{ 
      minHeight: '600px',
      backgroundImage: `url('/lovable-uploads/a4e16797-fd1d-4936-8ac7-1eb39ab7c5d0.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="absolute inset-0 bg-orange-100/60 rounded-lg"></div>
    
    {/* Header */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-orange-700 text-sm font-light tracking-wide">
        Cérémonie à {weddingDetails.ceremonyTime}
      </p>
      <h1 className="text-orange-800 text-xl font-bold tracking-wider mt-2 mb-4">
        CÉLÉBRATION
      </h1>
    </div>

    {/* Couple Photo */}
    <div className="flex justify-center mb-6 relative z-10">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 shadow-lg">
        <div 
          className="w-full h-full rounded-full bg-cover bg-center bg-white"
          style={{
            backgroundImage: weddingDetails.couplePhotoUrl ? 
              `url(${weddingDetails.couplePhotoUrl})` : 
              'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)'
          }}
        >
          {!weddingDetails.couplePhotoUrl && (
            <div className="w-full h-full rounded-full flex items-center justify-center text-orange-500 text-2xl">
              💑
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Couple Names */}
    <div className="text-center mb-6 relative z-10">
      <h2 className="text-3xl font-bold text-orange-800">
        {weddingDetails.groomName} & {weddingDetails.brideName}
      </h2>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-700 text-sm leading-relaxed px-4 bg-white/90 py-3 rounded-lg">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Wedding Date */}
    <div className="text-center mb-4 relative z-10">
      <p className="text-orange-700 text-lg font-semibold bg-white/90 py-2 px-4 rounded-lg inline-block">
        {weddingDetails.weddingDate}
      </p>
    </div>

    {/* Venue */}
    <div className="text-center mb-6 relative z-10">
      <div className="bg-white/90 py-3 px-4 rounded-lg">
        <p className="text-gray-800 font-medium">{weddingDetails.venue}</p>
        <p className="text-gray-600 text-sm">{weddingDetails.venueLocation}</p>
        {weddingDetails.websiteUrl && (
          <p className="text-orange-600 text-sm mt-2">{weddingDetails.websiteUrl}</p>
        )}
      </div>
    </div>

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 relative z-10">
        <div className="bg-white/95 py-3 px-4 rounded-lg">
          <p className="text-orange-700 font-medium">
            Cher(e) {guest.name}
          </p>
          <p className="text-gray-700 text-sm mt-1">
            Table {guest.tableNumber}
          </p>
        </div>
      </div>
    )}
  </div>
);

const FloralTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative p-8 rounded-lg shadow-2xl max-w-md mx-auto text-gray-800 overflow-hidden"
    style={{ 
      minHeight: '600px',
      backgroundImage: `url('/lovable-uploads/b5fc49a6-606c-46c4-a27f-4b756be34229.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="absolute inset-0 bg-pink-50/80 rounded-lg"></div>
    
    {/* Header */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-rose-700 text-sm font-light tracking-wide">
        Cérémonie à {weddingDetails.ceremonyTime}
      </p>
      <h1 className="text-rose-800 text-xl font-serif tracking-wider mt-2 mb-4">
        AVEC AMOUR
      </h1>
    </div>

    {/* Couple Photo */}
    <div className="flex justify-center mb-6 relative z-10">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 shadow-lg">
        <div 
          className="w-full h-full rounded-full bg-cover bg-center bg-white"
          style={{
            backgroundImage: weddingDetails.couplePhotoUrl ? 
              `url(${weddingDetails.couplePhotoUrl})` : 
              'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)'
          }}
        >
          {!weddingDetails.couplePhotoUrl && (
            <div className="w-full h-full rounded-full flex items-center justify-center text-rose-500 text-2xl">
              💑
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Couple Names */}
    <div className="text-center mb-6 relative z-10">
      <h2 className="text-3xl font-serif text-rose-800">
        {weddingDetails.groomName} & {weddingDetails.brideName}
      </h2>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-700 text-sm leading-relaxed px-4 bg-white/90 py-3 rounded-lg italic">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Wedding Date */}
    <div className="text-center mb-4 relative z-10">
      <p className="text-rose-700 text-lg font-medium bg-white/90 py-2 px-4 rounded-lg inline-block">
        {weddingDetails.weddingDate}
      </p>
    </div>

    {/* Venue */}
    <div className="text-center mb-6 relative z-10">
      <div className="bg-white/90 py-3 px-4 rounded-lg">
        <p className="text-gray-800 font-medium">{weddingDetails.venue}</p>
        <p className="text-gray-600 text-sm">{weddingDetails.venueLocation}</p>
        {weddingDetails.websiteUrl && (
          <p className="text-rose-600 text-sm mt-2">{weddingDetails.websiteUrl}</p>
        )}
      </div>
    </div>

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 relative z-10">
        <div className="bg-white/95 py-3 px-4 rounded-lg">
          <p className="text-rose-700 font-medium">
            Cher(e) {guest.name}
          </p>
          <p className="text-gray-700 text-sm mt-1">
            Table {guest.tableNumber}
          </p>
        </div>
      </div>
    )}
  </div>
);

const BotanicalTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative p-8 rounded-lg shadow-2xl max-w-md mx-auto text-gray-800 overflow-hidden"
    style={{ 
      minHeight: '600px',
      backgroundImage: `url('/lovable-uploads/2fe1721d-1dc1-4dc9-96a0-40cf8cf99555.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="absolute inset-0 bg-green-50/70 rounded-lg"></div>
    
    {/* Header */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-green-700 text-sm font-light tracking-wide">
        Cérémonie à {weddingDetails.ceremonyTime}
      </p>
      <h1 className="text-green-800 text-xl font-serif tracking-wider mt-2 mb-4">
        NATURE & AMOUR
      </h1>
    </div>

    {/* Couple Photo */}
    <div className="flex justify-center mb-6 relative z-10">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 shadow-lg">
        <div 
          className="w-full h-full rounded-full bg-cover bg-center bg-white"
          style={{
            backgroundImage: weddingDetails.couplePhotoUrl ? 
              `url(${weddingDetails.couplePhotoUrl})` : 
              'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)'
          }}
        >
          {!weddingDetails.couplePhotoUrl && (
            <div className="w-full h-full rounded-full flex items-center justify-center text-green-500 text-2xl">
              💑
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Couple Names */}
    <div className="text-center mb-6 relative z-10">
      <h2 className="text-3xl font-serif text-green-800">
        {weddingDetails.groomName} & {weddingDetails.brideName}
      </h2>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-700 text-sm leading-relaxed px-4 bg-white/90 py-3 rounded-lg">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Wedding Date */}
    <div className="text-center mb-4 relative z-10">
      <p className="text-green-700 text-lg font-medium bg-white/90 py-2 px-4 rounded-lg inline-block">
        {weddingDetails.weddingDate}
      </p>
    </div>

    {/* Venue */}
    <div className="text-center mb-6 relative z-10">
      <div className="bg-white/90 py-3 px-4 rounded-lg">
        <p className="text-gray-800 font-medium">{weddingDetails.venue}</p>
        <p className="text-gray-600 text-sm">{weddingDetails.venueLocation}</p>
        {weddingDetails.websiteUrl && (
          <p className="text-green-600 text-sm mt-2">{weddingDetails.websiteUrl}</p>
        )}
      </div>
    </div>

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 relative z-10">
        <div className="bg-white/95 py-3 px-4 rounded-lg">
          <p className="text-green-700 font-medium">
            Cher(e) {guest.name}
          </p>
          <p className="text-gray-700 text-sm mt-1">
            Table {guest.tableNumber}
          </p>
        </div>
      </div>
    )}
  </div>
);

const OvalTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative p-8 rounded-lg shadow-2xl max-w-md mx-auto text-gray-800 overflow-hidden"
    style={{ 
      minHeight: '600px',
      backgroundImage: `url('/lovable-uploads/95f5cf97-c844-4ddf-aae2-5f1adabe145f.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="absolute inset-0 bg-pink-50/80 rounded-lg"></div>
    
    {/* Header */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-pink-700 text-sm font-light tracking-wide">
        Cérémonie à {weddingDetails.ceremonyTime}
      </p>
      <h1 className="text-pink-800 text-xl font-script tracking-wider mt-2 mb-4">
        INVITATION
      </h1>
    </div>

    {/* Couple Photo */}
    <div className="flex justify-center mb-6 relative z-10">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 shadow-lg">
        <div 
          className="w-full h-full rounded-full bg-cover bg-center bg-white"
          style={{
            backgroundImage: weddingDetails.couplePhotoUrl ? 
              `url(${weddingDetails.couplePhotoUrl})` : 
              'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)'
          }}
        >
          {!weddingDetails.couplePhotoUrl && (
            <div className="w-full h-full rounded-full flex items-center justify-center text-pink-500 text-2xl">
              💑
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Couple Names */}
    <div className="text-center mb-6 relative z-10">
      <h2 className="text-3xl font-script text-pink-800">
        {weddingDetails.groomName} & {weddingDetails.brideName}
      </h2>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-700 text-sm leading-relaxed px-4 bg-white/90 py-3 rounded-lg italic">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Wedding Date */}
    <div className="text-center mb-4 relative z-10">
      <p className="text-pink-700 text-lg font-medium bg-white/90 py-2 px-4 rounded-lg inline-block">
        {weddingDetails.weddingDate}
      </p>
    </div>

    {/* Venue */}
    <div className="text-center mb-6 relative z-10">
      <div className="bg-white/90 py-3 px-4 rounded-lg">
        <p className="text-gray-800 font-medium">{weddingDetails.venue}</p>
        <p className="text-gray-600 text-sm">{weddingDetails.venueLocation}</p>
        {weddingDetails.websiteUrl && (
          <p className="text-pink-600 text-sm mt-2">{weddingDetails.websiteUrl}</p>
        )}
      </div>
    </div>

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 relative z-10">
        <div className="bg-white/95 py-3 px-4 rounded-lg">
          <p className="text-pink-700 font-medium">
            Cher(e) {guest.name}
          </p>
          <p className="text-gray-700 text-sm mt-1">
            Table {guest.tableNumber}
          </p>
        </div>
      </div>
    )}
  </div>
);

const PurpleTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative p-8 rounded-lg shadow-2xl max-w-md mx-auto text-gray-800 overflow-hidden"
    style={{ 
      minHeight: '600px',
      backgroundImage: `url('/lovable-uploads/cd3ffd55-89e0-448d-9d5b-cb7d8885f77d.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="absolute inset-0 bg-purple-50/80 rounded-lg"></div>
    
    {/* Header */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-purple-700 text-sm font-light tracking-wide">
        Cérémonie à {weddingDetails.ceremonyTime}
      </p>
      <h1 className="text-purple-800 text-xl font-serif tracking-wider mt-2 mb-4">
        ÉLÉGANCE
      </h1>
    </div>

    {/* Couple Photo */}
    <div className="flex justify-center mb-6 relative z-10">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 shadow-lg">
        <div 
          className="w-full h-full rounded-full bg-cover bg-center bg-white"
          style={{
            backgroundImage: weddingDetails.couplePhotoUrl ? 
              `url(${weddingDetails.couplePhotoUrl})` : 
              'linear-gradient(135deg, #faf5ff 0%, #e9d5ff 100%)'
          }}
        >
          {!weddingDetails.couplePhotoUrl && (
            <div className="w-full h-full rounded-full flex items-center justify-center text-purple-500 text-2xl">
              💑
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Couple Names */}
    <div className="text-center mb-6 relative z-10">
      <h2 className="text-3xl font-serif text-purple-800">
        {weddingDetails.groomName} & {weddingDetails.brideName}
      </h2>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-700 text-sm leading-relaxed px-4 bg-white/90 py-3 rounded-lg italic">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Wedding Date */}
    <div className="text-center mb-4 relative z-10">
      <p className="text-purple-700 text-lg font-medium bg-white/90 py-2 px-4 rounded-lg inline-block">
        {weddingDetails.weddingDate}
      </p>
    </div>

    {/* Venue */}
    <div className="text-center mb-6 relative z-10">
      <div className="bg-white/90 py-3 px-4 rounded-lg">
        <p className="text-gray-800 font-medium">{weddingDetails.venue}</p>
        <p className="text-gray-600 text-sm">{weddingDetails.venueLocation}</p>
        {weddingDetails.websiteUrl && (
          <p className="text-purple-600 text-sm mt-2">{weddingDetails.websiteUrl}</p>
        )}
      </div>
    </div>

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 relative z-10">
        <div className="bg-white/95 py-3 px-4 rounded-lg">
          <p className="text-purple-700 font-medium">
            Cher(e) {guest.name}
          </p>
          <p className="text-gray-700 text-sm mt-1">
            Table {guest.tableNumber}
          </p>
        </div>
      </div>
    )}
  </div>
);

const WatercolorTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative p-8 rounded-lg shadow-2xl max-w-md mx-auto text-gray-800 overflow-hidden"
    style={{ 
      minHeight: '600px',
      backgroundImage: `url('/lovable-uploads/e858b4e3-374e-46d0-abe3-136af2598763.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="absolute inset-0 bg-purple-50/70 rounded-lg"></div>
    
    {/* Header */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-purple-700 text-sm font-light tracking-wide">
        Cérémonie à {weddingDetails.ceremonyTime}
      </p>
      <h1 className="text-purple-800 text-xl font-script tracking-wider mt-2 mb-4">
        AQUARELLE
      </h1>
    </div>

    {/* Couple Photo */}
    <div className="flex justify-center mb-6 relative z-10">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 shadow-lg">
        <div 
          className="w-full h-full rounded-full bg-cover bg-center bg-white"
          style={{
            backgroundImage: weddingDetails.couplePhotoUrl ? 
              `url(${weddingDetails.couplePhotoUrl})` : 
              'linear-gradient(135deg, #faf5ff 0%, #e9d5ff 100%)'
          }}
        >
          {!weddingDetails.couplePhotoUrl && (
            <div className="w-full h-full rounded-full flex items-center justify-center text-purple-500 text-2xl">
              💑
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Couple Names */}
    <div className="text-center mb-6 relative z-10">
      <h2 className="text-3xl font-script text-purple-800">
        {weddingDetails.groomName} & {weddingDetails.brideName}
      </h2>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-700 text-sm leading-relaxed px-4 bg-white/90 py-3 rounded-lg italic">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Wedding Date */}
    <div className="text-center mb-4 relative z-10">
      <p className="text-purple-700 text-lg font-medium bg-white/90 py-2 px-4 rounded-lg inline-block">
        {weddingDetails.weddingDate}
      </p>
    </div>

    {/* Venue */}
    <div className="text-center mb-6 relative z-10">
      <div className="bg-white/90 py-3 px-4 rounded-lg">
        <p className="text-gray-800 font-medium">{weddingDetails.venue}</p>
        <p className="text-gray-600 text-sm">{weddingDetails.venueLocation}</p>
        {weddingDetails.websiteUrl && (
          <p className="text-purple-600 text-sm mt-2">{weddingDetails.websiteUrl}</p>
        )}
      </div>
    </div>

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 relative z-10">
        <div className="bg-white/95 py-3 px-4 rounded-lg">
          <p className="text-purple-700 font-medium">
            Cher(e) {guest.name}
          </p>
          <p className="text-gray-700 text-sm mt-1">
            Table {guest.tableNumber}
          </p>
        </div>
      </div>
    )}
  </div>
);

const PurpleRosesTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative p-8 rounded-lg shadow-2xl max-w-md mx-auto text-gray-800 overflow-hidden"
    style={{ 
      minHeight: '600px',
      backgroundImage: `url('/lovable-uploads/2ba8e4c3-2147-4f2b-b069-157b49b5b9f2.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="absolute inset-0 bg-white/60 rounded-lg"></div>
    
    {/* Header */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-purple-700 text-sm font-light tracking-wide">
        Cérémonie à {weddingDetails.ceremonyTime}
      </p>
      <h1 className="text-purple-800 text-xl font-serif tracking-wider mt-2 mb-4">
        ROMANTIQUE
      </h1>
    </div>

    {/* Couple Photo */}
    <div className="flex justify-center mb-6 relative z-10">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 shadow-lg">
        <div 
          className="w-full h-full rounded-full bg-cover bg-center bg-white"
          style={{
            backgroundImage: weddingDetails.couplePhotoUrl ? 
              `url(${weddingDetails.couplePhotoUrl})` : 
              'linear-gradient(135deg, #faf5ff 0%, #e9d5ff 100%)'
          }}
        >
          {!weddingDetails.couplePhotoUrl && (
            <div className="w-full h-full rounded-full flex items-center justify-center text-purple-500 text-2xl">
              💑
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Couple Names */}
    <div className="text-center mb-6 relative z-10">
      <h2 className="text-3xl font-serif text-purple-800">
        {weddingDetails.groomName} & {weddingDetails.brideName}
      </h2>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-700 text-sm leading-relaxed px-4 bg-white/95 py-3 rounded-lg italic">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Wedding Date */}
    <div className="text-center mb-4 relative z-10">
      <p className="text-purple-700 text-lg font-medium bg-white/95 py-2 px-4 rounded-lg inline-block">
        {weddingDetails.weddingDate}
      </p>
    </div>

    {/* Venue */}
    <div className="text-center mb-6 relative z-10">
      <div className="bg-white/95 py-3 px-4 rounded-lg">
        <p className="text-gray-800 font-medium">{weddingDetails.venue}</p>
        <p className="text-gray-600 text-sm">{weddingDetails.venueLocation}</p>
        {weddingDetails.websiteUrl && (
          <p className="text-purple-600 text-sm mt-2">{weddingDetails.websiteUrl}</p>
        )}
      </div>
    </div>

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 relative z-10">
        <div className="bg-white/98 py-3 px-4 rounded-lg">
          <p className="text-purple-700 font-medium">
            Cher(e) {guest.name}
          </p>
          <p className="text-gray-700 text-sm mt-1">
            Table {guest.tableNumber}
          </p>
        </div>
      </div>
    )}
  </div>
);

const CoralTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative p-8 rounded-lg shadow-2xl max-w-md mx-auto text-gray-800 overflow-hidden"
    style={{ 
      minHeight: '600px',
      backgroundImage: `url('/lovable-uploads/d494526e-8bd3-47e9-a5ea-a98913da3999.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="absolute inset-0 bg-white/60 rounded-lg"></div>
    
    {/* Header */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-rose-700 text-sm font-light tracking-wide">
        Cérémonie à {weddingDetails.ceremonyTime}
      </p>
      <h1 className="text-rose-800 text-xl font-serif tracking-wider mt-2 mb-4">
        CORAIL
      </h1>
    </div>

    {/* Couple Photo */}
    <div className="flex justify-center mb-6 relative z-10">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 shadow-lg">
        <div 
          className="w-full h-full rounded-full bg-cover bg-center bg-white"
          style={{
            backgroundImage: weddingDetails.couplePhotoUrl ? 
              `url(${weddingDetails.couplePhotoUrl})` : 
              'linear-gradient(135deg, #fff1f2 0%, #fecaca 100%)'
          }}
        >
          {!weddingDetails.couplePhotoUrl && (
            <div className="w-full h-full rounded-full flex items-center justify-center text-rose-500 text-2xl">
              💑
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Couple Names */}
    <div className="text-center mb-6 relative z-10">
      <h2 className="text-3xl font-serif text-rose-800">
        {weddingDetails.groomName} & {weddingDetails.brideName}
      </h2>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-700 text-sm leading-relaxed px-4 bg-white/95 py-3 rounded-lg italic">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Wedding Date */}
    <div className="text-center mb-4 relative z-10">
      <p className="text-rose-700 text-lg font-medium bg-white/95 py-2 px-4 rounded-lg inline-block">
        {weddingDetails.weddingDate}
      </p>
    </div>

    {/* Venue */}
    <div className="text-center mb-6 relative z-10">
      <div className="bg-white/95 py-3 px-4 rounded-lg">
        <p className="text-gray-800 font-medium">{weddingDetails.venue}</p>
        <p className="text-gray-600 text-sm">{weddingDetails.venueLocation}</p>
        {weddingDetails.websiteUrl && (
          <p className="text-rose-600 text-sm mt-2">{weddingDetails.websiteUrl}</p>
        )}
      </div>
    </div>

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 relative z-10">
        <div className="bg-white/98 py-3 px-4 rounded-lg">
          <p className="text-rose-700 font-medium">
            Cher(e) {guest.name}
          </p>
          <p className="text-gray-700 text-sm mt-1">
            Table {guest.tableNumber}
          </p>
        </div>
      </div>
    )}
  </div>
);

const GardenTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative p-8 rounded-lg shadow-2xl max-w-md mx-auto text-gray-800 overflow-hidden"
    style={{ 
      minHeight: '600px',
      backgroundImage: `url('/lovable-uploads/7255aa1d-005f-41ce-ae76-77daa31448ba.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="absolute inset-0 bg-white/70 rounded-lg"></div>
    
    {/* Header */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-green-700 text-sm font-light tracking-wide">
        Cérémonie à {weddingDetails.ceremonyTime}
      </p>
      <h1 className="text-green-800 text-xl font-serif tracking-wider mt-2 mb-4">
        JARDIN SECRET
      </h1>
    </div>

    {/* Couple Photo */}
    <div className="flex justify-center mb-6 relative z-10">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 shadow-lg">
        <div 
          className="w-full h-full rounded-full bg-cover bg-center bg-white"
          style={{
            backgroundImage: weddingDetails.couplePhotoUrl ? 
              `url(${weddingDetails.couplePhotoUrl})` : 
              'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)'
          }}
        >
          {!weddingDetails.couplePhotoUrl && (
            <div className="w-full h-full rounded-full flex items-center justify-center text-green-500 text-2xl">
              💑
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Couple Names */}
    <div className="text-center mb-6 relative z-10">
      <h2 className="text-3xl font-serif text-green-800">
        {weddingDetails.groomName} & {weddingDetails.brideName}
      </h2>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-700 text-sm leading-relaxed px-4 bg-white/95 py-3 rounded-lg italic">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Wedding Date */}
    <div className="text-center mb-4 relative z-10">
      <p className="text-green-700 text-lg font-medium bg-white/95 py-2 px-4 rounded-lg inline-block">
        {weddingDetails.weddingDate}
      </p>
    </div>

    {/* Venue */}
    <div className="text-center mb-6 relative z-10">
      <div className="bg-white/95 py-3 px-4 rounded-lg">
        <p className="text-gray-800 font-medium">{weddingDetails.venue}</p>
        <p className="text-gray-600 text-sm">{weddingDetails.venueLocation}</p>
        {weddingDetails.websiteUrl && (
          <p className="text-green-600 text-sm mt-2">{weddingDetails.websiteUrl}</p>
        )}
      </div>
    </div>

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 relative z-10">
        <div className="bg-white/98 py-3 px-4 rounded-lg">
          <p className="text-green-700 font-medium">
            Cher(e) {guest.name}
          </p>
          <p className="text-gray-700 text-sm mt-1">
            Table {guest.tableNumber}
          </p>
        </div>
      </div>
    )}
  </div>
);

const MinimalBeigeTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative bg-gradient-to-br from-amber-50 to-stone-100 p-8 rounded-lg shadow-2xl max-w-md mx-auto text-gray-800 overflow-hidden border border-stone-200"
    style={{ minHeight: '600px' }}
  >
    {/* Decorative botanical elements */}
    <div className="absolute top-4 right-4 text-amber-600 opacity-30">
      <div className="transform rotate-12">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
          <path d="M8 20C8 20 12 16 20 16C28 16 32 20 32 20C32 20 28 24 20 24C12 24 8 20 8 20Z"/>
          <path d="M20 8C20 8 16 12 16 20C16 28 20 32 20 32C20 32 24 28 24 20C24 12 20 8 20 8Z"/>
        </svg>
      </div>
    </div>

    {/* Header */}
    <div className="text-center mb-8 relative z-10">
      <div className="w-16 h-0.5 bg-amber-600 mx-auto mb-4"></div>
      <p className="text-amber-700 text-sm font-light tracking-widest uppercase">
        INVITATION
      </p>
      <h1 className="text-amber-800 text-lg font-serif mt-2 mb-4">
        THE WEDDING OF
      </h1>
      <div className="w-16 h-0.5 bg-amber-600 mx-auto"></div>
    </div>

    {/* Couple Names */}
    <div className="text-center mb-8 relative z-10">
      <h2 className="text-2xl font-serif text-amber-900 tracking-wide">
        {weddingDetails.groomName}
      </h2>
      <div className="text-amber-700 text-lg my-3 font-serif">&</div>
      <h2 className="text-2xl font-serif text-amber-900 tracking-wide">
        {weddingDetails.brideName}
      </h2>
    </div>

    {/* Couple Photo */}
    <div className="flex justify-center mb-8 relative z-10">
      <div className="relative">
        <div className="w-28 h-40 rounded-lg bg-gradient-to-r from-amber-200 to-stone-200 p-1 shadow-lg overflow-hidden">
          <div 
            className="w-full h-full rounded-lg bg-cover bg-center bg-stone-100"
            style={{
              backgroundImage: weddingDetails.couplePhotoUrl ? 
                `url(${weddingDetails.couplePhotoUrl})` : 
                'linear-gradient(135deg, #fef3c7 0%, #f59e0b 100%)'
            }}
          >
            {!weddingDetails.couplePhotoUrl && (
              <div className="w-full h-full rounded-lg flex items-center justify-center text-amber-600 text-xl">
                💑
              </div>
            )}
          </div>
        </div>
        <div className="absolute -bottom-2 -left-2 text-amber-600 opacity-60">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2L12 8L18 8L13 12L15 18L10 14L5 18L7 12L2 8L8 8Z"/>
          </svg>
        </div>
      </div>
    </div>

    {/* Wedding Date */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-amber-800 text-lg font-serif tracking-wide">
        {weddingDetails.weddingDate}
      </p>
      <p className="text-amber-700 text-sm mt-1">
        Cérémonie à {weddingDetails.ceremonyTime}
      </p>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-700 text-sm leading-relaxed px-6 font-light italic">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Venue */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-amber-900 font-medium">{weddingDetails.venue}</p>
      <p className="text-gray-600 text-sm">{weddingDetails.venueLocation}</p>
      {weddingDetails.websiteUrl && (
        <p className="text-amber-700 text-sm mt-2">{weddingDetails.websiteUrl}</p>
      )}
    </div>

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 pt-4 border-t border-amber-300 relative z-10">
        <p className="text-amber-800 font-medium">
          {guest.name}
        </p>
        <p className="text-gray-700 text-sm mt-1">
          Table {guest.tableNumber}
        </p>
      </div>
    )}
  </div>
);

const GoldenHexagonTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative bg-gradient-to-br from-amber-50 to-yellow-100 p-8 rounded-lg shadow-2xl max-w-md mx-auto text-gray-800 overflow-hidden"
    style={{ minHeight: '600px' }}
  >
    {/* Golden decorative elements */}
    <div className="absolute inset-0 opacity-20">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute text-yellow-600"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 6 + 8}px`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        >
          ⬢
        </div>
      ))}
    </div>

    {/* Header */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-yellow-700 text-xs font-semibold tracking-widest uppercase">
        Together with their families
      </p>
      <div className="w-8 h-8 border-2 border-yellow-600 transform rotate-45 mx-auto my-4"></div>
    </div>

    {/* Couple Names */}
    <div className="text-center mb-8 relative z-10">
      <h2 className="text-3xl font-serif text-yellow-800 tracking-wide">
        {weddingDetails.groomName} & {weddingDetails.brideName}
      </h2>
    </div>

    {/* Couple Photo - Hexagonal frame */}
    <div className="flex justify-center mb-8 relative z-10">
      <div className="relative">
        <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-amber-500 p-1 shadow-lg" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
          <div 
            className="w-full h-full bg-cover bg-center bg-yellow-100"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              backgroundImage: weddingDetails.couplePhotoUrl ? 
                `url(${weddingDetails.couplePhotoUrl})` : 
                'linear-gradient(135deg, #fef3c7 0%, #f59e0b 100%)'
            }}
          >
            {!weddingDetails.couplePhotoUrl && (
              <div className="w-full h-full flex items-center justify-center text-yellow-600 text-2xl">
                💑
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    {/* Request text */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-yellow-700 text-sm font-medium">
        Request the honor of your presence
      </p>
      <p className="text-gray-700 text-sm">
        At their wedding
      </p>
    </div>

    {/* Wedding Date */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-yellow-800 text-xl font-serif tracking-wide">
        {weddingDetails.weddingDate}
      </p>
      <p className="text-yellow-700 text-sm mt-1">
        Cérémonie à {weddingDetails.ceremonyTime}
      </p>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-700 text-sm leading-relaxed px-4">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Venue */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-yellow-800 font-medium">{weddingDetails.venue}</p>
      <p className="text-gray-600 text-sm">{weddingDetails.venueLocation}</p>
      {weddingDetails.websiteUrl && (
        <p className="text-yellow-700 text-sm mt-2">{weddingDetails.websiteUrl}</p>
      )}
    </div>

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 pt-4 border-t border-yellow-400 relative z-10">
        <p className="text-yellow-800 font-medium">
          {guest.name}
        </p>
        <p className="text-gray-700 text-sm mt-1">
          Table {guest.tableNumber}
        </p>
      </div>
    )}
  </div>
);

const EucalyptusTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative bg-white p-8 rounded-lg shadow-2xl max-w-md mx-auto text-gray-800 overflow-hidden border border-gray-100"
    style={{ minHeight: '600px' }}
  >
    {/* Eucalyptus decorative frame */}
    <div className="absolute inset-4 border border-gray-200 rounded-lg"></div>
    
    {/* Eucalyptus leaves decoration */}
    <div className="absolute top-6 left-6 text-green-500 opacity-60">
      <svg width="60" height="80" viewBox="0 0 60 80" fill="currentColor">
        <path d="M10 10C10 10 15 5 25 10C35 15 40 25 35 35C30 45 20 50 15 45C10 40 5 30 10 20C15 10 10 10 10 10Z"/>
        <path d="M15 25C15 25 20 20 30 25C40 30 45 40 40 50C35 60 25 65 20 60C15 55 10 45 15 35C20 25 15 25 15 25Z"/>
        <circle cx="25" cy="15" r="3"/>
        <circle cx="30" cy="35" r="2"/>
      </svg>
    </div>

    <div className="absolute bottom-6 right-6 text-green-500 opacity-60 transform rotate-180">
      <svg width="60" height="80" viewBox="0 0 60 80" fill="currentColor">
        <path d="M10 10C10 10 15 5 25 10C35 15 40 25 35 35C30 45 20 50 15 45C10 40 5 30 10 20C15 10 10 10 10 10Z"/>
        <path d="M15 25C15 25 20 20 30 25C40 30 45 40 40 50C35 60 25 65 20 60C15 55 10 45 15 35C20 25 15 25 15 25Z"/>
      </svg>
    </div>

    {/* Header */}
    <div className="text-center mb-8 relative z-10 pt-4">
      <p className="text-green-700 text-sm font-light tracking-wide">
        Together with their families
      </p>
      <h1 className="text-gray-800 text-lg font-light tracking-wide mt-2">
        invite you to their wedding celebration
      </h1>
    </div>

    {/* Couple Names */}
    <div className="text-center mb-8 relative z-10">
      <h2 className="text-3xl font-script text-gray-800">
        {weddingDetails.groomName} & {weddingDetails.brideName}
      </h2>
    </div>

    {/* Couple Photo - Circular with decorative frame */}
    <div className="flex justify-center mb-8 relative z-10">
      <div className="relative">
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-green-200 to-emerald-200 p-1 shadow-lg">
          <div 
            className="w-full h-full rounded-full bg-cover bg-center bg-gray-50"
            style={{
              backgroundImage: weddingDetails.couplePhotoUrl ? 
                `url(${weddingDetails.couplePhotoUrl})` : 
                'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)'
            }}
          >
            {!weddingDetails.couplePhotoUrl && (
              <div className="w-full h-full rounded-full flex items-center justify-center text-green-500 text-2xl">
                💑
              </div>
            )}
          </div>
        </div>
        {/* Decorative eucalyptus around photo */}
        <div className="absolute -top-3 -right-3 text-green-500 text-lg">🌿</div>
        <div className="absolute -bottom-3 -left-3 text-green-500 text-lg">🌿</div>
      </div>
    </div>

    {/* Wedding Date and Time */}
    <div className="text-center mb-6 relative z-10">
      <div className="border-t border-b border-gray-300 py-3">
        <p className="text-gray-800 text-sm font-semibold tracking-wide">
          {weddingDetails.weddingDate.toUpperCase()}
        </p>
        <p className="text-gray-600 text-sm">{weddingDetails.ceremonyTime}</p>
      </div>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-600 text-sm leading-relaxed px-4 italic">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Venue */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-800 font-medium text-sm">{weddingDetails.venue}</p>
      <p className="text-gray-600 text-sm">{weddingDetails.venueLocation}</p>
      {weddingDetails.websiteUrl && (
        <p className="text-green-600 text-sm mt-2">{weddingDetails.websiteUrl}</p>
      )}
    </div>

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 pt-4 border-t border-gray-200 relative z-10">
        <p className="text-green-700 font-medium">
          {guest.name}
        </p>
        <p className="text-gray-600 text-sm mt-1">
          Table {guest.tableNumber}
        </p>
      </div>
    )}
  </div>
);

const GoldenFrameTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-lg shadow-2xl max-w-md mx-auto text-gray-800 overflow-hidden"
    style={{ minHeight: '600px' }}
  >
    {/* Golden confetti dots */}
    <div className="absolute inset-0">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-yellow-500 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        ></div>
      ))}
    </div>

    {/* Decorative corner flourishes */}
    <div className="absolute top-4 left-4 text-yellow-600 opacity-50">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor">
        <path d="M5 5L25 5L25 25M5 5L5 25L25 25M5 5L15 15M25 5L15 15M5 25L15 15M25 25L15 15"/>
      </svg>
    </div>

    <div className="absolute top-4 right-4 text-yellow-600 opacity-50 transform rotate-90">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor">
        <path d="M5 5L25 5L25 25M5 5L5 25L25 25M5 5L15 15M25 5L15 15M5 25L15 15M25 25L15 15"/>
      </svg>
    </div>

    {/* Header */}
    <div className="text-center mb-6 relative z-10">
      <h1 className="text-yellow-700 text-lg font-bold tracking-wider">
        {weddingDetails.groomName.toUpperCase()}
      </h1>
      <div className="flex items-center justify-center my-2">
        <div className="w-8 h-0.5 bg-yellow-600"></div>
        <div className="mx-3 w-2 h-2 border border-yellow-600 rounded-full"></div>
        <div className="w-8 h-0.5 bg-yellow-600"></div>
      </div>
      <p className="text-gray-700 text-sm tracking-wide">AND</p>
      <div className="flex items-center justify-center my-2">
        <div className="w-8 h-0.5 bg-yellow-600"></div>
        <div className="mx-3 w-2 h-2 border border-yellow-600 rounded-full"></div>
        <div className="w-8 h-0.5 bg-yellow-600"></div>
      </div>
      <h1 className="text-yellow-700 text-lg font-bold tracking-wider">
        {weddingDetails.brideName.toUpperCase()}
      </h1>
    </div>

    {/* Couple Photo - Rectangular with golden frame */}
    <div className="flex justify-center mb-6 relative z-10">
      <div className="relative">
        <div className="w-40 h-32 bg-gradient-to-r from-yellow-400 to-amber-500 p-1 shadow-lg">
          <div 
            className="w-full h-full bg-cover bg-center bg-yellow-100"
            style={{
              backgroundImage: weddingDetails.couplePhotoUrl ? 
                `url(${weddingDetails.couplePhotoUrl})` : 
                'linear-gradient(135deg, #fef3c7 0%, #f59e0b 100%)'
            }}
          >
            {!weddingDetails.couplePhotoUrl && (
              <div className="w-full h-full flex items-center justify-center text-yellow-600 text-2xl">
                💑
              </div>
            )}
          </div>
        </div>
        {/* Double frame effect */}
        <div className="absolute -inset-1 border-2 border-yellow-500 opacity-60"></div>
      </div>
    </div>

    {/* Wedding Date and Details */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-700 text-sm font-medium tracking-wide">
        {weddingDetails.weddingDate}
      </p>
      <p className="text-gray-600 text-sm">
        {weddingDetails.ceremonyTime}
      </p>
      <p className="text-gray-600 text-sm mt-2">
        {weddingDetails.venue}
      </p>
      <p className="text-gray-600 text-sm">
        {weddingDetails.venueLocation}
      </p>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-700 text-sm leading-relaxed px-4 italic">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Website */}
    {weddingDetails.websiteUrl && (
      <div className="text-center mb-6 relative z-10">
        <p className="text-yellow-700 text-sm">{weddingDetails.websiteUrl}</p>
      </div>
    )}

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 pt-4 border-t border-yellow-400 relative z-10">
        <p className="text-yellow-700 font-medium">
          {guest.name}
        </p>
        <p className="text-gray-700 text-sm mt-1">
          Table {guest.tableNumber}
        </p>
      </div>
    )}
  </div>
);

const IllustratedTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-lg shadow-2xl max-w-md mx-auto text-gray-800 overflow-hidden"
    style={{ minHeight: '600px' }}
  >
    {/* Floral corner decorations */}
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-4 left-4 text-amber-600 opacity-40">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
          <path d="M10 25C15 20 20 15 25 20C30 25 35 20 40 25C35 30 30 35 25 30C20 25 15 30 10 25Z"/>
          <circle cx="15" cy="15" r="3"/>
          <circle cx="35" cy="35" r="3"/>
        </svg>
      </div>
      <div className="absolute top-4 right-4 text-amber-600 opacity-40 transform rotate-90">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
          <path d="M10 25C15 20 20 15 25 20C30 25 35 20 40 25C35 30 30 35 25 30C20 25 15 30 10 25Z"/>
        </svg>
      </div>
      <div className="absolute bottom-4 left-4 text-amber-600 opacity-40 transform rotate-180">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
          <path d="M10 25C15 20 20 15 25 20C30 25 35 20 40 25C35 30 30 35 25 30C20 25 15 30 10 25Z"/>
        </svg>
      </div>
      <div className="absolute bottom-4 right-4 text-amber-600 opacity-40 transform rotate-270">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
          <path d="M10 25C15 20 20 15 25 20C30 25 35 20 40 25C35 30 30 35 25 30C20 25 15 30 10 25Z"/>
        </svg>
      </div>
    </div>

    {/* Couple Names with decorative script */}
    <div className="text-center mb-8 relative z-10 pt-8">
      <h2 className="text-4xl font-script text-amber-800 tracking-wide">
        {weddingDetails.groomName} & {weddingDetails.brideName}
      </h2>
      <div className="w-24 h-0.5 bg-amber-600 mx-auto mt-4"></div>
    </div>

    {/* Invitation text */}
    <div className="text-center mb-8 relative z-10">
      <p className="text-amber-700 text-sm font-medium tracking-wide">
        INVITE YOU TO JOIN
      </p>
      <p className="text-amber-700 text-sm font-medium tracking-wide">
        THEM AS THEY SAY
      </p>
      <p className="text-amber-800 text-lg font-bold mt-2">
        "I DO!"
      </p>
    </div>

    {/* Couple Photo - Not visible in illustration style, but keeping placeholder */}
    <div className="flex justify-center mb-8 relative z-10">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-amber-200 to-orange-200 shadow-lg flex items-center justify-center">
        {weddingDetails.couplePhotoUrl ? (
          <div 
            className="w-full h-full rounded-full bg-cover bg-center"
            style={{backgroundImage: `url(${weddingDetails.couplePhotoUrl})`}}
          />
        ) : (
          <div className="text-amber-600 text-3xl">💑</div>
        )}
      </div>
    </div>

    {/* Wedding Date and Time */}
    <div className="text-center mb-8 relative z-10">
      <div className="border-t border-b border-amber-400 py-4">
        <p className="text-amber-800 text-sm font-semibold tracking-wide">
          {weddingDetails.weddingDate}
        </p>
        <p className="text-amber-700 text-lg font-bold mt-1">
          {weddingDetails.ceremonyTime}
        </p>
      </div>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-700 text-sm leading-relaxed px-4 italic">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Venue */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-amber-800 font-bold text-sm tracking-wide">
        {weddingDetails.venue}
      </p>
      <p className="text-gray-700 text-sm">
        {weddingDetails.venueLocation}
      </p>
      {weddingDetails.websiteUrl && (
        <p className="text-amber-700 text-sm mt-2">{weddingDetails.websiteUrl}</p>
      )}
    </div>

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 pt-4 border-t border-amber-400 relative z-10">
        <p className="text-amber-800 font-medium">
          {guest.name}
        </p>
        <p className="text-gray-700 text-sm mt-1">
          Table {guest.tableNumber}
        </p>
      </div>
    )}
  </div>
);

const AnniversaryTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative bg-gradient-to-br from-yellow-50 to-amber-100 p-8 rounded-lg shadow-2xl max-w-md mx-auto text-gray-800 overflow-hidden"
    style={{ minHeight: '600px' }}
  >
    {/* Golden leaf decorations */}
    <div className="absolute inset-0">
      <div className="absolute bottom-0 left-0 w-full h-24 opacity-30">
        <svg viewBox="0 0 400 100" className="w-full h-full text-yellow-600" fill="currentColor">
          <path d="M0,50 Q50,30 100,50 T200,50 T300,50 T400,50 L400,100 L0,100 Z"/>
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-full h-24 opacity-30 transform rotate-180">
        <svg viewBox="0 0 400 100" className="w-full h-full text-yellow-600" fill="currentColor">
          <path d="M0,50 Q50,30 100,50 T200,50 T300,50 T400,50 L400,100 L0,100 Z"/>
        </svg>
      </div>
    </div>

    {/* Header */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-yellow-700 text-sm font-light tracking-wide">
        COME AND JOIN US
      </p>
    </div>

    {/* Couple Names */}
    <div className="text-center mb-8 relative z-10">
      <h2 className="text-3xl font-serif text-yellow-800">
        {weddingDetails.groomName} and {weddingDetails.brideName}
      </h2>
    </div>

    {/* Couple Photo - Hexagonal */}
    <div className="flex justify-center mb-8 relative z-10">
      <div className="relative">
        <div 
          className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-amber-500 p-1 shadow-lg"
          style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-yellow-100"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              backgroundImage: weddingDetails.couplePhotoUrl ? 
                `url(${weddingDetails.couplePhotoUrl})` : 
                'linear-gradient(135deg, #fef3c7 0%, #f59e0b 100%)'
            }}
          >
            {!weddingDetails.couplePhotoUrl && (
              <div className="w-full h-full flex items-center justify-center text-yellow-600 text-2xl">
                💑
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    {/* Anniversary text */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-yellow-800 text-lg font-serif tracking-wide">
        25TH WEDDING ANNIVERSARY
      </p>
    </div>

    {/* Wedding Date and Time */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-yellow-700 text-xl font-bold">
        {weddingDetails.weddingDate} | {weddingDetails.ceremonyTime}
      </p>
      <p className="text-gray-700 text-sm mt-2">
        {weddingDetails.venue}, {weddingDetails.venueLocation}
      </p>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-700 text-sm leading-relaxed px-4">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* RSVP Info */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-yellow-800 font-bold">RSVP</p>
      {weddingDetails.websiteUrl && (
        <p className="text-yellow-700 text-sm mt-1">{weddingDetails.websiteUrl}</p>
      )}
    </div>

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 pt-4 border-t border-yellow-400 relative z-10">
        <p className="text-yellow-800 font-medium">
          {guest.name}
        </p>
        <p className="text-gray-700 text-sm mt-1">
          Table {guest.tableNumber}
        </p>
      </div>
    )}
  </div>
);

const NavyGoldTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative bg-gradient-to-br from-slate-800 to-blue-900 p-8 rounded-lg shadow-2xl max-w-md mx-auto text-white overflow-hidden"
    style={{ minHeight: '600px' }}
  >
    {/* Golden geometric frame */}
    <div className="absolute inset-6 border border-yellow-400 opacity-60" style={{clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'}}>
    </div>

    {/* Golden leaf decorations */}
    <div className="absolute top-4 left-4 text-yellow-400 opacity-60">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
        <path d="M5 20L15 10L25 20L35 10L35 30L25 20L15 30L5 20Z"/>
        <circle cx="10" cy="15" r="2"/>
        <circle cx="30" cy="25" r="2"/>
      </svg>
    </div>

    <div className="absolute bottom-4 right-4 text-yellow-400 opacity-60 transform rotate-180">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
        <path d="M5 20L15 10L25 20L35 10L35 30L25 20L15 30L5 20Z"/>
      </svg>
    </div>

    {/* Header */}
    <div className="text-center mb-6 relative z-10 pt-8">
      <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">
        SAVE THE DATE
      </p>
      <p className="text-white text-sm font-light tracking-wide mt-2">
        FOR THE WEDDING OF
      </p>
    </div>

    {/* Couple Names */}
    <div className="text-center mb-8 relative z-10">
      <h2 className="text-3xl font-script text-yellow-400">
        {weddingDetails.groomName}
      </h2>
      <p className="text-white text-lg my-2">AND</p>
      <h2 className="text-3xl font-script text-yellow-400">
        {weddingDetails.brideName}
      </h2>
      <div className="w-16 border-t border-yellow-400 mx-auto mt-4"></div>
    </div>

    {/* Couple Photo */}
    <div className="flex justify-center mb-8 relative z-10">
      <div className="w-32 h-32 rounded-sm bg-gradient-to-r from-yellow-400 to-amber-500 p-1 shadow-lg">
        <div 
          className="w-full h-full rounded-sm bg-cover bg-center bg-gray-100"
          style={{
            backgroundImage: weddingDetails.couplePhotoUrl ? 
              `url(${weddingDetails.couplePhotoUrl})` : 
              'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
          }}
        >
          {!weddingDetails.couplePhotoUrl && (
            <div className="w-full h-full rounded-sm flex items-center justify-center text-yellow-400 text-2xl">
              💑
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Wedding Details */}
    <div className="text-center mb-6 relative z-10">
      <div className="border-t border-b border-yellow-400 py-4">
        <p className="text-white text-sm">YOUR CHURCH</p>
        <p className="text-yellow-400 text-lg font-bold">{weddingDetails.weddingDate}</p>
        <p className="text-white text-sm">{weddingDetails.ceremonyTime}</p>
      </div>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-300 text-sm leading-relaxed px-4">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Venue */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-yellow-400 font-medium text-sm tracking-wide">
        {weddingDetails.venue}
      </p>
      <p className="text-white text-sm">{weddingDetails.venueLocation}</p>
      {weddingDetails.websiteUrl && (
        <p className="text-yellow-400 text-sm mt-2">{weddingDetails.websiteUrl}</p>
      )}
    </div>

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 pt-4 border-t border-yellow-400 relative z-10">
        <p className="text-yellow-400 font-medium">
          {guest.name}
        </p>
        <p className="text-white text-sm mt-1">
          Table {guest.tableNumber}
        </p>
      </div>
    )}
  </div>
);

const LuxuryNavyTemplate: React.FC<{ guest: Guest | null; weddingDetails: WeddingDetails }> = ({ guest, weddingDetails }) => (
  <div 
    id="wedding-invitation" 
    className="relative bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-lg shadow-2xl max-w-md mx-auto text-white overflow-hidden"
    style={{ minHeight: '600px' }}
  >
    {/* Elegant frame */}
    <div className="absolute inset-4 border-2 border-yellow-400 opacity-40 rounded-sm"></div>
    <div className="absolute inset-6 border border-yellow-400 opacity-60 rounded-sm"></div>

    {/* Decorative corner elements */}
    <div className="absolute top-6 left-6 text-yellow-400">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M0 0L20 0L20 20M0 0L0 20L20 20M0 0L10 10M20 0L10 10M0 20L10 10M20 20L10 10"/>
      </svg>
    </div>
    <div className="absolute top-6 right-6 text-yellow-400 transform rotate-90">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M0 0L20 0L20 20M0 0L0 20L20 20M0 0L10 10M20 0L10 10M0 20L10 10M20 20L10 10"/>
      </svg>
    </div>
    <div className="absolute bottom-6 left-6 text-yellow-400 transform rotate-270">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M0 0L20 0L20 20M0 0L0 20L20 20M0 0L10 10M20 0L10 10M0 20L10 10M20 20L10 10"/>
      </svg>
    </div>
    <div className="absolute bottom-6 right-6 text-yellow-400 transform rotate-180">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M0 0L20 0L20 20M0 0L0 20L20 20M0 0L10 10M20 0L10 10M0 20L10 10M20 20L10 10"/>
      </svg>
    </div>

    {/* Header */}
    <div className="text-center mb-6 relative z-10 pt-8">
      <p className="text-yellow-400 text-xs font-light tracking-widest uppercase">
        together with their families
      </p>
    </div>

    {/* Couple Names */}
    <div className="text-center mb-8 relative z-10">
      <h2 className="text-2xl font-serif text-yellow-400 tracking-wider">
        {weddingDetails.groomName.toUpperCase()}
      </h2>
      <div className="flex items-center justify-center my-4">
        <div className="w-8 h-0.5 bg-yellow-400"></div>
        <div className="mx-4 text-yellow-400 text-sm">●</div>
        <div className="w-8 h-0.5 bg-yellow-400"></div>
      </div>
      <h2 className="text-2xl font-serif text-yellow-400 tracking-wider">
        {weddingDetails.brideName.toUpperCase()}
      </h2>
    </div>

    {/* Invitation text */}
    <div className="text-center mb-8 relative z-10">
      <p className="text-white text-sm font-light">
        invite you to celebrate
      </p>
      <p className="text-white text-sm font-light">
        the joy of their wedding day
      </p>
    </div>

    {/* Couple Photo */}
    <div className="flex justify-center mb-8 relative z-10">
      <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-amber-500 p-0.5 shadow-lg">
        <div 
          className="w-full h-full bg-cover bg-center bg-gray-800"
          style={{
            backgroundImage: weddingDetails.couplePhotoUrl ? 
              `url(${weddingDetails.couplePhotoUrl})` : 
              'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
          }}
        >
          {!weddingDetails.couplePhotoUrl && (
            <div className="w-full h-full flex items-center justify-center text-yellow-400 text-2xl">
              💑
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Wedding Date and Details */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-yellow-400 text-sm font-semibold tracking-wide">
        {weddingDetails.weddingDate}
      </p>
      <p className="text-white text-sm">
        {weddingDetails.ceremonyTime}
      </p>
      <p className="text-white text-sm mt-2">
        {weddingDetails.venue}
      </p>
      <p className="text-gray-300 text-sm">
        {weddingDetails.venueLocation}
      </p>
    </div>

    {/* Description */}
    <div className="text-center mb-6 relative z-10">
      <p className="text-gray-300 text-sm leading-relaxed px-6 italic">
        {weddingDetails.invitationText}
      </p>
    </div>

    {/* Website */}
    {weddingDetails.websiteUrl && (
      <div className="text-center mb-6 relative z-10">
        <p className="text-yellow-400 text-sm">{weddingDetails.websiteUrl}</p>
      </div>
    )}

    {/* Guest Info */}
    {guest && (
      <div className="text-center mt-8 pt-4 border-t border-yellow-400 relative z-10">
        <p className="text-yellow-400 font-medium">
          {guest.name}
        </p>
        <p className="text-white text-sm mt-1">
          Table {guest.tableNumber}
        </p>
      </div>
    )}
  </div>
);

const InvitationTemplates: React.FC<InvitationTemplatesProps> = ({
  template,
  guest,
  weddingDetails,
  isPreview = false
}) => {
  switch (template) {
    case 'winter':
      return <WinterTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'elegant':
      return <ElegantTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'romantic':
      return <RomanticTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'modern':
      return <ModernTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'balloons':
      return <BalloonsTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'celebration':
      return <CelebrationTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'floral':
      return <FloralTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'botanical':
      return <BotanicalTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'oval':
      return <OvalTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'purple':
      return <PurpleTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'watercolor':
      return <WatercolorTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'purple-roses':
      return <PurpleRosesTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'coral':
      return <CoralTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'garden':
      return <GardenTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'minimal-beige':
      return <MinimalBeigeTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'golden-hexagon':
      return <GoldenHexagonTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'eucalyptus':
      return <EucalyptusTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'golden-frame':
      return <GoldenFrameTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'illustrated':
      return <IllustratedTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'anniversary':
      return <AnniversaryTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'navy-gold':
      return <NavyGoldTemplate guest={guest} weddingDetails={weddingDetails} />;
    case 'luxury-navy':
      return <LuxuryNavyTemplate guest={guest} weddingDetails={weddingDetails} />;
    default:
      return <WinterTemplate guest={guest} weddingDetails={weddingDetails} />;
  }
};

export default InvitationTemplates;
