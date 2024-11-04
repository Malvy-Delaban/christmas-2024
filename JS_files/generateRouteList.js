function GetAllValidRouteToDisplay() {
    let routeToDisplay = [];

    for (let i = 0; i < Object.keys(map_cases).length; i++)
        if (map_cases[i].unlock_day !== -1 && map_cases[i].has_been_used == false && isDatePastOrWithinNext3Days(map_cases[i].unlock_day))
            routeToDisplay.push(map_cases[i]);

    return routeToDisplay;
}

function formatDate(date) {
    let objDate = new Date(date);
    const day = objDate.getDate(); // Jour du mois
    const month = objDate.toLocaleString('fr-FR', { month: 'long' }); // Mois formaté en français
    return `${day} ${month.charAt(0).toUpperCase() + month.slice(1)}`; // Formattage pour capitaliser le mois
};

function GenerateSingleRouteDisplay(route) {
    const currentDate = new Date(); // Date actuelle

    // Créer l'élément div avec la classe 'route-display'
    const routeDisplay = document.createElement('div');
    routeDisplay.classList.add('route-display');

    const imgElementContainer = document.createElement('div');
    imgElementContainer.classList.add('image-card-container');

    // Créer l'élément img avec la source et l'attribut alt
    const imgElement = document.createElement('img');
    imgElement.src = route.sprite;
    imgElement.alt = "route picture";
    imgElement.classList.add('image-card');

    const imgLock = document.createElement('img');
    imgLock.src = "sprites/misc/lock_icon.png";
    imgLock.alt = "lock icon";
    imgLock.classList.add('image-card-lock');

    // Créer l'élément div pour le label
    const labelElement = document.createElement('div');
    labelElement.classList.add('route-label');
    let isAvailable = isPastTodayOrToday(route.unlock_day);
    labelElement.textContent = isAvailable ? "Disponible maintenant !" : `Disponible le ${formatDate(route.unlock_day)}`;

    // Ajouter l'image et le label dans le 'route-display'
    imgElementContainer.appendChild(imgElement);
    if (!isAvailable) {
        imgElementContainer.appendChild(imgLock);
        routeDisplay.addEventListener('click', function() {
            showNotification(`Disponible le ${formatDate(route.unlock_day)} à minuit`, "validation");
        });
    } else {
        routeDisplay.addEventListener('click', function() {
            generateStartRoutePopup(route);
        });
    }

    routeDisplay.appendChild(imgElementContainer);
    routeDisplay.appendChild(labelElement);

    return routeDisplay;
}

function GenerateRouteListDisplay() {
    let routeToDisplay = GetAllValidRouteToDisplay();
    let container = document.getElementById('routes-container');

    for (let i = 0; i < Object.keys(routeToDisplay).length; i++) {
        container.appendChild(GenerateSingleRouteDisplay(routeToDisplay[i]));
    }
    if (!routeToDisplay || routeToDisplay.length <= 0) {
        while (container.firstChild)
            container.removeChild(container.firstChild);
        const emptyList = document.createElement('div');
        emptyList.classList.add('empty-list-route');
        emptyList.textContent = "Aucune route à l'horizon, revenez plus tard";

        container.appendChild(emptyList);
    }
}