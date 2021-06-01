import { Flex, Text, Button, useClipboard } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

function CopyableText({ value, text = value }) {
  const { hasCopied, onCopy } = useClipboard(value);

  return (
    <Flex flexDirection="column" alignItems="center" mb={5}>
      <Text fontSize={["1xl", null, "2xl"]} fontWeight="700">
        {text}
      </Text>
      {hasCopied ? (
        <FaCheckCircle size="40px" color="#66bf60" />
      ) : (
        <Button onClick={onCopy} variant="outline">
          Copy
        </Button>
      )}
    </Flex>
  );
}

export default CopyableText;
