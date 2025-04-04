function getMaxHpOfPokemon(pokedexEntry, currentLevel) {
    let maxHP = pokedex[pokedexEntry].max_hp_lvl1 + Math.floor((pokedex[pokedexEntry].max_hp_lvl1 / 10) * currentLevel);
    return maxHP;
}

function getAttackOfPokemon(pokedexEntry, currentLevel) {
    let maxHP = pokedex[pokedexEntry].attack_lvl1 + Math.floor((pokedex[pokedexEntry].attack_lvl1 / 10) * currentLevel);
    return maxHP;
}

function updatePokedex() {
    localStorage.setItem("pokedex", JSON.stringify(pokedex));
}

function updateMapCases() {
    localStorage.setItem("map_cases", JSON.stringify(map_cases));
}

function updatePokedex() {
    localStorage.setItem("pokedex", JSON.stringify(pokedex));
}

function updateOwnedPokemons() {
    localStorage.setItem("owned_pokemons", JSON.stringify(owned_pokemons));
}

function updateInventory() {
    localStorage.setItem("inventory", JSON.stringify(inventory));
}

function updateTrainerCard() {
    localStorage.setItem("trainer_card", JSON.stringify(trainer_card));
}

function updateEnemyTrainers() {
    localStorage.setItem("enemy_trainers", JSON.stringify(enemy_trainers));
}

function updateItemCodes() {
    localStorage.setItem("items_code", JSON.stringify(items_code));
}

function updateEggs() {
    localStorage.setItem("eggs", JSON.stringify(eggs));
}

function getHPinPercent(pokemon) {
    return (parseInt(pokemon.hp) / parseInt(pokemon.max_hp) * 100);
}

function getHPbarSize(pokemon) {
    let percent = getHPinPercent(pokemon);
    if (percent <= 0)
        return 0;
    if (percent > 98)
        return (`calc(${percent}% - 6px)`);
    return (`${percent}%`);
}

function getHPbarColor(pokemon) {
    let percent = getHPinPercent(pokemon);

    if (percent > 50)
        return "#78C850";
    if (percent > 20)
        return "orange";
    return "#ff2d2d";
}

function createTypeChipPopupYourPokemons(pokemon) {
    const typeChip = document.createElement('div');
    typeChip.classList.add('popup-content-type-chip');
    typeChip.style.backgroundColor = pokemon.type.color;

    const typeChipText = document.createElement('p');
    typeChipText.textContent = pokemon.type.name;
    typeChipText.classList.add('popup-content-type-chip-text');
    typeChip.appendChild(typeChipText);

    return typeChip
}

function createTypeChipPopupDetail(pokemon) {
    const typeChip = document.createElement('div');
    typeChip.classList.add('pokemon-detail-type-chip');
    typeChip.style.backgroundColor = pokedex[pokemon.pokedexId].type.color;

    const typeChipText = document.createElement('p');
    typeChipText.textContent = pokedex[pokemon.pokedexId].type.name;
    typeChipText.classList.add('pokemon-detail-type-chip-text');
    typeChip.appendChild(typeChipText);

    return typeChip
}

function createTypeChipFromPokedexID(PokedexID) {
    const typeChip = document.createElement('div');
    typeChip.classList.add('popup-evolution-type-chip');
    typeChip.style.backgroundColor = pokedex[PokedexID].type.color;

    const typeChipText = document.createElement('p');
    typeChipText.textContent = pokedex[PokedexID].type.name;
    typeChipText.classList.add('popup-evolution-type-chip-text');
    typeChip.appendChild(typeChipText);

    return typeChip
}

function createTypeChipFromPokedexIDDuel(PokedexID, isEnemy) {
    const typeChip = document.createElement('div');
    typeChip.classList.add('popup-evolution-type-chip');
    typeChip.id = isEnemy ? "enemy-pokemon-type" : "player-pokemon-type";
    typeChip.style.backgroundColor = pokedex[PokedexID].type.color;

    const typeChipText = document.createElement('p');
    typeChipText.textContent = pokedex[PokedexID].type.name;
    typeChipText.classList.add('popup-evolution-type-chip-text');
    typeChip.appendChild(typeChipText);

    return typeChip
}

function forceInTeamIfNeeded() {
    let inTeamNbr = 0;

    for (let i = 0; i < owned_pokemons.length; i++) {
        if (owned_pokemons[i].isInTeam)
            inTeamNbr++;
    }
    if (inTeamNbr == 0)
        owned_pokemons[0].isInTeam = true;
    updateOwnedPokemons();
}

function checkInTeamNumber() {
    let inTeamNbr = 0;

    for (let i = 0; i < owned_pokemons.length; i++) {
        if (owned_pokemons[i].isInTeam)
            inTeamNbr++;
        if (inTeamNbr > 3) {
            owned_pokemons[i].isInTeam = false;
            inTeamNbr--;
        }
    }
    if (inTeamNbr == 0 && owned_pokemons && owned_pokemons.length > 0)
        owned_pokemons[0].isInTeam = true;
    updateOwnedPokemons();
}

function getInTeamPokemons() {
    let team = [];

    for (let i = 0; i < owned_pokemons.length; i++) {
        if (owned_pokemons[i].isInTeam)
            team.push(owned_pokemons[i]);
    }
    return team;
}

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function GetSpriteAltNumberSpecialCases(id, isShiny) {
    let specialCasesId = ["745.2", "413.1", "413.2", "413.3", "80.2", "774.1", "412.1", "412.2", "412.3"];

    if (!specialCasesId.includes(id))
        return 1;
    if (id == specialCasesId[0]) // LOUGAROC DUSK
        return 2;
    if (id == specialCasesId[1]) // CHENISELLE PLANTE
        return 0;
    if (id == specialCasesId[2]) // CHENISELLE SOL
        return 1;
    if (id == specialCasesId[3]) // CHENISELLE ACIER
        return 2;
    if (id == specialCasesId[4]) // FLAGADOSS GALAR
        return 2;
    if (id == specialCasesId[5] && isShiny) // METENO
        return 7;
    if (id == specialCasesId[5]) // METENO
        return Math.floor(Math.random() * 7) + 7;
    if (id == specialCasesId[6]) // CHENITI PLANTE
        return 0;
    if (id == specialCasesId[7]) // CHENITI SOL
        return 1;
    if (id == specialCasesId[8]) // CHENITI ACIER
        return 2;
    return 1;
}

function GetSpriteByPokemon(pokedexEntry, isShiny) {
    let pokedexIdParsed = String(pokedex[pokedexEntry].id);

    let pokedex_id = pokedexIdParsed.includes('.') ? pokedexIdParsed.split('.')[0] : pokedexIdParsed;
    let altFormNumber = pokedexIdParsed.includes('.') ? GetSpriteAltNumberSpecialCases(pokedexIdParsed, isShiny) : 0;

    let formattedPokedexId = pokedex_id.toString().padStart(4, '0');
    let formattedAltFormNumber = altFormNumber.toString().padStart(3, '0');
    let shinySuffix = isShiny ? 'r' : 'n';

    let spriteName = `sprites/pokemons/poke_capture_${formattedPokedexId}_${formattedAltFormNumber}_mf_n_00000000_f_${shinySuffix}.png`;

    return spriteName;
}

function GetThumbnailSpriteByPokemon(pokedexEntry, isShiny) {
    let pokedexIdParsed = String(pokedex[pokedexEntry].id);

    let pokedex_id = pokedexIdParsed.includes('.') ? pokedexIdParsed.split('.')[0] : pokedexIdParsed;
    let altFormNumber = pokedexIdParsed.includes('.') ? GetSpriteAltNumberSpecialCases(pokedexIdParsed, isShiny) : 0;

    let formattedPokedexId = pokedex_id.toString().padStart(4, '0');
    let formattedAltFormNumber = altFormNumber.toString().padStart(3, '0');
    let shinySuffix = isShiny ? 'r' : 'n';

    let spriteName = `sprites/thumbnails/poke_capture_${formattedPokedexId}_${formattedAltFormNumber}_mf_n_00000000_f_${shinySuffix}.png`;

    return spriteName;
}

// GetPokedexId GetId
function getKeyPokedexFromId(targetId) {
    let foundKey = null;

    for (const [key, pokemon] of Object.entries(pokedex)) {
        if (pokemon.id === targetId) {
            foundKey = key; // Store the key when a match is found
            break; // Exit the loop once the key is found
        }
    }

    return foundKey;
}

function hasEnoughItemInInventory(item, needed) {
    const itemIfExisting = inventory.find(inventoryItem => inventoryItem.item.id === item.id);

    if (!itemIfExisting || itemIfExisting.quantity < needed)
        return false;
    return true;
}

function currentQuantityInInventory(item) {
    const itemIfExisting = inventory.find(inventoryItem => inventoryItem.item.id === item.id);

    if (!itemIfExisting)
        return 0;
    return itemIfExisting.quantity;
}

function addItemInInventory(item, quantityAdded) {
    const itemIfExisting = inventory.find(inventoryItem => inventoryItem.item.id === item.id);

    if (itemIfExisting) {
        itemIfExisting.quantity += quantityAdded;
    } else {
        let newItemInInventory = {
            item: item,
            quantity: quantityAdded
        };
        inventory.push(newItemInInventory);
    }
    updateInventory();
}

function removeItemInInventoryById(id, quantityRemoved) {
    let item = inventory.find(inventoryItem => inventoryItem.item.id === id);
    removeItemInInventory(item.item, quantityRemoved);
}

function removeItemInInventory(item, quantityRemoved) {
    const itemIndex = inventory.findIndex(inventoryItem => inventoryItem.item.id === item.id);

    if (itemIndex !== -1) {
        inventory[itemIndex].quantity -= quantityRemoved;
        if (inventory[itemIndex].quantity <= 0)
            inventory.splice(itemIndex, 1);
    }
    updateInventory();
}

function pokemonHasBeenSeen(pokemon) {
    pokedex[pokemon].has_been_seen = true;
    updatePokedex();
}

function pokemonHasBeenCaptured(pokemon) {
    pokedex[pokemon].has_been_captured = true;
    updatePokedex();
}

function getSeenPokemonNmbr() {
    let seen = 0;

    for (const [key, pokemon] of Object.entries(pokedex))
        if (pokemon.has_been_seen)
            seen++;
    return seen;
}

function getSeenPokemonNmbrForRegion(region) {
    let seen = 0;

    const regionData = Pokedexs[region];
    if (!regionData) {
        console.error(`Région ${region} non trouvée`);
        return seen;
    }

    const startnum = parseFloat(regionData.startnum);
    const endnum = parseFloat(regionData.endnum);

    for (const [key, pokemon] of Object.entries(pokedex)) {
        const pokemonId = parseFloat(pokemon.id);

        if (pokemon.has_been_seen && pokemonId >= startnum && pokemonId <= endnum)
            seen++;
    }

    return seen;
}

function getCapturedPokemonNmbrForRegion(region) {
    let captured = 0;

    const regionData = Pokedexs[region];
    if (!regionData) {
        console.error(`Région ${region} non trouvée`);
        return captured;
    }

    const startnum = parseFloat(regionData.startnum);
    const endnum = parseFloat(regionData.endnum);

    for (const [key, pokemon] of Object.entries(pokedex)) {
        const pokemonId = parseFloat(pokemon.id);

        if (pokemon.has_been_captured && pokemonId >= startnum && pokemonId <= endnum)
            captured++;
    }

    return captured;
}

function getPokemonsForRegion(region) {
    let pokeList = {};

    const regionData = Pokedexs[region];
    if (!regionData) {
        console.error(`Région ${region} non trouvée`);
        return null;
    }

    const startnum = parseFloat(regionData.startnum);
    const endnum = parseFloat(regionData.endnum);

    for (const [key, pokemon] of Object.entries(pokedex)) {
        const pokemonId = parseFloat(pokemon.id);

        if (pokemonId >= startnum && pokemonId <= endnum)
            pokeList[key] = pokemon;
    }

    return pokeList;
}

function getTotalPokemonNmbrForRegion(region) {
    let total = 0;

    // Accéder à la région spécifique dans Pokedexs
    const regionData = Pokedexs[region];
    if (!regionData) {
        console.error(`Région ${region} non trouvée`);
        return total;
    }

    // Convertir startnum et endnum en nombres
    const startnum = parseFloat(regionData.startnum);
    const endnum = parseFloat(regionData.endnum);

    // Vérifier tous les Pokémon dans Pokedex
    for (const [key, pokemon] of Object.entries(pokedex)) {
        const pokemonId = parseFloat(pokemon.id);

        // Vérifier si l'id du Pokémon est dans la plage de la région
        if (pokemonId >= startnum && pokemonId <= endnum) {
            total++;
        }
    }

    return total;
}

function getCapturedPokemonNmbr() {
    let captured = 0;

    for (const [key, pokemon] of Object.entries(pokedex))
        if (pokemon.has_been_captured)
            captured++;
    return captured;
}

function getRouteFromCode(code) {
    if (!code || code == "")
        return null;
    for (let singleCase of map_cases)
        if (singleCase.code === code && !singleCase.has_been_used)
            return singleCase;
    return null;
}

function getTrainerFromCode(code) {
    if (!code || code == "")
        return null;
    for (let trainer of enemy_trainers)
        if (trainer.code === code && !trainer.has_been_used)
            return trainer;
    return null;
}

function getObjectFromCode(code) {
    if (!code || code == "")
        return null;
    for (let itemEvent of items_code)
        if (itemEvent.code === code && !itemEvent.has_been_used)
            return itemEvent;
    return null;
}

function getSpecificPokemonFromCode(code) {
    const index = eventCodes.indexOf(code);

    if (index === -1 || map_cases.some(obj => obj.id === index))
        return null
    else
        return generateRouteFromCodeIndex(index);
}

function generateRouteFromCodeIndex(index) {
    let pokemonKey = Object.entries(pokedex)[index];

    let route = {
        id: "specific_" + index,
        code: '',
        name: "A la rencontre d'un " + pokedex[pokemonKey[0]].name,
        sprite: "./sprites/locations/location_44.png",
        unlock_day: -1,
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: true,
        base_level: 1,
        level_randomness: 0,
        generated_pokemons: [],
        possible_pokemons: {
            [pokemonKey[0]]: 1,
        },
    };
    map_cases.push(route);
    updateMapCases();
    return route;
}

function isDuelFinished(duelId) {
    if (!duelId || duelId < 0)
        return true;
    for (let trainer of enemy_trainers)
        if (trainer.id === duelId)
            return trainer.has_been_used;
    return true;
}

function showNotification(message, status) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    if (status === "error")
        notification.style.backgroundColor = "#f44336";
    else if (status === "validation")
        notification.style.backgroundColor = "#4CAF50";
    else
        notification.style.backgroundColor = "#4CAF50";


    // Show the notification
    notification.classList.add('show');

    // Automatically hide it after 5 seconds (5000ms)
    setTimeout(() => {
        notification.classList.add('hide'); // Start the fade-out
        setTimeout(() => {
            notification.classList.remove('show', 'hide'); // Reset the notification
        }, 500); // Wait for the fade-out animation to finish
    }, 4000);
}

function evolvePokemon(id, newPokedexId, needed_item, needed_quantity) {
    Object.keys(owned_pokemons).forEach(key => {
        if (owned_pokemons[key].uuid == id) {
            owned_pokemons[key].pokedexId = newPokedexId;
            owned_pokemons[key].max_hp = getMaxHpOfPokemon(newPokedexId, owned_pokemons[key].level);
            owned_pokemons[key].hp = owned_pokemons[key].max_hp;
            owned_pokemons[key].attack = getAttackOfPokemon(newPokedexId, owned_pokemons[key].level);
            owned_pokemons[key].sprite = GetSpriteByPokemon(owned_pokemons[key].pokedexId, owned_pokemons[key].isShiny);
            pokemonHasBeenSeen(newPokedexId);
            pokemonHasBeenCaptured(newPokedexId);
            const updateYourPokemonEvent = new CustomEvent("updateYourPokemonEvent", {});
            document.dispatchEvent(updateYourPokemonEvent);
            removeItemInInventoryById(needed_item, needed_quantity);
            updateOwnedPokemons();
        }
    });
    return null;
}

function getAttackNameByRarity(rarity, type, isRandomAttack) {
    return type.attacks[isRandomAttack ? 0 : rarity.attackIndex];
}

function getRandomType(typeToAvoid) {
    let returnType = null;

    while (!returnType) {
        const typesKeys = Object.keys(Types);
        const randomKey = typesKeys[Math.floor(Math.random() * typesKeys.length)];
        const randomType = Types[randomKey];

        if (randomType.name != typeToAvoid.name)
            returnType = randomType;
    }

    return returnType;
}

function generatePokemon(pokedexEntry, isShiny, level, isEnemy) {
    let temp_isShiny = isShiny;
    let temp_level = level;
    let temp_maxHp = getMaxHpOfPokemon(pokedexEntry, temp_level);
    let temp_attack = getAttackOfPokemon(pokedexEntry, temp_level);
    let temp_gender = Math.floor(Math.random() * 2) == 0 ? "male" : "female";
    let temp_sprite = GetSpriteByPokemon(pokedexEntry, temp_isShiny);

    let newPokemon = {
        uuid: generateUUID(),
        is_enemy: isEnemy,
        pokedexId: pokedexEntry,
        isShiny: temp_isShiny,
        level: temp_level,
        max_hp: temp_maxHp,
        hp: temp_maxHp,
        attack: temp_attack,
        gender: temp_gender,
        sprite: temp_sprite,
        isInTeam: false,
        duelWon: 0,
        is_ko: false,
    };

    return newPokemon;
}

function getPokemonsOfTrainer(trainer) {
    let pokemons = [];

    trainer.pokemons.forEach(pokemon => {
        const newPokemon = generatePokemon(pokemon.pokedexId, pokemon.is_shiny, pokemon.level, true);
        pokemons.push(newPokemon);
    });

    return pokemons;
}

function getPlayerTeam() {
    let pokemons = owned_pokemons.filter(pokemon => pokemon.isInTeam);
    if (!pokemons || pokemons.length <= 0 && (owned_pokemons && owned_pokemons.length >= 1))
        forceInTeamIfNeeded();

    return pokemons;
}

function getTypeByName(typeName) {
    const typeFound = Object.entries(Types).find(value => value[1].name === typeName)?.[1];

    return typeFound;
}

function getTypeKeyById(typeId) {
    const typeFound = Object.entries(Types).find(value => value[1].id === typeId)?.[0];

    return typeFound;
}

function getAttackDamageMultiplier(attackingPokemon, defendingPokemon, isRandomAttack, randomType) {
    let attackingType = isRandomAttack ? randomType : pokedex[attackingPokemon.pokedexId].type;
    let defendingType = getTypeKeyById(pokedex[defendingPokemon.pokedexId].type.id);
    let listOfStrength = attackingType.strength;
    let listOfWeakness = attackingType.weakness;
    let listOfNulls = attackingType.nullAttacks;
    let typeAdvantageModifier = 1;

    if (listOfStrength.includes(defendingType)) {
        typeAdvantageModifier = 1.5;
    } else if (listOfWeakness.includes(defendingType)) {
        typeAdvantageModifier = 0.5;
    } else if (listOfNulls.includes(defendingType)) {
        typeAdvantageModifier = 0;
    }

    let randomNerfModifier = isRandomAttack ? 0.8 : 1;
    let multiplier = typeAdvantageModifier * randomNerfModifier;

    return multiplier;
}

function getAttackDamage(attackingPokemon, defendingPokemon, isRandomAttack, randomType) {
    let multiplier = getAttackDamageMultiplier(attackingPokemon, defendingPokemon, isRandomAttack, randomType);
    let damages = attackingPokemon.attack * multiplier;
    damages = Math.floor(damages);

    return damages;
}

function getAttackEfficiency(attackingPokemon, defendingPokemon, isRandomAttack, randomType) {
    let attackingType = isRandomAttack ? randomType : pokedex[attackingPokemon.pokedexId].type;
    let defendingType = getTypeKeyById(pokedex[defendingPokemon.pokedexId].type.id);
    let listOfStrength = attackingType.strength;
    let listOfWeakness = attackingType.weakness;
    let listOfNulls = attackingType.nullAttacks;

    if (listOfStrength.includes(defendingType)) {
        return 2
    } else if (listOfWeakness.includes(defendingType)) {
        return 0.5
    } else if (listOfNulls.includes(defendingType)) {
        return 0
    }

    return 1;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runWithDelay(delayInSecondes) {
    await delay(delayInSecondes * 1000);
}

function removeAllEventListeners(element) {
    const clone = element.cloneNode(true);
    element.parentNode.replaceChild(clone, element);
    return clone;
}

function updateOwnedPokemonHpAfterDuel() {
    playerTeam.forEach(duelPokemon => {
        let originalPoke = owned_pokemons.find(value => value.uuid === duelPokemon.uuid);
        originalPoke.hp = duelPokemon.hp <= 0 ? 0 : duelPokemon.hp;
    });
    updateOwnedPokemons();
}

function levelUpPokemon(pokemonId) {
    let pokeToLevelUp = owned_pokemons.find(value => value.uuid === pokemonId);
    if (pokeToLevelUp.level >= 100) {
        pokeToLevelUp.level = 100;
        return;
    }
    let isFullHealth = pokeToLevelUp.max_hp === pokeToLevelUp.hp;
    pokeToLevelUp.level++;
    pokeToLevelUp.max_hp = getMaxHpOfPokemon(pokeToLevelUp.pokedexId, pokeToLevelUp.level);
    pokeToLevelUp.attack = getAttackOfPokemon(pokeToLevelUp.pokedexId, pokeToLevelUp.level);
    if (isFullHealth)
        pokeToLevelUp.hp = pokeToLevelUp.max_hp;
    pokeToLevelUp.duelWon++;
    updateOwnedPokemons();
}

function makePokemonFirstInOwnedPokemons(uuid) {
    const foundItem = owned_pokemons.find(item => item.uuid === uuid);
    owned_pokemons = foundItem ? [foundItem, ...owned_pokemons.filter(item => item.uuid !== uuid)] : owned_pokemons;
    updateOwnedPokemons();
}

function removePokemonFromOwned(pokemon) {
    owned_pokemons = owned_pokemons.filter(item => item.uuid !== pokemon.uuid);
    updateOwnedPokemons();
    const updateYourPokemonEvent = new CustomEvent("updateYourPokemonEvent", {});
    document.dispatchEvent(updateYourPokemonEvent);
    checkInTeamNumber();
}

function getDailyUniqueId() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Les mois commencent à 0 en JS
    const day = now.getDate();

    return `${year}${String(month).padStart(2, '0')}${String(day).padStart(2, '0')}`;
}

function downloadLocalStorage() {
    // Convertir le LocalStorage en un objet JSON
    const data = JSON.stringify(localStorage, null, 2);
    const blob = new Blob([data], { type: "application/json" });

    // Créer un lien de téléchargement
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    let date = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    let name = "pokeadventure_save_" + date + ".json";
    a.download = name;

    // Simuler un clic pour télécharger
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function restoreLocalStorageFromFile() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";

    input.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            try {
                const data = JSON.parse(e.target.result);

                // Vérifier que le fichier contient bien un objet valide
                if (typeof data !== "object" || data === null) {
                    alert("Fichier invalide : le contenu doit être un objet JSON.");
                    return;
                }

                // Vider l'ancien localStorage
                localStorage.clear();

                // Remplir avec les nouvelles données
                for (const key in data) {
                    localStorage.setItem(key, data[key]);
                }

                alert("LocalStorage restauré avec succès !");
                location.reload();
            } catch (error) {
                alert("Erreur lors du chargement du fichier : " + error.message);
            }
        };

        reader.readAsText(file);
    });

    input.click();
}

function setEggInInventory(egg) {
    if (eggs != null) {
        showNotification("Vous avez déjà un oeuf", "error");
        return;
    } else {
        eggs = egg;
        updateEggs();
    }
}

function formatDateEgg(myDate) {
    myDate = new Date(myDate);
    return myDate.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "2-digit",
        hour12: false, // Format 24h
    }).replace(":", "h"); // Remplace ":" par "h"
}

function atchPokemonEgg() {
    owned_pokemons.push(eggs.pokemon);
    pokemonHasBeenSeen(eggs.pokemon.pokedexId);
    pokemonHasBeenCaptured(eggs.pokemon.pokedexId);
    updateOwnedPokemons();
    forceInTeamIfNeeded();
    let poketemp = eggs.pokemon;
    eggs = null;
    updateEggs();
    return poketemp;
}