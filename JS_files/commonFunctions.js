function getMaxHpOfPokemon(pokedexEntry, currentLevel) {
    let maxHP = pokedex[pokedexEntry].max_hp_lvl1 + Math.floor((pokedex[pokedexEntry].max_hp_lvl1 / 10) * currentLevel);
    return maxHP;
}

function getAttackOfPokemon(pokedexEntry, currentLevel) {
    let maxHP = pokedex[pokedexEntry].attack_lvl1 + Math.floor((pokedex[pokedexEntry].attack_lvl1 / 10) * currentLevel);
    return maxHP;
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

function getHPinPercent(pokemon) {
    return (parseInt(pokemon.hp) / parseInt(pokemon.max_hp) * 100);
}

function getHPbarSize(pokemon) {
    let percent = getHPinPercent(pokemon);
    if (percent > 98)
        return (`calc(${getHPinPercent(pokemon)}% - 6px)`);
    return (`${getHPinPercent(pokemon)}%`);
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
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
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

function getCapturedPokemonNmbr() {
    let captured = 0;

    for (const [key, pokemon] of Object.entries(pokedex))
        if (pokemon.has_been_captured)
            captured++;
    return captured;
}

function getRouteFromCode(code) {
    for (let singleCase of map_cases)
        if (singleCase.code === code && !singleCase.has_been_used)
            return singleCase;
    return null;
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
            pokedex[newPokedexId].has_been_seen = true;
            pokedex[newPokedexId].has_been_captured = true;
            const updateYourPokemonEvent = new CustomEvent("updateYourPokemonEvent", {});
            document.dispatchEvent(updateYourPokemonEvent);
            removeItemInInventoryById(needed_item, needed_quantity);
            updateOwnedPokemons();
        }
    });
    return null;
}