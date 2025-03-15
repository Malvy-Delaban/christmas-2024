function addListenerTrainerCardPopup(trainerImg) {
    document.addEventListener("updateTrainerImgEvent", (event) => {
        trainerImg.src = trainer_card.sprite;
    });
}

function generateTrainerCardPopup() {
    document.body.style.overflow = 'hidden'; // Désactive le scroll

    // Créer les éléments principaux
    const popupBackgroundContainer = document.createElement('div');
    popupBackgroundContainer.classList.add('popup-background');

    // Créer les éléments principaux
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-trainer-card');

    const popupContent = document.createElement('div');
    popupContent.classList.add('detail-trainer-card');

    const title = document.createElement('p');
    title.classList.add('popup-trainer-card-title');
    title.textContent = "Carte de dresseur";
    
    const closeButton = document.createElement('img');
    closeButton.src = 'sprites/misc/cross_icon.png';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', () => {
        document.body.style.overflow = '';
        popupBackgroundContainer.remove(); // Ferme le popup en supprimant l'élément
    });
    closeButton.classList.add('popup-close-icon');

    const trainerImg = document.createElement('img');
    trainerImg.src = trainer_card.sprite;
    trainerImg.classList.add('detail-trainer-card-img');
    trainerImg.addEventListener('click', () => {
        generateTrainerImgPopup();
    });
    addListenerTrainerCardPopup(trainerImg);

    const trainerName = document.createElement('input');
    trainerName.type = 'text';
    trainerName.placeholder = trainer_card.name;
    trainerName.name = 'enterName';
    trainerName.classList.add('detail-trainer-card-name');

    trainerName.addEventListener('input', function(event) {
        trainer_card.name = event.target.value;
        updateTrainerCard();
    });

    const seenPokemon = document.createElement('div');
    seenPokemon.classList.add('popup-trainer-card-seen-pokemons');
    seenPokemon.textContent = "Pokémons vus : " + getSeenPokemonNmbr();

    const capturedPokemon = document.createElement('div');
    capturedPokemon.classList.add('popup-trainer-card-captured-pokemons');
    capturedPokemon.textContent = "Pokémons capturés : " + getCapturedPokemonNmbr();
    
    const pokedexContainer = document.createElement('div');
    pokedexContainer.classList.add('detail-pokedex-container');

    const pokedexImg = document.createElement('img');
    pokedexImg.src = 'sprites/misc/pokedex.png';
    pokedexImg.style.cursor = 'pointer';
    pokedexImg.classList.add('detail-pokedex-icon');

    const pokedexDescription = document.createElement('div');
    pokedexDescription.textContent = "Pokédex";

    pokedexContainer.appendChild(pokedexImg);
    pokedexContainer.appendChild(pokedexDescription);

    pokedexContainer.addEventListener('click', () => {
        generatePokedexPopup();
    });

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('popup-trainer-card-buttons-container');

    const eventCodeButton = document.createElement('div');
    eventCodeButton.classList.add('popup-trainer-card-button');
    eventCodeButton.style.cursor = 'pointer';
    eventCodeButton.textContent = "Entrer un code évènement";

    eventCodeButton.addEventListener('click', () => {
        generateEnterEventCodePopup(popupBackgroundContainer);
    });

    buttonsContainer.appendChild(eventCodeButton);

    const downloadSaveButton = document.createElement('div');
    downloadSaveButton.classList.add('popup-trainer-card-button', 'popup-trainer-card-button-dwl-save');
    downloadSaveButton.style.cursor = 'pointer';
    downloadSaveButton.textContent = "Télécharger la sauvegarde";

    downloadSaveButton.addEventListener('click', () => {
        downloadLocalStorage();
    });

    buttonsContainer.appendChild(downloadSaveButton);

    const LoadSaveButton = document.createElement('div');
    LoadSaveButton.classList.add('popup-trainer-card-button', 'popup-trainer-card-button-load-save');
    LoadSaveButton.style.cursor = 'pointer';
    LoadSaveButton.textContent = "Charger une sauvegarde";

    LoadSaveButton.addEventListener('click', () => {
        restoreLocalStorageFromFile();
    });

    buttonsContainer.appendChild(LoadSaveButton);

    popupContent.appendChild(title);
    popupContent.appendChild(closeButton);
    popupContent.appendChild(trainerImg);
    popupContent.appendChild(trainerName);
    popupContent.appendChild(seenPokemon);
    popupContent.appendChild(capturedPokemon);
    popupContent.appendChild(pokedexContainer);
    popupContent.appendChild(buttonsContainer);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);
    document.body.appendChild(popupBackgroundContainer);
}