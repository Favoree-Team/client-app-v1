import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"
import { CaraKerjaText } from "../../config/lang/id"

const CaraKerja = () => {
    return (
        <>
            <Box id="cara-kerja">
                <Box
                    pt={20}
                    pb={4}
                    align={'center'}
                >
                    <Heading fontSize={'44px'}>{CaraKerjaText.TITLE}</Heading>
                    <Text fontSize={'18px'} py={2}>{CaraKerjaText.DESCRIPTION}</Text>
                </Box>


                <Flex pb={20}>
                    {
                        CaraKerjaText.STEP_DATA?.map((item, index) => {
                            return(
                                <Box key={index} align={'center'} maxW={'20%'}>
                                    <Box
                                        my={5}
                                        width={'53px'}
                                        height={'53px'}
                                        backgroundColor={'#F9FAFB'}
                                        boxShadow='lg'
                                        borderRadius={'50%'}
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                    >
                                        <Heading color={"#43919B"} fontSize={'2xl'}>{item.number}</Heading>
                                    </Box>

                                    <Image
                                        width={150}
                                        height={120}
                                        alt={item.alt}
                                        src={item.icon}
                                    />
                                        <Heading pt={4} fontSize={'2xl'} maxW={'65%'}>{item.header}</Heading>
                                        <Text fontSize={'md'} py={4}>{item.description}</Text>
                                </Box>
                            )
                        })
                    }
                </Flex>
            </Box>
        </>
    )
}

export default CaraKerja