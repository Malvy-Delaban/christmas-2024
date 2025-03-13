function chanceOnX(x) {
    // Générer un nombre aléatoire entre 1 et x
    const randomNumber = Math.floor(Math.random() * x) + 1;
    
    // Si le nombre est égal à 1, alors l'événement se produit (1 chance sur 30)
    return randomNumber === 1;
}

function getAverageRoundedUp(arr) {
    if (arr.length === 0) return null; // Pas de moyenne pour un tableau vide

    // Calculer la somme des éléments et diviser par la longueur
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;

    // Arrondir au supérieur
    return Math.ceil(average);
}

function getBiggestIdMap() {
    let biggest = 0;

    for (let i = 0; i < Object.keys(map_cases).length; i++)
        if (map_cases[i].id > biggest)
            biggest = map_cases[i].id;
    return biggest;
}

function getRandomPokemonForRandomRoute(numPokemons = 3) {
    const selectedPokemons = [];
    const rarityPossible = getRarityWeightedList();
    let mustWeRollRarity = true;
    let randomRarity = "";

    while (selectedPokemons.length < numPokemons) {
        if (mustWeRollRarity) {
            randomRarity = rarityPossible[Math.floor(Math.random() * rarityPossible.length)];
            mustWeRollRarity = false;
        }
        const randomIndex = Math.floor(Math.random() * allBasePokemons.length);

        if (!selectedPokemons.includes(allBasePokemons[randomIndex]) && pokedex[allBasePokemons[randomIndex]].rarity.name == randomRarity) {
            selectedPokemons.push(allBasePokemons[randomIndex]);
            mustWeRollRarity = true;
        }
    }
    if (chanceOnX(200))
        selectedPokemons[0] = "WUSHOURS"; // only ULTRA that is base level, so we make sure it is selected differently to avoid having two ultras and making the game make an infinite loop
    return selectedPokemons;
}

function getRarityWeightedList() {
    let raritiesPossible = [];

    for (let i = 0; i < 1; i++)
        raritiesPossible.push("LEGENDARY");
    for (let i = 0; i < 5; i++)
        raritiesPossible.push("EPIC");
    for (let i = 0; i < 7; i++)
        raritiesPossible.push("RARE");
    for (let i = 0; i < 9; i++)
        raritiesPossible.push("UNCOMMON");
    for (let i = 0; i < 10; i++)
        raritiesPossible.push("COMMON");

    return raritiesPossible;
}

function createSingleMapRandom(mapDate, idOffset) {
    let pokemonKeys = getRandomPokemonForRandomRoute();
    let numberLocation = Math.floor(Math.random() * 43) + 1;
    let formattedNumber = numberLocation.toString().padStart(2, '0');

    let newMap = {
        id: getDailyUniqueId() + idOffset,
        code: '',
        name: "Une nouvelle rencontre est là !",
        sprite: "./sprites/locations/location_" + formattedNumber + ".png",
        unlock_day: new Date(mapDate).toISOString(),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: true,
        base_level: 5,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            [pokemonKeys[0]]: 1,
            [pokemonKeys[1]]: 1,
            [pokemonKeys[2]]: 1,
        },
    }
    return newMap;
}

function createNewMaps(doesTheyExistsAlready) {
    let newMaps = [];

    if (!doesTheyExistsAlready[0])
        newMaps.push(createSingleMapRandom(getDateInXDay(1), 1));
    if (!doesTheyExistsAlready[1])
        newMaps.push(createSingleMapRandom(getDateInXDay(2), 2));
    if (!doesTheyExistsAlready[2])
        newMaps.push(createSingleMapRandom(getDateInXDay(3), 3));

    return (newMaps);
}

function getRemainingMapCases() {
    let routeRemaining = [];
    let isinOneDayExisting = false;
    let isinTwoDayExisting = false;
    let isinThreeDayExisting = false;

    for (let i = 0; i < Object.keys(map_cases).length; i++)
        if (map_cases[i].unlock_day !== -1 && !isPastToday(map_cases[i].unlock_day))
            routeRemaining.push(map_cases[i]);

    routeRemaining.forEach(element => {
        if (isInXDays(element.unlock_day, 1))
            isinOneDayExisting = true;
        if (isInXDays(element.unlock_day, 2))
            isinTwoDayExisting = true;
        if (isInXDays(element.unlock_day, 3))
            isinThreeDayExisting = true;
    });

    return ([isinOneDayExisting, isinTwoDayExisting, isinThreeDayExisting]);
}

function GenerateRoutesRandomly() {
    let doesTheyExistsAlready = getRemainingMapCases();
    let newMaps = createNewMaps(doesTheyExistsAlready);

    newMaps.forEach(newRoute => {
        map_cases.push(newRoute);
    });
    updateMapCases();
}

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