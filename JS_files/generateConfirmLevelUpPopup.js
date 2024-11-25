function generateConfirmLevelUpPopup(pokemon) {
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
    title.textContent = "Êtes-vous sûr(e) de vouloir monter en niveau " + pokedex[pokemon.pokedexId].name +" ?";

    const subtitleLine = document.createElement('div');
    subtitleLine.classList.add('popup-subtitle-line');

    const subtitleText = document.createElement('p');
    subtitleText.textContent = "Vous avez actuellement " + currentQuantityInInventory(Items.ORAN_BERRY);
    subtitleText.classList.add('popup-subtitle-text');
    subtitleText.id = 'popup-subtitle-text-berry-count';

    const subtitleImg = document.createElement('img');
    subtitleImg.src = './sprites/misc/oran_icon.png';
    subtitleImg.alt = "oran berry img";
    subtitleImg.classList.add('popup-subtitle-image');

    subtitleLine.appendChild(subtitleText);
    subtitleLine.appendChild(subtitleImg);

    const itemImg = document.createElement('img');
    itemImg.src = "";
    itemImg.classList.add('detail-confirm-buying-img');

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('popup-confirm-buying-buttons-container');

    const confirmButtonContainer = document.createElement('div');
    confirmButtonContainer.classList.add('popup-confirm-buying-button');
    confirmButtonContainer.style.cursor = 'pointer';
    
    const confirmButtonTextYes = document.createElement('div');
    confirmButtonTextYes.classList.add('popup-content-item-price-text-with-margin');
    confirmButtonTextYes.textContent = "Oui";

    const itemPriceImg = document.createElement('img');
    itemPriceImg.src = './sprites/misc/oran_icon.png';
    itemPriceImg.alt = "oran berry img";
    itemPriceImg.classList.add('popup-content-item-price-img');
    
    const itemPrice = document.createElement('div');
    itemPrice.classList.add('popup-content-item-price-text');
    itemPrice.textContent = "x1";

    const cancelButtonContainer = document.createElement('div');
    cancelButtonContainer.classList.add('popup-confirm-buying-button');
    cancelButtonContainer.style.cursor = 'pointer';
    
    const confirmButtonTextNo = document.createElement('div');
    confirmButtonTextNo.classList.add('popup-content-item-price-text');
    confirmButtonTextNo.textContent = "Non";

    if (hasEnoughItemInInventory(Items.ORAN_BERRY, 1)) {
        confirmButtonContainer.addEventListener('click', () => {
            removeItemInInventory(Items.ORAN_BERRY, 1);
            levelUpPokemon(pokemon.uuid);
            updatePokemonDetailPopupLevel(pokemon);
            showNotification("Monté de niveau effectuée !", "validation");
            popupBackgroundContainer.remove();
        });
    } else {
        confirmButtonContainer.style.opacity = "30%";
        confirmButtonContainer.addEventListener('click', () => {
            showNotification("Tu n'as pas assez de baies", "error");
        });
    }

    cancelButtonContainer.addEventListener('click', () => {
        popupBackgroundContainer.remove();
    });

    confirmButtonContainer.appendChild(confirmButtonTextYes);
    confirmButtonContainer.appendChild(itemPriceImg);
    confirmButtonContainer.appendChild(itemPrice);
    cancelButtonContainer.appendChild(confirmButtonTextNo);

    buttonsContainer.appendChild(confirmButtonContainer);
    buttonsContainer.appendChild(cancelButtonContainer);

    popupContent.appendChild(title);
    popupContent.appendChild(subtitleLine);
    popupContent.appendChild(itemImg);
    popupContent.appendChild(buttonsContainer);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);
    document.body.appendChild(popupBackgroundContainer);
}