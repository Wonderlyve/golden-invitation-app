
export interface Guest {
  id: string;
  name: string;
  tableNumber: number;
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
}
