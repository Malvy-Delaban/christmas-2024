function generateGiftReceivedPopup(objectId) {
    let code = null;
    for (let itemEvent of items_code)
        if (itemEvent.id === objectId && !itemEvent.has_been_used)
            code = itemEvent;
    code.has_been_used = true;

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
    title.textContent = code.message;
    popupContent.appendChild(title);

    const giftList = document.createElement('div');
    giftList.classList.add('gift-list');

    for (let i = 0; i < code.items.length; i++) {
        const rewardContainer = document.createElement('div');
        rewardContainer.className = "popup-end-duel-reward";

        const rewardImg = document.createElement('img');
        rewardImg.src = code.items[i].sprite;
        rewardImg.className = "popup-end-duel-reward-img";
        rewardContainer.appendChild(rewardImg);

        const rewardQuantity = document.createElement('p');
        rewardQuantity.textContent = "x" + code.quantity[i];
        rewardQuantity.className = "popup-content-item-quantity";
        rewardContainer.appendChild(rewardQuantity);

        giftList.appendChild(rewardContainer);
        addItemInInventory(code.items[i], code.quantity[i]);
    }
    popupContent.appendChild(giftList);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('popup-confirm-buying-buttons-container');

    const cancelButtonContainer = document.createElement('div');
    cancelButtonContainer.classList.add('popup-confirm-buying-button');
    cancelButtonContainer.style.cursor = 'pointer';
    
    const confirmButtonTextNo = document.createElement('div');
    confirmButtonTextNo.classList.add('popup-content-item-price-text');
    confirmButtonTextNo.textContent = "Continuer";

    cancelButtonContainer.addEventListener('click', () => {
        popupBackgroundContainer.remove();
    });

    cancelButtonContainer.appendChild(confirmButtonTextNo);

    buttonsContainer.appendChild(cancelButtonContainer);

    popupContent.appendChild(buttonsContainer);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);
    document.body.appendChild(popupBackgroundContainer);
}