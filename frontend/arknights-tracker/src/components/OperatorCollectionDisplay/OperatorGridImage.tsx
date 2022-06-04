import { Box } from "@chakra-ui/react";
import { OperatorGridOperator } from "../../types";
import styled from "styled-components";
import OperatorImage from "./OperatorImage";
import { handleRarityBorderColor } from "../../utils";
const uncheckedOpacity = 0.3;
interface OperatorGridImageProps {
  operator: OperatorGridOperator;
  selectedOperator: string;
  operators: OperatorGridOperator[];
}

const Wrapper = styled(Box)<{
  operator: OperatorGridOperator;
  $selectedOperator: string;
  $operators: OperatorGridOperator[];
}>`
  opacity: ${(props) =>
    props.$operators.find((operator) => operator.id === props.operator.id)?.general.owned
      ? 1.0
      : uncheckedOpacity}};
  &:hover {
    opacity: 1.0;
  }
  img {
    border-bottom: 6px solid ${(props) =>
      handleRarityBorderColor(props.operator.rarity - 1)}
  }
`;

const OperatorGridImage = ({
  operator,
  selectedOperator,
  operators,
}: OperatorGridImageProps) => {
  return (
    <Wrapper
      operator={operator}
      $selectedOperator={selectedOperator}
      $operators={operators}
    >
      <OperatorImage size="90" id={operator.id} name={operator.name} />
      <div>{operator.name}</div>
    </Wrapper>
  );
};

export default OperatorGridImage;
