import { HStack } from "@chakra-ui/react";
import BasicButton from "./BasicButton";
import { FaHeart } from "react-icons/fa";
import { OperatorAction, OperatorFullDetails, OperatorGridOperator } from "../../types";
import { selectedButtonColor, unselectedButtonColor } from "../../constants";

interface OperatorGeneralSelectorProps {
  handleOperatorActions: OperatorAction;
  operatorData: OperatorFullDetails;
  currentOperator: OperatorGridOperator | undefined
}
const OperatorGeneralSelector = ({currentOperator, handleOperatorActions, operatorData} : OperatorGeneralSelectorProps) => {
  const determineOwnButtonBorder = currentOperator?.user.owned ? `1.3px solid ${selectedButtonColor}` : `1.3px solid ${unselectedButtonColor}}`
  const determineFavouriteButtonBorder = currentOperator?.user.favourite ? `1.3px solid ${selectedButtonColor}` : `1.3px solid ${unselectedButtonColor}`
  return (
    <HStack spacing="10px">
      <BasicButton border={determineOwnButtonBorder} height="40px" width="70px" onClick={() => handleOperatorActions.handleOwn(operatorData)}>Own</BasicButton>
      <BasicButton border={determineFavouriteButtonBorder} height="40px" width="70px" onClick={() => handleOperatorActions.handleFavourite(operatorData)} aria-label="Favourite"><FaHeart color={currentOperator?.user.favourite ? "red" : "white"}/></BasicButton>
    </HStack>
  );
};

export default OperatorGeneralSelector;