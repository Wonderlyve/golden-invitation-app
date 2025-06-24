
import React from 'react';

interface PinkElegantTemplateProps {
  guestName: string;
  tableNumber: string;
  brideName: string;
  groomName: string;
  weddingDate: string;
  weddingTime: string;
  venue: string;
  location: string;
  website: string;
}

const PinkElegantTemplate: React.FC<PinkElegantTemplateProps> = ({
  guestName,
  tableNumber,
  brideName,
  groomName,
  weddingDate,
  weddingTime,
  venue,
  location,
  website,
}) => {
  return (
    <div 
      id="invitation-container"
      className="w-[350px] h-[700px] relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #fce7f3, #fbcfe8, #f9a8d4)',
      }}
    >
      {/* Decorative flowers scattered around */}
      <div className="absolute top-4 left-4 text-pink-400 text-2xl">🌸</div>
      <div className="absolute top-8 right-6 text-pink-300 text-xl">🌺</div>
      <div className="absolute top-24 left-8 text-pink-400 text-lg">🌸</div>
      <div className="absolute top-32 right-4 text-pink-300 text-lg">🌺</div>
      <div className="absolute bottom-32 left-6 text-pink-400 text-xl">🌸</div>
      <div className="absolute bottom-24 right-8 text-pink-300 text-lg">🌺</div>
      <div className="absolute bottom-16 left-4 text-pink-400 text-lg">🌸</div>
      <div className="absolute bottom-40 right-6 text-pink-300 text-xl">🌺</div>

      <div className="flex flex-col items-center justify-between h-full p-6 text-center">
        {/* Header */}
        <div className="mt-4">
          <p className="text-pink-600 text-sm font-light tracking-wider">
            Cérémonie à {weddingTime}
          </p>
          <h1 className="text-pink-700 text-lg font-light mt-1 tracking-wide">
            Avec Amour
          </h1>
        </div>

        {/* Central Circle with rings */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full border-4 border-pink-400 bg-white/80 flex items-center justify-center relative">
            <div className="text-2xl">💍</div>
          </div>
        </div>

        {/* Couple Names */}
        <div className="mb-6">
          <h2 className="text-pink-800 text-3xl font-light mb-4">
            {groomName} & {brideName}
          </h2>
          <p className="text-pink-700 text-sm leading-relaxed px-4">
            Nous avons l'honneur de vous inviter
            à célébrer notre union dans un cadre
            magique. Votre présence illuminera
            cette journée exceptionnelle.
          </p>
        </div>

        {/* Date and Location */}
        <div className="mb-6">
          <div className="text-pink-800 text-xl font-light mb-2">
            22<sup className="text-sm">TH</sup> OCT
          </div>
          <div className="text-pink-700 font-medium">
            {venue}
          </div>
          <div className="text-pink-600 text-sm">
            {location}
          </div>
          {website && (
            <div className="text-pink-600 text-sm mt-2">
              {website}
            </div>
          )}
        </div>

        {/* Guest Info */}
        <div className="mb-4">
          <div className="text-pink-700 text-lg font-medium">
            Cher(e) {guestName}
          </div>
          <div className="text-pink-600 text-sm">
            Table {tableNumber}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinkElegantTemplate;
