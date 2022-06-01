import { Image } from "@chakra-ui/react"
import { ClassNameMappings } from "../constants"

interface OperatorClassImageProps {
  className: string
}

const OperatorClassImage = ({className} : OperatorClassImageProps) => {
  const baseUrl ="https://aceship.github.io/AN-EN-Tags/img/classes/black"
  const formattedClassName = ClassNameMappings[className]
  const srcUrl = `${baseUrl}/icon_profession_${formattedClassName.toLowerCase()}_large.png`
  console.log(srcUrl)
  return (
    <Image src={srcUrl} alt={className}/>
  )
}

export default OperatorClassImage