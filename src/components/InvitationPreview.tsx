import React from 'react';
import { Guest, WeddingDetails } from '@/types/guest';
import { InvitationTemplate } from '@/types/template';

interface InvitationPreviewProps {
  guest: Guest | null;
  weddingDetails: WeddingDetails;
  isPreview?: boolean;
  template?: InvitationTemplate;
}

// Configuration des styles pour chaque template
const getTemplateStyles = (template: InvitationTemplate) => {
  const styles = {
    winter: {
      bgColor: '#1e3a8a',
      gradient: 'from-slate-900 to-blue-900',
      textColor: 'text-white',
      accentColor: 'text-yellow-400',
      borderColor: 'border-yellow-400',
      decorations: '❄️'
    },
    elegant: {
      bgColor: '#f5f1e8',
      gradient: 'from-amber-50 to-rose-50',
      textColor: 'text-gray-800',
      accentColor: 'text-amber-600',
      borderColor: 'border-amber-200',
      decorations: '✨'
    },
    romantic: {
      bgColor: '#fce7f3',
      gradient: 'from-pink-100 to-rose-100',
      textColor: 'text-rose-900',
      accentColor: 'text-rose-600',
      borderColor: 'border-rose-300',
      decorations: '🌹'
    },
    modern: {
      bgColor: '#f3f4f6',
      gradient: 'from-gray-100 to-slate-100',
      textColor: 'text-gray-900',
      accentColor: 'text-slate-600',
      borderColor: 'border-slate-300',
      decorations: '💎'
    },
    balloons: {
      bgColor: '#fce7f3',
      gradient: 'from-pink-50 to-fuchsia-50',
      textColor: 'text-pink-900',
      accentColor: 'text-pink-600',
      borderColor: 'border-pink-300',
      decorations: '🎈'
    },
    celebration: {
      bgColor: '#fef3c7',
      gradient: 'from-yellow-50 to-orange-50',
      textColor: 'text-orange-900',
      accentColor: 'text-orange-600',
      borderColor: 'border-orange-300',
      decorations: '🎂'
    },
    floral: {
      bgColor: '#fef3c7',
      gradient: 'from-amber-50 to-yellow-50',
      textColor: 'text-amber-900',
      accentColor: 'text-amber-600',
      borderColor: 'border-amber-300',
      decorations: '🌸'
    },
    botanical: {
      bgColor: '#f0fdf4',
      gradient: 'from-green-50 to-emerald-50',
      textColor: 'text-green-900',
      accentColor: 'text-green-600',
      borderColor: 'border-green-300',
      decorations: '🌿'
    },
    oval: {
      bgColor: '#fce7f3',
      gradient: 'from-pink-100 to-rose-100',
      textColor: 'text-rose-900',
      accentColor: 'text-rose-600',
      borderColor: 'border-rose-300',
      decorations: '🌺'
    },
    purple: {
      bgColor: '#f3e8ff',
      gradient: 'from-purple-100 to-violet-100',
      textColor: 'text-purple-900',
      accentColor: 'text-purple-600',
      borderColor: 'border-purple-300',
      decorations: '💜'
    },
    watercolor: {
      bgColor: '#fef3f2',
      gradient: 'from-rose-50 to-pink-50',
      textColor: 'text-rose-900',
      accentColor: 'text-rose-600',
      borderColor: 'border-rose-200',
      decorations: '🎨'
    },
    'purple-roses': {
      bgColor: '#f3e8ff',
      gradient: 'from-violet-100 to-purple-100',
      textColor: 'text-purple-900',
      accentColor: 'text-purple-600',
      borderColor: 'border-purple-300',
      decorations: '🌷'
    },
    coral: {
      bgColor: '#fff1f2',
      gradient: 'from-rose-50 to-pink-50',
      textColor: 'text-rose-900',
      accentColor: 'text-rose-500',
      borderColor: 'border-rose-300',
      decorations: '🌼'
    },
    garden: {
      bgColor: '#f0fdf4',
      gradient: 'from-emerald-50 to-green-50',
      textColor: 'text-green-900',
      accentColor: 'text-green-600',
      borderColor: 'border-green-300',
      decorations: '🏡'
    },
    'minimal-beige': {
      bgColor: '#f5f1e8',
      gradient: 'from-stone-100 to-amber-50',
      textColor: 'text-stone-900',
      accentColor: 'text-stone-600',
      borderColor: 'border-stone-300',
      decorations: '🤎'
    },
    'golden-hexagon': {
      bgColor: '#fef3c7',
      gradient: 'from-amber-50 to-yellow-50',
      textColor: 'text-amber-900',
      accentColor: 'text-amber-600',
      borderColor: 'border-amber-400',
      decorations: '⬡'
    },
    eucalyptus: {
      bgColor: '#ecfdf5',
      gradient: 'from-emerald-50 to-teal-50',
      textColor: 'text-emerald-900',
      accentColor: 'text-emerald-600',
      borderColor: 'border-emerald-300',
      decorations: '🍃'
    },
    'golden-frame': {
      bgColor: '#fef3c7',
      gradient: 'from-yellow-50 to-amber-50',
      textColor: 'text-amber-900',
      accentColor: 'text-amber-700',
      borderColor: 'border-amber-400',
      decorations: '🥇'
    },
    illustrated: {
      bgColor: '#fef2f2',
      gradient: 'from-red-50 to-rose-50',
      textColor: 'text-rose-900',
      accentColor: 'text-rose-600',
      borderColor: 'border-rose-300',
      decorations: '🎭'
    },
    anniversary: {
      bgColor: '#fef3c7',
      gradient: 'from-amber-100 to-yellow-100',
      textColor: 'text-amber-900',
      accentColor: 'text-amber-700',
      borderColor: 'border-amber-400',
      decorations: '💒'
    },
    'navy-gold': {
      bgColor: '#1e3a8a',
      gradient: 'from-blue-900 to-indigo-900',
      textColor: 'text-white',
      accentColor: 'text-yellow-400',
      borderColor: 'border-yellow-400',
      decorations: '⚓'
    },
    'luxury-navy': {
      bgColor: '#1e293b',
      gradient: 'from-slate-900 to-blue-900',
      textColor: 'text-white',
      accentColor: 'text-yellow-400',
      borderColor: 'border-yellow-400',
      decorations: '👑'
    },
    'pink-elegant': {
      bgColor: '#fce7f3',
      gradient: 'from-pink-100 to-rose-100',
      textColor: 'text-rose-900',
      accentColor: 'text-rose-600',
      borderColor: 'border-rose-300',
      decorations: '🌸'
    }
  };
  
  return styles[template] || styles.elegant;
};

const InvitationPreview: React.FC<InvitationPreviewProps> = ({
  guest,
  weddingDetails,
  isPreview = false,
  template = 'elegant'
}) => {
  const templateStyle = getTemplateStyles(template);
  const isDarkTheme = ['winter', 'navy-gold', 'luxury-navy'].includes(template);
  
  return (
    <div className="w-full mx-auto" style={{ maxWidth: '540px', aspectRatio: '1080/1920' }}>
      <div className="relative w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Section haute - Image du couple (900px / 1920px = 46.875%) */}
        <div className="relative w-full" style={{ height: '46.875%' }}>
          {weddingDetails.couplePhotoUrl ? (
            <>
              <img
                src={weddingDetails.couplePhotoUrl}
                alt="Couple"
                className="w-full h-full object-cover"
                loading="eager"
                style={{ 
                  display: 'block',
                  imageRendering: 'auto'
                }}
                onError={(e) => {
                  console.error('Error loading couple photo');
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Dégradé de transition */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" 
                style={{ 
                  background: `linear-gradient(to top, ${templateStyle.bgColor} 0%, ${templateStyle.bgColor}00 100%)` 
                }}
              />
            </>
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${templateStyle.gradient} flex items-center justify-center`}>
              <div className="text-center text-gray-400">
                <p className="text-sm">Image du couple</p>
                <p className="text-xs mt-1">1080 × 900 px</p>
              </div>
            </div>
          )}
          
          {/* Décorations selon le template */}
          {template === 'winter' && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-white opacity-30 animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 10 + 10}px`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                >
                  ❄
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Section basse - Contenu texte (1020px / 1920px = 53.125%) */}
        <div 
          className={`relative w-full px-5 py-3 flex flex-col gap-2 bg-gradient-to-br ${templateStyle.gradient}`}
          style={{ height: '53.125%' }}
        >
          {/* En-tête avec noms des mariés */}
          <div className="text-center space-y-0.5">
            <h1 className={`font-playfair text-2xl font-bold ${templateStyle.textColor} leading-tight`}>
              {weddingDetails.groomName} & {weddingDetails.brideName}
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className={`h-px w-8 bg-gradient-to-r from-transparent ${templateStyle.accentColor.replace('text-', 'to-')}`} />
              <span className={`${templateStyle.accentColor} text-base`}>❤</span>
              <div className={`h-px w-8 bg-gradient-to-l from-transparent ${templateStyle.accentColor.replace('text-', 'to-')}`} />
            </div>
          </div>

          {/* Nom de l'invité et table */}
          {guest && (
            <div className="text-center">
              <div className={`${isDarkTheme ? 'bg-white/20' : 'bg-white/60'} backdrop-blur-sm rounded-lg p-2.5 shadow-sm border ${templateStyle.borderColor}/30`}>
                <p className={`text-[10px] font-sans ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} mb-0.5`}>Invitation pour</p>
                <p className={`font-cormorant text-lg font-semibold ${templateStyle.textColor} leading-tight`}>
                  {guest.name}
                </p>
                {guest.tableNumber && (
                  <p className={`text-[10px] font-sans ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} mt-0.5`}>
                    Table <span className={`font-semibold ${templateStyle.accentColor}`}>{guest.tableNumber}</span>
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Texte d'invitation */}
          <div className="text-center">
            <p className={`font-sans text-[11px] ${isDarkTheme ? 'text-gray-200' : 'text-gray-700'} leading-snug italic px-2`}>
              {weddingDetails.invitationText}
            </p>
          </div>

          {/* Date et lieu */}
          <div className="text-center">
            <div className={`${isDarkTheme ? 'bg-white/20' : 'bg-white/60'} backdrop-blur-sm rounded-lg p-2.5 shadow-sm border ${templateStyle.borderColor}/30`}>
              <p className={`font-cormorant text-base font-semibold ${templateStyle.textColor} leading-tight`}>
                {weddingDetails.weddingDate}
              </p>
              <p className={`font-sans text-[11px] ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} mt-0.5`}>
                {weddingDetails.ceremonyTime}
              </p>
              <div className={`mt-1.5 pt-1.5 border-t ${templateStyle.borderColor}/30`}>
                <p className={`font-sans text-xs font-medium ${templateStyle.textColor} leading-tight`}>
                  {weddingDetails.venue}
                </p>
                <p className={`font-sans text-[10px] ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} mt-0.5 leading-tight`}>
                  {weddingDetails.venueLocation}
                </p>
              </div>
            </div>
          </div>

          {/* Site web */}
          {weddingDetails.websiteUrl && (
            <div className="text-center">
              <p className={`font-sans text-[9px] ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>
                {weddingDetails.websiteUrl}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvitationPreview;
