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
  const baseUrl = "https://aceship.github.io/AN-EN-Tags/img/ui/potential";
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
