import { Container, Heading, Box, Image, useColorModeValue, Button, Code, Link, ListItem, List, Divider, SimpleGrid, GridItem } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io5'
import { GiSittingDog } from 'react-icons/gi'
import { FiGithub } from 'react-icons/fi'
import { FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { AiOutlineYoutube } from 'react-icons/ai'
import { MdLocationOn, MdOutlineLocationOn } from 'react-icons/md'
import { WorkGridItem } from '../components/grid-item'
// import thumbSabatier from '../public/images/projects/sabatier.png'
import thumbElec from '../public/images/projects/elec_team.png'
import thumbWater from '../public/images/projects/water.png'
import thumbHeat from '../public/images/projects/heat.png' 
import thumbElec2 from '../public/images/projects/elec_team2.jpg'
import solidigm1 from '../public/images/projects/solidigm1.jpg'
import solidigm2 from '../public/images/projects/solidigm2.jpg'
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
                    <p>jobless @ school</p>
                    {/* <MdOutlineLocationOn /> */}
                    <Code colorScheme={useColorModeValue('red', 'purple')}>Vancouver, BC</Code>
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
                        src={useColorModeValue('/images/pfp2.jpg', '/images/pfp6.png')}
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
                <code>{useColorModeValue('ouch turn the lights off', 'zzz')}</code>
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
                    Hello there! I'm Justin, and I'm interested in all things firmware and embedded systems related. 
                    I previously worked an 8 month co-op term with Solidigm as a Firmware Engineer working in the development of 
                    Solid State Drives (SSDs) in the NAND Product Solutions Group.  
            </Paragraph>
            <Section></Section>
            <Paragraph>
                    Some of my hobbies include badminton, table tennis, skiing, mechanical keyboards, and complaining about the garbage weather in Vancouver.
            </Paragraph>
            </Section>


            <Section delay={0.1}>
                <List>
                <ListItem>
                    <Link href="https://github.com/ngjstn" target="_blank">
                            <Button
                                variant="ghost"
                                leftIcon={<FiGithub />}
                                colorScheme={useColorModeValue('yellow', 'blue')}
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
                                colorScheme={useColorModeValue('yellow', 'blue')}
                            >    
                            LinkedIn
                            </Button>
                    </Link>
                </ListItem>
                {/* <ListItem>
                    <Link href="https://www.instagram.com/jstn_ng/?hl=en" target="_blank">
                            <Button
                                variant="ghost"
                                leftIcon={<IoLogoInstagram />}
                                colorScheme={useColorModeValue('yellow', 'blue')}
                            >    
                            @jstn_ng
                            </Button>
                    </Link>
                </ListItem> */}
            </List>
            </Section>

            <Divider />

            <Section delay={0.3}>
            <Heading
                as="h3"
                variant="section-title"
            >
            <p><code><u>firmware engineer @ solidigm</u></code></p>
            <Code colorScheme={useColorModeValue('red', 'purple')}>Jan - Aug 2023</Code>
            </Heading>
            <Paragraph>
                My most recent co-op term was at Solidigm, where I worked on firmware development on the Direct Memory Access (DMA) team, Flash Translation Layer domain. 
            </Paragraph>
            </Section>

            <Section></Section>
            
            <Section delay={0.3}>
                <Paragraph>
                DMA functionality is essentially the transfer of data to/from the SSD controller. The host machine sends NVMe commands to the SSD, which contain operations
                to execute on host memory addresses. My focus here is on the memory addresses (stored as SGL and PRP structures), which is what we need to read/write to/from. 
                The process of fetching the data from the host memory addresses into controller memory, and preparing the data payloads to be sent to the NAND flash is the basis
                for the work that I did here.
                </Paragraph>
            </Section>
            <Divider />

            <Section delay={0.3}>
            <SimpleGrid columns={1} gap={6}>
            
            <WorkGridItem
            id=""
            title=""
            thumbnail={solidigm2}
            >
              <code>co-op LDO</code>
            </WorkGridItem>
{/*        
            <WorkGridItem
            id=""
            title=""
            thumbnail={solidigm1}
            >
              <code>heat element testing</code>
            </WorkGridItem> */}
            </SimpleGrid>
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
                I'm a computer engineering (BASc.) student at the University of British Columbia. 
                My courses have mainly revolved around computer architecture, digital logic design, operating systems, and embedded systems.
            </Paragraph>
            </Section>

            <Section></Section>
            
            <Section delay={0.3}>
                <Paragraph>
                    I was previously part of an engineering design team called Mars Colony, where I was the team lead for electrical and firmware development. I worked on the Sabatier Reactor project, which is a system that converts carbon dioxide and hydrogen into water and methane.
                    I'm worked on the RTOS firmware for the electrical control system used in the reactor, as well as some basic PCB design.
                </Paragraph>
            </Section>

            <Section delay={0.3}>
            <SimpleGrid columns={2} gap={6}>
            
            <WorkGridItem
            id=""
            title=""
            thumbnail={thumbElec}
            >
              <code>firmware/electrical team</code>
            </WorkGridItem>
       
            <WorkGridItem
            id=""
            title=""
            thumbnail={thumbHeat}
            >
              <code>heat element testing</code>
            </WorkGridItem>

            <WorkGridItem
            id=""
            title=""
            thumbnail={thumbElec2}
            >
              <code>more reactor design</code>
            </WorkGridItem>

            <WorkGridItem
            id=""
            title=""
            thumbnail={thumbWater}
            >
              <code>wow we made some water!</code>
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
                                colorScheme={useColorModeValue('yellow', 'blue')}
                            >    
                            Team Website
                            </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.linkedin.com/company/ubc-mars-colony/" target="_blank">
                            <Button
                                variant="ghost"
                                leftIcon={<FaLinkedin />}
                                colorScheme={useColorModeValue('yellow', 'blue')}
                            >    
                            LinkedIn
                            </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.instagram.com/ubcmarscolony/?hl=en" target="_blank">
                            <Button
                                variant="ghost"
                                leftIcon={<IoLogoInstagram />}
                                colorScheme={useColorModeValue('yellow', 'blue')}
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
                I'm not a pro at react, and I'm also not a web developer. 
                The majority of this site's frontend references work that's not my own. Go check out the work from Takuya Matsuyama. 
                He also has a cool spinning dog and makes great videos.
            </Paragraph>
            </Section>


            <List>
                <ListItem>
                    <Link href="https://github.com/craftzdog/craftzdog-homepage" target="_blank">
                            <Button
                                variant="ghost"
                                leftIcon={<FiGithub />}
                                colorScheme={useColorModeValue('yellow', 'blue')}
                            >    
                            craftzdog
                            </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.youtube.com/c/devaslife" target="_blank">
                            <Button
                                variant="ghost"
                                leftIcon={<AiOutlineYoutube />}
                                colorScheme={useColorModeValue('yellow', 'blue')}
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