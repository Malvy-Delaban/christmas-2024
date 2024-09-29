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
            owned_pokemons.push(owned_pokemons[0]);
            owned_pokemons.push(owned_pokemons[0]);
            owned_pokemons.push(owned_pokemons[0]);
            owned_pokemons.push(owned_pokemons[0]);
            owned_pokemons.push(owned_pokemons[0]);
            owned_pokemons.push(owned_pokemons[0]);
            owned_pokemons.push(owned_pokemons[0]);
            owned_pokemons.push(owned_pokemons[0]);
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