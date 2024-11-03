function updatePokemonDetailPopupIsInTeam(newValue) {
    let isInTeamDiv = document.getElementById('detail-pokemon-in-team-icon');
    let putInTeamButton = document.getElementById('detail-pokemon-button');
    let parentDiv = document.getElementById('detail-pokemon-stats-right');
    
    if (!isInTeamDiv && newValue) {
        const imgInTeamIcon = document.createElement('img');
        imgInTeamIcon.id = 'detail-pokemon-in-team-icon';
        imgInTeamIcon.className = 'detail-pokemon-in-team-icon';
        imgInTeamIcon.src = 'sprites/misc/pokeball_icon.png';
        imgInTeamIcon.alt = 'In team';
        parentDiv.appendChild(imgInTeamIcon);
        if (putInTeamButton)
            putInTeamButton.remove();
    } else if (isInTeamDiv && !newValue) {
        parentDiv.removeChild(isInTeamDiv);
    }
}

function updatePokemonDetailPopupLevel(pokemon) {
    let levelDiv = document.getElementById('detail-pokemon-level');
    let attackDiv = document.getElementById('detail-pokemon-attack');
    let hpDiv = document.getElementById('pokemon-detail-health-number');
    let healthBarFilling = document.getElementById('pokemon-detail-health-bar-filling');

    levelDiv.textContent = 'Niveau ' + pokemon.level;
    attackDiv.textContent = 'Attaque : ' + pokemon.attack;
    hpDiv.textContent = 'PV : ' + pokemon.hp + '/' + getMaxHpOfPokemon(pokemon.pokedexId, pokemon.level);
    healthBarFilling.style.width = getHPbarSize(pokemon);
    healthBarFilling.style.backgroundColor = getHPbarColor(pokemon);
}

function generatePokemonDetailPopupById(id) {
    Object.keys(owned_pokemons).forEach(key => {
        if (owned_pokemons[key].uuid == id) {
            generatePokemonDetailPopup(owned_pokemons[key]);
            return;
        }
    });
}

function generatePokemonDetailPopup(pokemon) {
    // Créer les éléments principaux
    const popupBackgroundContainer = document.createElement('div');
    popupBackgroundContainer.classList.add('popup-background');
    popupBackgroundContainer.id = 'popup-your-pokemon-detail';

    // Créer les éléments principaux
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-your-pokemon-detail');

    const popupContent = document.createElement('div');
    popupContent.classList.add('detail-your-pokemon-detail');

    const titleLine = document.createElement('div');
    titleLine.classList.add('popup-title-line');

    const title = document.createElement('p');
    title.textContent = 'Detail du Pokémon';
    
    const closeButton = document.createElement('img');
    closeButton.src = 'sprites/misc/cross_icon.png';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', () => {
        const updateYourPokemonEvent = new CustomEvent("updateYourPokemonEvent", {});
        document.dispatchEvent(updateYourPokemonEvent);
        popupBackgroundContainer.remove(); // Ferme le popup en supprimant l'élément
    });
    closeButton.classList.add('popup-close-icon');

    // Ajouter le titre et le bouton de fermeture
    titleLine.appendChild(title);
    titleLine.appendChild(closeButton);
    popupContent.appendChild(titleLine);

    const imgPokemon = document.createElement('img');
    imgPokemon.src = pokemon.sprite;
    imgPokemon.classList.add('detail-pokemon-image');
    
    const typeChip = createTypeChipPopupDetail(pokemon);

    // Créer les éléments
    const detailPokemonWrapper = document.createElement('div');
    detailPokemonWrapper.className = 'detail-pokemon-wrapper';

    const detailPokemonStats = document.createElement('div');
    detailPokemonStats.className = 'detail-pokemon-stats';
    
    const detailPokemonStatsLeft = document.createElement('div');
    detailPokemonStatsLeft.className = 'detail-pokemon-stats-left';
    
    const detailPokemonStatsRight = document.createElement('div');
    detailPokemonStatsRight.className = 'detail-pokemon-stats-right';
    detailPokemonStatsRight.id = 'detail-pokemon-stats-right';

    if (pokemon.isShiny) {
        const imgShinyIcon = document.createElement('img');
        imgShinyIcon.className = 'detail-pokemon-shiny-icon';
        imgShinyIcon.src = 'sprites/misc/shiny.png';
        imgShinyIcon.alt = 'Shiny';
        detailPokemonStatsRight.appendChild(imgShinyIcon);
    }

    const pokemonName = document.createElement('div');
    pokemonName.className = 'detail-pokemon-name';
    pokemonName.textContent = pokedex[pokemon.pokedexId].name;

    const pokemonLevel = document.createElement('div');
    pokemonLevel.className = 'detail-pokemon-level';
    pokemonLevel.id = 'detail-pokemon-level';
    pokemonLevel.textContent = 'Niveau ' + pokemon.level;

    const pokemonAttack = document.createElement('div');
    pokemonAttack.className = 'detail-pokemon-attack';
    pokemonAttack.id = 'detail-pokemon-attack';
    pokemonAttack.textContent = 'Attaque : ' + pokemon.attack;
    
    const pokemonRarity = document.createElement('div');
    pokemonRarity.className = 'detail-pokemon-rarity';
    pokemonRarity.textContent = pokedex[pokemon.pokedexId].rarity.name;
    pokemonRarity.style.color = pokedex[pokemon.pokedexId].rarity.color;

    const healthContainer = document.createElement('div');
    healthContainer.className = 'pokemon-detail-health-container';

    const healthTips = document.createElement('p');
    healthTips.className = 'pokemon-detail-health-tips';
    healthTips.textContent = 'Les Pokémons restaurant leurs PV tous les jours';

    const healthNumber = document.createElement('p');
    healthNumber.className = 'pokemon-detail-health-number';
    healthNumber.id = 'pokemon-detail-health-number';
    healthNumber.textContent = 'PV : ' + pokemon.hp + '/' + getMaxHpOfPokemon(pokemon.pokedexId, pokemon.level);

    const healthBar = document.createElement('div');
    healthBar.className = 'pokemon-detail-health-bar';

    const healthBarFilling = document.createElement('div');
    healthBarFilling.className = 'pokemon-detail-health-bar-filling';
    healthBarFilling.id = 'pokemon-detail-health-bar-filling';
    healthBarFilling.style.width = getHPbarSize(pokemon);
    healthBarFilling.style.backgroundColor = getHPbarColor(pokemon);

    // Assembler les éléments
    healthBar.appendChild(healthBarFilling);

    detailPokemonStatsLeft.appendChild(pokemonName);
    detailPokemonStatsLeft.appendChild(pokemonLevel);
    detailPokemonStatsLeft.appendChild(pokemonAttack);
    detailPokemonStatsLeft.appendChild(pokemonRarity);
    detailPokemonStats.appendChild(detailPokemonStatsLeft);
    detailPokemonStats.appendChild(detailPokemonStatsRight);
    
    // Créer et ajouter la section des boutons
    const detailPokemonButtons = document.createElement('div');
    detailPokemonButtons.className = 'detail-pokemon-buttons';

    if (!pokemon.isInTeam) {
        const detailPokemonButtonPutInTeam = document.createElement('button');
        detailPokemonButtonPutInTeam.className = 'detail-pokemon-button';
        detailPokemonButtonPutInTeam.id = 'detail-pokemon-button';
        detailPokemonButtonPutInTeam.textContent = "Mettre dans l'équipe";
        detailPokemonButtonPutInTeam.addEventListener('click', () => {
            if (getInTeamPokemons().length > 2) {
                generatePutInTeamPopup(pokemon);
            } else {
                pokemon.isInTeam = true;
                updateOwnedPokemons();
                updatePokemonDetailPopupIsInTeam(true);
            }
        });
        detailPokemonButtons.appendChild(detailPokemonButtonPutInTeam);
    }

    const detailPokemonButtonLevelUpEvolutions = document.createElement('div');
    detailPokemonButtonLevelUpEvolutions.className = "detail-pokemon-button-same-line";

    if (pokedex[pokemon.pokedexId].evolving_pokemon && pokedex[pokemon.pokedexId].evolving_pokemon.length > 0) {
        const detailPokemonButtonEvolve = document.createElement('button');
        detailPokemonButtonEvolve.className = 'detail-pokemon-button';
        detailPokemonButtonEvolve.textContent = "Evolutions";
        detailPokemonButtonEvolve.addEventListener('click', () => {
            generateEvolutionPopup(pokemon, popupBackgroundContainer);
        });
        detailPokemonButtonLevelUpEvolutions.appendChild(detailPokemonButtonEvolve);
    }

    const detailPokemonButtonLevelUp = document.createElement('button');
    detailPokemonButtonLevelUp.className = 'detail-pokemon-button';
    detailPokemonButtonLevelUp.textContent = "Level up";
    detailPokemonButtonLevelUp.addEventListener('click', () => {
        generateConfirmLevelUpPopup(pokemon);
    });
    detailPokemonButtonLevelUpEvolutions.appendChild(detailPokemonButtonLevelUp);

    detailPokemonButtons.appendChild(detailPokemonButtonLevelUpEvolutions);

    if (owned_pokemons.length > 1) {
        const detailPokemonButtonDiscardPokemon = document.createElement('button');
        detailPokemonButtonDiscardPokemon.className = 'detail-pokemon-button-warning';
        detailPokemonButtonDiscardPokemon.textContent = "Relacher " + pokedex[pokemon.pokedexId].name;
        detailPokemonButtonDiscardPokemon.addEventListener('click', () => {
            generateConfirmDiscardPopup(pokemon);
        });
        detailPokemonButtons.appendChild(detailPokemonButtonDiscardPokemon);
    }

    // Ajouter le popup à la page
    // detailPokemonStats.appendChild(detailPokemonWrapperWrapper);
    detailPokemonWrapper.appendChild(imgPokemon);
    detailPokemonWrapper.appendChild(typeChip);
    detailPokemonWrapper.appendChild(detailPokemonStats);
    healthContainer.appendChild(healthBar);
    healthContainer.appendChild(healthTips);
    healthContainer.appendChild(healthNumber);
    detailPokemonWrapper.appendChild(healthContainer);
    detailPokemonWrapper.appendChild(detailPokemonButtons);
    popupContent.appendChild(detailPokemonWrapper);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);
    document.body.appendChild(popupBackgroundContainer);
    
    if (pokemon.isInTeam) {
        updatePokemonDetailPopupIsInTeam(true);
    }
}