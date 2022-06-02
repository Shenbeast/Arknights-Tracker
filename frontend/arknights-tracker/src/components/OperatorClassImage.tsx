import { Image } from "@chakra-ui/react"
import { ClassNameMappings } from "../constants"

interface OperatorClassImageProps {
  className: string
  size?: string
  borderRadius?: string
}

const OperatorClassImage = ({className, size, borderRadius} : OperatorClassImageProps) => {
  const baseUrl ="https://aceship.github.io/AN-EN-Tags/img/classes/black"
  const formattedClassName = ClassNameMappings[className]
  const srcUrl = `${baseUrl}/icon_profession_${formattedClassName.toLowerCase()}_large.png`
  return (
    <Image borderRadius={borderRadius} boxSize={size} src={srcUrl} alt={className}/>
  )
}

export default OperatorClassImage