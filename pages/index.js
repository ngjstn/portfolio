import { Container, Heading, Box, Image, useColorModeValue, Button, Code, Link, ListItem, List, Divider, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { IoLogoInstagram } from 'react-icons/io5'
import { FiGithub } from 'react-icons/fi'
import { FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import { WorkGridItem } from '../components/grid-item'
import thumbElec from '../public/images/projects/elec_team.png'
import thumbWater from '../public/images/projects/water.png'
import thumbHeat from '../public/images/projects/heat.png' 
import thumbElec2 from '../public/images/projects/elec_team2.jpg'
import solidigm2 from '../public/images/projects/solidigm2.jpg'
import { TbAlien } from 'react-icons/tb'
import { RiFileList2Fill } from "react-icons/ri";
import NextLink from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], styles: ['light'], weight: ['300'] })
const inter_heavy = Inter({ subsets: ['latin'], styles: ['light'], weight: ['500'] })

const Page = () => {
    return (
        <Layout>
        <Container>
            <Section></Section>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        <code>justin ng</code>
                    </Heading>
                    <p className={inter.className}>/ jobless @ school /</p>
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
                        borderColor={useColorModeValue("#F3F3F3", "whiteAlpha.800")}
                        borderWidth={2} 
                        // borderStyle="solid" 
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full" 
                        src={useColorModeValue('/images/pfp6.png', '/images/pfp7.jpg')}
                        alt="Profile Picture"
                        />
                    </Box>
                </Box>
            </Box>

            <Section></Section>

            <Box 
            borderRadius="lg" 
            bg={useColorModeValue('#F3F3F3', 'whiteAlpha.200')} 
            p={0.5} align="center" 
            mb={6}>
                <code>{useColorModeValue('ouch turn the lights off', 'zzz')}</code>
            </Box>
            <Section></Section>
            <Divider />
            <Section delay={0.1}> 
            <Heading 
            as="h3" 
            variant="section-title"
            >
            <p><code>about me</code></p>
            </Heading>
            <Paragraph className={inter.className}>
                    Hello there! I'm Justin, and I'm interested in all things firmware and embedded systems related. 
                    I previously worked an 8 month co-op term with Solidigm as a Firmware Engineer working in the development of 
                    enterprise solid-state drives.  
            </Paragraph>
            <Section></Section>
            <Paragraph className={inter.className}>
                    Some of my hobbies include bouldering (climbing), badminton, skiing, coffee, mechanical keyboards, and complaining about the garbage weather in Vancouver.
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
                            <p className={inter_heavy.className}>Github</p>
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
                            <p className={inter_heavy.className}>LinkedIn</p>
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
            <p><code>firmware @ solidigm</code></p>
            <Code colorScheme={useColorModeValue('red', 'purple')}>Jan - Aug 2023</Code>
            </Heading>
            <Paragraph className={inter.className}>
                My most recent co-op term was at Solidigm, where I worked on firmware development on the Direct Memory Access (DMA) team, Flash Translation Layer domain. 
                Solidigm used to be a division of Intel until it was acquired by SK hynix in 2020.
            </Paragraph>
            </Section>

            <Section></Section>
            
            <Section delay={0.3}>
                <Paragraph className={inter.className}>
                DMA functionality is essentially the transfer of data to/from the SSD controller. The host machine sends NVMe commands to the SSD, which contain operations
                to execute and where to execute them (host memory addresses). My focus here is on the memory addresses that are stored in the command (SGL and PRP structures). 
                The process of fetching the addresses and the relevant data from the host into controller memory, and preparing the data payloads to be sent to the NAND flash is the basis
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
              <code></code>
            </WorkGridItem>
            </SimpleGrid>
            </Section>
            <Divider />

            <Section delay={0.3}>
            <Heading
                as="h3"
                variant="section-title"
            >
            <p><code>education @ ubc</code></p>
            <Code colorScheme={useColorModeValue('red', 'purple')}>2020 - Expected 2025 Graduation</Code>
            </Heading>
            <Paragraph className={inter.className}>
                I'm studying computer engineering in the faculty of applied science (BASc.) at the University of British Columbia. 
                My courses have mainly revolved around computer architecture, digital logic design, operating systems, and embedded systems.
            </Paragraph>

            </Section>
            <List>
                <NextLink href="/courses" passHref legacyBehavior>
                    <Button
                        as="a"
                        variant="ghost"
                        leftIcon={<RiFileList2Fill />}
                        colorScheme={useColorModeValue('yellow', 'blue')}
                    >    
                    <p className={inter_heavy.className}>Course List</p>
                    </Button>
                </NextLink>
            </List>

            <Section></Section>
            
            <Section delay={0.3}>
                <Paragraph className={inter.className}>
                    I was previously part of an engineering design team called Mars Colony, where I was the team lead for electrical and firmware development on the Sabatier Reactor project. 
                    We created a working chemical reactor using the Sabatier reaction to convert carbon dioxide and hydrogen into water and methane, which would be used for creating methalox rocket fuel.
                    I contributed to the development of the electrical control system firmware, which ran a real-time operating system on an STM32 and Arduino microcontrollers.
                </Paragraph>
            </Section>

            <Section delay={0.3}>
            <SimpleGrid columns={2} gap={6}>
            
            <WorkGridItem
            id=""
            title=""
            thumbnail={thumbElec}
            >
              <p className={inter.className}>firmware/electrical team</p>
            </WorkGridItem>
       
            <WorkGridItem
            id=""
            title=""
            thumbnail={thumbHeat}
            >
              <p className={inter.className}>heat element test</p>
            </WorkGridItem>

            <WorkGridItem
            id=""
            title=""
            thumbnail={thumbElec2}
            >
              <p className={inter.className}>system code review</p>
            </WorkGridItem>

            <WorkGridItem
            id=""
            title=""
            thumbnail={thumbWater}
            >
              <p className={inter.className}>water by-product methane evidence</p>
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
                            <p className={inter_heavy.className}>Mars Colony</p>
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
                            <p className={inter_heavy.className}>@ubcmarscolony</p>
                            </Button>
                    </Link>
                </ListItem>
            </List>

            <Section></Section>

            <Divider />

            <Section delay={0.5}>
                <Heading
                as="h3"
                variant="section-title"
            >
            <p><code>site reference</code></p>
            </Heading>
            <Paragraph className={inter.className}>
                PSA I'm not a web developer! 
                The majority of this site's frontend references designs that are not my own. Go check out the work from Takuya Matsuyama. 
                He has a spinning dog and makes some pretty cool videos.
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
                            <p className={inter_heavy.className}>craftzdog</p>
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
                            <p className={inter_heavy.className}>devaslife</p>
                            </Button>
                    </Link>
                </ListItem>
            </List>
    
        
        </Container>
        
     </Layout>
    );
}
  
export default Page 