import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FooterText } from "../config/lang/id";
import { facebook, favoree, instagram, twitter } from "../utils/assets";

const Footer = () => {
    return (
        <>
            <Box maxW="7xl" margin="auto" py={"10"}>
                <Flex justifyContent={"space-between"} px="10">
                    <Box align="center">
                        <Image alt="favoree-f" src={favoree} width="62" height="77"/>
                        <Heading py={'3'} fontSize={'2xl'}>{FooterText.SOCIAL}</Heading>
                        <Flex justifyContent={"space-between"}> 
                            <Image alt="ig" src={instagram} width="58" height="58"/>
                            <Image alt="tw" src={twitter} width="58" height="58"/>
                            <Image alt="fb" src={facebook} width="58" height="58"/>
                        </Flex>
                    </Box>

                    <Flex minW={"65%"} justifyContent={"space-between"}>
                        <Box>
                            <Heading fontSize={'2xl'}>{FooterText.FEATURE_HEAD}</Heading>
                            {
                                FooterText.FEATURE_SECTION?.map((item, index) => {
                                    return (
                                        <Text py={0.5} fontSize={'lg'} key={index}>
                                            <Link href="#">{item}</Link>
                                        </Text>
                                    )
                                })
                            }
                        </Box>
                        <Box>
                            <Heading fontSize={'2xl'}>{FooterText.SERVICE_HEAD}</Heading>
                            {
                                FooterText.SERVICE_SECTION?.map((item, index) => {
                                    return (
                                        <Text fontSize={'lg'} key={index}>{item}</Text>
                                    )
                                })
                            }
                        </Box>
                        <Box>
                            <Heading fontSize={'2xl'}>{FooterText.CONTACT_HEAD}</Heading>
                            {
                                FooterText.CONTACT_SECTION?.map((item, index) => {
                                    return (
                                        <Text fontSize={'lg'} key={index}>{item}</Text>
                                    )
                                })
                            }

                            <Heading fontSize={'2xl'}>{FooterText.TIME_OPERATION}</Heading>
                            <Text fontSize={'lg'}>{FooterText.TIME}</Text>
                        </Box>
                    </Flex>

                </Flex>
            </Box>
        </>
    )
}

export default Footer;