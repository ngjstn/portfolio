import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import { FiGithub } from 'react-icons/fi'
import { FaLinkedinIn, FaHamburger } from 'react-icons/fa'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], styles: ['light'], weight: ['300'] })


const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false} legacyBehavior>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? 'gray200' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202340')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem
            target="_blank"
            href="https://github.com/ngjstn"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <FiGithub />
            </LinkItem>
            <LinkItem
            target="_blank"
            href="https://www.linkedin.com/in/ngjstn/"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <FaLinkedinIn />
            </LinkItem>
          <LinkItem href="/projects" path={path}>
            <code>projects</code>
          </LinkItem>
          <LinkItem href="/resume" path={path}>
            <code>resume</code>
          </LinkItem>
          <LinkItem href="/gallery" path={path}>
            <code>gallery</code>
          </LinkItem>
          <LinkItem href="/courses" path={path}>
            <code>courses</code>
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<FaHamburger />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/projects" passHref legacyBehavior>
                  <MenuItem as={Link}><p className={inter.className}>Projects</p></MenuItem>
                </NextLink>
                <NextLink href="/gallery" passHref legacyBehavior>
                  <MenuItem as={Link}><p className={inter.className}>Gallery</p></MenuItem>
                </NextLink>
                <NextLink href="/resume" passHref legacyBehavior>
                  <MenuItem as={Link}><p className={inter.className}>Resume</p></MenuItem>
                </NextLink>
                <NextLink href="/courses" passHref legacyBehavior>
                  <MenuItem as={Link}><p className={inter.className}>Courses</p></MenuItem>
                </NextLink>
            
                <MenuItem as={Link} href="https://github.com/ngjstn"><p className={inter.className}>Github</p></MenuItem>
                <MenuItem as={Link} href="https://www.linkedin.com/in/ngjstn/"><p className={inter.className}>LinkedIn</p></MenuItem>
                
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar