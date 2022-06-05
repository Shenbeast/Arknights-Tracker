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
  Divider,
} from "@chakra-ui/react";
import { char_data } from "../assets/char_data";
import {
  OperatorAction,
  OperatorFullDetails,
  OperatorGridOperator,
} from "../types";
import OperatorElitePhaseSelector from "./OperatorCollectionDisplay/OperatorElitePhaseSelector";
import OperatorGeneralSelector from "./OperatorCollectionDisplay/OperatorGeneralSelector";
import OperatorImage from "./images/OperatorImage";
import OperatorLevelSelector from "./OperatorCollectionDisplay/OperatorLevelSelector";
import OperatorModuleSelector from "./OperatorCollectionDisplay/OperatorModuleSelector";
import OperatorPotentialSelector from "./OperatorCollectionDisplay/OperatorPotentialSelector";
import OperatorMasterySelector from "./OperatorCollectionDisplay/OperatorMasterySelector";

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
  const operatorData: OperatorFullDetails = char_data[operatorId];
  if (operatorData) {
    operatorData.id = operatorId;
  }
  const currentOperator = operators.find(
    (operator) => operator.id === operatorId
  );
  return (
    <Modal isOpen={isOpen} onClose={handleOperatorViewClose}>
      <ModalOverlay />
      <ModalContent mt={[0, 350]} maxW="530px">
        <ModalHeader>
          <Flex alignItems="center">
            <OperatorImage
              size="80px"
              id={operatorId}
              name={operatorData?.name}
            />
            <Text fontSize="3xl" ml="3.5">
              {operatorData?.name}
            </Text>
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex className="ownedOperatorDetails">
            <VStack spacing="14px">
              <HStack spacing="24px">
                <Box className="general">
                  <OperatorGeneralSelector
                    currentOperator={currentOperator}
                    operatorData={operatorData}
                    handleOperatorActions={handleOperatorActions}
                  />
                </Box>
                <Divider
                  mt="8px !important"
                  borderLeftWidth="4px !important"
                  orientation="vertical"
                />
                <Box className="potential">
                  <OperatorPotentialSelector
                    currentOperator={currentOperator}
                    potentials={operatorData?.potentialRanks}
                    operatorData={operatorData}
                    handleOperatorActions={handleOperatorActions}
                  />
                </Box>
              </HStack>
              <Divider
                mt="12px !important"
                borderBottomWidth="4px !important"
              />
              <HStack spacing="24px">
                <VStack spacing="25px">
                  <Box className="elitePhase">
                    <OperatorElitePhaseSelector
                      currentOperator={currentOperator}
                      operatorData={operatorData}
                      handleOperatorActions={handleOperatorActions}
                    />
                  </Box>
                  <Box className="module">
                    <OperatorModuleSelector
                      currentOperator={currentOperator}
                      operatorData={operatorData}
                      handleOperatorActions={handleOperatorActions}
                    />
                  </Box>
                </VStack>
                <Divider
                  mt="-2px !important"
                  borderLeftWidth="4px !important"
                  orientation="vertical"
                />
                <Box className="levelSelector">
                  <OperatorLevelSelector
                    currentOperator={currentOperator}
                    operatorData={operatorData}
                    handleOperatorActions={handleOperatorActions}
                  />
                </Box>
              </HStack>
              <Divider mt="8px !important" borderBottomWidth="4px !important" />
              <HStack>
                <OperatorMasterySelector
                  currentOperator={currentOperator}
                  operatorData={operatorData}
                  handleOperatorActions={handleOperatorActions}
                />
              </HStack>
            </VStack>
          </Flex>
          <Button
            mt="60px"
            onClick={() => handleOperatorActions.handleReset(operatorData)}
          >
            Reset Operator
          </Button>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OperatorView;
