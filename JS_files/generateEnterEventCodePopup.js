function generateEnterEventCodePopup(popupTrainer) {
    // Créer les éléments principaux
    const popupBackgroundContainer = document.createElement('div');
    popupBackgroundContainer.classList.add('popup-background');

    // Créer les éléments principaux
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-enter-code');

    const popupContent = document.createElement('div');
    popupContent.classList.add('detail-enter-code');

    const title = document.createElement('p');
    title.classList.add('popup-enter-code-title');
    title.textContent = "Entrez un code";
    
    const closeButton = document.createElement('img');
    closeButton.src = 'sprites/misc/cross_icon.png';
    closeButton.style.cursor = 'pointer';

    closeButton.addEventListener('click', () => {
        document.body.style.overflow = '';
        popupBackgroundContainer.remove(); // Ferme le popup en supprimant l'élément
    });
    closeButton.classList.add('popup-close-icon');

    const codeInput = document.createElement('input');
    codeInput.type = 'text';
    codeInput.placeholder = 1234;
    codeInput.name = 'enterCode';
    codeInput.classList.add('detail-enter-code-input');

    const confirmButtonContainer = document.createElement('div');
    confirmButtonContainer.classList.add('popup-enter-code-button');
    confirmButtonContainer.style.cursor = 'pointer';
    
    const confirmButton = document.createElement('div');
    confirmButton.classList.add('popup-enter-code-button-text');
    confirmButton.textContent = "Valider";

    confirmButtonContainer.addEventListener('click', () => {
        const singleCase = getRouteFromCode(codeInput.value);
        const trainer = getTrainerFromCode(codeInput.value);
        const object = getObjectFromCode(codeInput.value);
        const specificPokemonCase = getSpecificPokemonFromCode(codeInput.value);
    
        if (singleCase) {
            showNotification("Code utilisé avec succés !", "validation");
            generateStartRoutePopup(singleCase);
        } else if (trainer) {
            showNotification("Code utilisé avec succés !", "validation");
            generateStartDuelPopup(trainer);
        } else if (object) {
            showNotification("Code utilisé avec succés !", "validation");
            generateGiftReceivedPopup(object.id);
        } else if (specificPokemonCase) {
            showNotification("Code utilisé avec succés !", "validation");
            generateStartRoutePopup(specificPokemonCase);
        } else{
            showNotification("Code invalide", "error");
        }
        popupBackgroundContainer.remove(); // Ferme le popup en supprimant l'élément
        popupTrainer.remove(); // Ferme le popup parent en supprimant l'élément
        document.body.style.overflow = '';
    });

    confirmButtonContainer.appendChild(confirmButton);

    popupContent.appendChild(title);
    popupContent.appendChild(closeButton);
    popupContent.appendChild(codeInput);
    popupContent.appendChild(confirmButtonContainer);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);
    document.body.appendChild(popupBackgroundContainer);
}