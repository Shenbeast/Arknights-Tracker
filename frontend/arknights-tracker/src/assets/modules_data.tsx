import { OperatorModuleDetailsList } from "../types";

export const modules_data: OperatorModuleDetailsList = {
  uniequip_002_mgllan: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: "mgllan_equip_1_1_p1",
            target: "TRAIT",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription:
                    "The first summoned unit <@ba.kw>does not consume</> deployment slots (The last summoned unit on the field does not return a deployment slot when retreated or defeated)",
                  unlockCondition: {
                    phase: 2,
                    level: 60,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [
                    {
                      key: "cnt",
                      value: 1.0,
                    },
                  ],
                  overrideDescripton: null,
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "max_hp",
            value: 100.0,
          },
          {
            key: "atk",
            value: 30.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_folivo: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: "folivo_equip_1_1_p1",
            target: "TRAIT",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription:
                    "The first summoned unit <@ba.kw>does not consume</> deployment slots (The last summoned unit on the field does not return a deployment slot when retreated or defeated)",
                  unlockCondition: {
                    phase: 2,
                    level: 50,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [
                    {
                      key: "cnt",
                      value: 1.0,
                    },
                  ],
                  overrideDescripton: null,
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "atk",
            value: 20.0,
          },
          {
            key: "def",
            value: 20.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_otter: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: "otter_equip_1_1_p1",
            target: "TRAIT",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription:
                    "The first summoned unit <@ba.kw>does not consume</> deployment slots (The last summoned unit on the field does not return a deployment slot when retreated or defeated)",
                  unlockCondition: {
                    phase: 2,
                    level: 50,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [
                    {
                      key: "cnt",
                      value: 1.0,
                    },
                  ],
                  overrideDescripton: null,
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "max_hp",
            value: 80.0,
          },
          {
            key: "atk",
            value: 25.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_deepcl: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: "deepcl_equip_1_1_p1",
            target: "TRAIT",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription:
                    "Can hold <@ba.kw>+{cnt}</> additional summoned units and summoned unit deployment costs are <@ba.kw>reduced</>",
                  unlockCondition: {
                    phase: 2,
                    level: 40,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [
                    {
                      key: "cnt",
                      value: 3.0,
                    },
                  ],
                  overrideDescripton: null,
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "max_hp",
            value: 80.0,
          },
          {
            key: "atk",
            value: 20.0,
          },
        ],
        tokenAttributeBlackboard: {
          token_10001_deepcl_tentac: [
            {
              key: "cost",
              value: -2.0,
            },
            {
              key: "max_deploy_count",
              value: 3.0,
            },
          ],
        },
      },
    ],
  },
  uniequip_002_pallas: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: null,
            target: "TRAIT_DATA_ONLY",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription: null,
                  unlockCondition: {
                    phase: 2,
                    level: 60,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [
                    {
                      key: "atk_scale",
                      value: 1.3,
                    },
                  ],
                  overrideDescripton:
                    "Can attack enemies <@ba.kw>from range</>; When attacking enemies not blocked by self, increase ATK to <@ba.kw>{atk_scale:0%}</>",
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "max_hp",
            value: 150.0,
          },
          {
            key: "atk",
            value: 55.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_sophia: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: null,
            target: "TRAIT_DATA_ONLY",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription: null,
                  unlockCondition: {
                    phase: 2,
                    level: 50,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [
                    {
                      key: "atk_scale",
                      value: 1.3,
                    },
                  ],
                  overrideDescripton:
                    "Can attack enemies <@ba.kw>from range</>; When attacking enemies not blocked by self, increase ATK to <@ba.kw>{atk_scale:0%}</>",
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "atk",
            value: 35.0,
          },
          {
            key: "def",
            value: 35.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_swire: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: null,
            target: "TRAIT_DATA_ONLY",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription: null,
                  unlockCondition: {
                    phase: 2,
                    level: 50,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [
                    {
                      key: "atk_scale",
                      value: 1.3,
                    },
                  ],
                  overrideDescripton:
                    "Can attack enemies <@ba.kw>from range</>; When attacking enemies not blocked by self, increase ATK to <@ba.kw>{atk_scale:0%}</>",
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "max_hp",
            value: 120.0,
          },
          {
            key: "atk",
            value: 50.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_doberm: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: null,
            target: "DISPLAY",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription: "Can also be deployed on Ranged tiles",
                  unlockCondition: {
                    phase: 2,
                    level: 40,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [],
                  overrideDescripton: null,
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
          {
            resKey: "doberm_equip_1_1_p1",
            target: "TALENT",
            addOrOverrideTalentDataBundle: {
              candidates: [
                {
                  displayRangeId: false,
                  unlockCondition: {
                    phase: 2,
                    level: 40,
                  },
                  requiredPotentialRank: 0,
                  prefabKey: "10",
                  name: null,
                  description: null,
                  rangeId: null,
                  blackboard: [
                    {
                      key: "buildable_type",
                      value: 2.0,
                    },
                  ],
                },
              ],
            },
            overrideTraitDataBundle: {
              candidates: null,
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "atk",
            value: 35.0,
          },
          {
            key: "attack_speed",
            value: 5.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_cgbird: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: null,
            target: "DISPLAY",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription: "Attack Range <@ba.kw>expands</>",
                  unlockCondition: {
                    phase: 2,
                    level: 60,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [],
                  overrideDescripton: null,
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
          {
            resKey: "cgbird_equip_1_1_p1",
            target: "TALENT",
            addOrOverrideTalentDataBundle: {
              candidates: [
                {
                  displayRangeId: true,
                  unlockCondition: {
                    phase: 2,
                    level: 60,
                  },
                  requiredPotentialRank: 0,
                  prefabKey: "10",
                  name: null,
                  description: null,
                  rangeId: "y-3",
                  blackboard: [],
                },
              ],
            },
            overrideTraitDataBundle: {
              candidates: null,
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "atk",
            value: 40.0,
          },
          {
            key: "magic_resistance",
            value: 5.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_breeze: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: null,
            target: "DISPLAY",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription: "Attack Range <@ba.kw>expands</>",
                  unlockCondition: {
                    phase: 2,
                    level: 50,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [],
                  overrideDescripton: null,
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
          {
            resKey: "breeze_equip_1_1_p1",
            target: "TALENT",
            addOrOverrideTalentDataBundle: {
              candidates: [
                {
                  displayRangeId: true,
                  unlockCondition: {
                    phase: 2,
                    level: 50,
                  },
                  requiredPotentialRank: 0,
                  prefabKey: "10",
                  name: null,
                  description: null,
                  rangeId: "y-3",
                  blackboard: [],
                },
              ],
            },
            overrideTraitDataBundle: {
              candidates: null,
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "max_hp",
            value: 60.0,
          },
          {
            key: "atk",
            value: 30.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_plosis: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: null,
            target: "DISPLAY",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription: "Attack Range <@ba.kw>expands</>",
                  unlockCondition: {
                    phase: 2,
                    level: 50,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [],
                  overrideDescripton: null,
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
          {
            resKey: "plosis_equip_1_1_p1",
            target: "TALENT",
            addOrOverrideTalentDataBundle: {
              candidates: [
                {
                  displayRangeId: true,
                  unlockCondition: {
                    phase: 2,
                    level: 50,
                  },
                  requiredPotentialRank: 0,
                  prefabKey: "10",
                  name: null,
                  description: null,
                  rangeId: "y-3",
                  blackboard: [],
                },
              ],
            },
            overrideTraitDataBundle: {
              candidates: null,
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "max_hp",
            value: 60.0,
          },
          {
            key: "atk",
            value: 30.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_flower: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: null,
            target: "DISPLAY",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription: null,
                  unlockCondition: {
                    phase: 2,
                    level: 40,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [],
                  overrideDescripton:
                    "Restores the HP of <@ba.kw>4</> allied units simultaneously",
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
          {
            resKey: "flower_equip_1_1_p1",
            target: "TALENT",
            addOrOverrideTalentDataBundle: {
              candidates: [
                {
                  displayRangeId: false,
                  unlockCondition: {
                    phase: 2,
                    level: 40,
                  },
                  requiredPotentialRank: 0,
                  prefabKey: "10",
                  name: null,
                  description: null,
                  rangeId: null,
                  blackboard: [
                    {
                      key: "attack@max_target",
                      value: 4.0,
                    },
                  ],
                },
              ],
            },
            overrideTraitDataBundle: {
              candidates: null,
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "max_hp",
            value: 55.0,
          },
          {
            key: "atk",
            value: 25.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_fartth: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: "fartth_equip_1_1_p1",
            target: "TRAIT",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription:
                    "The further away the enemy, the higher the damage dealt (up to an increase of <@ba.kw>{damage_scale:0%}</>)",
                  unlockCondition: {
                    phase: 2,
                    level: 60,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [
                    {
                      key: "max_dist",
                      value: 4.5,
                    },
                    {
                      key: "min_dist",
                      value: 1.0,
                    },
                    {
                      key: "damage_scale",
                      value: 0.15,
                    },
                  ],
                  overrideDescripton: null,
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "atk",
            value: 70.0,
          },
          {
            key: "attack_speed",
            value: 5.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_milu: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: "milu_equip_1_1_p1",
            target: "TRAIT",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription:
                    "If the attacked enemy remains alive, gain <@ba.kw>{sp}</> additional SP",
                  unlockCondition: {
                    phase: 2,
                    level: 50,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [
                    {
                      key: "sp",
                      value: 1.0,
                    },
                  ],
                  overrideDescripton: null,
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "max_hp",
            value: 80.0,
          },
          {
            key: "atk",
            value: 60.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_cuttle: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: "cuttle_equip_1_1_p1",
            target: "TRAIT",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription:
                    "The further away the enemy, the higher the damage dealt (up to an increase of <@ba.kw>{damage_scale:0%}</>)",
                  unlockCondition: {
                    phase: 2,
                    level: 50,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [
                    {
                      key: "max_dist",
                      value: 4.5,
                    },
                    {
                      key: "min_dist",
                      value: 1.0,
                    },
                    {
                      key: "damage_scale",
                      value: 0.15,
                    },
                  ],
                  overrideDescripton: null,
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "max_hp",
            value: 70.0,
          },
          {
            key: "atk",
            value: 65.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_glaze: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: "glaze_equip_1_1_p1",
            target: "TRAIT",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription:
                    "The further away the enemy, the higher the damage dealt (up to an increase of <@ba.kw>{damage_scale:0%}</>)",
                  unlockCondition: {
                    phase: 2,
                    level: 40,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [
                    {
                      key: "max_dist",
                      value: 4.5,
                    },
                    {
                      key: "min_dist",
                      value: 1.0,
                    },
                    {
                      key: "damage_scale",
                      value: 0.15,
                    },
                  ],
                  overrideDescripton: null,
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "max_hp",
            value: 65.0,
          },
          {
            key: "atk",
            value: 55.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_phatom: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: "phatom_equip_1_1_p1",
            target: "TRAIT",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription:
                    "Refunds <@ba.kw>a large portion</> of the current DP Cost when retreated",
                  unlockCondition: {
                    phase: 2,
                    level: 60,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [
                    {
                      key: "withdraw_cost_recover_ratio",
                      value: 0.8,
                    },
                  ],
                  overrideDescripton: null,
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "max_hp",
            value: 100.0,
          },
          {
            key: "atk",
            value: 50.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_kafka: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: "kafka_equip_1_1_p1",
            target: "TRAIT",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription:
                    "When there are no allied units in the four adjacent tiles, ATK <@ba.kw>+{atk:0%}</>",
                  unlockCondition: {
                    phase: 2,
                    level: 50,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [
                    {
                      key: "atk",
                      value: 0.1,
                    },
                  ],
                  overrideDescripton: null,
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "max_hp",
            value: 80.0,
          },
          {
            key: "atk",
            value: 45.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_red: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: "red_equip_1_1_p1",
            target: "TRAIT",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription:
                    "When there are no allied units in the four adjacent tiles, ATK <@ba.kw>+{atk:0%}</>",
                  unlockCondition: {
                    phase: 2,
                    level: 50,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [
                    {
                      key: "atk",
                      value: 0.1,
                    },
                  ],
                  overrideDescripton: null,
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "atk",
            value: 50.0,
          },
          {
            key: "attack_speed",
            value: 4.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_waaifu: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: "waaifu_equip_1_1_p1",
            target: "TRAIT",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription:
                    "Refunds <@ba.kw>a large portion</> of the current DP Cost when retreated",
                  unlockCondition: {
                    phase: 2,
                    level: 50,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [
                    {
                      key: "withdraw_cost_recover_ratio",
                      value: 0.8,
                    },
                  ],
                  overrideDescripton: null,
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "max_hp",
            value: 70.0,
          },
          {
            key: "atk",
            value: 45.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_gravel: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: "gravel_equip_1_1_p1",
            target: "TRAIT",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription:
                    "Refunds <@ba.kw>a large portion</> of the current DP Cost when retreated",
                  unlockCondition: {
                    phase: 2,
                    level: 40,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [
                    {
                      key: "withdraw_cost_recover_ratio",
                      value: 0.8,
                    },
                  ],
                  overrideDescripton: null,
                  prefabKey: null,
                  rangeId: null,
                },
              ],
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "max_hp",
            value: 100.0,
          },
          {
            key: "def",
            value: 40.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_pasngr: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: null,
            target: "TRAIT_DATA_ONLY",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription: null,
                  unlockCondition: {
                    phase: 2,
                    level: 60,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [
                    {
                      key: "attack@max_target",
                      value: 4.0,
                    },
                    {
                      key: "attack@sluggish",
                      value: 0.8,
                    },
                    {
                      key: "attack@chain.atk_scale",
                      value: 0.9,
                    },
                    {
                      key: "skill@sluggish",
                      value: 0.8,
                    },
                    {
                      key: "skill@chain.atk_scale",
                      value: 0.9,
                    },
                    {
                      key: "value",
                      value: 0.1,
                    },
                  ],
                  overrideDescripton:
                    "Attacks deal <@ba.kw>Arts</> damage and jump between <@ba.kw>{attack@max_target}</> enemies. Each jump deals <@ba.kw>{value:0%}</> less damage and inflicts a short <$ba.sluggish>Slow</>",
                  prefabKey: "-1",
                  rangeId: null,
                },
              ],
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "atk",
            value: 65.0,
          },
          {
            key: "attack_speed",
            value: 5.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_leizi: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: null,
            target: "TRAIT_DATA_ONLY",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription: null,
                  unlockCondition: {
                    phase: 2,
                    level: 50,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [
                    {
                      key: "attack@max_target",
                      value: 4.0,
                    },
                    {
                      key: "attack@sluggish",
                      value: 0.8,
                    },
                    {
                      key: "attack@chain.atk_scale",
                      value: 0.9,
                    },
                    {
                      key: "value",
                      value: 0.1,
                    },
                  ],
                  overrideDescripton:
                    "Attacks deal <@ba.kw>Arts</> damage and jump between <@ba.kw>{attack@max_target}</> enemies. Each jump deals <@ba.kw>{value:0%}</> less damage and inflicts a short <$ba.sluggish>Slow</>",
                  prefabKey: "-1",
                  rangeId: null,
                },
              ],
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "max_hp",
            value: 80.0,
          },
          {
            key: "atk",
            value: 55.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
  uniequip_002_pudd: {
    phases: [
      {
        equipLevel: 1,
        parts: [
          {
            resKey: null,
            target: "TRAIT_DATA_ONLY",
            addOrOverrideTalentDataBundle: {
              candidates: null,
            },
            overrideTraitDataBundle: {
              candidates: [
                {
                  additionalDescription: null,
                  unlockCondition: {
                    phase: 2,
                    level: 40,
                  },
                  requiredPotentialRank: 0,
                  blackboard: [
                    {
                      key: "attack@max_target",
                      value: 4.0,
                    },
                    {
                      key: "attack@sluggish",
                      value: 0.5,
                    },
                    {
                      key: "attack@chain.atk_scale",
                      value: 1.0,
                    },
                  ],
                  overrideDescripton:
                    "Attacks deal <@ba.kw>Arts</> damage and jump between <@ba.kw>{attack@max_target}</> enemies. Each jump <@ba.kw>no longer deals less damage</> and inflicts a brief <$ba.sluggish>Slow</>",
                  prefabKey: "-1",
                  rangeId: null,
                },
              ],
            },
          },
        ],
        attributeBlackboard: [
          {
            key: "max_hp",
            value: 70.0,
          },
          {
            key: "attack_speed",
            value: 4.0,
          },
        ],
        tokenAttributeBlackboard: {},
      },
    ],
  },
};
