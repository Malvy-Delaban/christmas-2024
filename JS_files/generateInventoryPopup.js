function fillInventoryPopup(itemList) {
    for (const inventoryItem of inventory) {

        const singleItem = document.createElement('div');
        singleItem.classList.add('popup-content-single-item');

        if (inventoryItem.item.shop_price > 1) {
            singleItem.addEventListener('click', () => {
                generateConfirmSellItemPopup(inventoryItem.item);
            });
        } else {
            singleItem.addEventListener('click', () => {
                showNotification("Vous ne pouvez pas vendre cela", "error")
            });
        }
        // Partie gauche avec l'image et le type
        const leftSide = document.createElement('div');
        leftSide.classList.add('popup-content-left-side');

        const itemImg = document.createElement('img');
        itemImg.src = inventoryItem.item.sprite;
        itemImg.alt = inventoryItem.item.name;
        itemImg.classList.add('popup-content-item-image');

        leftSide.appendChild(itemImg);

        // Partie droite avec les infos du Pokémon
        const rightSide = document.createElement('div');
        rightSide.classList.add('popup-content-right-side');
        rightSide.classList.add('popup-content-right-side-inventory');

        const itemName = document.createElement('div');
        itemName.textContent = inventoryItem.item.name;
        itemName.classList.add('popup-content-item-name');

        const itemDescription = document.createElement('div');
        itemDescription.textContent = inventoryItem.item.description;
        itemDescription.classList.add('popup-content-item-description');

        const itemQuantityContainer = document.createElement('div');
        itemQuantityContainer.classList.add('popup-content-item-quantity');
        itemQuantityContainer.style.cursor = 'pointer';
        
        const itemQuantity = document.createElement('div');
        itemQuantity.classList.add('popup-content-item-quantity-text');
        itemQuantity.textContent = inventoryItem.quantity;

        itemQuantityContainer.appendChild(itemQuantity);

        leftSide.appendChild(itemQuantityContainer);
        rightSide.appendChild(itemName);
        rightSide.appendChild(itemDescription);

        // Assemble le tout
        singleItem.appendChild(leftSide);
        singleItem.appendChild(rightSide);

        itemList.appendChild(singleItem);
    }
}

function generateInventoryPopup() {
    document.body.style.overflow = 'hidden'; // Désactive le scroll
    
    // Créer les éléments principaux
    const popupBackgroundContainer = document.createElement('div');
    popupBackgroundContainer.classList.add('popup-background');

    // Créer les éléments principaux
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-inventory');

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content-inventory');

    const titleLine = document.createElement('div');
    titleLine.classList.add('popup-title-line');

    const title = document.createElement('p');
    title.textContent = 'Inventaire';
    
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

    // Wrapper de la liste des Items
    const itemsListWrapper = document.createElement('div');
    itemsListWrapper.classList.add('popup-content-wrapper');
    titleLine.appendChild(itemsListWrapper);

    // Contenu de la liste des Pokémon
    const itemList = document.createElement('div');
    itemList.classList.add('popup-content-inventory-list');
    itemList.id = 'popup-content-inventory-list';

    fillInventoryPopup(itemList);

    itemsListWrapper.appendChild(itemList);
    popupContent.appendChild(titleLine);
    popupContent.appendChild(itemsListWrapper);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);

    // Ajouter le popup à la page
    document.body.appendChild(popupBackgroundContainer);
}