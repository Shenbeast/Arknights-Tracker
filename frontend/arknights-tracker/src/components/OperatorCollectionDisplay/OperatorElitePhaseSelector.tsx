import { HStack } from "@chakra-ui/react";
import { ElitePhases, unselectedButtonColor, selectedButtonColor} from "../../constants";
import { OperatorAction, OperatorFullDetails, OperatorGridOperator } from "../../types";
import OperatorElitePhaseImage from "../images/OperatorElitePhaseImage";
import BasicButton from "./BasicButton";


interface OperatorElitePhaseImageProps {
  handleOperatorActions: OperatorAction;
  operatorData: OperatorFullDetails;
  currentOperator: OperatorGridOperator | undefined
}

const OperatorElitePhaseSelector = ({handleOperatorActions, operatorData, currentOperator} : OperatorElitePhaseImageProps) => {
  const elitePhases = operatorData.phases.map((elitePhase, index) => index)
  const determineElitePhaseButtonBorder = (elitePhase : number) => {
    if (currentOperator?.user.elitePhase === elitePhase && currentOperator?.user.owned) {
      return `1.3px solid ${selectedButtonColor}`
    } else {
      return `1.3px solid ${unselectedButtonColor}}`
    }
  }
  const determineElitePhaseButtonOpacity = (elitePhase : number) => {
    if (currentOperator?.user.elitePhase === elitePhase && currentOperator?.user.owned) {
      return 1.0
    } else {
      return 0.3
    }
  }
  return <HStack>
    {ElitePhases.map((elitePhase) => <BasicButton height="52px" width="52px" border={determineElitePhaseButtonBorder(elitePhase)} enabledOpacity={determineElitePhaseButtonOpacity(elitePhase)} disabled={!elitePhases.includes(elitePhase) || !currentOperator?.user.owned} key={elitePhase} onClick={() => handleOperatorActions.handleElitePhase(operatorData, elitePhase)}><OperatorElitePhaseImage elitePhase={elitePhase} size="35px"/></BasicButton>)}
  </HStack>
};

export default OperatorElitePhaseSelector;
