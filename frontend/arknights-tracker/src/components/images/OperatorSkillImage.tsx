import { CloseIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";

interface OperatorSkillImageProps {
  skillId: string | null | undefined;
  size?: string;
  borderRadius?: string;
}

const OperatorSkillImage = ({
  skillId,
  size,
  borderRadius,
}: OperatorSkillImageProps) => {
  const baseUrl = "https://raw.githubusercontent.com/Aceship/Arknight-Images/main/skills/skill_icon_";
  const srcUrl = `${baseUrl}${skillId}.png`;
  return (
    skillId ? 
    <Image
      borderRadius={borderRadius}
      boxSize={size}
      src={srcUrl}
      alt={skillId ? skillId : "No skill"}
    /> :
    <CloseIcon boxSize={size}/>
  );
};

export default OperatorSkillImage;
