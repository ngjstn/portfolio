import { Container, Heading, SimpleGrid, Divider, Code } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
// import thumbMarsColony from '../public/images/projects/mars_colony.png'
import thumbWallpaper from '../public/images/projects/wallpaper.jpg'
import { useColorModeValue } from '@chakra-ui/react'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        <code>projects</code>
      </Heading>

      <SimpleGrid column={[1,1,2]} gap={6}>
        {/* <Section>
            <WorkGridItem
            id="mars_colony"
            title="Mars Colony Sabatier Reactor"
            thumbnail={thumbMarsColony}
            >
              <Code colorScheme={useColorModeValue('purple', 'blue')}>UBC Engineering Design Team</Code>
            </WorkGridItem>
        </Section> */}

        <Section>
          <WorkGridItem
          id="wallpaper"
          title="Placeholder Image (not mine)"
          thumbnail={thumbWallpaper}
          >
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works 