export interface ProfessionalProfile {
  id: string;
  userId: string;
  name: string;
  title: string;
  slug: string;
  avatar?: string;
  coverImage?: string;
  category: string;
  subcategories: string[];
  specializations: string[];
  qualifications: string[];
  experience: {
    years: number;
    level: 'Entry Level' | 'Mid Level' | 'Senior' | 'Expert' | 'Veteran';
  };
  location: {
    city: string;
    state: string;
    country: string;
    isRemoteAvailable: boolean;
  };
  languages: string[];
  serviceMode: ('In-Person' | 'Online' | 'Hybrid' | 'Home Visit')[];
  availability: {
    status: 'Available' | 'Busy' | 'Away';
    schedule: {
      days: string[];
      hours: string;
    };
    appointmentRequired: boolean;
  };
  verification: {
    status: 'Verified' | 'Top Rated' | 'Premium' | 'Standard';
    documents: string[];
    badges: string[];
  };
  rating: {
    average: number;
    total: number;
    reviews: {
      id: string;
      userId: string;
      rating: number;
      comment: string;
      date: string;
    }[];
  };
  pricing: {
    currency: string;
    rate: number;
    unit: 'hour' | 'session' | 'day' | 'project';
    packages?: {
      name: string;
      description: string;
      price: number;
      duration: string;
    }[];
  };
  about: {
    bio: string;
    highlights: string[];
    expertise: string[];
  };
  contact: {
    email: string;
    phone?: string;
    website?: string;
    socialMedia?: {
      platform: string;
      url: string;
    }[];
  };
  portfolio?: {
    title: string;
    description: string;
    image?: string;
    url?: string;
  }[];
  certifications?: {
    name: string;
    issuer: string;
    date: string;
    expiryDate?: string;
    verificationUrl?: string;
  }[];
} 