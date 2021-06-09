import { Flex, Stack, Text } from "@chakra-ui/react";

function Certificates() {
  return (
    <Stack spacing={3} color="grass.200">
      <Text
        fontSize={["3xl", null, "4xl"]}
        textAlign="left"
        mb="1.5rem"
        fontWeight="700"
        color="blue.300"
        textTransform="uppercase"
      >
        Certificates
      </Text>
    </Stack>
  );
}

export default Certificates;
