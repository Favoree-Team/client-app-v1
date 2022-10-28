import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { testing_post } from '@utils/assets'

const OTHER_ARTICLES = [
  {
    id: 1,
    title: ' Perbedaan ewalet dan emoney',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    image: testing_post
  },
  {
    id: 2,
    title: ' Perbedaan ewalet dan emoney',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    image: testing_post
  },
  {
    id: 3,
    title: ' Perbedaan ewalet dan emoney',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    image: testing_post
  }
]

const OtherArticles = () => {
  return (
    <Box backgroundColor="gray.200" borderRadius="3xl" padding="16">
      <Heading marginBottom="5" fontSize="28">
        Artikel terbaru
      </Heading>
      <Flex gap="5">
        {OTHER_ARTICLES.map((item) => {
          return (
            <Flex key={item.id}>
              <Image src={testing_post} alt="detail" borderRadius="2xl" height="100" />
              <Box paddingLeft="5">
                <Heading as="h1" fontSize="18">
                  {item.title}
                </Heading>
                <Text fontSize="12" marginTop="3" color="gray.500">
                  {item.desc}
                </Text>
              </Box>
            </Flex>
          )
        })}
      </Flex>
    </Box>
  )
}

export default OtherArticles
