import { Container, Heading, Box } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="#c4a95e" p={3} align="center" mb={6}>
                Hello, I have no idea what I'm doing!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Justin Ng 
                    </Heading>
                    <p>UBC Computer Engineering Student</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page 