function fillShopPopup(itemList) {
    console.log(Items);
    for (const itemKey in Items) {
        const currentItem = Items[itemKey];

        if (currentItem.shop_price === -1)
            continue;

        // Créer un Pokémon unique à afficher
        const singleItem = document.createElement('div');
        singleItem.classList.add('popup-content-single-item');

        // Partie gauche avec l'image et le type
        const leftSide = document.createElement('div');
        leftSide.classList.add('popup-content-left-side');

        const itemImg = document.createElement('img');
        itemImg.src = currentItem.sprite;
        itemImg.alt = currentItem.name;
        itemImg.classList.add('popup-content-item-image');

        leftSide.appendChild(itemImg);

        // Partie droite avec les infos du Pokémon
        const rightSide = document.createElement('div');
        rightSide.classList.add('popup-content-right-side');
        rightSide.classList.add('popup-content-right-side-shop');

        const itemName = document.createElement('div');
        itemName.textContent = currentItem.name;
        itemName.classList.add('popup-content-item-name');

        const itemDescription = document.createElement('div');
        itemDescription.textContent = currentItem.description;
        itemDescription.classList.add('popup-content-item-description');

        const itemPriceContainer = document.createElement('div');
        itemPriceContainer.classList.add('popup-content-item-price');
        itemPriceContainer.style.cursor = 'pointer';

        const itemPriceImg = document.createElement('img');
        itemPriceImg.src = './sprites/misc/oran_icon.png';
        itemPriceImg.alt = "oran berry img";
        itemPriceImg.classList.add('popup-content-item-price-img');
        
        const itemPrice = document.createElement('div');
        itemPrice.classList.add('popup-content-item-price-text');
        itemPrice.textContent = "x" + currentItem.shop_price;

        itemPriceContainer.addEventListener('click', () => {
            generateConfirmBuyingPopup(currentItem);
        });

        itemPriceContainer.appendChild(itemPriceImg);
        itemPriceContainer.appendChild(itemPrice);

        leftSide.appendChild(itemPriceContainer);
        rightSide.appendChild(itemName);
        rightSide.appendChild(itemDescription);

        // Assemble le tout
        singleItem.appendChild(leftSide);
        singleItem.appendChild(rightSide);

        itemList.appendChild(singleItem);
    }
}

function generateShopPopup() {
    document.body.style.overflow = 'hidden'; // Désactive le scroll
    
    // Créer les éléments principaux
    const popupBackgroundContainer = document.createElement('div');
    popupBackgroundContainer.classList.add('popup-background');

    // Créer les éléments principaux
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-shop');

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content-shop');

    const titleLine = document.createElement('div');
    titleLine.classList.add('popup-title-line');

    const subtitleLine = document.createElement('div');
    subtitleLine.classList.add('popup-subtitle-line');

    const subtitleText = document.createElement('p');
    subtitleText.textContent = "Vous avez actuellement " + currentQuantityInInventory(Items.ORAN_BERRY);
    subtitleText.classList.add('popup-subtitle-text');

    const subtitleImg = document.createElement('img');
    subtitleImg.src = './sprites/misc/oran_icon.png';
    subtitleImg.alt = "oran berry img";
    subtitleImg.classList.add('popup-subtitle-image');

    subtitleLine.appendChild(subtitleText);
    subtitleLine.appendChild(subtitleImg);

    const title = document.createElement('p');
    title.textContent = 'Boutique';
    
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
    itemList.classList.add('popup-content-shop-list');

    fillShopPopup(itemList);

    itemsListWrapper.appendChild(itemList);
    popupContent.appendChild(titleLine);
    popupContent.appendChild(subtitleLine);
    popupContent.appendChild(itemsListWrapper);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);

    // Ajouter le popup à la page
    document.body.appendChild(popupBackgroundContainer);
}