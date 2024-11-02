let setup_trainers = [
    {
        id: 0,
        code: '',
        name: "Zoe",
        sprite: "./sprites/trainers/trainer_4.png",
        unlock_day: new Date("2024-11-04"),
        has_been_used: false,
        has_been_beaten: false,
        base_level: 5,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            },
            {
                item: Items.WATER_STONE,
                quantity: 4,
            },
        ],
        pokemons: [
            {
                pokedexId: "MEWTWO",
                level: 1000,
                is_shiny: false,
            },
        ]
    },
];