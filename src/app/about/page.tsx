'use client';

import { Box, Container, Heading, Text, Stack, Divider } from '@chakra-ui/react';
import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <>
      <Header />
      <Container maxW="container.xl" py={8}>
        <Stack spacing={6}>
          <Heading as="h1" size="xl">About Bharat Diary</Heading>
          <Divider />
          
          <Text>
            Bharat Diary is India's AI-powered information and solutions hub, designed to provide 
            comprehensive access to information, services, and opportunities across India.
          </Text>
          
          <Text>
            Our mission is to connect people with valuable resources, expert professionals, and localized 
            information that empowers them to make informed decisions and access quality services.
          </Text>
          
          <Heading as="h2" size="lg" mt={4}>Our Vision</Heading>
          <Text>
            To become the most trusted and comprehensive platform for information and solutions in India, 
            leveraging technology to bridge gaps and create opportunities for all.
          </Text>
          
          <Heading as="h2" size="lg" mt={4}>Contact Us</Heading>
          <Text>
            For inquiries, partnership opportunities, or support, please reach out to us at:
            <br />
            Email: contact@bharatdiary.in
            <br />
            Phone: +91-1234567890
          </Text>
        </Stack>
      </Container>
    </>
  );
} 