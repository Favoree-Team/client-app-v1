import { Box, Text, FormControl, Input } from '@chakra-ui/react'
import StyledButton from '@parts/StyledButton'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
  return (
    <Box marginY="16">
      <FormControl position="relative">
        <Input variant="flushed" type="text" placeholder="Cari blog" size="lg" />
        <StyledButton
          position="absolute"
          right="0"
          backgroundColor="brand.primary"
          color="white"
          borderRadius="full"
          size="md"
          _hover="brand.primary">
          <BiSearch />
          <Text paddingLeft="3">Search</Text>
        </StyledButton>
      </FormControl>
    </Box>
  )
}

export default Search
