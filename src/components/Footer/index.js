import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { facebook, favoree, instagram, twitter } from '@utils/assets'
import { FooterText } from '@src/config/lang/id'

const Footer = () => {
  return (
    <>
      <Box maxW="7xl" margin="auto" py={'10'}>
        <Flex justifyContent={'space-between'} px="10">
          <Box align="center">
            <Image alt="favoree-f" src={favoree} width="62" height="77" />
            <Heading py={'3'} fontSize={'2xl'}>
              {FooterText.SOCIAL}
            </Heading>
            <Flex justifyContent={'space-between'}>
              <Image alt="ig" src={instagram} width="58" height="58" />
              <Image alt="tw" src={twitter} width="58" height="58" />
              <Image alt="fb" src={facebook} width="58" height="58" />
            </Flex>
          </Box>

          <Flex minW={'65%'} justifyContent={'space-between'}>
            <Box>
              <Heading fontSize={'2xl'} pb={2}>
                {FooterText.FEATURE_HEAD}
              </Heading>
              {FooterText.FEATURE_SECTION?.map((item, index) => {
                return (
                  <Text py={0.5} fontSize={'lg'} key={index} color={'brand.primary'}>
                    <Link href={item.href}>{item.name}</Link>
                  </Text>
                )
              })}
            </Box>
            <Box>
              <Heading fontSize={'2xl'} pb={2}>
                {FooterText.SERVICE_HEAD}
              </Heading>
              {FooterText.SERVICE_SECTION?.map((item, index) => {
                return (
                  <Text py={0.5} fontSize={'lg'} key={index} color={'brand.primary'}>
                    <Link href={item.href}>{item.name}</Link>
                  </Text>
                )
              })}
            </Box>
            <Box>
              <Heading fontSize={'2xl'}>{FooterText.CONTACT_HEAD}</Heading>
              {FooterText.CONTACT_SECTION?.map((item, index) => {
                return (
                  <Text py={0.5} fontSize={'lg'} key={index} color={'brand.primary'}>
                    {item?.isLink ? <Link href={item.href}>{item.name}</Link> : item.name}
                  </Text>
                )
              })}

              <Heading pt={4} pb={2} fontSize={'2xl'}>
                {FooterText.TIME_OPERATION}
              </Heading>
              <Text fontSize={'lg'} py={0.5}>
                {FooterText.TIME}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Footer
