function generateYourPokemonsPopup() {
    let pokemon = {
        sprite: "",
        name: "",
        type: "",
        rarityBackground: "",
        attack: "",
        level: "",
        healthBar: 100,
    }
    document.body.style.overflow = 'hidden'; // Désactive le scroll
    
    // Créer les éléments principaux
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-your-pokemons');

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content-your-pokemons');

    const titleLine = document.createElement('div');
    titleLine.classList.add('popup-title-line');

    const title = document.createElement('p');
    title.textContent = 'Mes Pokémons';
    
    const closeButton = document.createElement('p');
    closeButton.textContent = 'X';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', () => {
        document.body.style.overflow = '';
        popupContainer.remove(); // Ferme le popup en supprimant l'élément
    });

    // Ajouter le titre et le bouton de fermeture
    titleLine.appendChild(title);
    titleLine.appendChild(closeButton);

    // Contenu de la liste des Pokémon
    const pokemonList = document.createElement('div');
    pokemonList.classList.add('popup-content-your-pokemons-list');

    // Créer un Pokémon unique à afficher
    const singlePokemon = document.createElement('div');
    singlePokemon.classList.add('popup-content-single-pokemon');

    // Partie gauche avec l'image et le type
    const leftSide = document.createElement('div');
    leftSide.classList.add('popup-content-left-side');

    const rarityBackground = document.createElement('img');
    rarityBackground.src = pokemon.rarityBackground;
    rarityBackground.alt = 'rarity background';
    rarityBackground.classList.add('popup-content-rarity-background');

    const pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.sprite;
    pokemonImage.alt = pokemon.name;
    pokemonImage.classList.add('popup-content-pokemon-image');

    const typeChip = document.createElement('p');
    typeChip.textContent = pokemon.type;
    typeChip.classList.add('popup-content-type-chip');

    leftSide.appendChild(rarityBackground);
    leftSide.appendChild(pokemonImage);
    leftSide.appendChild(typeChip);

    // Partie droite avec les infos du Pokémon
    const rightSide = document.createElement('div');
    rightSide.classList.add('popup-content-right-side');

    const pokemonName = document.createElement('div');
    pokemonName.textContent = pokemon.name;
    pokemonName.classList.add('popup-content-pokemon-name');

    const pokemonLevel = document.createElement('div');
    pokemonLevel.textContent = `Niveau ${pokemon.level}`;
    pokemonLevel.classList.add('popup-content-pokemon-level');

    const pokemonAttack = document.createElement('div');
    pokemonAttack.textContent = `Attaque : ${pokemon.attack}`;
    pokemonAttack.classList.add('popup-content-pokemon-attack');

    const healthBar = document.createElement('div');
    healthBar.classList.add('health-bar');

    const healthBarFilling = document.createElement('div');
    healthBarFilling.classList.add('health-bar-filling');
    healthBarFilling.style.width = `${pokemon.health}%`; // Par exemple, la santé est en pourcentage

    rightSide.appendChild(pokemonName);
    rightSide.appendChild(pokemonLevel);
    rightSide.appendChild(pokemonAttack);
    rightSide.appendChild(healthBar);
    healthBar.appendChild(healthBarFilling);

    // Icônes de statut du Pokémon
    const pokemonIcons = document.createElement('div');
    pokemonIcons.classList.add('popup-content-pokemon-icons');

    const shinyIcon = document.createElement('img');
    shinyIcon.src = pokemon.shinyIcon;
    shinyIcon.alt = 'Shiny';
    shinyIcon.classList.add('popup-content-shiny-icon');

    const inTeamIcon = document.createElement('img');
    inTeamIcon.src = pokemon.inTeamIcon;
    inTeamIcon.alt = 'In team';
    inTeamIcon.classList.add('popup-content-in-team-icon');

    pokemonIcons.appendChild(shinyIcon);
    pokemonIcons.appendChild(inTeamIcon);

    // Assemble le tout
    singlePokemon.appendChild(leftSide);
    singlePokemon.appendChild(rightSide);
    singlePokemon.appendChild(pokemonIcons);

    pokemonList.appendChild(singlePokemon);
    popupContent.appendChild(titleLine);
    popupContent.appendChild(pokemonList);
    popupContainer.appendChild(popupContent);

    // Ajouter le popup à la page
    document.body.appendChild(popupContainer);
}