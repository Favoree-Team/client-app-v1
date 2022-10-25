import Navbar from '../../parts/Navbar'
import Footer from '../../parts/Footer'
import { Box, Container } from '@chakra-ui/react'

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
