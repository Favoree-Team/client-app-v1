import { ChakraProvider, extendTheme } from '@chakra-ui/react'
// import '../styles/globals.css'

const color = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  }
}

const theme = extendTheme({ color })


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>  
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
