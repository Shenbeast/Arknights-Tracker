import { char_meta } from "../assets/char_meta";
import { char_data } from "../assets/char_data";
import { modules_data } from "../assets/modules_data";
import { useState, useEffect, useReducer, useMemo } from "react";
import {
  Box,
  Center,
  Checkbox,
  Grid,
  GridItem,
  Input,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import OperatorGridImage from "./images/OperatorGridImage";
import {
  OperatorGridOperator,
  OperatorFilter,
  OperatorFullDetails,
  OperatorAction,
  UserOperatorGeneral,
  UserOperatorSkills,
} from "../types.js";
import OperatorView from "./OperatorView";
import OperatorClassImageSelector from "./OperatorCollectionDisplay/OperatorClassImageSelector";
import OperatorRaritySelector from "./OperatorCollectionDisplay/OperatorRaritySelector";
import { cleanAlterOperatorName } from "../utils";
import useLocalStorage from "../hooks/useLocalStorage";
import { selectedButtonColor } from "../constants";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [ownedFilter, setOwnedFilter] = useState(false);
  const [favouriteFilter, setFavouriteFilter] = useState(false)

  const handleSearchChange = (event: any) => setSearchTerm(event.target.value);
  const [existingOwnedOperators, setExistingOwnedOperators] = useLocalStorage(
    "ownedOperators",
    []
  );

  enum OwnedOperatorActionKind {
    OWN = "OWN",
    FAVOURITE = "FAVOURITE",
    POTENTIAL = "POTENTIAL",
    ELITE_PHASE = "ELITE_PHASE",
    INIT = "INIT",
    LEVEL = "LEVEL",
    MODULE = "MODULE",
    MASTERY = "MASTERY",
    RESET = "RESET",
  }
  interface OwnedOperatorAction {
    type: OwnedOperatorActionKind;
    operatorData?: OperatorFullDetails;
    potential?: number;
    elitePhase?: number;
    level?: number;
    module?: string;
    skill?: string;
    mastery?: number;
  }

  const getOperator = (
    newState: OperatorGridOperator[],
    operatorData: OperatorFullDetails
  ) => {
    return newState.find(
      (ownedOperator) => ownedOperator.id === operatorData.id
    );
  };

  const initialUserOperatorState: UserOperatorGeneral = {
    owned: false,
    favourite: false,
    potential: 1,
    elitePhase: 0,
    level: 1,
    module: "",
    skills: { s1: null, s2: null, s3: null },
  };

  const operatorsReducer = (
    state: OperatorGridOperator[],
    action: OwnedOperatorAction
  ) => {
    const newState = [...state];
    switch (action.type) {
      case OwnedOperatorActionKind.INIT:
        //console.log("existing user operators", existingOwnedOperators);
        const temp : any[] = []
        const operatorsArray: OperatorGridOperator[] =
          existingOwnedOperators.length > 0 ? existingOwnedOperators : [];
        if (existingOwnedOperators.length === 0) {
          for (const operator in char_meta) {
            char_meta[operator].forEach((operatorVersion) => {
              const baseModuleKey = "uniequip_002_";
              const operatorIdName = operatorVersion.split("_").slice(-1)[0];
              const moduleKey = `${baseModuleKey}${operatorIdName}`;
              const module = modules_data[moduleKey];
              const operator = char_data[operatorVersion];
              if (operator.skills.length !== 0) {
                temp.push({
                  id: operatorVersion,
                  name: cleanAlterOperatorName(operator.name),
                  position: operator.position,
                  tags: operator.tagList,
                  rarity: operator.rarity + 1,
                  group: operator.groupId,
                  class: operator.profession,
                  subclass: operator.subProfessionId,
                  skills: operator.skills,
                  module: module !== undefined,
                  nation: operator.nationId
                })
                operatorsArray.push({
                  user: {
                    owned: false,
                    favourite: false,
                    potential: 1,
                    elitePhase: 0,
                    level: 1,
                    module: "",
                    skills: { s1: null, s2: null, s3: null },
                  },
                  id: operatorVersion,
                  name: cleanAlterOperatorName(operator.name),
                  rarity: operator.rarity + 1,
                  class: operator.profession,
                  skills: operator.skills,
                  potential: operator.potentialRanks,
                  phases: operator.phases,
                });
              }
              
            });
          }
        }
        //console.log("initialised");
        //console.log(operatorsArray.length)
        return operatorsArray;
      case OwnedOperatorActionKind.OWN:
        if (action.operatorData) {
          const selectedOperator = getOperator(newState, action.operatorData);
          if (selectedOperator) {
            if (!selectedOperator.user.owned) {
              selectedOperator.user = initialUserOperatorState;
              selectedOperator.user.owned = true;
            } else {
              selectedOperator.user = initialUserOperatorState;
            }
          }
        }
        return newState;
      case OwnedOperatorActionKind.FAVOURITE:
        if (action.operatorData) {
          const selectedOperator = getOperator(newState, action.operatorData);
          if (selectedOperator) {
            if (
              !selectedOperator.user.owned &&
              !selectedOperator.user.favourite
            ) {
              selectedOperator.user.owned = true;
              selectedOperator.user.favourite = true;
            } else {
              selectedOperator.user.favourite =
                !selectedOperator.user.favourite;
            }
          }
        }
        return newState;
      case OwnedOperatorActionKind.POTENTIAL:
        if (action.operatorData && typeof action.potential === "number") {
          const selectedOperator = getOperator(newState, action.operatorData);
          if (selectedOperator) {
            selectedOperator.user.potential = action.potential;
          }
        }
        return newState;
      case OwnedOperatorActionKind.ELITE_PHASE:
        if (action.operatorData && typeof action.elitePhase === "number") {
          const selectedOperator = getOperator(newState, action.operatorData);
          if (selectedOperator) {
            selectedOperator.user.elitePhase = action.elitePhase;
            selectedOperator.user.level = 1;
            if (action.elitePhase !== 2) {
              selectedOperator.user.skills = {s1: null, s2: null, s3: null}
            }
          }
        }
        return newState;
      case OwnedOperatorActionKind.LEVEL:
        if (action.operatorData && typeof action.level === "number") {
          const selectedOperator = getOperator(newState, action.operatorData);
          if (selectedOperator) {
            const max =
              action.operatorData.phases[selectedOperator.user.elitePhase]
                .maxLevel;
            const min = 1;
            if (min <= action.level && action.level <= max) {
              selectedOperator.user.level = action.level;
            }
          }
        }
        return newState;
      case OwnedOperatorActionKind.MODULE:
        if (action.operatorData && typeof action.module === "string") {
          const selectedOperator = getOperator(newState, action.operatorData);
          if (selectedOperator) {
            selectedOperator.user.module = selectedOperator.user.module
              ? ""
              : action.module;
          }
        }
        return newState;
      case OwnedOperatorActionKind.MASTERY:
        if (
          action.operatorData &&
          typeof action.skill === "string" &&
          typeof action.mastery === "number"
        ) {
          const selectedOperator = getOperator(newState, action.operatorData);
          if (selectedOperator) {
            selectedOperator.user.skills[
              action.skill as keyof UserOperatorSkills
            ] = action.mastery;
          }
        }
        return newState;
      case OwnedOperatorActionKind.RESET:
        if (action.operatorData) {
          const selectedOperator = getOperator(newState, action.operatorData);
          if (selectedOperator) {
            selectedOperator.user = initialUserOperatorState;
          }
        }
        return newState;

      default:
        throw new Error();
    }
  };

  const initialOwnedOperatorsState: OperatorGridOperator[] = [];
  const [operators, dispatch] = useReducer(
    operatorsReducer,
    initialOwnedOperatorsState
  );
  const handleOwn = (operatorData: OperatorFullDetails) => {
    dispatch({ type: OwnedOperatorActionKind.OWN, operatorData });
  };

  const handleFavourite = (operatorData: OperatorFullDetails) => {
    dispatch({ type: OwnedOperatorActionKind.FAVOURITE, operatorData });
  };

  const handlePotential = (
    operatorData: OperatorFullDetails,
    potential: number
  ) => {
    dispatch({
      type: OwnedOperatorActionKind.POTENTIAL,
      operatorData,
      potential,
    });
  };

  const handleElitePhase = (
    operatorData: OperatorFullDetails,
    elitePhase: number
  ) => {
    dispatch({
      type: OwnedOperatorActionKind.ELITE_PHASE,
      operatorData,
      elitePhase,
    });
  };

  const handleLevel = (operatorData: OperatorFullDetails, level: number) => {
    dispatch({ type: OwnedOperatorActionKind.LEVEL, operatorData, level });
  };

  const handleModule = (operatorData: OperatorFullDetails, module: string) => {
    dispatch({ type: OwnedOperatorActionKind.MODULE, operatorData, module });
  };

  const handleReset = (operatorData: OperatorFullDetails) => {
    dispatch({ type: OwnedOperatorActionKind.RESET, operatorData });
  };

  const handleMastery = (
    operatorData: OperatorFullDetails,
    skill: string,
    mastery: number
  ) => {
    dispatch({
      type: OwnedOperatorActionKind.MASTERY,
      operatorData,
      skill,
      mastery,
    });
  };

  const handleOperatorActions: OperatorAction = {
    handleOwn,
    handleFavourite,
    handlePotential,
    handleElitePhase,
    handleLevel,
    handleModule,
    handleReset,
    handleMastery,
  };

  useEffect(() => {
    dispatch({ type: OwnedOperatorActionKind.INIT });
    setLoading(false);
  }, [OwnedOperatorActionKind.INIT]);

  useEffect(() => {
    if (selectedOperator) {
      onOpen();
    }
  }, [onOpen, selectedOperator]);

  useEffect(() => {
    if (!loading) {
      setExistingOwnedOperators(operators);
    }
  }, [operators, setExistingOwnedOperators, loading]);

  const handleOperatorViewClose = () => {
    onClose();
    setSelectedOperator("");
  };

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
      newClassFilter.class = newClassFilters.filter((item) => item !== key);
    } else {
      newClassFilters.push(key);
    }
    setClassFilter(newClassFilter);
  };

  useMemo(() => {
    const filters = [classFilter, rarityFilter];
    let operatorsCopy = [...operators];
    if (searchTerm) {
      operatorsCopy = [...operatorsCopy].filter((operator) => {
        return operator.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
    if (ownedFilter) {
      operatorsCopy = [...operatorsCopy].filter((operator) => {
        return operator.user.owned;
      });
    }
    if (favouriteFilter) {
      operatorsCopy = [...operatorsCopy].filter((operator) => {
        return operator.user.favourite;
      });
    }
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
    });
    operatorsCopy.sort(
      (operator1, operator2) => operator2.rarity - operator1.rarity
    );
    setDisplayedOperators(operatorsCopy);
  }, [classFilter, rarityFilter, operators, searchTerm, ownedFilter, favouriteFilter]);

  return !loading ? (
    <Box>
      <VStack>
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
          <br />
          <Center>
            <Checkbox
              isChecked={ownedFilter}
              onChange={() => setOwnedFilter(!ownedFilter)}
              paddingLeft="5px"
            >
              Owned operators
            </Checkbox>
            <Checkbox
              isChecked={favouriteFilter}
              onChange={() => setFavouriteFilter(!favouriteFilter)}
              ml="20px"
              paddingLeft="5px"
            >
              Favourite operators
            </Checkbox>
          </Center>
          
          <br/>
          <Input
            w="400px"
            mt="5px"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for operator name"
            size="lg"
            fontSize="24px"
            textAlign="center"
            _placeholder={{ color: selectedButtonColor }}
          />
        </Box>
      </VStack>
      <Grid templateColumns="repeat(auto-fit, 90px)" gap={1} ml={20} p={27}>
        <OperatorView
          operatorId={selectedOperator}
          operators={operators}
          isOpen={isOpen}
          handleOperatorViewClose={handleOperatorViewClose}
          handleOperatorActions={handleOperatorActions}
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
    </Box>
  ) : null;
};

export default OperatorsGrid;
