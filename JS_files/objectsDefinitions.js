// **
// SETUP THE STORAGE FOR CLIENT
// **
let pokedex = null;
let map_cases = null;
let owned_pokemons = null;
let inventory = null;
let trainer_card = null;
let enemy_trainers = null;
let items_code = null;
let eggs = null;
let updates_done = [];

let forcePokedexUpdate = false; // While developping, will force pokedex to update at each session
let forceMapCasesUpdate = false; // While developping, will force map cases to update at each session
let forceOwnedUpdate = false; // While developping, will force owned pokemon to update at each session
let forceInventoryUpdate = false; // While developping, will force inventory to update at each session
let forceTrainerCardUpdate = false; // While developping, will force trainer card to update at each session
let forceEnemyTrainerUpdate = false; // While developping, will force enemy trainers to update at each session
let forceItemsCodeUpdate = false; // While developping, will force items code to update at each session
let forceUpdatesDoneUpdate = false; // While developping, will force updates done to update at each session
let forceEggsUpdate = false; // While developping, will force updates done to eggs at each session

function CreatePokedex() {
    let stored_content = localStorage.getItem("pokedex");

    if (!stored_content || forcePokedexUpdate) {
        pokedex = setup_pokedex;
        localStorage.setItem("pokedex", JSON.stringify(pokedex));
        setEvolvingRelations();
        console.log("Pokédex initialisé.");
    } else {
        console.log("Une sauvegarde du Pokedex existe déjà. Utilisation de la sauvegarde.");
        pokedex = JSON.parse(stored_content);
        CheckForUpdatesInPokedex();
    }
}

function CreateMapCases() {
    let stored_content = localStorage.getItem("map_cases");

    if (!stored_content || forceMapCasesUpdate) {
        localStorage.setItem("map_cases", JSON.stringify(setup_map_cases));
        map_cases = setup_map_cases;
        console.log("Map initialisée.");
    } else {
        console.log("Une sauvegarde de la Map existe deja. Utilisation de la sauvegarde.");
        map_cases = JSON.parse(stored_content);
        CheckForUpdatesInMapCases();
    }
}

function CreateOwnedPokemons() {
    let setup_owned_pokemons = [];
    let stored_content = localStorage.getItem("owned_pokemons");

    if (!stored_content || forceOwnedUpdate) {
        localStorage.setItem("owned_pokemons", JSON.stringify(setup_owned_pokemons));
        owned_pokemons = setup_owned_pokemons;
        console.log("Liste des pokémons initialisée.");
    } else {
        console.log("Une sauvegarde de la liste des pokémons existe deja. Utilisation de la sauvegarde.");
        owned_pokemons = JSON.parse(stored_content);
    }
}

function CreateInventory() {
    let stored_content = localStorage.getItem("inventory");

    if (!stored_content || forceInventoryUpdate) {
        inventory = [];
        localStorage.setItem("inventory", JSON.stringify(inventory));
        console.log("Inventaire initialisé.");
    } else {
        console.log("Une sauvegarde de l'inventaire existe déjà. Utilisation de la sauvegarde.");
        inventory = JSON.parse(stored_content);
    }
}

function CreateTrainerCard() {
    let stored_content = localStorage.getItem("trainer_card");

    if (!stored_content || forceTrainerCardUpdate) {
        let defaultTrainerImg = (Math.floor(Math.random() * 79) + 1);
        let defaultTrainerName = (Math.floor(Math.random() * 2) + 1);
        trainer_card = {
            name: defaultTrainerName == 1 ? "Anna" : "Hank",
            sprite: "sprites/trainers/trainer_" + defaultTrainerImg + ".png",
            last_loading: new Date("2024-10-18T20:16:55.631Z"),
        };
        localStorage.setItem("trainer_card", JSON.stringify(trainer_card));
        console.log("Carte de dresseur initialisée.");
    } else {
        console.log("Une sauvegarde de la carte de dresseur existe déjà. Utilisation de la sauvegarde.");
        trainer_card = JSON.parse(stored_content);
    }
}

function CreateEnemyTrainers() {
    let stored_content = localStorage.getItem("enemy_trainers");

    if (!stored_content || forceEnemyTrainerUpdate) {
        enemy_trainers = setup_trainers;
        localStorage.setItem("enemy_trainers", JSON.stringify(enemy_trainers));
        console.log("Liste des enemies initialisée.");
    } else {
        console.log("Une sauvegarde des enemies existe déjà. Utilisation de la sauvegarde.");
        enemy_trainers = JSON.parse(stored_content);
        CheckForUpdatesInEnemyTrainers();
    }
}

function CreateItemsCode() {
    let stored_content = localStorage.getItem("items_code");

    if (!stored_content || forceItemsCodeUpdate) {
        items_code = ItemsCodes;
        localStorage.setItem("items_code", JSON.stringify(items_code));
        console.log("Liste des codes objets initialisée.");
    } else {
        console.log("Une sauvegarde des codes objets existe déjà. Utilisation de la sauvegarde.");
        items_code = JSON.parse(stored_content);
        CheckForUpdatesItemCodes();
    }
}

function CreateEggs() {
    let stored_content = localStorage.getItem("eggs");

    if (!stored_content || forceEggsUpdate) {
        eggs = null;
        localStorage.setItem("eggs", JSON.stringify(eggs));
        console.log("Oeuf initialisé.");
    } else {
        console.log("Une sauvegarde de l'oeuf existe déjà. Utilisation de la sauvegarde.");
        eggs = JSON.parse(stored_content);
    }
}

function CreateUpdatesDone() {
    let stored_content = localStorage.getItem("updates_done");

    if (!stored_content || forceUpdatesDoneUpdate) {
        localStorage.setItem("updates_done", JSON.stringify(updates_done));
        console.log("Liste des updates initialisée.");
    } else {
        console.log("Une liste d'update existe déjà. Utilisation de la liste.");
        updates_done = JSON.parse(stored_content);
    }
}

function checkForForcedUpdate() {
    let needAnUpdate = false;

    if (!updates_done.includes("2024-11-04") && isPastToday("2024-11-01")) { // November Playtests
        needAnUpdate = true;
        updates_done.push("2024-11-04");
    }
    if (!updates_done.includes("2024-12-01") && isPastToday("2024-11-30")) { // Launch date
        needAnUpdate = true;
        updates_done.push("2024-12-01");
    }
    localStorage.setItem("updates_done", JSON.stringify(updates_done));

    return needAnUpdate;
}

function ClearPreviousSavesOnUpdateDates() {
    forcePokedexUpdate = true;
    forceMapCasesUpdate = true;
    forceOwnedUpdate = true;
    forceInventoryUpdate = true;
    forceTrainerCardUpdate = true;
    forceEnemyTrainerUpdate = true;
}

function CheckForUpdatesInMapCases() {
    setup_map_cases.forEach(element => {
        if (!map_cases.find(map_case => map_case.id === element.id))
            map_cases.push(element);
    });
    updateMapCases();
}

function CheckForUpdatesInPokedex() {
    let mustBeFixed = false;

    for (let element in setup_pokedex) {
        let elementId = setup_pokedex[element].id;
        if (!Object.values(pokedex).some(map_case => map_case.id === elementId)) {
            pokedex[element] = setup_pokedex[element];
            mustBeFixed = true;
        }
    }
    if (mustBeFixed)
        setEvolvingRelations();
    updatePokedex();
}

function CheckForUpdatesInEnemyTrainers() {
    setup_trainers.forEach(element => {
        if (!enemy_trainers.find(trainer => trainer.id === element.id))
            enemy_trainers.push(element);
    });
    updateEnemyTrainers();
}

function CheckForUpdatesItemCodes() {
    ItemsCodes.forEach(element => {
        if (!items_code.find(code => code.id === element.id))
            items_code.push(element);
    });
    updateItemCodes();
}

function HardReset() {
    forcePokedexUpdate = true;
    forceMapCasesUpdate = true;
    forceOwnedUpdate = true;
    forceInventoryUpdate = true;
    forceTrainerCardUpdate = true;
    forceEnemyTrainerUpdate = true;
    forceItemsCodeUpdate = true;
    forceUpdatesDoneUpdate = true;
    forceEggsUpdate = true;
    Setup();
}

function FixPokemonLevel() {
    owned_pokemons.forEach(pokemon => {
        pokemon.level = Math.ceil(pokemon.level);
    });
    updateOwnedPokemons();
}

function FixCatchedPokemon() {
    // Créer un tableau avec les pokedexId des Pokémon détenus
    let ownedPokemonIds = owned_pokemons.map(pokemon => pokemon.pokedexId);

    // Parcourir chaque Pokémon détenu et mettre à jour les informations
    ownedPokemonIds.forEach(pokedexId => {
        let current = pokedex[pokedexId];

        // Marquer le Pokémon comme vu et capturé
        current.has_been_seen = true;
        current.has_been_captured = true;

        // Vérifier si des Pokémon ont cette évolution et ajouter leur ID
        Object.values(pokedex).forEach(pokemon => {
            if (pokemon.evolving_pokemon.some(evo => evo.id === getKeyPokedexFromId(current.id))) {
                ownedPokemonIds.push(getKeyPokedexFromId(pokemon.id));  // Ajouter le Pokémon qui évolue vers le courant
            }
        });
    });

    // Mettre à jour les pré-évolutions des Pokémon dans le tableau
    ownedPokemonIds.forEach(id => {
        let pokemon = pokedex[id];
        pokemon.has_been_seen = true;
        pokemon.has_been_captured = true;
    });

    // Mise à jour du Pokédex
    updatePokedex();
}

// set seen and catched for currently owned pokemons, their prevolution and same for every catched pokemon ever
function FixCatchedPokemon() {
    let ownedPokemonIds = owned_pokemons.map(pokemon => pokemon.pokedexId);
    Object.values(pokedex).filter(pokemon => pokemon.has_been_captured).forEach(pokemon => ownedPokemonIds.push(getKeyPokedexFromId(pokemon.id)));

    function markEvolutions(pokedexId) {
        let current = pokedex[pokedexId];
        current.has_been_seen = true;
        current.has_been_captured = true;
        Object.values(pokedex).forEach(pokemon => {
            pokemon.evolving_pokemon.forEach(evolution => {
                if (evolution.id === current.id) {
                    markEvolutions(getKeyPokedexFromId(pokemon.id));
                }
            });
        });
    }

    ownedPokemonIds.forEach(pokedexId => {
        markEvolutions(pokedexId);
    });
    updatePokedex();
}

function Setup() {
    CreateUpdatesDone();
    // if (checkForForcedUpdate())
    //     ClearPreviousSavesOnUpdateDates();

    CreatePokedex();
    CreateMapCases();
    CreateOwnedPokemons();
    CreateInventory();
    CreateTrainerCard();
    CreateEnemyTrainers();
    CreateItemsCode();
    CreateEggs();

    FixPokemonLevel();
    FixCatchedPokemon();
}