import React from "react";
import { Box, Avatar, Text, Flex } from "@chakra-ui/react";

function Project(props) {
  return (
    <Box w={["100%", "50%", "33%", "25%"]} p={2}>
      <Box
        bgGradient="linear(to-r, gray.100, gray.200)"
        borderRadius="36px"
        p={4}
        display="flex"
        flexDirection="column"
        color="white"
        fontWeight="700"
        onClick={() => props.handleClick(props.project)}
        _hover={{
          cursor: "pointer",
          color: "yellow.200",
          transition: "all 250ms ease",
        }}
      >
        <Text textTransform="uppercase" mb={3}>
          {props.project.title}
        </Text>
        <Flex flexWrap="wrap">
          {props.project.tools.map((tool) => (
            <Avatar
              key={tool}
              size="sm"
              name="Kent Dodds"
              src="https://bit.ly/kent-c-dodds"
              mr={4}
              mb={4}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default Project;
