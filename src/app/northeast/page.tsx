'use client';

import {
  Box,
  Container,
  SimpleGrid,
  Card,
  CardBody,
  VStack,
  Heading,
  Text,
  Icon,
  useColorModeValue,
  Badge,
  LinkBox,
  LinkOverlay,
  HStack,
  Link as ChakraLink
} from '@chakra-ui/react'
import { 
  FaMapMarkedAlt, 
  FaStore, 
  FaUsers, 
  FaHandshake, 
  FaIndustry, 
  FaGlobeAsia,
  FaChartLine,
  FaBuilding,
  FaAddressBook
} from 'react-icons/fa'
import Link from 'next/link'

const menuItems = [
  {
    title: "Directories",
    tagline: "Find Local Experts",
    icon: FaAddressBook,
    color: "blue",
    href: "/northeast/directories",
    image: "/northeast/directories-bg.jpg",
    subcategories: [
      { name: "Business Directory", href: "/northeast/directories/business" },
      { name: "Professional Services", href: "/northeast/directories/professionals" },
      { name: "Educational Institutes", href: "/northeast/directories/education" },
      { name: "Healthcare Providers", href: "/northeast/directories/healthcare" }
    ]
  },
  {
    title: "Trade Exchange",
    tagline: "Business Opportunities",
    icon: FaHandshake,
    color: "green",
    href: "/northeast/trade",
    image: "/northeast/trade-bg.jpg",
    subcategories: [
      { name: "Local Markets", href: "/northeast/trade/markets" },
      { name: "Export Opportunities", href: "/northeast/trade/exports" },
      { name: "Import Services", href: "/northeast/trade/imports" },
      { name: "Trade Events", href: "/northeast/trade/events" }
    ]
  },
  {
    title: "Buy-Sell Mart",
    tagline: "Digital Marketplace",
    icon: FaStore,
    color: "purple",
    href: "/northeast/marketplace",
    image: "/northeast/marketplace-bg.jpg",
    subcategories: [
      { name: "Local Products", href: "/northeast/marketplace/products" },
      { name: "Handicrafts", href: "/northeast/marketplace/handicrafts" },
      { name: "Traditional Items", href: "/northeast/marketplace/traditional" },
      { name: "Artisanal Goods", href: "/northeast/marketplace/artisanal" }
    ]
  },
  {
    title: "Investors-Tech Network",
    tagline: "Connect & Grow",
    icon: FaUsers,
    color: "orange",
    href: "/northeast/network",
    image: "/northeast/network-bg.jpg",
    subcategories: [
      { name: "Startup Hub", href: "/northeast/network/startups" },
      { name: "Tech Community", href: "/northeast/network/tech" },
      { name: "Investor Network", href: "/northeast/network/investors" },
      { name: "Mentorship", href: "/northeast/network/mentorship" }
    ]
  },
  {
    title: "Industrial Growth",
    tagline: "Business Development",
    icon: FaIndustry,
    color: "red",
    href: "/northeast/industry",
    image: "/northeast/industry-bg.jpg",
    subcategories: [
      { name: "Manufacturing", href: "/northeast/industry/manufacturing" },
      { name: "Infrastructure", href: "/northeast/industry/infrastructure" },
      { name: "Technology Parks", href: "/northeast/industry/tech-parks" },
      { name: "Special Zones", href: "/northeast/industry/special-zones" }
    ]
  },
  {
    title: "Regional Tourism",
    tagline: "Explore Northeast",
    icon: FaGlobeAsia,
    color: "teal",
    href: "/northeast/tourism",
    image: "/northeast/tourism-bg.jpg",
    subcategories: [
      { name: "Tourist Spots", href: "/northeast/tourism/spots" },
      { name: "Cultural Tours", href: "/northeast/tourism/cultural" },
      { name: "Adventure Tourism", href: "/northeast/tourism/adventure" },
      { name: "Eco Tourism", href: "/northeast/tourism/eco" }
    ]
  },
  {
    title: "Economic Insights",
    tagline: "Market Analysis",
    icon: FaChartLine,
    color: "yellow",
    href: "/northeast/economy",
    image: "/northeast/economy-bg.jpg",
    subcategories: [
      { name: "Market Reports", href: "/northeast/economy/reports" },
      { name: "Growth Trends", href: "/northeast/economy/trends" },
      { name: "Investment Guide", href: "/northeast/economy/investment" },
      { name: "Policy Updates", href: "/northeast/economy/policy" }
    ]
  },
  {
    title: "Urban Development",
    tagline: "Smart Cities",
    icon: FaBuilding,
    color: "cyan",
    href: "/northeast/urban",
    image: "/northeast/urban-bg.jpg",
    subcategories: [
      { name: "Smart Projects", href: "/northeast/urban/smart-projects" },
      { name: "Infrastructure", href: "/northeast/urban/infrastructure" },
      { name: "Housing", href: "/northeast/urban/housing" },
      { name: "Public Services", href: "/northeast/urban/services" }
    ]
  }
];

export default function NortheastPage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box bg={bgColor} minH="100vh">
      <Container maxW="container.xl" py={8}>
        <Box textAlign="center" mb={12}>
          <Heading as="h1" size="2xl" mb={4}>
            Northeast Focus
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Discover the rich culture and heritage of Northeast India
          </Text>
        </Box>

        {/* Menu Categories Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          {menuItems.map((item, index) => (
            <Card
              key={index}
              bg={cardBg}
              shadow="sm"
              _hover={{ 
                shadow: 'xl', 
                transform: 'translateY(-4px)',
                "& .subcategories-container": { 
                  opacity: 1,
                  transform: 'translateY(0)',
                  pointerEvents: 'auto'
                }
              }}
              transition="all 0.3s"
              height="320px"
              overflow="hidden"
              position="relative"
              as={Link}
              href={item.href}
            >
              <CardBody
                p={0}
                bgImage={`url(${item.image})`}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                position="relative"
                overflow="hidden"
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
              >
                <Box
                  p={6}
                  bg="rgba(0,0,0,0.5)"
                  transition="all 0.3s"
                  _hover={{
                    bg: "rgba(0,0,0,0.3)",
                    transform: "translateY(-4px)",
                  }}
                >
                  <HStack spacing={4} mb={4}>
                    <Icon as={item.icon} boxSize={8} color="white" />
                    <Box>
                      <Heading size="lg" color="white" mb={2}>
                        {item.title}
                      </Heading>
                      <Text color="whiteAlpha.900" fontSize="lg">
                        {item.tagline}
                      </Text>
                    </Box>
                  </HStack>
                  <Box
                    maxH="0"
                    overflow="hidden"
                    transition="all 0.3s ease-in-out"
                    _groupHover={{ maxH: "200px" }}
                  >
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                      {item.subcategories.map((sub) => (
                        <ChakraLink
                          key={sub.name}
                          as={Link}
                          href={sub.href}
                          _hover={{ textDecoration: "none" }}
                        >
                          <Box
                            p={4}
                            bg="whiteAlpha.900"
                            borderRadius="md"
                            transition="all 0.2s"
                            _hover={{
                              transform: "translateY(-2px)",
                              boxShadow: "lg",
                            }}
                          >
                            <Text
                              fontWeight="medium"
                              color="gray.800"
                              fontSize="sm"
                            >
                              {sub.name}
                            </Text>
                          </Box>
                        </ChakraLink>
                      ))}
                    </SimpleGrid>
                  </Box>
                </Box>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
} 