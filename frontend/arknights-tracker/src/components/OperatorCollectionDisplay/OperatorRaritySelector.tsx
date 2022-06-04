import { Box, Flex } from "@chakra-ui/react";
import { OperatorFilter } from "../../types";
import OperatorRarityCard from "./OperatorRarityCard";
import styled from "styled-components";
import { SelectedFilterColor } from "../../constants";

const borderRadius = "15%";
const Wrapper = styled(Box)`
  opacity: ${(props) => (props.$toggled ? 1.0 : 0.8)};
  border: ${(props) =>
    props.$toggled
      ? `1.3px solid ${SelectedFilterColor}`
      : "1.3px solid transparent"};
  border-radius: ${borderRadius};
  box-shadow: ${(props) =>
    props.$toggled ? `0px 0px 0px 1.3px ${SelectedFilterColor} inset` : null};
  &:hover {
    border: ${(props) => (!props.$toggled ? `1.3px solid red` : null)};
    opacity: 1;
  }
`;
interface OperatorRaritySelectorProps {
  rarityFilter: OperatorFilter<number>;
  toggleRarity: (rarity: number) => void;
}

const OperatorRaritySelector = ({
  rarityFilter,
  toggleRarity,
}: OperatorRaritySelectorProps) => {
  const rarities = [1, 2, 3, 4, 5, 6];
  const handleEnter = (event: any, key: number): any => {
    if (event.charCode === 13) {
      toggleRarity(key);
    }
  };

  return (
    <Flex justifyContent={"space-evenly"}>
      {rarities.map((rarity) => (
        <Wrapper
          tabIndex="0"
          onKeyPress={(e: any) => handleEnter(e, rarity)}
          p="5"
          onClick={() => toggleRarity(rarity)}
          $toggled={rarityFilter.rarity.includes(rarity)}
        >
          <OperatorRarityCard rarity={rarity} />
        </Wrapper>
      ))}
    </Flex>
  );
};

export default OperatorRaritySelector;
