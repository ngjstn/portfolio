import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  useColorModeValue,
  useColorMode
} from '@chakra-ui/react'
import { Code } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1"><code>oops </code><Code colorScheme='red'>&gt; 404 not found</Code></Heading>
      
      <Divider my={6} />
      <Box my={6} align="left">
      <code>stop looking im shy</code>
      </Box>
      {/* <Box my={6} align="center">
        <Divider my={6} />
        <NextLink href="/" passHref>
          <Button 
          colorScheme={useColorModeValue('purple', 'blue')}
          variant="ghost"
          >
            take me home
          </Button>
        </NextLink>
      </Box> */}
    </Container>
  )
}

export default NotFound