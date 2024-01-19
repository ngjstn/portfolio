import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Website = ({ Component, pageProps, router }) => {
    const [, setBackendData] = useState([{}])

    useEffect(() => {
        fetch('/api').then(
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