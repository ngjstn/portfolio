import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  useColorModeValue,
  useColorMode,
  SimpleGrid
} from '@chakra-ui/react'
import { Code } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import { useState } from 'react'
import { Document, Page, pdfjs } from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Works = () => {
    const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
		);

    return (
        <Container>
        <Heading as="h3" fontSize={20} mb={4}>
        <code>resume</code>
        </Heading>

        <Section>
        <Code>Last Updated: Sep 21, 2022</Code>
            {/* <nav>
                <button onClick={goToPrevPage}><Code>Prev</Code></button>
                
                <button onClick={goToNextPage}><Code>Next</Code></button>
                <p>
                <code>
                Page {pageNumber} of {numPages}
                </code>
                </p>
            </nav> */}

            <Document
				file="resume.pdf"
				onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={console.error}
			>
				<Page pageNumber={pageNumber} />
			</Document>
            
        </Section>
    </Container>
    )
}

export default Works 