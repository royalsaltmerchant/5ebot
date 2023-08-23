"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const magicItems = [
    {
        index: "adamantine-armor",
        name: "Adamantine Armor",
        url: "/api/magic-items/adamantine-armor",
    },
    {
        index: "ammunition",
        name: "Ammunition, +1, +2, or +3",
        url: "/api/magic-items/ammunition",
    },
    {
        index: "ammunition-1",
        name: "Ammunition, +1",
        url: "/api/magic-items/ammunition-1",
    },
    {
        index: "ammunition-2",
        name: "Ammunition, +2",
        url: "/api/magic-items/ammunition-2",
    },
    {
        index: "ammunition-3",
        name: "Ammunition, +3",
        url: "/api/magic-items/ammunition-3",
    },
    {
        index: "amulet-of-health",
        name: "Amulet of Health",
        url: "/api/magic-items/amulet-of-health",
    },
    {
        index: "amulet-of-proof-against-detection-and-location",
        name: "Amulet of Proof against Detection and Location",
        url: "/api/magic-items/amulet-of-proof-against-detection-and-location",
    },
    {
        index: "amulet-of-the-planes",
        name: "Amulet of the Planes",
        url: "/api/magic-items/amulet-of-the-planes",
    },
    {
        index: "animated-shield",
        name: "Animated Shield",
        url: "/api/magic-items/animated-shield",
    },
    {
        index: "apparatus-of-the-crab",
        name: "Apparatus of the Crab",
        url: "/api/magic-items/apparatus-of-the-crab",
    },
    {
        index: "armor",
        name: "Armor, +1, +2, or +3",
        url: "/api/magic-items/armor",
    },
    {
        index: "armor-1",
        name: "Armor, +1",
        url: "/api/magic-items/armor-1",
    },
    {
        index: "armor-2",
        name: "Armor, +2",
        url: "/api/magic-items/armor-2",
    },
    {
        index: "armor-3",
        name: "Armor, +3",
        url: "/api/magic-items/armor-3",
    },
    {
        index: "armor-of-invulnerability",
        name: "Armor of Invulnerability",
        url: "/api/magic-items/armor-of-invulnerability",
    },
    {
        index: "armor-of-resistance",
        name: "Armor of Resistance",
        url: "/api/magic-items/armor-of-resistance",
    },
    {
        index: "armor-of-vulnerability",
        name: "Armor of Vulnerability",
        url: "/api/magic-items/armor-of-vulnerability",
    },
    {
        index: "arrow-catching-shield",
        name: "Arrow-Catching Shield",
        url: "/api/magic-items/arrow-catching-shield",
    },
    {
        index: "arrow-of-slaying",
        name: "Arrow of Slaying",
        url: "/api/magic-items/arrow-of-slaying",
    },
    {
        index: "bag-of-beans",
        name: "Bag of Beans",
        url: "/api/magic-items/bag-of-beans",
    },
    {
        index: "bag-of-devouring",
        name: "Bag of Devouring",
        url: "/api/magic-items/bag-of-devouring",
    },
    {
        index: "bag-of-holding",
        name: "Bag of Holding",
        url: "/api/magic-items/bag-of-holding",
    },
    {
        index: "bag-of-tricks",
        name: "Bag of Tricks",
        url: "/api/magic-items/bag-of-tricks",
    },
    {
        index: "bag-of-tricks-gray",
        name: "Gray Bag of Tricks",
        url: "/api/magic-items/bag-of-tricks-gray",
    },
    {
        index: "bag-of-tricks-rust",
        name: "Rust Bag of Tricks",
        url: "/api/magic-items/bag-of-tricks-rust",
    },
    {
        index: "bag-of-tricks-tan",
        name: "Tan Bag of Tricks",
        url: "/api/magic-items/bag-of-tricks-tan",
    },
    {
        index: "bead-of-force",
        name: "Bead of Force",
        url: "/api/magic-items/bead-of-force",
    },
    {
        index: "belt-of-dwarvenkind",
        name: "Belt of Dwarvenkind",
        url: "/api/magic-items/belt-of-dwarvenkind",
    },
    {
        index: "belt-of-giant-strength",
        name: "Belt of Giant Strength",
        url: "/api/magic-items/belt-of-giant-strength",
    },
    {
        index: "belt-of-giant-strength-cloud",
        name: "Belt of Cloud Giant Strength",
        url: "/api/magic-items/belt-of-giant-strength-cloud",
    },
    {
        index: "belt-of-giant-strength-fire",
        name: "Belt of Fire Giant Strength",
        url: "/api/magic-items/belt-of-giant-strength-fire",
    },
    {
        index: "belt-of-giant-strength-frost",
        name: "Belt of Frost Giant Strength",
        url: "/api/magic-items/belt-of-giant-strength-frost",
    },
    {
        index: "belt-of-giant-strength-hill",
        name: "Belt of Hill Giant Strength",
        url: "/api/magic-items/belt-of-giant-strength-hill",
    },
    {
        index: "belt-of-giant-strength-stone",
        name: "Belt of Stone Giant Strength",
        url: "/api/magic-items/belt-of-giant-strength-stone",
    },
    {
        index: "belt-of-giant-strength-storm",
        name: "Belt of Storm Giant Strength",
        url: "/api/magic-items/belt-of-giant-strength-storm",
    },
    {
        index: "berserker-axe",
        name: "Berserker Axe",
        url: "/api/magic-items/berserker-axe",
    },
    {
        index: "boots-of-elvenkind",
        name: "Boots of Elvenkind",
        url: "/api/magic-items/boots-of-elvenkind",
    },
    {
        index: "boots-of-levitation",
        name: "Boots of Levitation",
        url: "/api/magic-items/boots-of-levitation",
    },
    {
        index: "boots-of-speed",
        name: "Boots of Speed",
        url: "/api/magic-items/boots-of-speed",
    },
    {
        index: "boots-of-striding-and-springing",
        name: "Boots of Striding and Springing",
        url: "/api/magic-items/boots-of-striding-and-springing",
    },
    {
        index: "boots-of-the-winterlands",
        name: "Boots of the Winterlands",
        url: "/api/magic-items/boots-of-the-winterlands",
    },
    {
        index: "bowl-of-commanding-water-elementals",
        name: "Bowl of Commanding Water Elementals",
        url: "/api/magic-items/bowl-of-commanding-water-elementals",
    },
    {
        index: "bracers-of-archery",
        name: "Bracers of Archery",
        url: "/api/magic-items/bracers-of-archery",
    },
    {
        index: "bracers-of-defense",
        name: "Bracers of Defense",
        url: "/api/magic-items/bracers-of-defense",
    },
    {
        index: "brazier-of-commanding-fire-elementals",
        name: "Brazier of Commanding Fire Elementals",
        url: "/api/magic-items/brazier-of-commanding-fire-elementals",
    },
    {
        index: "brooch-of-shielding",
        name: "Brooch of Shielding",
        url: "/api/magic-items/brooch-of-shielding",
    },
    {
        index: "broom-of-flying",
        name: "Broom of Flying",
        url: "/api/magic-items/broom-of-flying",
    },
    {
        index: "candle-of-invocation",
        name: "Candle of Invocation",
        url: "/api/magic-items/candle-of-invocation",
    },
    {
        index: "cape-of-the-mountebank",
        name: "Cape of the Mountebank",
        url: "/api/magic-items/cape-of-the-mountebank",
    },
    {
        index: "carpet-of-flying",
        name: "Carpet of Flying",
        url: "/api/magic-items/carpet-of-flying",
    },
    {
        index: "carpet-of-flying-3x5",
        name: "Carpet of Flying (3 ft. × 5 ft.)",
        url: "/api/magic-items/carpet-of-flying-3x5",
    },
    {
        index: "carpet-of-flying-4x6",
        name: "Carpet of Flying (4 ft. × 6 ft.)",
        url: "/api/magic-items/carpet-of-flying-4x6",
    },
    {
        index: "carpet-of-flying-5x7",
        name: "Carpet of Flying (5 ft. × 7 ft.)",
        url: "/api/magic-items/carpet-of-flying-5x7",
    },
    {
        index: "carpet-of-flying-6x9",
        name: "Carpet of Flying (6 ft. × 9 ft.)",
        url: "/api/magic-items/carpet-of-flying-6x9",
    },
    {
        index: "censer-of-controlling-air-elementals",
        name: "Censer of Controlling Air Elementals",
        url: "/api/magic-items/censer-of-controlling-air-elementals",
    },
    {
        index: "chime-of-opening",
        name: "Chime of Opening",
        url: "/api/magic-items/chime-of-opening",
    },
    {
        index: "circlet-of-blasting",
        name: "Circlet of Blasting",
        url: "/api/magic-items/circlet-of-blasting",
    },
    {
        index: "cloak-of-arachnida",
        name: "Cloak of Arachnida",
        url: "/api/magic-items/cloak-of-arachnida",
    },
    {
        index: "cloak-of-displacement",
        name: "Cloak of Displacement",
        url: "/api/magic-items/cloak-of-displacement",
    },
    {
        index: "cloak-of-elvenkind",
        name: "Cloak of Elvenkind",
        url: "/api/magic-items/cloak-of-elvenkind",
    },
    {
        index: "cloak-of-protection",
        name: "Cloak of Protection",
        url: "/api/magic-items/cloak-of-protection",
    },
    {
        index: "cloak-of-the-bat",
        name: "Cloak of the Bat",
        url: "/api/magic-items/cloak-of-the-bat",
    },
    {
        index: "cloak-of-the-manta-ray",
        name: "Cloak of the Manta Ray",
        url: "/api/magic-items/cloak-of-the-manta-ray",
    },
    {
        index: "crystal-ball",
        name: "Crystal Ball",
        url: "/api/magic-items/crystal-ball",
    },
    {
        index: "crystal-ball-of-mind-reading",
        name: "Crystal Ball of Mind Reading",
        url: "/api/magic-items/crystal-ball-of-mind-reading",
    },
    {
        index: "crystal-ball-of-telepathy",
        name: "Crystal Ball of Telepathy",
        url: "/api/magic-items/crystal-ball-of-telepathy",
    },
    {
        index: "crystal-ball-of-true-seeing",
        name: "Crystal Ball of True Seeing",
        url: "/api/magic-items/crystal-ball-of-true-seeing",
    },
    {
        index: "cube-of-force",
        name: "Cube of Force",
        url: "/api/magic-items/cube-of-force",
    },
    {
        index: "cubic-gate",
        name: "Cubic Gate",
        url: "/api/magic-items/cubic-gate",
    },
    {
        index: "dagger-of-venom",
        name: "Dagger of Venom",
        url: "/api/magic-items/dagger-of-venom",
    },
    {
        index: "dancing-sword",
        name: "Dancing Sword",
        url: "/api/magic-items/dancing-sword",
    },
    {
        index: "decanter-of-endless-water",
        name: "Decanter of Endless Water",
        url: "/api/magic-items/decanter-of-endless-water",
    },
    {
        index: "deck-of-illusions",
        name: "Deck of Illusions",
        url: "/api/magic-items/deck-of-illusions",
    },
    {
        index: "deck-of-many-things",
        name: "Deck of Many Things",
        url: "/api/magic-items/deck-of-many-things",
    },
    {
        index: "defender",
        name: "Defender",
        url: "/api/magic-items/defender",
    },
    {
        index: "demon-armor",
        name: "Demon Armor",
        url: "/api/magic-items/demon-armor",
    },
    {
        index: "dimensional-shackles",
        name: "Dimensional Shackles",
        url: "/api/magic-items/dimensional-shackles",
    },
    {
        index: "dragon-scale-mail",
        name: "Dragon Scale Mail",
        url: "/api/magic-items/dragon-scale-mail",
    },
    {
        index: "dragon-scale-mail-black",
        name: "Black Dragon Scale Mail",
        url: "/api/magic-items/dragon-scale-mail-black",
    },
    {
        index: "dragon-scale-mail-blue",
        name: "Blue Dragon Scale Mail",
        url: "/api/magic-items/dragon-scale-mail-blue",
    },
    {
        index: "dragon-scale-mail-brass",
        name: "Brass Dragon Scale Mail",
        url: "/api/magic-items/dragon-scale-mail-brass",
    },
    {
        index: "dragon-scale-mail-bronze",
        name: "Bronze Dragon Scale Mail",
        url: "/api/magic-items/dragon-scale-mail-bronze",
    },
    {
        index: "dragon-scale-mail-copper",
        name: "Copper Dragon Scale Mail",
        url: "/api/magic-items/dragon-scale-mail-copper",
    },
    {
        index: "dragon-scale-mail-gold",
        name: "Gold Dragon Scale Mail",
        url: "/api/magic-items/dragon-scale-mail-gold",
    },
    {
        index: "dragon-scale-mail-green",
        name: "Green Dragon Scale Mail",
        url: "/api/magic-items/dragon-scale-mail-green",
    },
    {
        index: "dragon-scale-mail-red",
        name: "Red Dragon Scale Mail",
        url: "/api/magic-items/dragon-scale-mail-red",
    },
    {
        index: "dragon-scale-mail-silver",
        name: "Silver Dragon Scale Mail",
        url: "/api/magic-items/dragon-scale-mail-silver",
    },
    {
        index: "dragon-scale-mail-white",
        name: "White Dragon Scale Mail",
        url: "/api/magic-items/dragon-scale-mail-white",
    },
    {
        index: "dragon-slayer",
        name: "Dragon Slayer",
        url: "/api/magic-items/dragon-slayer",
    },
    {
        index: "dust-of-disappearance",
        name: "Dust of Disappearance",
        url: "/api/magic-items/dust-of-disappearance",
    },
    {
        index: "dust-of-dryness",
        name: "Dust of Dryness",
        url: "/api/magic-items/dust-of-dryness",
    },
    {
        index: "dust-of-sneezing-and-choking",
        name: "Dust of Sneezing and Choking",
        url: "/api/magic-items/dust-of-sneezing-and-choking",
    },
    {
        index: "dwarven-plate",
        name: "Dwarven Plate",
        url: "/api/magic-items/dwarven-plate",
    },
    {
        index: "dwarven-thrower",
        name: "Dwarven Thrower",
        url: "/api/magic-items/dwarven-thrower",
    },
    {
        index: "efficient-quiver",
        name: "Efficient Quiver",
        url: "/api/magic-items/efficient-quiver",
    },
    {
        index: "efreeti-bottle",
        name: "Efreeti Bottle",
        url: "/api/magic-items/efreeti-bottle",
    },
    {
        index: "elemental-gem",
        name: "Elemental Gem",
        url: "/api/magic-items/elemental-gem",
    },
    {
        index: "elemental-gem-air",
        name: "Air Elemental Gem",
        url: "/api/magic-items/elemental-gem-air",
    },
    {
        index: "elemental-gem-earth",
        name: "Earth Elemental Gem",
        url: "/api/magic-items/elemental-gem-earth",
    },
    {
        index: "elemental-gem-fire",
        name: "Fire Elemental Gem",
        url: "/api/magic-items/elemental-gem-fire",
    },
    {
        index: "elemental-gem-water",
        name: "Water Elemental Gem",
        url: "/api/magic-items/elemental-gem-water",
    },
    {
        index: "elven-chain",
        name: "Elven Chain",
        url: "/api/magic-items/elven-chain",
    },
    {
        index: "eversmoking-bottle",
        name: "Eversmoking Bottle",
        url: "/api/magic-items/eversmoking-bottle",
    },
    {
        index: "eyes-of-charming",
        name: "Eyes of Charming",
        url: "/api/magic-items/eyes-of-charming",
    },
    {
        index: "eyes-of-minute-seeing",
        name: "Eyes of Minute Seeing",
        url: "/api/magic-items/eyes-of-minute-seeing",
    },
    {
        index: "eyes-of-the-eagle",
        name: "Eyes of the Eagle",
        url: "/api/magic-items/eyes-of-the-eagle",
    },
    {
        index: "feather-token",
        name: "Feather Token",
        url: "/api/magic-items/feather-token",
    },
    {
        index: "feather-token-anchor",
        name: "Anchor Feather Token",
        url: "/api/magic-items/feather-token-anchor",
    },
    {
        index: "feather-token-bird",
        name: "Bird Feather Token",
        url: "/api/magic-items/feather-token-bird",
    },
    {
        index: "feather-token-fan",
        name: "Fan Feather Token",
        url: "/api/magic-items/feather-token-fan",
    },
    {
        index: "feather-token-swan-boat",
        name: "Swan Boat Feather Token",
        url: "/api/magic-items/feather-token-swan-boat",
    },
    {
        index: "feather-token-tree",
        name: "Tree Feather Token",
        url: "/api/magic-items/feather-token-tree",
    },
    {
        index: "feather-token-whip",
        name: "Whip Feather Token",
        url: "/api/magic-items/feather-token-whip",
    },
    {
        index: "figurine-of-wondrous-power",
        name: "Figurine of Wondrous Power",
        url: "/api/magic-items/figurine-of-wondrous-power",
    },
    {
        index: "figurine-of-wondrous-power-bronze-griffon",
        name: "Bronze Griffon Figurine of Wondrous Power",
        url: "/api/magic-items/figurine-of-wondrous-power-bronze-griffon",
    },
    {
        index: "figurine-of-wondrous-power-ebony-fly",
        name: "Ebony Fly Figurine of Wondrous Power",
        url: "/api/magic-items/figurine-of-wondrous-power-ebony-fly",
    },
    {
        index: "figurine-of-wondrous-power-golden-lions",
        name: "Golden Lions Figurine of Wondrous Power",
        url: "/api/magic-items/figurine-of-wondrous-power-golden-lions",
    },
    {
        index: "figurine-of-wondrous-power-ivory-goats",
        name: "Ivory Goats Figurine of Wondrous Power",
        url: "/api/magic-items/figurine-of-wondrous-power-ivory-goats",
    },
    {
        index: "figurine-of-wondrous-power-marble-elephant",
        name: "Marble Elephant Figurine of Wondrous Power",
        url: "/api/magic-items/figurine-of-wondrous-power-marble-elephant",
    },
    {
        index: "figurine-of-wondrous-power-obsidian-steed",
        name: "Obsidian Steed Figurine of Wondrous Power",
        url: "/api/magic-items/figurine-of-wondrous-power-obsidian-steed",
    },
    {
        index: "figurine-of-wondrous-power-onyx-dog",
        name: "Onyx Dog Figurine of Wondrous Power",
        url: "/api/magic-items/figurine-of-wondrous-power-onyx-dog",
    },
    {
        index: "figurine-of-wondrous-power-serpentine-owl",
        name: "Serpentine Owl Figurine of Wondrous Power",
        url: "/api/magic-items/figurine-of-wondrous-power-serpentine-owl",
    },
    {
        index: "figurine-of-wondrous-power-silver-raven",
        name: "Silver Raven Figurine of Wondrous Power",
        url: "/api/magic-items/figurine-of-wondrous-power-silver-raven",
    },
    {
        index: "flame-tongue",
        name: "Flame Tongue",
        url: "/api/magic-items/flame-tongue",
    },
    {
        index: "folding-boat",
        name: "Folding Boat",
        url: "/api/magic-items/folding-boat",
    },
    {
        index: "frost-brand",
        name: "Frost Brand",
        url: "/api/magic-items/frost-brand",
    },
    {
        index: "gauntlets-of-ogre-power",
        name: "Gauntlets of Ogre Power",
        url: "/api/magic-items/gauntlets-of-ogre-power",
    },
    {
        index: "gem-of-brightness",
        name: "Gem of Brightness",
        url: "/api/magic-items/gem-of-brightness",
    },
    {
        index: "gem-of-seeing",
        name: "Gem of Seeing",
        url: "/api/magic-items/gem-of-seeing",
    },
    {
        index: "giant-slayer",
        name: "Giant Slayer",
        url: "/api/magic-items/giant-slayer",
    },
    {
        index: "glamoured-studded-leather-armor",
        name: "Glamoured Studded Leather Armor",
        url: "/api/magic-items/glamoured-studded-leather-armor",
    },
    {
        index: "gloves-of-missile-snaring",
        name: "Gloves of Missile Snaring",
        url: "/api/magic-items/gloves-of-missile-snaring",
    },
    {
        index: "gloves-of-swimming-and-climbing",
        name: "Gloves of Swimming and Climbing",
        url: "/api/magic-items/gloves-of-swimming-and-climbing",
    },
    {
        index: "goggles-of-night",
        name: "Goggles of Night",
        url: "/api/magic-items/goggles-of-night",
    },
    {
        index: "hammer-of-thunderbolts",
        name: "Hammer of Thunderbolts",
        url: "/api/magic-items/hammer-of-thunderbolts",
    },
    {
        index: "handy-haversack",
        name: "Handy Haversack",
        url: "/api/magic-items/handy-haversack",
    },
    {
        index: "hat-of-disguise",
        name: "Hat of Disguise",
        url: "/api/magic-items/hat-of-disguise",
    },
    {
        index: "headband-of-intellect",
        name: "Headband of Intellect",
        url: "/api/magic-items/headband-of-intellect",
    },
    {
        index: "helm-of-brilliance",
        name: "Helm of Brilliance",
        url: "/api/magic-items/helm-of-brilliance",
    },
    {
        index: "helm-of-comprehending-languages",
        name: "Helm of Comprehending Languages",
        url: "/api/magic-items/helm-of-comprehending-languages",
    },
    {
        index: "helm-of-telepathy",
        name: "Helm of Telepathy",
        url: "/api/magic-items/helm-of-telepathy",
    },
    {
        index: "helm-of-teleportation",
        name: "Helm of Teleportation",
        url: "/api/magic-items/helm-of-teleportation",
    },
    {
        index: "holy-avenger",
        name: "Holy Avenger",
        url: "/api/magic-items/holy-avenger",
    },
    {
        index: "horn-of-blasting",
        name: "Horn of Blasting",
        url: "/api/magic-items/horn-of-blasting",
    },
    {
        index: "horn-of-valhalla",
        name: "Horn of Valhalla",
        url: "/api/magic-items/horn-of-valhalla",
    },
    {
        index: "horn-of-valhalla-brass",
        name: "Brass Horn of Valhalla",
        url: "/api/magic-items/horn-of-valhalla-brass",
    },
    {
        index: "horn-of-valhalla-bronze",
        name: "Bronze Horn of Valhalla",
        url: "/api/magic-items/horn-of-valhalla-bronze",
    },
    {
        index: "horn-of-valhalla-iron",
        name: "Iron Horn of Valhalla",
        url: "/api/magic-items/horn-of-valhalla-iron",
    },
    {
        index: "horn-of-valhalla-silver",
        name: "Silver Horn of Valhalla",
        url: "/api/magic-items/horn-of-valhalla-silver",
    },
    {
        index: "horseshoes-of-a-zephyr",
        name: "Horseshoes of a Zephyr",
        url: "/api/magic-items/horseshoes-of-a-zephyr",
    },
    {
        index: "horseshoes-of-speed",
        name: "Horseshoes of Speed",
        url: "/api/magic-items/horseshoes-of-speed",
    },
    {
        index: "immovable-rod",
        name: "Immovable Rod",
        url: "/api/magic-items/immovable-rod",
    },
    {
        index: "instant-fortress",
        name: "Instant Fortress",
        url: "/api/magic-items/instant-fortress",
    },
    {
        index: "ioun-stone",
        name: "Ioun Stone",
        url: "/api/magic-items/ioun-stone",
    },
    {
        index: "ioun-stone-of-absorption",
        name: "Ioun Stone of Absorption",
        url: "/api/magic-items/ioun-stone-of-absorption",
    },
    {
        index: "ioun-stone-of-agility",
        name: "Ioun Stone of Agility",
        url: "/api/magic-items/ioun-stone-of-agility",
    },
    {
        index: "ioun-stone-of-awareness",
        name: "Ioun Stone of Awareness",
        url: "/api/magic-items/ioun-stone-of-awareness",
    },
    {
        index: "ioun-stone-of-fortitude",
        name: "Ioun Stone of Fortitude",
        url: "/api/magic-items/ioun-stone-of-fortitude",
    },
    {
        index: "ioun-stone-of-greater-absorption",
        name: "Ioun Stone of Greater Absorption",
        url: "/api/magic-items/ioun-stone-of-greater-absorption",
    },
    {
        index: "ioun-stone-of-insight",
        name: "Ioun Stone of Insight",
        url: "/api/magic-items/ioun-stone-of-insight",
    },
    {
        index: "ioun-stone-of-intellect",
        name: "Ioun Stone of Intellect",
        url: "/api/magic-items/ioun-stone-of-intellect",
    },
    {
        index: "ioun-stone-of-leadership",
        name: "Ioun Stone of Leadership",
        url: "/api/magic-items/ioun-stone-of-leadership",
    },
    {
        index: "ioun-stone-of-mastery",
        name: "Ioun Stone of Mastery",
        url: "/api/magic-items/ioun-stone-of-mastery",
    },
    {
        index: "ioun-stone-of-protection",
        name: "Ioun Stone of Protection",
        url: "/api/magic-items/ioun-stone-of-protection",
    },
    {
        index: "ioun-stone-of-regeneration",
        name: "Ioun Stone of Regeneration",
        url: "/api/magic-items/ioun-stone-of-regeneration",
    },
    {
        index: "ioun-stone-of-reserve",
        name: "Ioun Stone of Reserve",
        url: "/api/magic-items/ioun-stone-of-reserve",
    },
    {
        index: "ioun-stone-of-strength",
        name: "Ioun Stone of Strength",
        url: "/api/magic-items/ioun-stone-of-strength",
    },
    {
        index: "ioun-stone-of-sustenance",
        name: "Ioun Stone of Sustenance",
        url: "/api/magic-items/ioun-stone-of-sustenance",
    },
    {
        index: "iron-bands-of-binding",
        name: "Iron Bands of Binding",
        url: "/api/magic-items/iron-bands-of-binding",
    },
    {
        index: "iron-flask",
        name: "Iron Flask",
        url: "/api/magic-items/iron-flask",
    },
    {
        index: "javelin-of-lightning",
        name: "Javelin of Lightning",
        url: "/api/magic-items/javelin-of-lightning",
    },
    {
        index: "lantern-of-revealing",
        name: "Lantern of Revealing",
        url: "/api/magic-items/lantern-of-revealing",
    },
    {
        index: "luck-blade",
        name: "Luck Blade",
        url: "/api/magic-items/luck-blade",
    },
    {
        index: "mace-of-disruption",
        name: "Mace of Disruption",
        url: "/api/magic-items/mace-of-disruption",
    },
    {
        index: "mace-of-smiting",
        name: "Mace of Smiting",
        url: "/api/magic-items/mace-of-smiting",
    },
    {
        index: "mace-of-terror",
        name: "Mace of Terror",
        url: "/api/magic-items/mace-of-terror",
    },
    {
        index: "mantle-of-spell-resistance",
        name: "Mantle of Spell Resistance",
        url: "/api/magic-items/mantle-of-spell-resistance",
    },
    {
        index: "manual-of-bodily-health",
        name: "Manual of Bodily Health",
        url: "/api/magic-items/manual-of-bodily-health",
    },
    {
        index: "manual-of-gainful-exercise",
        name: "Manual of Gainful Exercise",
        url: "/api/magic-items/manual-of-gainful-exercise",
    },
    {
        index: "manual-of-golems",
        name: "Manual of Golems",
        url: "/api/magic-items/manual-of-golems",
    },
    {
        index: "manual-of-golems-clay",
        name: "Manual of Clay Golems",
        url: "/api/magic-items/manual-of-golems-clay",
    },
    {
        index: "manual-of-golems-flesh",
        name: "Manual of Flesh Golems",
        url: "/api/magic-items/manual-of-golems-flesh",
    },
    {
        index: "manual-of-golems-iron",
        name: "Manual of Iron Golems",
        url: "/api/magic-items/manual-of-golems-iron",
    },
    {
        index: "manual-of-golems-stone",
        name: "Manual of Stone Golems",
        url: "/api/magic-items/manual-of-golems-stone",
    },
    {
        index: "manual-of-quickness-of-action",
        name: "Manual of Quickness of Action",
        url: "/api/magic-items/manual-of-quickness-of-action",
    },
    {
        index: "marvelous-pigments",
        name: "Marvelous Pigments",
        url: "/api/magic-items/marvelous-pigments",
    },
    {
        index: "medallion-of-thoughts",
        name: "Medallion of Thoughts",
        url: "/api/magic-items/medallion-of-thoughts",
    },
    {
        index: "mirror-of-life-trapping",
        name: "Mirror of Life Trapping",
        url: "/api/magic-items/mirror-of-life-trapping",
    },
    {
        index: "mithral-armor",
        name: "Mithral Armor",
        url: "/api/magic-items/mithral-armor",
    },
    {
        index: "necklace-of-adaptation",
        name: "Necklace of Adaptation",
        url: "/api/magic-items/necklace-of-adaptation",
    },
    {
        index: "necklace-of-fireballs",
        name: "Necklace of Fireballs",
        url: "/api/magic-items/necklace-of-fireballs",
    },
    {
        index: "necklace-of-prayer-beads",
        name: "Necklace of Prayer Beads",
        url: "/api/magic-items/necklace-of-prayer-beads",
    },
    {
        index: "nine-lives-stealer",
        name: "Nine Lives Stealer",
        url: "/api/magic-items/nine-lives-stealer",
    },
    {
        index: "oathbow",
        name: "Oathbow",
        url: "/api/magic-items/oathbow",
    },
    {
        index: "oil-of-etherealness",
        name: "Oil of Etherealness",
        url: "/api/magic-items/oil-of-etherealness",
    },
    {
        index: "oil-of-sharpness",
        name: "Oil of Sharpness",
        url: "/api/magic-items/oil-of-sharpness",
    },
    {
        index: "oil-of-slipperiness",
        name: "Oil of Slipperiness",
        url: "/api/magic-items/oil-of-slipperiness",
    },
    {
        index: "orb-of-dragonkind",
        name: "Orb of Dragonkind",
        url: "/api/magic-items/orb-of-dragonkind",
    },
    {
        index: "pearl-of-power",
        name: "Pearl of Power",
        url: "/api/magic-items/pearl-of-power",
    },
    {
        index: "periapt-of-health",
        name: "Periapt of Health",
        url: "/api/magic-items/periapt-of-health",
    },
    {
        index: "periapt-of-proof-against-poison",
        name: "Periapt of Proof against Poison",
        url: "/api/magic-items/periapt-of-proof-against-poison",
    },
    {
        index: "periapt-of-wound-closure",
        name: "Periapt of Wound Closure",
        url: "/api/magic-items/periapt-of-wound-closure",
    },
    {
        index: "philter-of-love",
        name: "Philter of Love",
        url: "/api/magic-items/philter-of-love",
    },
    {
        index: "pipes-of-haunting",
        name: "Pipes of Haunting",
        url: "/api/magic-items/pipes-of-haunting",
    },
    {
        index: "pipes-of-the-sewers",
        name: "Pipes of the Sewers",
        url: "/api/magic-items/pipes-of-the-sewers",
    },
    {
        index: "plate-armor-of-etherealness",
        name: "Plate Armor of Etherealness",
        url: "/api/magic-items/plate-armor-of-etherealness",
    },
    {
        index: "portable-hole",
        name: "Portable Hole",
        url: "/api/magic-items/portable-hole",
    },
    {
        index: "potion-of-animal-friendship",
        name: "Potion of Animal Friendship",
        url: "/api/magic-items/potion-of-animal-friendship",
    },
    {
        index: "potion-of-clairvoyance",
        name: "Potion of Clairvoyance",
        url: "/api/magic-items/potion-of-clairvoyance",
    },
    {
        index: "potion-of-climbing",
        name: "Potion of Climbing",
        url: "/api/magic-items/potion-of-climbing",
    },
    {
        index: "potion-of-diminution",
        name: "Potion of Diminution",
        url: "/api/magic-items/potion-of-diminution",
    },
    {
        index: "potion-of-flying",
        name: "Potion of Flying",
        url: "/api/magic-items/potion-of-flying",
    },
    {
        index: "potion-of-gaseous-form",
        name: "Potion of Gaseous Form",
        url: "/api/magic-items/potion-of-gaseous-form",
    },
    {
        index: "potion-of-giant-strength",
        name: "Potion of Giant Strength",
        url: "/api/magic-items/potion-of-giant-strength",
    },
    {
        index: "potion-of-giant-strength-cloud",
        name: "Potion of Cloud Giant Strength",
        url: "/api/magic-items/potion-of-giant-strength-cloud",
    },
    {
        index: "potion-of-giant-strength-fire",
        name: "Potion of Fire Giant Strength",
        url: "/api/magic-items/potion-of-giant-strength-fire",
    },
    {
        index: "potion-of-giant-strength-frost",
        name: "Potion of Frost Giant Strength",
        url: "/api/magic-items/potion-of-giant-strength-frost",
    },
    {
        index: "potion-of-giant-strength-hill",
        name: "Potion of Hill Giant Strength",
        url: "/api/magic-items/potion-of-giant-strength-hill",
    },
    {
        index: "potion-of-giant-strength-stone",
        name: "Potion of Stone Giant Strength",
        url: "/api/magic-items/potion-of-giant-strength-stone",
    },
    {
        index: "potion-of-giant-strength-storm",
        name: "Potion of Storm Giant Strength",
        url: "/api/magic-items/potion-of-giant-strength-storm",
    },
    {
        index: "potion-of-growth",
        name: "Potion of Growth",
        url: "/api/magic-items/potion-of-growth",
    },
    {
        index: "potion-of-healing",
        name: "Potion of Healing",
        url: "/api/magic-items/potion-of-healing",
    },
    {
        index: "potion-of-healing-common",
        name: "Potion of Healing",
        url: "/api/magic-items/potion-of-healing-common",
    },
    {
        index: "potion-of-healing-greater",
        name: "Potion of Greater Healing",
        url: "/api/magic-items/potion-of-healing-greater",
    },
    {
        index: "potion-of-healing-superior",
        name: "Potion of Superior Healing",
        url: "/api/magic-items/potion-of-healing-superior",
    },
    {
        index: "potion-of-healing-supreme",
        name: "Potion of Supreme Healing",
        url: "/api/magic-items/potion-of-healing-supreme",
    },
    {
        index: "potion-of-heroism",
        name: "Potion of Heroism",
        url: "/api/magic-items/potion-of-heroism",
    },
    {
        index: "potion-of-invisibility",
        name: "Potion of Invisibility",
        url: "/api/magic-items/potion-of-invisibility",
    },
    {
        index: "potion-of-mind-reading",
        name: "Potion of Mind Reading",
        url: "/api/magic-items/potion-of-mind-reading",
    },
    {
        index: "potion-of-poison",
        name: "Potion of Poison",
        url: "/api/magic-items/potion-of-poison",
    },
    {
        index: "potion-of-resistance",
        name: "Potion of Resistance",
        url: "/api/magic-items/potion-of-resistance",
    },
    {
        index: "potion-of-resistance-acid",
        name: "Potion of Acid Resistance",
        url: "/api/magic-items/potion-of-resistance-acid",
    },
    {
        index: "potion-of-resistance-cold",
        name: "Potion of Cold Resistance",
        url: "/api/magic-items/potion-of-resistance-cold",
    },
    {
        index: "potion-of-resistance-fire",
        name: "Potion of Fire Resistance",
        url: "/api/magic-items/potion-of-resistance-fire",
    },
    {
        index: "potion-of-resistance-force",
        name: "Potion of Force Resistance",
        url: "/api/magic-items/potion-of-resistance-force",
    },
    {
        index: "potion-of-resistance-lightning",
        name: "Potion of Lightning Resistance",
        url: "/api/magic-items/potion-of-resistance-lightning",
    },
    {
        index: "potion-of-resistance-necrotic",
        name: "Potion of Necrotic Resistance",
        url: "/api/magic-items/potion-of-resistance-necrotic",
    },
    {
        index: "potion-of-resistance-poison",
        name: "Potion of Poison Resistance",
        url: "/api/magic-items/potion-of-resistance-poison",
    },
    {
        index: "potion-of-resistance-psychic",
        name: "Potion of Psychic Resistance",
        url: "/api/magic-items/potion-of-resistance-psychic",
    },
    {
        index: "potion-of-resistance-radiant",
        name: "Potion of Radiant Resistance",
        url: "/api/magic-items/potion-of-resistance-radiant",
    },
    {
        index: "potion-of-resistance-thunder",
        name: "Potion of Thunder Resistance",
        url: "/api/magic-items/potion-of-resistance-thunder",
    },
    {
        index: "potion-of-speed",
        name: "Potion of Speed",
        url: "/api/magic-items/potion-of-speed",
    },
    {
        index: "potion-of-water-breathing",
        name: "Potion of Water Breathing",
        url: "/api/magic-items/potion-of-water-breathing",
    },
    {
        index: "restorative-ointment",
        name: "Restorative Ointment",
        url: "/api/magic-items/restorative-ointment",
    },
    {
        index: "ring-of-animal-influence",
        name: "Ring of Animal Influence",
        url: "/api/magic-items/ring-of-animal-influence",
    },
    {
        index: "ring-of-djinni-summoning",
        name: "Ring of Djinni Summoning",
        url: "/api/magic-items/ring-of-djinni-summoning",
    },
    {
        index: "ring-of-elemental-command",
        name: "Ring of Elemental Command",
        url: "/api/magic-items/ring-of-elemental-command",
    },
    {
        index: "ring-of-elemental-command-air",
        name: "Ring of Air Elemental Command",
        url: "/api/magic-items/ring-of-elemental-command-air",
    },
    {
        index: "ring-of-elemental-command-earth",
        name: "Ring of Earth Elemental Command",
        url: "/api/magic-items/ring-of-elemental-command-earth",
    },
    {
        index: "ring-of-elemental-command-fire",
        name: "Ring of Fire Elemental Command",
        url: "/api/magic-items/ring-of-elemental-command-fire",
    },
    {
        index: "ring-of-elemental-command-water",
        name: "Ring of Water Elemental Command",
        url: "/api/magic-items/ring-of-elemental-command-water",
    },
    {
        index: "ring-of-evasion",
        name: "Ring of Evasion",
        url: "/api/magic-items/ring-of-evasion",
    },
    {
        index: "ring-of-feather-falling",
        name: "Ring of Feather Falling",
        url: "/api/magic-items/ring-of-feather-falling",
    },
    {
        index: "ring-of-free-action",
        name: "Ring of Free Action",
        url: "/api/magic-items/ring-of-free-action",
    },
    {
        index: "ring-of-invisibility",
        name: "Ring of Invisibility",
        url: "/api/magic-items/ring-of-invisibility",
    },
    {
        index: "ring-of-jumping",
        name: "Ring of Jumping",
        url: "/api/magic-items/ring-of-jumping",
    },
    {
        index: "ring-of-mind-shielding",
        name: "Ring of Mind Shielding",
        url: "/api/magic-items/ring-of-mind-shielding",
    },
    {
        index: "ring-of-protection",
        name: "Ring of Protection",
        url: "/api/magic-items/ring-of-protection",
    },
    {
        index: "ring-of-regeneration",
        name: "Ring of Regeneration",
        url: "/api/magic-items/ring-of-regeneration",
    },
    {
        index: "ring-of-resistance",
        name: "Ring of Resistance",
        url: "/api/magic-items/ring-of-resistance",
    },
    {
        index: "ring-of-resistance-acid",
        name: "Ring of Acid Resistance",
        url: "/api/magic-items/ring-of-resistance-acid",
    },
    {
        index: "ring-of-resistance-cold",
        name: "Ring of Cold Resistance",
        url: "/api/magic-items/ring-of-resistance-cold",
    },
    {
        index: "ring-of-resistance-fire",
        name: "Ring of Fire Resistance",
        url: "/api/magic-items/ring-of-resistance-fire",
    },
    {
        index: "ring-of-resistance-force",
        name: "Ring of Force Resistance",
        url: "/api/magic-items/ring-of-resistance-force",
    },
    {
        index: "ring-of-resistance-lightning",
        name: "Ring of Lightning Resistance",
        url: "/api/magic-items/ring-of-resistance-lightning",
    },
    {
        index: "ring-of-resistance-necrotic",
        name: "Ring of Necrotic Resistance",
        url: "/api/magic-items/ring-of-resistance-necrotic",
    },
    {
        index: "ring-of-resistance-poison",
        name: "Ring of Poison Resistance",
        url: "/api/magic-items/ring-of-resistance-poison",
    },
    {
        index: "ring-of-resistance-psychic",
        name: "Ring of Psychic Resistance",
        url: "/api/magic-items/ring-of-resistance-psychic",
    },
    {
        index: "ring-of-resistance-radiant",
        name: "Ring of Radiant Resistance",
        url: "/api/magic-items/ring-of-resistance-radiant",
    },
    {
        index: "ring-of-resistance-thunder",
        name: "Ring of Thunder Resistance",
        url: "/api/magic-items/ring-of-resistance-thunder",
    },
    {
        index: "ring-of-shooting-stars",
        name: "Ring of Shooting Stars",
        url: "/api/magic-items/ring-of-shooting-stars",
    },
    {
        index: "ring-of-spell-storing",
        name: "Ring of Spell Storing",
        url: "/api/magic-items/ring-of-spell-storing",
    },
    {
        index: "ring-of-spell-turning",
        name: "Ring of Spell Turning",
        url: "/api/magic-items/ring-of-spell-turning",
    },
    {
        index: "ring-of-swimming",
        name: "Ring of Swimming",
        url: "/api/magic-items/ring-of-swimming",
    },
    {
        index: "ring-of-telekinesis",
        name: "Ring of Telekinesis",
        url: "/api/magic-items/ring-of-telekinesis",
    },
    {
        index: "ring-of-the-ram",
        name: "Ring of the Ram",
        url: "/api/magic-items/ring-of-the-ram",
    },
    {
        index: "ring-of-three-wishes",
        name: "Ring of Three Wishes",
        url: "/api/magic-items/ring-of-three-wishes",
    },
    {
        index: "ring-of-warmth",
        name: "Ring of Warmth",
        url: "/api/magic-items/ring-of-warmth",
    },
    {
        index: "ring-of-water-walking",
        name: "Ring of Water Walking",
        url: "/api/magic-items/ring-of-water-walking",
    },
    {
        index: "ring-of-x-ray-vision",
        name: "Ring of X-ray Vision",
        url: "/api/magic-items/ring-of-x-ray-vision",
    },
    {
        index: "robe-of-eyes",
        name: "Robe of Eyes",
        url: "/api/magic-items/robe-of-eyes",
    },
    {
        index: "robe-of-scintillating-colors",
        name: "Robe of Scintillating Colors",
        url: "/api/magic-items/robe-of-scintillating-colors",
    },
    {
        index: "robe-of-stars",
        name: "Robe of Stars",
        url: "/api/magic-items/robe-of-stars",
    },
    {
        index: "robe-of-the-archmagi",
        name: "Robe of the Archmagi",
        url: "/api/magic-items/robe-of-the-archmagi",
    },
    {
        index: "robe-of-useful-items",
        name: "Robe of Useful Items",
        url: "/api/magic-items/robe-of-useful-items",
    },
    {
        index: "rod-of-absorption",
        name: "Rod of Absorption",
        url: "/api/magic-items/rod-of-absorption",
    },
    {
        index: "rod-of-alertness",
        name: "Rod of Alertness",
        url: "/api/magic-items/rod-of-alertness",
    },
    {
        index: "rod-of-lordly-might",
        name: "Rod of Lordly Might",
        url: "/api/magic-items/rod-of-lordly-might",
    },
    {
        index: "rod-of-rulership",
        name: "Rod of Rulership",
        url: "/api/magic-items/rod-of-rulership",
    },
    {
        index: "rod-of-security",
        name: "Rod of Security",
        url: "/api/magic-items/rod-of-security",
    },
    {
        index: "rope-of-climbing",
        name: "Rope of Climbing",
        url: "/api/magic-items/rope-of-climbing",
    },
    {
        index: "rope-of-entanglement",
        name: "Rope of Entanglement",
        url: "/api/magic-items/rope-of-entanglement",
    },
    {
        index: "scarab-of-protection",
        name: "Scarab of Protection",
        url: "/api/magic-items/scarab-of-protection",
    },
    {
        index: "scimitar-of-speed",
        name: "Scimitar of Speed",
        url: "/api/magic-items/scimitar-of-speed",
    },
    {
        index: "shield-of-missile-attraction",
        name: "Shield of Missile Attraction",
        url: "/api/magic-items/shield-of-missile-attraction",
    },
    {
        index: "slippers-of-spider-climbing",
        name: "Slippers of Spider Climbing",
        url: "/api/magic-items/slippers-of-spider-climbing",
    },
    {
        index: "sovereign-glue",
        name: "Sovereign Glue",
        url: "/api/magic-items/sovereign-glue",
    },
    {
        index: "spell-scroll",
        name: "Spell Scroll",
        url: "/api/magic-items/spell-scroll",
    },
    {
        index: "spell-scroll-1st",
        name: "Spell Scroll (1st)",
        url: "/api/magic-items/spell-scroll-1st",
    },
    {
        index: "spell-scroll-2nd",
        name: "Spell Scroll (2nd)",
        url: "/api/magic-items/spell-scroll-2nd",
    },
    {
        index: "spell-scroll-3rd",
        name: "Spell Scroll (3rd)",
        url: "/api/magic-items/spell-scroll-3rd",
    },
    {
        index: "spell-scroll-4th",
        name: "Spell Scroll (4th)",
        url: "/api/magic-items/spell-scroll-4th",
    },
    {
        index: "spell-scroll-5th",
        name: "Spell Scroll (5th)",
        url: "/api/magic-items/spell-scroll-5th",
    },
    {
        index: "spell-scroll-6th",
        name: "Spell Scroll (6th)",
        url: "/api/magic-items/spell-scroll-6th",
    },
    {
        index: "spell-scroll-7th",
        name: "Spell Scroll (7th)",
        url: "/api/magic-items/spell-scroll-7th",
    },
    {
        index: "spell-scroll-8th",
        name: "Spell Scroll (8th)",
        url: "/api/magic-items/spell-scroll-8th",
    },
    {
        index: "spell-scroll-9th",
        name: "Spell Scroll (9th)",
        url: "/api/magic-items/spell-scroll-9th",
    },
    {
        index: "spell-scroll-cantrip",
        name: "Spell Scroll (Cantrip)",
        url: "/api/magic-items/spell-scroll-cantrip",
    },
    {
        index: "spellguard-shield",
        name: "Spellguard Shield",
        url: "/api/magic-items/spellguard-shield",
    },
    {
        index: "sphere-of-annihilation",
        name: "Sphere of Annihilation",
        url: "/api/magic-items/sphere-of-annihilation",
    },
    {
        index: "staff-of-charming",
        name: "Staff of Charming",
        url: "/api/magic-items/staff-of-charming",
    },
    {
        index: "staff-of-fire",
        name: "Staff of Fire",
        url: "/api/magic-items/staff-of-fire",
    },
    {
        index: "staff-of-frost",
        name: "Staff of Frost",
        url: "/api/magic-items/staff-of-frost",
    },
    {
        index: "staff-of-healing",
        name: "Staff of Healing",
        url: "/api/magic-items/staff-of-healing",
    },
    {
        index: "staff-of-power",
        name: "Staff of Power",
        url: "/api/magic-items/staff-of-power",
    },
    {
        index: "staff-of-striking",
        name: "Staff of Striking",
        url: "/api/magic-items/staff-of-striking",
    },
    {
        index: "staff-of-swarming-insects",
        name: "Staff of Swarming Insects",
        url: "/api/magic-items/staff-of-swarming-insects",
    },
    {
        index: "staff-of-the-magi",
        name: "Staff of the Magi",
        url: "/api/magic-items/staff-of-the-magi",
    },
    {
        index: "staff-of-the-python",
        name: "Staff of the Python",
        url: "/api/magic-items/staff-of-the-python",
    },
    {
        index: "staff-of-the-woodlands",
        name: "Staff of the Woodlands",
        url: "/api/magic-items/staff-of-the-woodlands",
    },
    {
        index: "staff-of-thunder-and-lightning",
        name: "Staff of Thunder and Lightning",
        url: "/api/magic-items/staff-of-thunder-and-lightning",
    },
    {
        index: "staff-of-withering",
        name: "Staff of Withering",
        url: "/api/magic-items/staff-of-withering",
    },
    {
        index: "stone-of-controlling-earth-elementals",
        name: "Stone of Controlling Earth Elementals",
        url: "/api/magic-items/stone-of-controlling-earth-elementals",
    },
    {
        index: "stone-of-good-luck-luckstone",
        name: "Stone of Good Luck (Luckstone)",
        url: "/api/magic-items/stone-of-good-luck-luckstone",
    },
    {
        index: "sun-blade",
        name: "Sun Blade",
        url: "/api/magic-items/sun-blade",
    },
    {
        index: "sword-of-life-stealing",
        name: "Sword of Life Stealing",
        url: "/api/magic-items/sword-of-life-stealing",
    },
    {
        index: "sword-of-sharpness",
        name: "Sword of Sharpness",
        url: "/api/magic-items/sword-of-sharpness",
    },
    {
        index: "sword-of-wounding",
        name: "Sword of Wounding",
        url: "/api/magic-items/sword-of-wounding",
    },
    {
        index: "talisman-of-pure-good",
        name: "Talisman of Pure Good",
        url: "/api/magic-items/talisman-of-pure-good",
    },
    {
        index: "talisman-of-the-sphere",
        name: "Talisman of the Sphere",
        url: "/api/magic-items/talisman-of-the-sphere",
    },
    {
        index: "talisman-of-ultimate-evil",
        name: "Talisman of Ultimate Evil",
        url: "/api/magic-items/talisman-of-ultimate-evil",
    },
    {
        index: "tome-of-clear-thought",
        name: "Tome of Clear Thought",
        url: "/api/magic-items/tome-of-clear-thought",
    },
    {
        index: "tome-of-leadership-and-influence",
        name: "Tome of Leadership and Influence",
        url: "/api/magic-items/tome-of-leadership-and-influence",
    },
    {
        index: "tome-of-understanding",
        name: "Tome of Understanding",
        url: "/api/magic-items/tome-of-understanding",
    },
    {
        index: "trident-of-fish-command",
        name: "Trident of Fish Command",
        url: "/api/magic-items/trident-of-fish-command",
    },
    {
        index: "universal-solvent",
        name: "Universal Solvent",
        url: "/api/magic-items/universal-solvent",
    },
    {
        index: "vicious-weapon",
        name: "Vicious Weapon",
        url: "/api/magic-items/vicious-weapon",
    },
    {
        index: "vorpal-sword",
        name: "Vorpal Sword",
        url: "/api/magic-items/vorpal-sword",
    },
    {
        index: "wand-of-binding",
        name: "Wand of Binding",
        url: "/api/magic-items/wand-of-binding",
    },
    {
        index: "wand-of-enemy-detection",
        name: "Wand of Enemy Detection",
        url: "/api/magic-items/wand-of-enemy-detection",
    },
    {
        index: "wand-of-fear",
        name: "Wand of Fear",
        url: "/api/magic-items/wand-of-fear",
    },
    {
        index: "wand-of-fireballs",
        name: "Wand of Fireballs",
        url: "/api/magic-items/wand-of-fireballs",
    },
    {
        index: "wand-of-lightning-bolts",
        name: "Wand of Lightning Bolts",
        url: "/api/magic-items/wand-of-lightning-bolts",
    },
    {
        index: "wand-of-magic-detection",
        name: "Wand of Magic Detection",
        url: "/api/magic-items/wand-of-magic-detection",
    },
    {
        index: "wand-of-magic-missiles",
        name: "Wand of Magic Missiles",
        url: "/api/magic-items/wand-of-magic-missiles",
    },
    {
        index: "wand-of-paralysis",
        name: "Wand of Paralysis",
        url: "/api/magic-items/wand-of-paralysis",
    },
    {
        index: "wand-of-polymorph",
        name: "Wand of Polymorph",
        url: "/api/magic-items/wand-of-polymorph",
    },
    {
        index: "wand-of-secrets",
        name: "Wand of Secrets",
        url: "/api/magic-items/wand-of-secrets",
    },
    {
        index: "wand-of-the-war-mage",
        name: "Wand of the War Mage, +1, +2, or +3",
        url: "/api/magic-items/wand-of-the-war-mage",
    },
    {
        index: "wand-of-the-war-mage-1",
        name: "Wand of the War Mage, +1",
        url: "/api/magic-items/wand-of-the-war-mage-1",
    },
    {
        index: "wand-of-the-war-mage-2",
        name: "Wand of the War Mage, +2",
        url: "/api/magic-items/wand-of-the-war-mage-2",
    },
    {
        index: "wand-of-the-war-mage-3",
        name: "Wand of the War Mage, +3",
        url: "/api/magic-items/wand-of-the-war-mage-3",
    },
    {
        index: "wand-of-web",
        name: "Wand of Web",
        url: "/api/magic-items/wand-of-web",
    },
    {
        index: "wand-of-wonder",
        name: "Wand of Wonder",
        url: "/api/magic-items/wand-of-wonder",
    },
    {
        index: "weapon",
        name: "Weapon, +1, +2, or +3",
        url: "/api/magic-items/weapon",
    },
    {
        index: "weapon-1",
        name: "Weapon, +1",
        url: "/api/magic-items/weapon-1",
    },
    {
        index: "weapon-2",
        name: "Weapon, +2",
        url: "/api/magic-items/weapon-2",
    },
    {
        index: "weapon-3",
        name: "Weapon, +3",
        url: "/api/magic-items/weapon-3",
    },
    {
        index: "well-of-many-worlds",
        name: "Well of Many Worlds",
        url: "/api/magic-items/well-of-many-worlds",
    },
    {
        index: "wind-fan",
        name: "Wind Fan",
        url: "/api/magic-items/wind-fan",
    },
    {
        index: "winged-boots",
        name: "Winged Boots",
        url: "/api/magic-items/winged-boots",
    },
    {
        index: "wings-of-flying",
        name: "Wings of Flying",
        url: "/api/magic-items/wings-of-flying",
    },
];
exports.default = magicItems;
