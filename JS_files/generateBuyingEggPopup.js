let currentEggConfigGen = 0;
let currentEggConfigType = 0;
let currentEggConfigShiny = 0;
let eggDefaultPrice = 5;
let currentEggPrice = eggDefaultPrice;

function updateEggPrice() {
    currentEggPrice = eggDefaultPrice + eggShopGens[currentEggConfigGen].price + eggShopTypes[currentEggConfigType].price + eggShopShiny[currentEggConfigShiny].price;
    document.getElementById("egg-price").textContent = "x" + currentEggPrice;
}

function updateEggLook() {
    document.getElementById("egg-preview-shop").style.filter = eggShopShiny[currentEggConfigShiny].filter + " " + eggShopTypes[currentEggConfigType].colorFilter;
}

function changeGenEgg(isLeft) {
    if (isLeft) {
        currentEggConfigGen--;
        if (currentEggConfigGen < 0)
            currentEggConfigGen = eggShopGens.length - 1;
    } else {
        currentEggConfigGen++;
        if (currentEggConfigGen >= eggShopGens.length)
            currentEggConfigGen = 0;
    }
    document.getElementById("gen-egg-text").textContent = eggShopGens[currentEggConfigGen].name;
    document.getElementById("gen-icon-egg").src = eggShopGens[currentEggConfigGen].sprite;
    updateEggPrice();
}

function changeShinyEgg(isLeft) {
    if (isLeft) {
        currentEggConfigShiny--;
        if (currentEggConfigShiny < 0)
            currentEggConfigShiny = eggShopShiny.length - 1;
    } else {
        currentEggConfigShiny++;
        if (currentEggConfigShiny >= eggShopShiny.length)
            currentEggConfigShiny = 0;
    }
    document.getElementById("shiny-egg-text").textContent = eggShopShiny[currentEggConfigShiny].name;
    document.getElementById("shiny-icon-egg").src = eggShopShiny[currentEggConfigShiny].sprite;
    updateEggPrice();
    updateEggLook();
}

function changeTypeEgg(isLeft) {
    if (isLeft) {
        currentEggConfigType--;
        if (currentEggConfigType < 0)
            currentEggConfigType = eggShopTypes.length - 1;
    } else {
        currentEggConfigType++;
        if (currentEggConfigType >= eggShopTypes.length)
            currentEggConfigType = 0;
    }
    document.getElementById("type-egg-text").textContent = eggShopTypes[currentEggConfigType].name;
    document.getElementById("type-egg-icon").src = eggShopTypes[currentEggConfigType].sprite;
    updateEggPrice();
    updateEggLook();
}

function generateBuyingEggPopup() {
    document.body.style.overflow = 'hidden';

    // Common layout for popup
    const popupBackgroundContainer = document.createElement('div');
    popupBackgroundContainer.id = "egg-shop-window";
    popupBackgroundContainer.classList.add('popup-background');

    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-trainer-image');

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content-trainer-image');

    const titleLine = document.createElement('div');
    titleLine.classList.add('popup-title-line');

    const title = document.createElement('p');
    title.textContent = 'Commander un oeuf';

    const closeButton = document.createElement('img');
    closeButton.src = 'sprites/misc/cross_icon.png';
    closeButton.style.cursor = 'pointer';

    closeButton.addEventListener('click', () => {
        popupBackgroundContainer.remove(); // Ferme le popup en supprimant l'élément
    });
    closeButton.classList.add('popup-close-icon');
    titleLine.appendChild(title);
    titleLine.appendChild(closeButton);

    // Wrapper of content
    const layoutWrapper = document.createElement('div');
    layoutWrapper.classList.add('popup-content-wrapper-egg-shop');

    //Specific layout
    const eggPreview = document.createElement('img');
    eggPreview.src = 'sprites/pokemons/egg.png';
    eggPreview.id = 'egg-preview-shop';
    eggPreview.classList.add("egg-custom-preview");

    layoutWrapper.appendChild(eggPreview);

    // Gen selection
    const genSelection = document.createElement('div');
    genSelection.classList.add('gen-selection-wrapper');
    layoutWrapper.appendChild(genSelection);

    const leftArrowGen = document.createElement('img');
    leftArrowGen.src = "sprites/misc/arrow_left.png";
    leftArrowGen.classList.add('gen-selection-arrow');
    leftArrowGen.addEventListener('click', () => changeGenEgg(true));
    genSelection.appendChild(leftArrowGen);

    const genContentWrapper = document.createElement('div');
    genContentWrapper.classList.add('gen-selection-content-wrapper');
    genSelection.appendChild(genContentWrapper);

    const genImg = document.createElement('img');
    genImg.src = eggShopGens[currentEggConfigGen].sprite;
    genImg.id = "gen-icon-egg";
    genImg.classList.add('gen-selection-img');
    genContentWrapper.appendChild(genImg);

    const genText = document.createElement('p');
    genText.textContent = eggShopGens[currentEggConfigGen].name;
    genText.classList.add('gen-selection-text');
    genText.id = "gen-egg-text";
    genContentWrapper.appendChild(genText);

    const rightArrowGen = document.createElement('img');
    rightArrowGen.src = "sprites/misc/arrow_right.png";
    rightArrowGen.addEventListener('click', () => changeGenEgg(false));
    rightArrowGen.classList.add('gen-selection-arrow');
    genSelection.appendChild(rightArrowGen);

    // Type selection
    const typeSelection = document.createElement('div');
    typeSelection.classList.add('gen-selection-wrapper');
    layoutWrapper.appendChild(typeSelection);

    const leftArrowType = document.createElement('img');
    leftArrowType.src = "sprites/misc/arrow_left.png";
    leftArrowType.classList.add('gen-selection-arrow');
    leftArrowType.addEventListener('click', () => changeTypeEgg(true));
    typeSelection.appendChild(leftArrowType);

    const typeContentWrapper = document.createElement('div');
    typeContentWrapper.classList.add('gen-selection-content-wrapper');
    typeSelection.appendChild(typeContentWrapper);

    const typeImg = document.createElement('img');
    typeImg.src = eggShopTypes[currentEggConfigType].sprite;
    typeImg.id = "type-egg-icon";
    typeImg.classList.add('gen-selection-img');
    typeContentWrapper.appendChild(typeImg);

    const typeText = document.createElement('p');
    typeText.textContent = eggShopTypes[currentEggConfigType].name;
    typeText.classList.add('gen-selection-text');
    typeText.id = "type-egg-text";
    typeContentWrapper.appendChild(typeText);

    const rightArrowType = document.createElement('img');
    rightArrowType.src = "sprites/misc/arrow_right.png";
    rightArrowType.addEventListener('click', () => changeTypeEgg(false));
    rightArrowType.classList.add('gen-selection-arrow');
    typeSelection.appendChild(rightArrowType);

    // Shiny selection
    const shinySelection = document.createElement('div');
    shinySelection.classList.add('gen-selection-wrapper');
    layoutWrapper.appendChild(shinySelection);

    const leftArrowShiny = document.createElement('img');
    leftArrowShiny.src = "sprites/misc/arrow_left.png";
    leftArrowShiny.classList.add('gen-selection-arrow');
    leftArrowShiny.addEventListener('click', () => changeShinyEgg(true));
    shinySelection.appendChild(leftArrowShiny);

    const shinyContentWrapper = document.createElement('div');
    shinyContentWrapper.classList.add('gen-selection-content-wrapper');
    shinySelection.appendChild(shinyContentWrapper);

    const shinyImg = document.createElement('img');
    shinyImg.src = eggShopShiny[currentEggConfigShiny].sprite;
    shinyImg.id = "shiny-icon-egg";
    shinyImg.classList.add('gen-selection-img');
    shinyContentWrapper.appendChild(shinyImg);

    const shinyText = document.createElement('p');
    shinyText.textContent = eggShopShiny[currentEggConfigShiny].name;
    shinyText.classList.add('gen-selection-text');
    shinyText.id = "shiny-egg-text";
    shinyContentWrapper.appendChild(shinyText);

    const rightArrowShiny = document.createElement('img');
    rightArrowShiny.src = "sprites/misc/arrow_right.png";
    rightArrowShiny.addEventListener('click', () => changeShinyEgg(false));
    rightArrowShiny.classList.add('gen-selection-arrow');
    shinySelection.appendChild(rightArrowShiny);
    // Buy button
    const confirmButtonContainer = document.createElement('div');
    confirmButtonContainer.classList.add('popup-confirm-buying-button', 'popup-confirm-buying-button-egg');
    confirmButtonContainer.style.cursor = 'pointer';

    confirmButtonContainer.addEventListener('click', () => {
        let listToUse = Object.entries(eggShopGens[currentEggConfigGen].id != 0 ? getPokemonsForRegion(eggShopGens[currentEggConfigGen].id) : pokedex);
        let availablePokes = listToUse.filter((poke) => {
            if (poke[1].rarity.name == "LEGENDARY" || poke[1].rarity.name == "ULTRA")
                return false;
            if (currentEggConfigType != 0 && (poke[1].type.name != eggShopTypes[currentEggConfigType].name))
                return false;
            if (!allBasePokemons.includes(poke[0]))
                return false;
            return true;
        });

        if (availablePokes && availablePokes.length >= 1) {
            let isShiny = Math.random() < 1 / (eggShopShiny[currentEggConfigShiny].proba);
            let chosenPoke = availablePokes[Math.floor(Math.random() * availablePokes.length)];
            let pokeCreated = generatePokemon(chosenPoke[0], isShiny, 10, false);

            let endDate = new Date();
            endDate.setHours(endDate.getHours() + 10 + (10 * chosenPoke[1].rarity.strength));
            let egg = {
                pokemon: pokeCreated,
                price: currentEggPrice,
                startDate: new Date(),
                endDate: endDate,
                gen: eggShopGens[currentEggConfigGen],
                type: eggShopTypes[currentEggConfigType],
                shiny: eggShopShiny[currentEggConfigShiny],
            };
            generateConfirmBuyingEggPopup(egg, popupBackgroundContainer);
        } else {
            showNotification("Aucun pokémon ne correspond à ces critères", "error");
        }
    });

    const confirmButtonTextYes = document.createElement('div');
    confirmButtonTextYes.classList.add('popup-content-item-price-text-with-margin');
    confirmButtonTextYes.textContent = "Commander";

    const itemPriceImg = document.createElement('img');
    itemPriceImg.src = './sprites/misc/oran_icon.png';
    itemPriceImg.alt = "oran berry img";
    itemPriceImg.classList.add('popup-content-item-price-img');

    const itemPrice = document.createElement('div');
    itemPrice.classList.add('popup-content-item-price-text');
    itemPrice.textContent = "x" + currentEggPrice;
    itemPrice.id = "egg-price";

    confirmButtonContainer.appendChild(confirmButtonTextYes);
    confirmButtonContainer.appendChild(itemPriceImg);
    confirmButtonContainer.appendChild(itemPrice);
    layoutWrapper.appendChild(confirmButtonContainer);

    // implementation 
    popupContent.appendChild(titleLine);
    popupContent.appendChild(layoutWrapper);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);
    document.body.appendChild(popupBackgroundContainer);
}