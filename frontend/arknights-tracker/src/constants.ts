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

export const SelectedFilterColor = "hsl(43, 87%, 76%)"
export const unselectedButtonColor = "hsl(60, 1%, 33%)"
export const selectedButtonColor = "hsl(43, 87%, 76%)"
export const hoveredButtonColor = "hsl(218, 12%, 35%)"
export const unselectedButtonBackgroundColor = "hsl(216, 17%, 29%)"

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

export const ElitePhases : number[] = [0, 1, 2]

// export const OwnedSixStars: OperatorGridOperator[] = [
//   {
//     "id": "char_437_mizuki",
//     "name": "Mizuki",
//     "rarity": 6,
//     "class": "SPECIAL"
//   },
//   {
//     "id": "char_1014_nearl2",
//     "name": "Nearl the Radiant Knight",
//     "rarity": 6,
//     "class": "WARRIOR"
//   },
//   {
//     "id": "char_103_angel",
//     "name": "Exusiai",
//     "rarity": 6,
//     "class": "SNIPER"
//   },
//   {
//     "id": "char_456_ash",
//     "name": "Ash",
//     "rarity": 6,
//     "class": "SNIPER"
//   },
//   {
//     "id": "char_340_shwaz",
//     "name": "Schwarz",
//     "rarity": 6,
//     "class": "SNIPER"
//   },
//   {
//     "id": "char_112_siege",
//     "name": "Siege",
//     "rarity": 6,
//     "class": "PIONEER"
//   },
//   {
//     "id": "char_222_bpipe",
//     "name": "Bagpipe",
//     "rarity": 6,
//     "class": "PIONEER"
//   },
//   {
//     "id": "char_362_saga",
//     "name": "Saga",
//     "rarity": 6,
//     "class": "PIONEER"
//   },
//   {
//     "id": "char_479_sleach",
//     "name": "Saileach",
//     "rarity": 6,
//     "class": "PIONEER"
//   },
//   {
//     "id": "char_134_ifrit",
//     "name": "Ifrit",
//     "rarity": 6,
//     "class": "CASTER"
//   },
//   {
//     "id": "char_180_amgoat",
//     "name": "Eyjafjalla",
//     "rarity": 6,
//     "class": "CASTER"
//   },
//   {
//     "id": "char_291_aglina",
//     "name": "Angelina",
//     "rarity": 6,
//     "class": "SUPPORT"
//   },
//   {
//     "id": "char_358_lisa",
//     "name": "Suzuran",
//     "rarity": 6,
//     "class": "SUPPORT"
//   },
//   {
//     "id": "char_248_mgllan",
//     "name": "Magallan",
//     "rarity": 6,
//     "class": "SUPPORT"
//   },
//   {
//     "id": "char_400_weedy",
//     "name": "Weedy",
//     "rarity": 6,
//     "class": "SPECIAL"
//   },
//   {
//     "id": "char_225_haak",
//     "name": "Aak",
//     "rarity": 6,
//     "class": "SPECIAL"
//   },
//   {
//     "id": "char_474_glady",
//     "name": "Gladiia",
//     "rarity": 6,
//     "class": "SPECIAL"
//   },
//   {
//     "id": "char_147_shining",
//     "name": "Shining",
//     "rarity": 6,
//     "class": "MEDIC"
//   },
//   {
//     "id": "char_003_kalts",
//     "name": "Kal'tsit",
//     "rarity": 6,
//     "class": "MEDIC"
//   },
//   {
//     "id": "char_202_demkni",
//     "name": "Saria",
//     "rarity": 6,
//     "class": "TANK"
//   },
//   {
//     "id": "char_311_mudrok",
//     "name": "Mudrock",
//     "rarity": 6,
//     "class": "TANK"
//   },
//   {
//     "id": "char_264_f12yin",
//     "name": "Mountain",
//     "rarity": 6,
//     "class": "WARRIOR"
//   },
//   {
//     "id": "char_172_svrash",
//     "name": "SilverAsh",
//     "rarity": 6,
//     "class": "WARRIOR"
//   },
//   {
//     "id": "char_293_thorns",
//     "name": "Thorns",
//     "rarity": 6,
//     "class": "WARRIOR"
//   },
//   {
//     "id": "char_010_chen",
//     "name": "Ch'en",
//     "rarity": 6,
//     "class": "WARRIOR"
//   },
//   {
//     "id": "char_1013_chen2",
//     "name": "Ch'en the Holungday",
//     "rarity": 6,
//     "class": "SNIPER"
//   },
//   {
//     "id": "char_017_huang",
//     "name": "Blaze",
//     "rarity": 6,
//     "class": "WARRIOR"
//   },
//   {
//     "id": "char_350_surtr",
//     "name": "Surtr",
//     "rarity": 6,
//     "class": "WARRIOR"
//   },
//   {
//     "id": "char_188_helage",
//     "name": "Hellagur",
//     "rarity": 6,
//     "class": "WARRIOR"
//   },
//   {
//     "id": "char_263_skadi",
//     "name": "Skadi",
//     "rarity": 6,
//     "class": "WARRIOR"
//   },
//   {
//     "id": "char_1012_skadi2",
//     "name": "Skadi the Corrupting Heart",
//     "rarity": 6,
//     "class": "SUPPORT"
//   },
//   {
//     "id": "char_391_rosmon",
//     "name": "Rosmontis",
//     "rarity": 6,
//     "class": "SNIPER"
//   }
// ]