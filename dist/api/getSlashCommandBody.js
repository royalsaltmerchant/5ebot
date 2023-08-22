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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function getSlashCommandBody(slashCommandName) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (slashCommandName) {
                case "help":
                    return [2, {
                            name: "skills",
                            description: "Returns help info",
                            type: 1,
                        }];
                case "skills":
                    return [2, {
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
                        }];
                case "ability-scores":
                    return [2, {
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
                        }];
                case "alignments":
                    return [2, {
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
                        }];
                case "languages":
                    return [2, {
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
                        }];
                case "races":
                    return [2, {
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
                        }];
                case "spells":
                    return [2, {
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
                        }];
                case "proficiencies":
                    return [2, {
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
                        }];
                case "features":
                    return [2, {
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
                        }];
                case "traits":
                    return [2, {
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
                        }];
                case "equipment":
                    return [2, {
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
                        }];
                case "magicitems":
                    return [2, {
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
                        }];
                case "roll":
                    return [2, {
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
                        }];
                case "conditions":
                    return [2, {
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
                        }];
                case "classes":
                    return [2, {
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
                        }];
                default:
                    return [2, null];
            }
            return [2];
        });
    });
}
exports.default = getSlashCommandBody;
