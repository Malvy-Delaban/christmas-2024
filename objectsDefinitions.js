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
                background_sprite: "./sprites/cases/lab.png",
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
            }
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
        pokedex.CARAPUCE.evolving_pokemon = pokedex.CARABAFFE;
        pokedex.CARABAFFE.evolving_pokemon = pokedex.TORTANK;

        return pokedex;
    }
    function Setup() {
        CreatePokedex();
        CreateMapCases();
        CreateOwnedPokemons();
    }