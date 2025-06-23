
import React from 'react';
import { Guest } from '@/types/guest';
import { WeddingDetails } from '@/types/wedding';

interface BlueEucalyptusTemplateProps {
  guest: Guest;
  weddingDetails: WeddingDetails;
}

const BlueEucalyptusTemplate: React.FC<BlueEucalyptusTemplateProps> = ({ guest, weddingDetails }) => {
  return (
    <div className="w-[2310px] h-[1080px] relative bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center font-serif overflow-hidden">
      {/* Photo circulaire avec bordure */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-[480px] h-[480px] rounded-full border-8 border-slate-800 overflow-hidden bg-white shadow-2xl">
          <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
            <div className="text-slate-600 text-lg font-medium">Photo du couple</div>
          </div>
        </div>
      </div>

      {/* Eucalyptus coins supérieurs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] transform -rotate-12">
        <img 
          src="/lovable-uploads/074568cd-86c8-4815-b2ff-42c1d42a0341.png" 
          alt="Eucalyptus" 
          className="w-full h-full object-contain opacity-90"
        />
      </div>
      
      <div className="absolute top-0 right-0 w-[400px] h-[400px] transform rotate-12 scale-x-[-1]">
        <img 
          src="/lovable-uploads/304eaa87-bf71-4f58-9b74-a06a125ed3d0.png" 
          alt="Eucalyptus" 
          className="w-full h-full object-contain opacity-90"
        />
      </div>

      {/* Eucalyptus coins inférieurs */}
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] transform rotate-180 scale-x-[-1]">
        <img 
          src="/lovable-uploads/304eaa87-bf71-4f58-9b74-a06a125ed3d0.png" 
          alt="Eucalyptus" 
          className="w-full h-full object-contain opacity-80"
        />
      </div>
      
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] transform rotate-180">
        <img 
          src="/lovable-uploads/074568cd-86c8-4815-b2ff-42c1d42a0341.png" 
          alt="Eucalyptus" 
          className="w-full h-full object-contain opacity-80"
        />
      </div>

      {/* Contenu texte */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        {/* Save the Date */}
        <div className="mb-8">
          <p className="text-amber-600 text-3xl font-light tracking-[0.3em] uppercase mb-2">
            SAVE THE DATE
          </p>
        </div>
        
        {/* Noms des mariés */}
        <div className="mb-12">
          <h1 className="text-slate-800 text-8xl font-light mb-4 tracking-wide">
            {weddingDetails.brideName} <span className="text-6xl">&</span> {weddingDetails.groomName}
          </h1>
        </div>
        
        {/* Date et heure */}
        <div className="mb-8">
          <p className="text-slate-700 text-4xl font-light mb-2">
            {weddingDetails.date} | {weddingDetails.time}
          </p>
        </div>
        
        {/* Informations invité */}
        <div className="mb-6">
          <p className="text-slate-600 text-2xl font-light mb-4">
            Cher(e) {guest.name}
          </p>
          <p className="text-slate-600 text-xl">
            Table {guest.tableNumber}
          </p>
        </div>
        
        {/* Lieu */}
        <div className="mb-8">
          <p className="text-slate-700 text-2xl font-medium">
            {weddingDetails.venue}
          </p>
          {weddingDetails.address && (
            <p className="text-slate-600 text-xl mt-2">
              {weddingDetails.address}
            </p>
          )}
        </div>
        
        {/* Cercles décoratifs */}
        <div className="flex space-x-4 mb-8">
          <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
          <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
          <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
        </div>
        
        {/* Site web */}
        {weddingDetails.website && (
          <div>
            <p className="text-slate-600 text-xl">
              {weddingDetails.website}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlueEucalyptusTemplate;
