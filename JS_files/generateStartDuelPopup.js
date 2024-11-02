function getOwnPokemonListSelection() {
    const titleTeamSelectionContainer = document.createElement('div');
    titleTeamSelectionContainer.className = "popup-start-duel-pokemon-own-icon-list";
    getInTeamPokemons().forEach(pokemon => {
        const imgOwnPokemon = document.createElement('img');
        imgOwnPokemon.src = pokemon.sprite;
        imgOwnPokemon.classList.add('popup-start-duel-pokemon-own-icon');
        imgOwnPokemon.dataset.uuid = pokemon.uuid;
        titleTeamSelectionContainer.appendChild(imgOwnPokemon);
    });

    return titleTeamSelectionContainer;
}

function makeSelectionPokemonClickable(confirmButtonContainer, trainer, popupBackgroundContainer) {
    const images = document.querySelectorAll('.popup-start-duel-pokemon-own-icon');

    images.forEach(image => {
        image.addEventListener('click', () => {
            confirmButtonContainer = removeAllEventListeners(confirmButtonContainer);
            makePokemonFirstInOwnedPokemons(image.dataset.uuid);
            images.forEach(img => img.classList.add('popup-start-duel-pokemon-own-icon-unselected'));
            image.classList.remove('popup-start-duel-pokemon-own-icon-unselected');

            confirmButtonContainer.style.opacity = "100%";
    
            confirmButtonContainer.addEventListener('click', () => {
                generateDuel(trainer);
                popupBackgroundContainer.remove(); // Ferme le popup en supprimant l'élément
            });
        });
    });
}

function generateStartDuelPopup(trainer) {
    document.body.style.overflow = 'hidden';

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
    title.textContent = trainer.name;
    
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
    confirmButtonContainer.addEventListener('click', () => {
        showNotification("Sélectionnez un pokémon en tête d'équipe", "error");
    })

    const routeLevel = document.createElement('p');
    routeLevel.classList.add('popup-start-route-duel-level');
    routeLevel.textContent = "Niveau moyen : " + trainer.base_level;

    const trainerPokemonList = document.createElement('div');
    trainerPokemonList.classList.add('popup-start-duel-pokemon-list');
    trainer.pokemons.forEach(pokemon => {
        const imgPokeball = document.createElement('img');
        imgPokeball.src = 'sprites/misc/pokeball_icon.png';
        imgPokeball.className = 'popup-start-duel-pokemon-list-icon';
        trainerPokemonList.appendChild(imgPokeball);
    });
    
    const confirmButton = document.createElement('div');
    confirmButton.classList.add('popup-start-duel-button-text');
    confirmButton.textContent = "Lancer le duel";

    const titleTeamSelection = document.createElement('p');
    titleTeamSelection.classList.add('popup-start-route-duel-ask-leader');
    titleTeamSelection.textContent = "Choisissez votre premier pokémon";

    const titleTeamSelectionContainer = getOwnPokemonListSelection();

    confirmButtonContainer.appendChild(confirmButton);

    popupContent.appendChild(title);
    popupContent.appendChild(closeButton);
    popupContent.appendChild(routeLevel);
    popupContent.appendChild(trainerPokemonList);
    popupContent.appendChild(routeImg);
    popupContent.appendChild(titleTeamSelection);
    popupContent.appendChild(titleTeamSelectionContainer);
    popupContent.appendChild(confirmButtonContainer);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);
    document.body.appendChild(popupBackgroundContainer);

    makeSelectionPokemonClickable(confirmButtonContainer, trainer, popupBackgroundContainer);
}

function checkAvailableDuels() {
    let date = new Date();

    let trainersFound = enemy_trainers.filter(trainer => isToday(trainer.unlock_day) && trainer.has_been_used == false);
    let trainersIdFound = [];
    trainersFound.forEach(trainer => trainersIdFound.push(trainer.id));

    return (trainersIdFound);
}

function GenerateDuelButtonDisplay() {
    let trainersId = checkAvailableDuels();
    
    if (trainersId && trainersId.length) {
        const actionButton = document.createElement('button');
        actionButton.id = "duel-button";
        actionButton.className = 'action-button';
        actionButton.textContent = 'Duel du jour !';
        checkInTeamNumber();
        if (!owned_pokemons || owned_pokemons.length < 1 || getInTeamPokemons().length < 1) {
            actionButton.addEventListener('click', () => showNotification("Vous n'avez pas de pokémon dans votre équipe", "error"));
        } else {
            actionButton.addEventListener('click', () => prepareStartDuelPopup());
        }
        const bottomUiDiv = document.getElementById('button-group');
        bottomUiDiv.appendChild(actionButton);
    }

}

function prepareStartDuelPopup() {
    let trainersId = checkAvailableDuels();
    let trainer = enemy_trainers.find(value => value.id === trainersId[0]);
    if (trainer)
        generateStartDuelPopup(trainer);
    else
        actionButton.addEventListener('click', () => showNotification("Un problème est survenu, essayez de recharger la page", "error"));
}

function updateDuelButton() {
    let actionButton = document.getElementById('duel-button');
    actionButton.remove();
    GenerateDuelButtonDisplay();

    if (!owned_pokemons || owned_pokemons.length < 1 || getInTeamPokemons().length < 1) {
        actionButton.addEventListener('click', () => showNotification("Vous n'avez pas de pokémon dans votre équipe", "error"));
    } else {
        actionButton.addEventListener('click', () => prepareStartDuelPopup());
    }
}