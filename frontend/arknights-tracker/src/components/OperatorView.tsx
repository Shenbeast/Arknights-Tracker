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
  VStack,
} from "@chakra-ui/react";
import { char_data } from "../assets/char_data";
import { OperatorAction, OperatorFullDetails, OperatorGridOperator } from "../types";
import OperatorElitePhaseSelector from "./OperatorCollectionDisplay/OperatorElitePhaseSelector";
import OperatorGeneralSelector from "./OperatorCollectionDisplay/OperatorGeneralSelector";
import OperatorImage from "./OperatorCollectionDisplay/OperatorImage";
import OperatorPotentialSelector from "./OperatorCollectionDisplay/OperatorPotentialSelector";

interface OperatorViewProps {
  operatorId: string;
  operators: OperatorGridOperator[];
  isOpen: boolean;
  handleOperatorViewClose: () => void;
  handleOperatorActions: OperatorAction;
}
const OperatorView = ({
  operatorId,
  operators,
  isOpen,
  handleOperatorViewClose,
  handleOperatorActions,
}: OperatorViewProps) => {
  const operatorData : OperatorFullDetails = char_data[operatorId];
  if (operatorData) {
    operatorData.id = operatorId
  }
  const currentOperator = operators.find((operator) => operator.id === operatorId)
  console.log("available handlers", handleOperatorActions)
  return (
    <Modal isOpen={isOpen} onClose={handleOperatorViewClose}>
      <ModalOverlay />
      <ModalContent mt={[0, 350]} maxW="460px">
        <ModalHeader>
          <Flex alignItems="center">
            <OperatorImage
              size="80px"
              id={operatorId}
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
            <VStack>
            <HStack spacing="24px">
              <Box className="general">
                <OperatorGeneralSelector currentOperator = {currentOperator} operatorData = {operatorData} handleOperatorActions={handleOperatorActions}/>
              </Box>
              <Box className="potential">
                <OperatorPotentialSelector
                  currentOperator = {currentOperator}
                  potentials={operatorData?.potentialRanks}
                  operatorData = {operatorData}
                  handleOperatorActions={handleOperatorActions}
                />
              </Box>
            </HStack>
            <HStack spacing="24px">
              <Box className="elitePhase">
                <OperatorElitePhaseSelector currentOperator = {currentOperator} operatorData = {operatorData} handleOperatorActions={handleOperatorActions}/>
              </Box>
            </HStack>
            </VStack>
          </Flex>
          <Button mt="60px" onClick={() => handleOperatorActions.handleReset(operatorData)}>
            Reset Operator
          </Button>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OperatorView;
