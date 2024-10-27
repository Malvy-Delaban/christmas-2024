function getPokemonBar(team, pokemon, isLeft) {
    const pokemonBar = document.createElement('div');
    pokemonBar.className = "pokemon-bar";

    const pokemonImg = document.createElement('img');
    pokemonImg.src = pokemon.sprite;
    pokemonImg.className = 'duel-enemy-pokemon-img';

    const pokemonStats = document.createElement('div');
    pokemonStats.src = pokemon.sprite;
    pokemonStats.className = 'duel-enemy-pokemon-stats';

    const teamIcons = document.createElement('div');
    teamIcons.className = 'duel-enemy-team-icons';
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
    pokemonName.textContent = pokedex[pokemon.pokedexId].name;
    pokemonStats.appendChild(pokemonName);

    const pokemonLevelAndType = document.createElement('div');
    pokemonLevelAndType.className = 'duel-enemy-pokemon-level-and-type';
    pokemonStats.appendChild(pokemonLevelAndType);

    const pokemonLevel = document.createElement('div');
    pokemonLevel.className = 'duel-enemy-pokemon-level';
    pokemonLevel.textContent = "niv. " + pokemon.level;
    pokemonLevelAndType.appendChild(pokemonLevel);

    const typeChip = createTypeChipFromPokedexID(pokemon.pokedexId);
    pokemonLevelAndType.appendChild(typeChip);

    const healthBar = document.createElement('div');
    healthBar.classList.add('duel-health-bar');
    const healthBarFilling = document.createElement('div');
    healthBarFilling.classList.add('duel-health-bar-filling');
    healthBarFilling.style.width = getHPbarSize(pokemon);
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

function fillChoicesContainer(parentDiv, team) {
    const randomType = getRandomType(pokedex[team[0].pokedexId].type);

    const ownTypeAttackLine = document.createElement('div');
    ownTypeAttackLine.className = 'duel-button-line-own';

    const ownTypeAttack = document.createElement('div');
    ownTypeAttack.className = 'duel-button';
    ownTypeAttack.textContent = getAttackNameByRarity(pokedex[team[0].pokedexId].rarity, pokedex[team[0].pokedexId].type, false);

    const ownTypeAttackLogo = document.createElement('img');
    ownTypeAttackLogo.className = 'duel-button-own-logo';
    ownTypeAttackLogo.src = "sprites/types/" + pokedex[team[0].pokedexId].type.name + ".png";

    const randomTypeAttackLine = document.createElement('div');
    randomTypeAttackLine.className = 'duel-button-line-own';

    const randomTypeAttack = document.createElement('div');
    randomTypeAttack.className = 'duel-button';
    randomTypeAttack.textContent = getAttackNameByRarity(null, randomType, true);

    const randomTypeAttackLogo = document.createElement('img');
    randomTypeAttackLogo.className = 'duel-button-own-logo';
    randomTypeAttackLogo.src = "sprites/types/" + randomType.name + ".png";

    const changePokemonButton = document.createElement('div');
    changePokemonButton.className = 'change-pokemon';
    changePokemonButton.textContent = "Changer de Pokémon";

    ownTypeAttackLine.appendChild(ownTypeAttack);
    ownTypeAttackLine.appendChild(ownTypeAttackLogo);
    randomTypeAttackLine.appendChild(randomTypeAttack);
    randomTypeAttackLine.appendChild(randomTypeAttackLogo);
    parentDiv.appendChild(ownTypeAttackLine);
    parentDiv.appendChild(randomTypeAttackLine);
    parentDiv.appendChild(changePokemonButton);
}

function fillPlayerContainer(parentDiv, team) {
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

    const teamView = getPokemonBar(team, team[0], false);

    parentDiv.appendChild(teamView);
    parentDiv.appendChild(player);
    
}

function generateBaseHTMLStructure(enemy, playerTeam) {
    document.body.style.overflow = 'hidden'; // Désactive le scroll

    const card = document.createElement('div');
    card.className = 'duel-card';

    const enemyContainer = document.createElement('div');
    enemyContainer.className = 'duel-enemy-container';
    const choicesContainer = document.createElement('div');
    choicesContainer.className = 'duel-choices-container';
    const playerContainer = document.createElement('div');
    playerContainer.className = 'duel-player-container';

    fillEnemyContainer(enemyContainer, enemy);
    fillChoicesContainer(choicesContainer, playerTeam);
    fillPlayerContainer(playerContainer, playerTeam);

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
    const playerTeam = getPlayerTeam();

    generateBaseHTMLStructure(enemy, playerTeam);
}