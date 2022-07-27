import { Container, Heading, Box, Image, useColorModeValue, Button, Code, Link, ListItem, List, Divider, SimpleGrid, GridItem } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io5'
import { GiSittingDog } from 'react-icons/gi'
import { FiGithub } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import thumbMarsColony from '../public/images/projects/mars_colony.png'

// import VoxelDog from '../components/voxel-dog'

const Page = () => {
    return (
        <Layout>
        <Container>
            <Box 
            borderRadius="lg" 
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
            p={3} align="center" 
            mb={6}>
                <code>{useColorModeValue('ouch turn the lights off >:(', 'idk what im doing lol')}</code>
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
            <Section></Section>
            <Divider />

            <Section delay={0.1}> 
            <Heading 
            as="h3" 
            variant="section-title"
            >
            <p><code><u>About Me</u></code></p>
            </Heading>
            <Paragraph>
                    Hello there! I'm Justin, and I'm interested in all things firmware/embedded related (software/web stuff is kinda cool too). 
                    I'm currently working an 8 month co-op term (May - Dec 2022) with Motorola Solutions, Avigilon, handling the automation and development of our test
                    frameworks to validate the firmware in our security IP camera products and manufacturing processes. After this current work term, 
                    I'll be looking for another co-op opportunity to try out something new in January.{' '}
            </Paragraph>
            </Section>

            <Section delay={0.1}>
                <List>
                <ListItem>
                    <Link href="https://github.com/ngjstn" target="_blank">
                            <Button
                                variant="ghost"
                                leftIcon={<FiGithub />}
                                colorScheme={useColorModeValue('purple', 'blue')}
                            >    
                            Github
                            </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.linkedin.com/in/ngjstn/" target="_blank">
                            <Button
                                variant="ghost"
                                leftIcon={<FaLinkedinIn />}
                                colorScheme={useColorModeValue('purple', 'blue')}
                            >    
                            LinkedIn
                            </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.instagram.com/jstn_ng/?hl=en" target="_blank">
                            <Button
                                variant="ghost"
                                leftIcon={<IoLogoInstagram />}
                                colorScheme={useColorModeValue('purple', 'blue')}
                            >    
                            Instagram 
                            </Button>
                    </Link>
                </ListItem>
            </List>
            </Section>

            <Divider />

            <Section delay={0.3}>
            <Heading
                as="h3"
                variant="section-title"
            >
            <p><code><u>Education</u></code></p>
            </Heading>
            <Paragraph>
                I'm a third year standing computer engineering (BASc.) student at the University of British Columbia. 
                My courses have mainly revovled around low level computer architecture, digital logic design, software construction, and data structures & algorithms.
            </Paragraph>
            <Paragraph>
                
            </Paragraph>
            </Section>

            <Section delay={0.3}>
            <SimpleGrid columns={[1, 2, 2]} gap={6}>
                <GridItem
                    href="https://www.youtube.com/devaslife"
                    title="Dev as Life"
                    thumbnail={thumbMarsColony}
                >
                    Firmware/Electrical Sub-team
                </GridItem>
                {/* <GridItem
                    href="https://www.inkdrop.app/"
                    title="Inkdrop"
                    thumbnail={thumbInkdrop}
                >
                    A Markdown note-taking app
                </GridItem> */}
        </SimpleGrid>

            </Section>

            <Divider />

            <Section delay={0.5}>
                <Heading
                as="h3"
                variant="section-title"
            >
            <p><code><u>Reference</u></code></p>
            </Heading>
            <Paragraph>
                I know a little bit about how ReactJS works, but ultimately, I'm not a frontend developer. 
                The majority of this site is <i>not</i> my original work. Go check out the source code from Takuya Matsuyama. He also has a cool spinning dog.
            </Paragraph>
            </Section>

            <List>
                <ListItem>
                    <Link href="https://github.com/craftzdog/craftzdog-homepage" target="_blank">
                            <Button
                                variant="ghost"
                                leftIcon={<FiGithub />}
                                colorScheme={useColorModeValue('purple', 'blue')}
                            >    
                            craftzdog
                            </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.craftz.dog/" target="_blank">
                            <Button
                                variant="ghost"
                                leftIcon={<GiSittingDog />}
                                colorScheme={useColorModeValue('purple', 'blue')}
                            >    
                            Takuya Matsuyama
                            </Button>
                    </Link>
                </ListItem>
            </List>
    
        </Container>
        
        {/* <VoxelDog /> */}
     </Layout>
    )
}
  
export default Page 