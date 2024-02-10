import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio,
    Divider,
    SimpleGrid,
    Heading
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import { WorkGridItem } from '../../components/grid-item'
  import P from '../../components/paragraph'
  import reactor from '../../public/images/works/reactor.jpg'
  import Paragraph from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import thumbElec from '../../public/images/projects/elec_team.png'
import thumbWater from '../../public/images/projects/water.png'
import thumbHeat from '../../public/images/projects/heat.png' 
import thumbElec2 from '../../public/images/projects/elec_team2.jpg'
  import { Inter } from 'next/font/google'
  const inter = Inter({ subsets: ['latin'], styles: ['light'], weight: ['300'] })

  const Work = () => (
    <Layout title="Sabatier">
      <Container>
        <Title>
          Sabatier Fuel Reactor <Badge></Badge>
        </Title>

        <Divider my={6} />
        <Heading 
            as="h3" 
            variant="section-title"
            >
            <p><code>the idea</code></p>
        </Heading>


        <Paragraph className={inter.className}>
        The unique atmospheric and geological conditions on Mars allow for in-situ production of methalox 
          propellant, which would make Mars return missions much more efficient. This project was a feasibility study at a 
          smaller scale to test the production of methane using the Sabatier reaction with ruthenium and nickel catalysts.
        </Paragraph>
        <Divider my={6} />
        <SimpleGrid columns={1} gap={6}>
            
            <WorkGridItem
            id=""
            title=""
            category='gallery'
            thumbnail={reactor}
            >
              <p className={inter.className}>a diagram of the reactor chassis, electronics, PCBs, and reaction core</p>
            </WorkGridItem>
        </SimpleGrid>

        <Divider my={6} />

        <SimpleGrid columns={2} gap={6}>
            
            {/* <WorkGridItem
            id=""
            title=""
            category='gallery'
            thumbnail={thumbElec}
            >
              <p className={inter.className}>firmware/electrical team</p>
            </WorkGridItem> */}
       
            <WorkGridItem
            id=""
            title=""
            category='gallery'
            thumbnail={thumbHeat}
            >
              <p className={inter.className}>nichrome coil heating element at about 700 degrees, used in the reactor preheater</p>
            </WorkGridItem>

            {/* <WorkGridItem
            id=""
            title=""
            category='gallery'
            thumbnail={thumbElec2}
            >
              <p className={inter.className}>system code review</p>
            </WorkGridItem> */}

            <WorkGridItem
            id=""
            title=""
            category='gallery'
            thumbnail={thumbWater}
            >
              <p className={inter.className}>water is released as a by-product of the reaction, showing evidence of methane production</p>
            </WorkGridItem>

            </SimpleGrid>

            <Divider my={6} />

            <Heading 
            as="h3" 
            variant="section-title"
            >
            <p><code>the control system</code></p>
        </Heading>
        <Paragraph className={inter.className}> 
            Coming soon!
        </Paragraph>

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  