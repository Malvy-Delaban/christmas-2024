function generateAtchEggPopup(pokemon) {
    // Créer les éléments principaux
    const popupBackgroundContainer = document.createElement('div');
    popupBackgroundContainer.classList.add('popup-background');

    // Créer les éléments principaux
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-confirm-buying');

    const popupContent = document.createElement('div');
    popupContent.classList.add('detail-confirm-buying');

    const title = document.createElement('p');
    title.classList.add('popup-confirm-buying-title');
    title.textContent = "Votre oeuf a éclos en " + pokedex[pokemon.pokedexId].name;

    const pokemonSprite = document.createElement('img');
    pokemonSprite.classList.add('popup-atch-egg-sprite');
    pokemonSprite.src = pokemon.sprite;

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('popup-confirm-buying-buttons-container');

    const confirmButtonContainer = document.createElement('div');
    confirmButtonContainer.classList.add('popup-confirm-buying-button');
    confirmButtonContainer.style.cursor = 'pointer';

    const confirmButtonTextYes = document.createElement('div');
    confirmButtonTextYes.classList.add('popup-content-item-price-text-with-margin');
    confirmButtonTextYes.textContent = "Super !";

    confirmButtonContainer.addEventListener('click', () => {
        popupBackgroundContainer.remove();
        document.getElementById("popup-background-inventory").remove();
    });

    confirmButtonContainer.appendChild(confirmButtonTextYes);
    buttonsContainer.appendChild(confirmButtonContainer);
    popupContent.appendChild(title);
    popupContent.appendChild(pokemonSprite);
    popupContent.appendChild(buttonsContainer);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);
    document.body.appendChild(popupBackgroundContainer);
}