import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react"
import Image from "next/image"
import { BenefitText } from "../../config/lang/id"
import { QRIS } from "../../utils/assets"

const Benefit = () => {
    return (
        <>
            <Box id="benefit">
                <Flex alignContent={'space-between'} py={28}>
                    { BenefitText?.BENEFIT_DATA?.map((item, index) => {
                        return (
                            <Box key={index}>
                                <Box>
                                    <Box
                                        height={'100px'}
                                        width={'100px'}
                                        backgroundColor={'#F9FAFB'}
                                        borderRadius={'50%'}
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                    >
                                        <Image alt={item.alt} src={item.icon} width={56} height={56}/>
                                    </Box>
                                    <Heading fontSize={'2xl'} py={3}>{item.title}</Heading>
                                    <Text fontSize={'lg'}>{item.description}</Text>
                                </Box>
                            </Box>
                        )
                    })
                }
                </Flex>

                <Box>
                    <Flex maxW={'100%'} gap={10}>
                        <Box
                            backgroundColor={'#000000'}
                            borderRadius={34}
                            w={'67%'}
                        >
                            <Flex>
                                <Box
                                    px={16}
                                    py={20}
                                >
                                    <Heading color={'#F9FAFB'} fontSize={'2xl'}>{BenefitText.WALLET_HEAD}</Heading>
                                    <Text color={'#F9FAFB'} fontSize={'lg'} pt={4}>{BenefitText.WALLET_DESCRIPTION}</Text>
                                </Box>

                                <VStack
                                    py={10}
                                    pr={10}
                                >
                                    <Flex gap={4} pb={3}>
                                        { BenefitText?.WALLET_ICON?.slice(0, 2).map((item, index) => {
                                            return (
                                                <Box 
                                                    key={index}
                                                    backgroundColor={'#F9FAFB'}
                                                    width={'98px'}
                                                    height={'98px'}
                                                    borderRadius={'18px'}
                                                    display={'flex'}
                                                    alignItems={'center'}
                                                    justifyContent={'center'}
                                                >
                                                    <Image width={52} height={52} alt={item.alt} src={item.icon}/>
                                                </Box>
                                            )
                                        }) }
                                    </Flex>
                                    <Flex gap={4}>
                                        { BenefitText?.WALLET_ICON?.slice(2, 4).map((item, index) => {
                                            return (
                                                <Box 
                                                    key={index}
                                                    display={'flex'}
                                                    backgroundColor={'#F9FAFB'}
                                                    width={'98px'}
                                                    height={'98px'}
                                                    borderRadius={'18px'}
                                                    alignItems={'center'}
                                                    justifyContent={'center'}
                                                >
                                                    <Image width={52} height={52} alt={item.alt} src={item.icon}/>
                                                </Box>
                                            )
                                        }) }
                                    </Flex>
                                </VStack>
                            </Flex>
                        </Box>
                        <Flex 
                            w={'33%'}
                            backgroundColor={'transparent'}
                            borderRadius={34}
                            border={'3px solid #E5E7EB'}
                            flexDirection={'column'}
                            align={'center'}
                            justifyContent={'center'}
                            gap={10}
                            
                        >
                            <Box align={'center'}>
                                <Text fontSize={'lg'}>{BenefitText.QRIS_DESCRIPTION}</Text>
                            </Box>
                            <Image
                                width={298}
                                height={49}
                                alt={'image-QRIS'}
                                src={QRIS}
                            />
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </>
    )}

export default Benefit