let currentBerryForLEvelup = 1;

function changeNumberBerry(changeValue, pokemon) {
    currentBerryForLEvelup += changeValue;
    if (currentBerryForLEvelup <= 0)
        currentBerryForLEvelup = 1;
    if (pokemon.level + currentBerryForLEvelup > 100)
        currentBerryForLEvelup = 100 - pokemon.level;
    document.getElementById("number-berry-text").textContent = "x" + currentBerryForLEvelup;
    document.getElementById("confirm-button-price").textContent = "x" + currentBerryForLEvelup;
}

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
    title.textContent = "Combien de niveau lui faire gagner ?";

    const subtitleLine = document.createElement('div');
    subtitleLine.classList.add('popup-subtitle-line');

    let remainingDuels = pokedex[pokemon.pokedexId].duelToWin - (pokemon.duelWon ? pokemon.duelWon : 0);

    const subtitleText = document.createElement('p');
    subtitleText.textContent = "Vous avez actuellement " + currentQuantityInInventory(Items.ORAN_BERRY);
    subtitleText.classList.add('popup-subtitle-text');
    subtitleText.id = 'popup-subtitle-text-berry-count';

    const subtitleImg = document.createElement('img');
    subtitleImg.src = './sprites/misc/oran_icon.png';
    subtitleImg.alt = "oran berry img";
    subtitleImg.classList.add('popup-subtitle-image');

    const subtitleLineBis = document.createElement('div');
    subtitleLineBis.classList.add('popup-subtitle-line');

    const subtitleTextBis = document.createElement('p');
    subtitleTextBis.textContent = pokedex[pokemon.pokedexId].name + " doit encore monter de niveau " + remainingDuels + " fois pour pouvoir le faire évoluer.";

    subtitleTextBis.classList.add('popup-subtitle-text');
    subtitleTextBis.id = 'popup-subtitle-text-berry-count';

    subtitleLine.appendChild(subtitleText);
    subtitleLine.appendChild(subtitleImg);
    subtitleLineBis.appendChild(subtitleTextBis);

    const itemImg = document.createElement('img');
    itemImg.src = "";
    itemImg.classList.add('detail-confirm-buying-img');

    // berry number
    const numberOfBerryDiv = document.createElement('div');
    numberOfBerryDiv.classList.add('gen-selection-wrapper');

    const leftArrowBerryNumb = document.createElement('img');
    leftArrowBerryNumb.src = "sprites/misc/arrow_left.png";
    leftArrowBerryNumb.classList.add('gen-selection-arrow');
    leftArrowBerryNumb.addEventListener('click', () => changeNumberBerry(-1, pokemon));
    numberOfBerryDiv.appendChild(leftArrowBerryNumb);

    const genContentWrapper = document.createElement('div');
    genContentWrapper.classList.add('gen-selection-content-wrapper');
    numberOfBerryDiv.appendChild(genContentWrapper);

    const genImg = document.createElement('img');
    genImg.src = "sprites/misc/oran_icon.png";
    genImg.id = "gen-icon-egg";
    genImg.classList.add('gen-selection-img');
    genContentWrapper.appendChild(genImg);

    const genText = document.createElement('p');
    genText.textContent = "x" + currentBerryForLEvelup;
    genText.classList.add('gen-selection-text');
    genText.id = "number-berry-text";
    genContentWrapper.appendChild(genText);

    const rightArrowBerryNumb = document.createElement('img');
    rightArrowBerryNumb.src = "sprites/misc/arrow_right.png";
    rightArrowBerryNumb.addEventListener('click', () => changeNumberBerry(1, pokemon));
    rightArrowBerryNumb.classList.add('gen-selection-arrow');
    numberOfBerryDiv.appendChild(rightArrowBerryNumb);

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
    itemPrice.textContent = "x" + currentBerryForLEvelup;
    itemPrice.id = "confirm-button-price";

    const cancelButtonContainer = document.createElement('div');
    cancelButtonContainer.classList.add('popup-confirm-buying-button');
    cancelButtonContainer.style.cursor = 'pointer';

    const confirmButtonTextNo = document.createElement('div');
    confirmButtonTextNo.classList.add('popup-content-item-price-text');
    confirmButtonTextNo.textContent = "Non";

    confirmButtonContainer.addEventListener('click', () => {
        if (hasEnoughItemInInventory(Items.ORAN_BERRY, currentBerryForLEvelup)) {
            removeItemInInventory(Items.ORAN_BERRY, currentBerryForLEvelup);
            for (let i = 0; i < currentBerryForLEvelup; i++)
                levelUpPokemon(pokemon.uuid);
            updatePokemonDetailPopupLevel(pokemon);
            showNotification("Monté de niveau effectuée !", "validation");
            currentBerryForLEvelup = 1;
            if (pokemon.level + currentBerryForLEvelup > 100)
                currentBerryForLEvelup = 100 - pokemon.level;
            popupBackgroundContainer.remove();
        } else {
            showNotification("Tu n'as pas assez de baies", "error");
        }
    });

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
    popupContent.appendChild(subtitleLineBis);
    if (remainingDuels > 0)
        subtitleTextBis.textContent = pokedex[pokemon.pokedexId].name + " doit encore monter de niveau " + remainingDuels + " fois pour pouvoir le faire évoluer.";
    else
        subtitleLineBis.remove();
    popupContent.appendChild(itemImg);
    popupContent.appendChild(numberOfBerryDiv);
    popupContent.appendChild(buttonsContainer);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);
    document.body.appendChild(popupBackgroundContainer);
}