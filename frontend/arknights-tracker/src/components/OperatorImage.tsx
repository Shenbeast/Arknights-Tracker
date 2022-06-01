import { Image } from "@chakra-ui/react"

interface OperatorImageProps {
  id: string
  name: string
}

const OperatorImage = ({id, name} : OperatorImageProps) => {
  const baseUrl =" https://aceship.github.io/AN-EN-Tags/img/avatars"
  const srcUrl = `${baseUrl}/${id}.png`
  return (
    <Image src={srcUrl} alt={name}/>
  )
}

export default OperatorImage