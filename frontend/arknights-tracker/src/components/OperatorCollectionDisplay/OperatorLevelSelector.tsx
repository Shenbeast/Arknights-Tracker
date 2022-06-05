import {
  Button,
  Center,
  HStack,
  NumberInput,
  NumberInputField,
  VStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {
  OperatorAction,
  OperatorFullDetails,
  OperatorGridOperator,
} from "../../types";

interface OperatorLevelSelectorProps {
  handleOperatorActions: OperatorAction;
  operatorData: OperatorFullDetails;
  currentOperator: OperatorGridOperator | undefined;
}
const OperatorLevelSelector = ({
  currentOperator,
  handleOperatorActions,
  operatorData,
}: OperatorLevelSelectorProps) => {
  const currentElitePhase = currentOperator?.user.elitePhase;
  const currentMinLevel = 1
  const currentMaxLevel = typeof(currentElitePhase) === "number"
    ? operatorData.phases[currentElitePhase].maxLevel
    : 50;
  const currentUserLevel = currentOperator?.user.level
    ? currentOperator?.user.level
    : 1;
  const [displayedLevel, setDisplayedLevel] = useState(currentUserLevel);
  const handleInputChange = (e: any) => {
    const newLevel = parseInt(e);
    setDisplayedLevel(newLevel);
    if (currentUserLevel) {
      handleOperatorActions.handleLevel(operatorData, newLevel);
    }
  };
  useEffect(() => {
    if (currentUserLevel) {
      setDisplayedLevel(currentUserLevel);
    }
  }, [currentUserLevel]);

  const determineButtonEnabled = (levelsToIncrement : number) => {
    const newLevel = currentUserLevel + levelsToIncrement
    return (currentMinLevel <= newLevel && newLevel <= currentMaxLevel)
  }
  interface IncrementButtonProps {
    levelsToIncrement : number;
  }
  const IncrementButton = ({levelsToIncrement} : IncrementButtonProps) => {
    return (
      <Button
        w="20px"
        disabled={!determineButtonEnabled(levelsToIncrement) || !currentOperator?.user.owned}
        onClick={() =>
          currentUserLevel
            ? handleOperatorActions.handleLevel(
                operatorData,
                currentUserLevel + levelsToIncrement
              )
            : null
        }
      >
      {levelsToIncrement > 0 ? `+${levelsToIncrement.toString()}`: levelsToIncrement.toString()}
    </Button>
    )
  }

  return (
    <HStack>
      {currentOperator && (
        <>
          <Button
            w="20px"
            disabled={!currentOperator?.user.owned}
            onClick={() => handleOperatorActions.handleLevel(operatorData, 1)}
          >
            Min
          </Button>
          <IncrementButton levelsToIncrement={-10}/>
          <VStack>
          <IncrementButton levelsToIncrement={1}/>
            <NumberInput
              allowMouseWheel
              min={1}
              max={currentMaxLevel}
              value={displayedLevel}
              onChange={handleInputChange}
              size="md"
              w="70px"
              isDisabled={!currentOperator?.user.owned}
            >
              <Center>
                <NumberInputField/>
              </Center>
            </NumberInput>
          <IncrementButton levelsToIncrement={-1}/>
          </VStack>
          
          <Button
            w="20px"
            disabled={!currentOperator?.user.owned}
            onClick={() =>
              handleOperatorActions.handleLevel(operatorData, currentMaxLevel)
            }
          >
            Max
          </Button>
          <IncrementButton levelsToIncrement={10}/>
        </>
      )}
    </HStack>
  );
};

export default OperatorLevelSelector;
