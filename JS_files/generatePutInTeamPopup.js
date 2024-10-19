function generatePutInTeamPopup(pokemon) {
    // Créer les éléments principaux
    const popupBackgroundContainer = document.createElement('div');
    popupBackgroundContainer.classList.add('popup-background');

    // Créer les éléments principaux
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-put-in-team-detail');

    const popupContent = document.createElement('div');
    popupContent.classList.add('detail-your-pokemon-detail');

    const title = document.createElement('p');
    title.classList.add('popup-put-in-team-title');
    title.textContent = "Quel Pokémon retirer de l'équipe ?";
    
    const pokemonList = document.createElement('div');
    pokemonList.classList.add('popup-put-in-team-pokemon-list');

    let inTeam = getInTeamPokemons();

    for (let i = 0; i < inTeam.length; i++) {
        const pokemonDiv = document.createElement('div');
        pokemonDiv.classList.add('popup-put-in-team-pokemon-container');

        const pokemonImg = document.createElement('img');
        pokemonImg.src = inTeam[i].sprite;
        pokemonImg.alt = 'pokemon image';
        pokemonImg.className = 'popup-put-in-team-pokemon-img';

        const removeIcon = document.createElement('img');
        removeIcon.src = 'sprites/misc/cross_icon_bg.png';
        removeIcon.alt = 'remove button';
        removeIcon.className = 'popup-put-in-team-remove-img';

        removeIcon.addEventListener('click', function() {
            let oldTeamMember = owned_pokemons.find(poke => poke.uuid === inTeam[i].uuid);
            oldTeamMember.isInTeam = false
            let newTeamMember = owned_pokemons.find(poke => poke.uuid === pokemon.uuid);
            newTeamMember.isInTeam = true

            updateOwnedPokemons();
            updatePokemonDetailPopupIsInTeam(true);
            popupBackgroundContainer.remove();
        });

        pokemonDiv.appendChild(pokemonImg);
        pokemonDiv.appendChild(removeIcon);
        pokemonList.appendChild(pokemonDiv);
    }

    popupContent.appendChild(title);
    popupContent.appendChild(pokemonList);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);
    document.body.appendChild(popupBackgroundContainer);
}