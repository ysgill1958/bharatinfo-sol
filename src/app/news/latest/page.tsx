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
  Divider
} from '@chakra-ui/react';

// Define news item type
type NewsItem = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
  sourceColor?: string;
  language?: string;
};

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

// Mock news data for static deployment
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
    title: 'New Tech Hub Inaugurated in Bengaluru',
    description: 'A state-of-the-art technology center opened in Bengaluru, expected to create 10,000 jobs.',
    link: 'https://example.com/tech/bengaluru-hub',
    pubDate: new Date().toISOString(),
    source: 'The Hindu',
    sourceColor: 'blue',
    language: 'en'
  },
  {
    title: 'Stock Market Reaches All-Time High',
    description: 'Indian stock indices surged to record levels powered by tech and banking stocks.',
    link: 'https://example.com/markets/record-high',
    pubDate: new Date().toISOString(),
    source: 'Economic Times',
    sourceColor: 'green',
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

export default function LatestUpdatesPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const headerBg = useColorModeValue('blue.50', 'blue.900');

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        // Hardcoded flag for static deployment
        const isStaticBuild = true; // Always use mock data for static deployment
        
        // In static export (production), use mock data instead of API calls
        if (isStaticBuild || 
            process.env.NODE_ENV === 'production' || 
            process.env.STATIC_BUILD === 'true' || 
            process.env.NEXT_PUBLIC_STATIC_BUILD === 'true') {
          setNewsItems(MOCK_NEWS);
          setLoading(false);
          return;
        }
        
        // Only try to fetch in development
        const response = await fetch('/api/news');
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
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
        console.error('Error fetching latest news:', err);
        setNewsItems(MOCK_NEWS);
        setError('Could not fetch live news updates. Showing sample data instead.');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestNews();
  }, []);

  if (loading) {
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
    <Container maxW="container.xl" py={8}>
      <Box bg={headerBg} p={6} borderRadius="lg" mb={8}>
        <Heading size="xl" textAlign="center">Latest Updates</Heading>
        <Text textAlign="center" mt={2}>
          The most recent news from India's top sources
        </Text>
      </Box>

      {sortedDates.map(date => (
        <Box key={date} mb={8}>
          <Flex align="center" mb={4}>
            <Heading size="md" mr={4}>{date}</Heading>
            <Divider flex="1" />
          </Flex>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {groupedNews[date].map((item, index) => (
              <LinkBox
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                bg={bgColor}
                borderColor={borderColor}
                _hover={{ transform: 'translateY(-4px)', shadow: 'md' }}
                transition="all 0.2s"
              >
                <Stack p={4} spacing={2}>
                  <Badge 
                    colorScheme={item.sourceColor || SOURCE_COLORS[item.source] || 'blue'} 
                    alignSelf="start"
                  >
                    {item.source}
                  </Badge>
                  
                  <Heading size="md" my={2}>
                    <LinkOverlay href={item.link} target="_blank">
                      {item.title}
                    </LinkOverlay>
                  </Heading>
                  
                  <Text noOfLines={3}>
                    {item.description}
                  </Text>
                  
                  <Text fontSize="sm" color="gray.500">
                    {new Date(item.pubDate).toLocaleTimeString()}
                  </Text>
                </Stack>
              </LinkBox>
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </Container>
  );
} 