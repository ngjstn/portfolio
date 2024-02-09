import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, Divider, useColorModeValue } from '@chakra-ui/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], styles: ['light'], weight: ['300'] })

export const Title = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/projects">
    <code colorScheme={useColorModeValue('red', 'purple')}>projects </code>
    </Link>

    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      <code>&gt; {children}</code>
    </Heading>

  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
