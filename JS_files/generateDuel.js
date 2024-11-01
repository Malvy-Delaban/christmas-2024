let playerTeam = [];

function getPokemonBar(team, pokemon, isLeft) {
    const pokemonBar = document.createElement('div');
    pokemonBar.className = isLeft ? "enemy-pokemon-bar" : "player-pokemon-bar";
    pokemonBar.id = isLeft ? "enemy-pokemon-bar" : "player-pokemon-bar";

    const pokemonImg = document.createElement('img');
    pokemonImg.src = pokemon.sprite;
    pokemonImg.className = isLeft ? 'duel-enemy-pokemon-img' : 'duel-player-pokemon-img';
    pokemonImg.id = isLeft ? 'enemy-pokemon-sprite' : 'player-pokemon-sprite';

    const pokemonStats = document.createElement('div');
    pokemonStats.src = pokemon.sprite;
    pokemonStats.className = 'duel-enemy-pokemon-stats';

    const teamIcons = document.createElement('div');
    teamIcons.className = 'duel-enemy-team-icons';
    teamIcons.id = isLeft ? 'duel-enemy-team-icons' : 'duel-player-team-icons';
    pokemonStats.appendChild(teamIcons);

    team.forEach(pokeInTeam => {
        const teamIcon = document.createElement('img');
        teamIcon.src = "sprites/misc/pokeball_icon.png";
        teamIcon.className = 'duel-enemy-team-icon';
        if (pokeInTeam.is_ko)
            teamIcon.style.opacity = "50%";
        teamIcons.appendChild(teamIcon);
    });

    const pokemonName = document.createElement('div');
    pokemonName.className = 'duel-enemy-pokemon-name';
    pokemonName.id = isLeft ? 'enemy-pokemon-name' : 'player-pokemon-name';
    pokemonName.textContent = pokedex[pokemon.pokedexId].name;
    pokemonStats.appendChild(pokemonName);

    const pokemonLevelAndType = document.createElement('div');
    pokemonLevelAndType.className = 'duel-enemy-pokemon-level-and-type';
    pokemonLevelAndType.id = isLeft ? 'enemy-pokemon-level-and-type' : 'player-pokemon-level-and-type';
    pokemonStats.appendChild(pokemonLevelAndType);

    const pokemonLevel = document.createElement('div');
    pokemonLevel.className = 'duel-enemy-pokemon-level';
    pokemonLevel.textContent = "niv. " + pokemon.level;
    pokemonLevel.id = isLeft ? 'enemy-pokemon-level' : 'player-pokemon-level';
    pokemonLevelAndType.appendChild(pokemonLevel);

    const typeChip = createTypeChipFromPokedexIDDuel(pokemon.pokedexId, isLeft);
    pokemonLevelAndType.appendChild(typeChip);

    const healthBar = document.createElement('div');
    healthBar.classList.add('duel-health-bar');
    const healthBarFilling = document.createElement('div');
    healthBarFilling.classList.add('duel-health-bar-filling');
    healthBarFilling.style.width = getHPbarSize(pokemon);
    healthBarFilling.id = isLeft ? 'enemy-pokemon-health' : 'player-pokemon-health';
    healthBarFilling.style.backgroundColor = getHPbarColor(pokemon);
    healthBar.appendChild(healthBarFilling);
    pokemonStats.appendChild(healthBar);

    if (isLeft) {
        pokemonBar.appendChild(pokemonImg);
        pokemonBar.appendChild(pokemonStats);
    } else {
        pokemonBar.appendChild(pokemonStats);
        pokemonBar.appendChild(pokemonImg);
    }

    return pokemonBar;
}

function fillEnemyContainer(parentDiv, enemy) {
    const trainer = document.createElement('div');
    trainer.className = 'duel-enemy-trainer';

    const trainerImg = document.createElement('img');
    trainerImg.src = enemy.trainer.sprite;
    trainerImg.className = 'duel-enemy-trainer-img';
    trainer.appendChild(trainerImg);

    const trainerName = document.createElement('div');
    trainerName.className = 'duel-enemy-trainer-name';
    trainerName.textContent = "Duel contre " + enemy.trainer.name;
    trainer.appendChild(trainerName);

    const teamView = getPokemonBar(enemy.team, enemy.team[0], true);

    parentDiv.appendChild(trainer);
    parentDiv.appendChild(teamView);
}

function fillChoicesContainer(parentDiv) {
    const ownTypeAttackLine = document.createElement('div');
    ownTypeAttackLine.className = 'duel-button-line-own';
    ownTypeAttackLine.classList.add("player-turn-only");

    const ownTypeAttack = document.createElement('div');
    ownTypeAttack.className = 'duel-button';
    ownTypeAttack.id = "duel-own-type-button";
    ownTypeAttack.textContent = "-";


    const ownTypeAttackLogo = document.createElement('img');
    ownTypeAttackLogo.className = 'duel-button-own-logo';
    ownTypeAttackLogo.id = "duel-button-own-logo";
    ownTypeAttackLogo.src = "-";

    const randomTypeAttackLine = document.createElement('div');
    randomTypeAttackLine.className = 'duel-button-line-own';
    randomTypeAttackLine.classList.add("player-turn-only");

    const randomTypeAttack = document.createElement('div');
    randomTypeAttack.className = 'duel-button';
    randomTypeAttack.id = "duel-random-type-button";
    randomTypeAttack.textContent = "-";

    const randomTypeAttackLogo = document.createElement('img');
    randomTypeAttackLogo.className = 'duel-random-type-button';
    randomTypeAttackLogo.id = "duel-button-random-logo";
    randomTypeAttackLogo.src = "-";

    const changePokemonButton = document.createElement('div');
    changePokemonButton.className = 'change-pokemon';
    changePokemonButton.id = 'switch-pokemon';
    changePokemonButton.textContent = "Changer de Pokémon";
    changePokemonButton.classList.add("player-turn-only");

    ownTypeAttackLine.appendChild(ownTypeAttack);
    ownTypeAttackLine.appendChild(ownTypeAttackLogo);
    randomTypeAttackLine.appendChild(randomTypeAttack);
    randomTypeAttackLine.appendChild(randomTypeAttackLogo);
    parentDiv.appendChild(ownTypeAttackLine);
    parentDiv.appendChild(randomTypeAttackLine);
    parentDiv.appendChild(changePokemonButton);
}

function fillPlayerContainer(parentDiv) {
    const player = document.createElement('div');
    player.className = 'duel-player';

    const playerImg = document.createElement('img');
    playerImg.src = trainer_card.sprite;
    playerImg.className = 'duel-player-img';
    player.appendChild(playerImg);

    const playerName = document.createElement('div');
    playerName.className = 'duel-player-name';
    playerName.textContent = trainer_card.name;
    player.appendChild(playerName);

    const teamView = getPokemonBar(playerTeam, playerTeam[0], false);

    parentDiv.appendChild(teamView);
    parentDiv.appendChild(player);
}

function generateBaseHTMLStructure(enemy) {
    document.body.style.overflow = 'hidden'; // Désactive le scroll

    const card = document.createElement('div');
    card.className = 'duel-card';
    card.id = 'duel-card';

    const enemyContainer = document.createElement('div');
    enemyContainer.className = 'duel-enemy-container';
    const choicesContainer = document.createElement('div');
    choicesContainer.className = 'duel-choices-container';
    choicesContainer.id = 'duel-choices-container';
    const playerContainer = document.createElement('div');
    playerContainer.className = 'duel-player-container';

    fillEnemyContainer(enemyContainer, enemy);
    fillChoicesContainer(choicesContainer);
    fillPlayerContainer(playerContainer);

    card.appendChild(enemyContainer);
    card.appendChild(choicesContainer);
    card.appendChild(playerContainer);

    document.getElementById('body').appendChild(card);
}

function generateDuel(trainer) {
    const enemy = {
        trainer: trainer,
        team: getPokemonsOfTrainer(trainer)
    }
    playerTeam = getPlayerTeam();

    generateBaseHTMLStructure(enemy);
    gameLoop(enemy);
}

function areBothTeamValid(enemy) {
    let enemyTeamKOs = enemy.team.filter(value => value.hp <= 0).length;
    let playerTeamKOs = playerTeam.filter(value => value.hp <= 0).length;

    if (enemyTeamKOs == enemy.team.length || playerTeamKOs == playerTeam.length)
        return false;
    else
        return true;
}

function updateTeamIcons(enemy) {
    const enemyPokemonTeamIcons = document.getElementById("duel-enemy-team-icons");
    let enemyAvailablePokemon = enemy.team.filter(value => value.hp > 0).length;
    Array.from(enemyPokemonTeamIcons.children).forEach(teamIcon => {
        if (enemyAvailablePokemon <= 0)
            teamIcon.style.opacity = "50%";
        enemyAvailablePokemon--;
    });

    const playerPokemonTeamIcons = document.getElementById("duel-player-team-icons");
    let playerAvailablePokemon = playerTeam.filter(value => value.hp > 0).length;
    Array.from(playerPokemonTeamIcons.children).forEach(teamIcon => {
        if (playerAvailablePokemon <= 0)
            teamIcon.style.opacity = "50%";
        playerAvailablePokemon--;
    });
}

function updateDuelUi(enemy) {
    // ENEMY UI
    const enemyPokemonSprite = document.getElementById("enemy-pokemon-sprite");
    enemyPokemonSprite.src = enemy.team[0].sprite;

    const enemyPokemonName = document.getElementById("enemy-pokemon-name");
    enemyPokemonName.textContent = pokedex[enemy.team[0].pokedexId].name;

    const enemyPokemonLevel = document.getElementById("enemy-pokemon-level");
    enemyPokemonLevel.textContent = "niv. " + enemy.team[0].level;

    const enemyPokemonLevelAndType = document.getElementById("enemy-pokemon-level-and-type");
    let enemyPokemonType = document.getElementById("enemy-pokemon-type");
    enemyPokemonType.remove();
    enemyPokemonType = createTypeChipFromPokedexIDDuel(enemy.team[0].pokedexId, true);
    enemyPokemonLevelAndType.appendChild(enemyPokemonType);

    const enemyPokemonHealth = document.getElementById("enemy-pokemon-health");
    enemyPokemonHealth.style.width = getHPbarSize(enemy.team[0]);
    enemyPokemonHealth.style.backgroundColor = getHPbarColor(enemy.team[0]);  

    // PLAYER UI
    const playerPokemonSprite = document.getElementById("player-pokemon-sprite");
    playerPokemonSprite.src = playerTeam[0].sprite;

    const playerPokemonName = document.getElementById("player-pokemon-name");
    playerPokemonName.textContent = pokedex[playerTeam[0].pokedexId].name;

    const playerPokemonLevel = document.getElementById("player-pokemon-level");
    playerPokemonLevel.textContent = "niv. " + playerTeam[0].level;

    const playerPokemonLevelAndType = document.getElementById("player-pokemon-level-and-type");
    let playerPokemonType = document.getElementById("player-pokemon-type");
    playerPokemonType.remove();
    playerPokemonType = createTypeChipFromPokedexIDDuel(playerTeam[0].pokedexId, false);
    playerPokemonLevelAndType.appendChild(playerPokemonType);

    const playerPokemonHealth = document.getElementById("player-pokemon-health");
    playerPokemonHealth.style.width = getHPbarSize(playerTeam[0]);
    playerPokemonHealth.style.backgroundColor = getHPbarColor(playerTeam[0]);  
}

function duelIsOver(enemy, didPlayerWin) {
    showNotification(didPlayerWin ? "Vous avez gagné !" : "Vous avez été vaincu(e)", "VALIDATION");
    const duelCard = document.getElementById("duel-card");
    updateOwnedPokemonHpAfterDuel();
    duelCard.remove();

    if (didPlayerWin) {
        playerTeam.forEach(pokemon => {
            levelUpPokemon(pokemon.uuid);
            pokemon.hasLeveledUp = true;
            pokemon.duelWon++;
        });
        enemy.trainer.rewards.forEach(reward => {
            addItemInInventory(reward.item, reward.quantity);
        });
    } else {
        let pokeIdOfLevelUp = Math.floor(Math.random() * playerTeam.length);
        levelUpPokemon(playerTeam[pokeIdOfLevelUp].uuid);
        playerTeam[pokeIdOfLevelUp].hasLeveledUp = true;
    }
    // display victory / defeat screen
}

function switchEnemyPokemon(enemy) {
    const koPokemon = enemy.team.shift();
    enemy.team.push(koPokemon);
}

function switchPlayerPokemon() {
    const koPokemon = playerTeam.shift();
    playerTeam.push(koPokemon);
}

async function makeEnemyTurn(enemy) {
    emptyButtonsChoices()
    let randomType = getRandomType(pokedex[playerTeam[0].pokedexId].type);
    const isRandomAttack = Math.floor(Math.random() * 5) === 0;
    let damages = 0;
    
    if (!isRandomAttack) {
        damages = getAttackDamage(enemy.team[0], playerTeam[0], false, null);
    } else {
        damages = getAttackDamage(enemy.team[0], playerTeam[0], true, randomType);
    }
    await attackPlayer(enemy, damages, isRandomAttack ? randomType : null);
    if (!areBothTeamValid(enemy)) {
        duelIsOver(enemy, false);
        return;
    }
    
    randomType = getRandomType(pokedex[playerTeam[0].pokedexId].type);
    showButtonsChoices(enemy, randomType);
}

async function makeAnimationAttack(isPlayer) {
    const element = document.getElementById(isPlayer ? "player-pokemon-bar" : "enemy-pokemon-bar");
    element.style.marginTop = isPlayer ? "-5rem" : "5rem";

    await runWithDelay(0.5);
    element.style.marginTop = "0rem";
}

function addFeedbackMessage(message) {
    const element = document.getElementById("duel-choices-container");
    let newMessage = document.createElement('div');
    newMessage.className = "feedback-message";
    newMessage.textContent = message;
    element.appendChild(newMessage);
}

async function displayFeedbackOfAttackEnemy(enemy, randomType) {
    let attackMessage = pokedex[enemy.team[0].pokedexId].name + " utilise ";
    attackMessage += getAttackNameByRarity(pokedex[enemy.team[0].pokedexId].rarity, randomType ? randomType : pokedex[enemy.team[0].pokedexId].type, !!randomType);
    addFeedbackMessage(attackMessage);

    let resultAttack = getAttackEfficiency(enemy.team[0], playerTeam[0], !!randomType, randomType);
    let resultMessage = "";

    switch(resultAttack) {
        case 0 :
            resultMessage = "Cela n'affecte pas " + pokedex[playerTeam[0].pokedexId].name;
            break;
        case 0.5 :
            resultMessage = "Ce n'est pas très efficace";
            break;
        case 2 :
            resultMessage = "C'est super efficace !";
            break;
    }
    if (resultAttack != 1) {
        await runWithDelay(0.8);
        addFeedbackMessage(resultMessage);
    }
}

async function displayFeedbackOfAttackPlayer(enemy, randomType) {
    let attackMessage = pokedex[playerTeam[0].pokedexId].name + " utilise ";
    attackMessage += getAttackNameByRarity(pokedex[playerTeam[0].pokedexId].rarity, randomType ? randomType : pokedex[playerTeam[0].pokedexId].type, !!randomType);
    addFeedbackMessage(attackMessage);

    let resultAttack = getAttackEfficiency(playerTeam[0], enemy.team[0], !!randomType, randomType);
    let resultMessage = "";

    switch(resultAttack) {
        case 0 :
            resultMessage = "Cela n'affecte pas le pokémon adverse";
            break;
        case 0.5 :
            resultMessage = "Ce n'est pas très efficace";
            break;
        case 2 :
            resultMessage = "C'est super efficace !";
            break;
    }
    if (resultAttack != 1) {
        await runWithDelay(0.8);
        addFeedbackMessage(resultMessage);
    }
}

async function attackPlayer(enemy, damages, randomType) {
    playerTeam[0].hp -= damages;

    makeAnimationAttack(false);
    await runWithDelay(1.5);
    updateDuelUi(enemy);
    hideButtonsChoices();
    displayFeedbackOfAttackEnemy(enemy, randomType);

    if (playerTeam[0].hp <= 0 && areBothTeamValid(enemy)) {
        await runWithDelay(1.6);
        addFeedbackMessage(pokedex[playerTeam[0].pokedexId].name + " est K.O.");
        switchPlayerPokemon();
        await runWithDelay(3);
        updateDuelUi(enemy);
        updateTeamIcons(enemy);
        await runWithDelay(1);
    } else if (!areBothTeamValid(enemy)) {
        return;
    } else {
        await runWithDelay(2);
        updateDuelUi(enemy);
    }
}

async function attackEnemy(enemy, damages, randomType) {
    enemy.team[0].hp -= damages;

    makeAnimationAttack(true);
    await runWithDelay(1.5);
    updateDuelUi(enemy);
    hideButtonsChoices();
    displayFeedbackOfAttackPlayer(enemy, randomType);
    
    if (enemy.team[0].hp <= 0 && areBothTeamValid(enemy)) {
        await runWithDelay(1.6);
        addFeedbackMessage("Le " + pokedex[enemy.team[0].pokedexId].name + " adverse est K.O.");
        switchEnemyPokemon(enemy);
        await runWithDelay(3);
        updateTeamIcons(enemy);
        updateDuelUi(enemy);
        await runWithDelay(1);
        makeEnemyTurn(enemy);
    } else if (!areBothTeamValid(enemy)) {
        duelIsOver(enemy, true);
        return;
    } else {
        await runWithDelay(2);
        updateDuelUi(enemy);
        makeEnemyTurn(enemy);
    }
}

function showButtonsChoices(enemy, randomType) {
    const element = document.getElementById("duel-choices-container");
    Array.from(element.children).forEach(child => {
        if (!child.classList.contains('player-turn-only'))
            child.style.display = "none";
        else
            child.style.display = "flex";
    });

    let ownTypeButton = document.getElementById("duel-own-type-button");
    removeAllEventListeners(ownTypeButton);
    ownTypeButton = document.getElementById("duel-own-type-button");
    ownTypeButton.textContent = getAttackNameByRarity(pokedex[playerTeam[0].pokedexId].rarity, pokedex[playerTeam[0].pokedexId].type, false);
    ownTypeButton.addEventListener('click', () => {
        hideButtonsChoices();
        let damages = getAttackDamage(playerTeam[0], enemy.team[0], false, null);
        attackEnemy(enemy, damages, null);
    });

    const ownTypeLogo = document.getElementById("duel-button-own-logo");
    ownTypeLogo.src = "sprites/types/" + pokedex[playerTeam[0].pokedexId].type.name + ".png";

    let randomTypeButton = document.getElementById("duel-random-type-button");
    removeAllEventListeners(randomTypeButton);
    randomTypeButton = document.getElementById("duel-random-type-button");
    randomTypeButton.textContent = getAttackNameByRarity(null, randomType, true);
    randomTypeButton.addEventListener('click', () => {
        hideButtonsChoices();
        let damages = getAttackDamage(playerTeam[0], enemy.team[0], true, randomType);
        attackEnemy(enemy, damages, randomType);
    });

    const randomTypeLogo = document.getElementById("duel-button-random-logo");
    randomTypeLogo.src = "sprites/types/" + randomType.name + ".png";

    let switchPokemonButton = document.getElementById("switch-pokemon");
    switchPokemonButton = removeAllEventListeners(switchPokemonButton);
    switchPokemonButton.addEventListener('click', () => {
        generateSwitchPokemonPopup(enemy);
    });
}

function hideButtonsChoices() {
    const element = document.getElementById("duel-choices-container");
    Array.from(element.children).forEach(child => {
        if (child.classList.contains('player-turn-only'))
            child.style.display = "none";
    });
}

function emptyButtonsChoices() {
    const element = document.getElementById("duel-choices-container");
    Array.from(element.children).forEach(child => {
        if (child.classList.contains('player-turn-only'))
            child.style.display = "none";
        else
            child.remove();
    });
}

function gameLoop(enemy) {
    let randomType = getRandomType(pokedex[playerTeam[0].pokedexId].type);
    showButtonsChoices(enemy, randomType);
}