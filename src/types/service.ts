export interface ServiceReview {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  date: string;
  images?: string[];
  likes: number;
  verified: boolean;
}

export interface ServiceLocation {
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  landmarks?: string[];
}

export interface ServiceTiming {
  days: string[];
  hours: string;
  isOpen24x7: boolean;
  holidaySchedule?: {
    date: string;
    isOpen: boolean;
    specialHours?: string;
  }[];
}

export interface ServiceAward {
  name: string;
  year: string;
  issuer: string;
  description?: string;
  image?: string;
}

export interface ServiceAccreditation {
  name: string;
  issuer: string;
  validFrom: string;
  validUntil?: string;
  certificate?: string;
}

export interface ServiceFeature {
  name: string;
  description: string;
  icon?: string;
}

export interface ServicePackage {
  name: string;
  description: string;
  price: number;
  currency: string;
  duration?: string;
  features: string[];
  isPopular?: boolean;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  description: string;
  shortDescription: string;
  establishedYear: number;
  images: {
    main: string;
    gallery: string[];
    logo?: string;
  };
  features: ServiceFeature[];
  rating: {
    average: number;
    total: number;
    breakdown: {
      5: number;
      4: number;
      3: number;
      2: number;
      1: number;
    };
    reviews: ServiceReview[];
  };
  location: ServiceLocation;
  branches?: ServiceLocation[];
  contact: {
    phone: string[];
    email: string[];
    website?: string;
    socialMedia?: {
      platform: string;
      url: string;
    }[];
  };
  timings: ServiceTiming;
  pricing: {
    priceRange: {
      min: number;
      max: number;
      currency: string;
    };
    packages?: ServicePackage[];
  };
  facilities: string[];
  amenities: string[];
  specializations: string[];
  accreditations: ServiceAccreditation[];
  awards: ServiceAward[];
  staff?: {
    total: number;
    keyMembers: {
      name: string;
      designation: string;
      qualification?: string;
      image?: string;
    }[];
  };
  verification: {
    isVerified: boolean;
    documents: string[];
    badges: string[];
  };
  highlights: string[];
  tags: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  policies: {
    cancellation?: string;
    refund?: string;
    safety?: string;
  };
  status: 'Active' | 'Temporarily Closed' | 'Permanently Closed' | 'Coming Soon';
  lastUpdated: string;
} 