function generatePokemonBasedOnPokedexEntry(pokedexEntry, currentCase) {
    let shinyChance = 35;
    if (trainer_card.name == "Lucy" || trainer_card.name == "Mallow" || trainer_card.name == "Lulu" || trainer_card.name == "Mallow_OwO") {
        shinyChance -= 5;
    }

    let temp_isShiny = currentCase.shiny_lock ? false : (Math.floor(Math.random() * shinyChance) + 1) === 1;
    let temp_level = Math.round(currentCase.base_level + (Math.random() * (2 * currentCase.level_randomness) - currentCase.level_randomness));
    let temp_maxHp = getMaxHpOfPokemon(pokedexEntry, temp_level);
    let temp_attack = getAttackOfPokemon(pokedexEntry, temp_level);
    let temp_gender = Math.floor(Math.random() * 2) == 0 ? "male" : "female";
    let temp_sprite = GetSpriteByPokemon(pokedexEntry, temp_isShiny);

    let newPokemon = {
        uuid: generateUUID(),
        is_enemy: false,
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
    };

    return newPokemon;
}

function getRandomPokemons(currentCase, count) {
    if (currentCase.generated_pokemons.length === 3)
        return;

    let pokemonList = currentCase.possible_pokemons;

    // Creating weighted list
    let weightedPokemons = [];

    if (pokemonList != -1 && Object.keys(pokemonList).length >= 3) {
        for (const [pokemonKey, weight] of Object.entries(pokemonList)) {
            for (let i = 0; i < weight; i++) {
                weightedPokemons.push(pokemonKey);
            }
        }
    } else {
        // if the list insn't long enough or just has a value of -1, it's considered a test  and we get a random pokemon of the pokedex
        for (const [pokemonKey, content] of Object.entries(pokedex)) {
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

    for (let i = 0; i < selectedPokemons.length; i++) {
        currentCase.generated_pokemons.push(generatePokemonBasedOnPokedexEntry(selectedPokemons[i], currentCase));
        pokemonHasBeenSeen(selectedPokemons[i]);
    }

    updateMapCases();
}

function chosePokemon(pokemon, currentCase) {
    owned_pokemons.push(pokemon);
    currentCase.has_been_used = true;
    pokemonHasBeenCaptured(pokemon.pokedexId);
    updateOwnedPokemons();
    forceInTeamIfNeeded();
    updateMapCases();
    updateDuelButton();

    const divsToDelete = document.querySelectorAll('div.route-display');
    divsToDelete.forEach(function(div) {
        div.remove();
    });
    GenerateRouteListDisplay();
}

function generatePokemonChoiceDisplay(currentCase) {
    document.body.style.overflow = 'hidden'; // Désactive le scroll
    getRandomPokemons(currentCase, 3);

    // Création de la carte principale
    const card = document.createElement('div');
    card.className = 'choice-card';

    // Titre de la carte
    const title = document.createElement('p');
    title.className = 'choice-card-title';
    title.textContent = currentCase.name;
    // card.appendChild(title);

    for (let i = 0; i < currentCase.generated_pokemons.length; i++) {
        // Conteneur principal de choix de Pokémon
        const pokemonChoice = document.createElement('div');
        pokemonChoice.className = 'pokemon-choice';

        // Conteneur pour les détails du Pokémon
        const pokemonData = document.createElement('div');
        pokemonData.className = 'pokemon-choice-data';

        // Image du Pokémon
        const pokemonImg = document.createElement('img');
        pokemonImg.src = currentCase.generated_pokemons[i].sprite;
        pokemonImg.alt = `Image de ${currentCase.generated_pokemons[i].name}`;
        pokemonImg.className = 'pokemon-choice-img';
        pokemonData.appendChild(pokemonImg);

        // Ajouter l'icône shiny si nécessaire
        if (currentCase.generated_pokemons[i].isShiny) {
            const shinyIcon = document.createElement('img');
            shinyIcon.src = 'sprites/misc/shiny.png';
            shinyIcon.alt = 'Icône Shiny';
            shinyIcon.className = 'shiny-icon';
            pokemonData.appendChild(shinyIcon);
        }

        // Conteneur pour les détails supplémentaires du Pokémon
        const pokemonDetails = document.createElement('div');
        pokemonDetails.className = 'pokemon-choice-data-details';

        // Ligne pour le nom et le niveau
        const nameLevelLine = document.createElement('div');
        nameLevelLine.className = 'pokemon-choice-data-details-line';

        const pokemonName = document.createElement('div');
        pokemonName.className = 'pokemon-choice-data-details-name';
        pokemonName.textContent = pokedex[currentCase.generated_pokemons[i].pokedexId].name;
        nameLevelLine.appendChild(pokemonName);

        const pokemonLevel = document.createElement('div');
        pokemonLevel.className = 'pokemon-choice-data-details-level';
        pokemonLevel.textContent = `niv. ${currentCase.generated_pokemons[i].level}`;
        nameLevelLine.appendChild(pokemonLevel);
        pokemonDetails.appendChild(nameLevelLine);

        // Ligne pour la rareté et le type
        const rarityTypeLine = document.createElement('div');
        rarityTypeLine.className = 'pokemon-choice-data-details-line';

        const pokemonRarity = document.createElement('div');
        pokemonRarity.className = 'pokemon-choice-data-details-rarity';
        pokemonRarity.textContent = pokedex[currentCase.generated_pokemons[i].pokedexId].rarity.name;
        pokemonRarity.style.color = pokedex[currentCase.generated_pokemons[i].pokedexId].rarity.color;

        rarityTypeLine.appendChild(pokemonRarity);

        const pokemonType = document.createElement('div');
        pokemonType.className = 'pokemon-choice-data-details-type';
        pokemonType.style.backgroundColor = pokedex[currentCase.generated_pokemons[i].pokedexId].type.color;
        pokemonType.style.color = pokedex[currentCase.generated_pokemons[i].pokedexId].type.textColor;
        const typeText = document.createElement('p');
        typeText.textContent = pokedex[currentCase.generated_pokemons[i].pokedexId].type.name;
        pokemonType.appendChild(typeText);
        rarityTypeLine.appendChild(pokemonType);
        pokemonDetails.appendChild(rarityTypeLine);

        // Conteneur pour le bouton
        const ctaContainer = document.createElement('div');
        ctaContainer.className = 'pokemon-choice-cta-container';

        const chooseButton = document.createElement('button');
        chooseButton.className = 'pokemon-choice-cta';
        chooseButton.textContent = 'Choisir';
        chooseButton.style.color = pokedex[currentCase.generated_pokemons[i].pokedexId].type.textColor;
        chooseButton.style.backgroundColor = pokedex[currentCase.generated_pokemons[i].pokedexId].type.color;
        chooseButton.addEventListener('click', function() {
            document.body.style.overflow = '';
            const divsToDelete = document.querySelectorAll('div.choice-card');
            divsToDelete.forEach(function(div) {
                div.remove();
            });
            chosePokemon(currentCase.generated_pokemons[i], currentCase);
        });   
        
        ctaContainer.appendChild(chooseButton);
        pokemonDetails.appendChild(ctaContainer);

        // Ajout des détails au conteneur de données Pokémon
        pokemonData.appendChild(pokemonDetails);

        // Ajout de la carte de données Pokémon au choix Pokémon
        pokemonChoice.appendChild(pokemonData);

        // Image de rareté
        const rarityImg = document.createElement('img');
        rarityImg.src = pokedex[currentCase.generated_pokemons[i].pokedexId].rarity.sprite;
        rarityImg.alt = `Background de rareté`;
        rarityImg.className = 'rarity-background';

        pokemonChoice.appendChild(rarityImg); 

        // Ajout du choix Pokémon à la carte
        card.appendChild(pokemonChoice);
    }

    let container = document.getElementById('body');
    container.appendChild(card);
}