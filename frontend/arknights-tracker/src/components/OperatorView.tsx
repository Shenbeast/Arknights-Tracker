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
import { OperatorGridOperator } from "../types";
import OperatorGeneralSelector from "./OperatorCollectionDisplay/OperatorGeneralSelector";
import OperatorImage from "./OperatorCollectionDisplay/OperatorImage";
import OperatorPotentialSelector from "./OperatorCollectionDisplay/OperatorPotentialSelector";

interface OperatorViewProps {
  isOpen: boolean;
  onClose: () => void;
  operator: string;
  operators: OperatorGridOperator[];
  setSelectedOperator: React.Dispatch<React.SetStateAction<string>>;
  setOwnedOperators: React.Dispatch<
    React.SetStateAction<OperatorGridOperator[]>
  >;
  ownedOperators: OperatorGridOperator[];
}
const OperatorView = ({
  operators,
  operator,
  isOpen,
  onClose,
  setSelectedOperator,
  setOwnedOperators,
  ownedOperators,
}: OperatorViewProps) => {
  const operatorData = char_data[operator];
  console.log(operatorData?.phases.length);
  const handleClose = () => {
    onClose();
    setSelectedOperator("");
  };
  const addOperator = () => {
    let newOwnedOperators = [...ownedOperators];
    if (
      newOwnedOperators.find(
        (ownedOperator) => ownedOperator.name === operatorData.name
      )
    ) {
      newOwnedOperators = newOwnedOperators.filter(
        (operator) => operator.name !== operatorData.name
      );
    } else {
      const newOperator = operators.find(
        (operator) => operator.name === operatorData.name
      );
      console.log(newOperator);
      if (newOperator) {
        newOwnedOperators.push(newOperator);
      }
    }
    setOwnedOperators(newOwnedOperators);
  };
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
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
          <Button mt="60px" onClick={addOperator}>
            Add Operator
          </Button>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OperatorView;
