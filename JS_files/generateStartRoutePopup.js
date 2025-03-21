function generateStartRoutePopup(route) {
    let mapDate = new Date(route.unlock_day)
    let isFullMoonDay = FullMoons.some(fullMoonDateStr => {
        const fullMoonDate = new Date(fullMoonDateStr);
        return isSameDay(mapDate, fullMoonDate);
    });
    let isNewMoonDay = NewMoons.some(newMoonDateStr => {
        const newMoonDate = new Date(newMoonDateStr);
        return isSameDay(mapDate, newMoonDate);
    });

    // Créer les éléments principaux
    const popupBackgroundContainer = document.createElement('div');
    popupBackgroundContainer.classList.add('popup-background');

    // Créer les éléments principaux
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-start-route');

    const popupContent = document.createElement('div');
    popupContent.classList.add('detail-start-route');

    const title = document.createElement('p');
    title.classList.add('popup-start-route-title');
    title.textContent = "Lieu découvert !";
    
    const closeButton = document.createElement('img');
    closeButton.src = 'sprites/misc/cross_icon.png';
    closeButton.style.cursor = 'pointer';

    closeButton.addEventListener('click', () => {
        document.body.style.overflow = '';
        popupBackgroundContainer.remove(); // Ferme le popup en supprimant l'élément
    });
    closeButton.classList.add('popup-close-icon');

    const routeImgContainer = document.createElement('div');
    routeImgContainer.classList.add('detail-start-route-img-container');

    const routeImg = document.createElement('img');
    routeImg.src = route.sprite;
    routeImg.classList.add('detail-start-route-img');
    routeImgContainer.appendChild(routeImg);

    const moonPhaseImgPokeball = document.createElement('img');
    moonPhaseImgPokeball.src = "sprites/misc/moonball.png";
    moonPhaseImgPokeball.classList.add('detail-start-route-img-moon-poke');

    const confirmButtonContainer = document.createElement('div');
    confirmButtonContainer.classList.add('popup-start-route-button');
    confirmButtonContainer.style.cursor = 'pointer';

    const routeName = document.createElement('p');
    routeName.classList.add('popup-start-route-route-name');
    routeName.textContent = route.name;

    const routeLevel = document.createElement('p');
    routeLevel.classList.add('popup-start-route-route-level');
    routeLevel.textContent = route.adaptativeLevel ? "" : "Niveau moyen : " + route.base_level;
    
    const confirmButton = document.createElement('div');
    confirmButton.classList.add('popup-start-route-button-text');
    confirmButton.textContent = "Lancer la rencontre";

    confirmButtonContainer.addEventListener('click', () => {
        generatePokemonChoiceDisplay(route);
        popupBackgroundContainer.remove(); // Ferme le popup en supprimant l'élément
    });

    confirmButtonContainer.appendChild(confirmButton);

    popupContent.appendChild(title);
    popupContent.appendChild(closeButton);
    popupContent.appendChild(routeImgContainer);
    popupContent.appendChild(routeName);
    popupContent.appendChild(routeLevel);
    popupContent.appendChild(confirmButtonContainer);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);
    document.body.appendChild(popupBackgroundContainer);

    if (isNewMoonDay || isFullMoonDay) {
        routeImg.style.filter = "brightness(0.4) contrast(1.5) sepia(0.2) hue-rotate(180deg)";
        routeImgContainer.appendChild(moonPhaseImgPokeball);
    }
}