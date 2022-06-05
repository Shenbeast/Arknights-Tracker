import { Center, HStack } from "@chakra-ui/react";
import { OperatorFilter } from "../../types";
import OperatorRarityCard from "./OperatorRarityCard";
import styled from "styled-components";
import { SelectedFilterColor } from "../../constants";

const borderRadius = "15%";
const Wrapper = styled(Center)`
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
    <HStack justifyContent="center">
      {rarities.map((rarity) => (
        <Wrapper
          key={rarity}
          tabIndex="0"
          onKeyPress={(e: any) => handleEnter(e, rarity)}
          p="5"
          onClick={() => toggleRarity(rarity)}
          $toggled={rarityFilter.rarity.includes(rarity)}
        >
          <OperatorRarityCard rarity={rarity} />
        </Wrapper>
      ))}
    </HStack>
  );
};

export default OperatorRaritySelector;
