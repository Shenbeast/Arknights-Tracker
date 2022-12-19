import { Image } from "@chakra-ui/react";

interface OperatorPotentialImageProps {
  potential: number;
  size?: string;
  borderRadius?: string;
}

const OperatorPotentialImage = ({
  potential,
  size,
  borderRadius,
}: OperatorPotentialImageProps) => {
  const baseUrl = "https://raw.githubusercontent.com/Aceship/Arknight-Images/main/ui/potential";
  const srcUrl = `${baseUrl}/${potential}.png`;
  return (
    <Image
      borderRadius={borderRadius}
      boxSize={size}
      src={srcUrl}
      alt={potential.toString()}
    />
  );
};

export default OperatorPotentialImage;
