import { Box } from "@chakra-ui/react"
import {StarIcon} from "@chakra-ui/icons"
import styled from "styled-components"
import { handleRarityBorderColor } from "../../utils";

interface OperatorRarityCardProps {
  rarity : number;
}

const Wrapper = styled(Box)`
  border-bottom: 6px solid ${props => handleRarityBorderColor(props.rarity - 1)}
`

const OperatorRarityCard = ({rarity} : OperatorRarityCardProps) => {
  return (
    <Wrapper rarity={rarity}>
      {rarity} <StarIcon/>
    </Wrapper>
  )
}

export default OperatorRarityCard