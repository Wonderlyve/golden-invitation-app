
export interface Guest {
  id: string;
  name: string;
  tableNumber: string; // Changed from number to string to allow letters
  phoneNumber: string; // Nouveau champ pour le numéro de téléphone
  isVerified: boolean;
  createdAt: Date;
}

export interface WeddingDetails {
  groomName: string;
  brideName: string;
  ceremonyTime: string;
  weddingDate: string;
  venue: string;
  venueLocation: string;
  websiteUrl: string;
  couplePhotoUrl: string;
  invitationText: string;
  rsvpPhoneNumber: string; // Nouveau champ pour le numéro RSVP
  template: 'winter' | 'elegant' | 'romantic' | 'modern' | 'balloons' | 'celebration' | 'floral' | 'botanical' | 'oval' | 'purple' | 'watercolor' | 'purple-roses' | 'coral' | 'garden' | 'minimal-beige' | 'golden-hexagon' | 'eucalyptus' | 'golden-frame' | 'illustrated' | 'anniversary' | 'navy-gold' | 'luxury-navy' | 'pink-elegant';
}
