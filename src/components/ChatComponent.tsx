'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Box, 
  Input, 
  IconButton,
  VStack, 
  HStack, 
  Text, 
  Spinner,
  Flex,
  Badge,
  Icon,
  useToast,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';
import { FaRobot, FaMicrophone, FaPaperPlane, FaUser } from 'react-icons/fa';

// Define message type
interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatComponent() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const toast = useToast();
  
  // Colors
  const gradientBg = useColorModeValue(
    'linear-gradient(135deg, #3182ce 0%, #6b46c1 100%)',
    'linear-gradient(135deg, #1a365d 0%, #322659 100%)'
  );

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);
    
    try {
      // In production/static build, use mock response instead of fetch
      if (process.env.NODE_ENV === 'production' || process.env.STATIC_BUILD === 'true') {
        // Wait to simulate network request
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Use predefined responses or a generic one
        const demoResponses: Record<string, string> = {
          'hello': 'Hello! Welcome to Bharat Diary. How can I assist you with information about India today?',
          'who are you': 'I am the Bharat Diary AI assistant, designed to provide information about India\'s culture, history, regions, and current affairs.',
          'what can you do': 'I can help you find information about India\'s history, culture, travel destinations, festivals, cuisine, and more.',
          'help': 'I can provide information about various aspects of India - from history and culture to current events and regional information. What would you like to know?'
        };
        
        // Check if message contains any of the keys in demoResponses
        const matchingKey = Object.keys(demoResponses).find(key => 
          currentInput.toLowerCase().includes(key.toLowerCase())
        );
        
        const response = matchingKey 
          ? demoResponses[matchingKey]
          : `Thank you for your question about "${currentInput}". In this static demo version, I provide limited responses. The full version would connect to a comprehensive AI system.`;
          
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: response
        }]);
      } else {
        // Regular fetch for development environment
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: currentInput })
        });
        
        const data = await response.json();
        
        if (response.ok) {
          setMessages(prev => [...prev, { 
            role: 'assistant', 
            content: data.reply 
          }]);
        } else {
          toast({
            title: 'Error',
            description: data.error || 'Failed to get response',
            status: 'error',
            duration: 3000,
            isClosable: true
          });
          
          setMessages(prev => [...prev, { 
            role: 'assistant', 
            content: 'Sorry, I encountered an error. Please try again.' 
          }]);
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Connection Error',
        description: 'Failed to connect to the AI service',
        status: 'error',
        duration: 3000,
        isClosable: true
      });
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, there was a problem connecting to the AI service. Please try again later.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box 
      bg={gradientBg}
      p={4} 
      borderRadius="lg"
      boxShadow="md"
    >
      <VStack spacing={4} align="stretch">
        <HStack spacing={3}>
          <Icon as={FaRobot} w={6} h={6} color="white" />
          <Heading size="md" color="white">Bharat Diary AI Assistant</Heading>
        </HStack>
        
        <Box 
          bg="rgba(255,255,255,0.1)" 
          p={4} 
          borderRadius="md" 
          height="250px" 
          overflowY="auto"
          css={{
            '&::-webkit-scrollbar': { width: '4px' },
            '&::-webkit-scrollbar-track': { background: 'transparent' },
            '&::-webkit-scrollbar-thumb': { background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }
          }}
        >
          {messages.length === 0 ? (
            <Text color="whiteAlpha.800" textAlign="center" py={10}>
              Ask me anything about India, Asia and the world. I have also have a vast repository of solutions to the umpteen problems you face. And the world is full of opportunies. Let's look at the future with optimism and face every challenge head on!
            </Text>
          ) : (
            messages.map((msg, index) => (
              <Flex 
                key={index} 
                mb={4}
                justifyContent={msg.role === 'user' ? 'flex-end' : 'flex-start'}
              >
                <Box
                  bg={msg.role === 'user' ? 'blue.700' : 'whiteAlpha.300'}
                  color="white"
                  p={3} 
                  borderRadius="lg" 
                  maxW="80%"
                  boxShadow="sm"
                >
                  <HStack spacing={2} mb={1}>
                    <Icon 
                      as={msg.role === 'user' ? FaUser : FaRobot} 
                      w={3} 
                      h={3} 
                    />
                    <Badge colorScheme={msg.role === 'user' ? 'blue' : 'purple'} fontSize="xs">
                      {msg.role === 'user' ? 'You' : 'AI Assistant'}
                    </Badge>
                  </HStack>
                  <Text>{msg.content}</Text>
                </Box>
              </Flex>
            ))
          )}
          {isLoading && (
            <Flex justify="flex-start" mb={4}>
              <Box bg="whiteAlpha.300" p={3} borderRadius="lg">
                <Spinner size="sm" color="white" mr={2} />
                <Text as="span" color="white">Thinking...</Text>
              </Box>
            </Flex>
          )}
          <div ref={messagesEndRef} />
        </Box>
        
        <HStack>
          <Input 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about India..."
            bg="white"
            color="gray.800"
            _placeholder={{ color: 'gray.500' }}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            disabled={isLoading}
          />
          <IconButton
            aria-label="Voice input"
            icon={<FaMicrophone />}
            colorScheme="whiteAlpha"
            disabled={isLoading}
          />
          <IconButton
            aria-label="Send message"
            icon={<FaPaperPlane />}
            colorScheme="whiteAlpha"
            variant="solid"
            onClick={sendMessage}
            isLoading={isLoading}
            disabled={!input.trim()}
          />
        </HStack>
      </VStack>
    </Box>
  );
} 