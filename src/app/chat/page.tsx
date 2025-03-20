'use client';

import { useState } from 'react'
import {
  Box,
  Container,
  VStack,
  Input,
  Button,
  Text,
  Heading,
  useToast
} from '@chakra-ui/react'

export default function ChatPage() {
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([])
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setIsLoading(true)
    const newMessage = { role: 'user' as const, content: message }
    setChatHistory(prev => [...prev, newMessage])
    setMessage('')

    try {
      // Placeholder response until API is integrated
      const response = { role: 'assistant' as const, content: 'This is a placeholder response. API integration pending.' }
      setChatHistory(prev => [...prev, response])
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6} align="stretch">
        <Heading textAlign="center">AI Chat Assistant</Heading>
        
        <Box flex={1} minH="60vh" bg="gray.50" p={4} borderRadius="md" overflowY="auto">
          {chatHistory.map((msg, index) => (
            <Box 
              key={index}
              bg={msg.role === 'user' ? 'blue.50' : 'green.50'}
              p={3}
              mb={2}
              borderRadius="md"
            >
              <Text><strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}</Text>
            </Box>
          ))}
        </Box>

        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              size="lg"
            />
            <Button
              colorScheme="blue"
              isLoading={isLoading}
              loadingText="Sending..."
              type="submit"
              width="full"
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
} 