"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        index: "berserker",
        class: {
            index: "barbarian",
            name: "Barbarian",
            url: "/api/classes/barbarian",
        },
        name: "Berserker",
        subclass_flavor: "Primal Path",
        desc: [
            "For some barbarians, rage is a means to an end--that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.",
        ],
        subclass_levels: "/api/subclasses/berserker/levels",
        url: "/api/subclasses/berserker",
    },
    {
        index: "lore",
        class: {
            index: "bard",
            name: "Bard",
            url: "/api/classes/bard",
        },
        name: "Lore",
        subclass_flavor: "Bard College",
        desc: [
            "Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king. The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic. The college's members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority.",
        ],
        subclass_levels: "/api/subclasses/lore/levels",
        url: "/api/subclasses/lore",
    },
    {
        index: "life",
        class: {
            index: "cleric",
            name: "Cleric",
            url: "/api/classes/cleric",
        },
        name: "Life",
        subclass_flavor: "Divine Domain",
        desc: [
            "The Life domain focuses on the vibrant positive energy--one of the fundamental forces of the universe--that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities, sun gods, gods of healing or endurance, and gods of home and community.",
        ],
        spells: [
            {
                prerequisites: [
                    {
                        index: "cleric-1",
                        type: "level",
                        name: "Cleric 1",
                        url: "/api/classes/cleric/levels/1",
                    },
                ],
                spell: {
                    index: "bless",
                    name: "Bless",
                    url: "/api/spells/bless",
                },
            },
            {
                prerequisites: [
                    {
                        index: "cleric-1",
                        type: "level",
                        name: "Cleric 1",
                        url: "/api/classes/cleric/levels/1",
                    },
                ],
                spell: {
                    index: "cure-wounds",
                    name: "Cure Wounds",
                    url: "/api/spells/cure-wounds",
                },
            },
            {
                prerequisites: [
                    {
                        index: "cleric-3",
                        type: "level",
                        name: "Cleric 3",
                        url: "/api/classes/cleric/levels/3",
                    },
                ],
                spell: {
                    index: "lesser-restoration",
                    name: "Lesser Restoration",
                    url: "/api/spells/lesser-restoration",
                },
            },
            {
                prerequisites: [
                    {
                        index: "cleric-3",
                        type: "level",
                        name: "Cleric 3",
                        url: "/api/classes/cleric/levels/3",
                    },
                ],
                spell: {
                    index: "spiritual-weapon",
                    name: "Spiritual Weapon",
                    url: "/api/spells/spiritual-weapon",
                },
            },
            {
                prerequisites: [
                    {
                        index: "cleric-5",
                        type: "level",
                        name: "Cleric 5",
                        url: "/api/classes/cleric/levels/5",
                    },
                ],
                spell: {
                    index: "beacon-of-hope",
                    name: "Beacon of Hope",
                    url: "/api/spells/beacon-of-hope",
                },
            },
            {
                prerequisites: [
                    {
                        index: "cleric-5",
                        type: "level",
                        name: "Cleric 5",
                        url: "/api/classes/cleric/levels/5",
                    },
                ],
                spell: {
                    index: "revivify",
                    name: "Revivify",
                    url: "/api/spells/revivify",
                },
            },
            {
                prerequisites: [
                    {
                        index: "cleric-7",
                        type: "level",
                        name: "Cleric 7",
                        url: "/api/classes/cleric/levels/7",
                    },
                ],
                spell: {
                    index: "death-ward",
                    name: "Death Ward",
                    url: "/api/spells/death-ward",
                },
            },
            {
                prerequisites: [
                    {
                        index: "cleric-9",
                        type: "level",
                        name: "Cleric 9",
                        url: "/api/classes/cleric/levels/9",
                    },
                ],
                spell: {
                    index: "mass-cure-wounds",
                    name: "Mass Cure Wounds",
                    url: "/api/spells/mass-cure-wounds",
                },
            },
            {
                prerequisites: [
                    {
                        index: "cleric-9",
                        type: "level",
                        name: "Cleric 9",
                        url: "/api/classes/cleric/levels/9",
                    },
                ],
                spell: {
                    index: "raise-dead",
                    name: "Raise Dead",
                    url: "/api/spells/raise-dead",
                },
            },
        ],
        subclass_levels: "/api/subclasses/life/levels",
        url: "/api/subclasses/life",
    },
    {
        index: "land",
        class: {
            index: "druid",
            name: "Druid",
            url: "/api/classes/druid",
        },
        name: "Land",
        subclass_flavor: "Druid Circle",
        desc: [
            "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites.",
        ],
        spells: [
            {
                prerequisites: [
                    {
                        index: "druid-3",
                        type: "level",
                        name: "Druid 3",
                        url: "/api/classes/druid/levels/3",
                    },
                    {
                        index: "circle-of-the-land-arctic",
                        type: "feature",
                        name: "Circle of the Land: Arctic",
                        url: "/api/features/circle-of-the-land-arctic",
                    },
                ],
                spell: {
                    index: "hold-person",
                    name: "Hold Person",
                    url: "/api/spells/hold-person",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-3",
                        type: "level",
                        name: "Druid 3",
                        url: "/api/classes/druid/levels/3",
                    },
                    {
                        index: "circle-of-the-land-arctic",
                        type: "feature",
                        name: "Circle of the Land: Arctic",
                        url: "/api/features/circle-of-the-land-arctic",
                    },
                ],
                spell: {
                    index: "spike-growth",
                    name: "Spike Growth",
                    url: "/api/spells/spike-growth",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-5",
                        type: "level",
                        name: "Druid 5",
                        url: "/api/classes/druid/levels/5",
                    },
                    {
                        index: "circle-of-the-land-arctic",
                        type: "feature",
                        name: "Circle of the Land: Arctic",
                        url: "/api/features/circle-of-the-land-arctic",
                    },
                ],
                spell: {
                    index: "sleet-storm",
                    name: "Sleet Storm",
                    url: "/api/spells/sleet-storm",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-5",
                        type: "level",
                        name: "Druid 5",
                        url: "/api/classes/druid/levels/5",
                    },
                    {
                        index: "circle-of-the-land-arctic",
                        type: "feature",
                        name: "Circle of the Land: Arctic",
                        url: "/api/features/circle-of-the-land-arctic",
                    },
                ],
                spell: {
                    index: "slow",
                    name: "Slow",
                    url: "/api/spells/slow",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-7",
                        type: "level",
                        name: "Druid 7",
                        url: "/api/classes/druid/levels/7",
                    },
                    {
                        index: "circle-of-the-land-arctic",
                        type: "feature",
                        name: "Circle of the Land: Arctic",
                        url: "/api/features/circle-of-the-land-arctic",
                    },
                ],
                spell: {
                    index: "freedom-of-movement",
                    name: "Freedom of Movement",
                    url: "/api/spells/freedom-of-movement",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-7",
                        type: "level",
                        name: "Druid 7",
                        url: "/api/classes/druid/levels/7",
                    },
                    {
                        index: "circle-of-the-land-arctic",
                        type: "feature",
                        name: "Circle of the Land: Arctic",
                        url: "/api/features/circle-of-the-land-arctic",
                    },
                ],
                spell: {
                    index: "ice-storm",
                    name: "Ice Storm",
                    url: "/api/spells/ice-storm",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-9",
                        type: "level",
                        name: "Druid 9",
                        url: "/api/classes/druid/levels/9",
                    },
                    {
                        index: "circle-of-the-land-arctic",
                        type: "feature",
                        name: "Circle of the Land: Arctic",
                        url: "/api/features/circle-of-the-land-arctic",
                    },
                ],
                spell: {
                    index: "commune-with-nature",
                    name: "Commune With Nature",
                    url: "/api/spells/commune-with-nature",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-9",
                        type: "level",
                        name: "Druid 9",
                        url: "/api/classes/druid/levels/9",
                    },
                    {
                        index: "circle-of-the-land-arctic",
                        type: "feature",
                        name: "Circle of the Land: Arctic",
                        url: "/api/features/circle-of-the-land-arctic",
                    },
                ],
                spell: {
                    index: "cone-of-cold",
                    name: "Cone of Cold",
                    url: "/api/spells/cone-of-cold",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-3",
                        type: "level",
                        name: "Druid 3",
                        url: "/api/classes/druid/levels/3",
                    },
                    {
                        index: "circle-of-the-land-coast",
                        type: "feature",
                        name: "Circle of the Land: Coast",
                        url: "/api/features/circle-of-the-land-coast",
                    },
                ],
                spell: {
                    index: "mirror-image",
                    name: "Mirror Image",
                    url: "/api/spells/mirror-image",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-3",
                        type: "level",
                        name: "Druid 3",
                        url: "/api/classes/druid/levels/3",
                    },
                    {
                        index: "circle-of-the-land-coast",
                        type: "feature",
                        name: "Circle of the Land: Coast",
                        url: "/api/features/circle-of-the-land-coast",
                    },
                ],
                spell: {
                    index: "misty-step",
                    name: "Misty Step",
                    url: "/api/spells/misty-step",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-5",
                        type: "level",
                        name: "Druid 5",
                        url: "/api/classes/druid/levels/5",
                    },
                    {
                        index: "circle-of-the-land-coast",
                        type: "feature",
                        name: "Circle of the Land: Coast",
                        url: "/api/features/circle-of-the-land-coast",
                    },
                ],
                spell: {
                    index: "water-breathing",
                    name: "Water Breathing",
                    url: "/api/spells/water-breathing",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-5",
                        type: "level",
                        name: "Druid 5",
                        url: "/api/classes/druid/levels/5",
                    },
                    {
                        index: "circle-of-the-land-coast",
                        type: "feature",
                        name: "Circle of the Land: Coast",
                        url: "/api/features/circle-of-the-land-coast",
                    },
                ],
                spell: {
                    index: "water-walk",
                    name: "Water Walk",
                    url: "/api/spells/water-walk",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-7",
                        type: "level",
                        name: "Druid 7",
                        url: "/api/classes/druid/levels/7",
                    },
                    {
                        index: "circle-of-the-land-coast",
                        type: "feature",
                        name: "Circle of the Land: Coast",
                        url: "/api/features/circle-of-the-land-coast",
                    },
                ],
                spell: {
                    index: "control-water",
                    name: "Control Water",
                    url: "/api/spells/control-water",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-7",
                        type: "level",
                        name: "Druid 7",
                        url: "/api/classes/druid/levels/7",
                    },
                    {
                        index: "circle-of-the-land-coast",
                        type: "feature",
                        name: "Circle of the Land: Coast",
                        url: "/api/features/circle-of-the-land-coast",
                    },
                ],
                spell: {
                    index: "freedom-of-movement",
                    name: "Freedom of Movement",
                    url: "/api/spells/freedom-of-movement",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-9",
                        type: "level",
                        name: "Druid 9",
                        url: "/api/classes/druid/levels/9",
                    },
                    {
                        index: "circle-of-the-land-coast",
                        type: "feature",
                        name: "Circle of the Land: Coast",
                        url: "/api/features/circle-of-the-land-coast",
                    },
                ],
                spell: {
                    index: "conjure-elemental",
                    name: "Conjure Elemental",
                    url: "/api/spells/conjure-elemental",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-9",
                        type: "level",
                        name: "Druid 9",
                        url: "/api/classes/druid/levels/9",
                    },
                    {
                        index: "circle-of-the-land-coast",
                        type: "feature",
                        name: "Circle of the Land: Coast",
                        url: "/api/features/circle-of-the-land-coast",
                    },
                ],
                spell: {
                    index: "scrying",
                    name: "Scrying",
                    url: "/api/spells/scrying",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-3",
                        type: "level",
                        name: "Druid 3",
                        url: "/api/classes/druid/levels/3",
                    },
                    {
                        index: "circle-of-the-land-desert",
                        type: "feature",
                        name: "Circle of the Land: Desert",
                        url: "/api/features/circle-of-the-land-desert",
                    },
                ],
                spell: {
                    index: "blur",
                    name: "Blur",
                    url: "/api/spells/blur",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-3",
                        type: "level",
                        name: "Druid 3",
                        url: "/api/classes/druid/levels/3",
                    },
                    {
                        index: "circle-of-the-land-desert",
                        type: "feature",
                        name: "Circle of the Land: Desert",
                        url: "/api/features/circle-of-the-land-desert",
                    },
                ],
                spell: {
                    index: "silence",
                    name: "Silence",
                    url: "/api/spells/silence",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-5",
                        type: "level",
                        name: "Druid 5",
                        url: "/api/classes/druid/levels/5",
                    },
                    {
                        index: "circle-of-the-land-desert",
                        type: "feature",
                        name: "Circle of the Land: Desert",
                        url: "/api/features/circle-of-the-land-desert",
                    },
                ],
                spell: {
                    index: "create-food-and-water",
                    name: "Create Food and Water",
                    url: "/api/spells/create-food-and-water",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-5",
                        type: "level",
                        name: "Druid 5",
                        url: "/api/classes/druid/levels/5",
                    },
                    {
                        index: "circle-of-the-land-desert",
                        type: "feature",
                        name: "Circle of the Land: Desert",
                        url: "/api/features/circle-of-the-land-desert",
                    },
                ],
                spell: {
                    index: "protection-from-energy",
                    name: "Protection From Energy",
                    url: "/api/spells/protection-from-energy",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-7",
                        type: "level",
                        name: "Druid 7",
                        url: "/api/classes/druid/levels/7",
                    },
                    {
                        index: "circle-of-the-land-desert",
                        type: "feature",
                        name: "Circle of the Land: Desert",
                        url: "/api/features/circle-of-the-land-desert",
                    },
                ],
                spell: {
                    index: "blight",
                    name: "Blight",
                    url: "/api/spells/blight",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-7",
                        type: "level",
                        name: "Druid 7",
                        url: "/api/classes/druid/levels/7",
                    },
                    {
                        index: "circle-of-the-land-desert",
                        type: "feature",
                        name: "Circle of the Land: Desert",
                        url: "/api/features/circle-of-the-land-desert",
                    },
                ],
                spell: {
                    index: "hallucinatory-terrain",
                    name: "Hallucinatory Terrain",
                    url: "/api/spells/hallucinatory-terrain",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-9",
                        type: "level",
                        name: "Druid 9",
                        url: "/api/classes/druid/levels/9",
                    },
                    {
                        index: "circle-of-the-land-desert",
                        type: "feature",
                        name: "Circle of the Land: Desert",
                        url: "/api/features/circle-of-the-land-desert",
                    },
                ],
                spell: {
                    index: "insect-plague",
                    name: "Insect Plague",
                    url: "/api/spells/insect-plague",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-9",
                        type: "level",
                        name: "Druid 9",
                        url: "/api/classes/druid/levels/9",
                    },
                    {
                        index: "circle-of-the-land-desert",
                        type: "feature",
                        name: "Circle of the Land: Desert",
                        url: "/api/features/circle-of-the-land-desert",
                    },
                ],
                spell: {
                    index: "wall-of-stone",
                    name: "Wall of Stone",
                    url: "/api/spells/wall-of-stone",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-3",
                        type: "level",
                        name: "Druid 3",
                        url: "/api/classes/druid/levels/3",
                    },
                    {
                        index: "circle-of-the-land-forest",
                        type: "feature",
                        name: "Circle of the Land: Forest",
                        url: "/api/features/circle-of-the-land-forest",
                    },
                ],
                spell: {
                    index: "barkskin",
                    name: "Barkskin",
                    url: "/api/spells/barkskin",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-3",
                        type: "level",
                        name: "Druid 3",
                        url: "/api/classes/druid/levels/3",
                    },
                    {
                        index: "circle-of-the-land-forest",
                        type: "feature",
                        name: "Circle of the Land: Forest",
                        url: "/api/features/circle-of-the-land-forest",
                    },
                ],
                spell: {
                    index: "spider-climb",
                    name: "Spider Climb",
                    url: "/api/spells/spider-climb",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-5",
                        type: "level",
                        name: "Druid 5",
                        url: "/api/classes/druid/levels/5",
                    },
                    {
                        index: "circle-of-the-land-forest",
                        type: "feature",
                        name: "Circle of the Land: Forest",
                        url: "/api/features/circle-of-the-land-forest",
                    },
                ],
                spell: {
                    index: "call-lightning",
                    name: "Call Lightning",
                    url: "/api/spells/call-lightning",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-5",
                        type: "level",
                        name: "Druid 5",
                        url: "/api/classes/druid/levels/5",
                    },
                    {
                        index: "circle-of-the-land-forest",
                        type: "feature",
                        name: "Circle of the Land: Forest",
                        url: "/api/features/circle-of-the-land-forest",
                    },
                ],
                spell: {
                    index: "plant-growth",
                    name: "Plant Growth",
                    url: "/api/spells/plant-growth",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-7",
                        type: "level",
                        name: "Druid 7",
                        url: "/api/classes/druid/levels/7",
                    },
                    {
                        index: "circle-of-the-land-forest",
                        type: "feature",
                        name: "Circle of the Land: Forest",
                        url: "/api/features/circle-of-the-land-forest",
                    },
                ],
                spell: {
                    index: "divination",
                    name: "Divination",
                    url: "/api/spells/divination",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-7",
                        type: "level",
                        name: "Druid 7",
                        url: "/api/classes/druid/levels/7",
                    },
                    {
                        index: "circle-of-the-land-forest",
                        type: "feature",
                        name: "Circle of the Land: Forest",
                        url: "/api/features/circle-of-the-land-forest",
                    },
                ],
                spell: {
                    index: "freedom-of-movement",
                    name: "Freedom of Movement",
                    url: "/api/spells/freedom-of-movement",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-9",
                        type: "level",
                        name: "Druid 9",
                        url: "/api/classes/druid/levels/9",
                    },
                    {
                        index: "circle-of-the-land-forest",
                        type: "feature",
                        name: "Circle of the Land: Forest",
                        url: "/api/features/circle-of-the-land-forest",
                    },
                ],
                spell: {
                    index: "commune-with-nature",
                    name: "Commune With Nature",
                    url: "/api/spells/commune-with-nature",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-9",
                        type: "level",
                        name: "Druid 9",
                        url: "/api/classes/druid/levels/9",
                    },
                    {
                        index: "circle-of-the-land-forest",
                        type: "feature",
                        name: "Circle of the Land: Forest",
                        url: "/api/features/circle-of-the-land-forest",
                    },
                ],
                spell: {
                    index: "tree-stride",
                    name: "Tree Stride",
                    url: "/api/spells/tree-stride",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-3",
                        type: "level",
                        name: "Druid 3",
                        url: "/api/classes/druid/levels/3",
                    },
                    {
                        index: "circle-of-the-land-grassland",
                        type: "feature",
                        name: "Circle of the Land: Grassland",
                        url: "/api/features/circle-of-the-land-grassland",
                    },
                ],
                spell: {
                    index: "invisibility",
                    name: "Invisibility",
                    url: "/api/spells/invisibility",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-3",
                        type: "level",
                        name: "Druid 3",
                        url: "/api/classes/druid/levels/3",
                    },
                    {
                        index: "circle-of-the-land-grassland",
                        type: "feature",
                        name: "Circle of the Land: Grassland",
                        url: "/api/features/circle-of-the-land-grassland",
                    },
                ],
                spell: {
                    index: "pass-without-trace",
                    name: "Pass Without Trace",
                    url: "/api/spells/pass-without-trace",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-5",
                        type: "level",
                        name: "Druid 5",
                        url: "/api/classes/druid/levels/5",
                    },
                    {
                        index: "circle-of-the-land-grassland",
                        type: "feature",
                        name: "Circle of the Land: Grassland",
                        url: "/api/features/circle-of-the-land-grassland",
                    },
                ],
                spell: {
                    index: "daylight",
                    name: "Daylight",
                    url: "/api/spells/daylight",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-5",
                        type: "level",
                        name: "Druid 5",
                        url: "/api/classes/druid/levels/5",
                    },
                    {
                        index: "circle-of-the-land-grassland",
                        type: "feature",
                        name: "Circle of the Land: Grassland",
                        url: "/api/features/circle-of-the-land-grassland",
                    },
                ],
                spell: {
                    index: "haste",
                    name: "Haste",
                    url: "/api/spells/haste",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-7",
                        type: "level",
                        name: "Druid 7",
                        url: "/api/classes/druid/levels/7",
                    },
                    {
                        index: "circle-of-the-land-grassland",
                        type: "feature",
                        name: "Circle of the Land: Grassland",
                        url: "/api/features/circle-of-the-land-grassland",
                    },
                ],
                spell: {
                    index: "divination",
                    name: "Divination",
                    url: "/api/spells/divination",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-7",
                        type: "level",
                        name: "Druid 7",
                        url: "/api/classes/druid/levels/7",
                    },
                    {
                        index: "circle-of-the-land-grassland",
                        type: "feature",
                        name: "Circle of the Land: Grassland",
                        url: "/api/features/circle-of-the-land-grassland",
                    },
                ],
                spell: {
                    index: "freedom-of-movement",
                    name: "Freedom of Movement",
                    url: "/api/spells/freedom-of-movement",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-9",
                        type: "level",
                        name: "Druid 9",
                        url: "/api/classes/druid/levels/9",
                    },
                    {
                        index: "circle-of-the-land-grassland",
                        type: "feature",
                        name: "Circle of the Land: Grassland",
                        url: "/api/features/circle-of-the-land-grassland",
                    },
                ],
                spell: {
                    index: "dream",
                    name: "Dream",
                    url: "/api/spells/dream",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-9",
                        type: "level",
                        name: "Druid 9",
                        url: "/api/classes/druid/levels/9",
                    },
                    {
                        index: "circle-of-the-land-grassland",
                        type: "feature",
                        name: "Circle of the Land: Grassland",
                        url: "/api/features/circle-of-the-land-grassland",
                    },
                ],
                spell: {
                    index: "insect-plague",
                    name: "Insect Plague",
                    url: "/api/spells/insect-plague",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-3",
                        type: "level",
                        name: "Druid 3",
                        url: "/api/classes/druid/levels/3",
                    },
                    {
                        index: "circle-of-the-land-mountain",
                        type: "feature",
                        name: "Circle of the Land: Mountain",
                        url: "/api/features/circle-of-the-land-mountain",
                    },
                ],
                spell: {
                    index: "spider-climb",
                    name: "Spider Climb",
                    url: "/api/spells/spider-climb",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-3",
                        type: "level",
                        name: "Druid 3",
                        url: "/api/classes/druid/levels/3",
                    },
                    {
                        index: "circle-of-the-land-mountain",
                        type: "feature",
                        name: "Circle of the Land: Mountain",
                        url: "/api/features/circle-of-the-land-mountain",
                    },
                ],
                spell: {
                    index: "spike-growth",
                    name: "Spike Growth",
                    url: "/api/spells/spike-growth",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-5",
                        type: "level",
                        name: "Druid 5",
                        url: "/api/classes/druid/levels/5",
                    },
                    {
                        index: "circle-of-the-land-mountain",
                        type: "feature",
                        name: "Circle of the Land: Mountain",
                        url: "/api/features/circle-of-the-land-mountain",
                    },
                ],
                spell: {
                    index: "lightning-bolt",
                    name: "Lightning Bolt",
                    url: "/api/spells/lightning-bolt",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-5",
                        type: "level",
                        name: "Druid 5",
                        url: "/api/classes/druid/levels/5",
                    },
                    {
                        index: "circle-of-the-land-mountain",
                        type: "feature",
                        name: "Circle of the Land: Mountain",
                        url: "/api/features/circle-of-the-land-mountain",
                    },
                ],
                spell: {
                    index: "meld-into-stone",
                    name: "Meld Into Stone",
                    url: "/api/spells/meld-into-stone",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-7",
                        type: "level",
                        name: "Druid 7",
                        url: "/api/classes/druid/levels/7",
                    },
                    {
                        index: "circle-of-the-land-mountain",
                        type: "feature",
                        name: "Circle of the Land: Mountain",
                        url: "/api/features/circle-of-the-land-mountain",
                    },
                ],
                spell: {
                    index: "stone-shape",
                    name: "Stone Shape",
                    url: "/api/spells/stone-shape",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-7",
                        type: "level",
                        name: "Druid 7",
                        url: "/api/classes/druid/levels/7",
                    },
                    {
                        index: "circle-of-the-land-mountain",
                        type: "feature",
                        name: "Circle of the Land: Mountain",
                        url: "/api/features/circle-of-the-land-mountain",
                    },
                ],
                spell: {
                    index: "stoneskin",
                    name: "Stoneskin",
                    url: "/api/spells/stoneskin",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-9",
                        type: "level",
                        name: "Druid 9",
                        url: "/api/classes/druid/levels/9",
                    },
                    {
                        index: "circle-of-the-land-mountain",
                        type: "feature",
                        name: "Circle of the Land: Mountain",
                        url: "/api/features/circle-of-the-land-mountain",
                    },
                ],
                spell: {
                    index: "passwall",
                    name: "Passwall",
                    url: "/api/spells/passwall",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-9",
                        type: "level",
                        name: "Druid 9",
                        url: "/api/classes/druid/levels/9",
                    },
                    {
                        index: "circle-of-the-land-mountain",
                        type: "feature",
                        name: "Circle of the Land: Mountain",
                        url: "/api/features/circle-of-the-land-mountain",
                    },
                ],
                spell: {
                    index: "wall-of-stone",
                    name: "Wall of Stone",
                    url: "/api/spells/wall-of-stone",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-3",
                        type: "level",
                        name: "Druid 3",
                        url: "/api/classes/druid/levels/3",
                    },
                    {
                        index: "circle-of-the-land-swamp",
                        type: "feature",
                        name: "Circle of the Land: Swamp",
                        url: "/api/features/circle-of-the-land-swamp",
                    },
                ],
                spell: {
                    index: "acid-arrow",
                    name: "Acid Arrow",
                    url: "/api/spells/acid-arrow",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-3",
                        type: "level",
                        name: "Druid 3",
                        url: "/api/classes/druid/levels/3",
                    },
                    {
                        index: "circle-of-the-land-swamp",
                        type: "feature",
                        name: "Circle of the Land: Swamp",
                        url: "/api/features/circle-of-the-land-swamp",
                    },
                ],
                spell: {
                    index: "darkness",
                    name: "Darkness",
                    url: "/api/spells/darkness",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-5",
                        type: "level",
                        name: "Druid 5",
                        url: "/api/classes/druid/levels/5",
                    },
                    {
                        index: "circle-of-the-land-swamp",
                        type: "feature",
                        name: "Circle of the Land: Swamp",
                        url: "/api/features/circle-of-the-land-swamp",
                    },
                ],
                spell: {
                    index: "water-walk",
                    name: "Water Walk",
                    url: "/api/spells/water-walk",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-5",
                        type: "level",
                        name: "Druid 5",
                        url: "/api/classes/druid/levels/5",
                    },
                    {
                        index: "circle-of-the-land-swamp",
                        type: "feature",
                        name: "Circle of the Land: Swamp",
                        url: "/api/features/circle-of-the-land-swamp",
                    },
                ],
                spell: {
                    index: "stinking-cloud",
                    name: "Stinking Cloud",
                    url: "/api/spells/stinking-cloud",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-7",
                        type: "level",
                        name: "Druid 7",
                        url: "/api/classes/druid/levels/7",
                    },
                    {
                        index: "circle-of-the-land-swamp",
                        type: "feature",
                        name: "Circle of the Land: Swamp",
                        url: "/api/features/circle-of-the-land-swamp",
                    },
                ],
                spell: {
                    index: "freedom-of-movement",
                    name: "Freedom of Movement",
                    url: "/api/spells/freedom-of-movement",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-7",
                        type: "level",
                        name: "Druid 7",
                        url: "/api/classes/druid/levels/7",
                    },
                    {
                        index: "circle-of-the-land-swamp",
                        type: "feature",
                        name: "Circle of the Land: Swamp",
                        url: "/api/features/circle-of-the-land-swamp",
                    },
                ],
                spell: {
                    index: "locate-creature",
                    name: "Locate Creature",
                    url: "/api/spells/locate-creature",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-9",
                        type: "level",
                        name: "Druid 9",
                        url: "/api/classes/druid/levels/9",
                    },
                    {
                        index: "circle-of-the-land-swamp",
                        type: "feature",
                        name: "Circle of the Land: Swamp",
                        url: "/api/features/circle-of-the-land-swamp",
                    },
                ],
                spell: {
                    index: "insect-plague",
                    name: "Insect Plague",
                    url: "/api/spells/insect-plague",
                },
            },
            {
                prerequisites: [
                    {
                        index: "druid-9",
                        type: "level",
                        name: "Druid 9",
                        url: "/api/classes/druid/levels/9",
                    },
                    {
                        index: "circle-of-the-land-swamp",
                        type: "feature",
                        name: "Circle of the Land: Swamp",
                        url: "/api/features/circle-of-the-land-swamp",
                    },
                ],
                spell: {
                    index: "scrying",
                    name: "Scrying",
                    url: "/api/spells/scrying",
                },
            },
        ],
        subclass_levels: "/api/subclasses/land/levels",
        url: "/api/subclasses/land",
    },
    {
        index: "champion",
        class: {
            index: "fighter",
            name: "Fighter",
            url: "/api/classes/fighter",
        },
        name: "Champion",
        subclass_flavor: "Martial Archetype",
        desc: [
            "The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows.",
        ],
        subclass_levels: "/api/subclasses/champion/levels",
        url: "/api/subclasses/champion",
    },
    {
        index: "open-hand",
        class: {
            index: "monk",
            name: "Monk",
            url: "/api/classes/monk",
        },
        name: "Open Hand",
        subclass_flavor: "Monastic Tradition",
        desc: [
            "Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm.",
        ],
        subclass_levels: "/api/subclasses/open-hand/levels",
        url: "/api/subclasses/open-hand",
    },
    {
        index: "devotion",
        class: {
            index: "paladin",
            name: "Paladin",
            url: "/api/classes/paladin",
        },
        name: "Devotion",
        subclass_flavor: "Sacred Oath",
        desc: [
            "The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods' tenets as the measure of their devotion. They hold angels--the perfect servants of good--as their ideals, and incorporate images of angelic wings into their helmets or coats of arms.",
        ],
        spells: [
            {
                prerequisites: [
                    {
                        index: "paladin-3",
                        type: "level",
                        name: "Paladin 3",
                        url: "/api/classes/paladin/levels/3",
                    },
                ],
                spell: {
                    index: "protection-from-evil-and-good",
                    name: "Protection from Evil and Good",
                    url: "/api/spells/protection-from-evil-and-good",
                },
            },
            {
                prerequisites: [
                    {
                        index: "paladin-3",
                        type: "level",
                        name: "Paladin 3",
                        url: "/api/classes/paladin/levels/3",
                    },
                ],
                spell: {
                    index: "sanctuary",
                    name: "Sanctuary",
                    url: "/api/spells/sanctuary",
                },
            },
            {
                prerequisites: [
                    {
                        index: "paladin-5",
                        type: "level",
                        name: "Paladin 5",
                        url: "/api/classes/paladin/levels/5",
                    },
                ],
                spell: {
                    index: "lesser-restoration",
                    name: "Lesser Restoration",
                    url: "/api/spells/lesser-restoration",
                },
            },
            {
                prerequisites: [
                    {
                        index: "paladin-5",
                        type: "level",
                        name: "Paladin 5",
                        url: "/api/classes/paladin/levels/5",
                    },
                ],
                spell: {
                    index: "zone-of-truth",
                    name: "Zone of Truth",
                    url: "/api/spells/zone-of-truth",
                },
            },
            {
                prerequisites: [
                    {
                        index: "paladin-9",
                        type: "level",
                        name: "Paladin 9",
                        url: "/api/classes/paladin/levels/9",
                    },
                ],
                spell: {
                    index: "beacon-of-hope",
                    name: "Beacon of Hope",
                    url: "/api/spells/beacon-of-hope",
                },
            },
            {
                prerequisites: [
                    {
                        index: "paladin-9",
                        type: "level",
                        name: "Paladin 9",
                        url: "/api/classes/paladin/levels/9",
                    },
                ],
                spell: {
                    index: "dispel-magic",
                    name: "Dispel Magic",
                    url: "/api/spells/dispel-magic",
                },
            },
            {
                prerequisites: [
                    {
                        index: "paladin-13",
                        type: "level",
                        name: "Paladin 13",
                        url: "/api/classes/paladin/levels/13",
                    },
                ],
                spell: {
                    index: "freedom-of-movement",
                    name: "Freedom of Movement",
                    url: "/api/spells/freedom-of-movement",
                },
            },
            {
                prerequisites: [
                    {
                        index: "paladin-13",
                        type: "level",
                        name: "Paladin 13",
                        url: "/api/classes/paladin/levels/13",
                    },
                ],
                spell: {
                    index: "guardian-of-faith",
                    name: "Guardian of Faith",
                    url: "/api/spells/guardian-of-faith",
                },
            },
            {
                prerequisites: [
                    {
                        index: "paladin-17",
                        type: "level",
                        name: "Paladin 17",
                        url: "/api/classes/paladin/levels/17",
                    },
                ],
                spell: {
                    index: "commune",
                    name: "Commune",
                    url: "/api/spells/commune",
                },
            },
            {
                prerequisites: [
                    {
                        index: "paladin-17",
                        type: "level",
                        name: "Paladin 17",
                        url: "/api/classes/paladin/levels/17",
                    },
                ],
                spell: {
                    index: "flame-strike",
                    name: "Flame Strike",
                    url: "/api/spells/flame-strike",
                },
            },
        ],
        subclass_levels: "/api/subclasses/devotion/levels",
        url: "/api/subclasses/devotion",
    },
    {
        index: "hunter",
        class: {
            index: "ranger",
            name: "Ranger",
            url: "/api/classes/ranger",
        },
        name: "Hunter",
        subclass_flavor: "Ranger Archetype",
        desc: [
            "Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of the wilderness. As you walk the Hunter's path, you learn specialized techniques for fighting the threats you face, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons.",
        ],
        subclass_levels: "/api/subclasses/hunter/levels",
        url: "/api/subclasses/hunter",
    },
    {
        index: "thief",
        class: {
            index: "rogue",
            name: "Rogue",
            url: "/api/classes/rogue",
        },
        name: "Thief",
        subclass_flavor: "Roguish Archetype",
        desc: [
            "You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype, but so do rogues who prefer to think of themselves as professional treasure seekers, explorers, delvers, and investigators. In addition to improving your agility and stealth, you learn skills useful for delving into ancient ruins, reading unfamiliar languages, and using magic items you normally couldn't employ.",
        ],
        subclass_levels: "/api/subclasses/thief/levels",
        url: "/api/subclasses/thief",
    },
    {
        index: "draconic",
        class: {
            index: "sorcerer",
            name: "Sorcerer",
            url: "/api/classes/sorcerer",
        },
        name: "Draconic",
        subclass_flavor: "Sorcerous Origin",
        desc: [
            "Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance.",
        ],
        subclass_levels: "/api/subclasses/draconic/levels",
        url: "/api/subclasses/draconic",
    },
    {
        index: "fiend",
        class: {
            index: "warlock",
            name: "Warlock",
            url: "/api/classes/warlock",
        },
        name: "Fiend",
        subclass_flavor: "Otherworldly Patron",
        desc: [
            "You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths.",
        ],
        spells: [
            {
                prerequisites: [
                    {
                        index: "warlock-1",
                        type: "level",
                        name: "Warlock 1",
                        url: "/api/classes/warlock/levels/1",
                    },
                ],
                spell: {
                    index: "burning-hands",
                    name: "Burning Hands",
                    url: "/api/spells/burning-hands",
                },
            },
            {
                prerequisites: [
                    {
                        index: "warlock-1",
                        type: "level",
                        name: "Warlock 1",
                        url: "/api/classes/warlock/levels/1",
                    },
                ],
                spell: {
                    index: "command",
                    name: "Command",
                    url: "/api/spells/command",
                },
            },
            {
                prerequisites: [
                    {
                        index: "warlock-3",
                        type: "level",
                        name: "Warlock 3",
                        url: "/api/classes/warlock/levels/3",
                    },
                ],
                spell: {
                    index: "blindness-deafness",
                    name: "Blindness/Deafness",
                    url: "/api/spells/blindness-deafness",
                },
            },
            {
                prerequisites: [
                    {
                        index: "warlock-3",
                        type: "level",
                        name: "Warlock 3",
                        url: "/api/classes/warlock/levels/3",
                    },
                ],
                spell: {
                    index: "scorching-ray",
                    name: "Scorching Ray",
                    url: "/api/spells/scorching-ray",
                },
            },
            {
                prerequisites: [
                    {
                        index: "warlock-5",
                        type: "level",
                        name: "Warlock 5",
                        url: "/api/classes/warlock/levels/5",
                    },
                ],
                spell: {
                    index: "fireball",
                    name: "Fireball",
                    url: "/api/spells/fireball",
                },
            },
            {
                prerequisites: [
                    {
                        index: "warlock-5",
                        type: "level",
                        name: "Warlock 5",
                        url: "/api/classes/warlock/levels/5",
                    },
                ],
                spell: {
                    index: "stinking-cloud",
                    name: "Stinking Cloud",
                    url: "/api/spells/stinking-cloud",
                },
            },
            {
                prerequisites: [
                    {
                        index: "warlock-7",
                        type: "level",
                        name: "Warlock 7",
                        url: "/api/classes/warlock/levels/7",
                    },
                ],
                spell: {
                    index: "fire-shield",
                    name: "Fire Shield",
                    url: "/api/spells/fire-shield",
                },
            },
            {
                prerequisites: [
                    {
                        index: "warlock-7",
                        type: "level",
                        name: "Warlock 7",
                        url: "/api/classes/warlock/levels/7",
                    },
                ],
                spell: {
                    index: "wall-of-fire",
                    name: "Wall of Fire",
                    url: "/api/spells/wall-of-fire",
                },
            },
            {
                prerequisites: [
                    {
                        index: "warlock-9",
                        type: "level",
                        name: "Warlock 9",
                        url: "/api/classes/warlock/levels/9",
                    },
                ],
                spell: {
                    index: "flame-strike",
                    name: "Flame Strike",
                    url: "/api/spells/flame-strike",
                },
            },
            {
                prerequisites: [
                    {
                        index: "warlock-9",
                        type: "level",
                        name: "Warlock 9",
                        url: "/api/classes/warlock/levels/9",
                    },
                ],
                spell: {
                    index: "hallow",
                    name: "Hallow",
                    url: "/api/spells/hallow",
                },
            },
        ],
        subclass_levels: "/api/subclasses/fiend/levels",
        url: "/api/subclasses/fiend",
    },
    {
        index: "evocation",
        class: {
            index: "wizard",
            name: "Wizard",
            url: "/api/classes/wizard",
        },
        name: "Evocation",
        subclass_flavor: "Arcane Tradition",
        desc: [
            "You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants.",
        ],
        subclass_levels: "/api/subclasses/evocation/levels",
        url: "/api/subclasses/evocation",
    },
];
