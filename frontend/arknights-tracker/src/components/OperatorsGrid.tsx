import {char_meta }from "../assets/char_meta";
import { char_data } from "../assets/char_data";
import { useState, useEffect, useMemo } from "react";
import { Box, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import OperatorGridImage from "./OperatorGridImage";
import { OperatorGridOperator, OperatorFilter } from "../types.js";
import OperatorView from "./OperatorView";
import OperatorClassImageSelector from "./OperatorClassImageSelector";
import OperatorRaritySelector from "./OperatorRaritySelector";
import { cleanAlterOperatorName } from "../utils";

const OperatorsGrid = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [loading, setLoading] = useState(true)
  const [selectedOperator, setSelectedOperator] = useState("")
  const [operators, setOperators] = useState<OperatorGridOperator[]>([])
  const [displayedOperators, setDisplayedOperators] = useState<OperatorGridOperator[]>([])
  const [classFilter, setClassFilter] = useState<OperatorFilter<string>>({"class": []})
  const [rarityFilter, setRarityFilter] = useState<OperatorFilter<number>>({"rarity": []})
  const [ownedOperators, setOwnedOperators] = useState<OperatorGridOperator[]>([])
  console.log(ownedOperators)

  useEffect(() => {
    const operatorsArray : OperatorGridOperator[] = []
    for (const operator in char_meta) {
      char_meta[operator].forEach((operatorVersion) => {
        const operator = char_data[operatorVersion]
        operatorsArray.push({id: operatorVersion, name: cleanAlterOperatorName(operator.name) , rarity: operator.rarity + 1, class: operator.profession})
      })
    }
    setOperators(operatorsArray)
    setLoading(false)
  }, [])
  useEffect(() => {
    if (selectedOperator) {
      onOpen()
    }
  }, [onOpen, selectedOperator])

  useMemo(() => {
    const filters = [classFilter, rarityFilter]
    let operatorsCopy = [...operators]
    filters.forEach((filter) => {
      operatorsCopy = [...operatorsCopy].filter((operator) => {
        const key = Object.keys(filter)[0]
        const operatorFilters : (string | number)[] = filter[key]
        const operatorValue = operator[key as keyof OperatorGridOperator]
        if (operatorFilters.length > 0) {
          return operatorFilters.includes(operatorValue)
        } else {
          return true
        }
      })
      operatorsCopy.sort((operator1, operator2) => operator2.rarity - operator1.rarity)
      setDisplayedOperators(operatorsCopy)
    })

  }, [classFilter, rarityFilter, operators])
  
  return (
    !loading ?
    <div>
      <Box mb="10">
        <OperatorClassImageSelector  classFilter={classFilter} setClassFilter={setClassFilter}/>
        <br/>
        <OperatorRaritySelector rarityFilter={rarityFilter} setRarityFilter={setRarityFilter}/>
      </Box>
      <Grid templateColumns="repeat(auto-fit, 90px)" gap={1} ml={8} p={15}>
        <OperatorView operators={operators} operator={selectedOperator} isOpen={isOpen} onClose={onClose} setSelectedOperator={setSelectedOperator} ownedOperators={ownedOperators} setOwnedOperators={setOwnedOperators}/>
          {displayedOperators.map((operator) => (
            <GridItem key={operator.id} onClick={() => setSelectedOperator(operator.id)}>
              <OperatorGridImage ownedOperators={ownedOperators} operator={operator} selectedOperator={selectedOperator}/>
            </GridItem>
          ))}
      </Grid>
    </div> : null
  )
}

export default OperatorsGrid;