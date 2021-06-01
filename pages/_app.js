import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";

import Fonts from "./fonts";
import theme from "./theme";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
