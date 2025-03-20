import { useState, useMemo } from 'react';
import { ProfessionalProfile } from '@/types/professional';

export interface FilterOptions {
  category?: string;
  experienceLevel?: string;
  location?: string;
  verificationStatus?: string;
  availability?: string;
  language?: string;
  serviceMode?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
}

export const useProfessionalSearch = (professionals: ProfessionalProfile[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({});

  const filteredProfessionals = useMemo(() => {
    return professionals.filter(professional => {
      // Search query filter
      if (searchQuery) {
        const searchText = searchQuery.toLowerCase();
        const matchesSearch = 
          professional.name.toLowerCase().includes(searchText) ||
          professional.title.toLowerCase().includes(searchText) ||
          professional.category.toLowerCase().includes(searchText) ||
          professional.specializations.some(spec => 
            spec.toLowerCase().includes(searchText)
          );
        
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.category && professional.category !== filters.category) {
        return false;
      }

      // Experience level filter
      if (filters.experienceLevel && professional.experience.level !== filters.experienceLevel) {
        return false;
      }

      // Location filter
      if (filters.location) {
        const locationMatch = 
          professional.location.city.toLowerCase().includes(filters.location.toLowerCase()) ||
          professional.location.state.toLowerCase().includes(filters.location.toLowerCase()) ||
          professional.location.country.toLowerCase().includes(filters.location.toLowerCase());
        
        if (!locationMatch) return false;
      }

      // Verification status filter
      if (filters.verificationStatus && 
          professional.verification.status !== filters.verificationStatus) {
        return false;
      }

      // Availability filter
      if (filters.availability && 
          professional.availability.status !== filters.availability) {
        return false;
      }

      // Language filter
      if (filters.language && 
          !professional.languages.includes(filters.language)) {
        return false;
      }

      // Service mode filter
      if (filters.serviceMode && 
          !professional.serviceMode.includes(filters.serviceMode as any)) {
        return false;
      }

      // Price range filter
      if (filters.priceRange) {
        const { min, max } = filters.priceRange;
        if (professional.pricing.rate < min || professional.pricing.rate > max) {
          return false;
        }
      }

      // Rating filter
      if (filters.rating && professional.rating.average < filters.rating) {
        return false;
      }

      return true;
    });
  }, [professionals, searchQuery, filters]);

  const sortProfessionals = (
    professionals: ProfessionalProfile[],
    sortBy: 'rating' | 'experience' | 'price'
  ) => {
    return [...professionals].sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating.average - a.rating.average;
        case 'experience':
          return b.experience.years - a.experience.years;
        case 'price':
          return a.pricing.rate - b.pricing.rate;
        default:
          return 0;
      }
    });
  };

  return {
    filteredProfessionals,
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    sortProfessionals
  };
}; 