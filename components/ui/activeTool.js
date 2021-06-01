import { Box, Avatar, Text, Flex } from "@chakra-ui/react";

function ActiveTool(props) {
  return (
    <Box
      w="100%"
      borderRadius="36px"
      borderTopLeftRadius="0"
      border="2px solid #66bf60"
      p={5}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      mb={2}
      mr={2}
      color="green.300"
      fontWeight="700"
    >
      <Flex alignItems="center">
        <Avatar
          size="lg"
          name="Kent Dodds"
          src="https://bit.ly/kent-c-dodds"
          mr={4}
        />
        <Text textTransform="uppercase" fontSize="26px">{props.tool}</Text>
      </Flex>
      <Flex alignItems="center" fontWeight="400" pl="80px">
        <Text>Number of projects:</Text>
        <Text pl={4} fontWeight="700" color="white">7</Text>
      </Flex>
      <Flex alignItems="center" fontWeight="400" pl="80px">
        <Text>Level of knowledge:</Text>
        <Text pl={4} fontWeight="700" color="white">85%</Text>
      </Flex>
    </Box>
  );
}

export default ActiveTool;
