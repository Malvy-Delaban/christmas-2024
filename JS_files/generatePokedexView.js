function fillPokedexViewPopup(pokemonList, regionKey) {
    const pokemonsOfRegion = getPokemonsForRegion(regionKey);

    Object.entries(pokemonsOfRegion).forEach(([key, pokemon]) => {

        // Créer un Pokémon unique à afficher
        const singlePokemon = document.createElement('div');
        singlePokemon.classList.add('popup-content-single-pokemon-in-pokedex');

        // Partie gauche avec l'image et le type
        const pokeContainer = document.createElement('div');
        pokeContainer.classList.add('popup-content-pokedex-entry');

        const pokedexImg = document.createElement('img');
        pokedexImg.src = pokemon.has_been_seen ? GetThumbnailSpriteByPokemon(key, false) : "sprites/misc/placeholder-poke.png";
        pokedexImg.loading = "lazy";
        pokedexImg.alt = "pokedex icon";
        if (pokemon.has_been_seen && !pokemon.has_been_captured)
            pokedexImg.style.filter = 'brightness(0) contrast(0)';
        pokedexImg.classList.add(pokemon.has_been_seen ? 'popup-content-pokedexs-image' : 'popup-content-pokedexs-image-placeholder');

        pokeContainer.appendChild(pokedexImg);

        singlePokemon.appendChild(pokeContainer);
        pokemonList.appendChild(singlePokemon);
    });
}

function generatePokedexViewPopup(regionKey) {
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
    title.textContent = Pokedexs[regionKey].name;

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

    fillPokedexViewPopup(pokemonList, regionKey);
    addListenerYourPokemonsPopup(pokemonList);

    pokemonListWrapper.appendChild(pokemonList);
    popupContent.appendChild(titleLine);
    popupContent.appendChild(pokemonListWrapper);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);

    // Ajouter le popup à la page
    document.body.appendChild(popupBackgroundContainer);
}