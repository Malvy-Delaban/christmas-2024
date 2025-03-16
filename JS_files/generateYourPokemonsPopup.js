function addListenerYourPokemonsPopup(pokemonList) {
    document.addEventListener("updateYourPokemonEvent", (event) => {
        pokemonList.innerHTML = "";
        owned_pokemons.sort((a, b) => b.isInTeam - a.isInTeam);
        fillYourPokemonsPopup(pokemonList);
    });
}

function fillYourPokemonsPopup(pokemonList) {
    if (eggs != null) {
        const eggLine = document.createElement('div');
        eggLine.classList.add('popup-content-egg-line');

        const eggLineLeft = document.createElement('img');
        eggLineLeft.src = "sprites/pokemons/egg.png";
        eggLineLeft.style.filter = eggs.shiny.filter + " " + eggs.type.colorFilter;
        eggLineLeft.classList.add('popup-content-egg-line-left');

        const eggLineRight = document.createElement('div');
        if (new Date(eggs.endDate) < new Date()) {
            eggLineRight.textContent = "Cliquez pour faire éclore !";
            eggLine.addEventListener('click', () => {
                let pokemon = atchPokemonEgg();
                generateAtchEggPopup(pokemon);
                eggLine.remove();
            });
        } else {
            eggLineRight.textContent = formatDateEgg(eggs.endDate);
        }
        eggLineRight.classList.add('popup-content-egg-line-right');

        eggLine.appendChild(eggLineLeft);
        eggLine.appendChild(eggLineRight);
        pokemonList.appendChild(eggLine);
    }

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

function fillYourPokemonsPopupByType(pokemonList) {
    let temp_sorted = owned_pokemons;
    temp_sorted = temp_sorted.sort(function (a, b) {
        return pokedex[a.pokedexId].type.name.localeCompare(pokedex[b.pokedexId].type.name);
    });

    for (let i = 0; i < Object.keys(temp_sorted).length; i++) {
        // Créer un Pokémon unique à afficher
        const singlePokemon = document.createElement('div');
        singlePokemon.classList.add('popup-content-single-pokemon');

        // Partie gauche avec l'image et le type
        const leftSide = document.createElement('div');
        leftSide.classList.add('popup-content-left-side-by-type');

        leftSide.addEventListener('click', () => {
            generatePokemonDetailPopup(owned_pokemons[i]);
        });

        const typeChip = createTypeChipPopupYourPokemons(pokedex[owned_pokemons[i].pokedexId]);

        const rarityBackground = document.createElement('img');
        rarityBackground.src = pokedex[temp_sorted[i].pokedexId].rarity.n_sprite ? pokedex[temp_sorted[i].pokedexId].rarity.n_sprite : pokedex[temp_sorted[i].pokedexId].rarity.sprite;
        rarityBackground.alt = 'rarity background';
        rarityBackground.classList.add('popup-content-rarity-background');

        const pokemonImage = document.createElement('img');
        pokemonImage.src = temp_sorted[i].sprite;
        pokemonImage.alt = temp_sorted[i].name;
        pokemonImage.classList.add('popup-content-pokemon-image');

        leftSide.appendChild(rarityBackground);
        leftSide.appendChild(pokemonImage);
        leftSide.appendChild(typeChip);
        pokemonList.appendChild(leftSide);
    }
}

function fillYourPokemonsPopupByPokedex(pokemonList) {
    let temp_sorted = owned_pokemons;
    temp_sorted = temp_sorted.sort(function (a, b) {
        return pokedex[a.pokedexId].id - pokedex[b.pokedexId].id;
    });

    for (let i = 0; i < Object.keys(temp_sorted).length; i++) {
        // Créer un Pokémon unique à afficher
        const singlePokemon = document.createElement('div');
        singlePokemon.classList.add('popup-content-single-pokemon');

        // Partie gauche avec l'image et le type
        const leftSide = document.createElement('div');
        leftSide.classList.add('popup-content-left-side-by-type');

        leftSide.addEventListener('click', () => {
            generatePokemonDetailPopup(owned_pokemons[i]);
        });

        const typeChip = createTypeChipPopupYourPokemons(pokedex[owned_pokemons[i].pokedexId]);

        const rarityBackground = document.createElement('img');
        rarityBackground.src = pokedex[temp_sorted[i].pokedexId].rarity.n_sprite ? pokedex[temp_sorted[i].pokedexId].rarity.n_sprite : pokedex[temp_sorted[i].pokedexId].rarity.sprite;
        rarityBackground.alt = 'rarity background';
        rarityBackground.classList.add('popup-content-rarity-background');

        const pokemonImage = document.createElement('img');
        pokemonImage.src = temp_sorted[i].sprite;
        pokemonImage.alt = temp_sorted[i].name;
        pokemonImage.classList.add('popup-content-pokemon-image');

        leftSide.appendChild(rarityBackground);
        leftSide.appendChild(pokemonImage);
        leftSide.appendChild(typeChip);
        pokemonList.appendChild(leftSide);
    }
}

function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function DisplayByType(pokemonListWrapper) {
    removeElementsByClass("popup-content-your-pokemons-list");
    removeElementsByClass("popup-content-your-pokemons-list-by-type");

    const pokemonList = document.createElement('div');
    pokemonList.classList.add('popup-content-your-pokemons-list-by-type');
    fillYourPokemonsPopupByType(pokemonList);
    pokemonListWrapper.appendChild(pokemonList);
}

function DisplayByPokedex(pokemonListWrapper) {
    removeElementsByClass("popup-content-your-pokemons-list");
    removeElementsByClass("popup-content-your-pokemons-list-by-type");

    const pokemonList = document.createElement('div');
    pokemonList.classList.add('popup-content-your-pokemons-list-by-type');
    fillYourPokemonsPopupByPokedex(pokemonList);
    pokemonListWrapper.appendChild(pokemonList);
}

function DisplayBaseDisplay(pokemonListWrapper) {
    owned_pokemons.sort((a, b) => {
        if (b.isInTeam !== a.isInTeam)
            return b.isInTeam - a.isInTeam;
        return b.level - a.level;
    });
    removeElementsByClass("popup-content-your-pokemons-list");
    removeElementsByClass("popup-content-your-pokemons-list-by-type");
    const pokemonList = document.createElement('div');
    pokemonList.classList.add('popup-content-your-pokemons-list');

    fillYourPokemonsPopup(pokemonList);
    addListenerYourPokemonsPopup(pokemonList);

    pokemonListWrapper.appendChild(pokemonList);
}

function generateYourPokemonsPopup() {
    let currentDisplayState = 0;
    document.body.style.overflow = 'hidden'; // Désactive le scroll
    owned_pokemons.sort((a, b) => b.isInTeam - a.isInTeam);

    // Créer les éléments principaux
    const popupBackgroundContainer = document.createElement('div');
    popupBackgroundContainer.classList.add('popup-background');
    popupBackgroundContainer.id = 'popup-background-inventory';

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

    const displaySwitch = document.createElement('div');
    displaySwitch.classList.add('popup-content-display-switch');

    // Wrapper de la liste des Pokémon
    const pokemonListWrapper = document.createElement('div');
    pokemonListWrapper.classList.add('popup-content-wrapper');

    const baseSwitch = document.createElement('div');
    baseSwitch.classList.add('popup-content-display-switch-button', 'popup-content-display-switch-button-selected');
    baseSwitch.textContent = "Défaut";
    displaySwitch.appendChild(baseSwitch);
    baseSwitch.addEventListener('click', () => {
        if (currentDisplayState == 0)
            return;
        currentDisplayState = 0;
        byType.classList.remove("popup-content-display-switch-button-selected");
        ByPokedex.classList.remove("popup-content-display-switch-button-selected");
        baseSwitch.classList.add("popup-content-display-switch-button-selected");
        DisplayBaseDisplay(pokemonListWrapper);
    });

    const byType = document.createElement('div');
    byType.classList.add('popup-content-display-switch-button');
    byType.textContent = "Type";
    displaySwitch.appendChild(byType);
    byType.addEventListener('click', () => {
        if (currentDisplayState == 1)
            return;
        currentDisplayState = 1;
        baseSwitch.classList.remove("popup-content-display-switch-button-selected");
        ByPokedex.classList.remove("popup-content-display-switch-button-selected");
        byType.classList.add("popup-content-display-switch-button-selected");
        DisplayByType(pokemonListWrapper);
    });

    const ByPokedex = document.createElement('div');
    ByPokedex.classList.add('popup-content-display-switch-button');
    ByPokedex.textContent = "Num.";
    displaySwitch.appendChild(ByPokedex);
    ByPokedex.addEventListener('click', () => {
        if (currentDisplayState == 2)
            return;
        currentDisplayState = 2;
        byType.classList.remove("popup-content-display-switch-button-selected");
        baseSwitch.classList.remove("popup-content-display-switch-button-selected");
        ByPokedex.classList.add("popup-content-display-switch-button-selected");
        DisplayByPokedex(pokemonListWrapper);
    });

    titleLine.appendChild(pokemonListWrapper);

    // Contenu de la liste des Pokémon

    DisplayBaseDisplay(pokemonListWrapper);

    popupContent.appendChild(titleLine);
    popupContent.appendChild(displaySwitch);
    popupContent.appendChild(pokemonListWrapper);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);

    // Ajouter le popup à la page
    document.body.appendChild(popupBackgroundContainer);
}