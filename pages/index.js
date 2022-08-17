import { Container, Heading, Box, Image, useColorModeValue, Button, Code, Link, ListItem, List, Divider, SimpleGrid, GridItem } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io5'
import { GiSittingDog } from 'react-icons/gi'
import { FiGithub } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import thumbElec from '../public/images/projects/elec_team.png'
import { AiOutlineYoutube } from 'react-icons/ai'
import { MdLocationOn, MdOutlineLocationOn } from 'react-icons/md'
import { WorkGridItem } from '../components/grid-item'
// import thumbSabatier from '../public/images/projects/sabatier.png'
import thumbWater from '../public/images/projects/water.png'
import thumbHeat from '../public/images/projects/heat.png' 
import thumbElec2 from '../public/images/projects/elec_team2.jpg'
import { GiPlanetConquest } from 'react-icons/gi'
import { TbAlien } from 'react-icons/tb'
// import VoxelDog from '../components/voxel-dog'
import dynamic from 'next/dynamic'
// import VoxelDogLoader from '../components/voxel-dog-loader'
// import { IoLocationOutline } from 'react-icons/io'
// import Fonts from '../components/fonts'
// import VoxelDog from '../components/voxel-dog'

// const LazyVoxelDog = dynamic(() => import('../components/voxel-dog'), {
//     ssr: false,
//     loading: () => <VoxelDogLoader />
//   })


const Page = () => {
    return (
        <Layout>
        <Container>
            {/* <Fonts /> */}
            <Section></Section>
            {/* <LazyVoxelDog /> */}
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        <code>justin ng</code>
                    </Heading>
                    <p>Firmware Validation Co-op @ Motorola Solutions</p>
                    {/* <MdOutlineLocationOn /> */}
                    <Code colorScheme={useColorModeValue('pink', 'blue')}>Vancouver, BC</Code>
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

            <Box 
            borderRadius="lg" 
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
            p={0.5} align="center" 
            mb={6}>
                <code>{useColorModeValue('ouch turn the lights off >:(', 'idk what im doing lol')}</code>
            </Box>
            <Section></Section>

            <Section delay={0.1}> 
            <Heading 
            as="h3" 
            variant="section-title"
            >
            <p><code><u>about me</u></code></p>
            </Heading>
            {/* <VoxelDog /> */}
            <Paragraph>
                    Hello there! I'm Justin, and I'm interested in all things firmware and embedded related (software/web stuff is kinda cool too). 
                    I'm currently working an 8 month co-op term with Motorola Solutions, Avigilon, handling the automation and development of our test
                    frameworks and procedures. I validate the SoC firmware, web user interfaces, manufacturing processes, and our VMS client/server applications for our security IP camera products. 
                    After this current work term, I'll be looking for another co-op opportunity to try out something new in January 2023.
            </Paragraph>
            </Section>

         

            <Section delay={0.1}>
                <List>
                <ListItem>
                    <Link href="https://github.com/ngjstn" target="_blank">
                            <Button
                                variant="ghost"
                                leftIcon={<FiGithub />}
                                colorScheme={useColorModeValue('purple', 'pink')}
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
                                colorScheme={useColorModeValue('purple', 'pink')}
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
                                colorScheme={useColorModeValue('purple', 'pink')}
                            >    
                            @jstn_ng
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
            <p><code><u>education</u></code></p>
            </Heading>
            <Paragraph>
                I'm a third year standing computer engineering (BASc.) student at the University of British Columbia. 
                My courses have mainly revolved around low level computer architecture, digital logic system design, software construction, and data structures & algorithms.
            </Paragraph>
            </Section>

            <Section></Section>
            
            <Section delay={0.3}>
                <Paragraph>
                    Oh, I'm also part of an engineering design team called Mars Colony. Our current project is to prototype and design a functioning Sabatier Reactor
                    to refuel starships using only resources found on Mars. I'm working on the RTOS firmware for the electrical control system for the reactor, as well as some basic PCB design.
                </Paragraph>
            </Section>

            <Section delay={0.3}>
            <SimpleGrid columns={2} gap={6}>
            
            <WorkGridItem
            id="team1"
            title=""
            thumbnail={thumbElec}
            >
              {/* <Code colorScheme={useColorModeValue('pink', 'yellow')}>firmware/electrical team</Code> */}
              <code>firmware/electrical team</code>
            </WorkGridItem>
       
            <WorkGridItem
            id="heat-element"
            title=""
            thumbnail={thumbHeat}
            >
              {/* <Code colorScheme={useColorModeValue('pink', 'yellow')}>heat tape element</Code> */}
              <code>heat tape element</code>
            </WorkGridItem>

            <WorkGridItem
            id="team2"
            title=""
            thumbnail={thumbElec2}
            >
              <code>more reactor testing</code>
            </WorkGridItem>

            <WorkGridItem
            id="water-evidence"
            title=""
            thumbnail={thumbWater}
            >
              <code>wow we made some water</code>
            </WorkGridItem>

            </SimpleGrid>
            </Section>
            <Section></Section>

            <List>
                <ListItem>
                    <Link href="https://www.ubcmarscolony.com/" target="_blank">
                            <Button
                                variant="ghost"
                                leftIcon={<TbAlien />}
                                colorScheme={useColorModeValue('purple', 'pink')}
                            >    
                            Team Website
                            </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.instagram.com/ubcmarscolony/?hl=en" target="_blank">
                            <Button
                                variant="ghost"
                                leftIcon={<IoLogoInstagram />}
                                colorScheme={useColorModeValue('purple', 'pink')}
                            >    
                            @ubcmarscolony
                            </Button>
                    </Link>
                </ListItem>
            </List>

            <Section></Section>
            
            {/* <Section delay={0.5}>
                <Heading
                as="h3"
                variant="section-title"
                >
                <p><code>Interests</code></p>
                </Heading>
            </Section> */}

            <Divider />

            <Section delay={0.5}>
                <Heading
                as="h3"
                variant="section-title"
            >
            <p><code><u>site reference</u></code></p>
            </Heading>
            <Paragraph>
                I'm not a pro at ReactJS, and I'm also not a web developer. 
                The majority of this site's frontend is <i>NOT</i> my original work. Go check out the work from Takuya Matsuyama. 
                He also has a cool spinning dog and makes great videos.
            </Paragraph>
            </Section>

            <Section delay={0.5}>
                <Code>&gt; the backend is all me tho ;)</Code>
            </Section>

            <List>
                <ListItem>
                    <Link href="https://github.com/craftzdog/craftzdog-homepage" target="_blank">
                            <Button
                                variant="ghost"
                                leftIcon={<FiGithub />}
                                colorScheme={useColorModeValue('purple', 'pink')}
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
                                colorScheme={useColorModeValue('purple', 'pink')}
                            >    
                            Takuya Matsuyama
                            </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.youtube.com/c/devaslife" target="_blank">
                            <Button
                                variant="ghost"
                                leftIcon={<AiOutlineYoutube />}
                                colorScheme={useColorModeValue('purple', 'pink')}
                            >    
                            devaslife
                            </Button>
                    </Link>
                </ListItem>
            </List>
    
        
        </Container>
        
     </Layout>
    )
}
  
export default Page 