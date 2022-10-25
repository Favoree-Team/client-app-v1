import { Box, Heading, Image, Text } from '@chakra-ui/react'
import { blog_hero } from '@utils/assets'

const HeroBlog = () => {
  return (
    <Box position="relative" marginY="5">
      <Image src={blog_hero} alt="" />
      <Box maxW="lg" position="absolute" top="20%" right="20">
        <Heading maxW="md" as="h1" size="3xl" align="right" marginBottom="10">
          Perbedaan ewallet dan emoney
        </Heading>
        <Text maxW="md" align="right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </Text>
      </Box>
    </Box>
  )
}

export default HeroBlog
