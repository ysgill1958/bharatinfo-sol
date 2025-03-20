'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link as ChakraLink,
  VStack,
  Badge,
  useColorModeValue,
  Icon,
  HStack,
  Card,
  CardBody
} from '@chakra-ui/react'
import Link from 'next/link'
import { 
  FaNewspaper, FaLandmark, FaHospital, FaGraduationCap, 
  FaMicroscope, FaBalanceScale, FaChartLine, FaPaintBrush,
  FaFutbol, FaLeaf, FaTractor, FaTruck, FaHandsHelping,
  FaPrayingHands, FaFilm, FaUserMd, FaHandshake, FaUniversity, FaStar
} from 'react-icons/fa'
import { IconType } from 'react-icons'

const directoryCategories = [
  {
    name: "News & Media",
    description: "Stay updated with latest news and media coverage",
    subcategories: [
      "Breaking News",
      "Regional News",
      "International News",
      "Digital Media",
      "Print Media",
      "Broadcast Media",
      "News Analysis",
      "Media Archives"
    ]
  },
  {
    name: "Government & Public Sector",
    description: "Access government services and public sector information",
    subcategories: [
      "Government Schemes",
      "Public Services",
      "E-Governance",
      "Welfare Programs",
      "Policy Updates",
      "Citizen Services",
      "Government Jobs",
      "Public Documents"
    ]
  },
  {
    name: "Healthcare & Medical",
    description: "Find healthcare professionals and medical services",
    subcategories: [
      "Doctors & Specialists",
      "Hospitals & Clinics",
      "Mental Health",
      "Alternative Medicine",
      "Emergency Services",
      "Medical Insurance",
      "Pharmacies",
      "Health Programs"
    ]
  },
  {
    name: "Education & Learning",
    description: "Discover educational resources and institutions",
    subcategories: [
      "Schools & Universities",
      "Online Learning",
      "Professional Courses",
      "Skill Development",
      "Research Institutions",
      "Educational Resources",
      "Scholarships",
      "Career Guidance"
    ]
  },
  {
    name: "Science & Technology",
    description: "Explore scientific and technological advancements",
    subcategories: [
      "Research & Development",
      "Innovation Centers",
      "Tech Companies",
      "Scientific Institutions",
      "Space Research",
      "Biotechnology",
      "IT Services",
      "Digital Solutions"
    ]
  },
  {
    name: "Legal Services",
    description: "Connect with legal professionals and services",
    subcategories: [
      "Lawyers & Advocates",
      "Law Firms",
      "Legal Aid",
      "Documentation",
      "Court Services",
      "Legal Resources",
      "Rights & Laws",
      "Legal Consultation"
    ]
  },
  {
    name: "Business & Economy",
    description: "Access business services and economic information",
    subcategories: [
      "Business Services",
      "Financial Services",
      "Market Analysis",
      "Investment Options",
      "Economic Data",
      "Trade Information",
      "Business Development",
      "Economic Policies"
    ]
  },
  {
    name: "Arts & Culture",
    description: "Explore India's rich cultural heritage and arts",
    subcategories: [
      "Cultural Events",
      "Art Galleries",
      "Museums",
      "Performing Arts",
      "Cultural Centers",
      "Heritage Sites",
      "Traditional Arts",
      "Cultural Programs"
    ]
  },
  {
    name: "Sports & Recreation",
    description: "Find sports facilities and recreational activities",
    subcategories: [
      "Sports Facilities",
      "Sports Clubs",
      "Fitness Centers",
      "Sports Events",
      "Adventure Sports",
      "Sports Training",
      "Recreation Centers",
      "Sports Programs"
    ]
  },
  {
    name: "Environment & Sustainability",
    description: "Learn about environmental initiatives and sustainable practices",
    subcategories: [
      "Environmental Projects",
      "Green Initiatives",
      "Conservation",
      "Sustainable Development",
      "Environmental Services",
      "Waste Management",
      "Renewable Energy",
      "Climate Action"
    ]
  },
  {
    name: "Agriculture & Farming",
    description: "Access agricultural resources and farming information",
    subcategories: [
      "Farming Services",
      "Agricultural Products",
      "Farm Equipment",
      "Agri-tech Solutions",
      "Organic Farming",
      "Agricultural Research",
      "Farmer Support",
      "Agricultural Markets"
    ]
  },
  {
    name: "Transportation & Logistics",
    description: "Find transportation services and logistics solutions",
    subcategories: [
      "Public Transport",
      "Private Transport",
      "Logistics Services",
      "Courier Services",
      "Transport Infrastructure",
      "Fleet Management",
      "Travel Services",
      "Shipping & Cargo"
    ]
  },
  {
    name: "Social Services",
    description: "Connect with social services and community programs",
    subcategories: [
      "Community Services",
      "NGOs",
      "Social Welfare",
      "Support Groups",
      "Volunteer Programs",
      "Charitable Organizations",
      "Social Development",
      "Community Centers"
    ]
  },
  {
    name: "Religion & Spirituality",
    description: "Explore religious and spiritual resources",
    subcategories: [
      "Religious Centers",
      "Spiritual Programs",
      "Religious Services",
      "Meditation Centers",
      "Religious Education",
      "Spiritual Guidance",
      "Religious Events",
      "Sacred Places"
    ]
  },
  {
    name: "Entertainment & Media",
    description: "Find entertainment venues and media services",
    subcategories: [
      "Entertainment Venues",
      "Movie Theaters",
      "Event Management",
      "Media Production",
      "Entertainment Programs",
      "Digital Entertainment",
      "Live Shows",
      "Booking Services"
    ]
  }
];

interface CategoryStyle {
  bg: string;
  hover: string;
  icon: IconType;
  accent: string;
}

interface CategoryColors {
  [key: string]: CategoryStyle;
}

const categoryColors: CategoryColors = {
  "News & Media": {
    bg: "blue.50",
    hover: "blue.100",
    icon: FaNewspaper,
    accent: "blue.500"
  },
  "Government & Public Sector": { bg: "purple.50", hover: "purple.100", icon: FaLandmark, accent: "purple.500" },
  "Healthcare & Medical": { bg: "red.50", hover: "red.100", icon: FaHospital, accent: "red.500" },
  "Education & Learning": { bg: "green.50", hover: "green.100", icon: FaGraduationCap, accent: "green.500" },
  "Science & Technology": { bg: "cyan.50", hover: "cyan.100", icon: FaMicroscope, accent: "cyan.500" },
  "Legal Services": { bg: "yellow.50", hover: "yellow.100", icon: FaBalanceScale, accent: "yellow.600" },
  "Business & Economy": { bg: "orange.50", hover: "orange.100", icon: FaChartLine, accent: "orange.500" },
  "Arts & Culture": { bg: "pink.50", hover: "pink.100", icon: FaPaintBrush, accent: "pink.500" },
  "Sports & Recreation": { bg: "teal.50", hover: "teal.100", icon: FaFutbol, accent: "teal.500" },
  "Environment & Sustainability": { bg: "green.50", hover: "green.100", icon: FaLeaf, accent: "green.500" },
  "Agriculture & Farming": { bg: "brown.50", hover: "brown.100", icon: FaTractor, accent: "brown.500" },
  "Transportation & Logistics": { bg: "gray.50", hover: "gray.100", icon: FaTruck, accent: "gray.500" },
  "Social Services": { bg: "purple.50", hover: "purple.100", icon: FaHandsHelping, accent: "purple.500" },
  "Religion & Spirituality": { bg: "yellow.50", hover: "yellow.100", icon: FaPrayingHands, accent: "yellow.600" },
  "Entertainment & Media": { bg: "red.50", hover: "red.100", icon: FaFilm, accent: "red.500" }
};

export default function DirectoryPage() {
  const bgGradient = useColorModeValue(
    'linear(to-r, blue.100, purple.100)',
    'linear(to-r, blue.900, purple.900)'
  );

  return (
    <Box bgGradient={bgGradient} minH="100vh" py={8}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Box 
            textAlign="center" 
            mb={8} 
            p={8} 
            borderRadius="xl" 
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow="xl"
          >
            <Heading as="h1" size="2xl" mb={4} bgGradient="linear(to-r, blue.500, purple.500)" bgClip="text">
              Comprehensive Directory
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              Your complete guide to services, professionals, and resources across India
            </Text>
          </Box>

          {/* Top Categories Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={8}>
            <Card
              bg="white"
              shadow="md"
              _hover={{ shadow: 'xl', transform: 'translateY(-4px)' }}
              transition="all 0.3s"
              cursor="pointer"
              onClick={() => window.location.href = '/directory/professionals'}
            >
              <CardBody>
                <VStack spacing={4} align="center">
                  <Icon as={FaUserMd} w={10} h={10} color="blue.500" />
                  <Heading size="md" textAlign="center">Top Professionals</Heading>
                  <Text textAlign="center" color="gray.600">
                    Find expert doctors, lawyers, consultants, and more
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            <Card
              bg="white"
              shadow="md"
              _hover={{ shadow: 'xl', transform: 'translateY(-4px)' }}
              transition="all 0.3s"
              cursor="pointer"
              onClick={() => window.location.href = '/directory/services'}
            >
              <CardBody>
                <VStack spacing={4} align="center">
                  <Icon as={FaHandshake} w={10} h={10} color="green.500" />
                  <Heading size="md" textAlign="center">Best Services</Heading>
                  <Text textAlign="center" color="gray.600">
                    Discover top-rated services across various sectors
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            <Card
              bg="white"
              shadow="md"
              _hover={{ shadow: 'xl', transform: 'translateY(-4px)' }}
              transition="all 0.3s"
              cursor="pointer"
              onClick={() => window.location.href = '/directory/institutions'}
            >
              <CardBody>
                <VStack spacing={4} align="center">
                  <Icon as={FaUniversity} w={10} h={10} color="purple.500" />
                  <Heading size="md" textAlign="center">Prestigious Institutions</Heading>
                  <Text textAlign="center" color="gray.600">
                    Explore leading educational and research institutions
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            <Card
              bg="white"
              shadow="md"
              _hover={{ shadow: 'xl', transform: 'translateY(-4px)' }}
              transition="all 0.3s"
              cursor="pointer"
              onClick={() => window.location.href = '/directory/personalities'}
            >
              <CardBody>
                <VStack spacing={4} align="center">
                  <Icon as={FaStar} w={10} h={10} color="yellow.500" />
                  <Heading size="md" textAlign="center">Prominent Personalities</Heading>
                  <Text textAlign="center" color="gray.600">
                    Connect with industry leaders and influencers
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
            {directoryCategories.map((category, index) => (
              <Box
                key={index}
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius="xl"
                overflow="hidden"
                boxShadow="lg"
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
              >
                <Box
                  p={6}
                  bg={categoryColors[category.name].bg}
                  borderBottom="1px"
                  borderColor="gray.200"
                >
                  <HStack spacing={4}>
                    <Icon
                      as={categoryColors[category.name].icon}
                      w={8}
                      h={8}
                      color={categoryColors[category.name].accent}
                    />
                    <VStack align="start" spacing={1}>
                      <Heading size="lg">{category.name}</Heading>
                      <Text color="gray.600">{category.description}</Text>
                    </VStack>
                  </HStack>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} p={6}>
                  {category.subcategories.map((subcategory, subIndex) => (
                    <Link
                      key={subIndex}
                      href={`/directory/${category.name.toLowerCase().replace(/\s+/g, '-')}/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                      passHref
                    >
                      <ChakraLink
                        p={4}
                        borderWidth="1px"
                        borderRadius="md"
                        display="block"
                        bg={useColorModeValue('white', 'gray.700')}
                        _hover={{
                          textDecoration: 'none',
                          bg: categoryColors[category.name].hover,
                          transform: 'translateY(-2px)',
                          shadow: 'md'
                        }}
                      >
                        <Text fontWeight="500">{subcategory}</Text>
                        <Badge
                          colorScheme={categoryColors[category.name].accent.split('.')[0]}
                          mt={2}
                        >
                          View Details
                        </Badge>
                      </ChakraLink>
                    </Link>
                  ))}
                </SimpleGrid>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
} 