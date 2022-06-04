import { HStack } from "@chakra-ui/react";
import { OperatorAction, OperatorFullDetails, OperatorGridOperator, OperatorPotential } from "../../types";
import OperatorPotentialImage from "./OperatorPotentialImage";
import styled from "styled-components";

interface OperatorPotentialSelectorProps {
  potentials: OperatorPotential[];
  handleOperatorActions: OperatorAction;
  operatorData: OperatorFullDetails;
  currentOperator: OperatorGridOperator | undefined
}

const Wrapper = styled.button<{
  $currentOperator: OperatorGridOperator | undefined,
  $rank: number
}>`
  opacity: ${(props) =>
    (props.$currentOperator?.user.potential === props.$rank + 1 && props.$currentOperator.user.owned)
      ? 1.0
      : 0.2}};
  &:hover {
    opacity: 1;
  }
  cursor: pointer;
`;

const OperatorPotentialSelector = ({
  potentials,
  handleOperatorActions,
  operatorData,
  currentOperator
}: OperatorPotentialSelectorProps) => {
  const operatorPotentialRanks = Object.keys(potentials).map((potential) => Number(potential));
  return (
    <HStack>
      {operatorPotentialRanks.map((rank) => (
        <Wrapper key={rank} $currentOperator={currentOperator} $rank={rank} onClick={() => handleOperatorActions.handlePotential(operatorData, rank + 1)}>
          <OperatorPotentialImage
            size="50px"
            potential={rank + 1}
          />
        </Wrapper>
      ))}
    </HStack>
  );
};

export default OperatorPotentialSelector;
