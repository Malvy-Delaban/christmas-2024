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