import { Fragment } from "react";
import Head from "next/head";
import MainNavigation from "./MainNavigation";
import { Container, Flex } from "@chakra-ui/react";

function Layout(props) {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Flex flexDirection="column" minHeight="100vh" bg="gray.300">
        <MainNavigation />
        <Container maxW="container.xl" p={4} h="100%">
          {props.children}
        </Container>
      </Flex>
    </Fragment>
  );
}

export default Layout;
