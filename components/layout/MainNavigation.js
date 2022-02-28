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
import { SideMenu } from "./SideMenu";

function MainNavigation({ sections, visibleContent, selectContent }) {
  return (
    <Flex bgGradient="linear(to-r, gray.100, gray.200)">
      <Container maxW="container.xl" p="8px">
        <Flex alignItems="center" flexDirection="column">
          <Square mb={3}>
            <Image
              src="/logo.svg"
              alt="Pavel Yarakhovich"
              fit="cover"
              width="40px"
            />
          </Square>
          <Flex flexDirection="column" gap="10px" justifySelf="center">
            {sections &&
              Object.entries(sections).map(([key, { icon: Icon }]) => (
                <Button
                  m="4px 0"
                  p={0}
                  fontSize="1.25rem"
                  color={visibleContent === key ? "gray.100" : "yellow.500"}
                  bg={visibleContent === key ? "green.200" : "gray.100"}
                  key={key}
                  onClick={() => selectContent(key)}
                >
                  <Icon />
                </Button>
              ))}
          </Flex>
          {/* <SideMenu /> */}
        </Flex>
      </Container>
    </Flex>
  );
}

export default MainNavigation;
