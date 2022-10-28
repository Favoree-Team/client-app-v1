import { Box, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import { testing_detail } from '@src/utils/assets'
import { CgProfile } from 'react-icons/cg'

const Post = () => {
  return (
    <Box paddingY="5">
      <Image src={testing_detail} alt="detail" borderRadius="2xl" />
      <Flex marginY="5" alignItems="center">
        <Flex>
          <CgProfile size="32" />
          <Text paddingLeft="5" fontWeight="bold" fontSize="24">
            Samantha William
          </Text>
        </Flex>
        <Spacer />
        <Text color="gray.600">2 days ago</Text>
      </Flex>

      <Box marginBottom="16">
        <Heading textAlign="center" marginY="5">
          Perbedaan ewallet dan emoney
        </Heading>
        <Text lineHeight="7" fontSize="20" color="gray.600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
          enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
          <br />
          <br />
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam
        </Text>
      </Box>
    </Box>
  )
}

export default Post
