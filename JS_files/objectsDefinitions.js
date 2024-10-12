    // **
    // SETUP THE STORAGE FOR CLIENT
    // **
    let pokedex = null;
    let map_cases = null;
    let owned_pokemons = null;

    const forcePokedexUpdate = false; // While developping, will force pokedex to update at each session
    const forceMapCasesUpdate = false; // While developping, will force map cases to update at each session
    const forceOwnedUpdate = false; // While developping, will force owned pokemon to update at each session

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
        UpdatePokedexWithEvolutions(pokedex);
    }
    function CreateMapCases() {
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
        setEvolvingRelations();
        return pokedex;
    }
    function Setup() {
        CreatePokedex();
        CreateMapCases();
        CreateOwnedPokemons();
    }