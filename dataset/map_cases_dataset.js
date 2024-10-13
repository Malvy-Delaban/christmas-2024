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
        generated_pokemons: [],
        possible_pokemons: {
            CARAPUCE: 1,
            SALAMECHE: 1,
            BULBIZARRE: 1,
        },
    },
    {
        id: 1,
        name: "Route 01",
        background_sprite: "./sprites/locations/location_16.png",
        unlock_day: new Date("2024-12-01"),
        has_been_used: false,
        shiny_lock: false,
        base_level: 6,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            SABELETTE: 4,
            LAPOREILLE: 4,
            CABRIOLAINE: 4,
            MOUMOUTON: 4,
            NIDORAN_F: 3,
            NIDORAN_M: 3,
            TEDDIURSA: 3,
            TARSAL: 2,
            LIXY: 2,
            GOINFREX: 1,
            VIPELIERRE: 1,
        },
    },
    {
        id: 2,
        name: "Route 02",
        background_sprite: "./sprites/locations/location_02.png",
        unlock_day: new Date("2024-12-02"),
        has_been_used: false,
        shiny_lock: false,
        base_level: 7,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            ABO: 4,
            MASCAIMAN: 4,
            CHARBI: 4,
            PHANPY: 4,
            OSSELAIT: 3,
            ZORUA: 3,
            ROCABOT: 3,
            KRANIDOS: 2,
            TERHAL: 2,
            GALEKID: 1,
            FLAMIAOU: 1,
        },
    },
    {
        id: 3,
        name: "Route 03",
        background_sprite: "./sprites/locations/location_27.png",
        unlock_day: new Date("2024-12-03"),
        has_been_used: false,
        shiny_lock: false,
        base_level: 8,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            MUSTEBOUEE: 4,
            MANZAI: 4,
            PICASSAUT: 4,
            AZURILL: 4,
            CARAPAGOS: 3,
            AXOLOTO: 3,
            TYLTON: 3,
            SABELETTE_A: 2,
            ABRA: 2,
            MINIDRACO: 1,
            TIPLOUF: 1,
        },
    },
    {
        id: 999,
        name: "To delete",
        background_sprite: "./sprites/locations/location_12.png",
        unlock_day: new Date("2024-12-03"),
        has_been_used: false,
        shiny_lock: false,
        base_level: 40,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            BRINDIBOU: 4,
            EFFLECHE: 4,
            MATOUFEU: 4,
        },
    },
];