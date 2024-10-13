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

function updateOwnedPokemons() {
    localStorage.setItem("owned_pokemons", JSON.stringify(owned_pokemons));
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

    for (let i = 0; i < owned_pokemons.lenght; i++) {
        if (owned_pokemons[i].isInTeam)
            inTeamNbr++;
    }
    if (inTeamNbr == 0)
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

function GetSpriteAltNumberSpecialCases(id) {
    let specialCasesId = ["745.2"];

    if (!specialCasesId.includes(id))
        return 1;
    if (id == specialCasesId[0])
        return 2;
}

function GetSpriteByPokemon(pokedexEntry, isShiny) {
    let pokedexIdParsed = String(pokedex[pokedexEntry].id);

    let pokedex_id = pokedexIdParsed.includes('.') ? pokedexIdParsed.split('.')[0] : pokedexIdParsed;
    let altFormNumber = pokedexIdParsed.includes('.') ? GetSpriteAltNumberSpecialCases(pokedexIdParsed) : 0;

    let formattedPokedexId = pokedex_id.toString().padStart(4, '0');
    let formattedAltFormNumber = altFormNumber.toString().padStart(3, '0');
    let shinySuffix = isShiny ? 'r' : 'n';

    let spriteName = `sprites/pokemons/poke_capture_${formattedPokedexId}_${formattedAltFormNumber}_mf_n_00000000_f_${shinySuffix}.png`;

    return spriteName;
}

function GetSpriteByPokedexId(pokedexId, isShiny) {
    let pokedexIdParsed = String(pokedex[pokedexId].id);

    let pokedex_id = pokedexIdParsed.includes('.') ? pokedexIdParsed.split('.')[0] : pokedexIdParsed;
    let altFormNumber = pokedexIdParsed.includes('.') ? 1 : 0;

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