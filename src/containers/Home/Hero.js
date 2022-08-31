import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { HeroText } from "../../config/lang/id";
import StyledButton from "../../parts/StyledButton";


const Hero = () => {
    return (
        <Box id="hero">
          <Box>
            <Heading>{HeroText.TITLE}</Heading>
            <Text>{HeroText.DESCRIPTION}</Text>
            <Flex>
              <StyledButton>{HeroText.START}</StyledButton>
              <StyledButton>{HeroText.CARA_KERJA}</StyledButton>
            </Flex>
          </Box>
        </Box>
    )
}

export default Hero;