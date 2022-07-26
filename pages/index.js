import { Container, Heading, Box, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'

const Page = () => {
    return (
        <Container>
            <Box 
            borderRadius="lg" 
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
            p={3} align="center" 
            mb={6}>
                {useColorModeValue('ouch turn the lights off >:(', 'idk what im doing im not a frontend dev')}
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Justin Ng 
                    </Heading>
                    <p>UBC Computer Engineering Student</p>
                </Box>
                <Box>
                    <Box 
                    flexShrink={0} 
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                    >
                        <Image 
                        borderColor="whiteAlpha.800" 
                        borderWidth={2} 
                        borderStyle="solid" 
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full" 
                        src="/images/pfp.jpg"
                        alt="Profile Picture"
                        />
                    </Box>
                </Box>
            </Box>

            <Section delay={0.1}> 
            <Heading 
            as="h3" 
            variant="section-title"
            >
            <p><u>About Me</u></p>
            </Heading>
            <p>Paragraph</p>
            </Section>
        </Container>
    )
}
  
export default Page 