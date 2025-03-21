'use client';

import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Flex,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';

export default function Footer() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      as="footer"
      bg={bgColor}
      color={textColor}
      py={3}
      borderTop="1px"
      borderColor={borderColor}
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'center', md: 'center' }}
          fontSize="sm"
        >
          <Text>
            © {new Date().getFullYear()} Bharat Diary. All rights reserved.
          </Text>
          
          <Stack 
            direction="row" 
            spacing={4} 
            align="center" 
            justify={{ base: 'center', md: 'flex-end' }}
            pt={{ base: 2, md: 0 }}
          >
            <Link href="/about" fontWeight="medium">About Us</Link>
            <Text>|</Text>
            <Link href="/terms" fontWeight="medium">Terms</Link>
            <Text>|</Text>
            <Link href="/privacy" fontWeight="medium">Privacy</Link>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
} 