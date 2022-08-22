import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
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
