function generateStartDuelPopup() {
    const trainer = enemy_trainers[0];

    // Créer les éléments principaux
    const popupBackgroundContainer = document.createElement('div');
    popupBackgroundContainer.classList.add('popup-background');

    // Créer les éléments principaux
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-start-duel');

    const popupContent = document.createElement('div');
    popupContent.classList.add('detail-start-duel');

    const title = document.createElement('p');
    title.classList.add('popup-start-duel-title');
    title.textContent = "Nouvelle Rencontre";
    
    const closeButton = document.createElement('img');
    closeButton.src = 'sprites/misc/cross_icon.png';
    closeButton.style.cursor = 'pointer';

    closeButton.addEventListener('click', () => {
        document.body.style.overflow = '';
        popupBackgroundContainer.remove(); // Ferme le popup en supprimant l'élément
    });
    closeButton.classList.add('popup-close-icon');

    const routeImg = document.createElement('img');
    routeImg.src = trainer.sprite;
    routeImg.classList.add('detail-start-duel-img');

    const confirmButtonContainer = document.createElement('div');
    confirmButtonContainer.classList.add('popup-start-duel-button');
    confirmButtonContainer.style.cursor = 'pointer';

    const routeName = document.createElement('p');
    routeName.classList.add('popup-start-route-duel-name');
    routeName.textContent = trainer.name + " veut se battre";

    const routeLevel = document.createElement('p');
    routeLevel.classList.add('popup-start-route-duel-level');
    routeLevel.textContent = "Niveau moyen : " + trainer.base_level;
    
    const confirmButton = document.createElement('div');
    confirmButton.classList.add('popup-start-duel-button-text');
    confirmButton.textContent = "Lancer le duel";

    confirmButtonContainer.addEventListener('click', () => {
        generateDuel(trainer);
        popupBackgroundContainer.remove(); // Ferme le popup en supprimant l'élément
    });

    confirmButtonContainer.appendChild(confirmButton);

    popupContent.appendChild(title);
    popupContent.appendChild(closeButton);
    popupContent.appendChild(routeImg);
    popupContent.appendChild(routeName);
    popupContent.appendChild(routeLevel);
    popupContent.appendChild(confirmButtonContainer);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);
    document.body.appendChild(popupBackgroundContainer);
}

function GenerateDuelButtonDisplay() {
    // TODO check date
    const actionButton = document.createElement('button');
    actionButton.className = 'action-button';
    actionButton.textContent = 'Duel du jour !';
    actionButton.addEventListener('click', () => {
        generateStartDuelPopup()
    });
    const bottomUiDiv = document.getElementById('button-group');
    bottomUiDiv.appendChild(actionButton);
}