function fillPokedexsPopup(pokemonList) {
    Object.entries(Pokedexs).forEach(([key, region]) => {

        // Créer un Pokémon unique à afficher
        const singlePokedex = document.createElement('div');
        singlePokedex.classList.add('popup-content-single-pokemon');

        // Partie gauche avec l'image et le type
        const leftSide = document.createElement('div');
        leftSide.classList.add('popup-content-left-side');

        const pokedexImg = document.createElement('img');
        pokedexImg.src = 'sprites/pokedexs/pokedex' + region.id + '.png';
        pokedexImg.alt = "pokedex icon";
        pokedexImg.classList.add('popup-content-pokedexs-image');

        const regionChip = document.createElement('div');
        regionChip.classList.add('popup-content-type-chip');
        regionChip.style.backgroundColor = region.color;

        const regionChipText = document.createElement('p');
        regionChipText.textContent = 'GEN ' + region.gen;
        regionChipText.classList.add('popup-content-gen-chip-text');
        regionChip.appendChild(regionChipText);

        leftSide.appendChild(pokedexImg);
        leftSide.appendChild(regionChip);

        // Partie droite avec les infos du Pokémon
        const rightSide = document.createElement('div');
        rightSide.classList.add('popup-content-right-side');

        const regionName = document.createElement('div');
        regionName.textContent = region.name + ' (' + getTotalPokemonNmbrForRegion(key) + ')';
        regionName.classList.add('popup-content-pokemon-name');

        const pokemonCaptured = document.createElement('div');
        pokemonCaptured.textContent = getCapturedPokemonNmbrForRegion(key) + " capturés";
        pokemonCaptured.classList.add('popup-content-pokemon-level');

        const pokemonSeen = document.createElement('div');
        pokemonSeen.textContent = getSeenPokemonNmbrForRegion(key) + " vus";
        pokemonSeen.classList.add('popup-content-pokemon-attack');

        rightSide.appendChild(regionName);
        rightSide.appendChild(pokemonCaptured);
        rightSide.appendChild(pokemonSeen);

        // Assemble le tout
        singlePokedex.appendChild(leftSide);
        singlePokedex.appendChild(rightSide);

        singlePokedex.addEventListener('click', () => {
            generatePokedexViewPopup(key);
        });

        pokemonList.appendChild(singlePokedex);
    });

}

function generatePokedexPopup() {
    document.body.style.overflow = 'hidden'; // Désactive le scroll

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
    title.textContent = 'Pokédex';

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
    pokemonList.classList.add('popup-content-pokedex-list');

    fillPokedexsPopup(pokemonList);
    addListenerYourPokemonsPopup(pokemonList);

    pokemonListWrapper.appendChild(pokemonList);
    popupContent.appendChild(titleLine);
    popupContent.appendChild(pokemonListWrapper);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);

    // Ajouter le popup à la page
    document.body.appendChild(popupBackgroundContainer);
}