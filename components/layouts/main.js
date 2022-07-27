import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import Fonts from '../fonts.js'
import VoxelDog from '../voxel-dog.js'

const Main = ({ children, router}) => {
    return (
        <Box as="main" pb={89}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" /> 
                <title>Justin Ng - hi there</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}> 
                {children}
                {/* <VoxelDog /> */}
            </Container>
        </Box>
    )
}

export default Main