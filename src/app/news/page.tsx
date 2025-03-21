'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  LinkBox,
  LinkOverlay,
  Stack,
  Badge,
  useColorModeValue,
  HStack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Spinner,
  Alert,
  AlertIcon,
  Button,
  Icon
} from '@chakra-ui/react';
import { FaGlobe, FaLanguage, FaNewspaper, FaSyncAlt } from 'react-icons/fa';

// Define news sources
const NEWS_SOURCES = [
  // English News Sources
  {
    name: 'Times of India',
    url: 'https://timesofindia.indiatimes.com/rssfeedstopstories.cms',
    color: 'red',
    language: 'en'
  },
  {
    name: 'The Hindu',
    url: 'https://www.thehindu.com/news/feeder/default.rss',
    color: 'blue',
    language: 'en'
  },
  {
    name: 'NDTV',
    url: 'https://feeds.feedburner.com/ndtvnews-top-stories',
    color: 'purple',
    language: 'en'
  },
  {
    name: 'Economic Times',
    url: 'https://economictimes.indiatimes.com/rssfeedsdefault.cms',
    color: 'green',
    language: 'en'
  },
  // Hindi News Sources
  {
    name: 'Dainik Bhaskar',
    url: 'https://www.bhaskar.com/rss-v1--feed-news.xml',
    color: 'orange',
    language: 'hi'
  },
  {
    name: 'Amar Ujala',
    url: 'https://www.amarujala.com/rss/breaking-news.xml',
    color: 'yellow',
    language: 'hi'
  },
  {
    name: 'Navbharat Times',
    url: 'https://navbharattimes.indiatimes.com/rssfeedsdefault.cms',
    color: 'pink',
    language: 'hi'
  },
  // News Agencies
  {
    name: 'PTI',
    url: 'https://www.ptinews.com/feed/',
    color: 'cyan',
    language: 'en'
  },
  {
    name: 'ANI',
    url: 'https://aninews.in/rss/feed.xml',
    color: 'teal',
    language: 'en'
  },
  {
    name: 'IANS',
    url: 'https://ians.in/rss/feed.xml',
    color: 'purple',
    language: 'en'
  }
];

// Define news source colors
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

// Fallback mock news data
const MOCK_NEWS: NewsItem[] = [
  {
    title: 'India Reports Strong Economic Growth in Q1',
    description: 'The Indian economy showed resilience with 7.2% growth in the first quarter despite global challenges.',
    link: 'https://example.com/business/india-economy',
    pubDate: new Date().toISOString(),
    source: 'Times of India',
    sourceColor: 'red',
    language: 'en'
  },
  {
    title: 'नई शिक्षा नीति पर सरकार का बड़ा फैसला',
    description: 'केंद्र सरकार ने नई शिक्षा नीति के तहत पाठ्यक्रम में बड़े बदलाव की घोषणा की है।',
    link: 'https://example.com/education/new-policy',
    pubDate: new Date().toISOString(),
    source: 'Dainik Bhaskar',
    sourceColor: 'orange',
    language: 'hi'
  },
  {
    title: 'New Tech Hub Inaugurated in Bengaluru',
    description: 'A state-of-the-art technology center opened in Bengaluru, expected to create 10,000 jobs.',
    link: 'https://example.com/tech/bengaluru-hub',
    pubDate: new Date().toISOString(),
    source: 'The Hindu',
    sourceColor: 'blue',
    language: 'en'
  },
  {
    title: 'PTI: Major Policy Reforms Expected in Budget',
    description: 'Government sources indicate significant economic reforms in the upcoming budget session.',
    link: 'https://example.com/budget/reforms',
    pubDate: new Date().toISOString(),
    source: 'PTI',
    sourceColor: 'cyan',
    language: 'en'
  },
  {
    title: 'ANI: India-US Strategic Partnership Strengthens',
    description: 'Bilateral ties between India and the United States reach new heights with latest agreements.',
    link: 'https://example.com/diplomacy/india-us',
    pubDate: new Date().toISOString(),
    source: 'ANI',
    sourceColor: 'teal',
    language: 'en'
  }
];

type NewsItem = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
  sourceColor: string;
  language: string;
};

export default function NewsPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeLanguage, setActiveLanguage] = useState<string>('all');
  const [refreshing, setRefreshing] = useState(false);

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const headerBg = useColorModeValue('blue.50', 'blue.900');

  const fetchNews = async (language?: string) => {
    try {
      setLoading(true);
      
      // Hardcoded flag for static deployment
      const isStaticBuild = true; // Always use mock data for static deployment
      
      // In a static export (like GitHub Pages), API routes don't exist as endpoints
      // Skip the fetch entirely in production and just use mock data
      if (isStaticBuild || 
          process.env.NODE_ENV === 'production' || 
          process.env.STATIC_BUILD === 'true' || 
          process.env.NEXT_PUBLIC_STATIC_BUILD === 'true') {
        // Filter mock data by language if provided
        if (language && language !== 'all') {
          const sources = NEWS_SOURCES.filter(source => source.language === language).map(source => source.name);
          setNewsItems(MOCK_NEWS.filter(item => sources.includes(item.source)));
        } else {
          setNewsItems(MOCK_NEWS);
        }
        setLoading(false);
        return;
      }
      
      // Only attempt to fetch in development environment
      let url = '/api/news';
      if (language && language !== 'all') {
        url += `?language=${language}`;
      }
      
      const response = await fetch(url, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      
      const responseText = await response.text();
      let data;
      
      try {
        // Try to parse as JSON
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('JSON parse error:', parseError, 'Response was:', responseText.substring(0, 150) + '...');
        throw new Error('Invalid JSON response');
      }
      
      setNewsItems(Array.isArray(data) ? data : []);
      setError(null);
    } catch (err) {
      console.error('News fetch error:', err);
      // Use mock data in case of error
      if (language && language !== 'all') {
        const sources = NEWS_SOURCES.filter(source => source.language === language).map(source => source.name);
        setNewsItems(MOCK_NEWS.filter(item => sources.includes(item.source)));
      } else {
        setNewsItems(MOCK_NEWS);
      }
      setError('Using sample news data');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleLanguageChange = (language: string) => {
    setActiveLanguage(language);
    fetchNews(language);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchNews(activeLanguage);
  };

  const filteredNews = newsItems;

  // Format the publication date
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(date);
    } catch (e) {
      return dateString;
    }
  };

  return (
    <Container maxW="container.xl" py={8}>
      <Box 
        mb={6} 
        p={4} 
        borderRadius="lg" 
        bg={headerBg}
        boxShadow="sm"
      >
        <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
          <Box>
            <Heading mb={2} display="flex" alignItems="center">
              <Icon as={FaNewspaper} mr={2} />
              Latest News
            </Heading>
            <Text color="gray.600">Stay updated with the latest news from trusted sources</Text>
          </Box>
          
          <HStack spacing={4}>
            <Button 
              leftIcon={<FaSyncAlt />} 
              colorScheme="blue" 
              isLoading={refreshing}
              onClick={handleRefresh}
              variant="outline"
            >
              Refresh
            </Button>
          </HStack>
        </Flex>
      </Box>
      
      <Tabs isFitted variant="enclosed" colorScheme="blue" mb={6}>
        <TabList>
          <Tab onClick={() => handleLanguageChange('all')}>
            <Icon as={FaGlobe} mr={2} />
            All News
          </Tab>
          <Tab onClick={() => handleLanguageChange('en')}>
            <Icon as={FaLanguage} mr={2} />
            English
          </Tab>
          <Tab onClick={() => handleLanguageChange('hi')}>
            <Icon as={FaLanguage} mr={2} />
            हिंदी
          </Tab>
        </TabList>
      </Tabs>
      
      {loading ? (
        <Flex justify="center" align="center" height="300px">
          <Spinner size="xl" thickness="4px" color="blue.500" />
        </Flex>
      ) : error ? (
        <Alert status="error" borderRadius="md">
          <AlertIcon />
          {error}
        </Alert>
      ) : filteredNews.length === 0 ? (
        <Alert status="info" borderRadius="md">
          <AlertIcon />
          No news articles found.
        </Alert>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {filteredNews.map((item, index) => (
            <LinkBox
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg={bgColor}
              borderColor={borderColor}
              _hover={{ transform: 'translateY(-4px)', shadow: 'md' }}
              transition="all 0.2s"
              height="100%"
            >
              <Stack p={4} spacing={3} height="100%">
                {item.language === 'hi' && (
                  <Badge 
                    colorScheme="purple" 
                    alignSelf="start"
                    px={2}
                    py={1}
                    borderRadius="full"
                  >
                    हिंदी
                  </Badge>
                )}
                
                <Heading size="md" my={2} lineHeight="1.4">
                  <LinkOverlay href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </LinkOverlay>
                </Heading>
                
                <Text noOfLines={3} flex="1">
                  {item.description}
                </Text>
                
                <Text fontSize="sm" color="gray.500">
                  {formatDate(item.pubDate)}
                </Text>
              </Stack>
            </LinkBox>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
} 