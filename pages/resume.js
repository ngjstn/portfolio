import {
  Heading,
  Container,
  Divider   } from '@chakra-ui/react'
import { Code } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { useState } from 'react'
import { Document, Page, pdfjs } from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Works = () => {
    const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};


    return (
        <Layout title="Resume">
        <Container>
        <Heading as="h3" fontSize={20} mb={4}>
        <code>&gt; resume</code>

        <Divider my={6} />

        </Heading>
        
        <Section>
        <Code>Last Updated: Jan 18, 2024</Code>

            <Document
				file="resume2.pdf"
				onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={console.error}
			>
				<Page pageNumber={pageNumber} />
			</Document>
            
        </Section>
    </Container>
    </Layout>
    )
}

export default Works 