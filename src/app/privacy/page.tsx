'use client';

import { Box, Container, Heading, Text, Stack, Divider } from '@chakra-ui/react';
import Header from '@/components/Header';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <Container maxW="container.xl" py={8}>
        <Stack spacing={6}>
          <Heading as="h1" size="xl">Privacy Policy</Heading>
          <Divider />
          
          <Text>
            Last Updated: {new Date().toLocaleDateString()}
          </Text>
          
          <Text>
            At Bharat Diary, we respect your privacy and are committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
          </Text>
          
          <Heading as="h2" size="lg">1. Information We Collect</Heading>
          <Text>
            We collect information you provide directly to us, such as when you create an account, 
            use our services, or communicate with us. We may also collect certain information automatically 
            when you visit our website, including your IP address, browser type, and usage data.
          </Text>
          
          <Heading as="h2" size="lg">2. How We Use Your Information</Heading>
          <Text>
            We use the information we collect to provide, maintain, and improve our services, 
            to communicate with you, to personalize your experience, and to comply with legal obligations.
          </Text>
          
          <Heading as="h2" size="lg">3. Information Sharing</Heading>
          <Text>
            We do not sell or rent your personal information to third parties. We may share your information 
            with trusted service providers who assist us in operating our website and services, 
            or as required by law.
          </Text>
          
          <Heading as="h2" size="lg">4. Data Security</Heading>
          <Text>
            We implement appropriate security measures to protect your personal information. 
            However, no method of transmission over the Internet is 100% secure, and we cannot 
            guarantee absolute security.
          </Text>
          
          <Heading as="h2" size="lg">5. Your Rights</Heading>
          <Text>
            You may access, update, or delete your personal information by contacting us. 
            You may also have certain rights under applicable data protection laws, 
            including the right to access, correct, or delete your personal data.
          </Text>
        </Stack>
      </Container>
    </>
  );
} 