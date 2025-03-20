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

// Define news source colors
const SOURCE_COLORS = {
  'Times of India': 'red',
  'The Hindu': 'blue',
  'NDTV': 'purple',
  'Economic Times': 'green'
};

type NewsItem = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
};

export default function LatestUpdatesPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const headerBg = useColorModeValue('blue.50', 'blue.900');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        const data = await response.json();
        if ('error' in data) {
          throw new Error(data.error);
        }
        setNewsItems(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch news');
        setLoading(false);
      }
    };

    fetchNews();
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
                    colorScheme={SOURCE_COLORS[item.source as keyof typeof SOURCE_COLORS] || 'gray'} 
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