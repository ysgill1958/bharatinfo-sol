'use client';

import { Box, Container, Heading, Text, Stack, Divider, OrderedList, ListItem } from '@chakra-ui/react';
import Header from '@/components/Header';

export default function TermsPage() {
  return (
    <>
      <Header />
      <Container maxW="container.xl" py={8}>
        <Stack spacing={6}>
          <Heading as="h1" size="xl">Terms of Service</Heading>
          <Divider />
          
          <Text>
            Last Updated: {new Date().toLocaleDateString()}
          </Text>
          
          <Text>
            Please read these Terms of Service ("Terms") carefully before using the Bharat Diary website and services.
          </Text>
          
          <Heading as="h2" size="lg">1. Acceptance of Terms</Heading>
          <Text>
            By accessing or using Bharat Diary, you agree to be bound by these Terms and our Privacy Policy. 
            If you do not agree to these Terms, please do not use our services.
          </Text>
          
          <Heading as="h2" size="lg">2. Use of Services</Heading>
          <Text>
            Bharat Diary provides information and connection services. Users must use these services responsibly 
            and in compliance with all applicable laws and regulations.
          </Text>
          
          <Heading as="h2" size="lg">3. User Accounts</Heading>
          <Text>
            Some features may require registration. Users are responsible for maintaining the confidentiality 
            of their account credentials and for all activities under their account.
          </Text>
          
          <Heading as="h2" size="lg">4. Intellectual Property</Heading>
          <Text>
            All content on Bharat Diary, including text, graphics, logos, and software, is the property of 
            Bharat Diary or its content suppliers and is protected by copyright and intellectual property laws.
          </Text>
          
          <Heading as="h2" size="lg">5. Limitation of Liability</Heading>
          <Text>
            Bharat Diary shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
            resulting from your access to or use of, or inability to access or use, the services.
          </Text>
        </Stack>
      </Container>
    </>
  );
} 