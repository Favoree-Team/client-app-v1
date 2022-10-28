import { Box, Container } from '@chakra-ui/react'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'

const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Container maxW="7xl">{children}</Container>
      <Footer />
    </Box>
  )
}

export default Layout
