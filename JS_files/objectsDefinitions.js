    // **
    // SETUP THE STORAGE FOR CLIENT
    // **
    let pokedex = null;
    let map_cases = null;
    let owned_pokemons = null;

    const forcePokedexUpdate = false; // While developping, will force pokedex to update at each session
    const forceMapCasesUpdate = true; // While developping, will force map cases to update at each session
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
        console.log("Here");
        pokedex.SALAMECHE.evolving_pokemon = [pokedex.REPTINCEL];
        pokedex.REPTINCEL.evolving_pokemon = [pokedex.DRACAUFEU];
        pokedex.BULBIZARRE.evolving_pokemon = [pokedex.HERBIZARRE];
        pokedex.HERBIZARRE.evolving_pokemon = [pokedex.FLORIZARRE];
        pokedex.CARAPUCE.evolving_pokemon = [pokedex.CARABAFFE];
        pokedex.CARABAFFE.evolving_pokemon = [pokedex.TORTANK];
        pokedex.NIDORAN_F.evolving_pokemon = [pokedex.NIDORINA];
        pokedex.NIDORINA.evolving_pokemon = [pokedex.NIDOQUEEN];
        pokedex.NIDORAN_M.evolving_pokemon = [pokedex.NIDORINO];
        pokedex.NIDORINO.evolving_pokemon = [pokedex.NIDOKING];
        pokedex.SABELETTE.evolving_pokemon = [pokedex.SABELAIREAU];
        pokedex.SABELETTE_A.evolving_pokemon = [pokedex.SABELAIREAU_A];
        pokedex.MALOSSE.evolving_pokemon = [pokedex.DEMOLOSSE];
        pokedex.TARSAL.evolving_pokemon = [pokedex.KIRLIA];
        pokedex.KIRLIA.evolving_pokemon = [pokedex.GARDEVOIR, pokedex.GALLAME];
        pokedex.PICHU.evolving_pokemon = [pokedex.PIKACHU];
        pokedex.PIKACHU.evolving_pokemon = [pokedex.RAICHU, pokedex.RAICHU_A];
        pokedex.LAPOREILLE.evolving_pokemon = [pokedex.LOCKPIN];
        pokedex.CABRIOLAINE.evolving_pokemon = [pokedex.CHEVROUM];
        pokedex.GOBOU.evolving_pokemon = [pokedex.FLOBIO];
        pokedex.FLOBIO.evolving_pokemon = [pokedex.LAGGRON];
        pokedex.HERICENDRE.evolving_pokemon = [pokedex.FEURISSON];
        pokedex.FEURISSON.evolving_pokemon = [pokedex.TYPHLOSION, pokedex.TYPHLOSION_H];
        pokedex.MOUMOUTON.evolving_pokemon = [pokedex.MOUMOUFLON];
        pokedex.TEDDIURSA.evolving_pokemon = [pokedex.URSARING];
        pokedex.URSARING.evolving_pokemon = [pokedex.URSAKING];
        pokedex.LIXY.evolving_pokemon = [pokedex.LUXIO];
        pokedex.LUXIO.evolving_pokemon = [pokedex.LUXRAY];
        pokedex.GOINFREX.evolving_pokemon = [pokedex.RONFLEX];
        pokedex.VIPELIERRE.evolving_pokemon = [pokedex.LIANAJA];
        pokedex.LIANAJA.evolving_pokemon = [pokedex.MAJASPIC];
        pokedex.ABO.evolving_pokemon = [pokedex.ARBOK];
        pokedex.MASCAIMAN.evolving_pokemon = [pokedex.ESCROCO];
        pokedex.ESCROCO.evolving_pokemon = [pokedex.CROCORIBLE];
        pokedex.CHARBI.evolving_pokemon = [pokedex.WAGOMINE];
        pokedex.WAGOMINE.evolving_pokemon = [pokedex.MONTHRACITE];
        pokedex.PHANPY.evolving_pokemon = [pokedex.DONPHAN];
        pokedex.MANZAI.evolving_pokemon = [pokedex.SIMULARBRE];

        return pokedex;
    }
    function Setup() {
        CreatePokedex();
        CreateMapCases();
        CreateOwnedPokemons();
    }