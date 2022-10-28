import Meta from '../Meta'
import Image from 'next/image'
import Link from 'next/link'
import { Flex, Spacer, Text, Box } from '@chakra-ui/react'
import StyledButton from '@src/parts/StyledButton'
import { logo } from '@src/utils/assets'

const Navbar = () => {
  return (
    <div>
      <Meta />
      <nav>
        <Box bg="brand.header">
          <Box maxW="7xl" margin="auto">
            <Flex alignItems="center" gap="5" py="5" px="10">
              <Image src={logo} alt="Favoree ID" width={156} height={49} />
              <Spacer />

              <Link href="/tentang-kami">
                <Text fontWeight="bold">Tentang Kami</Text>
              </Link>
              <Link href="/cara-kerja">
                <Text fontWeight="bold">Cara Kerja</Text>
              </Link>

              <Flex ml="5" gap="4">
                <StyledButton colorScheme="teal" variant="outline">
                  Blog
                </StyledButton>
                <StyledButton colorScheme="teal" variant="solid">
                  Login
                </StyledButton>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </nav>
    </div>
  )
}

export default Navbar
