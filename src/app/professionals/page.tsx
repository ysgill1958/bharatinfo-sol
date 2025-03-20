'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Text,
  VStack,
  Heading,
  useColorModeValue,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Card,
  CardBody,
  Avatar,
  Badge,
  HStack
} from '@chakra-ui/react';
import { ProfessionalCard } from '@/components/professionals/ProfessionalCard';
import { ProfessionalSearch } from '@/components/professionals/ProfessionalSearch';
import { useProfessionalSearch } from '@/hooks/useProfessionalSearch';
import { professionalCategories } from '@/data/professionals';
import type { ProfessionalProfile } from '@/types/professional';
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

// TODO: Replace with actual API call or database query
const mockProfessionals: ProfessionalProfile[] = [
  {
    id: '1',
    userId: 'user1',
    name: 'Dr. Rajesh Kumar',
    title: 'Senior Cardiologist',
    slug: 'dr-rajesh-kumar',
    avatar: '/images/professionals/dr-kumar.jpg',
    category: 'Medical and Healthcare Professionals',
    subcategories: ['Cardiology'],
    specializations: ['Interventional Cardiology', 'Heart Surgery'],
    qualifications: ['MBBS', 'MD', 'DM'],
    experience: {
      years: 15,
      level: 'Expert'
    },
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      isRemoteAvailable: true
    },
    languages: ['English', 'Hindi', 'Marathi'],
    serviceMode: ['In-Person', 'Online'],
    availability: {
      status: 'Available',
      schedule: {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        hours: '9:00 AM - 5:00 PM'
      },
      appointmentRequired: true
    },
    verification: {
      status: 'Verified',
      documents: ['Medical License', 'Board Certification'],
      badges: ['Top Rated', 'Quick Response']
    },
    rating: {
      average: 4.8,
      total: 156,
      reviews: []
    },
    pricing: {
      currency: 'INR',
      rate: 2000,
      unit: 'session'
    },
    about: {
      bio: 'Experienced cardiologist with 15+ years of practice in leading hospitals.',
      highlights: ['Published researcher', 'Award-winning physician'],
      expertise: ['Preventive Cardiology', 'Cardiac Rehabilitation']
    },
    contact: {
      email: 'dr.kumar@example.com',
      phone: '+91-XXXXXXXXXX'
    }
  }
  // Add more mock professionals here
];

export default function ProfessionalsPage() {
  const {
    filteredProfessionals,
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    sortProfessionals
  } = useProfessionalSearch(mockProfessionals);

  const [sortBy, setSortBy] = useState<'rating' | 'experience' | 'price'>('rating');
  const sortedProfessionals = sortProfessionals(filteredProfessionals, sortBy);

  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box minH="100vh" bg={bgColor} py={8}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h1" size="xl" mb={2}>
              Professional Directory
            </Heading>
            <Text color="gray.600">
              Find and connect with top professionals across various fields
            </Text>
          </Box>

          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} mb={8}>
            <InputGroup>
              <InputLeftElement>
                <FaSearch color="gray.300" />
              </InputLeftElement>
              <Input placeholder="Search professionals..." />
            </InputGroup>

            <Select placeholder="Select category">
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="education">Education</option>
              <option value="legal">Legal</option>
              <option value="technology">Technology</option>
            </Select>

            <Select placeholder="Select location">
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
              <option value="chennai">Chennai</option>
              <option value="kolkata">Kolkata</option>
            </Select>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {sortedProfessionals.map((professional) => (
              <Card key={professional.id} variant="outline" _hover={{ shadow: 'lg' }} cursor="pointer">
                <CardBody>
                  <VStack spacing={4} align="stretch">
                    <HStack spacing={4}>
                      <Avatar size="lg" name={professional.name} />
                      <Box>
                        <Heading size="md">{professional.name}</Heading>
                        <Text color="gray.600">{professional.title}</Text>
                        {professional.verification.status === 'Verified' && (
                          <Badge colorScheme="green">Verified</Badge>
                        )}
                      </Box>
                    </HStack>
                    
                    <HStack>
                      <FaMapMarkerAlt />
                      <Text>{professional.location.city}, {professional.location.state}</Text>
                    </HStack>
                    
                    <HStack>
                      <FaBriefcase />
                      <Text>{professional.experience.years}+ years</Text>
                    </HStack>
                    
                    <Text color="gray.600">
                      Specialization: {professional.specializations.join(', ')}
                    </Text>
                    
                    <Badge colorScheme="blue" fontSize="sm" alignSelf="start">
                      Rating: {professional.rating.average}/5.0
                    </Badge>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>

          {sortedProfessionals.length === 0 && (
            <Box textAlign="center" py={10}>
              <Text fontSize="lg" color="gray.500">
                No professionals found matching your criteria
              </Text>
            </Box>
          )}
        </VStack>
      </Container>
    </Box>
  );
} 