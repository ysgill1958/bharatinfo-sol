'use client';

import {
  Box,
  Container,
  Grid,
  GridItem,
  Flex,
  VStack,
  HStack,
  Input,
  IconButton,
  Text,
  Heading,
  Button,
  useColorModeValue,
  SimpleGrid,
  Card,
  CardBody,
  Icon,
  Badge,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  List,
  ListItem,
  useDisclosure,
  Spinner,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react'
import { 
  FaMicrophone, FaPaperPlane, FaRobot, FaNewspaper, FaBook, FaLightbulb,
  FaCogs, FaAddressBook, FaLeaf, FaStore, FaUsers, FaMapMarkedAlt, FaArrowRight, FaCode, FaComments, FaTimes, FaExchangeAlt, FaShoppingCart, FaNetworkWired, FaChartLine, FaMountain, FaChartBar, FaCity
} from 'react-icons/fa'
import Link from 'next/link'
import Header from '@/components/Header'
import { useState, useEffect } from 'react'
import ChatComponent from '@/components/ChatComponent';
import { MOCK_NEWS } from './mockNews';


const quickLinks = [
  { text: "Latest News", href: "/news" },
  { text: "Top Experts", href: "/professionals" },
  { text: "Northeast Trade", href: "/northeast" }
];

const menuItems = [
  {
    title: "News",
    tagline: "Stay Informed",
    icon: FaNewspaper,
    color: "blue",
    href: "/news",
    image: "/news-bg.jpg",
    subcategories: [
      { name: "Latest Updates", href: "/news/latest" },
      { name: "Regional News", href: "/news/regional" },
      { name: "Global Trends", href: "/news/global" },
      { name: "Breaking Alerts", href: "/news/alerts" }
    ]
  },
  {
    title: "Information",
    tagline: "Learn Anything",
    icon: FaBook,
    color: "purple",
    href: "/information",
    image: "/info-bg.jpg",
    subcategories: [
      { name: "General Knowledge", href: "/information/general" },
      { name: "Science & Tech", href: "/information/science-tech" },
      { name: "History & Culture", href: "/information/history-culture" },
      { name: "How-To Guides", href: "/information/guides" }
    ]
  },
  {
    title: "Solutions",
    tagline: "Solve Problems",
    icon: FaLightbulb,
    color: "yellow",
    href: "/solutions",
    image: "/solutions-bg.jpg",
    subcategories: [
      { name: "Tech Fixes", href: "/solutions/tech" },
      { name: "Daily Life Hacks", href: "/solutions/life-hacks" },
      { name: "Work Challenges", href: "/solutions/work" },
      { name: "DIY Tips", href: "/solutions/diy" }
    ]
  },
  {
    title: "AI Tools",
    tagline: "Create with AI",
    icon: FaCogs,
    color: "green",
    href: "/tools",
    image: "/ai-bg.jpg",
    subcategories: [
      { name: "Coding Assistant", href: "/tools/coding" },
      { name: "Image Generation", href: "/tools/image" },
      { name: "Text Analysis", href: "/tools/text" },
      { name: "Custom Tools", href: "/tools/custom" }
    ]
  },
  {
    title: "Bharat Diary Directory Services",
    tagline: "Directory Services",
    icon: FaAddressBook,
    color: "red",
    href: "/directory",
    image: "/directory-bg.jpg",
    subcategories: [
      { 
        name: "Top Professionals", 
        href: "/directory/professionals",
        subitems: [
          "Doctors & Specialists",
          "Legal Experts",
          "Financial Advisors",
          "Tech Professionals",
          "Business Consultants"
        ]
      },
      { 
        name: "Best Services", 
        href: "/directory/services",
        subitems: [
          "Healthcare Services",
          "Legal Services",
          "Financial Services",
          "Tech Solutions",
          "Business Services"
        ]
      },
      { 
        name: "Prestigious Institutions", 
        href: "/directory/institutions",
        subitems: [
          "Educational Institutes",
          "Research Centers",
          "Hospitals & Clinics",
          "Financial Institutions",
          "Government Bodies"
        ]
      },
      { 
        name: "Prominent Personalities", 
        href: "/directory/personalities",
        subitems: [
          "Industry Leaders",
          "Academic Experts",
          "Cultural Icons",
          "Social Influencers",
          "Innovation Pioneers"
        ]
      }
    ]
  },
  {
    title: "Northeast Focus",
    tagline: "Discover Northeast",
    icon: FaMapMarkedAlt,
    color: "teal",
    href: "/northeast",
    image: "/northeast-bg.jpg",
    subcategories: [
      { name: "Directories", href: "/northeast/directories" },
      { name: "Trade Exchange", href: "/northeast/trade" },
      { name: "Buy-Sell Mart", href: "/northeast/marketplace" },
      { name: "Investors-Tech Network", href: "/northeast/network" }
    ]
  },
  {
    title: "Organic World",
    tagline: "Discover sustainable living solutions",
    icon: FaLeaf,
    color: "green",
    href: "/organic-world",
    image: "/images/organic-world.jpg", 
    subcategories: [
      { name: "Eco Products", href: "/organic-world/eco-products" },
      { name: "Sustainable Farming", href: "/organic-world/farming" },
      { name: "Green Living", href: "/organic-world/green-living" },
      { name: "Organic Food", href: "/organic-world/food" },
    ]
  },
  {
    title: "Virtual Emporia",
    tagline: "Shop in the digital marketplace",
    icon: FaStore,
    color: "purple",
    href: "/virtual-emporia",
    image: "/images/virtual-emporia.jpg",
    subcategories: [
      { name: "Digital Goods", href: "/virtual-emporia/digital-goods" },
      { name: "Online Shops", href: "/virtual-emporia/shops" },
      { name: "Virtual Malls", href: "/virtual-emporia/malls" },
      { name: "E-Commerce Tools", href: "/virtual-emporia/tools" },
    ]
  },
  {
    title: "Community",
    tagline: "Join Us",
    icon: FaUsers,
    color: "orange",
    href: "/community",
    image: "/community-bg.jpg",
    subcategories: [
      { name: "User Forums", href: "/community/forums" },
      { name: "Contribute Content", href: "/community/contribute" },
      { name: "Events & Webinars", href: "/community/events" },
      { name: "Feedback", href: "/community/feedback" }
    ]
  },
  {
    title: "Coding Tools",
    tagline: "Build with next-gen development tools",
    icon: FaCode,
    color: "blue",
    href: "/coding-tools",
    image: "/ai-bg.jpg",
    subcategories: [
      { name: "Development IDEs", href: "/coding-tools/ides" },
      { name: "Programming Libraries", href: "/coding-tools/libraries" },
      { name: "AI Coding Assistants", href: "/coding-tools/ai-assistants" },
      { name: "DevOps Tools", href: "/coding-tools/devops" },
    ]
  }
];

const featuredSpotlights = [
  {
    title: "Organic World",
    description: "Discover sustainable living solutions",
    href: "/organic-world"
  },
  {
    title: "Virtual Emporia",
    description: "Shop in the digital marketplace",
    href: "/virtual-emporia"
  },
  {
    title: "Coding Tools",
    description: "Build with next-gen development tools",
    href: "/coding-tools"
  }
];

// Define news source colors - same as in news page
const SOURCE_COLORS = {
  'Times of India': 'red',
  'The Hindu': 'blue',
  'NDTV': 'purple',
  'Economic Times': 'green',
  'Dainik Bhaskar': 'orange',
  'Amar Ujala': 'yellow',
  'Navbharat Times': 'pink',
  'PTI': 'cyan',
  'ANI': 'teal',
  'IANS': 'purple'
};

type NewsItem = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
};

export default function HomePage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const spotlightBg = useColorModeValue('blue.50', 'blue.900');
  const submenuBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  // State for latest news
  const [latestNews, setLatestNews] = useState<NewsItem[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState<string | null>(null);
  const [showChat, setShowChat] = useState(false);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [news, setNews] = useState<any[]>([]);

  // Fetch news data with static build support
  useEffect(() => {
    async function fetchNews() {
      setNewsLoading(true);
      try {
        if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
          // In production static build, load from pre-generated JSON
          const data = await fetch(`/bharatinfo-sol/data/news-${activeLanguage === 'hi' ? 'hi' : 'en'}.json`)
            .then(res => res.json());
          
          if (data && data.articles) {
            setNews(data.articles.slice(0, 5));
          } else {
            console.error("Invalid news data format from JSON file");
            setNews(MOCK_NEWS);
          }
        } else {
          // In development or SSR, call the API route
          const res = await fetch(`/api/news?lang=${activeLanguage}`, {
            cache: 'no-store',
            headers: {
              'Cache-Control': 'no-cache'
            }
          });
          
          if (!res.ok) {
            throw new Error(`Failed to fetch news: ${res.status}`);
          }
          
          const data = await res.json();
          setNews(data.slice(0, 5));
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setNews(MOCK_NEWS);
      } finally {
        setNewsLoading(false);
      }
    }

    fetchNews();
  }, [activeLanguage]);

  return (
    <Box bg={bgColor} minH="100vh">
      <Header />
      
      {/* AI Chat Strip */}
      <Box py={4} borderBottom="1px" borderColor={borderColor}>
        <Container maxW="container.xl">
          <ChatComponent />
        </Container>
      </Box>

      {/* AI Assistant Strip */}
      <Box 
        bg="linear-gradient(135deg, #1a365d 0%, #2d3748 100%)" 
        py={0.125}
        px={0.25}
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        zIndex={1000}
        boxShadow="0 -1px 1px rgba(0,0,0,0.1)"
      >
        <Container maxW="container.xl" px={0.25}>
          <Flex justify="space-between" align="center">
            <HStack spacing={0.25}>
              <Icon as={FaRobot} color="blue.300" boxSize={2} />
              <Text color="white" fontSize="4xs" fontWeight="medium">
                Bharat Diary AI Assistant
              </Text>
            </HStack>
            <HStack spacing={0.125}>
              <Button
                size="xs"
                variant="ghost"
                color="whiteAlpha.900"
                _hover={{ bg: 'whiteAlpha.200' }}
                onClick={() => setShowChat(true)}
                leftIcon={<FaComments />}
                px={0.25}
                py={0.125}
                fontSize="4xs"
                h="auto"
                minH="auto"
              >
                Chat Now
              </Button>
              <IconButton
                aria-label="Close"
                icon={<FaTimes />}
                size="xs"
                variant="ghost"
                color="whiteAlpha.900"
                _hover={{ bg: 'whiteAlpha.200' }}
                onClick={() => setShowChat(false)}
                p={0.125}
                minW="auto"
                h="auto"
                minH="auto"
              />
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.xl" py={8}>
        {/* Latest Updates Section */}
        <Box mb={8}>
          <Flex justify="space-between" align="center" mb={4}>
            <Heading size="lg">News Updates</Heading>
            <Button 
              as={Link} 
              href="/news" 
              size="sm" 
              colorScheme="blue" 
              rightIcon={<FaArrowRight />}
            >
              View All News
            </Button>
          </Flex>
          
          {newsLoading ? (
            <Flex justify="center" py={8}>
              <Spinner size="lg" color="blue.500" />
            </Flex>
          ) : newsError ? (
            <Text color="red.500">{newsError}</Text>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing={4}>
              {news.map((item, index) => (
                <LinkBox 
                  key={index}
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  bg={cardBg}
                  borderColor={borderColor}
                  _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
                  transition="all 0.2s"
                  height="100%"
                >
                  <Box p={3}>
                    <Badge 
                      colorScheme={SOURCE_COLORS[item.source as keyof typeof SOURCE_COLORS] || 'gray'} 
                      mb={2}
                    >
                      {item.source}
                    </Badge>
                    <Heading size="xs" noOfLines={2} mb={2}>
                      <LinkOverlay href={item.link} target="_blank">
                        {item.title}
                      </LinkOverlay>
                    </Heading>
                    <Text fontSize="xs" color="gray.500">
                      {new Date(item.pubDate).toLocaleDateString()}
                    </Text>
                  </Box>
                </LinkBox>
              ))}
            </SimpleGrid>
          )}
        </Box>

        {/* Menu Categories Grid - 5 columns on desktop, 1 on mobile */}
        <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} spacing={6} mb={8}>
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
              className={`group p-6 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${isHovered === index ? 'scale-105' : ''}`}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {/* Background Image */}
              <Box
                className="category-image"
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgImage={`url(${process.env.NODE_ENV === 'production' ? `/bharatinfo-sol${item.image}` : item.image})`}
                bgSize="cover"
                bgPosition="center"
                opacity={1}
                zIndex={0}
                transition="opacity 0.3s"
              />
              
              <CardBody position="relative" zIndex={2}>
                <VStack spacing={4} align="stretch" height="100%">
                  <VStack spacing={2} align="center">
                    <Icon as={item.icon} w={8} h={8} color="white" />
                    <Heading size="md" color="white" textAlign="center" textShadow="1px 1px 3px rgba(0,0,0,0.6)">
                      {item.title}
                    </Heading>
                    <Text color="white" textAlign="center" textShadow="1px 1px 2px rgba(0,0,0,0.6)">
                      {item.tagline}
                    </Text>
                  </VStack>
                  
                  {/* Subcategories - Hidden by default, visible on hover */}
                  <Box 
                    className="subcategories-container"
                    position="absolute"
                    left={0}
                    right={0}
                    bottom={0}
                    bg="rgba(0,0,0,0.8)"
                    p={4}
                    opacity={0}
                    transform="translateY(20px)"
                    transition="all 0.3s ease-in-out"
                    pointerEvents="none"
                    zIndex={3}
                  >
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
                      {item.subcategories.map((sub, subIndex) => (
                        <Box
                          key={subIndex}
                          p={2}
                          borderRadius="md"
                          bg="rgba(255,255,255,0.9)"
                          _hover={{ 
                            bg: 'white',
                            transform: 'translateX(4px)'
                          }}
                          transition="all 0.2s"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = sub.href;
                          }}
                        >
                          <Text fontSize="sm" color={`${item.color}.800`} fontWeight="medium">
                            {sub.name}
                          </Text>
                        </Box>
                      ))}
                    </SimpleGrid>
                  </Box>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        {/* Featured Spotlights */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={10}>
          {featuredSpotlights.map((spotlight, index) => (
            <Card 
              key={index} 
              bg={spotlightBg} 
              shadow="sm"
              _hover={{ shadow: 'md', transform: 'translateY(-2px)' }}
              transition="all 0.2s"
            >
              <CardBody>
                <VStack align="stretch" spacing={2}>
                  <Heading size="md">{spotlight.title}</Heading>
                  <Text>{spotlight.description}</Text>
                  <Button
                    as={Link}
                    href={spotlight.href}
                    colorScheme="blue"
                    size="sm"
                    alignSelf="flex-start"
                  >
                    Learn More
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        {/* Main Call to Action */}
        <Box 
          borderRadius="xl" 
          overflow="hidden" 
          position="relative" 
          height={{ base: "600px", md: "1125px" }}
          mb={8}
        >
          {/* Background with gradient overlay */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgImage={process.env.NODE_ENV === 'production' ? "url('/bharatinfo-sol/india-bg.jpg')" : "url('/india-bg.jpg')"}
            bgSize="cover"
            bgPosition="center"
            zIndex={0}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)"
            zIndex={1}
          />
          
          {/* Content */}
          <Flex
            position="relative"
            zIndex={2}
            height="100%"
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            p={{ base: 6, md: 10 }}
          >
            <VStack 
              align={{ base: "center", md: "flex-start" }} 
              spacing={4}
              maxW={{ base: "100%", md: "60%" }}
              mb={{ base: 6, md: 0 }}
            >
              <Heading 
                color="white" 
                size="xl"
                textShadow="1px 1px 3px rgba(0,0,0,0.6)"
              >
                Bharat Diary: India's AI-Powered Information and Solutions Hub
              </Heading>
              <Text 
                color="gray.100" 
                fontSize="lg"
                textShadow="1px 1px 2px rgba(0,0,0,0.6)"
              >
                Your Gateway to Smart Solutions
              </Text>
            </VStack>
            
            <Button
              size="lg"
              colorScheme="blue"
              px={8}
              py={6}
              fontSize="lg"
              _hover={{
                transform: 'translateY(-2px)',
                shadow: 'xl'
              }}
              transition="all 0.2s"
              as={Link}
              href="/directory"
            >
              Start Exploring Now
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
} 