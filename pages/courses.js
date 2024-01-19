import {
  Box,
  Heading,
  Container,
  Divider,
  useColorModeValue} from '@chakra-ui/react'
import { Code } from '@chakra-ui/react'
import Section from '../components/section'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], styles: ['light'], weight: ['300'] })

const Works = () => {
  return (
    <Container>
    <Heading as="h3" fontSize={20} mb={4}>
      <code>&gt; courses</code>
    </Heading>
    <Section>
    <Heading as="h1"><code>list of courses</code></Heading>
    <p className={inter.className}>Bachelor of Applied Science in Computer Engineering @ UBC</p>
      <Box my={6} align="left">
      <Code>COMPLETED</Code>
      <p><Code colorScheme='pink'>IN-PROGRESS</Code></p>
      <p><Code colorScheme='blue'>PLANNED</Code></p>
      <Divider my={6} />
      <Section></Section>

      <Heading as="h2" variant="section-title"><code>[CPEN] Computer Engineering</code></Heading>
      <p className={inter.className}><Code>CPEN 211</Code> Computing Systems I</p>
      <p className={inter.className}><Code>CPEN 212</Code> Computing Systems II</p>
      <p className={inter.className}><Code>CPEN 221</Code> Software Construction I</p>
      <p className={inter.className}><Code>CPEN 281</Code> Technical Communication</p>
      <p className={inter.className}><Code>CPEN 291</Code> Computer Engineering Design Studio I</p>
      <p className={inter.className}><Code>CPEN 311</Code> Digital Systems Design</p>
      <p className={inter.className}><Code>CPEN 321</Code> Software Engineering</p>
      <p className={inter.className}><Code>CPEN 331</Code> Operating Systems</p>
      <p className={inter.className}><Code colorScheme='blue'>CPEN 411</Code> Computer Architecture</p>
      <p className={inter.className}><Code colorScheme='pink'>CPEN 412</Code> Microcomputer Systems Design</p>
      <p className={inter.className}><Code colorScheme='blue'>CPEN 431</Code> Design of Distributed Software Applications</p>
      <p className={inter.className}><Code colorScheme='blue'>CPEN 432</Code> Real-Time System Design</p>
      <p className={inter.className}><Code>CPEN 481</Code> Economic Analysis of Engineering Projects</p>
      <p className={inter.className}><Code colorScheme='blue'>CPEN 491</Code> Capstone Design Project</p>

      <Section></Section>
      <Divider my={6} />


      <Heading as="h2" variant="section-title"><code>[ELEC] Electrical Engineering</code></Heading>
      <p className={inter.className}><Code colorScheme='pink'>ELEC 201</Code> Circuit Analysis I</p>
      <p className={inter.className}><Code colorScheme='pink'>ELEC 331</Code> Computer Networks and Communications</p>

      <Section></Section>
      <Divider my={6} />


      <Heading as="h2" variant="section-title"><code>[CPSC] Computer Science</code></Heading>
      <p className={inter.className}><Code>CPSC 221</Code> Basic Algorithms and Data Structures</p>
      <p className={inter.className}><Code colorScheme='blue'>CPSC 314</Code> Computer Graphics</p>
      <p className={inter.className}><Code colorScheme='pink'>CPSC 320</Code> Intermediate Algorithm Design and Analysis</p>

      <Section></Section>
      <Divider my={6} />


      <Heading as="h2" variant="section-title"><code>[ASPC] Applied Science</code></Heading>
      <p className={inter.className}><Code>APSC 100</Code> Introduction to Engineering I</p>
      <p className={inter.className}><Code>APSC 101</Code> Introduction to Engineering II</p>
      <p className={inter.className}><Code>APSC 160</Code> Computation in Engineering Design</p>
      <p className={inter.className}><Code>APSC 450</Code> Professional Engineering Practice</p>

      <Section></Section>
      <Divider my={6} />


      <Heading as="h2" variant="section-title"><code>[PHYS] Physics</code></Heading>
      <p className={inter.className}><Code>PHYS 157</Code> Introductory Physics for Engineers I</p>
      <p className={inter.className}><Code>PHYS 158</Code> Introductory Physics for Engineers II</p>
      <p className={inter.className}><Code>PHYS 159</Code> Introductory Physics Laboratory for Engineers</p>
      <p className={inter.className}><Code>PHYS 170</Code> Mechanics I</p>

      <Section></Section>
      <Divider my={6} />


      <Heading as="h2" variant="section-title"><code>[MATH] Mathematics</code></Heading>
      <p className={inter.className}><Code>MATH 100</Code> Differential Calculus with Applications</p>
      <p className={inter.className}><Code>MATH 101</Code> Integral Calculus with Applications</p>
      <p className={inter.className}><Code>MATH 152</Code> Linear Systems and Algebra</p>
      <p className={inter.className}><Code>MATH 220</Code> Mathematical Proof</p>
      <p className={inter.className}><Code>MATH 253</Code> Multivariable Calculus</p>
      <p className={inter.className}><Code>MATH 256</Code> Differential Equations</p>

      <Section></Section>
      <Divider my={6} />

      <Heading as="h2" variant="section-title"><code>Electives, etc.</code></Heading>
      <p className={inter.className}><Code>CIVL 250</Code> Engineering and Sustainable Development</p>
      <p className={inter.className}><Code>STAT 251</Code> Elementary Statistics</p>
      <p className={inter.className}><Code>CHEM 154</Code> Chemistry for Engineering</p>
      <p className={inter.className}><Code>PHIL 101</Code> Introduction to Philosophy</p>
      <p className={inter.className}><Code>WRDS 150</Code> Technical Writing</p>
      <p className={inter.className}><Code>CRWR 200</Code> Introduction to Creative Writing</p>
      <p className={inter.className}><Code>ASIA 320</Code> History of Early China</p>
      <p className={inter.className}><Code>FNH 200</Code> Exploring Our Food</p>

      <Section></Section>
      <Divider my={6} />


      </Box>
    </Section>
  </Container>
  )
}

export default Works 