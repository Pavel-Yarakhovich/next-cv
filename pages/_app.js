import { Fragment } from "react";
import Head from 'next/head';
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";

import Fonts from "../fonts";
import theme from "../theme";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Fragment>
  );
}

export default MyApp;
