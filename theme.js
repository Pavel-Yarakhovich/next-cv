import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  fonts: {
    heading: "Raleway",
    body: "Raleway",
  },
  colors: {
    gray: {
      100: "#1a1a1a",
      200: "#333333",
      300: "#404040",
      400: "rgba(255, 255, 255, 0.8",
      500: "rgba(255, 255, 255, 0.4"
    },
    grass: {
      100: "#00ffc2",
      200: "rgba(0, 255, 194, 0.4",
    }
  },
});
export default theme;
