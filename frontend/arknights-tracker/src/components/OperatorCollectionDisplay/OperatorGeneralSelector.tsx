import { Button, HStack, IconButton } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const OperatorGeneralSelector = () => {
  return (
    <HStack>
      <Button>Own</Button>
      <IconButton aria-label="Favourite" icon={<FaHeart color={"red"} />} />
    </HStack>
  );
};

export default OperatorGeneralSelector;