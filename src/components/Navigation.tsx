'use client';

import { Box, Flex, Button, Heading, Stack, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa'

export default function Navigation() {
  return (
    <Box bg="white" _dark={{ bg: 'gray.800' }} px={4} shadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link href="/" passHref legacyBehavior>
          <Heading as="a" size="lg" cursor="pointer">
            Bharat Diary
          </Heading>
        </Link>

        <Stack direction="row" spacing={4}>
          {/* AI Services Menu */}
          <Menu>
            <MenuButton as={Button} variant="ghost">
              AI Services <FaChevronDown style={{ display: 'inline', marginLeft: '8px' }} />
            </MenuButton>
            <MenuList>
              <Link href="/chat" passHref legacyBehavior>
                <MenuItem as="a">AI Information Hub</MenuItem>
              </Link>
              <Link href="/solutions" passHref legacyBehavior>
                <MenuItem as="a">AI Solutions</MenuItem>
              </Link>
              <Link href="/tools" passHref legacyBehavior>
                <MenuItem as="a">AI Tools</MenuItem>
              </Link>
            </MenuList>
          </Menu>

          {/* Directory Services Menu */}
          <Menu>
            <MenuButton as={Button} variant="ghost">
              Directory Services <FaChevronDown style={{ display: 'inline', marginLeft: '8px' }} />
            </MenuButton>
            <MenuList>
              <Link href="/professionals" passHref legacyBehavior>
                <MenuItem as="a">Find Professionals</MenuItem>
              </Link>
              <Link href="/services" passHref legacyBehavior>
                <MenuItem as="a">Find Services</MenuItem>
              </Link>
            </MenuList>
          </Menu>

          <Link href="/solutions" passHref legacyBehavior>
            <Button as="a" variant="ghost">Solutions</Button>
          </Link>
          
          <Link href="/northeast" passHref legacyBehavior>
            <Button as="a" variant="ghost">Northeast Focus</Button>
          </Link>
        </Stack>
      </Flex>
    </Box>
  )
} 