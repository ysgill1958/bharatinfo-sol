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
import { MOCK_NEWS, NewsItem } from '../mockNews';

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

export default function NewsPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeLanguage, setActiveLanguage] = useState<string>('all');
  const [refreshing, setRefreshing] = useState(false);

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const headerBg = useColorModeValue('blue.50', 'blue.900');

  async function fetchNews() {
    setLoading(true);
    setError('');
    
    try {
      let url;
      
      // In production static build, load from pre-generated JSON
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        const baseUrl = '/bharatinfo-sol';
        url = `${baseUrl}/data/news-${activeLanguage === 'hi' ? 'hi' : 'en'}.json`;
        
        const res = await fetch(url, { 
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache' }
        });
        
        if (!res.ok) {
          throw new Error(`Failed to fetch news: ${res.status}`);
        }
        
        const data = await res.json();
        
        if (data && data.articles) {
          setNewsItems(data.articles);
        } else {
          console.error("Invalid news data format from JSON file");
          // Filter mock news by language
          setNewsItems(MOCK_NEWS.filter(item => item.language === activeLanguage || item.language === 'en'));
        }
      } else {
        // In development, use API route
        url = `/api/news?lang=${activeLanguage}`;
        
        const res = await fetch(url, {
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache' }
        });
        
        if (!res.ok) {
          throw new Error(`Failed to fetch news: ${res.status}`);
        }
        
        const data = await res.json();
        setNewsItems(data);
      }
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Failed to fetch news. Showing fallback content.');
      // Filter mock news by language
      setNewsItems(MOCK_NEWS.filter(item => item.language === activeLanguage || item.language === 'en'));
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    fetchNews();
  }, []);

  const handleLanguageChange = (language: string) => {
    setActiveLanguage(language);
    fetchNews();
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchNews();
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