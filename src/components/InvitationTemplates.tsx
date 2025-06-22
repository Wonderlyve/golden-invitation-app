
import React from 'react';
import { Guest, WeddingDetails } from '@/types/guest';
import { Heart, MapPin, Calendar, Clock, Users } from 'lucide-react';

interface InvitationTemplatesProps {
  template: string;
  guest: Guest | null;
  weddingDetails: WeddingDetails;
  isPreview?: boolean;
}

const InvitationTemplates: React.FC<InvitationTemplatesProps> = ({
  template,
  guest,
  weddingDetails,
  isPreview = false
}) => {
  // Base container style with fixed dimensions (2310x1080px)
  const baseContainerStyle = "relative overflow-hidden bg-gradient-to-br text-white font-serif";
  const fixedDimensions = "w-[2310px] h-[1080px]";
  
  // Scale for preview mode to fit in the UI
  const scaleClass = isPreview ? "scale-[0.2] origin-top-left" : "";
  const containerClass = `${baseContainerStyle} ${fixedDimensions} ${scaleClass}`;

  const renderTemplate = () => {
    switch (template) {
      case 'elegant-rose':
        return (
          <div className={`${containerClass} from-rose-900 via-pink-800 to-rose-900`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-16 left-0 w-64 h-64 bg-rose-300/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-16 right-0 w-80 h-80 bg-pink-300/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-32 text-center">
              <div className="mb-12">
                <Heart className="w-24 h-24 text-rose-300 mx-auto mb-8" />
                <h1 className="text-8xl font-bold mb-6 text-rose-100">
                  {weddingDetails.groomName} & {weddingDetails.brideName}
                </h1>
                <p className="text-3xl text-rose-200 mb-16">
                  Ont l'honneur de vous inviter à leur mariage
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-16 mb-16 border border-white/20">
                <div className="grid grid-cols-2 gap-12 text-2xl">
                  <div className="flex items-center justify-center">
                    <Calendar className="w-8 h-8 mr-4 text-rose-300" />
                    <span>{weddingDetails.weddingDate}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Clock className="w-8 h-8 mr-4 text-rose-300" />
                    <span>{weddingDetails.ceremonyTime}</span>
                  </div>
                  <div className="flex items-center justify-center col-span-2">
                    <MapPin className="w-8 h-8 mr-4 text-rose-300" />
                    <span>{weddingDetails.venue}, {weddingDetails.venueLocation}</span>
                  </div>
                </div>
              </div>

              {guest && (
                <div className="bg-rose-600/30 backdrop-blur-sm rounded-2xl p-12 border border-rose-300/30">
                  <div className="flex items-center justify-center">
                    <Users className="w-8 h-8 mr-4 text-rose-200" />
                    <span className="text-2xl font-semibold">{guest.name} - Table {guest.tableNumber}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'minimal-beige':
        return (
          <div className={`${containerClass} from-amber-50 via-orange-50 to-amber-100 text-amber-900`}>
            <div className="absolute top-32 left-32 w-96 h-96 bg-amber-200/20 rounded-full"></div>
            <div className="absolute bottom-32 right-32 w-80 h-80 bg-orange-200/20 rounded-full"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-32 text-center">
              <div className="mb-16">
                <div className="w-32 h-1 bg-amber-600 mx-auto mb-12"></div>
                <h1 className="text-7xl font-light mb-8 text-amber-800 tracking-wide">
                  {weddingDetails.groomName}
                </h1>
                <div className="text-4xl text-amber-600 mb-8">&</div>
                <h1 className="text-7xl font-light mb-12 text-amber-800 tracking-wide">
                  {weddingDetails.brideName}
                </h1>
                <div className="w-32 h-1 bg-amber-600 mx-auto mb-12"></div>
              </div>
              
              <p className="text-3xl text-amber-700 mb-16 font-light">
                Célébrons notre union
              </p>
              
              <div className="space-y-8 text-2xl text-amber-800">
                <div className="flex items-center justify-center">
                  <Calendar className="w-8 h-8 mr-4 text-amber-600" />
                  <span>{weddingDetails.weddingDate} à {weddingDetails.ceremonyTime}</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-8 h-8 mr-4 text-amber-600" />
                  <span>{weddingDetails.venue}, {weddingDetails.venueLocation}</span>
                </div>
              </div>

              {guest && (
                <div className="mt-16 bg-amber-200/30 rounded-2xl p-12">
                  <div className="flex items-center justify-center">
                    <Users className="w-8 h-8 mr-4 text-amber-700" />
                    <span className="text-2xl text-amber-800">{guest.name} - Table {guest.tableNumber}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'golden-hexagon':
        return (
          <div className={`${containerClass} from-yellow-900 via-amber-800 to-yellow-900`}>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
              <div className="w-full h-full border-4 border-yellow-400/50 transform rotate-45"></div>
            </div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-32 text-center">
              <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-20 border border-yellow-400/30">
                <h1 className="text-8xl font-bold mb-8 text-yellow-200">
                  {weddingDetails.groomName}
                </h1>
                <div className="flex items-center justify-center mb-8">
                  <div className="w-24 h-1 bg-yellow-400"></div>
                  <Heart className="w-12 h-12 text-yellow-400 mx-8" />
                  <div className="w-24 h-1 bg-yellow-400"></div>
                </div>
                <h1 className="text-8xl font-bold mb-12 text-yellow-200">
                  {weddingDetails.brideName}
                </h1>
                
                <p className="text-3xl text-yellow-300 mb-16">
                  Vous invitent à célébrer leur mariage
                </p>
                
                <div className="space-y-6 text-2xl text-yellow-100">
                  <div className="flex items-center justify-center">
                    <Calendar className="w-8 h-8 mr-4 text-yellow-400" />
                    <span>{weddingDetails.weddingDate} à {weddingDetails.ceremonyTime}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-8 h-8 mr-4 text-yellow-400" />
                    <span>{weddingDetails.venue}, {weddingDetails.venueLocation}</span>
                  </div>
                </div>

                {guest && (
                  <div className="mt-12 bg-yellow-600/20 rounded-2xl p-12 border border-yellow-400/30">
                    <div className="flex items-center justify-center">
                      <Users className="w-8 h-8 mr-4 text-yellow-300" />
                      <span className="text-2xl text-yellow-200">{guest.name} - Table {guest.tableNumber}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 'eucalyptus':
        return (
          <div className={`${containerClass} from-emerald-100 via-green-50 to-emerald-100 text-emerald-900`}>
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-200/30 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-emerald-200/30 to-transparent"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-32 text-center">
              <div className="mb-16">
                <div className="flex items-center justify-center mb-12">
                  <div className="w-16 h-16 bg-emerald-300 rounded-full mr-6"></div>
                  <div className="w-20 h-20 bg-emerald-400 rounded-full"></div>
                  <div className="w-16 h-16 bg-emerald-300 rounded-full ml-6"></div>
                </div>
                
                <h1 className="text-7xl font-light mb-6 text-emerald-800">
                  {weddingDetails.groomName} & {weddingDetails.brideName}
                </h1>
                <p className="text-3xl text-emerald-600 mb-16 italic">
                  Une célébration naturelle de notre amour
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-16 mb-16 border border-emerald-200">
                <div className="space-y-8 text-2xl text-emerald-800">
                  <div className="flex items-center justify-center">
                    <Calendar className="w-8 h-8 mr-4 text-emerald-600" />
                    <span>{weddingDetails.weddingDate} à {weddingDetails.ceremonyTime}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-8 h-8 mr-4 text-emerald-600" />
                    <span>{weddingDetails.venue}, {weddingDetails.venueLocation}</span>
                  </div>
                </div>
              </div>

              {guest && (
                <div className="bg-emerald-200/40 rounded-2xl p-12 border border-emerald-300">
                  <div className="flex items-center justify-center">
                    <Users className="w-8 h-8 mr-4 text-emerald-700" />
                    <span className="text-2xl text-emerald-800">{guest.name} - Table {guest.tableNumber}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'golden-frame':
        return (
          <div className={`${containerClass} from-amber-900 via-yellow-800 to-amber-900`}>
            <div className="absolute inset-8 border-8 border-yellow-400"></div>
            <div className="absolute inset-16 border-4 border-yellow-300/50"></div>
            <div className="absolute inset-24 border-2 border-yellow-200/30"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-40 text-center">
              <div className="mb-16">
                <div className="w-32 h-32 bg-yellow-400/20 rounded-full mx-auto mb-12 flex items-center justify-center">
                  <Heart className="w-16 h-16 text-yellow-300" />
                </div>
                
                <h1 className="text-7xl font-bold mb-8 text-yellow-200 tracking-wider">
                  {weddingDetails.groomName}
                </h1>
                <div className="text-5xl text-yellow-400 mb-8 font-light">&</div>
                <h1 className="text-7xl font-bold mb-12 text-yellow-200 tracking-wider">
                  {weddingDetails.brideName}
                </h1>
              </div>
              
              <p className="text-3xl text-yellow-300 mb-16 font-light">
                Ont l'honneur de vous convier à leur union
              </p>
              
              <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-16 border border-yellow-400/30">
                <div className="space-y-8 text-2xl text-yellow-100">
                  <div className="flex items-center justify-center">
                    <Calendar className="w-8 h-8 mr-4 text-yellow-400" />
                    <span>{weddingDetails.weddingDate} à {weddingDetails.ceremonyTime}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-8 h-8 mr-4 text-yellow-400" />
                    <span>{weddingDetails.venue}, {weddingDetails.venueLocation}</span>
                  </div>
                </div>

                {guest && (
                  <div className="mt-12 bg-yellow-600/20 rounded-xl p-12 border-t border-yellow-400/30">
                    <div className="flex items-center justify-center">
                      <Users className="w-8 h-8 mr-4 text-yellow-300" />
                      <span className="text-2xl text-yellow-200">{guest.name} - Table {guest.tableNumber}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 'illustrated':
        return (
          <div className={`${containerClass} from-purple-100 via-pink-50 to-purple-100 text-purple-900`}>
            <div className="absolute top-16 left-16 w-64 h-64 bg-pink-200/30 rounded-full"></div>
            <div className="absolute top-32 right-32 w-48 h-48 bg-purple-200/30 rounded-full"></div>
            <div className="absolute bottom-32 left-1/4 w-56 h-56 bg-indigo-200/30 rounded-full"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-32 text-center">
              <div className="mb-16">
                <div className="mb-12">
                  <div className="flex items-center justify-center space-x-6 mb-8">
                    <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
                    <div className="w-12 h-12 bg-purple-400 rounded-full"></div>
                    <div className="w-8 h-8 bg-indigo-400 rounded-full"></div>
                  </div>
                </div>
                
                <h1 className="text-8xl font-bold mb-8 text-purple-800">
                  {weddingDetails.groomName}
                </h1>
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-1 bg-pink-400"></div>
                  <Heart className="w-12 h-12 text-pink-500 mx-8" />
                  <div className="w-16 h-1 bg-pink-400"></div>
                </div>
                <h1 className="text-8xl font-bold mb-16 text-purple-800">
                  {weddingDetails.brideName}
                </h1>
              </div>
              
              <p className="text-3xl text-purple-600 mb-16 italic">
                Une histoire d'amour à célébrer ensemble
              </p>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-16 border border-purple-200">
                <div className="space-y-8 text-2xl text-purple-800">
                  <div className="flex items-center justify-center">
                    <Calendar className="w-8 h-8 mr-4 text-purple-600" />
                    <span>{weddingDetails.weddingDate} à {weddingDetails.ceremonyTime}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-8 h-8 mr-4 text-purple-600" />
                    <span>{weddingDetails.venue}, {weddingDetails.venueLocation}</span>
                  </div>
                </div>

                {guest && (
                  <div className="mt-12 bg-purple-200/40 rounded-2xl p-12 border border-purple-300">
                    <div className="flex items-center justify-center">
                      <Users className="w-8 h-8 mr-4 text-purple-700" />
                      <span className="text-2xl text-purple-800">{guest.name} - Table {guest.tableNumber}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 'anniversary':
        return (
          <div className={`${containerClass} from-red-900 via-rose-800 to-red-900`}>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-rose-400/30 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-rose-400/20 rounded-full"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-32 text-center">
              <div className="mb-16">
                <div className="mb-12">
                  <Heart className="w-32 h-32 text-rose-300 mx-auto mb-8" />
                </div>
                
                <h1 className="text-7xl font-bold mb-8 text-rose-100">
                  {weddingDetails.groomName} & {weddingDetails.brideName}
                </h1>
                <p className="text-3xl text-rose-200 mb-16">
                  Célébrons notre amour éternel
                </p>
              </div>
              
              <div className="bg-rose-600/20 backdrop-blur-sm rounded-3xl p-16 border border-rose-300/30">
                <div className="space-y-8 text-2xl text-rose-100">
                  <div className="flex items-center justify-center">
                    <Calendar className="w-8 h-8 mr-4 text-rose-300" />
                    <span>{weddingDetails.weddingDate} à {weddingDetails.ceremonyTime}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-8 h-8 mr-4 text-rose-300" />
                    <span>{weddingDetails.venue}, {weddingDetails.venueLocation}</span>
                  </div>
                </div>

                {guest && (
                  <div className="mt-12 bg-rose-500/20 rounded-2xl p-12 border-t border-rose-300/30">
                    <div className="flex items-center justify-center">
                      <Users className="w-8 h-8 mr-4 text-rose-200" />
                      <span className="text-2xl text-rose-100">{guest.name} - Table {guest.tableNumber}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 'navy-gold':
        return (
          <div className={`${containerClass} from-slate-900 via-blue-900 to-slate-900`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-32 text-center">
              <div className="mb-16">
                <div className="w-48 h-1 bg-yellow-400 mx-auto mb-12"></div>
                
                <h1 className="text-8xl font-bold mb-8 text-slate-100 tracking-wide">
                  {weddingDetails.groomName}
                </h1>
                <div className="text-5xl text-yellow-400 mb-8">&</div>
                <h1 className="text-8xl font-bold mb-12 text-slate-100 tracking-wide">
                  {weddingDetails.brideName}
                </h1>
                
                <div className="w-48 h-1 bg-yellow-400 mx-auto mb-16"></div>
              </div>
              
              <p className="text-3xl text-slate-300 mb-16 font-light">
                Unissent leurs destins
              </p>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-16 border border-yellow-400/30">
                <div className="space-y-8 text-2xl text-slate-200">
                  <div className="flex items-center justify-center">
                    <Calendar className="w-8 h-8 mr-4 text-yellow-400" />
                    <span>{weddingDetails.weddingDate} à {weddingDetails.ceremonyTime}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-8 h-8 mr-4 text-yellow-400" />
                    <span>{weddingDetails.venue}, {weddingDetails.venueLocation}</span>
                  </div>
                </div>

                {guest && (
                  <div className="mt-12 bg-yellow-600/20 rounded-xl p-12 border-t border-yellow-400/30">
                    <div className="flex items-center justify-center">
                      <Users className="w-8 h-8 mr-4 text-yellow-300" />
                      <span className="text-2xl text-slate-100">{guest.name} - Table {guest.tableNumber}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 'luxury-navy':
        return (
          <div className={`${containerClass} from-slate-800 via-slate-900 to-slate-800`}>
            <div className="absolute inset-12 border-4 border-slate-400/30"></div>
            <div className="absolute inset-20 border-2 border-slate-500/20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-slate-700/10 rounded-full"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-40 text-center">
              <div className="mb-16">
                <div className="mb-12">
                  <div className="w-24 h-24 bg-slate-600/30 rounded-full mx-auto mb-8 flex items-center justify-center border border-slate-500/30">
                    <Heart className="w-12 h-12 text-slate-300" />
                  </div>
                </div>
                
                <h1 className="text-7xl font-bold mb-8 text-slate-100 tracking-widest">
                  {weddingDetails.groomName}
                </h1>
                <div className="flex items-center justify-center mb-8">
                  <div className="w-24 h-0.5 bg-slate-400"></div>
                  <div className="w-4 h-4 bg-slate-400 rounded-full mx-8"></div>
                  <div className="w-24 h-0.5 bg-slate-400"></div>
                </div>
                <h1 className="text-7xl font-bold mb-16 text-slate-100 tracking-widest">
                  {weddingDetails.brideName}
                </h1>
              </div>
              
              <p className="text-3xl text-slate-300 mb-16 font-light tracking-wide">
                Excellence et élégance pour notre union
              </p>
              
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-16 border border-slate-500/30">
                <div className="space-y-8 text-2xl text-slate-200">
                  <div className="flex items-center justify-center">
                    <Calendar className="w-8 h-8 mr-4 text-slate-400" />
                    <span>{weddingDetails.weddingDate} à {weddingDetails.ceremonyTime}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-8 h-8 mr-4 text-slate-400" />
                    <span>{weddingDetails.venue}, {weddingDetails.venueLocation}</span>
                  </div>
                </div>

                {guest && (
                  <div className="mt-12 bg-slate-700/30 rounded-xl p-12 border-t border-slate-500/30">
                    <div className="flex items-center justify-center">
                      <Users className="w-8 h-8 mr-4 text-slate-300" />
                      <span className="text-2xl text-slate-100">{guest.name} - Table {guest.tableNumber}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return renderTemplate();
    }
  };

  return (
    <div className={isPreview ? "w-full h-56 overflow-hidden" : "w-full"}>
      {renderTemplate()}
    </div>
  );
};

export default InvitationTemplates;
