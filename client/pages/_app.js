import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const Website = ({ Component, pageProps, router }) => {

    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("http://localhost:5000/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])


    return (
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route}></Component>
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website 