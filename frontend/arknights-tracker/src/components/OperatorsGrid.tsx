import { char_meta } from "../assets/char_meta";
import { char_data } from "../assets/char_data";
import { useState, useEffect, useReducer, useMemo } from "react";
import { Box, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import OperatorGridImage from "./OperatorCollectionDisplay/OperatorGridImage";
import { OperatorGridOperator, OperatorFilter, OperatorFullDetails } from "../types.js";
import OperatorView from "./OperatorView";
import OperatorClassImageSelector from "./OperatorCollectionDisplay/OperatorClassImageSelector";
import OperatorRaritySelector from "./OperatorCollectionDisplay/OperatorRaritySelector";
import { cleanAlterOperatorName } from "../utils";

const OperatorsGrid = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(true);
  const [selectedOperator, setSelectedOperator] = useState("");
  const [displayedOperators, setDisplayedOperators] = useState<
    OperatorGridOperator[]
  >([]);
  const [classFilter, setClassFilter] = useState<OperatorFilter<string>>({
    class: [],
  });
  const [rarityFilter, setRarityFilter] = useState<OperatorFilter<number>>({
    rarity: [],
  });

  enum OwnedOperatorActionKind {
    OWN = "OWN",
    RESET = "RESET",
    INIT = "INIT"
  }
  interface OwnedOperatorAction {
    type: OwnedOperatorActionKind;
    operatorData?: OperatorFullDetails;
  }

  const getOperator = (newState: OperatorGridOperator[], operatorData: OperatorFullDetails) => {
    return newState.find(
      (ownedOperator) => ownedOperator.name === operatorData.name
    )
  }

  const operatorsReducer = (state: OperatorGridOperator[], action : OwnedOperatorAction) => {
    const newState = [...state]
    switch(action.type) {
      case OwnedOperatorActionKind.INIT: 
      const operatorsArray : OperatorGridOperator[] = []
      for (const operator in char_meta) {
        char_meta[operator].forEach((operatorVersion) => {
          const operator = char_data[operatorVersion];
          operatorsArray.push({
            general: { owned: false, favourite: false },
            id: operatorVersion,
            name: cleanAlterOperatorName(operator.name),
            rarity: operator.rarity + 1,
            class: operator.profession,
            skills: operator.skills,
            potential: operator.potentialRanks,
            phases: operator.phases,
          });
        });
      }
      return operatorsArray;
      case OwnedOperatorActionKind.OWN:
        console.log("called")
        if (action.operatorData) {
          const selectedOperator = newState.find(
            (ownedOperator) => ownedOperator.name === action.operatorData?.name
          )
          if (selectedOperator) {
            console.log("b4", selectedOperator.general.owned)
            selectedOperator.general.owned = !selectedOperator.general.owned
            console.log("after", selectedOperator.general.owned)
          }
        }
        console.log(newState)
        return newState
      case OwnedOperatorActionKind.RESET:
        return newState
      default:
        throw new Error()
    }
  }
  const initialOwnedOperatorsState : OperatorGridOperator[] = []
  const [operators, dispatch] = useReducer(operatorsReducer, initialOwnedOperatorsState)
  
  const handleOwn = (operatorData: OperatorFullDetails) => {
    dispatch({ type: OwnedOperatorActionKind.OWN, operatorData})
  }

  useEffect(() => {
    dispatch({ type: OwnedOperatorActionKind.INIT})
    setLoading(false);
  }, [OwnedOperatorActionKind.INIT]);

  useEffect(() => {
    if (selectedOperator) {
      onOpen();
    }
  }, [onOpen, selectedOperator]);

  const handleOperatorViewClose = () => {
    onClose()
    setSelectedOperator("")
  }

  const toggleRarity = (rarity: number) => {
    let newRarityFilter = { ...rarityFilter };
    let newRarityFilters = newRarityFilter.rarity;
    if (newRarityFilters.includes(rarity)) {
      newRarityFilter.rarity = newRarityFilters.filter(
        (item) => item !== rarity
      );
    } else {
      newRarityFilters.push(rarity);
    }
    setRarityFilter(newRarityFilter);
  };

  const toggleClass = (key: string): any => {
    let newClassFilter = { ...classFilter };
    let newClassFilters = newClassFilter.class;
    if (newClassFilters.includes(key)) {
      console.log("reached");
      newClassFilter.class = newClassFilters.filter((item) => item !== key);
    } else {
      newClassFilters.push(key);
    }
    setClassFilter(newClassFilter);
  };

  useMemo(() => {
    const filters = [classFilter, rarityFilter];
    let operatorsCopy = [...operators];
    filters.forEach((filter) => {
      operatorsCopy = [...operatorsCopy].filter((operator) => {
        const key = Object.keys(filter)[0];
        const operatorFilters: (string | number)[] = filter[key];
        const operatorValue = operator[key as keyof OperatorGridOperator];
        if (
          operatorFilters.length > 0 &&
          (typeof operatorValue === "string" ||
            typeof operatorValue === "number")
        ) {
          return operatorFilters.includes(operatorValue);
        } else {
          return true;
        }
      });
      operatorsCopy.sort(
        (operator1, operator2) => operator2.rarity - operator1.rarity
      );
      setDisplayedOperators(operatorsCopy);
    });
  }, [classFilter, rarityFilter, operators]);

  return !loading ? (
    <div>
      <Box mb="10">
        <OperatorClassImageSelector
          classFilter={classFilter}
          toggleClass={toggleClass}
        />
        <br />
        <OperatorRaritySelector
          rarityFilter={rarityFilter}
          toggleRarity={toggleRarity}
        />
      </Box>
      <Grid templateColumns="repeat(auto-fit, 90px)" gap={1} ml={8} p={15}>
        <OperatorView
          operator={selectedOperator}
          operators={operators}
          isOpen={isOpen} 
          handleOperatorViewClose={handleOperatorViewClose}
          handleOwn={handleOwn}
        />
        {displayedOperators.map((operator) => (
          <GridItem
            key={operator.id}
            onClick={() => setSelectedOperator(operator.id)}
          >
            <OperatorGridImage
              operators={operators}
              operator={operator}
              selectedOperator={selectedOperator}
            />
          </GridItem>
        ))}
      </Grid>
    </div>
  ) : null;
};

export default OperatorsGrid;
