function generateDuelEndPopup(didWin, trainer) {
    
    // Création de la carte principale
    const card = document.createElement('div');
    card.className = 'choice-card-end-duel';

    const trainerImg = document.createElement('img');
    trainerImg.src = trainer.sprite;
    trainerImg.className = 'duel-enemy-trainer-img-end-duel';
    card.appendChild(trainerImg);

    const PlayerImg = document.createElement('img');
    PlayerImg.src = trainer_card.sprite;
    PlayerImg.className = 'duel-player-img-end-duel';
    card.appendChild(PlayerImg);

    // Créer les éléments principaux
    const popupBackgroundContainer = document.createElement('div');
    popupBackgroundContainer.classList.add('popup-background-end');

    // Créer les éléments principaux
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-end-duel');

    const popupContent = document.createElement('div');
    popupContent.classList.add('detail-end-duel');

    const title = document.createElement('p');
    title.classList.add('popup-end-duel-title');
    title.textContent = didWin ? "Tu as vaincu " + trainer.name : "Tu as été vaincu(e) par " + trainer.name;

    const titleSecond = document.createElement('p');
    titleSecond.classList.add('popup-end-duel-title');
    titleSecond.textContent = didWin ? "Tes Pokémons gagnent en niveau" : "1 seul Pokémon gagne en niveau";

    const pokemonImgList = document.createElement('div');
    pokemonImgList.classList.add('popup-end-duel-pokemon-list');

    playerTeam.forEach(pokemon => {
        const pokemonContainer = document.createElement('div');
        pokemonContainer.className = "popup-end-duel-pokemon";

        const pokemonImg = document.createElement('img');
        pokemonImg.src = pokemon.sprite;
        pokemonImg.className = "popup-end-duel-pokemon-img";
        pokemonContainer.appendChild(pokemonImg);

        if (pokemon.hasLeveledUp === true) {
            const pokemonLevelUpText = document.createElement('p');
            pokemonLevelUpText.textContent = "niv. " + pokemon.level + " !";
            pokemonLevelUpText.className = "popup-end-duel-pokemon-level-up";
            pokemonContainer.appendChild(pokemonLevelUpText);
        }

        pokemonImgList.appendChild(pokemonContainer);
    });
    
    const confirmButton = document.createElement('div');
    confirmButton.classList.add('action-button');
    confirmButton.textContent = "Continuer";

    confirmButton.addEventListener('click', () => {
        popupBackgroundContainer.remove();
        card.remove();
        document.body.style.overflow = '';
    });


    popupContent.appendChild(title);
    popupContent.appendChild(titleSecond);
    popupContent.appendChild(pokemonImgList);

    if (didWin) {
        const titleRewards = document.createElement('p');
        titleRewards.classList.add('popup-end-duel-title');
        titleRewards.textContent = "Tu as gagné :";
        popupContent.appendChild(titleRewards);

        const rewardsContainer = document.createElement('div');
        rewardsContainer.classList.add('popup-end-duel-rewards');

        trainer.rewards.forEach(reward => {
            const rewardContainer = document.createElement('div');
            rewardContainer.className = "popup-end-duel-reward";
    
            const rewardImg = document.createElement('img');
            rewardImg.src = reward.item.sprite;
            rewardImg.className = "popup-end-duel-reward-img";
            rewardContainer.appendChild(rewardImg);
    
            const rewardQuantity = document.createElement('p');
            rewardQuantity.textContent = "x" + reward.quantity;
            rewardQuantity.className = "popup-content-item-quantity";
            rewardContainer.appendChild(rewardQuantity);
    
            rewardsContainer.appendChild(rewardContainer);
        });
        popupContent.appendChild(rewardsContainer);
    }

    popupContent.appendChild(confirmButton);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);
    document.body.appendChild(popupBackgroundContainer);
    document.body.appendChild(card);
}

function generateDuelLosePopup(trainer) {
    generateDuelEndPopup(false, trainer);
    updateDuelButton();
}

function generateDuelWinPopup(trainer) {
    generateDuelEndPopup(true, trainer);
    updateDuelButton();
}