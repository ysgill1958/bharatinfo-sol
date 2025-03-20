'use client';

import {
  Box,
  Container,
  Image,
  Heading,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function Header() {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box as="header" bg={bgColor} boxShadow="sm">
      {/* Top Bar with Logo */}
      <Container maxW="container.xl" py={4}>
        <Flex align="center" justify="space-between">
          <Link href="/" passHref>
            <Flex align="center" cursor="pointer">
              <Image
                src="/logo.png"
                alt="Bharat Diary Logo"
                height="40px"
                width="auto"
                mr={3}
              />
              <Box>
                <Heading size="md" color="red.600">Bharat Diary</Heading>
                <Text fontSize="sm" color={textColor}>Your Gateway to India</Text>
              </Box>
            </Flex>
          </Link>
        </Flex>
      </Container>

      {/* Banner Section */}
      <Box
        position="relative"
        height="450px"
        bgImage="url('/banner.jpg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.500"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Container maxW="container.xl">
            <Heading
              color="white"
              size="2xl"
              textAlign="center"
              textShadow="2px 2px 4px rgba(0,0,0,0.5)"
            >
              Bharat Diary: India's AI-Powered Information and Solutions Hub
            </Heading>
            <Text
              color="white"
              fontSize="xl"
              textAlign="center"
              mt={4}
              textShadow="1px 1px 2px rgba(0,0,0,0.5)"
            >
              Your comprehensive guide to India's culture, services, and opportunities
            </Text>
          </Container>
        </Box>
      </Box>
    </Box>
  );
} 