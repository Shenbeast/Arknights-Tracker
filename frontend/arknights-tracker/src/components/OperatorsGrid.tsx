import {char_meta }from "../assets/char_meta";
import { char_data } from "../assets/char_data";
import { useState, useEffect } from "react";
import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import OperatorGridImage from "./OperatorGridImage";
import { OperatorGridOperator } from "../types.js";
import OperatorView from "./OperatorView";

const OperatorsGrid = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [loading, setLoading] = useState(true)
  const [selectedOperator, setSelectedOperator] = useState("")
  const [operators, setOperators] = useState<OperatorGridOperator[]>([])
  useEffect(() => {
    const operatorsArray : OperatorGridOperator[] = []
    for (const operator in char_meta) {
      char_meta[operator].forEach((operatorVersion) => {
        const operator = char_data[operatorVersion]
        operatorsArray.push({id: operatorVersion, name: operator.name, rarity: operator.rarity})
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
    
  return (
    !loading ?
    <div>
      <Grid templateColumns="repeat(auto-fit, 90px)" gap={1} ml={8} p={15}>
        <OperatorView operator={selectedOperator} isOpen={isOpen} onClose={onClose} setSelectedOperator={setSelectedOperator}/>
          {operators.map((operator) => (
            <GridItem key={operator.id} onClick={() => setSelectedOperator(operator.id)}>
              <OperatorGridImage operator={operator} selectedOperator={selectedOperator}/>
            </GridItem>
          ))}
      </Grid>
    </div> : null
  )
}

export default OperatorsGrid;