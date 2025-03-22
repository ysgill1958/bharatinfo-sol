'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  LinkBox,
  LinkOverlay,
  Stack,
  Badge,
  useColorModeValue,
  Alert,
  AlertIcon,
  Spinner,
  Flex,
  Divider,
  VStack,
  Link,
  Button,
  HStack
} from '@chakra-ui/react';
import { FaSyncAlt, FaLanguage } from 'react-icons/fa';
import { MOCK_NEWS, NewsItem } from '../../mockNews';

// Source colors mapping
const SOURCE_COLORS: Record<string, string> = {
  'Times of India': 'red',
  'The Hindu': 'blue',
  'NDTV': 'purple',
  'Economic Times': 'green',
  'PTI': 'cyan',
  'ANI': 'teal',
  'IANS': 'purple'
};

export default function LatestNewsUpdates() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeLanguage, setActiveLanguage] = useState('en');
  const [refreshing, setRefreshing] = useState(false);

  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'white');
  const headingColor = useColorModeValue('blue.600', 'blue.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const badgeBg = useColorModeValue('blue.50', 'blue.900');
  const headerBg = useColorModeValue('blue.50', 'blue.900');

  async function fetchNews() {
    setLoading(true);
    setError(null);
    
    try {
      // In production static build, load from pre-generated JSON
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        const baseUrl = '/bharatinfo-sol';
        const url = `${baseUrl}/data/news-${activeLanguage === 'hi' ? 'hi' : 'en'}.json`;
        
        const res = await fetch(url, { 
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache' }
        });
        
        if (!res.ok) {
          throw new Error(`Failed to fetch news: ${res.status}`);
        }
        
        const data = await res.json();
        
        if (data && data.articles) {
          setNewsItems(data.articles.slice(0, 10));
        } else {
          console.error("Invalid news data format from JSON file");
          // Filter mock news by language
          setNewsItems(MOCK_NEWS.filter(item => item.language === activeLanguage));
        }
      } else {
        // In development, use API route
        const url = `/api/news?lang=${activeLanguage}`;
        
        const res = await fetch(url, {
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache' }
        });
        
        if (!res.ok) {
          throw new Error(`Failed to fetch news: ${res.status}`);
        }
        
        const data = await res.json();
        setNewsItems(data.slice(0, 10));
      }
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Failed to fetch latest news. Showing fallback content.');
      // Filter mock news by language
      setNewsItems(MOCK_NEWS.filter(item => item.language === activeLanguage));
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    fetchNews();
  }, [activeLanguage]);

  const handleLanguageChange = (language: string) => {
    setActiveLanguage(language);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchNews();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading && !refreshing) {
    return (
      <Container maxW="container.xl" py={8}>
        <Flex direction="column" align="center" justify="center" py={10} gap={4}>
          <Spinner size="xl" thickness="4px" color="blue.500" />
          <Text>Loading latest updates...</Text>
        </Flex>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxW="container.xl" py={8}>
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      </Container>
    );
  }

  // Group news by date
  const groupedNews: Record<string, NewsItem[]> = {};
  newsItems.forEach(item => {
    const date = new Date(item.pubDate).toLocaleDateString();
    if (!groupedNews[date]) {
      groupedNews[date] = [];
    }
    groupedNews[date].push(item);
  });

  const sortedDates = Object.keys(groupedNews).sort((a, b) => {
    return new Date(b).getTime() - new Date(a).getTime();
  });

  return (
    <Box maxW="1200px" mx="auto" px={4} py={8}>
      <Box bg={headerBg} p={6} mb={8} borderRadius="md">
        <Heading as="h1" size="xl" mb={4} color={headingColor}>
          Latest News Updates
        </Heading>
        <Text fontSize="lg" mb={4}>
          Stay informed with the most recent news and developments.
        </Text>
        <HStack spacing={4}>
          <Button
            size="sm"
            leftIcon={<FaLanguage />}
            colorScheme={activeLanguage === 'en' ? 'blue' : 'gray'}
            onClick={() => handleLanguageChange('en')}
            isDisabled={refreshing}
          >
            English
          </Button>
          <Button
            size="sm"
            leftIcon={<FaLanguage />}
            colorScheme={activeLanguage === 'hi' ? 'blue' : 'gray'}
            onClick={() => handleLanguageChange('hi')}
            isDisabled={refreshing}
          >
            हिंदी
          </Button>
          <Button
            size="sm"
            leftIcon={<FaSyncAlt />}
            onClick={handleRefresh}
            isLoading={refreshing}
            loadingText="Refreshing"
          >
            Refresh
          </Button>
        </HStack>
      </Box>

      {loading && !refreshing ? (
        <Flex justify="center" align="center" my={12}>
          <Spinner size="xl" color="blue.500" thickness="4px" />
        </Flex>
      ) : error ? (
        <Box p={4} bg="red.50" color="red.500" borderRadius="md" mb={6}>
          {error}
        </Box>
      ) : (
        <VStack spacing={6} align="stretch">
          {newsItems.map((item, index) => (
            <Box
              key={index}
              p={6}
              bg={bgColor}
              borderRadius="md"
              borderWidth="1px"
              borderColor={borderColor}
              shadow="md"
            >
              <Heading as="h2" size="md" mb={2} color={headingColor}>
                {item.title}
              </Heading>
              <Text fontSize="sm" color="gray.500" mb={3}>
                {formatDate(item.pubDate)}
              </Text>
              <Text mb={4} color={textColor}>
                {item.description}
              </Text>
              <Flex justify="space-between" align="center">
                <Badge px={2} py={1} bg={badgeBg} color={item.sourceColor || "blue.500"} borderRadius="full">
                  {item.source}
                </Badge>
                <Link href={item.link} isExternal color="blue.500" fontWeight="medium">
                  Read full story
                </Link>
              </Flex>
            </Box>
          ))}
        </VStack>
      )}
    </Box>
  );
} 