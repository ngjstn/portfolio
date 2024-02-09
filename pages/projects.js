import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import sabatier from '../public/images/works/sabatier.png'
import plotpals from '../public/images/works/plotpals.png'
import alarmchaser from '../public/images/works/alarmchaser.jpg'
import error from '../public/images/works/404.png'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], styles: ['light'], weight: ['300'] })
const inter_heavy = Inter({ subsets: ['latin'], styles: ['light'], weight: ['500'] })

const Works = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        <code>&gt; projects</code>
      </Heading>

      <Divider my={6} />

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

      <Section>
          <WorkGridItem id="cpen412" title="" thumbnail={error}>
          <Heading fontSize={'18px'}>
          <code>Motorola 68k CPU</code>
          </Heading>
          <p className={inter.className}>Interfacing a soft-core processor with static/dynamic/flash memory</p>
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="cpen331" title="" thumbnail={error}>
          <Heading fontSize={'18px'}>
          <code>OS/161 Kernel</code>
          </Heading>
          <p className={inter.className}>Developing OS kernel features on a 32-bit MIPS system simulation</p>
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="cpen211" title="" thumbnail={error}>
          <Heading fontSize={'18px'}>
          <code>DE1-SoC RISC</code>
          </Heading>
          <p className={inter.className}>Digital RTL design of a simple CPU with an FPGA development board</p>
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="sabatier" title="" thumbnail={sabatier}>
          <Heading fontSize={'18px'}>
          <code>Sabatier Fuel Reactor</code>
          </Heading>
          <p className={inter.className}>Electrical control system for a methane chemical fuel plant</p>
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="plotpals" title="" thumbnail={plotpals}>
          <Heading fontSize={'18px'}>
          <code>PlotPals Mobile App</code>
          </Heading>
          <p className={inter.className}>Android app for managing and locating public garden plots</p>
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="alarmchaser" title="" thumbnail={alarmchaser}>
          <Heading fontSize={'18px'}>
          <code>Alarm Clock Chaser</code>
          </Heading>
          <p className={inter.className}>Web-enabled alarm bot that drives away from you. Yup. That's it.</p>
          </WorkGridItem>
        </Section>
    
      </SimpleGrid>
  
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
