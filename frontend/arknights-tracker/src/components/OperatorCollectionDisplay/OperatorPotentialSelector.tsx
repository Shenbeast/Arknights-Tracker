import { Box, HStack } from "@chakra-ui/react";
import { OperatorPotential } from "../../types";
import OperatorPotentialImage from "./OperatorPotentialImage";
import styled from "styled-components"

interface OperatorPotentialSelectorProps {
  potentials: OperatorPotential[]
}

const Wrapper = styled(Box)`
  opacity: 0.3;
  &:hover {
    opacity: 1.0;
  }
  cursor: pointer;
`

const OperatorPotentialSelector = ({potentials} : OperatorPotentialSelectorProps) => {
  const operatorPotentialRanks = Object.keys(potentials)
  return (
    <HStack>
      {operatorPotentialRanks.map((rank) => (
        <Wrapper><OperatorPotentialImage size="50px" potential={(Number(rank) + 1).toString()}/></Wrapper>
      ))}
    </HStack>
  )
}

export default OperatorPotentialSelector