import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  Text,
  HStack,
} from "@chakra-ui/react";
import { char_data } from "../assets/char_data";
import { OperatorFullDetails, OperatorGridOperator } from "../types";
import OperatorGeneralSelector from "./OperatorCollectionDisplay/OperatorGeneralSelector";
import OperatorImage from "./OperatorCollectionDisplay/OperatorImage";
import OperatorPotentialSelector from "./OperatorCollectionDisplay/OperatorPotentialSelector";

interface OperatorViewProps {
  operator: string;
  operators: OperatorGridOperator[];
  isOpen: boolean;
  handleOperatorViewClose: () => void;
  handleOwn: (operatorData : OperatorFullDetails) => void;
}
const OperatorView = ({
  operator,
  operators,
  isOpen,
  handleOperatorViewClose,
  handleOwn,
}: OperatorViewProps) => {
  console.log(operators)
  const operatorData : OperatorFullDetails = char_data[operator];

  return (
    <Modal isOpen={isOpen} onClose={handleOperatorViewClose}>
      <ModalOverlay />
      <ModalContent mt={[0, 350]} maxW="460px">
        <ModalHeader>
          <Flex alignItems="center">
            <OperatorImage
              size="80px"
              id={operator}
              name={operatorData?.name}
            />
            <Text
              fontSize={operatorData?.name.length < 12 ? "5xl" : "3xl"}
              ml="3.5"
            >
              {operatorData?.name}
            </Text>
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex className="ownedOperatorDetails">
            <HStack spacing="24px">
              <Box className="general">
                <OperatorGeneralSelector />
              </Box>
              <Box className="potential">
                <OperatorPotentialSelector
                  potentials={operatorData?.potentialRanks}
                />
              </Box>
            </HStack>
          </Flex>
          <Button mt="60px" onClick={() => handleOwn(operatorData)}>
            Add Operator
          </Button>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OperatorView;
