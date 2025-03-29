const eggShopGens = [
    {
        name: "Origine aléatoire",
        price: 0,
        sprite: "sprites/misc/random.png",
        id: "",
    },
    {
        name: "Kanto (Gen 1)",
        price: 6,
        sprite: "sprites/pokedexs/pokedex0.png",
        id: "KANTO",
    },
    {
        name: "Johto (Gen 2)",
        price: 6,
        sprite: "sprites/pokedexs/pokedex1.png",
        id: "JOHTO",
    },
    {
        name: "Hoenn (Gen 3)",
        price: 6,
        sprite: "sprites/pokedexs/pokedex2.png",
        id: "HOENN",
    },
    {
        name: "Sinnoh (Gen 4)",
        price: 6,
        sprite: "sprites/pokedexs/pokedex3.png",
        id: "SINNOH",
    },
    {
        name: "Unova (Gen 5)",
        price: 6,
        sprite: "sprites/pokedexs/pokedex4.png",
        id: "UNOVA",
    },
    {
        name: "Kalos (Gen 6)",
        price: 6,
        sprite: "sprites/pokedexs/pokedex5.png",
        id: "KALOS",
    },
    {
        name: "Alola (Gen 7)",
        price: 6,
        sprite: "sprites/pokedexs/pokedex6.png",
        id: "ALOLA",
    },
    {
        name: "Galar (Gen 8)",
        price: 6,
        sprite: "sprites/pokedexs/pokedex7.png",
        id: "GALAR",
    },
    {
        name: "Paldéa (Gen 9)",
        price: 6,
        sprite: "sprites/pokedexs/pokedex8.png",
        id: "PALDEA",
    },
];

const eggShopTypes = [
    {
        name: "Type aléatoire",
        price: 0,
        sprite: "sprites/misc/random.png",
        colorFilter: "hue-rotate(0deg) saturate(1) brightness(1)",
    },
    {
        name: "Normal",
        price: 4,
        sprite: "sprites/types/Normal.png",
        colorFilter: "saturate(0.2)",
    },
    {
        name: "Plante",
        price: 8,
        sprite: "sprites/types/Plante.png",
        colorFilter: "hue-rotate(45deg) saturate(1.8)",
    },
    {
        name: "Feu",
        price: 10,
        sprite: "sprites/types/Feu.png",
        colorFilter: "hue-rotate(290deg) saturate(2.2)",
    },
    {
        name: "Eau",
        price: 6,
        sprite: "sprites/types/Eau.png",
        colorFilter: "hue-rotate(120deg) saturate(1.5)",
    },
    {
        name: "Électrik",
        price: 8,
        sprite: "sprites/types/Électrik.png",
        colorFilter: "hue-rotate(-40deg) saturate(3)",
    },
    {
        name: "Glace",
        price: 10,
        sprite: "sprites/types/Glace.png",
        colorFilter: "hue-rotate(120deg) saturate(1.5) brightness(1.1)",
    },
    {
        name: "Combat",
        price: 6,
        sprite: "sprites/types/Combat.png",
        colorFilter: "hue-rotate(300deg) saturate(2.5)",
    },
    {
        name: "Poison",
        price: 8,
        sprite: "sprites/types/Poison.png",
        colorFilter: "hue-rotate(169deg) saturate(3)",
    },
    {
        name: "Sol",
        price: 6,
        sprite: "sprites/types/Sol.png",
        colorFilter: "hue-rotate(314deg) saturate(2)",
    },
    {
        name: "Vol",
        price: 8,
        sprite: "sprites/types/Vol.png",
        colorFilter: "hue-rotate(117deg) saturate(0.9) brightness(0.6) contrast(0.9) brightness(1.7)",
    },
    {
        name: "Psy",
        price: 10,
        sprite: "sprites/types/Psy.png",
        colorFilter: "hue-rotate(238deg) saturate(1.6)",
    },
    {
        name: "Insecte",
        price: 6,
        sprite: "sprites/types/Insecte.png",
        colorFilter: "hue-rotate(338deg) saturate(3.5)",
    },
    {
        name: "Roche",
        price: 8,
        sprite: "sprites/types/Roche.png",
        colorFilter: "hue-rotate(329deg) saturate(1)",
    },
    {
        name: "Spectre",
        price: 10,
        sprite: "sprites/types/Spectre.png",
        colorFilter: "invert() brightness(1) hue-rotate(13deg) saturate(0.8)",
    },
    {
        name: "Dragon",
        price: 15,
        sprite: "sprites/types/Dragon.png",
        colorFilter: "hue-rotate(140deg) saturate(3)",
    },
    {
        name: "Ténèbres",
        price: 8,
        sprite: "sprites/types/Ténèbres.png",
        colorFilter: "hue-rotate(283deg) saturate(0.5) brightness(0.7)",
    },
    {
        name: "Acier",
        price: 10,
        sprite: "sprites/types/Acier.png",
        colorFilter: "hue-rotate(120deg) saturate(1) brightness(0.9)",
    },
    {
        name: "Fée",
        price: 10,
        sprite: "sprites/types/Fée.png",
        colorFilter: "hue-rotate(238deg) saturate(1.6) brightness(1.05)",
    },
];

const eggShopShiny = [
    {
        name: "Chances de shiny faibles",
        price: 0,
        sprite: "sprites/misc/random.png",
        applyCss: false,
        filter: "",
        proba: 7,
    },
    {
        name: "1 chance sur 2",
        price: 8,
        sprite: "sprites/shop_items/shiny_charm.png",
        applyCss: true,
        filter: "drop-shadow(0 0 30px orange)",
        proba: 2,
    },
];