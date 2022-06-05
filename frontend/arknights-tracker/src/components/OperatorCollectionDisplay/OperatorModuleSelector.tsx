import { HStack, VStack, Text } from "@chakra-ui/react";
import BasicButton from "./BasicButton";
import {
  OperatorAction,
  OperatorFullDetails,
  OperatorGridOperator,
} from "../../types";
import { selectedButtonColor, unselectedButtonColor } from "../../constants";
import { modules_data } from "../../assets/modules_data";
import OperatorModuleImage from "./OperatorModuleImage";

interface OperatorModuleSelectorProps {
  handleOperatorActions: OperatorAction;
  operatorData: OperatorFullDetails;
  currentOperator: OperatorGridOperator | undefined;
}
const OperatorModuleSelector = ({
  currentOperator,
  handleOperatorActions,
  operatorData,
}: OperatorModuleSelectorProps) => {
  const baseModuleKey = "uniequip_002_";
  const operatorIdName = currentOperator?.id.split("_").slice(-1)[0];
  const moduleKey = `${baseModuleKey}${operatorIdName}`;
  const module = modules_data[moduleKey];
  const determineModuleButtonBorder = currentOperator?.user.module
    ? `1.3px solid ${selectedButtonColor}`
    : `1.3px solid ${unselectedButtonColor}`;
  return (
    <HStack>
      <VStack>
        <BasicButton
          disabled={!module || !currentOperator?.user.owned}
          border={determineModuleButtonBorder}
          height="60px"
          width="66px"
          onClick={module ? () => handleOperatorActions.handleModule(operatorData, moduleKey) : null}
          aria-label="Favourite"
        >
          <OperatorModuleImage module={module ? moduleKey : null}/>
        </BasicButton>
        {!module && <Text w="150px">No Module Available</Text>}
      </VStack>
    </HStack>
  );
};

export default OperatorModuleSelector;
