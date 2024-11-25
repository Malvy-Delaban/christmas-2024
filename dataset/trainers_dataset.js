let setup_trainers = [
    {
        id: 1,
        code: '',
        name: "Manon",
        sprite: "./sprites/trainers/trainer_34.png",
        unlock_day: new Date("2024-11-04"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 4,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            },
        ],
        pokemons: [
            {
                pokedexId: "PONCHIOT",
                level: 4,
                is_shiny: false,
            },
            {
                pokedexId: "CERIBOU",
                level: 4,
                is_shiny: false,
            },
        ]
    },
    {
        id: 2,
        code: '',
        name: "Jules",
        sprite: "./sprites/trainers/trainer_35.png",
        unlock_day: new Date("2024-11-05"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 5,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            },
            {
                item: Items.MOON_STONE,
                quantity: 1,
            },
        ],
        pokemons: [
            {
                pokedexId: "FEROSINGE",
                level: 5,
                is_shiny: false,
            },
            {
                pokedexId: "NOSFERAPTI",
                level: 5,
                is_shiny: false,
            },
        ]
    },
    {
        id: 3,
        code: '',
        name: "Paul",
        sprite: "./sprites/trainers/trainer_3.png",
        unlock_day: new Date("2024-11-06"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 6,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            },
        ],
        pokemons: [
            {
                pokedexId: "MAGICARPE",
                level: 6,
                is_shiny: false,
            },
            {
                pokedexId: "MAGICARPE",
                level: 6,
                is_shiny: false,
            },
            {
                pokedexId: "OTARIA",
                level: 6,
                is_shiny: false,
            },
        ]
    },
    {
        id: 4,
        code: '',
        name: "Fernand",
        sprite: "./sprites/trainers/trainer_44.png",
        unlock_day: new Date("2024-11-07"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 7,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            },
        ],
        pokemons: [
            {
                pokedexId: "MIMIGAL",
                level: 7,
                is_shiny: false,
            },
            {
                pokedexId: "HELIATRONC",
                level: 7,
                is_shiny: false,
            },
        ]
    },
    {
        id: 5,
        code: '',
        name: "Elodie",
        sprite: "./sprites/trainers/trainer_47.png",
        unlock_day: new Date("2024-11-08"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 8,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 2,
            }
        ],
        pokemons: [
            {
                pokedexId: "LAPOREILLE",
                level: 7,
                is_shiny: false,
            },
            {
                pokedexId: "GIRAFARIG",
                level: 8,
                is_shiny: false,
            },
            {
                pokedexId: "PERSIAN",
                level: 9,
                is_shiny: false,
            },
        ]
    },
    {
        id: 6,
        code: '',
        name: "Nora",
        sprite: "./sprites/trainers/trainer_24.png",
        unlock_day: new Date("2024-11-09"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 12,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            }
        ],
        pokemons: [
            {
                pokedexId: "FARFADUVET",
                level: 11,
                is_shiny: false,
            },
            {
                pokedexId: "GRORET",
                level: 13,
                is_shiny: true,
            },
        ]
    },
    {
        id: 7,
        code: '',
        name: "Juan",
        sprite: "./sprites/trainers/trainer_37.png",
        unlock_day: new Date("2024-11-10"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 12,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            }
        ],
        pokemons: [
            {
                pokedexId: "FULGULAIRO",
                level: 12,
                is_shiny: false,
            },
            {
                pokedexId: "KUNGFOUINE",
                level: 12,
                is_shiny: false,
            },
            {
                pokedexId: "MYGAVOLT",
                level: 13,
                is_shiny: false,
            },
        ]
    },
    {
        id: 8,
        code: '',
        name: "Yusuf",
        sprite: "./sprites/trainers/trainer_46.png",
        unlock_day: new Date("2024-11-11"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 13,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 2,
            }
        ],
        pokemons: [
            {
                pokedexId: "SKITTY",
                level: 12,
                is_shiny: false,
            },
            {
                pokedexId: "IGUOLTA",
                level: 14,
                is_shiny: false,
            },
            {
                pokedexId: "PYROLI",
                level: 14,
                is_shiny: false,
            },
        ]
    },
    {
        id: 9,
        code: '',
        name: "Oliver",
        sprite: "./sprites/trainers/trainer_77.png",
        unlock_day: new Date("2024-11-12"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 15,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            }
        ],
        pokemons: [
            {
                pokedexId: "GRANBULL",
                level: 14,
                is_shiny: false,
            },
            {
                pokedexId: "LOCKPIN",
                level: 15,
                is_shiny: false,
            },
        ]
    },
    {
        id: 10,
        code: '',
        name: "Martina",
        sprite: "./sprites/trainers/trainer_11.png",
        unlock_day: new Date("2024-11-13"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 15,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            },
            {
                item: Items.ICE_STONE,
                quantity: 1,
            }
        ],
        pokemons: [
            {
                pokedexId: "POHMOTTE",
                level: 13,
                is_shiny: false,
            },
            {
                pokedexId: "GRINGOLEM",
                level: 15,
                is_shiny: false,
            },
            {
                pokedexId: "SERPANG",
                level: 16,
                is_shiny: false,
            },
        ]
    },
    {
        id: 11,
        code: '',
        name: "Somchai",
        sprite: "./sprites/trainers/trainer_36.png",
        unlock_day: new Date("2024-11-14"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 16,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            }
        ],
        pokemons: [
            {
                pokedexId: "SOLAROC",
                level: 15,
                is_shiny: false,
            },
            {
                pokedexId: "TENEFIX",
                level: 16,
                is_shiny: false,
            },
            {
                pokedexId: "HYPNOMADE",
                level: 16,
                is_shiny: false,
            },
        ]
    },
    {
        id: 12,
        code: '',
        name: "Mia",
        sprite: "./sprites/trainers/trainer_39.png",
        unlock_day: new Date("2024-11-15"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 17,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            }
        ],
        pokemons: [
            {
                pokedexId: "MALAMANDRE",
                level: 17,
                is_shiny: false,
            },
            {
                pokedexId: "MASTOUFFE",
                level: 17,
                is_shiny: false,
            },
        ]
    },
    {
        id: 13,
        code: '',
        name: "Andrei",
        sprite: "./sprites/trainers/trainer_43.png",
        unlock_day: new Date("2024-11-16"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 16,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            },
            {
                item: Items.METAL_COAT,
                quantity: 1,
            }
        ],
        pokemons: [
            {
                pokedexId: "EXAGIDE",
                level: 16,
                is_shiny: false,
            },
            {
                pokedexId: "MINOTAUPE",
                level: 16,
                is_shiny: false,
            },
            {
                pokedexId: "STEELIX",
                level: 16,
                is_shiny: false,
            },
        ]
    },
    {
        id: 14,
        code: '',
        name: "Maya",
        sprite: "./sprites/trainers/trainer_48.png",
        unlock_day: new Date("2024-11-17"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 18,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            },
            {
                item: Items.FIRE_STONE,
                quantity: 1,
            }
        ],
        pokemons: [
            {
                pokedexId: "NEMELIOS",
                level: 18,
                is_shiny: false,
            },
            {
                pokedexId: "PORYGON2",
                level: 18,
                is_shiny: false,
            },
            {
                pokedexId: "MAGANON",
                level: 19,
                is_shiny: false,
            },
        ]
    },
    {
        id: 15,
        code: '',
        name: "Ahmed",
        sprite: "./sprites/trainers/trainer_38.png",
        unlock_day: new Date("2024-11-18"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 19,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            },
        ],
        pokemons: [
            {
                pokedexId: "OHMASSACRE",
                level: 17,
                is_shiny: false,
            },
            {
                pokedexId: "METANG",
                level: 18,
                is_shiny: false,
            },
            {
                pokedexId: "ELEKABLE",
                level: 19,
                is_shiny: false,
            },
        ]
    },
    {
        id: 16,
        code: '',
        name: "Sofia",
        sprite: "./sprites/trainers/trainer_50.png",
        unlock_day: new Date("2024-11-19"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 21,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            },
            {
                item: Items.LEAF_STONE,
                quantity: 1,
            },
        ],
        pokemons: [
            {
                pokedexId: "CHENISELLE_1",
                level: 21,
                is_shiny: false,
            },
            {
                pokedexId: "TROPIUS",
                level: 21,
                is_shiny: false,
            },
            {
                pokedexId: "RAFFLESIA",
                level: 21,
                is_shiny: false,
            },
        ]
    },
    {
        id: 17,
        code: '',
        name: "Anastasia",
        sprite: "./sprites/trainers/trainer_31.png",
        unlock_day: new Date("2024-11-20"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 22,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            },
        ],
        pokemons: [
            {
                pokedexId: "PANDARBARE",
                level: 22,
                is_shiny: false,
            },
            {
                pokedexId: "CROCORIBLE",
                level: 22,
                is_shiny: false,
            },
            {
                pokedexId: "COATOX",
                level: 22,
                is_shiny: false,
            },
        ]
    },
    {
        id: 18,
        code: '',
        name: "Linh",
        sprite: "./sprites/trainers/trainer_32.png",
        unlock_day: new Date("2024-11-21"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 22,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 2,
            },
        ],
        pokemons: [
            {
                pokedexId: "SPECTRUM",
                level: 20,
                is_shiny: false,
            },
            {
                pokedexId: "MAGIREVE",
                level: 22,
                is_shiny: false,
            },
            {
                pokedexId: "NOCTALI",
                level: 25,
                is_shiny: false,
            },
        ]
    },
    {
        id: 19,
        code: '',
        name: "Sophia",
        sprite: "./sprites/trainers/trainer_5.png",
        unlock_day: new Date("2024-11-22"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 26,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            },
            {
                item: Items.WATER_STONE,
                quantity: 1,
            },
        ],
        pokemons: [
            {
                pokedexId: "SEPIATOP",
                level: 24,
                is_shiny: false,
            },
            {
                pokedexId: "WAILORD",
                level: 29,
                is_shiny: false,
            },
        ]
    },
    {
        id: 20,
        code: '',
        name: "Olivia",
        sprite: "./sprites/trainers/trainer_49.png",
        unlock_day: new Date("2024-11-23"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 24,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            },
            {
                item: Items.DUSK_STONE,
                quantity: 1,
            },
        ],
        pokemons: [
            {
                pokedexId: "NOSTENFER",
                level: 24,
                is_shiny: false,
            },
            {
                pokedexId: "TERACLOPE",
                level: 24,
                is_shiny: false,
            },
            {
                pokedexId: "ZOROARK",
                level: 25,
                is_shiny: false,
            },
        ]
    },
    {
        id: 21,
        code: '',
        name: "Isla",
        sprite: "./sprites/trainers/trainer_52.png",
        unlock_day: new Date("2024-11-24"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 25,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            },
        ],
        pokemons: [
            {
                pokedexId: "AKWAKWAK",
                level: 25,
                is_shiny: false,
            },
            {
                pokedexId: "MILOBELLUS",
                level: 25,
                is_shiny: false,
            },
            {
                pokedexId: "HYPOROI",
                level: 25,
                is_shiny: false,
            },
        ]
    },
    {
        id: 22,
        code: '',
        name: "Elif",
        sprite: "./sprites/trainers/trainer_14.png",
        unlock_day: new Date("2024-11-25"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 29,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            },
        ],
        pokemons: [
            {
                pokedexId: "QUEULORIOR",
                level: 28,
                is_shiny: true,
            },
            {
                pokedexId: "MMIME",
                level: 28,
                is_shiny: false,
            },
            {
                pokedexId: "ROSERADE",
                level: 30,
                is_shiny: false,
            },
        ]
    },
    {
        id: 23,
        code: '',
        name: "Elif",
        sprite: "./sprites/trainers/trainer_79.png",
        unlock_day: new Date("2024-11-26"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 28,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            },
            {
                item: Items.MAGMATIZER,
                quantity: 1,
            },
        ],
        pokemons: [
            {
                pokedexId: "GALOPA",
                level: 28,
                is_shiny: false,
            },
            {
                pokedexId: "CARMADURA",
                level: 28,
                is_shiny: false,
            },
            {
                pokedexId: "CAMERUPT",
                level: 28,
                is_shiny: false,
            },
        ]
    },
    {
        id: 24,
        code: '',
        name: "Noah",
        sprite: "./sprites/trainers/trainer_42.png",
        unlock_day: new Date("2024-11-27"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 29,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            },
            {
                item: Items.PROTECTOR,
                quantity: 1,
            },
            {
                item: Items.ASUPICIOUS_ARMOR,
                quantity: 1,
            },
        ],
        pokemons: [
            {
                pokedexId: "RHINASTOC",
                level: 29,
                is_shiny: false,
            },
            {
                pokedexId: "LIBEGON",
                level: 29,
                is_shiny: false,
            },
            {
                pokedexId: "SCALPEREUR",
                level: 29,
                is_shiny: false,
            },
        ]
    },
    {
        id: 25,
        code: '',
        name: "Malvy",
        sprite: "./sprites/trainers/trainer_62.png",
        unlock_day: new Date("2024-11-28"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 30,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 5,
            },
            {
                item: Items.DAWN_STONE,
                quantity: 1,
            },
        ],
        pokemons: [
            {
                pokedexId: "FLORAMANTIS",
                level: 30,
                is_shiny: false,
            },
            {
                pokedexId: "PHARAMP",
                level: 30,
                is_shiny: false,
            },
            {
                pokedexId: "KAIMORSE",
                level: 30,
                is_shiny: false,
            },
            {
                pokedexId: "SYMBIOS",
                level: 30,
                is_shiny: true,
            },
        ]
    },
];