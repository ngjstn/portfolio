import { Container, Heading, SimpleGrid, Divider, Code } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

// import thumbMarsColony from '../public/images/projects/mars_colony.png'
import thumbWallpaper from '../public/images/projects/wallpaper.jpg'
import { useColorModeValue } from '@chakra-ui/react'
import thumbElec from '../public/images/projects/elec_team.png'
import thumbWater from '../public/images/projects/water.png'
import thumbHeat from '../public/images/projects/heat.png' 
import thumbElec2 from '../public/images/projects/elec_team2.jpg'
import solidigm2 from '../public/images/projects/solidigm2.jpg'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        <code>gallery</code>
      </Heading>

      <SimpleGrid column={1} gap={6}>

        <Section>
        <WorkGridItem
          id="co-op LDO"
          title=""
          thumbnail={solidigm2}
          >
          </WorkGridItem>

          <WorkGridItem
          id="team1"
          title=""
          thumbnail={thumbElec}
          >
          </WorkGridItem>

          <WorkGridItem
          id="team2"
          title=""
          thumbnail={thumbElec2}
          >
          </WorkGridItem>

          <WorkGridItem
          id="water"
          title=""
          thumbnail={thumbWater}
          >
          </WorkGridItem>

          <WorkGridItem
          id="heat"
          title=""
          thumbnail={thumbHeat}
          >
          </WorkGridItem>

        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works 