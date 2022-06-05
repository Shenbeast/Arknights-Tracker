import { Image } from "@chakra-ui/react";

interface OperatorMasteryImageProps {
  mastery: number;
  size?: string;
  borderRadius?: string;
}

const OperatorMasteryImage = ({
  mastery,
  size,
  borderRadius,
}: OperatorMasteryImageProps) => {
  const baseUrl = "https://aceship.github.io/AN-EN-Tags/img/ui/rank/m-";
  const srcUrl = `${baseUrl}${mastery}.png`;
  return (
    <Image
      borderRadius={borderRadius}
      boxSize={size}
      src={srcUrl}
      alt={mastery.toString()}
    />
  );
};

export default OperatorMasteryImage;
