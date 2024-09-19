    // **
    // CONSTANTS VALUES
    // **
    const Rarities = {
        COMMON: {
            name: "COMMON",
            background_sprite: "./sprites/rarities/rarity_common.png",
            color: "#A8A8A8" // Gris clair
        },
        UNCOMMON: {
            name: "UNCOMMON",
            background_sprite: "./sprites/rarities/rarity_uncommon.png",
            color: "#3CB371" // Vert moyen
        },
        RARE: {
            name: "RARE",
            background_sprite: "./sprites/rarities/rarity_rare.png",
            color: "#4169E1" // Bleu royal
        },
        EPIC: {
            name: "EPIC",
            background_sprite: "./sprites/rarities/rarity_epic.png",
            color: "#9932CC" // Violet foncé
        },
        ULTRA: {
            name: "ULTRA",
            background_sprite: "./sprites/rarities/rarity_ultra.png",
            color: "#FF8C00" // Orange foncé
        },
        LEGENDARY: {
            name: "LEGENDARY",
            background_sprite: "./sprites/rarities/rarity_legendary.png",
            color: "#FFD700" // Or
        }
    };
    const Types = {
        NORMAL: {
            name: "Normal",
            color: "#aab09f",
            textColor: "black",
            strength: [],
            weakness: ["ROCHE", "ACIER"],
            nullAttacks: ["SPECTRE"]
        },
        PLANTE: {
            name: "Plante",
            color: "#71c558",
            textColor: "white",
            strength: ["EAU", "SOL", "ROCHE"],
            weakness: ["PLANTE", "FEU", "POISON", "VOL", "INSECTE", "DRAGON", "ACIER"],
            nullAttacks: []
        },
        FEU: {
            name: "Feu",
            color: "#ea7a3c",
            textColor: "white",
            strength: ["PLANTE", "GLACE", "INSECTE", "ACIER"],
            weakness: ["FEU", "EAU", "ROCHE", "DRAGON"],
            nullAttacks: []
        },
        EAU: {
            name: "Eau",
            color: "#539ae2",
            textColor: "white",
            strength: ["FEU", "SOL", "ROCHE"],
            weakness: ["EAU", "PLANTE", "DRAGON"],
            nullAttacks: []
        },
        ELECTRIK: {
            name: "Électrik",
            color: "#eed535",
            textColor: "black",
            strength: ["EAU", "VOL"],
            weakness: ["PLANTE", "ÉLECTRIK", "DRAGON"],
            nullAttacks: ["SOL"]
        },
        GLACE: {
            name: "Glace",
            color: "#70cbd4",
            textColor: "black",
            strength: ["PLANTE", "SOL", "VOL", "DRAGON"],
            weakness: ["FEU", "EAU", "GLACE", "ACIER"],
            nullAttacks: []
        },
        COMBAT: {
            name: "Combat",
            color: "#d56723",
            textColor: "white",
            strength: ["NORMAL", "GLACE", "ROCHE", "ACIER", "TENEBRES"],
            weakness: ["POISON", "VOL", "PSY", "INSECTE", "FEE"],
            nullAttacks: ["SPECTRE"]
        },
        POISON: {
            name: "Poison",
            color: "#b97fc9",
            textColor: "white",
            strength: ["PLANTE", "FEE"],
            weakness: ["POISON", "SOL", "ROCHE", "SPECTRE"],
            nullAttacks: ["ACIER"]
        },
        SOL: {
            name: "Sol",
            color: "#e0c068",
            textColor: "white",
            strength: ["FEU", "ÉLECTRIK", "POISON", "ROCHE", "ACIER"],
            weakness: ["PLANTE", "INSECTE"],
            nullAttacks: ["VOL"]
        },
        VOL: {
            name: "Vol",
            color: "#a890f0",
            textColor: "black",
            strength: ["PLANTE", "COMBAT", "INSECTE"],
            weakness: ["ÉLECTRIK", "ROCHE", "ACIER"],
            nullAttacks: []
        },
        PSY: {
            name: "Psy",
            color: "#f85888",
            textColor: "white",
            strength: ["COMBAT", "POISON"],
            weakness: ["PSY", "ACIER"],
            nullAttacks: ["TENEBRES"]
        },
        INSECTE: {
            name: "Insecte",
            color: "#729f3f",
            textColor: "white",
            strength: ["PLANTE", "PSY", "TENEBRES"],
            weakness: ["FEU", "COMBAT", "POISON", "VOL", "SPECTRE", "ACIER", "FEE"],
            nullAttacks: []
        },
        ROCHE: {
            name: "Roche",
            color: "#a38c21",
            textColor: "white",
            strength: ["FEU", "GLACE", "VOL", "INSECTE"],
            weakness: ["COMBAT", "SOL", "ACIER"],
            nullAttacks: []
        },
        SPECTRE: {
            name: "Spectre",
            color: "#7b62a3",
            textColor: "white",
            strength: ["PSY", "SPECTRE"],
            weakness: ["TENEBRES"],
            nullAttacks: ["NORMAL"]
        },
        DRAGON: {
            name: "Dragon",
            color: "#53a4cf",
            textColor: "white",
            strength: ["DRAGON"],
            weakness: ["ACIER"],
            nullAttacks: ["FEE"]
        },
        TENEBRES: {
            name: "Ténèbres",
            color: "#707070",
            textColor: "white",
            strength: ["PSY", "SPECTRE"],
            weakness: ["COMBAT", "TENEBRES", "FEE"],
            nullAttacks: []
        },
        ACIER: {
            name: "Acier",
            color: "#9eb7b8",
            textColor: "black",
            strength: ["GLACE", "ROCHE", "FEE"],
            weakness: ["FEU", "EAU", "ÉLECTRIK", "ACIER"],
            nullAttacks: []
        },
        FEE: {
            name: "Fée",
            color: "#f4c8e2",
            textColor: "white",
            strength: ["COMBAT", "DRAGON", "TENEBRES"],
            weakness: ["FEU", "POISON", "ACIER"],
            nullAttacks: []
        }
    };
    const Items = {
        MOON_STONE: {
            name: "Pierre Lune",
            background_sprite: "./sprites/shop_items/moon_stone.png",
            shop_price: 3,
        },
        DAWN_STONE: {
            name: "Pierre Aube",
            background_sprite: "./sprites/shop_items/shiny_stone.png",
            shop_price: 3,
        },
        DUSK_STONE: {
            name: "Pierre Nuit",
            background_sprite: "./sprites/shop_items/dusk_stone.png",
            shop_price: 3,
        },
        FIRE_STONE: {
            name: "Pierre Feu",
            background_sprite: "./sprites/shop_items/fire_stone.png",
            shop_price: 3,
        },
        ICE_STONE: {
            name: "Pierre Glace",
            background_sprite: "./sprites/shop_items/ice_stone.png",
            shop_price: 3,
        },
        LEAF_STONE: {
            name: "Pierre Plante",
            background_sprite: "./sprites/shop_items/leaf_stone.png",
            shop_price: 3,
        },
        SHINY_STONE: {
            name: "Pierre Brilliante",
            background_sprite: "./sprites/shop_items/shiny_stone.png",
            shop_price: 3,
        },
        THUNDER_STONE: {
            name: "Pierre Eclair",
            background_sprite: "./sprites/shop_items/thunder_stone.png",
            shop_price: 3,
        },
        WATER_STONE: {
            name: "Pierre Eau",
            background_sprite: "./sprites/shop_items/water_stone.png",
            shop_price: 3,
        },
        ORAN_BERRY: {
            name: "Baie Oran",
            background_sprite: "./sprites/misc/ORAN_BERRY.png",
            shop_price: -1,
        },
        
    };
    

    // **
    // SETUP THE STORAGE FOR CLIENT
    // **
    let pokedex = null;
    let map_cases = null;
    let owned_pokemons = null;
    const forcePokedexUpdate = false; // While developping, will force pokedex to update at each session
    const forceMapCasesUpdate = false; // While developping, will force pokedex to update at each session
    const forceOwnedUpdate = false; // While developping, will force pokedex to update at each session

    function CreatePokedex() {
        let setup_pokedex = {
            BULBIZARRE: {
                id: 1,
                name: "Bulbizarre",
                sprite: "./sprites/standard/bulbizarre.png",
                sprite_shiny: "./sprites/shinies/bulbizarre.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.EPIC,
                type: Types.PLANTE,
                max_hp_lvl1: 23,
                attack_lvl1: 8,
                needed_candies: 1,
                needed_item: [Items.ORAN_BERRY],
                elvolving_pokemon: null,
            },
            HERBIZARRE: {
                id: 2,
                name: "Herbizarre",
                sprite: "./sprites/standard/herbizarre.png",
                sprite_shiny: "./sprites/shinies/herbizarre.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.EPIC,
                type: Types.PLANTE,
                max_hp_lvl1: 28,
                attack_lvl1: 10,
                needed_candies: 2,
                needed_item: [Items.ORAN_BERRY],
                elvolving_pokemon: null,
            },
            FLORIZARRE: {
                id: 3,
                name: "Florizarre",
                sprite: "./sprites/standard/dlorizarre.png",
                sprite_shiny: "./sprites/shinies/dlorizarre.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.ULTRA,
                type: Types.PLANTE,
                max_hp_lvl1: 36,
                attack_lvl1: 14,
                needed_candies: -1,
                needed_item: [],
                elvolving_pokemon: -1,
            },
            SALAMECHE: {
                id: 4,
                name: "Salamèche",
                sprite: "./sprites/standard/salameche.png",
                sprite_shiny: "./sprites/shinies/salameche.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.EPIC,
                type: Types.FEU,
                max_hp_lvl1: 18,
                attack_lvl1: 12,
                needed_candies: 1,
                needed_item: [Items.ORAN_BERRY],
                elvolving_pokemon: null,
            },
            REPTINCEL: {
                id: 5,
                name: "Reptincel",
                sprite: "./sprites/standard/reptincel.png",
                sprite_shiny: "./sprites/shinies/reptincel.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.EPIC,
                type: Types.FEU,
                max_hp_lvl1: 23,
                attack_lvl1: 14,
                needed_candies: 2,
                needed_item: [Items.ORAN_BERRY],
                elvolving_pokemon: null,
            },
            DRACAUFEU: {
                id: 6,
                name: "Dracaufeu",
                sprite: "./sprites/standard/dracaufeu.png",
                sprite_shiny: "./sprites/shinies/dracaufeu.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.ULTRA,
                type: Types.FEU,
                max_hp_lvl1: 30,
                attack_lvl1: 18,
                needed_candies: -1,
                needed_item: [],
                elvolving_pokemon: -1,
            },
            CARAPUCE: {
                id: 7,
                name: "Carapuce",
                sprite: "./sprites/standard/carapuce.png",
                sprite_shiny: "./sprites/shinies/carapuce.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.EPIC,
                type: Types.EAU,
                max_hp_lvl1: 20,
                attack_lvl1: 10,
                needed_candies: 1,
                needed_item: [Items.ORAN_BERRY],
                elvolving_pokemon: null,
            },
            CARABAFFE: {
                id: 8,
                name: "Carabaffe",
                sprite: "./sprites/standard/carabaffe.png",
                sprite_shiny: "./sprites/shinies/carabaffe.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.EPIC,
                type: Types.EAU,
                max_hp_lvl1: 25,
                attack_lvl1: 12,
                needed_candies: 2,
                needed_item: [Items.ORAN_BERRY],
                elvolving_pokemon: null,
            },
            TORTANK: {
                id: 9,
                name: "Tortank",
                sprite: "./sprites/standard/tortank.png",
                sprite_shiny: "./sprites/shinies/tortank.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.ULTRA,
                type: Types.EAU,
                max_hp_lvl1: 32,
                attack_lvl1: 16,
                needed_candies: -1,
                needed_item: [],
                elvolving_pokemon: -1,
            },
            PIKACHU: {
                id: 25,
                name: "Pikachu",
                sprite: "./sprites/standard/pikachu.png",
                sprite_shiny: "./sprites/shinies/pikachu.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.UNCOMMON,
                type: Types.ELECTRIK,
                max_hp_lvl1: 18,
                attack_lvl1: 10,
                needed_candies: -1,
                needed_item: [Items.THUNDER_STONE],
                elvolving_pokemon: null,
            },
            RAICHU: {
                id: 26,
                name: "Raichu",
                sprite: "./sprites/standard/raichu.png",
                sprite_shiny: "./sprites/shinies/raichu.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.RARE,
                type: Types.ELECTRIK,
                max_hp_lvl1: 28,
                attack_lvl1: 14,
                needed_candies: -1,
                needed_item: [Items.THUNDER_STONE, Items.THUNDER_STONE],
                elvolving_pokemon: -1,
            },
            RAICHU_A: {
                id: 26,
                name: "Raichu d'Alola",
                sprite: "./sprites/standard/raichu_a.png",
                sprite_shiny: "./sprites/shinies/raichu_a.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.RARE,
                type: Types.ELECTRIK,
                max_hp_lvl1: 28,
                attack_lvl1: 14,
                needed_candies: -1,
                needed_item: [Items.THUNDER_STONE, Items.THUNDER_STONE],
                elvolving_pokemon: -1,
            },
            SABELETTE: {
                id: 27,
                name: "Sabelette",
                sprite: "./sprites/standard/sabelette.png",
                sprite_shiny: "./sprites/shinies/sabelette.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.COMMON,
                type: Types.SOL,
                max_hp_lvl1: 26,
                attack_lvl1: 12,
                needed_candies: 1,
                needed_item: [Items.ORAN_BERRY],
                elvolving_pokemon: null,
            },
            SABELETTE_A: {
                id: 27.1,
                name: "Sabelette d'Alola",
                sprite: "./sprites/standard/sabelette_a.png",
                sprite_shiny: "./sprites/shinies/sabelette_a.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.UNCOMMON,
                type: Types.GLACE,
                max_hp_lvl1: 26,
                attack_lvl1: 12,
                needed_candies: -1,
                needed_item: [Items.ICE_STONE],
                elvolving_pokemon: null,
            },
            SABELAIREAU: {
                id: 28,
                name: "Sablaireau",
                sprite: "./sprites/standard/sablaireau.png",
                sprite_shiny: "./sprites/shinies/sablaireau.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.UNCOMMON,
                type: Types.SOL,
                max_hp_lvl1: 33,
                attack_lvl1: 20,
                needed_candies: -1,
                needed_item: [],
                elvolving_pokemon: -1,
            },
            SABELAIREAU_A: {
                id: 28.1,
                name: "Sablaireau d'Alola",
                sprite: "./sprites/standard/sablaireau_a.png",
                sprite_shiny: "./sprites/shinies/sablaireau_a.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.RARE,
                type: Types.GLACE,
                max_hp_lvl1: 33,
                attack_lvl1: 20,
                needed_candies: -1,
                needed_item: [],
                elvolving_pokemon: -1,
            },
            NIDORAN_F: {
                id: 29,
                name: "Nidoran ♀",
                sprite: "./sprites/standard/nidoran-f.png",
                sprite_shiny: "./sprites/shinies/nidoran-f.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.UNCOMMON,
                type: Types.POISON,
                max_hp_lvl1: 25,
                attack_lvl1: 7,
                needed_candies: 1,
                needed_item: [Items.ORAN_BERRY],
                elvolving_pokemon: null,
            },
            NIDORINA: {
                id: 30,
                name: "Nidorina",
                sprite: "./sprites/standard/nidorina.png",
                sprite_shiny: "./sprites/shinies/nidorina.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.UNCOMMON,
                type: Types.POISON,
                max_hp_lvl1: 30,
                attack_lvl1: 11,
                needed_candies: -1,
                needed_item: [Items.MOON_STONE],
                elvolving_pokemon: null,
            },
            NIDOQUEEN: {
                id: 31,
                name: "Nidorina",
                sprite: "./sprites/standard/nidorina.png",
                sprite_shiny: "./sprites/shinies/nidorina.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.RARE,
                type: Types.POISON,
                max_hp_lvl1: 39,
                attack_lvl1: 16,
                needed_candies: -1,
                needed_item: [],
                elvolving_pokemon: -1,
            },
            NIDORAN_M: {
                id: 32,
                name: "Nidoran ♂",
                sprite: "./sprites/standard/nidoran-m.png",
                sprite_shiny: "./sprites/shinies/nidoran-m.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.UNCOMMON,
                type: Types.POISON,
                max_hp_lvl1: 20,
                attack_lvl1: 10,
                needed_candies: 1,
                needed_item: [Items.ORAN_BERRY],
                elvolving_pokemon: null,
            },
            NIDORINO: {
                id: 33,
                name: "Nidorino",
                sprite: "./sprites/standard/nidorino.png",
                sprite_shiny: "./sprites/shinies/nidorino.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.UNCOMMON,
                type: Types.POISON,
                max_hp_lvl1: 30,
                attack_lvl1: 11,
                needed_candies: -1,
                needed_item: [Items.MOON_STONE],
                elvolving_pokemon: null,
            },
            NIDOKING: {
                id: 33,
                name: "Nidoking",
                sprite: "./sprites/standard/nidoking.png",
                sprite_shiny: "./sprites/shinies/nidoking.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.RARE,
                type: Types.POISON,
                max_hp_lvl1: 35,
                attack_lvl1: 20,
                needed_candies: -1,
                needed_item: [],
                elvolving_pokemon: -1,
            },
            HERICENDRE: {
                id: 172,
                name: "Héricendre",
                sprite: "./sprites/standard/hericendre.png",
                sprite_shiny: "./sprites/shinies/hericendre.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.EPIC,
                type: Types.FEU,
                max_hp_lvl1: 20,
                attack_lvl1: 10,
                needed_candies: 1,
                needed_item: [Items.ORAN_BERRY],
                elvolving_pokemon: null,
            },
            FEURISSON: {
                id: 173,
                name: "Feurisson",
                sprite: "./sprites/standard/feurisson.png",
                sprite_shiny: "./sprites/shinies/feurisson.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.EPIC,
                type: Types.FEU,
                max_hp_lvl1: 27,
                attack_lvl1: 13,
                needed_candies: 1,
                needed_item: [Items.ORAN_BERRY],
                elvolving_pokemon: null,
            },
            TYPHLOSION: {
                id: 173,
                name: "Typhlosion",
                sprite: "./sprites/standard/typhlosion.png",
                sprite_shiny: "./sprites/shinies/typhlosion.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.ULTRA,
                type: Types.FEU,
                max_hp_lvl1: 35,
                attack_lvl1: 15,
                needed_candies: -1,
                needed_item: [],
                elvolving_pokemon: -1,
            },
            TYPHLOSION_H: {
                id: 173.3,
                name: "Typhlosion d'Hisui",
                sprite: "./sprites/standard/typhlosion_h.png",
                sprite_shiny: "./sprites/shinies/typhlosion_h.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.ULTRA,
                type: Types.SPECTRE,
                max_hp_lvl1: 33,
                attack_lvl1: 17,
                needed_candies: -1,
                needed_item: [],
                elvolving_pokemon: -1,
            },
            PICHU: {
                id: 172,
                name: "Pichu",
                sprite: "./sprites/standard/pichu.png",
                sprite_shiny: "./sprites/shinies/pichu.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.COMMON,
                type: Types.ELECTRIK,
                max_hp_lvl1: 10,
                attack_lvl1: 7,
                needed_candies: 1,
                needed_item: [Items.ORAN_BERRY],
                elvolving_pokemon: null,
            },
            MALOSSE: {
                id: 228,
                name: "Malosse",
                sprite: "./sprites/standard/malosse.png",
                sprite_shiny: "./sprites/shinies/malosse.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.COMMON,
                type: Types.TENEBRES,
                max_hp_lvl1: 23,
                attack_lvl1: 13,
                needed_candies: 1,
                needed_item: [Items.ORAN_BERRY],
                elvolving_pokemon: null,
            },
            DEMOLOSSE: {
                id: 229,
                name: "Démolosse",
                sprite: "./sprites/standard/demolosse.png",
                sprite_shiny: "./sprites/shinies/demolosse.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.UNCOMMON,
                type: Types.FEU,
                max_hp_lvl1: 34,
                attack_lvl1: 15,
                needed_candies: -1,
                needed_item: [],
                elvolving_pokemon: -1,
            },
            GOBOU: {
                id: 258,
                name: "Gobou",
                sprite: "./sprites/standard/gobou.png",
                sprite_shiny: "./sprites/shinies/gobou.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.EPIC,
                type: Types.EAU,
                max_hp_lvl1: 26,
                attack_lvl1: 11,
                needed_candies: 1,
                needed_item: [Items.ORAN_BERRY],
                elvolving_pokemon: null,
            },
            FLOBIO: {
                id: 259,
                name: "Flobio",
                sprite: "./sprites/standard/flobio.png",
                sprite_shiny: "./sprites/shinies/flobio.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.EPIC,
                type: Types.EAU,
                max_hp_lvl1: 36,
                attack_lvl1: 12,
                needed_candies: 1,
                needed_item: [Items.ORAN_BERRY],
                elvolving_pokemon: null,
            },
            LAGGRON: {
                id: 260,
                name: "Laggron",
                sprite: "./sprites/standard/lagron.png",
                sprite_shiny: "./sprites/shinies/lagron.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.ULTRA,
                type: Types.EAU,
                max_hp_lvl1: 45,
                attack_lvl1: 14,
                needed_candies: -1,
                needed_item: [],
                elvolving_pokemon: -1,
            },
            TARSAL: {
                id: 280,
                name: "Tarsal",
                sprite: "./sprites/standard/tarsal.png",
                sprite_shiny: "./sprites/shinies/tarsal.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.RARE,
                type: Types.PSY,
                max_hp_lvl1: 14,
                attack_lvl1: 7,
                needed_candies: 1,
                needed_item: [Items.ORAN_BERRY],
                elvolving_pokemon: null,
            },
            KIRLIA: {
                id: 281,
                name: "Kirlia",
                sprite: "./sprites/standard/kirlia.png",
                sprite_shiny: "./sprites/shinies/kirlia.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.RARE,
                type: Types.PSY,
                max_hp_lvl1: 23,
                attack_lvl1: 12,
                needed_candies: 2,
                needed_item: [Items.ORAN_BERRY, Items.DAWN_STONE],
                elvolving_pokemon: null,
            },
            GARDEVOIR: {
                id: 281,
                name: "Gardevoir",
                sprite: "./sprites/standard/gardevoir.png",
                sprite_shiny: "./sprites/shinies/gardevoir.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.EPIC,
                type: Types.FEE,
                max_hp_lvl1: 31,
                attack_lvl1: 18,
                needed_candies: -1,
                needed_item: [],
                elvolving_pokemon: null,
            },
            LAPOREILLE: {
                id: 427,
                name: "Laporeille",
                sprite: "./sprites/standard/laporeille.png",
                sprite_shiny: "./sprites/shinies/laporeille.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.COMMON,
                type: Types.NORMAL,
                max_hp_lvl1: 28,
                attack_lvl1: 11,
                needed_candies: 1,
                needed_item: [Items.ORAN_BERRY],
                elvolving_pokemon: null,
            },
            LOCKPIN: {
                id: 428,
                name: "Lockpin",
                sprite: "./sprites/standard/lockpin.png",
                sprite_shiny: "./sprites/shinies/lockpin.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.COMMON,
                type: Types.NORMAL,
                max_hp_lvl1: 30,
                attack_lvl1: 13,
                needed_candies: -1,
                needed_item: [],
                elvolving_pokemon: -1,
            },
            GALLAME: {
                id: 475,
                name: "Gallame",
                sprite: "./sprites/standard/gallame.png",
                sprite_shiny: "./sprites/shinies/gallame.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.EPIC,
                type: Types.COMBAT,
                max_hp_lvl1: 31,
                attack_lvl1: 18,
                needed_candies: -1,
                needed_item: [],
                elvolving_pokemon: null,
            },
            CABRIOLAINE: {
                id: 672,
                name: "Cabriolaine",
                sprite: "./sprites/standard/cabriolaine.png",
                sprite_shiny: "./sprites/shinies/cabriolaine.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.COMMON,
                type: Types.PLANTE,
                max_hp_lvl1: 34,
                attack_lvl1: 11,
                needed_candies: 1,
                needed_item: [Items.ORAN_BERRY],
                elvolving_pokemon: null,
            },
            CHEVROUM: {
                id: 672,
                name: "Chevroum",
                sprite: "./sprites/standard/chevroum.png",
                sprite_shiny: "./sprites/shinies/chevroum.png",
                has_been_seen: false,
                has_been_captured: false,
                rarity: Rarities.UNCOMMON,
                type: Types.PLANTE,
                max_hp_lvl1: 55,
                attack_lvl1: 14,
                needed_candies: -1,
                needed_item: [],
                elvolving_pokemon: -1,
            },
        };
        setup_pokedex = UpdatePokedexWithEvolutions(setup_pokedex);
        stored_content = localStorage.getItem("pokedex");

        if (!stored_content || forcePokedexUpdate) {
            localStorage.setItem("pokedex", JSON.stringify(setup_pokedex));
            pokedex = setup_pokedex;
            console.log("Pokedex initialisé.");
        } else {
            console.log("Une sauvegarde du Pokedex existe deja. Utilisation de la sauvegarde.");
            pokedex = JSON.parse(stored_content);
        }
    }
    function CreateMapCases() {
        let setup_map_cases = [
            {
                id: 0,
                name: "Choisis ton starter !",
                background_sprite: "./sprites/locations/location_04.png",
                unlock_day: -1,
                has_been_used: false,
                shiny_lock: false,
                base_level: 5,
                level_randomness: 0,
                possible_pokemons: {
                    CARAPUCE: 1,
                    SALAMECHE: 1,
                    BULBIZARRE: 1,
                },
            },
            {
                id: 1,
                name: "Route 01",
                background_sprite: "./sprites/locations/location_22.png",
                unlock_day: new Date("2024-12-01"),
                has_been_used: false,
                shiny_lock: false,
                base_level: 6,
                level_randomness: 2,
                possible_pokemons: {
                    CARAPUCE: 1,
                    SALAMECHE: 1,
                    BULBIZARRE: 1,
                },
            },
        ];
        stored_content = localStorage.getItem("map_cases");

        if (!stored_content || forceMapCasesUpdate) {
            localStorage.setItem("map_cases", JSON.stringify(setup_map_cases));
            map_cases = setup_map_cases;
            console.log("Map initialisée.");
        } else {
            console.log("Une sauvegarde de la Map existe deja. Utilisation de la sauvegarde.");
            map_cases = JSON.parse(stored_content);
        }
    }
    function CreateOwnedPokemons() {
        let setup_owned_pokemons = [];
        stored_content = localStorage.getItem("owned_pokemons");

        if (!stored_content || forceOwnedUpdate) {
            localStorage.setItem("owned_pokemons", JSON.stringify(setup_owned_pokemons));
            owned_pokemons = setup_owned_pokemons;
            console.log("Liste des pokémons initialisée.");
        } else {
            console.log("Une sauvegarde de la liste des pokémons existe deja. Utilisation de la sauvegarde.");
            owned_pokemons = JSON.parse(stored_content);
        }
    }
    function UpdatePokedexWithEvolutions(pokedex) {
        pokedex.SALAMECHE.evolving_pokemon = [pokedex.REPTINCEL];
        pokedex.REPTINCEL.evolving_pokemon = [pokedex.DRACAUFEU];
        pokedex.BULBIZARRE.evolving_pokemon = [pokedex.HERBIZARRE];
        pokedex.HERBIZARRE.evolving_pokemon = [pokedex.FLORIZARRE];
        pokedex.CARAPUCE.evolving_pokemon = [pokedex.CARABAFFE];
        pokedex.CARABAFFE.evolving_pokemon = [pokedex.TORTANK];
        pokedex.NIDORAN_F.elvolving_pokemon = [pokedex.NIDORINA];
        pokedex.NIDORINA.elvolving_pokemon = [pokedex.NIDOQUEEN];
        pokedex.NIDORAN_M.elvolving_pokemon = [pokedex.NIDORINO];
        pokedex.NIDORINO.elvolving_pokemon = [pokedex.NIDOKING];
        pokedex.SABELETTE.elvolving_pokemon = [pokedex.SABELAIREAU];
        pokedex.SABELETTE_A.elvolving_pokemon = [pokedex.SABELAIREAU_A];
        pokedex.MALOSSE.elvolving_pokemon = [pokedex.DEMOLOSSE];
        pokedex.TARSAL.elvolving_pokemon = [pokedex.KIRLIA];
        pokedex.KIRLIA.elvolving_pokemon = [pokedex.GARDEVOIR, pokedex.GALLAME];
        pokedex.PICHU.elvolving_pokemon = [pokedex.PIKACHU];
        pokedex.PIKACHU.elvolving_pokemon = [pokedex.RAICHU, pokedex.RAICHU_A];
        pokedex.LAPOREILLE.elvolving_pokemon = [pokedex.LOCKPIN];
        pokedex.CABRIOLAINE.elvolving_pokemon = [pokedex.CHEVROUM];
        pokedex.GOBOU.elvolving_pokemon = [pokedex.FLOBIO];
        pokedex.FLOBIO.elvolving_pokemon = [pokedex.LAGGRON];
        pokedex.HERICENDRE.elvolving_pokemon = [pokedex.FEURISSON];
        pokedex.FEURISSON.elvolving_pokemon = [pokedex.TYPHLOSION, pokedex.TYPHLOSION_H];

        return pokedex;
    }
    function Setup() {
        CreatePokedex();
        CreateMapCases();
        CreateOwnedPokemons();
    }