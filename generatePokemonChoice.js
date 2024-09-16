function generatePokemonBasedOnPokedexEntry(pokedexEntry, currentCase) {
    let temp_isShiny = currentCase.shiny_lock ? false : (Math.floor(Math.random() * 20) + 1) === 1;
    let temp_level = Math.round(currentCase.base_level + (Math.random() * (2 * currentCase.level_randomness) - currentCase.level_randomness));
    let temp_maxHp = getMaxHpOfPokemon(pokedexEntry, temp_level);
    let temp_attack = getAttackOfPokemon(pokedexEntry, temp_level);

    let newPokemon = {
        pokedexId: pokedexEntry,
        isShiny: temp_isShiny,
        level: temp_level,
        max_hp: temp_maxHp,
        hp: temp_maxHp,
        attack: temp_attack,
    };

    return newPokemon;
}

function getRandomPokemons(currentCase, count) {
    let pokemonList = currentCase.possible_pokemons;

    // Creating weighted list
    let weightedPokemons = [];
    for (const [pokemonKey, weight] of Object.entries(pokemonList)) {
        for (let i = 0; i < weight; i++) {
            weightedPokemons.push(pokemonKey);
        }
    }
    // Select without dubs
    let selectedPokemons = [];
    while (selectedPokemons.length < count) {
        const randomIndex = Math.floor(Math.random() * weightedPokemons.length);
        const chosenPokemon = weightedPokemons[randomIndex];
        if (!selectedPokemons.includes(chosenPokemon)) {
            selectedPokemons.push(chosenPokemon);
        }
    }

    let generatedPokemons = [];
    for (let i = 0; i < selectedPokemons.length; i++)
        generatedPokemons.push(generatePokemonBasedOnPokedexEntry(selectedPokemons[i], currentCase));
    
    // return generated pokemons list
    return generatedPokemons;
}

function generatePokemonChoiceDisplay(pokemonlist, currentCase) {
    // Création de la carte principale
    const card = document.createElement('div');
    card.className = 'choice-card';

    // Titre de la carte
    const title = document.createElement('p');
    title.className = 'choice-card-title';
    title.textContent = currentCase.name;
    card.appendChild(title);

    for (let i = 0; i < pokemonlist.length; i++) {
        // Conteneur principal de choix de Pokémon
        const pokemonChoice = document.createElement('div');
        pokemonChoice.className = 'pokemon-choice';

        // Conteneur pour les détails du Pokémon
        const pokemonData = document.createElement('div');
        pokemonData.className = 'pokemon-choice-data';

        // Image du Pokémon
        const pokemonImg = document.createElement('img');
        pokemonImg.src = pokemonlist[i].isShiny ? pokedex[pokemonlist[i].pokedexId].sprite_shiny : pokedex[pokemonlist[i].pokedexId].sprite;
        pokemonImg.alt = `Image de ${pokemonlist[i].name}`;
        pokemonImg.className = 'pokemon-choice-img';
        pokemonData.appendChild(pokemonImg);

        // Ajouter l'icône shiny si nécessaire
        if (pokemonlist[i].isShiny) {
            const shinyIcon = document.createElement('img');
            shinyIcon.src = 'sprites/Misc/shiny.png'; // Remplacez par le chemin de votre icône
            shinyIcon.alt = 'Icône Shiny';
            shinyIcon.className = 'shiny-icon';
            pokemonData.appendChild(shinyIcon); // Ajoute l'icône à l'image du Pokémon
        }

        // Conteneur pour les détails supplémentaires du Pokémon
        const pokemonDetails = document.createElement('div');
        pokemonDetails.className = 'pokemon-choice-data-details';

        // Ligne pour le nom et le niveau
        const nameLevelLine = document.createElement('div');
        nameLevelLine.className = 'pokemon-choice-data-details-line';

        const pokemonName = document.createElement('div');
        pokemonName.className = 'pokemon-choice-data-details-name';
        pokemonName.textContent = pokedex[pokemonlist[i].pokedexId].name;
        nameLevelLine.appendChild(pokemonName);

        const pokemonLevel = document.createElement('div');
        pokemonLevel.className = 'pokemon-choice-data-details-level';
        pokemonLevel.textContent = `niv. ${pokemonlist[i].level}`;
        nameLevelLine.appendChild(pokemonLevel);
        pokemonDetails.appendChild(nameLevelLine);

        // Ligne pour la rareté et le type
        const rarityTypeLine = document.createElement('div');
        rarityTypeLine.className = 'pokemon-choice-data-details-line';

        const pokemonRarity = document.createElement('div');
        pokemonRarity.className = 'pokemon-choice-data-details-rarity';
        pokemonRarity.textContent = pokedex[pokemonlist[i].pokedexId].rarity.name;
        pokemonRarity.style.color = pokedex[pokemonlist[i].pokedexId].rarity.color;

        rarityTypeLine.appendChild(pokemonRarity);

        const pokemonType = document.createElement('div');
        pokemonType.className = 'pokemon-choice-data-details-type';
        pokemonType.style.backgroundColor = pokedex[pokemonlist[i].pokedexId].type.color;
        pokemonType.style.color = pokedex[pokemonlist[i].pokedexId].type.textColor;
        const typeText = document.createElement('p');
        typeText.textContent = pokedex[pokemonlist[i].pokedexId].type.name;
        pokemonType.appendChild(typeText);
        rarityTypeLine.appendChild(pokemonType);
        pokemonDetails.appendChild(rarityTypeLine);

        // Conteneur pour le bouton
        const ctaContainer = document.createElement('div');
        ctaContainer.className = 'pokemon-choice-cta-container';

        const chooseButton = document.createElement('button');
        chooseButton.className = 'pokemon-choice-cta';
        chooseButton.textContent = 'Choisir';
        chooseButton.style.color = pokedex[pokemonlist[i].pokedexId].type.textColor;
        chooseButton.style.backgroundColor = pokedex[pokemonlist[i].pokedexId].type.color;
        ctaContainer.appendChild(chooseButton);
        pokemonDetails.appendChild(ctaContainer);

        // Ajout des détails au conteneur de données Pokémon
        pokemonData.appendChild(pokemonDetails);

        // Ajout de la carte de données Pokémon au choix Pokémon
        pokemonChoice.appendChild(pokemonData);

        // Image de rareté
        const rarityImg = document.createElement('img');
        rarityImg.src = pokedex[pokemonlist[i].pokedexId].rarity.background_sprite;
        rarityImg.alt = `Background de rareté`;
        rarityImg.className = 'rarity-background';

        pokemonChoice.appendChild(rarityImg);

        // Ajout du choix Pokémon à la carte
        card.appendChild(pokemonChoice);
    }

    // Retour de la carte complétée
    return card;
}