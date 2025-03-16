function generateConfirmBuyingEggPopup(egg, eggWindow) {
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
    title.textContent = "Êtes-vous sûr(e) de vouloir acheter cet oeuf ?";

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
    itemPrice.textContent = "x" + egg.price;

    const cancelButtonContainer = document.createElement('div');
    cancelButtonContainer.classList.add('popup-confirm-buying-button');
    cancelButtonContainer.style.cursor = 'pointer';
    
    const confirmButtonTextNo = document.createElement('div');
    confirmButtonTextNo.classList.add('popup-content-item-price-text');
    confirmButtonTextNo.textContent = "Non";

    if (hasEnoughItemInInventory(Items.ORAN_BERRY, egg.price)) {
        confirmButtonContainer.addEventListener('click', () => {
            removeItemInInventory(Items.ORAN_BERRY, egg.price);
            updateBerryCount();
            setEggInInventory(egg);
            showNotification("Achat effectué", "validation");
            popupBackgroundContainer.remove(); // Ferme le popup en supprimant l'élément
            eggWindow.remove(); // Ferme le popup de shop d'oeuf
        });
    } else {
        confirmButtonContainer.style.opacity = "30%";
        confirmButtonContainer.addEventListener('click', () => {
            showNotification("Tu n'as pas assez de baies", "error");
        });
    }

    cancelButtonContainer.addEventListener('click', () => {
        popupBackgroundContainer.remove(); // Ferme le popup en supprimant l'élément
    });

    confirmButtonContainer.appendChild(confirmButtonTextYes);
    confirmButtonContainer.appendChild(itemPriceImg);
    confirmButtonContainer.appendChild(itemPrice);
    cancelButtonContainer.appendChild(confirmButtonTextNo);

    buttonsContainer.appendChild(confirmButtonContainer);
    buttonsContainer.appendChild(cancelButtonContainer);

    popupContent.appendChild(title);
    popupContent.appendChild(buttonsContainer);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);
    document.body.appendChild(popupBackgroundContainer);
}