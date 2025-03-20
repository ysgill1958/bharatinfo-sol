'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Input,
  InputGroup,
  InputLeftElement,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tag,
  TagLabel,
  Grid,
  GridItem,
  Card,
  CardBody,
  Stack,
  Divider,
  Select,
  HStack,
  Icon,
  Button,
  useColorModeValue
} from '@chakra-ui/react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { serviceCategories, serviceMetaCategories, serviceFilters } from '@/data/serviceCategories';
import { useState } from 'react';

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');

  return (
    <Box minH="100vh" bg={bgColor} py={8}>
      <Container maxW="container.xl">
        {/* Header Section */}
        <Box mb={8} textAlign="center">
          <Heading size="2xl" mb={4}>Best Services Directory</Heading>
          <Text fontSize="lg" color="gray.600">
            Discover and connect with the best service providers in your area
          </Text>
        </Box>

        {/* Search Section */}
        <Box mb={8}>
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none">
              <Icon as={FaSearch} color="gray.400" />
            </InputLeftElement>
            <Input
              placeholder="Search for services, categories, or providers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              bg={cardBg}
              borderRadius="lg"
            />
          </InputGroup>
        </Box>

        {/* Quick Access Meta Categories */}
        <Box mb={8}>
          <Heading size="md" mb={4}>Quick Access</Heading>
          <HStack spacing={4} wrap="wrap">
            {Object.entries(serviceMetaCategories).map(([key, label]) => (
              <Tag
                key={key}
                size="lg"
                variant="subtle"
                colorScheme="blue"
                cursor="pointer"
                _hover={{ bg: 'blue.100' }}
              >
                <TagLabel>{label}</TagLabel>
              </Tag>
            ))}
          </HStack>
        </Box>

        {/* Filters Section */}
        <Box mb={8}>
          <Heading size="md" mb={4}>Filters</Heading>
          <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} spacing={4}>
            {serviceFilters.map((filter) => (
              <Select key={filter.name} placeholder={filter.name}>
                {filter.types.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </Select>
            ))}
          </SimpleGrid>
        </Box>

        {/* Main Categories Grid */}
        <Box>
          <Heading size="md" mb={6}>Browse by Category</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {serviceCategories.map((category) => (
              <Card key={category.id} bg={cardBg} _hover={{ transform: 'translateY(-4px)', transition: '0.3s' }}>
                <CardBody>
                  <Stack spacing={4}>
                    <Heading size="md">{category.name}</Heading>
                    <Text color="gray.600">{category.description}</Text>
                    <Divider />
                    <SimpleGrid columns={2} spacing={2}>
                      {category.subcategories.slice(0, 4).map((sub) => (
                        <Button
                          key={sub.slug}
                          variant="ghost"
                          size="sm"
                          justifyContent="flex-start"
                          whiteSpace="normal"
                          textAlign="left"
                          height="auto"
                          py={2}
                        >
                          {sub.name}
                        </Button>
                      ))}
                    </SimpleGrid>
                    {category.subcategories.length > 4 && (
                      <Button variant="link" colorScheme="blue" size="sm">
                        View {category.subcategories.length - 4} more...
                      </Button>
                    )}
                  </Stack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
} 