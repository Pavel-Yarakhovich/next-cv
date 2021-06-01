import {
  Container,
  Button,
  Flex,
  Box,
  Heading,
  Spacer,
  Square,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { SideMenu } from './SideMenu';

function MainNavigation() {
  return (
    <Flex bgGradient="linear(to-r, gray.100, gray.200)" p={4}>
      <Container maxW="container.xl">
        <Flex alignItems="center">
          <Square>
            <Image
              src="/logo.svg"
              alt="Pavel Yarakhovich"
              fit="cover"
              width={50}
            />
          </Square>
          <Spacer />
          <Box>
            {/* <Button colorScheme="whiteAlpha" variant="outline" color="white">
              <Link href="/">All Meetups</Link>
            </Button>
            <Button
              colorScheme="whiteAlpha"
              variant="outline"
              ml={4}
              color="white"
            >
              <Link href="/new-meetup">Add New Meetup</Link>
            </Button> */}
            <SideMenu />
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}

export default MainNavigation;
