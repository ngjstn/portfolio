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
    <Layout title="CPEN412">
      <Container>
        <Title>
          Motorola 68k CPU <Badge></Badge>
        </Title>
        <Paragraph className={inter.className}></Paragraph>
        <Paragraph className={inter.className}>Coming Soon!</Paragraph>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  