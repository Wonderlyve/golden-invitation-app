
import React from 'react';
import { Guest } from '@/types/guest';
import { WeddingDetails } from '@/types/template';
import { Heart, Calendar, MapPin, Clock, Users } from 'lucide-react';

interface InvitationTemplatesProps {
  template: string;
  guest: Guest;
  weddingDetails: WeddingDetails;
  isPreview?: boolean;
}

const InvitationTemplates: React.FC<InvitationTemplatesProps> = ({
  template,
  guest,
  weddingDetails,
  isPreview = false
}) => {
  const baseStyle = "w-[2310px] h-[1080px] flex flex-col justify-center items-center text-white relative overflow-hidden";
  
  switch (template) {
    case 'romantic':
      return (
        <div className={`${baseStyle} bg-gradient-to-br from-pink-600 via-rose-500 to-red-600`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center max-w-[2000px] px-20">
            <div className="mb-12">
              <Heart className="w-32 h-32 text-white/90 mx-auto mb-8" />
              <h1 className="text-9xl font-serif mb-6 text-white tracking-wide">
                {weddingDetails.groomName} & {weddingDetails.brideName}
              </h1>
              <p className="text-4xl font-light mb-8 text-white/90">
                ont le plaisir de vous inviter à leur mariage
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-12 border border-white/20">
              <h2 className="text-6xl font-elegant mb-8 text-yellow-200">
                {guest.name}
              </h2>
              <div className="grid grid-cols-2 gap-8 text-2xl">
                <div className="flex items-center justify-center">
                  <Calendar className="w-8 h-8 mr-4" />
                  <span>{weddingDetails.weddingDate}</span>
                </div>
                <div className="flex items-center justify-center">
                  <Clock className="w-8 h-8 mr-4" />
                  <span>{weddingDetails.ceremonyTime}</span>
                </div>
                <div className="flex items-center justify-center col-span-2">
                  <MapPin className="w-8 h-8 mr-4" />
                  <span>{weddingDetails.venue}, {weddingDetails.venueLocation}</span>
                </div>
                <div className="flex items-center justify-center col-span-2">
                  <Users className="w-8 h-8 mr-4" />
                  <span>Table {guest.tableNumber}</span>
                </div>
              </div>
            </div>
            
            <p className="text-3xl font-light text-white/80">
              Votre présence sera notre plus beau cadeau
            </p>
          </div>
        </div>
      );

    case 'elegant':
      return (
        <div className={`${baseStyle} bg-gradient-to-br from-slate-800 via-gray-900 to-black`}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="relative z-10 text-center max-w-[2000px] px-20">
            <div className="border-4 border-gold p-16 bg-black/30 backdrop-blur-sm">
              <div className="mb-12">
                <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
                <h1 className="text-8xl font-serif mb-6 text-gold tracking-wider">
                  {weddingDetails.groomName}
                </h1>
                <div className="text-6xl font-light mb-6 text-white">&</div>
                <h1 className="text-8xl font-serif mb-8 text-gold tracking-wider">
                  {weddingDetails.brideName}
                </h1>
                <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
              </div>
              
              <p className="text-3xl font-light mb-12 text-white/90 tracking-wide">
                Célébration de leur union
              </p>
              
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-10 mb-12">
                <h2 className="text-5xl font-serif mb-8 text-gold">
                  {guest.name}
                </h2>
                <div className="space-y-4 text-xl text-white">
                  <div className="flex items-center justify-center">
                    <Calendar className="w-6 h-6 mr-3 text-gold" />
                    <span>{weddingDetails.weddingDate} à {weddingDetails.ceremonyTime}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-6 h-6 mr-3 text-gold" />
                    <span>{weddingDetails.venue}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-gold mr-3">📍</span>
                    <span>{weddingDetails.venueLocation}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Users className="w-6 h-6 mr-3 text-gold" />
                    <span>Table {guest.tableNumber}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-2xl font-light text-white/80 italic">
                "L'amour ne se voit pas avec les yeux, mais avec l'âme"
              </p>
            </div>
          </div>
        </div>
      );

    case 'modern':
      return (
        <div className={`${baseStyle} bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900`}>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 text-center max-w-[2000px] px-20">
            <div className="mb-12">
              <div className="flex items-center justify-center mb-8">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
              </div>
              <h1 className="text-9xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                {weddingDetails.groomName}
              </h1>
              <div className="text-5xl font-light mb-4 text-white/80">&</div>
              <h1 className="text-9xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                {weddingDetails.brideName}
              </h1>
              <div className="flex items-center justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
              </div>
            </div>
            
            <p className="text-4xl font-light mb-12 text-white/90">
              s'unissent pour la vie
            </p>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20 mb-12">
              <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {guest.name}
              </h2>
              <div className="grid grid-cols-2 gap-6 text-xl text-white">
                <div className="bg-white/10 rounded-xl p-6 flex items-center justify-center">
                  <Calendar className="w-8 h-8 mr-4 text-pink-400" />
                  <span>{weddingDetails.weddingDate}</span>
                </div>
                <div className="bg-white/10 rounded-xl p-6 flex items-center justify-center">
                  <Clock className="w-8 h-8 mr-4 text-blue-400" />
                  <span>{weddingDetails.ceremonyTime}</span>
                </div>
                <div className="bg-white/10 rounded-xl p-6 flex items-center justify-center col-span-2">
                  <MapPin className="w-8 h-8 mr-4 text-green-400" />
                  <span>{weddingDetails.venue}, {weddingDetails.venueLocation}</span>
                </div>
                <div className="bg-white/10 rounded-xl p-6 flex items-center justify-center col-span-2">
                  <Users className="w-8 h-8 mr-4 text-purple-400" />
                  <span>Table {guest.tableNumber}</span>
                </div>
              </div>
            </div>
            
            <p className="text-3xl font-light text-white/80">
              Rejoignez-nous pour célébrer notre amour
            </p>
          </div>
        </div>
      );

    case 'tropical':
      return (
        <div className={`${baseStyle} bg-gradient-to-br from-teal-600 via-green-600 to-emerald-700`}>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-10 left-10 text-green-300/30 text-9xl">🌺</div>
              <div className="absolute top-32 right-20 text-pink-300/30 text-7xl">🌴</div>
              <div className="absolute bottom-20 left-32 text-yellow-300/30 text-8xl">🦋</div>
              <div className="absolute bottom-32 right-10 text-orange-300/30 text-6xl">🌸</div>
            </div>
          </div>
          <div className="relative z-10 text-center max-w-[2000px] px-20">
            <div className="mb-12">
              <div className="text-8xl mb-8">🌺</div>
              <h1 className="text-9xl font-bold mb-6 text-white drop-shadow-lg">
                {weddingDetails.groomName} & {weddingDetails.brideName}
              </h1>
              <p className="text-4xl font-light mb-8 text-yellow-100">
                Destination Wedding
              </p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-12 mb-12 border border-white/30 shadow-2xl">
              <h2 className="text-6xl font-bold mb-8 text-yellow-200 drop-shadow-md">
                {guest.name}
              </h2>
              <div className="grid grid-cols-2 gap-8 text-2xl text-white">
                <div className="bg-teal-700/50 rounded-2xl p-6 flex items-center justify-center">
                  <Calendar className="w-8 h-8 mr-4 text-yellow-300" />
                  <span>{weddingDetails.weddingDate}</span>
                </div>
                <div className="bg-teal-700/50 rounded-2xl p-6 flex items-center justify-center">
                  <Clock className="w-8 h-8 mr-4 text-pink-300" />
                  <span>{weddingDetails.ceremonyTime}</span>
                </div>
                <div className="bg-teal-700/50 rounded-2xl p-6 flex items-center justify-center col-span-2">
                  <MapPin className="w-8 h-8 mr-4 text-orange-300" />
                  <span>{weddingDetails.venue}, {weddingDetails.venueLocation}</span>
                </div>
                <div className="bg-teal-700/50 rounded-2xl p-6 flex items-center justify-center col-span-2">
                  <Users className="w-8 h-8 mr-4 text-green-300" />
                  <span>Table {guest.tableNumber}</span>
                </div>
              </div>
            </div>
            
            <p className="text-3xl font-light text-white/90">
              Paradise awaits us all 🏝️
            </p>
          </div>
        </div>
      );

    default:
      return (
        <div className={`${baseStyle} bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600`}>
          <div className="relative z-10 text-center max-w-[2000px] px-20">
            <h1 className="text-9xl font-bold mb-8 text-white">
              {weddingDetails.groomName} & {weddingDetails.brideName}
            </h1>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-12">
              <h2 className="text-6xl font-bold mb-8 text-yellow-200">
                {guest.name}
              </h2>
              <div className="text-2xl text-white space-y-4">
                <p>{weddingDetails.weddingDate} à {weddingDetails.ceremonyTime}</p>
                <p>{weddingDetails.venue}, {weddingDetails.venueLocation}</p>
                <p>Table {guest.tableNumber}</p>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export default InvitationTemplates;
