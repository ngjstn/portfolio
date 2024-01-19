import {
  Box,
  Heading,
  Container,
  Divider} from '@chakra-ui/react'
import { Code } from '@chakra-ui/react'
import Section from '../components/section'


const Works = () => {
  return (
    <Container>
    <Heading as="h3" fontSize={20} mb={4}>
      <code>&gt; projects</code>
    </Heading>

    <Section>
    <Heading as="h1"><code>oops </code><Code colorScheme='red'>page in maintenance</Code></Heading>
      
      <Divider my={6} />
      <Box my={6} align="left">
      <code>nothing to see here ;)</code>
      </Box>
    </Section>
  </Container>
  )
}

export default Works 