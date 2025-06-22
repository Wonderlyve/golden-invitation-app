
export type InvitationTemplate = 'winter' | 'elegant' | 'romantic' | 'modern' | 'balloons' | 'celebration' | 'floral' | 'botanical' | 'oval' | 'purple' | 'watercolor' | 'purple-roses' | 'coral' | 'garden';

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
  }
];
