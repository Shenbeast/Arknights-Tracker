import { HStack } from "@chakra-ui/react";
import { OperatorAction, OperatorFullDetails, OperatorGridOperator, OperatorPotential } from "../../types";
import OperatorPotentialImage from "../images/OperatorPotentialImage";
import styled from "styled-components";
import BasicButton from "./BasicButton";
import { selectedButtonColor, unselectedButtonColor } from "../../constants";

interface OperatorPotentialSelectorProps {
  potentials: OperatorPotential[];
  handleOperatorActions: OperatorAction;
  operatorData: OperatorFullDetails;
  currentOperator: OperatorGridOperator | undefined
}



// (props.$currentOperator?.user.potential === props.$rank + 1 && props.$currentOperator.user.owned)
// ? 1.0
// : 0.2}};
const OperatorPotentialSelector = ({
  potentials,
  handleOperatorActions,
  operatorData,
  currentOperator
}: OperatorPotentialSelectorProps) => {
  const operatorPotentialRanks = Object.keys(potentials).map((potential) => Number(potential));
  const determinePotentialButtonBorder = (rank : number) => {
    if (currentOperator?.user.potential === rank + 1 && currentOperator?.user.owned) {
      return `1.3px solid ${selectedButtonColor}`
    } else {
      return `1.3px solid ${unselectedButtonColor}}`
    }
  }
  const determinePotentialButtonOpacity = (rank : number) => {
    if (currentOperator?.user.potential === rank + 1 && currentOperator?.user.owned) {
      return 1.0
    } else {
      return 0.3
    }
  }
  return (
    <HStack>
      {operatorPotentialRanks.map((rank) => (
        <BasicButton border={determinePotentialButtonBorder(rank)} enabledOpacity={determinePotentialButtonOpacity(rank)} height="40px" width="50px" disabled={!currentOperator?.user.owned} key={rank} onClick={() => handleOperatorActions.handlePotential(operatorData, rank + 1)}>
          <OperatorPotentialImage
            size="30px"
            potential={rank + 1}
          />
        </BasicButton>
      ))}
    </HStack>
  );
};

export default OperatorPotentialSelector;
