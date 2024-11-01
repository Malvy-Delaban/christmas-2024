let setup_trainers = [
    {
        id: 0,
        code: '',
        name: "Zoe",
        sprite: "./sprites/trainers/trainer_4.png",
        unlock_day: new Date("2024-12-01"),
        has_been_used: false,
        base_level: 5,
        rewards: [
            {
                item: Items.ORAN_BERRY,
                quantity: 1,
            },
        ],
        pokemons: [
            {
                pokedexId: "CARAPUCE",
                level: 1,
                is_shiny: false,
            },
        ]
    },
];