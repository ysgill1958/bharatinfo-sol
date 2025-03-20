'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Avatar,
  Badge,
  HStack,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Icon,
  Flex,
} from '@chakra-ui/react'
import { FaSearch, FaMapMarkerAlt, FaBriefcase, FaStar, FaCheckCircle } from 'react-icons/fa'

interface Professional {
  name: string;
  title: string;
  location: string;
  hospital?: string;
  firm?: string;
  experience: string;
  rating: number;
  verified: boolean;
  specialization: string;
  qualifications: string;
}

interface ProfessionalsData {
  'doctors-specialists': Professional[];
  'lawyers-advocates': Professional[];
  [key: string]: Professional[]; // Allow string indexing
}

const mockProfessionals: ProfessionalsData = {
  "doctors-specialists": [
    {
      name: "Dr. Priya Sharma",
      title: "Senior Cardiologist",
      location: "Mumbai, Maharashtra",
      hospital: "Heart Care Institute",
      experience: "15+ years",
      rating: 4.9,
      verified: true,
      specialization: "Cardiology",
      qualifications: "MD, DM Cardiology"
    },
    {
      name: "Dr. Rajesh Kumar",
      title: "Neurologist",
      location: "Delhi, NCR",
      hospital: "Brain & Spine Center",
      experience: "12+ years",
      rating: 4.8,
      verified: true,
      specialization: "Neurology",
      qualifications: "MD, DM Neurology"
    }
  ],
  "lawyers-advocates": [
    {
      name: "Adv. Meera Patel",
      title: "Corporate Lawyer",
      location: "Bangalore, Karnataka",
      firm: "Legal Solutions LLP",
      experience: "10+ years",
      rating: 4.7,
      verified: true,
      specialization: "Corporate Law",
      qualifications: "LLB, LLM"
    }
  ]
};

export default function CategoryPage({ params }: { params: { category: string, subcategory: string } }) {
  const categoryId = params.subcategory.toLowerCase();
  const professionals = mockProfessionals[categoryId] || [];
  const categoryTitle = params.subcategory.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <Container maxW="container.xl" py={8}>
      <Box textAlign="center" mb={12}>
        <Heading as="h1" size="2xl" mb={4}>
          {categoryTitle}
        </Heading>
        <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
          Find and connect with top professionals in {categoryTitle}
        </Text>
      </Box>

      <Stack direction={{ base: 'column', md: 'row' }} spacing={4} mb={8}>
        <InputGroup>
          <InputLeftElement>
            <FaSearch color="gray.300" />
          </InputLeftElement>
          <Input placeholder="Search by name or specialization..." />
        </InputGroup>

        <Select placeholder="Filter by location">
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="bangalore">Bangalore</option>
          <option value="chennai">Chennai</option>
          <option value="kolkata">Kolkata</option>
        </Select>

        <Select placeholder="Sort by">
          <option value="rating">Rating</option>
          <option value="experience">Experience</option>
          <option value="name">Name</option>
        </Select>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {professionals.map((professional: Professional, index: number) => (
          <Card key={index} variant="outline" _hover={{ shadow: 'lg' }} cursor="pointer">
            <CardBody>
              <VStack spacing={4} align="stretch">
                <HStack spacing={4}>
                  <Avatar size="lg" name={professional.name} />
                  <Box>
                    <Heading size="md">{professional.name}</Heading>
                    <Text color="blue.600" fontWeight="500">{professional.title}</Text>
                    {professional.verified && (
                      <Badge colorScheme="green">Verified</Badge>
                    )}
                  </Box>
                </HStack>

                <Text color="gray.600">
                  {professional.qualifications}
                </Text>

                <HStack>
                  <FaMapMarkerAlt />
                  <Text>{professional.location}</Text>
                </HStack>

                <Text color="gray.600">
                  {professional.hospital || professional.firm}
                </Text>

                <HStack>
                  <FaBriefcase />
                  <Text>{professional.experience}</Text>
                </HStack>

                <Badge colorScheme="blue" fontSize="sm" alignSelf="start">
                  Rating: {professional.rating}/5.0
                </Badge>
              </VStack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

      {professionals.length === 0 && (
        <Box textAlign="center" py={10}>
          <Text fontSize="lg" color="gray.500">
            No professionals found in this category
          </Text>
        </Box>
      )}
    </Container>
  )
} 