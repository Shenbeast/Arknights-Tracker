import { Box } from "@chakra-ui/react";
import { OperatorGridOperator } from "../../types";
import styled from "styled-components";
import OperatorImage from "./OperatorImage";
import { handleRarityBorderColor } from "../../utils";
const uncheckedOpacity = 0.3;
interface OperatorGridImageProps {
  operator: OperatorGridOperator;
  selectedOperator: string;
  ownedOperators: OperatorGridOperator[];
}

const Wrapper = styled(Box)<{
  operator: OperatorGridOperator;
  $selectedOperator: string;
  $ownedOperators: OperatorGridOperator[];
}>`
  opacity: ${(props) =>
    props.$ownedOperators.find((operator) => operator.id === props.operator.id)
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
  ownedOperators,
}: OperatorGridImageProps) => {
  return (
    <Wrapper
      operator={operator}
      $selectedOperator={selectedOperator}
      $ownedOperators={ownedOperators}
    >
      <OperatorImage size="90" id={operator.id} name={operator.name} />
      <div>{operator.name}</div>
    </Wrapper>
  );
};

export default OperatorGridImage;
