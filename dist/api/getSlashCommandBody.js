"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function getSlashCommandBody(slashCommandName) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (slashCommandName) {
            case "help":
                return {
                    name: "help",
                    description: "Returns help info",
                    type: 1,
                    options: [],
                };
            case "initiative":
                return {
                    name: "in",
                    description: "Manage initiative tracker",
                    type: 1,
                    options: [
                        {
                            name: "list",
                            description: "List the names in the tracker",
                            type: 1,
                        },
                        {
                            name: "add",
                            description: "Add a name to the tracker",
                            type: 1,
                            options: [
                                {
                                    name: "name",
                                    description: "Type the name to add into the tracker",
                                    type: 3,
                                    required: true,
                                },
                                {
                                    name: "value",
                                    description: "Type the number value used to place the name in the tracker order",
                                    type: 3,
                                    required: true,
                                },
                            ],
                        },
                        {
                            name: "remove",
                            description: "Remove a name from the tracker",
                            type: 1,
                            options: [
                                {
                                    name: "name",
                                    description: "Type the name to remove from the tracker",
                                    type: 3,
                                    required: true,
                                },
                            ],
                        },
                        {
                            name: "next",
                            description: "Move the tracker to the next name in the order",
                            type: 1
                        },
                        {
                            name: "clear",
                            description: "Remove all names from the tracker",
                            type: 1
                        },
                    ],
                };
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
            case "subraces":
                return {
                    name: "subraces",
                    description: "Returns info about 5e character sub-races",
                    type: 1,
                    options: [
                        {
                            name: "choices",
                            description: "Returns info about 5e character sub-races",
                            type: 3,
                            required: true,
                            choices: [
                                {
                                    name: "High Elf",
                                    value: "high-elf",
                                },
                                {
                                    name: "Hill Dwarf",
                                    value: "hill-dwarf",
                                },
                                {
                                    name: "Elf",
                                    value: "elf",
                                },
                                {
                                    name: "Lightfoot Halfling",
                                    value: "lightfoot-halfling",
                                },
                                {
                                    name: "Rock Gnome",
                                    value: "rock-gnome",
                                },
                            ],
                        },
                    ],
                };
            case "spells":
                return {
                    name: "spells",
                    description: "Returns info about 5e spells",
                    type: 1,
                    options: [
                        {
                            name: "search",
                            description: "Type a search term to get a list of matching spells",
                            type: 3,
                            required: true,
                        },
                    ],
                };
            case "monsters":
                return {
                    name: "monsters",
                    description: "Returns info about 5e monsters",
                    type: 1,
                    options: [
                        {
                            name: "search",
                            description: "Type a search term to get a list of matching monsters",
                            type: 3,
                            required: true,
                        },
                    ],
                };
            case "proficiencies":
                return {
                    name: "proficiencies",
                    description: "Returns info about 5e proficiencies",
                    type: 1,
                    options: [
                        {
                            name: "search",
                            description: "Type a search term to get a list of matching proficiencies",
                            type: 3,
                            required: true,
                        },
                    ],
                };
            case "features":
                return {
                    name: "features",
                    description: "Returns info about 5e features",
                    type: 1,
                    options: [
                        {
                            name: "search",
                            description: "Type a search term to get a list of matching features",
                            type: 3,
                            required: true,
                        },
                    ],
                };
            case "traits":
                return {
                    name: "traits",
                    description: "Returns info about 5e traits",
                    type: 1,
                    options: [
                        {
                            name: "search",
                            description: "Type a search term to get a list of matching traits",
                            type: 3,
                            required: true,
                        },
                    ],
                };
            case "equipment":
                return {
                    name: "equipment",
                    description: "Returns info about 5e equipment",
                    type: 1,
                    options: [
                        {
                            name: "search",
                            description: "Type a search term to get a list of matching equipment",
                            type: 3,
                            required: true,
                        },
                    ],
                };
            case "magicitems":
                return {
                    name: "magicitems",
                    description: "Returns info about 5e magic items",
                    type: 1,
                    options: [
                        {
                            name: "search",
                            description: "Type a search term to get a list of matching magic items",
                            type: 3,
                            required: true,
                        },
                    ],
                };
            case "roll":
                return {
                    name: "roll",
                    description: "Rolls dice",
                    type: 1,
                    options: [
                        {
                            name: "input",
                            description: "Example: 3 d8 + 5",
                            type: 3,
                            required: true,
                        },
                    ],
                };
            case "conditions":
                return {
                    name: "conditions",
                    description: "Returns info about 5e conditions",
                    type: 1,
                    options: [
                        {
                            name: "choices",
                            description: "Returns info about 5e conditions",
                            type: 3,
                            required: true,
                            choices: [
                                {
                                    name: "Blinded",
                                    value: "blinded",
                                },
                                {
                                    name: "Charmed",
                                    value: "charmed",
                                },
                                {
                                    name: "Deafened",
                                    value: "deafened",
                                },
                                {
                                    name: "Exhaustion",
                                    value: "exhaustion",
                                },
                                {
                                    name: "Frightened",
                                    value: "frightened",
                                },
                                {
                                    name: "Grappled",
                                    value: "grappled",
                                },
                                {
                                    name: "Incapacitated",
                                    value: "incapacitated",
                                },
                                {
                                    name: "Invisible",
                                    value: "invisible",
                                },
                                {
                                    name: "Paralyzed",
                                    value: "paralyzed",
                                },
                                {
                                    name: "Petrified",
                                    value: "petrified",
                                },
                                {
                                    name: "Poisoned",
                                    value: "poisoned",
                                },
                                {
                                    name: "Prone",
                                    value: "prone",
                                },
                                {
                                    name: "Restrained",
                                    value: "restrained",
                                },
                                {
                                    name: "Stunned",
                                    value: "stunned",
                                },
                                {
                                    name: "Unconscious",
                                    value: "unconscious",
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
                    ],
                };
            case "subclasses":
                return {
                    name: "subclasses",
                    description: "Returns info about 5e character sub-classes",
                    type: 1,
                    options: [
                        {
                            name: "subclass",
                            description: "Choose the type of sub-class",
                            type: 3,
                            required: true,
                            choices: [
                                {
                                    name: "Berserker",
                                    value: "berserker",
                                },
                                {
                                    name: "Champion",
                                    value: "champion",
                                },
                                {
                                    name: "Devotion",
                                    value: "devotion",
                                },
                                {
                                    name: "Draconic",
                                    value: "draconic",
                                },
                                {
                                    name: "Evocation",
                                    value: "evocation",
                                },
                                {
                                    name: "Fiend",
                                    value: "fiend",
                                },
                                {
                                    name: "Hunter",
                                    value: "hunter",
                                },
                                {
                                    name: "Land",
                                    value: "land",
                                },
                                {
                                    name: "Life",
                                    value: "life",
                                },
                                {
                                    name: "Lore",
                                    value: "lore",
                                },
                                {
                                    name: "Open Hand",
                                    value: "open-hand",
                                },
                                {
                                    name: "Thief",
                                    value: "thief",
                                },
                            ],
                        },
                    ],
                };
            default:
                return null;
        }
    });
}
exports.default = getSlashCommandBody;
