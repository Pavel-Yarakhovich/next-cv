import React from "react";
import { Box, Avatar, Text } from "@chakra-ui/react";

function Tool(props) {
  return (
    <Box
      bgGradient={
        props.isActive
          ? "linear(to-r, gray.100, pink.500)"
          : "linear(to-r, gray.100, gray.200)"
      }
      borderRadius="36px"
      p={3}
      display="flex"
      flexDirection="row"
      alignItems="center"
      mb={2}
      mr={2}
      color="white"
      fontWeight="700"
      onClick={() => props.handleClick(props.tool)}
      _hover={{
        cursor: "pointer",
        color: "green.200",
        transition: "all 250ms ease",
      }}
    >
      <Avatar
        size="sm"
        name={props.tool.title}
        src={props.tool.img}
        mr={[2, 3, 4]}
      />
      <Text>{props.tool.title}</Text>
    </Box>
  );
}

export default Tool;
