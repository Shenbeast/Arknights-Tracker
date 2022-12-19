import { CloseIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";
import { NullableString } from "../../types";


interface OperatorModuleImageProps {
  module: NullableString;
  size?: string;
  borderRadius?: string;
}

const OperatorModuleImage = ({
  module,
  size,
  borderRadius,
}: OperatorModuleImageProps) => {
  const baseUrl = "https://raw.githubusercontent.com/Aceship/Arknight-Images/main/equip/icon";
  const srcUrl = `${baseUrl}/${module}.png`;
  return (
    module ? 
    <Image
      borderRadius={borderRadius}
      boxSize={size}
      src={srcUrl}
      alt={module ? module : "No module released for this operator"}
    /> :
    <CloseIcon/>
  );
};

export default OperatorModuleImage;
