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

function createTypeChip(pokemon) {
    const typeChip = document.createElement('div');
    typeChip.classList.add('popup-content-type-chip');
    typeChip.style.backgroundColor = pokedex[pokemon.pokedexId].type.color;
    
    const typeChipText = document.createElement('p');
    typeChipText.textContent = pokedex[pokemon.pokedexId].type.name;
    typeChipText.classList.add('popup-content-type-chip-text');
    typeChip.appendChild(typeChipText);

    return typeChip
}