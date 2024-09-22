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
        stored_content = localStorage.getItem("pokedex");
    
        if (!stored_content || forcePokedexUpdate) {
            pokedex = setup_pokedex;
            localStorage.setItem("pokedex", JSON.stringify(pokedex));
            console.log("Pokédex initialisé.");
        } else {
            console.log("Une sauvegarde du Pokedex existe déjà. Utilisation de la sauvegarde.");
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
                background_sprite: "./sprites/locations/location_16.png",
                unlock_day: new Date("2024-12-01"),
                has_been_used: false,
                shiny_lock: false,
                base_level: 6,
                level_randomness: 2,
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
                background_sprite: "./sprites/locations/location_17.png",
                unlock_day: new Date("2024-12-02"),
                has_been_used: false,
                shiny_lock: false,
                base_level: 7,
                level_randomness: 2,
                possible_pokemons: {
                    SABELETTE: 4,
                },
            },
            {
                id: 3,
                name: "Route 03",
                background_sprite: "./sprites/locations/location_18.png",
                unlock_day: new Date("2024-12-03"),
                has_been_used: false,
                shiny_lock: false,
                base_level: 8,
                level_randomness: 2,
                possible_pokemons: {
                    SABELETTE: 4,
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
        pokedex.MOUMOUTON.elvolving_pokemon = [pokedex.MOUMOUFLON];
        pokedex.TEDDIURSA.elvolving_pokemon = [pokedex.URSARING];
        pokedex.URSARING.elvolving_pokemon = [pokedex.URSAKING];
        pokedex.LIXY.elvolving_pokemon = [pokedex.LUXIO];
        pokedex.LUXIO.elvolving_pokemon = [pokedex.LUXRAY];
        pokedex.GOINFREX.elvolving_pokemon = [pokedex.RONFLEX];
        pokedex.VIPELIERRE.elvolving_pokemon = [pokedex.LIANAJA];
        pokedex.LIANAJA.elvolving_pokemon = [pokedex.MAJASPIC];
        pokedex.ABO.elvolving_pokemon = [pokedex.ARBOK];
        pokedex.MASCAIMAN.elvolving_pokemon = [pokedex.ESCROCO];
        pokedex.ESCROCO.elvolving_pokemon = [pokedex.CROCORIBLE];
        pokedex.CHARBI.elvolving_pokemon = [pokedex.WAGOMINE];
        pokedex.WAGOMINE.elvolving_pokemon = [pokedex.MONTHRACITE];
        pokedex.PHANPY.elvolving_pokemon = [pokedex.DONPHAN];

        return pokedex;
    }
    function Setup() {
        CreatePokedex();
        CreateMapCases();
        CreateOwnedPokemons();
    }