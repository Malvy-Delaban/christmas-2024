function addListenerYourPokemonsPopup(pokemonList) {
    document.addEventListener("updateYourPokemonEvent", (event) => {
        pokemonList.innerHTML = "";
        owned_pokemons.sort((a, b) => b.isInTeam - a.isInTeam);
        fillYourPokemonsPopup(pokemonList);
    });
}

function fillYourPokemonsPopup(pokemonList) {
    for (let i = 0; i < Object.keys(owned_pokemons).length; i++) {

        // Créer un Pokémon unique à afficher
        const singlePokemon = document.createElement('div');
        singlePokemon.classList.add('popup-content-single-pokemon');

        // Partie gauche avec l'image et le type
        const leftSide = document.createElement('div');
        leftSide.classList.add('popup-content-left-side');

        const rarityBackground = document.createElement('img');
        rarityBackground.src = pokedex[owned_pokemons[i].pokedexId].rarity.n_sprite ? pokedex[owned_pokemons[i].pokedexId].rarity.n_sprite : pokedex[owned_pokemons[i].pokedexId].rarity.sprite;
        rarityBackground.alt = 'rarity background';
        rarityBackground.classList.add('popup-content-rarity-background');

        const pokemonImage = document.createElement('img');
        pokemonImage.src = owned_pokemons[i].sprite;
        pokemonImage.alt = owned_pokemons[i].name;
        pokemonImage.classList.add('popup-content-pokemon-image');

        const typeChip = createTypeChipPopupYourPokemons(pokedex[owned_pokemons[i].pokedexId]);

        leftSide.appendChild(rarityBackground);
        leftSide.appendChild(pokemonImage);
        leftSide.appendChild(typeChip);

        // Partie droite avec les infos du Pokémon
        const rightSide = document.createElement('div');
        rightSide.classList.add('popup-content-right-side');

        const pokemonName = document.createElement('div');
        pokemonName.textContent = pokedex[owned_pokemons[i].pokedexId].name;
        pokemonName.classList.add('popup-content-pokemon-name');

        const pokemonLevel = document.createElement('div');
        pokemonLevel.textContent = `Niveau ${owned_pokemons[i].level}`;
        pokemonLevel.classList.add('popup-content-pokemon-level');

        const pokemonAttack = document.createElement('div');
        pokemonAttack.textContent = `Attaque : ${owned_pokemons[i].attack}`;
        pokemonAttack.classList.add('popup-content-pokemon-attack');

        const healthBar = document.createElement('div');
        healthBar.classList.add('your-pokemons-health-bar');

        const healthBarFilling = document.createElement('div');
        healthBarFilling.classList.add('your-pokemons-health-bar-filling');
        healthBarFilling.style.width = getHPbarSize(owned_pokemons[i]);
        healthBarFilling.style.backgroundColor = getHPbarColor(owned_pokemons[i]);

        rightSide.appendChild(pokemonName);
        rightSide.appendChild(pokemonLevel);
        rightSide.appendChild(pokemonAttack);
        rightSide.appendChild(healthBar);
        healthBar.appendChild(healthBarFilling);

        // Icônes de statut du Pokémon
        const pokemonIcons = document.createElement('div');
        pokemonIcons.classList.add('popup-content-pokemon-icons');

        if (owned_pokemons[i].isInTeam) {
            const inTeamIcon = document.createElement('img');
            inTeamIcon.src = "sprites/misc/pokeball_icon.png";
            inTeamIcon.alt = 'In team';
            inTeamIcon.classList.add('popup-content-in-team-icon');

            pokemonIcons.appendChild(inTeamIcon);
        }

        if (owned_pokemons[i].isShiny) {
            const shinyIcon = document.createElement('img');
            shinyIcon.src = "sprites/misc/shiny.png";
            shinyIcon.alt = 'Shiny';
            shinyIcon.classList.add('popup-content-shiny-icon');

            pokemonIcons.appendChild(shinyIcon);
        }

        // Assemble le tout
        singlePokemon.appendChild(leftSide);
        singlePokemon.appendChild(rightSide);
        singlePokemon.appendChild(pokemonIcons);

        singlePokemon.addEventListener('click', () => {
            generatePokemonDetailPopup(owned_pokemons[i]);
        });

        pokemonList.appendChild(singlePokemon);
    }
}

function generateYourPokemonsPopup() {
    document.body.style.overflow = 'hidden'; // Désactive le scroll
    owned_pokemons.sort((a, b) => b.isInTeam - a.isInTeam);
    
    // Créer les éléments principaux
    const popupBackgroundContainer = document.createElement('div');
    popupBackgroundContainer.classList.add('popup-background');

    // Créer les éléments principaux
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-your-pokemons');

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content-your-pokemons');

    const titleLine = document.createElement('div');
    titleLine.classList.add('popup-title-line');

    const title = document.createElement('p');
    title.textContent = 'Mes Pokémons (' + Object.keys(owned_pokemons).length + ')';
    
    const closeButton = document.createElement('img');
    closeButton.src = 'sprites/misc/cross_icon.png';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', () => {
        document.body.style.overflow = '';
        checkInTeamNumber();
        popupBackgroundContainer.remove(); // Ferme le popup en supprimant l'élément
    });
    closeButton.classList.add('popup-close-icon');

    // Ajouter le titre et le bouton de fermeture
    titleLine.appendChild(title);
    titleLine.appendChild(closeButton);

    // Wrapper de la liste des Pokémon
    const pokemonListWrapper = document.createElement('div');
    pokemonListWrapper.classList.add('popup-content-wrapper');
    titleLine.appendChild(pokemonListWrapper);

    // Contenu de la liste des Pokémon
    const pokemonList = document.createElement('div');
    pokemonList.classList.add('popup-content-your-pokemons-list');

    fillYourPokemonsPopup(pokemonList);
    addListenerYourPokemonsPopup(pokemonList);

    pokemonListWrapper.appendChild(pokemonList);
    popupContent.appendChild(titleLine);
    popupContent.appendChild(pokemonListWrapper);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);

    // Ajouter le popup à la page
    document.body.appendChild(popupBackgroundContainer);
}