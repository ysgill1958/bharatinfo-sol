'use client';

import React from 'react'
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Icon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaLanguage, FaImage, FaFileAlt, FaChartBar, FaCode, FaRobot } from 'react-icons/fa'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

const tools = [
  {
    name: 'Language Translation',
    description: 'Translate text between multiple Indian languages and English',
    icon: FaLanguage,
    link: '/tools/translate',
    color: 'blue',
  },
  {
    name: 'Image Analysis',
    description: 'Analyze and extract information from images using AI',
    icon: FaImage,
    link: '/tools/image-analysis',
    color: 'green',
  },
  {
    name: 'Document Processing',
    description: 'Extract and summarize information from documents',
    icon: FaFileAlt,
    link: '/tools/document',
    color: 'purple',
  },
  {
    name: 'Data Analysis',
    description: 'Analyze and visualize data with AI assistance',
    icon: FaChartBar,
    link: '/tools/data-analysis',
    color: 'orange',
  },
  {
    name: 'Code Assistant',
    description: 'Get help with coding and technical problems',
    icon: FaCode,
    link: '/tools/code',
    color: 'pink',
  },
  {
    name: 'Custom Chatbot',
    description: 'Create your own AI chatbot for specific tasks',
    icon: FaRobot,
    link: '/tools/chatbot',
    color: 'teal',
  },
]

export default function ToolsPage() {
  const bgColor = useColorModeValue('white', 'gray.800')

  return (
    <>
      <Navigation />
      <Container maxW="container.xl" py={8}>
        <Box textAlign="center" mb={12}>
          <Heading as="h1" size="2xl" mb={4}>
            AI Tools
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Explore our collection of AI-powered tools
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {tools.map((tool) => (
            <Link key={tool.name} href={tool.link}>
              <Box
                p={6}
                bg={bgColor}
                shadow="md"
                borderRadius="lg"
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-5px)', shadow: 'lg' }}
                cursor="pointer"
                height="100%"
              >
                <VStack spacing={4} align="start" height="100%">
                  <Icon as={tool.icon} w={10} h={10} color={`${tool.color}.500`} />
                  <Heading size="md">{tool.name}</Heading>
                  <Text color="gray.600">{tool.description}</Text>
                  <Button
                    colorScheme={tool.color}
                    size="sm"
                    mt="auto"
                    alignSelf="flex-start"
                  >
                    Try Now
                  </Button>
                </VStack>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Container>
    </>
  )
} 