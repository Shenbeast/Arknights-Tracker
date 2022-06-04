import { HStack } from "@chakra-ui/react";
import { ElitePhases, unselectedButtonColor, selectedButtonColor, unselectedButtonBackgroundColor, hoveredButtonColor } from "../../constants";
import { OperatorAction, OperatorFullDetails, OperatorGridOperator } from "../../types";
import OperatorElitePhaseImage from "./OperatorElitePhaseImage";
import styled from "styled-components";

const borderRadius = "25%"
const Wrapper = styled.button<{
  $currentOperator: OperatorGridOperator | undefined,
  $elitePhase: number
}>`
  border: ${(props) =>
    (props.$currentOperator?.user.elitePhase === props.$elitePhase && props.$currentOperator.user.owned)
      ? `1.3px solid ${selectedButtonColor}`
      : `1.3px solid ${unselectedButtonColor}`};
  border-radius: ${borderRadius};
  background-color: ${unselectedButtonBackgroundColor};
  padding: 8px;
  opacity: ${(props) =>
    (props.$currentOperator?.user.elitePhase === props.$elitePhase && props.$currentOperator.user.owned)
      ? 1.0
      : 0.35}};
  &:hover {
    cursor: ${(props) =>
      props.disabled
        ? "default"
        :"pointer"};
      background-color: ${hoveredButtonColor};
      opacity: 1.0;
  }
`

interface OperatorElitePhaseImageProps {
  handleOperatorActions: OperatorAction;
  operatorData: OperatorFullDetails;
  currentOperator: OperatorGridOperator | undefined
}

const OperatorElitePhaseSelector = ({handleOperatorActions, operatorData, currentOperator} : OperatorElitePhaseImageProps) => {
  const elitePhases = operatorData.phases.map((elitePhase, index) => index)
  return <HStack>
    {ElitePhases.map((elitePhase) => <Wrapper $currentOperator = {currentOperator} disabled={!elitePhases.includes(elitePhase)} $elitePhase={elitePhase} key={elitePhase} onClick={() => handleOperatorActions.handleElitePhase(operatorData, elitePhase)}><OperatorElitePhaseImage elitePhase={elitePhase} size="35px"/></Wrapper>)}
  </HStack>
};

export default OperatorElitePhaseSelector;
