import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Stack,
  Text,
  Flex,
  Button,
  useColorModeValue
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { FilterOptions } from '@/hooks/useProfessionalSearch';
import { professionalFilters } from '@/data/professionals';

interface ProfessionalSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onSortChange: (sortBy: 'rating' | 'experience' | 'price') => void;
}

export const ProfessionalSearch = ({
  searchQuery,
  onSearchChange,
  filters,
  onFilterChange,
  onSortChange
}: ProfessionalSearchProps) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <Box
      p={6}
      bg={bgColor}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={borderColor}
    >
      <Stack spacing={4}>
        {/* Search Input */}
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Search professionals by name, title, or specialization..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </InputGroup>

        <Flex gap={4} flexWrap="wrap">
          {/* Category Filter */}
          <Select
            placeholder="Select Category"
            value={filters.category || ''}
            onChange={(e) => handleFilterChange('category', e.target.value)}
          >
            {professionalFilters.map((filter) => (
              <option key={filter.name} value={filter.name}>
                {filter.name}
              </option>
            ))}
          </Select>

          {/* Experience Level Filter */}
          <Select
            placeholder="Experience Level"
            value={filters.experienceLevel || ''}
            onChange={(e) => handleFilterChange('experienceLevel', e.target.value)}
          >
            {professionalFilters
              .find((f) => f.name === 'By Experience Level')
              ?.types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
          </Select>

          {/* Verification Status Filter */}
          <Select
            placeholder="Verification Status"
            value={filters.verificationStatus || ''}
            onChange={(e) => handleFilterChange('verificationStatus', e.target.value)}
          >
            {professionalFilters
              .find((f) => f.name === 'By Verification Status')
              ?.types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
          </Select>

          {/* Service Mode Filter */}
          <Select
            placeholder="Service Mode"
            value={filters.serviceMode || ''}
            onChange={(e) => handleFilterChange('serviceMode', e.target.value)}
          >
            {professionalFilters
              .find((f) => f.name === 'By Service Mode')
              ?.types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
          </Select>
        </Flex>

        {/* Price Range Filter */}
        <Box>
          <Text mb={2}>Price Range (₹)</Text>
          <RangeSlider
            defaultValue={[0, 10000]}
            min={0}
            max={10000}
            step={500}
            onChange={(values) =>
              handleFilterChange('priceRange', {
                min: values[0],
                max: values[1]
              })
            }
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </Box>

        {/* Sort Options */}
        <Flex gap={2}>
          <Button size="sm" onClick={() => onSortChange('rating')}>
            Sort by Rating
          </Button>
          <Button size="sm" onClick={() => onSortChange('experience')}>
            Sort by Experience
          </Button>
          <Button size="sm" onClick={() => onSortChange('price')}>
            Sort by Price
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
}; 