function generateConfirmDiscardPopup(pokemon) {
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
    title.textContent = "Êtes-vous sûr(e) de vouloir relâcher " + pokedex[pokemon.pokedexId].name +" ?";

    const subtitle = document.createElement('p');
    subtitle.classList.add('popup-confirm-discard-subtitle');
    subtitle.textContent = "Cette action est définitive";

    const gainExplanation = document.createElement('p');
    gainExplanation.classList.add('popup-confirm-discard-explaination');
    gainExplanation.textContent = "Vous recevrez :";

    const rewardParent = document.createElement('div');
    rewardParent.classList.add('popup-end-duel-reward');

    const rewardImg = document.createElement('img');
    rewardImg.classList.add('popup-end-duel-reward-img');
    rewardImg.src = "./sprites/misc/oran_icon.png";

    const rewardQuantity = document.createElement('p');
    rewardQuantity.classList.add('popup-content-item-quantity');
    rewardQuantity.textContent = "x" + pokedex[pokemon.pokedexId].rarity.sacrifice_reward;

    rewardParent.appendChild(rewardImg);
    rewardParent.appendChild(rewardQuantity);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('popup-confirm-buying-buttons-container');

    const confirmButtonContainer = document.createElement('div');
    confirmButtonContainer.classList.add('detail-pokemon-button-warning-confirm');
    confirmButtonContainer.style.cursor = 'pointer';
    
    const confirmButtonTextYes = document.createElement('div');
    confirmButtonTextYes.classList.add('popup-content-discard-confirm');
    confirmButtonTextYes.textContent = "Relâcher";

    const cancelButtonContainer = document.createElement('div');
    cancelButtonContainer.classList.add('popup-confirm-buying-button');
    cancelButtonContainer.style.cursor = 'pointer';
    
    const confirmButtonTextNo = document.createElement('div');
    confirmButtonTextNo.classList.add('popup-content-item-price-text');
    confirmButtonTextNo.textContent = "Ne pas relâcher";

    confirmButtonContainer.addEventListener('click', () => {
        let divDetail = document.getElementById("popup-your-pokemon-detail");
        divDetail.remove();
        
        addItemInInventory(Items.ORAN_BERRY, pokedex[pokemon.pokedexId].rarity.sacrifice_reward);
        removePokemonFromOwned(pokemon);
        showNotification("Pokémon relâché", "validation");
        popupBackgroundContainer.remove();
    });

    cancelButtonContainer.addEventListener('click', () => {
        popupBackgroundContainer.remove();
    });

    confirmButtonContainer.appendChild(confirmButtonTextYes);
    cancelButtonContainer.appendChild(confirmButtonTextNo);

    buttonsContainer.appendChild(confirmButtonContainer);
    buttonsContainer.appendChild(cancelButtonContainer);

    popupContent.appendChild(title);
    popupContent.appendChild(subtitle);
    popupContent.appendChild(gainExplanation);
    popupContent.appendChild(rewardParent);
    popupContent.appendChild(buttonsContainer);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);
    document.body.appendChild(popupBackgroundContainer);
}