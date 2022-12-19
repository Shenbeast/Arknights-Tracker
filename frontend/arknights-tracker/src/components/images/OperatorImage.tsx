import { Image } from "@chakra-ui/react";

interface OperatorImageProps {
  id: string;
  name: string;
  size?: string;
}

const OperatorImage = ({ id, name, size }: OperatorImageProps) => {
  const baseUrl = "https://raw.githubusercontent.com/Aceship/Arknight-Images/main/avatars";
  const srcUrl = `${baseUrl}/${id}.png`;
  return <Image boxSize={size} src={srcUrl} alt={name} />;
};

export default OperatorImage;
