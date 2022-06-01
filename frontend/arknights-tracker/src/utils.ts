import { NullableString } from "./types"

export const cleanOperatorString = (operatorString : string | NullableString)  => {
  if (typeof operatorString === "string") {
    return operatorString.replace("<@ba.kw>", "").replace("</>", "")
  }
  return null
}