"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const features = [
    {
        index: "action-surge-1-use",
        name: "Action Surge (1 use)",
        url: "/api/features/action-surge-1-use",
    },
    {
        index: "action-surge-2-uses",
        name: "Action Surge (2 uses)",
        url: "/api/features/action-surge-2-uses",
    },
    {
        index: "additional-fighting-style",
        name: "Additional Fighting Style",
        url: "/api/features/additional-fighting-style",
    },
    {
        index: "additional-magical-secrets",
        name: "Additional Magical Secrets",
        url: "/api/features/additional-magical-secrets",
    },
    {
        index: "arcane-recovery",
        name: "Arcane Recovery",
        url: "/api/features/arcane-recovery",
    },
    {
        index: "arcane-tradition",
        name: "Arcane Tradition",
        url: "/api/features/arcane-tradition",
    },
    {
        index: "archdruid",
        name: "Archdruid",
        url: "/api/features/archdruid",
    },
    {
        index: "aura-improvements",
        name: "Aura improvements",
        url: "/api/features/aura-improvements",
    },
    {
        index: "aura-of-courage",
        name: "Aura of Courage",
        url: "/api/features/aura-of-courage",
    },
    {
        index: "aura-of-devotion",
        name: "Aura of Devotion",
        url: "/api/features/aura-of-devotion",
    },
    {
        index: "aura-of-protection",
        name: "Aura of Protection",
        url: "/api/features/aura-of-protection",
    },
    {
        index: "barbarian-ability-score-improvement-1",
        name: "Ability Score Improvement",
        url: "/api/features/barbarian-ability-score-improvement-1",
    },
    {
        index: "barbarian-ability-score-improvement-2",
        name: "Ability Score Improvement",
        url: "/api/features/barbarian-ability-score-improvement-2",
    },
    {
        index: "barbarian-ability-score-improvement-3",
        name: "Ability Score Improvement",
        url: "/api/features/barbarian-ability-score-improvement-3",
    },
    {
        index: "barbarian-ability-score-improvement-4",
        name: "Ability Score Improvement",
        url: "/api/features/barbarian-ability-score-improvement-4",
    },
    {
        index: "barbarian-ability-score-improvement-5",
        name: "Ability Score Improvement",
        url: "/api/features/barbarian-ability-score-improvement-5",
    },
    {
        index: "barbarian-extra-attack",
        name: "Extra Attack",
        url: "/api/features/barbarian-extra-attack",
    },
    {
        index: "barbarian-unarmored-defense",
        name: "Unarmored Defense",
        url: "/api/features/barbarian-unarmored-defense",
    },
    {
        index: "bard-ability-score-improvement-1",
        name: "Ability Score Improvement",
        url: "/api/features/bard-ability-score-improvement-1",
    },
    {
        index: "bard-ability-score-improvement-2",
        name: "Ability Score Improvement",
        url: "/api/features/bard-ability-score-improvement-2",
    },
    {
        index: "bard-ability-score-improvement-3",
        name: "Ability Score Improvement",
        url: "/api/features/bard-ability-score-improvement-3",
    },
    {
        index: "bard-ability-score-improvement-4",
        name: "Ability Score Improvement",
        url: "/api/features/bard-ability-score-improvement-4",
    },
    {
        index: "bard-ability-score-improvement-5",
        name: "Ability Score Improvement",
        url: "/api/features/bard-ability-score-improvement-5",
    },
    {
        index: "bard-college",
        name: "Bard College",
        url: "/api/features/bard-college",
    },
    {
        index: "bard-expertise-1",
        name: "Expertise",
        url: "/api/features/bard-expertise-1",
    },
    {
        index: "bard-expertise-2",
        name: "Expertise",
        url: "/api/features/bard-expertise-2",
    },
    {
        index: "bardic-inspiration-d10",
        name: "Bardic Inspiration (d10)",
        url: "/api/features/bardic-inspiration-d10",
    },
    {
        index: "bardic-inspiration-d12",
        name: "Bardic Inspiration (d12)",
        url: "/api/features/bardic-inspiration-d12",
    },
    {
        index: "bardic-inspiration-d6",
        name: "Bardic Inspiration (d6)",
        url: "/api/features/bardic-inspiration-d6",
    },
    {
        index: "bardic-inspiration-d8",
        name: "Bardic Inspiration (d8)",
        url: "/api/features/bardic-inspiration-d8",
    },
    {
        index: "beast-spells",
        name: "Beast Spells",
        url: "/api/features/beast-spells",
    },
    {
        index: "blessed-healer",
        name: "Blessed Healer",
        url: "/api/features/blessed-healer",
    },
    {
        index: "blindsense",
        name: "Blindsense",
        url: "/api/features/blindsense",
    },
    {
        index: "bonus-cantrip",
        name: "Bonus Cantrip",
        url: "/api/features/bonus-cantrip",
    },
    {
        index: "bonus-proficiencies",
        name: "Bonus Proficiencies",
        url: "/api/features/bonus-proficiencies",
    },
    {
        index: "bonus-proficiency",
        name: "Bonus Proficiency",
        url: "/api/features/bonus-proficiency",
    },
    {
        index: "brutal-critical-1-die",
        name: "Brutal Critical (1 die)",
        url: "/api/features/brutal-critical-1-die",
    },
    {
        index: "brutal-critical-2-dice",
        name: "Brutal Critical (2 dice)",
        url: "/api/features/brutal-critical-2-dice",
    },
    {
        index: "brutal-critical-3-dice",
        name: "Brutal Critical (3 dice)",
        url: "/api/features/brutal-critical-3-dice",
    },
    {
        index: "channel-divinity",
        name: "Channel Divinity",
        url: "/api/features/channel-divinity",
    },
    {
        index: "channel-divinity-1-rest",
        name: "Channel Divinity (1/rest)",
        url: "/api/features/channel-divinity-1-rest",
    },
    {
        index: "channel-divinity-2-rest",
        name: "Channel Divinity (2/rest)",
        url: "/api/features/channel-divinity-2-rest",
    },
    {
        index: "channel-divinity-3-rest",
        name: "Channel Divinity (3/rest)",
        url: "/api/features/channel-divinity-3-rest",
    },
    {
        index: "channel-divinity-preserve-life",
        name: "Channel Divinity: Preserve Life",
        url: "/api/features/channel-divinity-preserve-life",
    },
    {
        index: "channel-divinity-sacred-weapon",
        name: "Channel Divinity: Sacred Weapon",
        url: "/api/features/channel-divinity-sacred-weapon",
    },
    {
        index: "channel-divinity-turn-the-unholy",
        name: "Channel Divinity: Turn the Unholy",
        url: "/api/features/channel-divinity-turn-the-unholy",
    },
    {
        index: "channel-divinity-turn-undead",
        name: "Channel Divinity: Turn Undead",
        url: "/api/features/channel-divinity-turn-undead",
    },
    {
        index: "circle-of-the-land",
        name: "Circle of the Land",
        url: "/api/features/circle-of-the-land",
    },
    {
        index: "circle-of-the-land-arctic",
        name: "Circle of the Land: Arctic",
        url: "/api/features/circle-of-the-land-arctic",
    },
    {
        index: "circle-of-the-land-coast",
        name: "Circle of the Land: Coast",
        url: "/api/features/circle-of-the-land-coast",
    },
    {
        index: "circle-of-the-land-desert",
        name: "Circle of the Land: Desert",
        url: "/api/features/circle-of-the-land-desert",
    },
    {
        index: "circle-of-the-land-forest",
        name: "Circle of the Land: Forest",
        url: "/api/features/circle-of-the-land-forest",
    },
    {
        index: "circle-of-the-land-grassland",
        name: "Circle of the Land: Grassland",
        url: "/api/features/circle-of-the-land-grassland",
    },
    {
        index: "circle-of-the-land-mountain",
        name: "Circle of the Land: Mountain",
        url: "/api/features/circle-of-the-land-mountain",
    },
    {
        index: "circle-of-the-land-swamp",
        name: "Circle of the Land: Swamp",
        url: "/api/features/circle-of-the-land-swamp",
    },
    {
        index: "circle-spells-1",
        name: "Circle Spells",
        url: "/api/features/circle-spells-1",
    },
    {
        index: "circle-spells-2",
        name: "Circle Spells",
        url: "/api/features/circle-spells-2",
    },
    {
        index: "circle-spells-3",
        name: "Circle Spells",
        url: "/api/features/circle-spells-3",
    },
    {
        index: "circle-spells-4",
        name: "Circle Spells",
        url: "/api/features/circle-spells-4",
    },
    {
        index: "cleansing-touch",
        name: "Cleansing Touch",
        url: "/api/features/cleansing-touch",
    },
    {
        index: "cleric-ability-score-improvement-1",
        name: "Ability Score Improvement",
        url: "/api/features/cleric-ability-score-improvement-1",
    },
    {
        index: "cleric-ability-score-improvement-2",
        name: "Ability Score Improvement",
        url: "/api/features/cleric-ability-score-improvement-2",
    },
    {
        index: "cleric-ability-score-improvement-3",
        name: "Ability Score Improvement",
        url: "/api/features/cleric-ability-score-improvement-3",
    },
    {
        index: "cleric-ability-score-improvement-4",
        name: "Ability Score Improvement",
        url: "/api/features/cleric-ability-score-improvement-4",
    },
    {
        index: "cleric-ability-score-improvement-5",
        name: "Ability Score Improvement",
        url: "/api/features/cleric-ability-score-improvement-5",
    },
    {
        index: "countercharm",
        name: "Countercharm",
        url: "/api/features/countercharm",
    },
    {
        index: "cunning-action",
        name: "Cunning Action",
        url: "/api/features/cunning-action",
    },
    {
        index: "cutting-words",
        name: "Cutting Words",
        url: "/api/features/cutting-words",
    },
    {
        index: "danger-sense",
        name: "Danger Sense",
        url: "/api/features/danger-sense",
    },
    {
        index: "dark-ones-blessing",
        name: "Dark One's Blessing",
        url: "/api/features/dark-ones-blessing",
    },
    {
        index: "dark-ones-own-luck",
        name: "Dark One's Own Luck",
        url: "/api/features/dark-ones-own-luck",
    },
    {
        index: "defensive-tactics",
        name: "Defensive Tactics",
        url: "/api/features/defensive-tactics",
    },
    {
        index: "defensive-tactics-escape-the-horde",
        name: "Defensive Tactics: Escape the Horde",
        url: "/api/features/defensive-tactics-escape-the-horde",
    },
    {
        index: "defensive-tactics-multiattack-defense",
        name: "Defensive Tactics: Multiattack Defense",
        url: "/api/features/defensive-tactics-multiattack-defense",
    },
    {
        index: "defensive-tactics-steel-will",
        name: "Defensive Tactics: Steel Will",
        url: "/api/features/defensive-tactics-steel-will",
    },
    {
        index: "deflect-missiles",
        name: "Deflect Missiles",
        url: "/api/features/deflect-missiles",
    },
    {
        index: "destroy-undead-cr-1-2-or-below",
        name: "Destroy Undead (CR 1/2 or below)",
        url: "/api/features/destroy-undead-cr-1-2-or-below",
    },
    {
        index: "destroy-undead-cr-1-or-below",
        name: "Destroy Undead (CR 1 or below)",
        url: "/api/features/destroy-undead-cr-1-or-below",
    },
    {
        index: "destroy-undead-cr-2-or-below",
        name: "Destroy Undead (CR 2 or below)",
        url: "/api/features/destroy-undead-cr-2-or-below",
    },
    {
        index: "destroy-undead-cr-3-or-below",
        name: "Destroy Undead (CR 3 or below)",
        url: "/api/features/destroy-undead-cr-3-or-below",
    },
    {
        index: "destroy-undead-cr-4-or-below",
        name: "Destroy Undead (CR 4 or below)",
        url: "/api/features/destroy-undead-cr-4-or-below",
    },
    {
        index: "diamond-soul",
        name: "Diamond Soul",
        url: "/api/features/diamond-soul",
    },
    {
        index: "disciple-of-life",
        name: "Disciple of Life",
        url: "/api/features/disciple-of-life",
    },
    {
        index: "divine-domain",
        name: "Divine Domain",
        url: "/api/features/divine-domain",
    },
    {
        index: "divine-health",
        name: "Divine Health",
        url: "/api/features/divine-health",
    },
    {
        index: "divine-intervention",
        name: "Divine Intervention",
        url: "/api/features/divine-intervention",
    },
    {
        index: "divine-intervention-improvement",
        name: "Divine Intervention Improvement",
        url: "/api/features/divine-intervention-improvement",
    },
    {
        index: "divine-sense",
        name: "Divine Sense",
        url: "/api/features/divine-sense",
    },
    {
        index: "divine-smite",
        name: "Divine Smite",
        url: "/api/features/divine-smite",
    },
    {
        index: "divine-strike",
        name: "Divine Strike",
        url: "/api/features/divine-strike",
    },
    {
        index: "domain-spells-1",
        name: "Domain Spells",
        url: "/api/features/domain-spells-1",
    },
    {
        index: "domain-spells-2",
        name: "Domain Spells",
        url: "/api/features/domain-spells-2",
    },
    {
        index: "domain-spells-3",
        name: "Domain Spells",
        url: "/api/features/domain-spells-3",
    },
    {
        index: "domain-spells-4",
        name: "Domain Spells",
        url: "/api/features/domain-spells-4",
    },
    {
        index: "domain-spells-5",
        name: "Domain Spells",
        url: "/api/features/domain-spells-5",
    },
    {
        index: "draconic-presence",
        name: "Draconic Presence",
        url: "/api/features/draconic-presence",
    },
    {
        index: "draconic-resilience",
        name: "Draconic Resilience",
        url: "/api/features/draconic-resilience",
    },
    {
        index: "dragon-ancestor",
        name: "Dragon Ancestor",
        url: "/api/features/dragon-ancestor",
    },
    {
        index: "dragon-ancestor-black---acid-damage",
        name: "Dragon Ancestor: Black - Acid Damage",
        url: "/api/features/dragon-ancestor-black---acid-damage",
    },
    {
        index: "dragon-ancestor-blue---lightning-damage",
        name: "Dragon Ancestor: Blue - Lightning Damage",
        url: "/api/features/dragon-ancestor-blue---lightning-damage",
    },
    {
        index: "dragon-ancestor-brass---fire-damage",
        name: "Dragon Ancestor: Brass - Fire Damage",
        url: "/api/features/dragon-ancestor-brass---fire-damage",
    },
    {
        index: "dragon-ancestor-bronze---lightning-damage",
        name: "Dragon Ancestor: Bronze - Lightning Damage",
        url: "/api/features/dragon-ancestor-bronze---lightning-damage",
    },
    {
        index: "dragon-ancestor-copper---acid-damage",
        name: "Dragon Ancestor: Copper - Acid Damage",
        url: "/api/features/dragon-ancestor-copper---acid-damage",
    },
    {
        index: "dragon-ancestor-gold---fire-damage",
        name: "Dragon Ancestor: Gold - Fire Damage",
        url: "/api/features/dragon-ancestor-gold---fire-damage",
    },
    {
        index: "dragon-ancestor-green---poison-damage",
        name: "Dragon Ancestor: Green - Poison Damage",
        url: "/api/features/dragon-ancestor-green---poison-damage",
    },
    {
        index: "dragon-ancestor-red---fire-damage",
        name: "Dragon Ancestor: Red - Fire Damage",
        url: "/api/features/dragon-ancestor-red---fire-damage",
    },
    {
        index: "dragon-ancestor-silver---cold-damage",
        name: "Dragon Ancestor: Silver - Cold Damage",
        url: "/api/features/dragon-ancestor-silver---cold-damage",
    },
    {
        index: "dragon-ancestor-white---cold-damage",
        name: "Dragon Ancestor: White - Cold Damage",
        url: "/api/features/dragon-ancestor-white---cold-damage",
    },
    {
        index: "dragon-wings",
        name: "Dragon Wings",
        url: "/api/features/dragon-wings",
    },
    {
        index: "druid-ability-score-improvement-1",
        name: "Ability Score Improvement",
        url: "/api/features/druid-ability-score-improvement-1",
    },
    {
        index: "druid-ability-score-improvement-2",
        name: "Ability Score Improvement",
        url: "/api/features/druid-ability-score-improvement-2",
    },
    {
        index: "druid-ability-score-improvement-3",
        name: "Ability Score Improvement",
        url: "/api/features/druid-ability-score-improvement-3",
    },
    {
        index: "druid-ability-score-improvement-4",
        name: "Ability Score Improvement",
        url: "/api/features/druid-ability-score-improvement-4",
    },
    {
        index: "druid-ability-score-improvement-5",
        name: "Ability Score Improvement",
        url: "/api/features/druid-ability-score-improvement-5",
    },
    {
        index: "druid-circle",
        name: "Druid Circle",
        url: "/api/features/druid-circle",
    },
    {
        index: "druid-lands-stride",
        name: "Land's Stride",
        url: "/api/features/druid-lands-stride",
    },
    {
        index: "druid-timeless-body",
        name: "Timeless Body",
        url: "/api/features/druid-timeless-body",
    },
    {
        index: "druidic",
        name: "Druidic",
        url: "/api/features/druidic",
    },
    {
        index: "eldritch-invocation-agonizing-blast",
        name: "Eldritch Invocation: Agonizing Blast",
        url: "/api/features/eldritch-invocation-agonizing-blast",
    },
    {
        index: "eldritch-invocation-armor-of-shadows",
        name: "Eldritch Invocation: Armor of Shadows",
        url: "/api/features/eldritch-invocation-armor-of-shadows",
    },
    {
        index: "eldritch-invocation-ascendant-step",
        name: "Eldritch Invocation: Ascendant Step",
        url: "/api/features/eldritch-invocation-ascendant-step",
    },
    {
        index: "eldritch-invocation-beast-speech",
        name: "Eldritch Invocation: Beast Speech",
        url: "/api/features/eldritch-invocation-beast-speech",
    },
    {
        index: "eldritch-invocation-beguiling-influence",
        name: "Eldritch Invocation: Beguiling Influence",
        url: "/api/features/eldritch-invocation-beguiling-influence",
    },
    {
        index: "eldritch-invocation-bewitching-whispers",
        name: "Eldritch Invocation: Bewitching Whispers",
        url: "/api/features/eldritch-invocation-bewitching-whispers",
    },
    {
        index: "eldritch-invocation-book-of-ancient-secrets",
        name: "Eldritch Invocation: Book of Ancient Secrets",
        url: "/api/features/eldritch-invocation-book-of-ancient-secrets",
    },
    {
        index: "eldritch-invocation-chains-of-carceri",
        name: "Eldritch Invocation: Chains of Carceri",
        url: "/api/features/eldritch-invocation-chains-of-carceri",
    },
    {
        index: "eldritch-invocation-devils-sight",
        name: "Eldritch Invocation: Devil's Sight",
        url: "/api/features/eldritch-invocation-devils-sight",
    },
    {
        index: "eldritch-invocation-dreadful-word",
        name: "Eldritch Invocation: Dreadful Word",
        url: "/api/features/eldritch-invocation-dreadful-word",
    },
    {
        index: "eldritch-invocation-eldritch-sight",
        name: "Eldritch Invocation: Eldritch Sight",
        url: "/api/features/eldritch-invocation-eldritch-sight",
    },
    {
        index: "eldritch-invocation-eldritch-spear",
        name: "Eldritch Invocation: Eldritch Spear",
        url: "/api/features/eldritch-invocation-eldritch-spear",
    },
    {
        index: "eldritch-invocation-eyes-of-the-rune-keeper",
        name: "Eldritch Invocation: Eyes of the Rune Keeper",
        url: "/api/features/eldritch-invocation-eyes-of-the-rune-keeper",
    },
    {
        index: "eldritch-invocation-fiendish-vigor",
        name: "Eldritch Invocation: Fiendish Vigor",
        url: "/api/features/eldritch-invocation-fiendish-vigor",
    },
    {
        index: "eldritch-invocation-gaze-of-two-minds",
        name: "Eldritch Invocation: Gaze of Two Minds",
        url: "/api/features/eldritch-invocation-gaze-of-two-minds",
    },
    {
        index: "eldritch-invocation-lifedrinker",
        name: "Eldritch Invocation: Lifedrinker",
        url: "/api/features/eldritch-invocation-lifedrinker",
    },
    {
        index: "eldritch-invocation-mask-of-many-faces",
        name: "Eldritch Invocation: Mask of Many Faces",
        url: "/api/features/eldritch-invocation-mask-of-many-faces",
    },
    {
        index: "eldritch-invocation-master-of-myriad-forms",
        name: "Eldritch Invocation: Master of Myriad Forms",
        url: "/api/features/eldritch-invocation-master-of-myriad-forms",
    },
    {
        index: "eldritch-invocation-minions-of-chaos",
        name: "Eldritch Invocation: Minions of Chaos",
        url: "/api/features/eldritch-invocation-minions-of-chaos",
    },
    {
        index: "eldritch-invocation-mire-the-mind",
        name: "Eldritch Invocation: Mire the Mind",
        url: "/api/features/eldritch-invocation-mire-the-mind",
    },
    {
        index: "eldritch-invocation-misty-visions",
        name: "Eldritch Invocation: Misty Visions",
        url: "/api/features/eldritch-invocation-misty-visions",
    },
    {
        index: "eldritch-invocation-one-with-shadows",
        name: "Eldritch Invocation: One with Shadows",
        url: "/api/features/eldritch-invocation-one-with-shadows",
    },
    {
        index: "eldritch-invocation-otherworldly-leap",
        name: "Eldritch Invocation: Otherworldly Leap",
        url: "/api/features/eldritch-invocation-otherworldly-leap",
    },
    {
        index: "eldritch-invocation-repelling-blast",
        name: "Eldritch Invocation: Repelling Blast",
        url: "/api/features/eldritch-invocation-repelling-blast",
    },
    {
        index: "eldritch-invocation-sculptor-of-flesh",
        name: "Eldritch Invocation: Sculptor of Flesh",
        url: "/api/features/eldritch-invocation-sculptor-of-flesh",
    },
    {
        index: "eldritch-invocation-sign-of-ill-omen",
        name: "Eldritch Invocation: Sign of Ill Omen",
        url: "/api/features/eldritch-invocation-sign-of-ill-omen",
    },
    {
        index: "eldritch-invocation-thief-of-five-fates",
        name: "Eldritch Invocation: Thief of Five Fates",
        url: "/api/features/eldritch-invocation-thief-of-five-fates",
    },
    {
        index: "eldritch-invocation-thirsting-blade",
        name: "Eldritch Invocation: Thirsting Blade",
        url: "/api/features/eldritch-invocation-thirsting-blade",
    },
    {
        index: "eldritch-invocation-visions-of-distant-realms",
        name: "Eldritch Invocation: Visions of Distant Realms",
        url: "/api/features/eldritch-invocation-visions-of-distant-realms",
    },
    {
        index: "eldritch-invocation-voice-of-the-chain-master",
        name: "Eldritch Invocation: Voice of the Chain Master",
        url: "/api/features/eldritch-invocation-voice-of-the-chain-master",
    },
    {
        index: "eldritch-invocation-whispers-of-the-grave",
        name: "Eldritch Invocation: Whispers of the Grave",
        url: "/api/features/eldritch-invocation-whispers-of-the-grave",
    },
    {
        index: "eldritch-invocation-witch-sight",
        name: "Eldritch Invocation: Witch Sight",
        url: "/api/features/eldritch-invocation-witch-sight",
    },
    {
        index: "eldritch-invocations",
        name: "Eldritch Invocations",
        url: "/api/features/eldritch-invocations",
    },
    {
        index: "eldritch-master",
        name: "Eldritch Master",
        url: "/api/features/eldritch-master",
    },
    {
        index: "elemental-affinity",
        name: "Elemental Affinity",
        url: "/api/features/elemental-affinity",
    },
    {
        index: "elusive",
        name: "Elusive",
        url: "/api/features/elusive",
    },
    {
        index: "empowered-evocation",
        name: "Empowered Evocation",
        url: "/api/features/empowered-evocation",
    },
    {
        index: "empty-body",
        name: "Empty Body",
        url: "/api/features/empty-body",
    },
    {
        index: "evocation-savant",
        name: "Evocation Savant",
        url: "/api/features/evocation-savant",
    },
    {
        index: "extra-attack-1",
        name: "Extra Attack",
        url: "/api/features/extra-attack-1",
    },
    {
        index: "extra-attack-2",
        name: "Extra Attack (2)",
        url: "/api/features/extra-attack-2",
    },
    {
        index: "extra-attack-3",
        name: "Extra Attack (3)",
        url: "/api/features/extra-attack-3",
    },
    {
        index: "fast-hands",
        name: "Fast Hands",
        url: "/api/features/fast-hands",
    },
    {
        index: "fast-movement",
        name: "Fast Movement",
        url: "/api/features/fast-movement",
    },
    {
        index: "favored-enemy-1-type",
        name: "Favored Enemy (1 type)",
        url: "/api/features/favored-enemy-1-type",
    },
    {
        index: "favored-enemy-2-types",
        name: "Favored Enemy (2 types)",
        url: "/api/features/favored-enemy-2-types",
    },
    {
        index: "favored-enemy-3-enemies",
        name: "Favored Enemy (3 enemies)",
        url: "/api/features/favored-enemy-3-enemies",
    },
    {
        index: "feral-instinct",
        name: "Feral Instinct",
        url: "/api/features/feral-instinct",
    },
    {
        index: "feral-senses",
        name: "Feral Senses",
        url: "/api/features/feral-senses",
    },
    {
        index: "fiendish-resilience",
        name: "Fiendish Resilience",
        url: "/api/features/fiendish-resilience",
    },
    {
        index: "fighter-ability-score-improvement-1",
        name: "Ability Score Improvement",
        url: "/api/features/fighter-ability-score-improvement-1",
    },
    {
        index: "fighter-ability-score-improvement-2",
        name: "Ability Score Improvement",
        url: "/api/features/fighter-ability-score-improvement-2",
    },
    {
        index: "fighter-ability-score-improvement-3",
        name: "Ability Score Improvement",
        url: "/api/features/fighter-ability-score-improvement-3",
    },
    {
        index: "fighter-ability-score-improvement-4",
        name: "Ability Score Improvement",
        url: "/api/features/fighter-ability-score-improvement-4",
    },
    {
        index: "fighter-ability-score-improvement-5",
        name: "Ability Score Improvement",
        url: "/api/features/fighter-ability-score-improvement-5",
    },
    {
        index: "fighter-ability-score-improvement-6",
        name: "Ability Score Improvement",
        url: "/api/features/fighter-ability-score-improvement-6",
    },
    {
        index: "fighter-ability-score-improvement-7",
        name: "Ability Score Improvement",
        url: "/api/features/fighter-ability-score-improvement-7",
    },
    {
        index: "fighter-fighting-style",
        name: "Fighting Style",
        url: "/api/features/fighter-fighting-style",
    },
    {
        index: "fighter-fighting-style-archery",
        name: "Fighting Style: Archery",
        url: "/api/features/fighter-fighting-style-archery",
    },
    {
        index: "fighter-fighting-style-defense",
        name: "Fighting Style: Defense",
        url: "/api/features/fighter-fighting-style-defense",
    },
    {
        index: "fighter-fighting-style-dueling",
        name: "Fighting Style: Dueling",
        url: "/api/features/fighter-fighting-style-dueling",
    },
    {
        index: "fighter-fighting-style-great-weapon-fighting",
        name: "Fighting Style: Great Weapon Fighting",
        url: "/api/features/fighter-fighting-style-great-weapon-fighting",
    },
    {
        index: "fighter-fighting-style-protection",
        name: "Fighting Style: Protection",
        url: "/api/features/fighter-fighting-style-protection",
    },
    {
        index: "fighter-fighting-style-two-weapon-fighting",
        name: "Fighting Style: Two-Weapon Fighting",
        url: "/api/features/fighter-fighting-style-two-weapon-fighting",
    },
    {
        index: "fighting-style-defense",
        name: "Fighting Style: Defense",
        url: "/api/features/fighting-style-defense",
    },
    {
        index: "fighting-style-dueling",
        name: "Fighting Style: Dueling",
        url: "/api/features/fighting-style-dueling",
    },
    {
        index: "fighting-style-great-weapon-fighting",
        name: "Fighting Style: Great Weapon Fighting",
        url: "/api/features/fighting-style-great-weapon-fighting",
    },
    {
        index: "fighting-style-protection",
        name: "Fighting Style: Protection",
        url: "/api/features/fighting-style-protection",
    },
    {
        index: "flexible-casting-converting-spell-slot",
        name: "Flexible Casting: Converting Spell Slot",
        url: "/api/features/flexible-casting-converting-spell-slot",
    },
    {
        index: "flexible-casting-creating-spell-slots",
        name: "Flexible Casting: Creating Spell Slots",
        url: "/api/features/flexible-casting-creating-spell-slots",
    },
    {
        index: "flurry-of-blows",
        name: "Flurry of Blows",
        url: "/api/features/flurry-of-blows",
    },
    {
        index: "foe-slayer",
        name: "Foe Slayer",
        url: "/api/features/foe-slayer",
    },
    {
        index: "font-of-inspiration",
        name: "Font of Inspiration",
        url: "/api/features/font-of-inspiration",
    },
    {
        index: "font-of-magic",
        name: "Font of Magic",
        url: "/api/features/font-of-magic",
    },
    {
        index: "frenzy",
        name: "Frenzy",
        url: "/api/features/frenzy",
    },
    {
        index: "hide-in-plain-sight",
        name: "Hide in Plain Sight",
        url: "/api/features/hide-in-plain-sight",
    },
    {
        index: "holy-nimbus",
        name: "Holy Nimbus",
        url: "/api/features/holy-nimbus",
    },
    {
        index: "hunters-prey",
        name: "Hunter's Prey",
        url: "/api/features/hunters-prey",
    },
    {
        index: "hunters-prey-colossus-slayer",
        name: "Hunter's Prey: Colossus Slayer",
        url: "/api/features/hunters-prey-colossus-slayer",
    },
    {
        index: "hunters-prey-giant-killer",
        name: "Hunter's Prey: Giant Killer",
        url: "/api/features/hunters-prey-giant-killer",
    },
    {
        index: "hunters-prey-horde-breaker",
        name: "Hunter's Prey: Horde Breaker",
        url: "/api/features/hunters-prey-horde-breaker",
    },
    {
        index: "hurl-through-hell",
        name: "Hurl Through Hell",
        url: "/api/features/hurl-through-hell",
    },
    {
        index: "improved-critical",
        name: "Improved Critical",
        url: "/api/features/improved-critical",
    },
    {
        index: "improved-divine-smite",
        name: "Improved Divine Smite",
        url: "/api/features/improved-divine-smite",
    },
    {
        index: "indomitable-1-use",
        name: "Indomitable (1 use)",
        url: "/api/features/indomitable-1-use",
    },
    {
        index: "indomitable-2-uses",
        name: "Indomitable (2 uses)",
        url: "/api/features/indomitable-2-uses",
    },
    {
        index: "indomitable-3-uses",
        name: "Indomitable (3 uses)",
        url: "/api/features/indomitable-3-uses",
    },
    {
        index: "indomitable-might",
        name: "Indomitable Might",
        url: "/api/features/indomitable-might",
    },
    {
        index: "intimidating-presence",
        name: "Intimidating Presence",
        url: "/api/features/intimidating-presence",
    },
    {
        index: "jack-of-all-trades",
        name: "Jack of All Trades",
        url: "/api/features/jack-of-all-trades",
    },
    {
        index: "ki",
        name: "Ki",
        url: "/api/features/ki",
    },
    {
        index: "ki-empowered-strikes",
        name: "Ki Empowered Strikes",
        url: "/api/features/ki-empowered-strikes",
    },
    {
        index: "lay-on-hands",
        name: "Lay on Hands",
        url: "/api/features/lay-on-hands",
    },
    {
        index: "magical-secrets-1",
        name: "Magical Secrets",
        url: "/api/features/magical-secrets-1",
    },
    {
        index: "magical-secrets-2",
        name: "Magical Secrets",
        url: "/api/features/magical-secrets-2",
    },
    {
        index: "magical-secrets-3",
        name: "Magical Secrets",
        url: "/api/features/magical-secrets-3",
    },
    {
        index: "martial-archetype",
        name: "Martial Archetype",
        url: "/api/features/martial-archetype",
    },
    {
        index: "martial-arts",
        name: "Martial Arts",
        url: "/api/features/martial-arts",
    },
    {
        index: "metamagic-1",
        name: "Metamagic",
        url: "/api/features/metamagic-1",
    },
    {
        index: "metamagic-2",
        name: "Metamagic",
        url: "/api/features/metamagic-2",
    },
    {
        index: "metamagic-3",
        name: "Metamagic",
        url: "/api/features/metamagic-3",
    },
    {
        index: "metamagic-careful-spell",
        name: "Metamagic: Careful Spell",
        url: "/api/features/metamagic-careful-spell",
    },
    {
        index: "metamagic-distant-spell",
        name: "Metamagic: Distant Spell",
        url: "/api/features/metamagic-distant-spell",
    },
    {
        index: "metamagic-empowered-spell",
        name: "Metamagic: Empowered Spell",
        url: "/api/features/metamagic-empowered-spell",
    },
    {
        index: "metamagic-extended-spell",
        name: "Metamagic: Extended Spell",
        url: "/api/features/metamagic-extended-spell",
    },
    {
        index: "metamagic-heightened-spell",
        name: "Metamagic: Heightened Spell",
        url: "/api/features/metamagic-heightened-spell",
    },
    {
        index: "metamagic-quickened-spell",
        name: "Metamagic: Quickened Spell",
        url: "/api/features/metamagic-quickened-spell",
    },
    {
        index: "metamagic-subtle-spell",
        name: "Metamagic: Subtle Spell",
        url: "/api/features/metamagic-subtle-spell",
    },
    {
        index: "metamagic-twinned-spell",
        name: "Metamagic: Twinned Spell",
        url: "/api/features/metamagic-twinned-spell",
    },
    {
        index: "mindless-rage",
        name: "Mindless Rage",
        url: "/api/features/mindless-rage",
    },
    {
        index: "monastic-tradition",
        name: "Monastic Tradition",
        url: "/api/features/monastic-tradition",
    },
    {
        index: "monk-ability-score-improvement-1",
        name: "Ability Score Improvement",
        url: "/api/features/monk-ability-score-improvement-1",
    },
    {
        index: "monk-ability-score-improvement-2",
        name: "Ability Score Improvement",
        url: "/api/features/monk-ability-score-improvement-2",
    },
    {
        index: "monk-ability-score-improvement-3",
        name: "Ability Score Improvement",
        url: "/api/features/monk-ability-score-improvement-3",
    },
    {
        index: "monk-ability-score-improvement-4",
        name: "Ability Score Improvement",
        url: "/api/features/monk-ability-score-improvement-4",
    },
    {
        index: "monk-ability-score-improvement-5",
        name: "Ability Score Improvement",
        url: "/api/features/monk-ability-score-improvement-5",
    },
    {
        index: "monk-evasion",
        name: "Evasion",
        url: "/api/features/monk-evasion",
    },
    {
        index: "monk-extra-attack",
        name: "Extra Attack",
        url: "/api/features/monk-extra-attack",
    },
    {
        index: "monk-timeless-body",
        name: "Timeless Body",
        url: "/api/features/monk-timeless-body",
    },
    {
        index: "monk-unarmored-defense",
        name: "Unarmored Defense",
        url: "/api/features/monk-unarmored-defense",
    },
    {
        index: "multiattack",
        name: "Multiattack",
        url: "/api/features/multiattack",
    },
    {
        index: "multiattack-volley",
        name: "Multiattack: Volley",
        url: "/api/features/multiattack-volley",
    },
    {
        index: "multiattack-whirlwind-attack",
        name: "Multiattack: Whirlwind Attack",
        url: "/api/features/multiattack-whirlwind-attack",
    },
    {
        index: "mystic-arcanum-6th-level",
        name: "Mystic Arcanum (6th level)",
        url: "/api/features/mystic-arcanum-6th-level",
    },
    {
        index: "mystic-arcanum-7th-level",
        name: "Mystic Arcanum (7th level)",
        url: "/api/features/mystic-arcanum-7th-level",
    },
    {
        index: "mystic-arcanum-8th-level",
        name: "Mystic Arcanum (8th level)",
        url: "/api/features/mystic-arcanum-8th-level",
    },
    {
        index: "mystic-arcanum-9th-level",
        name: "Mystic Arcanum (9th level)",
        url: "/api/features/mystic-arcanum-9th-level",
    },
    {
        index: "natural-explorer-1-terrain-type",
        name: "Natural Explorer (1 terrain type)",
        url: "/api/features/natural-explorer-1-terrain-type",
    },
    {
        index: "natural-explorer-2-terrain-types",
        name: "Natural Explorer (2 terrain types)",
        url: "/api/features/natural-explorer-2-terrain-types",
    },
    {
        index: "natural-explorer-3-terrain-types",
        name: "Natural Explorer (3 terrain types)",
        url: "/api/features/natural-explorer-3-terrain-types",
    },
    {
        index: "natural-recovery",
        name: "Natural Recovery",
        url: "/api/features/natural-recovery",
    },
    {
        index: "natures-sanctuary",
        name: "Nature's Sanctuary",
        url: "/api/features/natures-sanctuary",
    },
    {
        index: "natures-ward",
        name: "Nature's Ward",
        url: "/api/features/natures-ward",
    },
    {
        index: "oath-spells",
        name: "Oath Spells",
        url: "/api/features/oath-spells",
    },
    {
        index: "open-hand-technique",
        name: "Open Hand Technique",
        url: "/api/features/open-hand-technique",
    },
    {
        index: "otherworldly-patron",
        name: "Otherworldly Patron",
        url: "/api/features/otherworldly-patron",
    },
    {
        index: "overchannel",
        name: "Overchannel",
        url: "/api/features/overchannel",
    },
    {
        index: "pact-boon",
        name: "Pact Boon",
        url: "/api/features/pact-boon",
    },
    {
        index: "pact-magic",
        name: "Pact Magic",
        url: "/api/features/pact-magic",
    },
    {
        index: "pact-of-the-blade",
        name: "Pact of the Blade",
        url: "/api/features/pact-of-the-blade",
    },
    {
        index: "pact-of-the-chain",
        name: "Pact of the Chain",
        url: "/api/features/pact-of-the-chain",
    },
    {
        index: "pact-of-the-tome",
        name: "Pact of the Tome",
        url: "/api/features/pact-of-the-tome",
    },
    {
        index: "paladin-ability-score-improvement-1",
        name: "Ability Score Improvement",
        url: "/api/features/paladin-ability-score-improvement-1",
    },
    {
        index: "paladin-ability-score-improvement-2",
        name: "Ability Score Improvement",
        url: "/api/features/paladin-ability-score-improvement-2",
    },
    {
        index: "paladin-ability-score-improvement-3",
        name: "Ability Score Improvement",
        url: "/api/features/paladin-ability-score-improvement-3",
    },
    {
        index: "paladin-ability-score-improvement-4",
        name: "Ability Score Improvement",
        url: "/api/features/paladin-ability-score-improvement-4",
    },
    {
        index: "paladin-ability-score-improvement-5",
        name: "Ability Score Improvement",
        url: "/api/features/paladin-ability-score-improvement-5",
    },
    {
        index: "paladin-extra-attack",
        name: "Extra Attack",
        url: "/api/features/paladin-extra-attack",
    },
    {
        index: "paladin-fighting-style",
        name: "Fighting Style",
        url: "/api/features/paladin-fighting-style",
    },
    {
        index: "patient-defense",
        name: "Patient Defense",
        url: "/api/features/patient-defense",
    },
    {
        index: "peerless-skill",
        name: "Peerless Skill",
        url: "/api/features/peerless-skill",
    },
    {
        index: "perfect-self",
        name: "Perfect Self",
        url: "/api/features/perfect-self",
    },
    {
        index: "persistent-rage",
        name: "Persistent Rage",
        url: "/api/features/persistent-rage",
    },
    {
        index: "potent-cantrip",
        name: "Potent Cantrip",
        url: "/api/features/potent-cantrip",
    },
    {
        index: "primal-champion",
        name: "Primal Champion",
        url: "/api/features/primal-champion",
    },
    {
        index: "primal-path",
        name: "Primal Path",
        url: "/api/features/primal-path",
    },
    {
        index: "primeval-awareness",
        name: "Primeval Awareness",
        url: "/api/features/primeval-awareness",
    },
    {
        index: "purity-of-body",
        name: "Purity of Body",
        url: "/api/features/purity-of-body",
    },
    {
        index: "purity-of-spirit",
        name: "Purity of Spirit",
        url: "/api/features/purity-of-spirit",
    },
    {
        index: "quivering-palm",
        name: "Quivering Palm",
        url: "/api/features/quivering-palm",
    },
    {
        index: "rage",
        name: "Rage",
        url: "/api/features/rage",
    },
    {
        index: "ranger-ability-score-improvement-1",
        name: "Ability Score Improvement",
        url: "/api/features/ranger-ability-score-improvement-1",
    },
    {
        index: "ranger-ability-score-improvement-2",
        name: "Ability Score Improvement",
        url: "/api/features/ranger-ability-score-improvement-2",
    },
    {
        index: "ranger-ability-score-improvement-3",
        name: "Ability Score Improvement",
        url: "/api/features/ranger-ability-score-improvement-3",
    },
    {
        index: "ranger-ability-score-improvement-4",
        name: "Ability Score Improvement",
        url: "/api/features/ranger-ability-score-improvement-4",
    },
    {
        index: "ranger-ability-score-improvement-5",
        name: "Ability Score Improvement",
        url: "/api/features/ranger-ability-score-improvement-5",
    },
    {
        index: "ranger-archetype",
        name: "Ranger Archetype",
        url: "/api/features/ranger-archetype",
    },
    {
        index: "ranger-extra-attack",
        name: "Extra Attack",
        url: "/api/features/ranger-extra-attack",
    },
    {
        index: "ranger-fighting-style",
        name: "Fighting Style",
        url: "/api/features/ranger-fighting-style",
    },
    {
        index: "ranger-fighting-style-archery",
        name: "Fighting Style: Archery",
        url: "/api/features/ranger-fighting-style-archery",
    },
    {
        index: "ranger-fighting-style-defense",
        name: "Fighting Style: Defense",
        url: "/api/features/ranger-fighting-style-defense",
    },
    {
        index: "ranger-fighting-style-dueling",
        name: "Fighting Style: Dueling",
        url: "/api/features/ranger-fighting-style-dueling",
    },
    {
        index: "ranger-fighting-style-two-weapon-fighting",
        name: "Fighting Style: Two-Weapon Fighting",
        url: "/api/features/ranger-fighting-style-two-weapon-fighting",
    },
    {
        index: "ranger-lands-stride",
        name: "Land's Stride",
        url: "/api/features/ranger-lands-stride",
    },
    {
        index: "reckless-attack",
        name: "Reckless Attack",
        url: "/api/features/reckless-attack",
    },
    {
        index: "relentless-rage",
        name: "Relentless Rage",
        url: "/api/features/relentless-rage",
    },
    {
        index: "reliable-talent",
        name: "Reliable Talent",
        url: "/api/features/reliable-talent",
    },
    {
        index: "remarkable-athlete",
        name: "Remarkable Athlete",
        url: "/api/features/remarkable-athlete",
    },
    {
        index: "retaliation",
        name: "Retaliation",
        url: "/api/features/retaliation",
    },
    {
        index: "rogue-ability-score-improvement-1",
        name: "Ability Score Improvement",
        url: "/api/features/rogue-ability-score-improvement-1",
    },
    {
        index: "rogue-ability-score-improvement-2",
        name: "Ability Score Improvement",
        url: "/api/features/rogue-ability-score-improvement-2",
    },
    {
        index: "rogue-ability-score-improvement-3",
        name: "Ability Score Improvement",
        url: "/api/features/rogue-ability-score-improvement-3",
    },
    {
        index: "rogue-ability-score-improvement-4",
        name: "Ability Score Improvement",
        url: "/api/features/rogue-ability-score-improvement-4",
    },
    {
        index: "rogue-ability-score-improvement-5",
        name: "Ability Score Improvement",
        url: "/api/features/rogue-ability-score-improvement-5",
    },
    {
        index: "rogue-ability-score-improvement-6",
        name: "Ability Score Improvement",
        url: "/api/features/rogue-ability-score-improvement-6",
    },
    {
        index: "rogue-evasion",
        name: "Evasion",
        url: "/api/features/rogue-evasion",
    },
    {
        index: "rogue-expertise-1",
        name: "Expertise",
        url: "/api/features/rogue-expertise-1",
    },
    {
        index: "rogue-expertise-2",
        name: "Expertise",
        url: "/api/features/rogue-expertise-2",
    },
    {
        index: "roguish-archetype",
        name: "Roguish Archetype",
        url: "/api/features/roguish-archetype",
    },
    {
        index: "sacred-oath",
        name: "Sacred Oath",
        url: "/api/features/sacred-oath",
    },
    {
        index: "sculpt-spells",
        name: "Sculpt Spells",
        url: "/api/features/sculpt-spells",
    },
    {
        index: "second-story-work",
        name: "Second-Story Work",
        url: "/api/features/second-story-work",
    },
    {
        index: "second-wind",
        name: "Second Wind",
        url: "/api/features/second-wind",
    },
    {
        index: "signature-spell",
        name: "Signature Spell",
        url: "/api/features/signature-spell",
    },
    {
        index: "slippery-mind",
        name: "Slippery Mind",
        url: "/api/features/slippery-mind",
    },
    {
        index: "slow-fall",
        name: "Slow Fall",
        url: "/api/features/slow-fall",
    },
    {
        index: "sneak-attack",
        name: "Sneak Attack",
        url: "/api/features/sneak-attack",
    },
    {
        index: "song-of-rest-d10",
        name: "Song of Rest (d10)",
        url: "/api/features/song-of-rest-d10",
    },
    {
        index: "song-of-rest-d12",
        name: "Song of Rest (d12)",
        url: "/api/features/song-of-rest-d12",
    },
    {
        index: "song-of-rest-d6",
        name: "Song of Rest (d6)",
        url: "/api/features/song-of-rest-d6",
    },
    {
        index: "song-of-rest-d8",
        name: "Song of Rest (d8)",
        url: "/api/features/song-of-rest-d8",
    },
    {
        index: "sorcerer-ability-score-improvement-1",
        name: "Ability Score Improvement",
        url: "/api/features/sorcerer-ability-score-improvement-1",
    },
    {
        index: "sorcerer-ability-score-improvement-2",
        name: "Ability Score Improvement",
        url: "/api/features/sorcerer-ability-score-improvement-2",
    },
    {
        index: "sorcerer-ability-score-improvement-3",
        name: "Ability Score Improvement",
        url: "/api/features/sorcerer-ability-score-improvement-3",
    },
    {
        index: "sorcerer-ability-score-improvement-4",
        name: "Ability Score Improvement",
        url: "/api/features/sorcerer-ability-score-improvement-4",
    },
    {
        index: "sorcerer-ability-score-improvement-5",
        name: "Ability Score Improvement",
        url: "/api/features/sorcerer-ability-score-improvement-5",
    },
    {
        index: "sorcerous-origin",
        name: "Sorcerous Origin",
        url: "/api/features/sorcerous-origin",
    },
    {
        index: "sorcerous-restoration",
        name: "Sorcerous Restoration",
        url: "/api/features/sorcerous-restoration",
    },
    {
        index: "spell-mastery",
        name: "Spell Mastery",
        url: "/api/features/spell-mastery",
    },
    {
        index: "spellcasting-bard",
        name: "Spellcasting: Bard",
        url: "/api/features/spellcasting-bard",
    },
    {
        index: "spellcasting-cleric",
        name: "Spellcasting: Cleric",
        url: "/api/features/spellcasting-cleric",
    },
    {
        index: "spellcasting-druid",
        name: "Spellcasting: Druid",
        url: "/api/features/spellcasting-druid",
    },
    {
        index: "spellcasting-paladin",
        name: "Spellcasting: Paladin",
        url: "/api/features/spellcasting-paladin",
    },
    {
        index: "spellcasting-ranger",
        name: "Spellcasting: Ranger",
        url: "/api/features/spellcasting-ranger",
    },
    {
        index: "spellcasting-sorcerer",
        name: "Spellcasting: Sorcerer",
        url: "/api/features/spellcasting-sorcerer",
    },
    {
        index: "spellcasting-wizard",
        name: "Spellcasting: Wizard",
        url: "/api/features/spellcasting-wizard",
    },
    {
        index: "step-of-the-wind",
        name: "Step of the Wind",
        url: "/api/features/step-of-the-wind",
    },
    {
        index: "stillness-of-mind",
        name: "Stillness of Mind",
        url: "/api/features/stillness-of-mind",
    },
    {
        index: "stroke-of-luck",
        name: "Stroke of Luck",
        url: "/api/features/stroke-of-luck",
    },
    {
        index: "stunning-strike",
        name: "Stunning Strike",
        url: "/api/features/stunning-strike",
    },
    {
        index: "superior-critical",
        name: "Superior Critical",
        url: "/api/features/superior-critical",
    },
    {
        index: "superior-hunters-defense",
        name: "Superior Hunter's Defense",
        url: "/api/features/superior-hunters-defense",
    },
    {
        index: "superior-hunters-defense-evasion",
        name: "Superior Hunter's Defense: Evasion",
        url: "/api/features/superior-hunters-defense-evasion",
    },
    {
        index: "superior-hunters-defense-stand-against-the-tide",
        name: "Superior Hunter's Defense: Stand Against the Tide",
        url: "/api/features/superior-hunters-defense-stand-against-the-tide",
    },
    {
        index: "superior-hunters-defense-uncanny-dodge",
        name: "Superior Hunter's Defense: Uncanny Dodge",
        url: "/api/features/superior-hunters-defense-uncanny-dodge",
    },
    {
        index: "superior-inspiration",
        name: "Superior Inspiration",
        url: "/api/features/superior-inspiration",
    },
    {
        index: "supreme-healing",
        name: "Supreme Healing",
        url: "/api/features/supreme-healing",
    },
    {
        index: "supreme-sneak",
        name: "Supreme Sneak",
        url: "/api/features/supreme-sneak",
    },
    {
        index: "survivor",
        name: "Survivor",
        url: "/api/features/survivor",
    },
    {
        index: "thiefs-reflexes",
        name: "Thief's Reflexes",
        url: "/api/features/thiefs-reflexes",
    },
    {
        index: "thieves-cant",
        name: "Thieves' Cant",
        url: "/api/features/thieves-cant",
    },
    {
        index: "tongue-of-the-sun-and-moon",
        name: "Tongue of the Sun and Moon",
        url: "/api/features/tongue-of-the-sun-and-moon",
    },
    {
        index: "tranquility",
        name: "Tranquility",
        url: "/api/features/tranquility",
    },
    {
        index: "unarmored-movement-1",
        name: "Unarmored Movement",
        url: "/api/features/unarmored-movement-1",
    },
    {
        index: "unarmored-movement-2",
        name: "Unarmored Movement",
        url: "/api/features/unarmored-movement-2",
    },
    {
        index: "uncanny-dodge",
        name: "Uncanny Dodge",
        url: "/api/features/uncanny-dodge",
    },
    {
        index: "use-magic-device",
        name: "Use Magic Device",
        url: "/api/features/use-magic-device",
    },
    {
        index: "vanish",
        name: "Vanish",
        url: "/api/features/vanish",
    },
    {
        index: "warlock-ability-score-improvement-1",
        name: "Ability Score Improvement",
        url: "/api/features/warlock-ability-score-improvement-1",
    },
    {
        index: "warlock-ability-score-improvement-2",
        name: "Ability Score Improvement",
        url: "/api/features/warlock-ability-score-improvement-2",
    },
    {
        index: "warlock-ability-score-improvement-3",
        name: "Ability Score Improvement",
        url: "/api/features/warlock-ability-score-improvement-3",
    },
    {
        index: "warlock-ability-score-improvement-4",
        name: "Ability Score Improvement",
        url: "/api/features/warlock-ability-score-improvement-4",
    },
    {
        index: "warlock-ability-score-improvement-5",
        name: "Ability Score Improvement",
        url: "/api/features/warlock-ability-score-improvement-5",
    },
    {
        index: "wholeness-of-body",
        name: "Wholeness of Body",
        url: "/api/features/wholeness-of-body",
    },
    {
        index: "wild-shape-cr-1-2-or-below-no-flying-speed",
        name: "Wild Shape (CR 1/2 or below, no flying speed)",
        url: "/api/features/wild-shape-cr-1-2-or-below-no-flying-speed",
    },
    {
        index: "wild-shape-cr-1-4-or-below-no-flying-or-swim-speed",
        name: "Wild Shape (CR 1/4 or below, no flying or swim speed)",
        url: "/api/features/wild-shape-cr-1-4-or-below-no-flying-or-swim-speed",
    },
    {
        index: "wild-shape-cr-1-or-below",
        name: "Wild Shape (CR 1 or below)",
        url: "/api/features/wild-shape-cr-1-or-below",
    },
    {
        index: "wizard-ability-score-improvement-1",
        name: "Ability Score Improvement",
        url: "/api/features/wizard-ability-score-improvement-1",
    },
    {
        index: "wizard-ability-score-improvement-2",
        name: "Ability Score Improvement",
        url: "/api/features/wizard-ability-score-improvement-2",
    },
    {
        index: "wizard-ability-score-improvement-3",
        name: "Ability Score Improvement",
        url: "/api/features/wizard-ability-score-improvement-3",
    },
    {
        index: "wizard-ability-score-improvement-4",
        name: "Ability Score Improvement",
        url: "/api/features/wizard-ability-score-improvement-4",
    },
    {
        index: "wizard-ability-score-improvement-5",
        name: "Ability Score Improvement",
        url: "/api/features/wizard-ability-score-improvement-5",
    },
];
exports.default = features;
