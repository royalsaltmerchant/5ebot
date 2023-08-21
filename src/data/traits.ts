export default [
  {
    index: "darkvision",
    races: [
      {
        index: "dwarf",
        name: "Dwarf",
        url: "/api/races/dwarf",
      },
      {
        index: "elf",
        name: "Elf",
        url: "/api/races/elf",
      },
      {
        index: "gnome",
        name: "Gnome",
        url: "/api/races/gnome",
      },
      {
        index: "half-elf",
        name: "Half-Elf",
        url: "/api/races/half-elf",
      },
      {
        index: "half-orc",
        name: "Half-Orc",
        url: "/api/races/half-orc",
      },
      {
        index: "tiefling",
        name: "Tiefling",
        url: "/api/races/tiefling",
      },
    ],
    subraces: [],
    name: "Darkvision",
    desc: [
      "You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.",
    ],
    proficiencies: [],
    url: "/api/traits/darkvision",
  },
  {
    index: "dwarven-resilience",
    races: [
      {
        index: "dwarf",
        name: "Dwarf",
        url: "/api/races/dwarf",
      },
    ],
    subraces: [],
    name: "Dwarven Resilience",
    desc: [
      "You have advantage on saving throws against poison, and you have resistance against poison damage.",
    ],
    proficiencies: [],
    url: "/api/traits/dwarven-resilience",
  },
  {
    index: "dwarven-combat-training",
    races: [
      {
        index: "dwarf",
        name: "Dwarf",
        url: "/api/races/dwarf",
      },
    ],
    subraces: [],
    name: "Dwarven Combat Training",
    desc: [
      "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.",
    ],
    proficiencies: [
      {
        index: "battleaxes",
        name: "Battleaxes",
        url: "/api/proficiencies/battleaxes",
      },
      {
        index: "handaxes",
        name: "Handaxes",
        url: "/api/proficiencies/handaxes",
      },
      {
        index: "light-hammers",
        name: "Light hammers",
        url: "/api/proficiencies/light-hammers",
      },
      {
        index: "warhammers",
        name: "Warhammers",
        url: "/api/proficiencies/warhammers",
      },
    ],
    url: "/api/traits/dwarven-combat-training",
  },
  {
    index: "tool-proficiency",
    races: [
      {
        index: "dwarf",
        name: "Dwarf",
        url: "/api/races/dwarf",
      },
    ],
    subraces: [],
    name: "Tool Proficiency",
    desc: [
      "You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools.",
    ],
    proficiencies: [],
    proficiency_choices: {
      choose: 1,
      type: "proficiencies",
      from: {
        option_set_type: "options_array",
        options: [
          {
            option_type: "reference",
            item: {
              index: "smiths-tools",
              name: "Smith's Tools",
              url: "/api/proficiencies/smiths-tools",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "brewers-supplies",
              name: "Brewer's Supplies",
              url: "/api/proficiencies/brewers-supplies",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "masons-tools",
              name: "Mason's Tools",
              url: "/api/proficiencies/masons-tools",
            },
          },
        ],
      },
    },
    url: "/api/traits/tool-proficiency",
  },
  {
    index: "stonecunning",
    races: [
      {
        index: "dwarf",
        name: "Dwarf",
        url: "/api/races/dwarf",
      },
    ],
    subraces: [],
    name: "Stonecunning",
    desc: [
      "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
    ],
    proficiencies: [],
    url: "/api/traits/stonecunning",
  },
  {
    index: "dwarven-toughness",
    races: [],
    subraces: [
      {
        index: "hill-dwarf",
        name: "Hill Dwarf",
        url: "/api/subraces/hill-dwarf",
      },
    ],
    name: "Dwarven Toughness",
    desc: [
      "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.",
    ],
    proficiencies: [],
    url: "/api/traits/dwarven-toughness",
  },
  {
    index: "keen-senses",
    races: [
      {
        index: "elf",
        name: "Elf",
        url: "/api/races/elf",
      },
    ],
    subraces: [],
    name: "Keen Senses",
    desc: ["You have proficiency in the Perception skill."],
    proficiencies: [
      {
        index: "skill-perception",
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
      },
    ],
    url: "/api/traits/keen-senses",
  },
  {
    index: "fey-ancestry",
    races: [
      {
        index: "elf",
        name: "Elf",
        url: "/api/races/elf",
      },
      {
        index: "half-elf",
        name: "Half-Elf",
        url: "/api/races/half-elf",
      },
    ],
    subraces: [],
    name: "Fey Ancestry",
    desc: [
      "You have advantage on saving throws against being charmed, and magic cannot put you to sleep.",
    ],
    proficiencies: [],
    url: "/api/traits/fey-ancestry",
  },
  {
    index: "trance",
    races: [
      {
        index: "elf",
        name: "Elf",
        url: "/api/races/elf",
      },
    ],
    subraces: [],
    name: "Trance",
    desc: [
      'Elves do not need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting this way, you gain the same benefit that a human does from 8 hours of sleep.',
    ],
    proficiencies: [],
    url: "/api/traits/trance",
  },
  {
    index: "elf-weapon-training",
    races: [],
    subraces: [
      {
        index: "high-elf",
        name: "High Elf",
        url: "/api/subraces/high-elf",
      },
    ],
    name: "Elf Weapon Training",
    desc: [
      "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
    ],
    proficiencies: [
      {
        index: "longswords",
        name: "Longswords",
        url: "/api/proficiencies/longswords",
      },
      {
        index: "shortswords",
        name: "Shortswords",
        url: "/api/proficiencies/shortswords",
      },
      {
        index: "shortbows",
        name: "Shortbows",
        url: "/api/proficiencies/shortbows",
      },
      {
        index: "longbows",
        name: "Longbows",
        url: "/api/proficiencies/longbows",
      },
    ],
    url: "/api/traits/elf-weapon-training",
  },
  {
    index: "high-elf-cantrip",
    races: [],
    subraces: [
      {
        index: "high-elf",
        name: "High Elf",
        url: "/api/subraces/high-elf",
      },
    ],
    name: "High Elf Cantrip",
    desc: [
      "You know one cantrip of your choice form the wizard spell list. Intelligence is your spellcasting ability for it.",
    ],
    proficiencies: [],
    trait_specific: {
      spell_options: {
        choose: 1,
        from: {
          option_set_type: "options_array",
          options: [
            {
              option_type: "reference",
              item: {
                index: "light",
                name: "Light",
                url: "/api/spells/light",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "mage-hand",
                name: "Mage Hand",
                url: "/api/spells/mage-hand",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "mending",
                name: "Mending",
                url: "/api/spells/mending",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "message",
                name: "Message",
                url: "/api/spells/message",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "minor-illusion",
                name: "Minor Illusion",
                url: "/api/spells/minor-illusion",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "acid-splash",
                name: "Acid Splash",
                url: "/api/spells/acid-splash",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "prestidigitation",
                name: "Prestidigitation",
                url: "/api/spells/prestidigitation",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "ray-of-frost",
                name: "Ray of Frost",
                url: "/api/spells/ray-of-frost",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "shocking-grasp",
                name: "Shocking Grasp",
                url: "/api/spells/shocking-grasp",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "true-strike",
                name: "True Strike",
                url: "/api/spells/true-strike",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "chill-touch",
                name: "Chill Touch",
                url: "/api/spells/chill-touch",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "dancing-lights",
                name: "Dancing Lights",
                url: "/api/spells/dancing-lights",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "fire-bolt",
                name: "Fire Bolt",
                url: "/api/spells/fire-bolt",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "poison-spray",
                name: "Poison Spray",
                url: "/api/spells/poison-spray",
              },
            },
          ],
        },
        type: "spell",
      },
    },
    url: "/api/traits/high-elf-cantrip",
  },
  {
    index: "extra-language",
    races: [],
    subraces: [
      {
        index: "high-elf",
        name: "High Elf",
        url: "/api/subraces/high-elf",
      },
    ],
    name: "Extra Language",
    desc: ["You can speak, read, and write one extra language of your choice."],
    proficiencies: [],
    language_options: {
      choose: 1,
      type: "languages",
      from: {
        option_set_type: "options_array",
        options: [
          {
            option_type: "reference",
            item: {
              index: "dwarvish",
              name: "Dwarvish",
              url: "/api/languages/dwarvish",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "giant",
              name: "Giant",
              url: "/api/languages/giant",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "gnomish",
              name: "Gnomish",
              url: "/api/languages/gnomish",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "goblin",
              name: "Goblin",
              url: "/api/languages/goblin",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "halfling",
              name: "Halfling",
              url: "/api/languages/halfling",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "orc",
              name: "Orc",
              url: "/api/languages/orc",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "abyssal",
              name: "Abyssal",
              url: "/api/languages/abyssal",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "celestial",
              name: "Celestial",
              url: "/api/languages/celestial",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "draconic",
              name: "Draconic",
              url: "/api/languages/draconic",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "deep-speech",
              name: "Deep Speech",
              url: "/api/languages/deep-speech",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "infernal",
              name: "Infernal",
              url: "/api/languages/infernal",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "primordial",
              name: "Primordial",
              url: "/api/languages/primordial",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "sylvan",
              name: "Sylvan",
              url: "/api/languages/sylvan",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "undercommon",
              name: "Undercommon",
              url: "/api/languages/undercommon",
            },
          },
        ],
      },
    },
    url: "/api/traits/extra-language",
  },
  {
    index: "lucky",
    races: [
      {
        index: "halfling",
        name: "Halfling",
        url: "/api/races/halfling",
      },
    ],
    subraces: [],
    name: "Lucky",
    desc: [
      "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
    ],
    proficiencies: [],
    url: "/api/traits/lucky",
  },
  {
    index: "brave",
    races: [
      {
        index: "halfling",
        name: "Halfling",
        url: "/api/races/halfling",
      },
    ],
    subraces: [],
    name: "Brave",
    desc: ["You have advantage on saving throw against being frightened."],
    proficiencies: [],
    url: "/api/traits/brave",
  },
  {
    index: "halfling-nimbleness",
    races: [
      {
        index: "halfling",
        name: "Halfling",
        url: "/api/races/halfling",
      },
    ],
    subraces: [],
    name: "Halfling Nimbleness",
    desc: [
      "You can move through the space of any creature that is of a size larger than yours.",
    ],
    proficiencies: [],
    url: "/api/traits/halfling-nimbleness",
  },
  {
    index: "naturally-stealthy",
    races: [],
    subraces: [
      {
        index: "lightfoot-halfling",
        name: "Lightfoot Halfling",
        url: "/api/subraces/lightfoot-halfling",
      },
    ],
    name: "Naturally Stealthy",
    desc: [
      "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.",
    ],
    proficiencies: [],
    url: "/api/traits/naturally-stealthy",
  },
  {
    index: "draconic-ancestry",
    races: [
      {
        index: "dragonborn",
        name: "Dragonborn",
        url: "/api/races/dragonborn",
      },
    ],
    subraces: [],
    name: "Draconic Ancestry",
    desc: [
      "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
    ],
    proficiencies: [],
    trait_specific: {
      subtrait_options: {
        choose: 1,
        from: {
          option_set_type: "options_array",
          options: [
            {
              option_type: "reference",
              item: {
                index: "draconic-ancestry-black",
                name: "Draconic Ancestry (Black)",
                url: "/api/traits/draconic-ancestry-black",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "draconic-ancestry-blue",
                name: "Draconic Ancestry (Blue)",
                url: "/api/traits/draconic-ancestry-blue",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "draconic-ancestry-brass",
                name: "Draconic Ancestry (Brass)",
                url: "/api/traits/draconic-ancestry-brass",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "draconic-ancestry-bronze",
                name: "Draconic Ancestry (Bronze)",
                url: "/api/traits/draconic-ancestry-bronze",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "draconic-ancestry-copper",
                name: "Draconic Ancestry (Copper)",
                url: "/api/traits/draconic-ancestry-copper",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "draconic-ancestry-gold",
                name: "Draconic Ancestry (Gold)",
                url: "/api/traits/draconic-ancestry-gold",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "draconic-ancestry-green",
                name: "Draconic Ancestry (Green)",
                url: "/api/traits/draconic-ancestry-green",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "draconic-ancestry-red",
                name: "Draconic Ancestry (Red)",
                url: "/api/traits/draconic-ancestry-red",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "draconic-ancestry-silver",
                name: "Draconic Ancestry (Silver)",
                url: "/api/traits/draconic-ancestry-silver",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "draconic-ancestry-white",
                name: "Draconic Ancestry (White)",
                url: "/api/traits/draconic-ancestry-white",
              },
            },
          ],
        },
        type: "trait",
      },
    },
    url: "/api/traits/draconic-ancestry",
  },
  {
    index: "draconic-ancestry-black",
    races: [
      {
        index: "dragonborn",
        name: "Dragonborn",
        url: "/api/races/dragonborn",
      },
    ],
    subraces: [],
    name: "Draconic Ancestry (Black)",
    desc: [
      "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
    ],
    parent: {
      index: "draconic-ancestry",
      name: "Draconic Ancestry",
      url: "/api/traits/draconic-ancestry",
    },
    proficiencies: [],
    trait_specific: {
      damage_type: {
        index: "acid",
        name: "Acid",
        url: "/api/damage-types/acid",
      },
      breath_weapon: {
        name: "Breath Weapon",
        desc: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest.",
        area_of_effect: {
          size: 30,
          type: "line",
        },
        usage: {
          type: "per rest",
          times: 1,
        },
        dc: {
          dc_type: {
            index: "dex",
            name: "DEX",
            url: "/api/ability-scores/dex",
          },
          success_type: "half",
        },
        damage: [
          {
            damage_type: {
              index: "acid",
              name: "Acid",
              url: "/api/damage-types/acid",
            },
            damage_at_character_level: {
              "1": "2d6",
              "6": "3d6",
              "11": "4d6",
              "16": "5d6",
            },
          },
        ],
      },
    },
    url: "/api/traits/draconic-ancestry-black",
  },
  {
    index: "draconic-ancestry-blue",
    races: [
      {
        index: "dragonborn",
        name: "Dragonborn",
        url: "/api/races/dragonborn",
      },
    ],
    subraces: [],
    name: "Draconic Ancestry (Blue)",
    desc: [
      "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
    ],
    parent: {
      index: "draconic-ancestry",
      name: "Draconic Ancestry",
      url: "/api/traits/draconic-ancestry",
    },
    proficiencies: [],
    trait_specific: {
      damage_type: {
        index: "lightning",
        name: "Lightning",
        url: "/api/damage-types/lightning",
      },
      breath_weapon: {
        name: "Breath Weapon",
        desc: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest.",
        area_of_effect: {
          size: 30,
          type: "line",
        },
        usage: {
          type: "per rest",
          times: 1,
        },
        dc: {
          dc_type: {
            index: "dex",
            name: "DEX",
            url: "/api/ability-scores/dex",
          },
          success_type: "half",
        },
        damage: [
          {
            damage_type: {
              index: "lightning",
              name: "Lightning",
              url: "/api/damage-types/lightning",
            },
            damage_at_character_level: {
              "1": "2d6",
              "6": "3d6",
              "11": "4d6",
              "16": "5d6",
            },
          },
        ],
      },
    },
    url: "/api/traits/draconic-ancestry-blue",
  },
  {
    index: "draconic-ancestry-brass",
    races: [
      {
        index: "dragonborn",
        name: "Dragonborn",
        url: "/api/races/dragonborn",
      },
    ],
    subraces: [],
    name: "Draconic Ancestry (Brass)",
    desc: [
      "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
    ],
    parent: {
      index: "draconic-ancestry",
      name: "Draconic Ancestry",
      url: "/api/traits/draconic-ancestry",
    },
    proficiencies: [],
    trait_specific: {
      damage_type: {
        index: "fire",
        name: "Fire",
        url: "/api/damage-types/fire",
      },
      breath_weapon: {
        name: "Breath Weapon",
        desc: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest.",
        area_of_effect: {
          size: 30,
          type: "line",
        },
        usage: {
          type: "per rest",
          times: 1,
        },
        dc: {
          dc_type: {
            index: "dex",
            name: "DEX",
            url: "/api/ability-scores/dex",
          },
          success_type: "half",
        },
        damage: [
          {
            damage_type: {
              index: "fire",
              name: "Fire",
              url: "/api/damage-types/fire",
            },
            damage_at_character_level: {
              "1": "2d6",
              "6": "3d6",
              "11": "4d6",
              "16": "5d6",
            },
          },
        ],
      },
    },
    url: "/api/traits/draconic-ancestry-brass",
  },
  {
    index: "draconic-ancestry-bronze",
    races: [
      {
        index: "dragonborn",
        name: "Dragonborn",
        url: "/api/races/dragonborn",
      },
    ],
    subraces: [],
    name: "Draconic Ancestry (Bronze)",
    desc: [
      "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
    ],
    parent: {
      index: "draconic-ancestry",
      name: "Draconic Ancestry",
      url: "/api/traits/draconic-ancestry",
    },
    proficiencies: [],
    trait_specific: {
      damage_type: {
        index: "lightning",
        name: "Lightning",
        url: "/api/damage-types/lightning",
      },
      breath_weapon: {
        name: "Breath Weapon",
        desc: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest.",
        area_of_effect: {
          size: 30,
          type: "line",
        },
        usage: {
          type: "per rest",
          times: 1,
        },
        dc: {
          dc_type: {
            index: "dex",
            name: "DEX",
            url: "/api/ability-scores/dex",
          },
          success_type: "half",
        },
        damage: [
          {
            damage_type: {
              index: "lightning",
              name: "Lightning",
              url: "/api/damage-types/lightning",
            },
            damage_at_character_level: {
              "1": "2d6",
              "6": "3d6",
              "11": "4d6",
              "16": "5d6",
            },
          },
        ],
      },
    },
    url: "/api/traits/draconic-ancestry-bronze",
  },
  {
    index: "draconic-ancestry-copper",
    races: [
      {
        index: "dragonborn",
        name: "Dragonborn",
        url: "/api/races/dragonborn",
      },
    ],
    subraces: [],
    name: "Draconic Ancestry (Copper)",
    desc: [
      "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
    ],
    parent: {
      index: "draconic-ancestry",
      name: "Draconic Ancestry",
      url: "/api/traits/draconic-ancestry",
    },
    proficiencies: [],
    trait_specific: {
      damage_type: {
        index: "acid",
        name: "Acid",
        url: "/api/damage-types/acid",
      },
      breath_weapon: {
        name: "Breath Weapon",
        desc: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest.",
        area_of_effect: {
          size: 30,
          type: "line",
        },
        usage: {
          type: "per rest",
          times: 1,
        },
        dc: {
          dc_type: {
            index: "dex",
            name: "DEX",
            url: "/api/ability-scores/dex",
          },
          success_type: "half",
        },
        damage: [
          {
            damage_type: {
              index: "acid",
              name: "Acid",
              url: "/api/damage-types/acid",
            },
            damage_at_character_level: {
              "1": "2d6",
              "6": "3d6",
              "11": "4d6",
              "16": "5d6",
            },
          },
        ],
      },
    },
    url: "/api/traits/draconic-ancestry-copper",
  },
  {
    index: "draconic-ancestry-gold",
    races: [
      {
        index: "dragonborn",
        name: "Dragonborn",
        url: "/api/races/dragonborn",
      },
    ],
    subraces: [],
    name: "Draconic Ancestry (Gold)",
    desc: [
      "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
    ],
    parent: {
      index: "draconic-ancestry",
      name: "Draconic Ancestry",
      url: "/api/traits/draconic-ancestry",
    },
    proficiencies: [],
    trait_specific: {
      damage_type: {
        index: "fire",
        name: "Fire",
        url: "/api/damage-types/fire",
      },
      breath_weapon: {
        name: "Breath Weapon",
        desc: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest.",
        area_of_effect: {
          size: 15,
          type: "cone",
        },
        usage: {
          type: "per rest",
          times: 1,
        },
        dc: {
          dc_type: {
            index: "dex",
            name: "DEX",
            url: "/api/ability-scores/dex",
          },
          success_type: "half",
        },
        damage: [
          {
            damage_type: {
              index: "fire",
              name: "Fire",
              url: "/api/damage-types/fire",
            },
            damage_at_character_level: {
              "1": "2d6",
              "6": "3d6",
              "11": "4d6",
              "16": "5d6",
            },
          },
        ],
      },
    },
    url: "/api/traits/draconic-ancestry-gold",
  },
  {
    index: "draconic-ancestry-green",
    races: [
      {
        index: "dragonborn",
        name: "Dragonborn",
        url: "/api/races/dragonborn",
      },
    ],
    subraces: [],
    name: "Draconic Ancestry (Green)",
    desc: [
      "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
    ],
    parent: {
      index: "draconic-ancestry",
      name: "Draconic Ancestry",
      url: "/api/traits/draconic-ancestry",
    },
    proficiencies: [],
    trait_specific: {
      damage_type: {
        index: "poison",
        name: "Poison",
        url: "/api/damage-types/poison",
      },
      breath_weapon: {
        name: "Breath Weapon",
        desc: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest.",
        area_of_effect: {
          size: 15,
          type: "cone",
        },
        usage: {
          type: "per rest",
          times: 1,
        },
        dc: {
          dc_type: {
            index: "con",
            name: "CON",
            url: "/api/ability-scores/con",
          },
          success_type: "half",
        },
        damage: [
          {
            damage_type: {
              index: "poison",
              name: "Poison",
              url: "/api/damage-types/poison",
            },
            damage_at_character_level: {
              "1": "2d6",
              "6": "3d6",
              "11": "4d6",
              "16": "5d6",
            },
          },
        ],
      },
    },
    url: "/api/traits/draconic-ancestry-green",
  },
  {
    index: "draconic-ancestry-red",
    races: [
      {
        index: "dragonborn",
        name: "Dragonborn",
        url: "/api/races/dragonborn",
      },
    ],
    subraces: [],
    name: "Draconic Ancestry (Red)",
    desc: [
      "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
    ],
    parent: {
      index: "draconic-ancestry",
      name: "Draconic Ancestry",
      url: "/api/traits/draconic-ancestry",
    },
    proficiencies: [],
    trait_specific: {
      damage_type: {
        index: "fire",
        name: "Fire",
        url: "/api/damage-types/fire",
      },
      breath_weapon: {
        name: "Breath Weapon",
        desc: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest.",
        area_of_effect: {
          size: 15,
          type: "cone",
        },
        usage: {
          type: "per rest",
          times: 1,
        },
        dc: {
          dc_type: {
            index: "dex",
            name: "DEX",
            url: "/api/ability-scores/dex",
          },
          success_type: "half",
        },
        damage: [
          {
            damage_type: {
              index: "fire",
              name: "Fire",
              url: "/api/damage-types/fire",
            },
            damage_at_character_level: {
              "1": "2d6",
              "6": "3d6",
              "11": "4d6",
              "16": "5d6",
            },
          },
        ],
      },
    },
    url: "/api/traits/draconic-ancestry-red",
  },
  {
    index: "draconic-ancestry-silver",
    races: [
      {
        index: "dragonborn",
        name: "Dragonborn",
        url: "/api/races/dragonborn",
      },
    ],
    subraces: [],
    name: "Draconic Ancestry (Silver)",
    desc: [
      "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
    ],
    parent: {
      index: "draconic-ancestry",
      name: "Draconic Ancestry",
      url: "/api/traits/draconic-ancestry",
    },
    proficiencies: [],
    trait_specific: {
      damage_type: {
        index: "cold",
        name: "Cold",
        url: "/api/damage-types/cold",
      },
      breath_weapon: {
        name: "Breath Weapon",
        desc: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest.",
        area_of_effect: {
          size: 15,
          type: "cone",
        },
        usage: {
          type: "per rest",
          times: 1,
        },
        dc: {
          dc_type: {
            index: "con",
            name: "CON",
            url: "/api/ability-scores/con",
          },
          success_type: "half",
        },
        damage: [
          {
            damage_type: {
              index: "cold",
              name: "Cold",
              url: "/api/damage-types/cold",
            },
            damage_at_character_level: {
              "1": "2d6",
              "6": "3d6",
              "11": "4d6",
              "16": "5d6",
            },
          },
        ],
      },
    },
    url: "/api/traits/draconic-ancestry-silver",
  },
  {
    index: "draconic-ancestry-white",
    races: [
      {
        index: "dragonborn",
        name: "Dragonborn",
        url: "/api/races/dragonborn",
      },
    ],
    subraces: [],
    name: "Draconic Ancestry (White)",
    desc: [
      "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
    ],
    parent: {
      index: "draconic-ancestry",
      name: "Draconic Ancestry",
      url: "/api/traits/draconic-ancestry",
    },
    proficiencies: [],
    trait_specific: {
      damage_type: {
        index: "cold",
        name: "Cold",
        url: "/api/damage-types/cold",
      },
      breath_weapon: {
        name: "Breath Weapon",
        desc: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest.",
        area_of_effect: {
          size: 15,
          type: "cone",
        },
        usage: {
          type: "per rest",
          times: 1,
        },
        dc: {
          dc_type: {
            index: "con",
            name: "CON",
            url: "/api/ability-scores/con",
          },
          success_type: "half",
        },
        damage: [
          {
            damage_type: {
              index: "cold",
              name: "Cold",
              url: "/api/damage-types/cold",
            },
            damage_at_character_level: {
              "1": "2d6",
              "6": "3d6",
              "11": "4d6",
              "16": "5d6",
            },
          },
        ],
      },
    },
    url: "/api/traits/draconic-ancestry-white",
  },
  {
    index: "breath-weapon",
    races: [
      {
        index: "dragonborn",
        name: "Dragonborn",
        url: "/api/races/dragonborn",
      },
    ],
    subraces: [],
    name: "Breath Weapon",
    desc: [
      "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.",
      "When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.",
      "After you use your breath weapon, you cannot use it again until you complete a short or long rest.",
    ],
    proficiencies: [],
    url: "/api/traits/breath-weapon",
  },
  {
    index: "damage-resistance",
    races: [
      {
        index: "dragonborn",
        name: "Dragonborn",
        url: "/api/races/dragonborn",
      },
    ],
    subraces: [],
    name: "Damage Resistance",
    desc: [
      "You have resistance to the damage type associated with your draconic ancestry.",
    ],
    proficiencies: [],
    url: "/api/traits/damage-resistance",
  },
  {
    index: "gnome-cunning",
    races: [
      {
        index: "gnome",
        name: "Gnome",
        url: "/api/races/gnome",
      },
    ],
    subraces: [],
    name: "Gnome Cunning",
    desc: [
      "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
    ],
    proficiencies: [],
    url: "/api/traits/gnome-cunning",
  },
  {
    index: "artificers-lore",
    races: [],
    subraces: [
      {
        index: "rock-gnome",
        name: "Rock Gnome",
        url: "/api/subraces/rock-gnome",
      },
    ],
    name: "Artificer's Lore",
    desc: [
      "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.",
    ],
    proficiencies: [],
    url: "/api/traits/artificers-lore",
  },
  {
    index: "tinker",
    races: [],
    subraces: [
      {
        index: "rock-gnome",
        name: "Rock Gnome",
        url: "/api/subraces/rock-gnome",
      },
    ],
    name: "Tinker",
    desc: [
      "You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.",
      "When you create a device, choose one of the following options:",
      "Clockwork Toy: This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.",
      "Fire Starter: The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.",
      "Music Box: When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed.",
    ],
    proficiencies: [
      {
        index: "tinkers-tools",
        name: "Tinker's Tools",
        url: "/api/proficiencies/tinkers-tools",
      },
    ],
    url: "/api/traits/tinker",
  },
  {
    index: "skill-versatility",
    races: [
      {
        index: "half-elf",
        name: "Half-Elf",
        url: "/api/races/half-elf",
      },
    ],
    subraces: [],
    name: "Skill Versatility",
    desc: ["You gain proficiency in two skills of your choice."],
    proficiencies: [],
    proficiency_choices: {
      choose: 2,
      type: "proficiencies",
      from: {
        option_set_type: "options_array",
        options: [
          {
            option_type: "reference",
            item: {
              index: "skill-acrobatics",
              name: "Skill: Acrobatics",
              url: "/api/proficiencies/skill-acrobatics",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "skill-animal-handling",
              name: "Skill: Animal Handling",
              url: "/api/proficiencies/skill-animal-handling",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "skill-arcana",
              name: "Skill: Arcana",
              url: "/api/proficiencies/skill-arcana",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "skill-athletics",
              name: "Skill: Athletics",
              url: "/api/proficiencies/skill-athletics",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "skill-deception",
              name: "Skill: Deception",
              url: "/api/proficiencies/skill-deception",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "skill-history",
              name: "Skill: History",
              url: "/api/proficiencies/skill-history",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "skill-insight",
              name: "Skill: Insight",
              url: "/api/proficiencies/skill-insight",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "skill-intimidation",
              name: "Skill: Intimidation",
              url: "/api/proficiencies/skill-intimidation",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "skill-investigation",
              name: "Skill: Investigation",
              url: "/api/proficiencies/skill-investigation",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "skill-medicine",
              name: "Skill: Medicine",
              url: "/api/proficiencies/skill-medicine",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "skill-nature",
              name: "Skill: Nature",
              url: "/api/proficiencies/skill-nature",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "skill-perception",
              name: "Skill: Perception",
              url: "/api/proficiencies/skill-perception",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "skill-performance",
              name: "Skill: Performance",
              url: "/api/proficiencies/skill-performance",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "skill-persuasion",
              name: "Skill: Persuasion",
              url: "/api/proficiencies/skill-persuasion",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "skill-religion",
              name: "Skill: Religion",
              url: "/api/proficiencies/skill-religion",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "skill-sleight-of-hand",
              name: "Skill: Sleight of Hand",
              url: "/api/proficiencies/skill-sleight-of-hand",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "skill-stealth",
              name: "Skill: Stealth",
              url: "/api/proficiencies/skill-stealth",
            },
          },
          {
            option_type: "reference",
            item: {
              index: "skill-survival",
              name: "Skill: Survival",
              url: "/api/proficiencies/skill-survival",
            },
          },
        ],
      },
    },
    url: "/api/traits/skill-versatility",
  },
  {
    index: "menacing",
    races: [
      {
        index: "half-orc",
        name: "Half-Orc",
        url: "/api/races/half-orc",
      },
    ],
    subraces: [],
    name: "Menacing",
    desc: ["You gain proficiency in the Intimidation skill."],
    proficiencies: [
      {
        index: "skill-intimidation",
        name: "Skill: Intimidation",
        url: "/api/proficiencies/skill-intimidation",
      },
    ],
    url: "/api/traits/menacing",
  },
  {
    index: "relentless-endurance",
    races: [
      {
        index: "half-orc",
        name: "Half-Orc",
        url: "/api/races/half-orc",
      },
    ],
    subraces: [],
    name: "Relentless Endurance",
    desc: [
      "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. you cannot use this feature again until you finish a long rest.",
    ],
    proficiencies: [],
    url: "/api/traits/relentless-endurance",
  },
  {
    index: "savage-attacks",
    races: [
      {
        index: "half-orc",
        name: "Half-Orc",
        url: "/api/races/half-orc",
      },
    ],
    subraces: [],
    name: "Savage Attacks",
    desc: [
      "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
    ],
    proficiencies: [],
    url: "/api/traits/savage-attacks",
  },
  {
    index: "hellish-resistance",
    races: [
      {
        index: "tiefling",
        name: "Tiefling",
        url: "/api/races/tiefling",
      },
    ],
    subraces: [],
    name: "Hellish Resistance",
    desc: ["You have resistance to fire damage."],
    proficiencies: [],
    url: "/api/traits/hellish-resistance",
  },
  {
    index: "infernal-legacy",
    races: [
      {
        index: "tiefling",
        name: "Tiefling",
        url: "/api/races/tiefling",
      },
    ],
    subraces: [],
    name: "Infernal Legacy",
    desc: [
      "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
    ],
    proficiencies: [],
    url: "/api/traits/infernal-legacy",
  },
];
