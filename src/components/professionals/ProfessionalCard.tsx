import { Box, Badge, Image, Text, Flex, Icon, Button, useColorModeValue } from '@chakra-ui/react';
import { FaStar, FaMapMarkerAlt, FaCheck, FaClock } from 'react-icons/fa';
import { ProfessionalProfile } from '@/types/professional';
import Link from 'next/link';
import { getImagePath } from '@/utils/imagePath';

interface ProfessionalCardProps {
  professional: ProfessionalProfile;
}

export const ProfessionalCard = ({ professional }: ProfessionalCardProps) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={cardBg}
      borderColor={borderColor}
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
    >
      <Box position="relative">
        <Image
          src={getImagePath(professional.avatar || '/images/placeholder-profile.jpg')}
          alt={professional.name}
          height="200px"
          width="100%"
          objectFit="cover"
        />
        <Badge
          position="absolute"
          top={2}
          right={2}
          colorScheme={
            professional.verification.status === 'Verified' ? 'green' :
            professional.verification.status === 'Top Rated' ? 'blue' :
            professional.verification.status === 'Premium' ? 'purple' : 'gray'
          }
        >
          {professional.verification.status}
        </Badge>
      </Box>

      <Box p={6}>
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {professional.category}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml={2}
          >
            {professional.experience.years}+ years
          </Box>
        </Box>

        <Box
          mt="2"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {professional.name}
        </Box>

        <Text fontSize="sm" color="gray.500">
          {professional.title}
        </Text>

        <Flex mt={2} align="center">
          <Icon as={FaStar} color="yellow.400" />
          <Text ml={1} fontSize="sm">
            {professional.rating.average.toFixed(1)} ({professional.rating.total} reviews)
          </Text>
        </Flex>

        <Flex mt={2} align="center">
          <Icon as={FaMapMarkerAlt} color="gray.500" />
          <Text ml={1} fontSize="sm">
            {professional.location.city}, {professional.location.state}
          </Text>
        </Flex>

        <Flex mt={2} align="center">
          <Icon as={FaClock} color="gray.500" />
          <Text ml={1} fontSize="sm">
            {professional.availability.status}
          </Text>
        </Flex>

        <Box mt={4}>
          {professional.specializations.slice(0, 3).map((spec, index) => (
            <Badge
              key={index}
              mr={2}
              mb={2}
              variant="subtle"
              colorScheme="blue"
            >
              {spec}
            </Badge>
          ))}
        </Box>

        <Flex mt={4} justify="space-between" align="center">
          <Text fontWeight="bold" fontSize="lg">
            ₹{professional.pricing.rate}/{professional.pricing.unit}
          </Text>
          <Link href={`/professionals/${professional.slug}`} passHref>
            <Button as="a" colorScheme="teal" size="sm">
              View Profile
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}; 