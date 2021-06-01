import { Box, Text, Flex } from "@chakra-ui/react";
import Tool from "./tool";

function ActiveProject(props) {
  return (
    <Box
      w="100%"
      borderRadius="36px"
      borderTopLeftRadius="0"
      border="2px solid #e6cb00"
      p={5}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      mb={2}
      mr={2}
      color="yellow.300"
      fontWeight="400"
    >
      <Flex alignItems="center" mb={4}>
        <Text textTransform="uppercase" fontSize="26px" fontWeight="700">
          {props.project.title}
        </Text>
      </Flex>
      <Flex direction="column" mb={4}>
        <Text fontSize="1.4rem" mb={2}>Description</Text>
        <Text pl={4} color="white">
          {props.project.description}
        </Text>
      </Flex>
      <Flex  direction="column" mb={4}>
        <Text fontSize="1.4rem" mb={2}>My responsibilities</Text>
        {props.project.duties.map((duty, idx) => (
          <Text key={idx} pl={4} color="white">
            {duty}
          </Text>
        ))}
      </Flex>
      <Flex flexWrap="wrap" direction="column">
        <Text fontSize="1.4rem" mb={2}>Tools</Text>
        <Flex flexWrap="wrap">
          {props.project.tools.map((tool, idx) => (
            <Tool key={idx} tool={tool} handleClick={() => null} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

export default ActiveProject;
