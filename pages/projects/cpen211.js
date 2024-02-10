import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Paragraph from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import { Inter } from 'next/font/google'
  const inter = Inter({ subsets: ['latin'], styles: ['light'], weight: ['300'] })

  const Work = () => (
    <Layout title="CPEN211">
      <Container>
        <Title>
          DE1-SoC RISC <Badge></Badge>
        </Title>
        <Paragraph className={inter.className}>Coming soon!</Paragraph>
        {/* <Paragraph className={inter.className}>please come back later</Paragraph> */}
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  