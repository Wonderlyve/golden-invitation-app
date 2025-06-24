export type InvitationTemplate = 'winter' | 'elegant' | 'romantic' | 'modern' | 'balloons' | 'celebration' | 'floral' | 'botanical' | 'oval' | 'purple' | 'watercolor' | 'purple-roses' | 'coral' | 'garden' | 'minimal-beige' | 'golden-hexagon' | 'eucalyptus' | 'golden-frame' | 'illustrated' | 'anniversary' | 'navy-gold' | 'luxury-navy' | 'pink-elegant';

export interface TemplateConfig {
  id: InvitationTemplate;
  name: string;
  description: string;
  preview: string;
}

export const TEMPLATES: TemplateConfig[] = [
  {
    id: 'winter',
    name: 'Hiver Magique',
    description: 'Design hivernal avec flocons',
    preview: '❄️'
  },
  {
    id: 'elegant',
    name: 'Élégant',
    description: 'Design classique et sophistiqué',
    preview: '✨'
  },
  {
    id: 'romantic',
    name: 'Romantique',
    description: 'Design rose et fleuri',
    preview: '🌹'
  },
  {
    id: 'modern',
    name: 'Moderne',
    description: 'Design minimaliste et épuré',
    preview: '💎'
  },
  {
    id: 'balloons',
    name: 'Ballons Roses',
    description: 'Fond festif avec ballons',
    preview: '🎈'
  },
  {
    id: 'celebration',
    name: 'Célébration',
    description: 'Gâteau et cadeaux festifs',
    preview: '🎂'
  },
  {
    id: 'floral',
    name: 'Floral Doré',
    description: 'Cadre floral avec touches dorées',
    preview: '🌸'
  },
  {
    id: 'botanical',
    name: 'Botanique',
    description: 'Feuillage et fleurs naturelles',
    preview: '🌿'
  },
  {
    id: 'oval',
    name: 'Ovale Rose',
    description: 'Cadre ovale avec pivoines',
    preview: '🌺'
  },
  {
    id: 'purple',
    name: 'Violet Élégant',
    description: 'Fleurs violettes délicates',
    preview: '💜'
  },
  {
    id: 'watercolor',
    name: 'Aquarelle',
    description: 'Style aquarelle floral',
    preview: '🎨'
  },
  {
    id: 'purple-roses',
    name: 'Roses Violettes',
    description: 'Bouquet de roses violettes',
    preview: '🌷'
  },
  {
    id: 'coral',
    name: 'Corail Floral',
    description: 'Tons corail et pivoines',
    preview: '🌼'
  },
  {
    id: 'garden',
    name: 'Jardin Secret',
    description: 'Cadre fleuri romantique',
    preview: '🏡'
  },
  {
    id: 'minimal-beige',
    name: 'Beige Minimal',
    description: 'Élégance beige et délicat',
    preview: '🤎'
  },
  {
    id: 'golden-hexagon',
    name: 'Hexagone Doré',
    description: 'Design géométrique doré',
    preview: '⬡'
  },
  {
    id: 'eucalyptus',
    name: 'Eucalyptus',
    description: 'Feuillage eucalyptus naturel',
    preview: '🍃'
  },
  {
    id: 'golden-frame',
    name: 'Cadre Doré',
    description: 'Cadre doré avec confettis',
    preview: '🥇'
  },
  {
    id: 'illustrated',
    name: 'Illustré',
    description: 'Style illustration romantique',
    preview: '🎭'
  },
  {
    id: 'anniversary',
    name: 'Anniversaire',
    description: 'Design pour anniversaire',
    preview: '💒'
  },
  {
    id: 'navy-gold',
    name: 'Marine Doré',
    description: 'Élégance marine et or',
    preview: '⚓'
  },
  {
    id: 'luxury-navy',
    name: 'Luxe Marine',
    description: 'Luxe marine et doré',
    preview: '👑'
  },
  {
    id: 'pink-elegant',
    name: 'Rose Élégant',
    description: 'Design rose élégant avec cercle central',
    preview: '🌸'
  }
];
