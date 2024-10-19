function GetAllValidRouteToDisplay() {
    let routeToDisplay = [];

    for (let i = 0; i < Object.keys(map_cases).length; i++)
        if (map_cases[i].unlock_day !== -1 && map_cases[i].has_been_used == false)
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

    // Créer l'élément img avec la source et l'attribut alt
    const imgElement = document.createElement('img');
    imgElement.src = route.sprite;
    imgElement.alt = "route picture";
    imgElement.classList.add('image-card');

    // Créer l'élément div pour le label
    const labelElement = document.createElement('div');
    labelElement.classList.add('route-label');
    labelElement.textContent = currentDate >= route.unlock_day ? "Disponible maintenant !" : `Disponible le ${formatDate(route.unlock_day)}`;

    // Ajouter l'image et le label dans le 'route-display'
    routeDisplay.appendChild(imgElement);
    routeDisplay.appendChild(labelElement);

    routeDisplay.addEventListener('click', function() {
        generatePokemonChoiceDisplay(route);
    });

    return routeDisplay;
}

function GenerateRouteListDisplay() {
    let routeToDisplay = GetAllValidRouteToDisplay();
    let container = document.getElementById('routes-container');

    for (let i = 0; i < Object.keys(routeToDisplay).length; i++) {
        container.appendChild(GenerateSingleRouteDisplay(routeToDisplay[i]));
    }
}