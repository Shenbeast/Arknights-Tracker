import { Box } from "@chakra-ui/react"
import { OperatorGridOperator } from "../types"
import styled from "styled-components"
import {RarityColors} from "../constants"
import OperatorImage from "./OperatorImage"

interface OperatorGridImageProps {
  operator: OperatorGridOperator
  selectedOperator: string
}

const handleRarityBorderColor = (rarity : number) => {
  return RarityColors[rarity]
}

const Wrapper = styled(Box)<{operator: OperatorGridOperator, selectedOperator: string, props: any}>`
  opacity: ${props => props.operator.id === props.selectedOperator ? 0.2 : 1};
  &:hover {
    opacity: 0.3;
  }
  img {
    border-bottom-width: 6px;
    border-bottom-style: solid;
    border-bottom-color: ${props => handleRarityBorderColor(props.operator.rarity)};
  }
`

const OperatorGridImage = ({operator, selectedOperator} : OperatorGridImageProps) => {
  return (
    <Wrapper operator={operator} selectedOperator={selectedOperator}>
      <OperatorImage id={operator.id} name={operator.name}/>
      <div>{operator.name}</div>
    </Wrapper>
  )
}

export default OperatorGridImage