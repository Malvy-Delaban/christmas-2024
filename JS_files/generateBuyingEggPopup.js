function generateBuyingEggPopup() {
    document.body.style.overflow = 'hidden';
    
    // Common layout for popup
    const popupBackgroundContainer = document.createElement('div');
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
    eggPreview.classList.add("egg-custom-preview");
    layoutWrapper.appendChild(eggPreview);

    const genSelection = document.createElement('div');
    genSelection.classList.add('gen-selection-wrapper');
    layoutWrapper.appendChild(genSelection);
    
    const leftArrowGen = document.createElement('img');
    leftArrowGen.src = "";
    leftArrowGen.classList.add('gen-selection-arrow');
    genSelection.appendChild(leftArrowGen);
    
    const genText = document.createElement('p');
    genText.textContent = "Random";
    genText.classList.add('gen-selection-text');
    genSelection.appendChild(genText);

    const rightArrowGen = document.createElement('img');
    rightArrowGen.src = "";
    rightArrowGen.classList.add('gen-selection-arrow');
    genSelection.appendChild(rightArrowGen);

    // implementation 
    popupContent.appendChild(titleLine);
    popupContent.appendChild(layoutWrapper);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);
    document.body.appendChild(popupBackgroundContainer);
}