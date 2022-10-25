import { Box, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import { testing_post, testing_video } from '@utils/assets'
import { BsArrowRight } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'

// Deleted after change to API data
const POPULAR_DATA = [
  {
    title: 'Perbedaan ewalet dan emoney',
    totalVisit: '15 Kunjungan'
  },
  {
    title: 'Perbedaan ewalet dan emoney',
    totalVisit: '15 Kunjungan'
  },
  {
    title: 'Perbedaan ewalet dan emoney',
    totalVisit: '15 Kunjungan'
  }
]
const Articles = () => {
  return (
    <Box>
      <Flex gap="10" marginY="10">
        <Box>
          <Heading as="h1" size="lg">
            Popular
          </Heading>
          {POPULAR_DATA.map((item, index) => {
            return (
              <Box marginTop="10" key={index}>
                <Flex borderBottom="1px" paddingBottom="5" borderColor="gray.300">
                  <Box paddingRight="10">
                    <Heading maxW="80%" as="h1" size="md" fontWeight="light" lineHeight="8">
                      {item.title}
                    </Heading>
                    <Text marginTop="7" color="gray.300">
                      {item.totalVisit}
                    </Text>
                  </Box>
                  <BsArrowRight size="24" />
                </Flex>
              </Box>
            )
          })}
        </Box>

        <Box width="sm">
          <Image src={testing_post} alt="" borderRadius="3xl" />
          <Flex paddingTop="5" paddingBottom="3">
            <Text color="brand.primary" fontWeight="bold" paddingRight="10">
              Ewalet
            </Text>
            <Text>5 Kunjungan</Text>
          </Flex>

          <Heading as="h1" fontSize="md" paddingBottom="5">
            Perbedaan ewallet dan emoney
          </Heading>
          <Text fontSize="sm" color="gray.400" maxW="70%">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{' '}
          </Text>
          <Flex marginTop="24" borderTop="1px" paddingTop="3" borderColor="gray.200" fontSize="sm">
            <Flex>
              <CgProfile size="24" />
              <Text paddingLeft="3">Andrea Wise</Text>
            </Flex>
            <Spacer />
            <Text color="gray.400">2 Hari yang lalu</Text>
          </Flex>
        </Box>

        <Box>
          <Image src={testing_video} alt="video" />
        </Box>
      </Flex>
    </Box>
  )
}

export default Articles
