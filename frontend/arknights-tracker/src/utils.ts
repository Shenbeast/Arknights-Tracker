import { NullableString } from "./types"
import {RarityColors} from "./constants"


export const cleanOperatorString = (operatorString : string | NullableString)  => {
  if (typeof operatorString === "string") {
    return operatorString.replace("<@ba.kw>", "").replace("</>", "")
  }
  return null
}

export const handleRarityBorderColor = (rarity : number) => {
  return RarityColors[rarity]
}

export const cleanAlterOperatorName = (name : string) => {
  const splitName = name.split(' ')
  if (splitName.length > 2) {
    return `${splitName[0]} Alter`
  } else {
    return name
  }
}