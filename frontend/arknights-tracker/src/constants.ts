import { ClassNameMapping } from "./types"

export const RarityOne = "hsl(0, 0%, 62%)"
export const RarityTwo = "hsl(63, 77%, 56%)"
export const RarityThree = "hsl(197, 100%, 48%)"
export const RarityFour = "hsl(300, 37%, 78%)"
export const RarityFive = "hsl(41, 98%, 49%)"
export const RaritySix = "hsl(24, 99%, 49%)"

export const RarityColors : string[] = [
  RarityOne, RarityTwo, RarityThree, RarityFour, RarityFive, RaritySix
]

export const ClassNameMappings:  ClassNameMapping = {
  "WARRIOR": "Guard",
  "SNIPER": "Sniper",
  "TANK": "Defender",
  "MEDIC": "Medic",
  "SUPPORT": "Supporter",
  "CASTER": "Caster",
  "SPECIAL": "Specialist",
  "PIONEER": "Vanguard",
}
