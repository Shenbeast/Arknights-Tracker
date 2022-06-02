import { Box, Flex } from "@chakra-ui/react"
import { ClassNameMappings, SelectedFilterColor } from "../constants"
import OperatorClassImage from "./OperatorClassImage"
import styled from "styled-components"
import {OperatorFilter} from "../types"

interface OperatorClassImageSelectorProps {
  classFilter: OperatorFilter<string>
  setClassFilter: React.Dispatch<React.SetStateAction<OperatorFilter<string>>>;
}

const borderRadius = "15%"

const Wrapper = styled(Box)<{$toggled: boolean}>`
  opacity: ${props => props.$toggled ? 1.0 : 0.8};
  border: ${props => props.$toggled ? `1.3px solid ${SelectedFilterColor}` : "1.3px solid transparent"};
  border-radius: ${borderRadius};
  box-shadow: ${props => props.$toggled ? `0px 0px 0px 1.3px ${SelectedFilterColor} inset` : null};;
  &:hover {
    border: ${props => !props.$toggled ? `1.3px solid red` : null};
    opacity: 1.0;
  }
`

const OperatorClassImageSelector = ({classFilter, setClassFilter} : OperatorClassImageSelectorProps) => {
  const toggleClass = (key : string): any => {
    let newClassFilter = {...classFilter}
    let newClassFilters = newClassFilter.class
    if (newClassFilters.includes(key)) {
      console.log("reached")
      newClassFilter.class = newClassFilters.filter((item) => item!==key)
    } else {
      newClassFilters.push(key)
    }
    setClassFilter(newClassFilter)
  }
  const handleEnter = (event: any, key : string) : any => {
    if (event.charCode === 13) {
      toggleClass(key)
    }
  }
  return (
    <Flex justifyContent="space-evenly">
      {Object.keys(ClassNameMappings).map((key) =>  <Wrapper key={key} tabIndex="0" onKeyPress={(e : any) => handleEnter(e, key)} onClick={() => toggleClass(key)} $toggled={classFilter.class.includes(key)}><OperatorClassImage borderRadius={borderRadius} size="70" className={key} /></Wrapper>)}
    </Flex>
  )
}

export default OperatorClassImageSelector