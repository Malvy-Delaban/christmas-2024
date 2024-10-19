function fillEvolutionList(evolutionListDiv, currentPokemon, remainingDuels) {
    let pokemon = pokedex[currentPokemon.pokedexId];

    for (let i = 0; i < pokemon.evolving_pokemon.length; i++) {
        let evolvingPokemonKey = getKeyPokedexFromId(pokemon.evolving_pokemon[i].id);

        const evolutionContainer = document.createElement('div');
        evolutionContainer.classList.add('popup-evolution-single-container');
        
        const rightSide = document.createElement('div');
        rightSide.classList.add('popup-evolution-right-side');

        const evolutionImg = document.createElement('img');
        evolutionImg.src = GetSpriteByPokemon(evolvingPokemonKey, currentPokemon.isShiny);
        evolutionImg.classList.add('popup-evolution-img');

        const typeChip = createTypeChipFromPokedexID(evolvingPokemonKey);

        const evolveButton = document.createElement('div');
        evolveButton.classList.add('popup-evolution-button');
        if (remainingDuels > 0 || hasEnoughItemInInventory(pokedex[currentPokemon.pokedexId].needed_item[i], pokedex[currentPokemon.pokedexId].needed_quantity[i]))
            evolveButton.classList.add('popup-evolution-button-greyed');

        const evolveButtonLeftSide = document.createElement('p');
        evolveButtonLeftSide.classList.add('popup-evolution-button-left-side');
        evolveButtonLeftSide.textContent = pokedex[evolvingPokemonKey].name;

        const evolveButtonRightSide = document.createElement('div');
        evolveButtonRightSide.classList.add('popup-evolution-button-right-side');

        const evolveButtonRightSideCostImg = document.createElement('img');
        evolveButtonRightSideCostImg.src = pokemon.needed_item[i].sprite;
        evolveButtonRightSideCostImg.classList.add('popup-evolution-button-right-side-cost-img');

        const evolveButtonRightSideCostText = document.createElement('p');
        evolveButtonRightSideCostText.textContent = "x" + pokemon.needed_quantity[i];
        evolveButtonRightSideCostText.classList.add('popup-evolution-button-right-side-cost-text');

        evolveButtonRightSide.appendChild(evolveButtonRightSideCostImg);
        evolveButtonRightSide.appendChild(evolveButtonRightSideCostText);
        evolveButton.appendChild(evolveButtonLeftSide);
        evolveButton.appendChild(evolveButtonRightSide);
        rightSide.appendChild(typeChip);
        rightSide.appendChild(evolveButton);
        evolutionContainer.appendChild(evolutionImg);
        evolutionContainer.appendChild(rightSide);
        evolutionListDiv.appendChild(evolutionContainer);
    }
}

function generateEvolutionPopup(pokemon) {
    // Créer les éléments principaux
    const popupBackgroundContainer = document.createElement('div');
    popupBackgroundContainer.classList.add('popup-background');

    // Créer les éléments principaux
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-evolution-detail');

    const popupContent = document.createElement('div');
    popupContent.classList.add('detail-your-pokemon-detail');

    const titleLine = document.createElement('div');
    titleLine.classList.add('popup-title-line');

    const title = document.createElement('p');
    title.classList.add('popup-evolution-title');
    title.textContent = "Evolutions";
    
    const closeButton = document.createElement('img');
    closeButton.src = 'sprites/misc/cross_icon.png';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', () => {
        popupBackgroundContainer.remove(); // Ferme le popup en supprimant l'élément
    });
    closeButton.classList.add('popup-close-icon');

    // Ajouter le titre et le bouton de fermeture
    titleLine.appendChild(title);
    titleLine.appendChild(closeButton);
    popupContent.appendChild(titleLine);
    
    const requirements = document.createElement('p');
    let remainingDuels = pokedex[pokemon.pokedexId].duelToWin - (pokemon.duelWon ? pokemon.duelWon : 0);
    if (remainingDuels > 0)
        requirements.textContent = "Vous devez encore remportez " + remainingDuels + " duels avec " + pokedex[pokemon.pokedexId].name + " dans votre équipe pour pouvoir le faire évoluer.";
    else
        requirements.textContent = "Vous avez remporté " + pokemon.duelWon + " duels avec " + pokedex[pokemon.pokedexId].name + ". Il est prêt à évoluer !";
    requirements.classList.add('popup-evolution-requirements');
    
    const evolutionList = document.createElement('div');
    evolutionList.classList.add('popup-evolution-pokemon-list');

    fillEvolutionList(evolutionList, pokemon, remainingDuels);

    popupContent.appendChild(titleLine);
    popupContent.appendChild(requirements);
    popupContent.appendChild(evolutionList);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);
    document.body.appendChild(popupBackgroundContainer);
}