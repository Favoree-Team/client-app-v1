import { extendTheme } from "@chakra-ui/react";

import "@fontsource/poppins/700.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/400.css"

const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  components: {
    Button: {
        fontFamily: 'Inter',
    },
    heading: {
        fontFamily: 'Poppins',
        fontWeight: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        }
    },
    Text: {
        fontFamily: 'Poppins',
        fontWeight: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        }
    }
  }, 
  colors: {
    brand: {
      primary: "#43919B",
      secondary: "#E8F9FD",
      header:
        "linear-gradient(90deg, rgba(186,225,229,0.6337885495995272) 0%, rgba(255,255,255,1) 21%, rgba(255,255,255,1) 100%);",
    },
  },
});

export default theme;
