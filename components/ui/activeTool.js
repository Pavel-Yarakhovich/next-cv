import { Box, Avatar, Text, Flex, Switch } from "@chakra-ui/react";

function ActiveTool(props) {
  let color = "yellow.500";
  if (props.tool.level > 75) color = "green.500";
  if (props.tool.level < 50) color = "red.500";

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
      boxShadow="-5px -3px 12px #555, 3px 5px 15px #1a1a1a"
    >
      <Flex alignItems="center">
        <Avatar size="lg" name={props.tool.title} src={props.tool.img} mr={4} />
        <Text textTransform="uppercase" fontSize="26px">
          {props.tool.title}
        </Text>
      </Flex>

      <Flex
        flexDirection="column"
        bg="gray.200"
        ml="80px"
        alignSelf="stretch"
        p={3}
        borderRadius="12px"
      >
        <Text fontWeight="700" letterSpacing="0.03rem" color="white">
          Category:
        </Text>
        <Flex alignItems="center">
          <Box bg="yellow.300" mr={3} w="14px" h="14px" borderRadius="50%" />
          <Text
            textTransform="lowerCase"
            fontStyle="italic"
            fontWeight="400"
            color="white"
          >
            {props.tool.category}
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems="center" pt={2} pl="80px" mb={4}>
        <Switch
          id="show-category-related-tools"
          mr={2}
          size="md"
          colorScheme="green"
          onChange={() => props.toggleByCategory(props.tool.category)}
        />
        <Text
          textTransform="lowerCase"
          fontStyle="italic"
          fontWeight="400"
          fontSize="0.7rem"
          color="white"
        >
          Show only tools of this category
        </Text>
      </Flex>
      <Flex alignItems="center" fontWeight="400" pl="80px">
        <Text>Number of projects:</Text>
        <Text pl={4} fontWeight="700" color="white">
          {props.tool.projects}
        </Text>
      </Flex>
      <Flex alignItems="center" fontWeight="400" pl="80px">
        <Text>Level of knowledge:</Text>
        <Text pl={4} pr={2} fontWeight="700" color="white">
          {props.tool.level}%
        </Text>
      </Flex>
      <Box
        mt={4}
        border="1px solid"
        borderColor="gray.200"
        borderRadius="5px"
        bgGradient={`linear(to-r, ${color} ${props.tool.level}%, gray.200 ${props.tool.level}%)`}
        h="10px"
        w="100%"
      />
    </Box>
  );
}

export default ActiveTool;
