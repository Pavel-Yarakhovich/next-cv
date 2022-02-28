import React from "react";
import { Box, Avatar, Text, Flex, Tooltip } from "@chakra-ui/react";

function Project(props) {
  return (
    <Box w={["100%", "50%", "33%", "25%"]} p="0 1rem 1rem 0">
      <Box
        bgGradient={
          props.isActive
            ? "linear(-45deg, yellow.300 25%, gray.100 75%)"
            : "linear(to-r, gray.100, gray.200)"
        }
        borderRadius="12px"
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
        <Flex flexWrap="wrap" justifyContent="center">
          {props.project.tools.map((tool) => (
            <Tooltip key={tool.id} label={tool.title}>
              <Avatar
                size="sm"
                name={tool.title}
                src={tool.url}
                mr={2}
                mb={2}
              />
            </Tooltip>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default Project;
