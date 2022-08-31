
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Layout from "../src/components/Layout";
import { Hero } from "../src/config/lang/id";
import StyledButton from "../src/parts/StyledButton";

export default function Home() {
  return (
      <Layout>
        <Box id="hero">
          <Box>
            <Heading>{Hero.TITLE}</Heading>
            <Text>{Hero.DESCRIPTION}</Text>
            <Flex>
              <StyledButton>{Hero.START}</StyledButton>
              <StyledButton>{Hero.CARA_KERJA}</StyledButton>
            </Flex>
          </Box>
        </Box>

        <Box id="benefit"></Box>
        <Box id="cara-kerja"></Box>
        <Box id="testimoni"></Box>
        <Box id="blog-preview"></Box>
        <Box id="faq"></Box>
        <Box id="problem"></Box>
      </Layout>
  )
}
