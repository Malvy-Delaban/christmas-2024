// **
// SETUP THE STORAGE FOR CLIENT
// **
let pokedex = null;
let map_cases = null;
let owned_pokemons = null;
let inventory = null;
let trainer_card = null;
let enemy_trainers = null;

const forcePokedexUpdate = true; // While developping, will force pokedex to update at each session
const forceMapCasesUpdate = false; // While developping, will force map cases to update at each session
const forceOwnedUpdate = true; // While developping, will force owned pokemon to update at each session
const forceInventoryUpdate = false; // While developping, will force inventory to update at each session
const forceTrainerCardUpdate = false; // While developping, will force trainer card to update at each session
const forceEnemyTrainerUpdate = true; // While developping, will force enemy trainers to update at each session

function CreatePokedex() {
    let stored_content = localStorage.getItem("pokedex");

    if (!stored_content || forcePokedexUpdate) {
        pokedex = setup_pokedex;
        localStorage.setItem("pokedex", JSON.stringify(pokedex));
        console.log("Pokédex initialisé.");
    } else {
        console.log("Une sauvegarde du Pokedex existe déjà. Utilisation de la sauvegarde.");
        pokedex = JSON.parse(stored_content);
    }
    setEvolvingRelations();
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
    }
}
function Setup() {
    CreatePokedex();
    CreateMapCases();
    CreateOwnedPokemons();
    CreateInventory();
    CreateTrainerCard();
    CreateEnemyTrainers();
}