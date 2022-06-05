import { Box } from "@chakra-ui/react";
import { OperatorGridOperator } from "../../types";
import styled from "styled-components";
import OperatorImage from "./OperatorImage";
import { handleRarityBorderColor } from "../../utils";
import { FaHeart } from "react-icons/fa";
const uncheckedOpacity = 0.3;
interface OperatorGridImageProps {
  operator: OperatorGridOperator;
  selectedOperator: string;
  operators: OperatorGridOperator[];
}

const Wrapper = styled(Box)<{
  operator: OperatorGridOperator;
}>`
  opacity: ${(props) =>
    props.$operator.user.owned
      ? 1.0
      : uncheckedOpacity}};
  &:hover {
    opacity: 1.0;
  }
  img {
    border-bottom: 6px solid ${(props) =>
      handleRarityBorderColor(props.$operator.rarity - 1)}
  }
`;

const OperatorGridImage = ({
  operator,
}: OperatorGridImageProps) => {
  return (
    <Wrapper
      $operator={operator}
    >
      <OperatorImage size="90" id={operator.id} name={operator.name} />
      {operator.user.favourite && <FaHeart color="red" style={{marginTop: "-80px"}}/>}
      <div style={{marginTop: operator.user.favourite ? "60px" : "0px"}}>{operator.name}</div>
    </Wrapper>
  );
};

export default OperatorGridImage;
