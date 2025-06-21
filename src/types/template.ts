
export type InvitationTemplate = 'winter' | 'elegant' | 'romantic' | 'modern';

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
  }
];
