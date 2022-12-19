import { Image } from "@chakra-ui/react";

interface OperatorElitePhaseProps {
  elitePhase: number;
  size?: string;
  borderRadius?: string;
}

const OperatorElitePhaseImage = ({
  elitePhase,
  size,
  borderRadius,
}: OperatorElitePhaseProps) => {
  const baseUrl = "https://raw.githubusercontent.com/Aceship/Arknight-Images/main/ui/elite/";
  const srcUrl = `${baseUrl}/${elitePhase}.png`;
  return (
    <Image
      borderRadius={borderRadius}
      boxSize={size}
      src={srcUrl}
      alt={elitePhase.toString()}
    />
  );
};

export default OperatorElitePhaseImage;
