async function getSlashCommandBody(slashCommandName) {
  switch (slashCommandName) {
    case "skills":
      return {
        name: "skills",
        description: "Returns info about 5e character skills",
        type: 1,
        options: [
          {
            name: "choices",
            description: "Returns info about 5e character skills",
            type: 3,
            required: true,
            choices: [
              {
                name: "Acrobatics",
                value: "acrobatics",
              },
              {
                name: "Animal Handling",
                value: "animal-handling",
              },
              {
                name: "Arcana",
                value: "arcana",
              },
              {
                name: "Athletics",
                value: "athletics",
              },
              {
                name: "Deception",
                value: "deception",
              },
              {
                name: "History",
                value: "history",
              },
              {
                name: "Insight",
                value: "insight",
              },
              {
                name: "Intimidation",
                value: "intimidation",
              },
              {
                name: "Investigation",
                value: "investigation",
              },
              {
                name: "Medicine",
                value: "medicine",
              },
              {
                name: "Nature",
                value: "nature",
              },
              {
                name: "Perception",
                value: "perception",
              },
              {
                name: "Performance",
                value: "performance",
              },
              {
                name: "Persuasion",
                value: "persuasion",
              },
              {
                name: "Religion",
                value: "religion",
              },
              {
                name: "Sleight of Hand",
                value: "sleight-of-hand",
              },
              {
                name: "Stealth",
                value: "stealth",
              },
              {
                name: "Survival",
                value: "survival",
              },
            ],
          },
        ],
      };
    case "ability-scores":
      return {
        name: "ability-scores",
        description: "Returns info about 5e character ability scores",
        type: 1,
        options: [
          {
            name: "choices",
            description: "Returns info about 5e character ability scores",
            type: 3,
            required: true,
            choices: [
              {
                name: "CHA",
                value: "cha",
              },
              {
                name: "CON",
                value: "con",
              },
              {
                name: "DEX",
                value: "dex",
              },
              {
                name: "INT",
                value: "int",
              },
              {
                name: "STR",
                value: "str",
              },
              {
                name: "WIS",
                value: "wis",
              },
            ],
          },
        ],
      };
    case "alignments":
      return {
        name: "alignments",
        description: "Returns info about 5e character alignments",
        type: 1,
        options: [
          {
            name: "choices",
            description: "Returns info about 5e character alignments",
            type: 3,
            required: true,
            choices: [
              {
                name: "Chaotic Evil",
                value: "chaotic-evil",
              },
              {
                name: "Chaotic Good",
                value: "chaotic-good",
              },
              {
                name: "Chaotic Neutral",
                value: "chaotic-neutral",
              },
              {
                name: "Lawful Evil",
                value: "lawful-evil",
              },
              {
                name: "Lawful Good",
                value: "lawful-good",
              },
              {
                name: "Lawful Neutral",
                value: "lawful-neutral",
              },
              {
                name: "Neutral",
                value: "neutral",
              },
              {
                name: "Neutral Evil",
                value: "neutral-evil",
              },
              {
                name: "Neutral Good",
                value: "neutral-good",
              },
            ],
          },
        ],
      };
    case "languages":
      return {
        name: "languages",
        description: "Returns info about 5e character languages",
        type: 1,
        options: [
          {
            name: "choices",
            description: "Returns info about 5e character languages",
            type: 3,
            required: true,
            choices: [
              {
                name: "Abyssal",
                value: "abyssal",
              },
              {
                name: "Celestial",
                value: "celestial",
              },
              {
                name: "Common",
                value: "common",
              },
              {
                name: "Deep Speech",
                value: "deep-speech",
              },
              {
                name: "Draconic",
                value: "draconic",
              },
              {
                name: "Dwarvish",
                value: "dwarvish",
              },
              {
                name: "Elvish",
                value: "elvish",
              },
              {
                name: "Giant",
                value: "giant",
              },
              {
                name: "Gnomish",
                value: "gnomish",
              },
              {
                name: "Goblin",
                value: "goblin",
              },
              {
                name: "Halfling",
                value: "halfling",
              },
              {
                name: "Infernal",
                value: "infernal",
              },
              {
                name: "Orc",
                value: "orc",
              },
              {
                name: "Primordial",
                value: "primordial",
              },
              {
                name: "Sylvan",
                value: "sylvan",
              },
              {
                name: "Undercommon",
                value: "undercommon",
              },
            ],
          },
        ],
      };
    case "races":
      return {
        name: "races",
        description: "Returns info about 5e character races",
        type: 1,
        options: [
          {
            name: "choices",
            description: "Returns info about 5e character races",
            type: 3,
            required: true,
            choices: [
              {
                name: "Dragonborn",
                value: "dragonborn",
              },
              {
                name: "Dwarf",
                value: "dwarf",
              },
              {
                name: "Elf",
                value: "elf",
              },
              {
                name: "Gnome",
                value: "gnome",
              },
              {
                name: "Half-Elf",
                value: "half-elf",
              },
              {
                name: "Half-Orc",
                value: "half-orc",
              },
              {
                name: "Halfling",
                value: "halfling",
              },
              {
                name: "Human",
                value: "human",
              },
              {
                name: "Tiefling",
                value: "tiefling",
              },
            ],
          },
        ],
      };
    case "classes":
      return {
        name: "classes",
        description: "Returns info about 5e character classes",
        type: 1,
        options: [
          {
            name: "class",
            description: "Choose the type of class",
            type: 3,
            required: true,
            choices: [
              {
                name: "Barbarian",
                value: "barbarian",
              },
              {
                name: "Bard",
                value: "bard",
              },
              {
                name: "Cleric",
                value: "cleric",
              },
              {
                name: "Druid",
                value: "druid",
              },
              {
                name: "Fighter",
                value: "fighter",
              },
              {
                name: "Monk",
                value: "monk",
              },
              {
                name: "Paladin",
                value: "paladin",
              },
              {
                name: "Ranger",
                value: "ranger",
              },
              {
                name: "Rogue",
                value: "rogue",
              },
              {
                name: "Sorcerer",
                value: "sorcerer",
              },
              {
                name: "Warlock",
                value: "warlock",
              },
              {
                name: "Wizard",
                value: "wizard",
              },
            ],
          },
          {
            name: "item",
            description: "Select an item",
            type: 3,
            required: true,
            choices: [
              {
                name: "Spells",
                value: "spells",
              },
              {
                name: "Features",
                value: "features",
              },
              {
                name: "Proficiencies",
                value: "proficiencies",
              },
            ],
          },
        ],
      };
    default:
      return null;
  }
}

export default getSlashCommandBody;
