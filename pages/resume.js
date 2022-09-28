import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  useColorModeValue,
  useColorMode,
  SimpleGrid
} from '@chakra-ui/react'
import { Code } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'


const Works = () => {
  return (
    <Container>
    <Heading as="h3" fontSize={20} mb={4}>
      <code>projects</code>
    </Heading>

    <Section>
    <Heading as="h1"><code>oops </code><Code colorScheme='red'>&gt; page in maintenance</Code></Heading>
      
      <Divider my={6} />
      <Box my={6} align="left">
      <code>nothing to see here ;)</code>
      </Box>
    </Section>
  </Container>
  )
}

export default Works 