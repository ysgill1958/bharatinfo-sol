import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  HStack,
  Tag,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import Navigation from '@/components/Navigation';
import { categories, metaCategories, superCategories } from '@/data/categories';
import Link from 'next/link';

export default function SolutionsPage() {
  return (
    <>
      <Navigation />
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={4}>
              Solutions
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Explore our comprehensive collection of solutions across various domains
            </Text>
          </Box>

          {/* Search Bar */}
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none">
              <FaSearch color="gray.300" />
            </InputLeftElement>
            <Input placeholder="Search solutions..." />
          </InputGroup>

          {/* Meta Categories */}
          <Box>
            <Heading size="md" mb={4}>Quick Access</Heading>
            <HStack spacing={4} flexWrap="wrap">
              {Object.entries(metaCategories).map(([key, value]) => (
                <Tag
                  key={key}
                  size="lg"
                  colorScheme="blue"
                  borderRadius="full"
                  cursor="pointer"
                  _hover={{ transform: 'translateY(-2px)' }}
                  transition="all 0.2s"
                >
                  {value}
                </Tag>
              ))}
            </HStack>
          </Box>

          {/* Super Categories */}
          <Box>
            <Heading size="md" mb={4}>Browse By</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
              {superCategories.map((category) => (
                <Box
                  key={category.name}
                  p={4}
                  bg="white"
                  shadow="sm"
                  borderRadius="lg"
                >
                  <Text fontWeight="bold" mb={2}>{category.name}</Text>
                  <VStack align="stretch" spacing={1}>
                    {category.types.map((type) => (
                      <Text key={type} fontSize="sm" color="gray.600">
                        {type}
                      </Text>
                    ))}
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* Main Categories */}
          <Tabs variant="enclosed" colorScheme="blue">
            <TabList overflowX="auto" flexWrap="nowrap" css={{ scrollbarWidth: 'none' }}>
              <Tab>All Solutions</Tab>
              <Tab>Most Popular</Tab>
              <Tab>Recently Updated</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Accordion allowMultiple>
                  {categories.map((category) => (
                    <AccordionItem key={category.id}>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Text fontWeight="bold">{category.name}</Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel>
                        <Text color="gray.600" mb={4}>
                          {category.description}
                        </Text>
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                          {category.subcategories.map((sub) => (
                            <Link
                              key={sub.slug}
                              href={`/solutions/${category.slug}/${sub.slug}`}
                            >
                              <Box
                                p={3}
                                bg="gray.50"
                                borderRadius="md"
                                _hover={{
                                  bg: 'blue.50',
                                  transform: 'translateY(-2px)',
                                }}
                                transition="all 0.2s"
                                cursor="pointer"
                              >
                                {sub.name}
                              </Box>
                            </Link>
                          ))}
                        </SimpleGrid>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabPanel>

              <TabPanel>
                <Text>Most popular solutions will be displayed here...</Text>
              </TabPanel>

              <TabPanel>
                <Text>Recently updated solutions will be displayed here...</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Container>
    </>
  );
} 