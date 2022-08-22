import Meta from "../components/Meta";
import Image from "next/image";
import Link from "next/link";
import { logo } from "../utils/assets";
import { Flex, Spacer, Text } from "@chakra-ui/react";
import StyledButton from "./StyledButton";

const Navbar = () => {
  return (
    <div>
      <Meta />
      <nav>
        <Flex alignItems="center" gap="5" py="5" px="10" bg="brand.header">
          <Image src={logo} alt="Favoree ID" width={156} height={49} />
          <Spacer />

          <Link href="/tentang-kami">
            <Text fontWeight="bold">Tentang Kami</Text>
          </Link>
          <Link href="/cara-kerja">
            <Text fontWeight="bold">Cara Kerja</Text>
          </Link>

          <Flex ml="5" gap="4">
            <StyledButton colorScheme="teal" variant="outline">
              Blog
            </StyledButton>
            <StyledButton colorScheme="teal" variant="solid">
              Login
            </StyledButton>
          </Flex>
        </Flex>
      </nav>
    </div>
  );
};

export default Navbar;
