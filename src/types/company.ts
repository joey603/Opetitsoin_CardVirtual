export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  services: Service[];
  contact: ContactInfo;
  rating: Rating;
}

export interface Service {
  icon: React.ReactElement;
  label: string;
  description?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  website?: string;
  socialMedia?: SocialMedia;
}

export interface SocialMedia {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
}

export interface Rating {
  score: number;
  maxScore: number;
  label: string;
} 