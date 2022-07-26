import { Container, Heading, Box, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { Code } from '@chakra-ui/react'
import Layout from '../components/layouts/article'


const Page = () => {
    return (
        <Layout>
        <Container>
            <Box 
            borderRadius="lg" 
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
            p={3} align="center" 
            mb={6}>
                <code>{useColorModeValue('ouch turn the lights off >:(', 'idk what im doing im not a frontend dev lol')}</code>
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        <code>justin ng</code>
                    </Heading>
                    <p>Firmware Validation Co-op @ Motorola Solutions</p>
                    <Code colorScheme={useColorModeValue('purple', 'blue')}>Vancouver, BC</Code>
                    
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
                        src={useColorModeValue('/images/pfp.jpg', '/images/pfp3.png')}
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
            <p><code><u>About Me</u></code></p>
            </Heading>
            <Paragraph>Hello there! I'm a 3rd year Computer Engineering Student at UBC, interested in all things firmware, software, or web related. 
                    I'm currently working an 8 month co-op term with Motorola Solutions, Avigilon, handling the automation and development of our test
                    frameworks to validate the firmware in our security IP camera products and manufacturing processes. After this current work term, 
                    I'll be looking for another co-op opportunity to try out something new in January.{' '}
            </Paragraph>
            </Section>

            {/* <Section delay={0.2}>
                <Heading 
                as="h3"
                variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2002</BioYear>
                </BioSection>
            </Section> */}
        </Container>
     </Layout>
    )
}
  
export default Page 