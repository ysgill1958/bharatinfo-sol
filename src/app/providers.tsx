'use client';

import { ChakraProvider } from '@chakra-ui/react'
import Navigation from '@/components/Navigation'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <Navigation />
      {children}
    </ChakraProvider>
  )
} 