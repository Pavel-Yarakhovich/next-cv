import React from "react";
import { Box, Avatar, Text, ScaleFade } from "@chakra-ui/react";

function Tool(props) {
  const [isShow, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true);
  }, []);

  return (
    <ScaleFade initialScale={0.85} in={isShow}>
      <Box
        position="relative"
        bgGradient={
          props.isActive
            ? "linear(to-r, gray.100, pink.500)"
            : "linear(to-r, gray.100, gray.200)"
        }
        borderRadius="0 36px 36px 0"
        p={3}
        display="flex"
        flexDirection="row"
        alignItems="center"
        mb={2}
        mr={2}
        color="white"
        fontWeight="700"
        transition="all 250ms ease"
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
          borderRadius="0"
        />
        <Text>{props.tool.title}</Text>
        {props.chosenCategory === props.tool.category && (
          <Box
            bg="yellow.300"
            mr={3}
            w="14px"
            h="14px"
            borderRadius="50%"
            position="absolute"
            top="0"
            right="-10px"
          />
        )}
      </Box>
    </ScaleFade>
  );
}

export default Tool;
