function getInTeamValidPokemons() {
    let team = [];

    for (let i = 0; i < playerTeam.length; i++) {
        if (playerTeam[i].isInTeam && playerTeam[i].hp > 0)
            team.push(playerTeam[i]);
    }

    return team;
}

function getSwitchPokemonListSelection() {
    const titleTeamSelectionContainer = document.createElement('div');
    titleTeamSelectionContainer.className = "popup-start-duel-pokemon-own-icon-list";
    getInTeamValidPokemons().forEach(pokemon => {
        if (playerTeam[0].uuid != pokemon.uuid) {
            const containerPokemon = document.createElement('div');
            containerPokemon.classList.add('popup-switch-pokemon-pokemon-container');
            containerPokemon.dataset.uuid = pokemon.uuid;

            const imgOwnPokemon = document.createElement('img');
            imgOwnPokemon.src = pokemon.sprite;
            imgOwnPokemon.classList.add('popup-switch-pokemon-pokemon-img');

            const healthBar = document.createElement('div');
            healthBar.classList.add('duel-health-bar');
            healthBar.classList.add('switch-health-bar');
            const healthBarFilling = document.createElement('div');
            healthBarFilling.classList.add('duel-health-bar-filling');
            healthBarFilling.style.width = getHPbarSize(pokemon);
            healthBarFilling.id = 'player-pokemon-health';
            healthBarFilling.style.backgroundColor = getHPbarColor(pokemon);
            healthBar.appendChild(healthBarFilling);

            containerPokemon.appendChild(imgOwnPokemon);
            containerPokemon.appendChild(healthBar);
            titleTeamSelectionContainer.appendChild(containerPokemon);
        }
    });

    return titleTeamSelectionContainer;
}

function makePokemonFirstInPlayerTeam(uuid) {
    const foundItem = playerTeam.find(item => item.uuid === uuid);
    playerTeam = foundItem ? [foundItem, ...playerTeam.filter(item => item.uuid !== uuid)] : playerTeam;
}

function makeSelectionSwitchPokemonClickable(enemy) {
    const images = document.querySelectorAll('.popup-switch-pokemon-pokemon-container');

    images.forEach(div => {
        div.addEventListener('click', () => {
            const containers = document.querySelectorAll('.popup-background-switch-pokemon');
            containers.forEach(container => container.remove());
            makePokemonFirstInPlayerTeam(div.dataset.uuid);
            updateDuelUi(enemy);
            makeEnemyTurn(enemy);
        });
    });
}

function generateSwitchPokemonPopup(enemy) {
    // Créer les éléments principaux
    const popupBackgroundContainer = document.createElement('div');
    popupBackgroundContainer.classList.add('popup-background-switch-pokemon');

    // Créer les éléments principaux
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-start-duel');

    const popupContent = document.createElement('div');
    popupContent.classList.add('detail-start-duel');

    const title = document.createElement('p');
    title.classList.add('popup-start-duel-title');
    title.textContent = "Choix du Pokémon";
    
    const closeButton = document.createElement('img');
    closeButton.src = 'sprites/misc/cross_icon.png';
    closeButton.style.cursor = 'pointer';

    closeButton.addEventListener('click', () => {
        popupBackgroundContainer.remove(); // Ferme le popup en supprimant l'élément
    });
    closeButton.classList.add('popup-close-icon');

    const confirmButtonContainer = document.createElement('div');
    confirmButtonContainer.classList.add('popup-start-duel-button');
    confirmButtonContainer.style.cursor = 'pointer';

    const titleTeamSelectionContainer = getSwitchPokemonListSelection();

    popupContent.appendChild(title);
    popupContent.appendChild(closeButton);
    popupContent.appendChild(titleTeamSelectionContainer);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);
    document.body.appendChild(popupBackgroundContainer);

    makeSelectionSwitchPokemonClickable(enemy);
}