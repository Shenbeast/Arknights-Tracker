import { HStack, Tooltip, VStack } from "@chakra-ui/react";
import BasicButton from "./BasicButton";
import {
  OperatorAction,
  OperatorFullDetails,
  OperatorGridOperator,
  SkillDataList,
  UserOperatorSkills,
} from "../../types";
import { selectedButtonColor, unselectedButtonColor } from "../../constants";
import OperatorMasteryImage from "../images/OperatorMasteryImage";
import OperatorSkillImage from "../images/OperatorSkillImage";
import { skill_data } from "../../assets/skill_data";
import React from "react";

interface OperatorMasterySelectorProps {
  handleOperatorActions: OperatorAction;
  operatorData: OperatorFullDetails;
  currentOperator: OperatorGridOperator | undefined;
}
const OperatorMasterySelector = ({
  currentOperator,
  handleOperatorActions,
  operatorData,
}: OperatorMasterySelectorProps) => {
  const skills = ["s1", "s2", "s3"];
  const masteryLevels = [0, 1, 2, 3];
  const operatorSkills = currentOperator?.skills;
  const getSkillId = (id: number) => {
    if (operatorSkills !== undefined) {
      return operatorSkills[id]?.skillId;
    } else {
      return null;
    }
  };

  const determineMasteryButtonBorder = (skill: string, mastery: number) => {
    if (
      currentOperator?.user?.skills &&
      currentOperator?.user?.skills[skill as keyof UserOperatorSkills] ===
        mastery &&
      currentOperator?.user.owned
    ) {
      return `1.3px solid ${selectedButtonColor}`;
    } else {
      return `1.3px solid ${unselectedButtonColor}}`;
    }
  };
  const determineMasteryButtonOpacity = (skill: string, mastery: number) => {
    if (
      currentOperator?.user?.skills &&
      currentOperator?.user?.skills[skill as keyof UserOperatorSkills] ===
        mastery &&
      currentOperator?.user.owned
    ) {
      return 1.0;
    } else {
      return 0.3;
    }
  };

  return (
    <VStack spacing="18px">
      {skills?.map((skill, index) => (
        <React.Fragment key={skill}>
          <HStack spacing="14px">
            <Tooltip
              key={skill}
              label={
                getSkillId(index)
                  ? skill_data[getSkillId(index) as keyof SkillDataList]
                      .levels[0].description
                  : "No skill"
              }
            >
              <span>
                <OperatorSkillImage
                  size="60px"
                  skillId={getSkillId(index) ? getSkillId(index) : null}
                />
              </span>
            </Tooltip>
            {masteryLevels.map((masteryLevel) => (
              <BasicButton
                key={masteryLevel}
                width="45px"
                height="45px"
                border={determineMasteryButtonBorder(skill, masteryLevel)}
                enabledOpacity={determineMasteryButtonOpacity(
                  skill,
                  masteryLevel
                )}
                disabled={!getSkillId(index) || !currentOperator?.user.owned || currentOperator?.user.elitePhase < 2}
                onClick={() => handleOperatorActions.handleMastery(operatorData, skill, masteryLevel)}
              >
                <OperatorMasteryImage mastery={masteryLevel} size="36px" />
              </BasicButton>
            ))}
          </HStack>
        </React.Fragment>
      ))}
    </VStack>
  );
};

export default OperatorMasterySelector;
