function generatePokemonDetailPopup(pokemon) {
    // Créer les éléments principaux
    const popupBackgroundContainer = document.createElement('div');
    popupBackgroundContainer.classList.add('popup-background');

    // Créer les éléments principaux
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-your-pokemon-detail');

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content-your-pokemon-detail');

    const titleLine = document.createElement('div');
    titleLine.classList.add('popup-title-line');

    const title = document.createElement('p');
    title.textContent = 'Detail du Pokémon';
    
    const closeButton = document.createElement('img');
    closeButton.src = 'sprites/misc/cross_icon.png';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', () => {
        document.body.style.overflow = '';
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

    popupContent.appendChild(imgPokemon);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);

    // Ajouter le popup à la page
    document.body.appendChild(popupBackgroundContainer);
}