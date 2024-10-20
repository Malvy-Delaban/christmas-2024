function generateTrainerImgPopup() {
    document.body.style.overflow = 'hidden'; // Désactive le scroll
    
    // Créer les éléments principaux
    const popupBackgroundContainer = document.createElement('div');
    popupBackgroundContainer.classList.add('popup-background');

    // Créer les éléments principaux
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-trainer-image');

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content-trainer-image');

    const titleLine = document.createElement('div');
    titleLine.classList.add('popup-title-line');

    const title = document.createElement('p');
    title.textContent = 'Choisissez une image';
    
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

    // Wrapper de la liste des images
    const imageListWrapper = document.createElement('div');
    imageListWrapper.classList.add('popup-content-wrapper');
    titleLine.appendChild(imageListWrapper);

    // Contenu de la liste des Pokémon
    const imageList = document.createElement('div');
    imageList.classList.add('popup-content-trainer-image-list');

    for (let i = 1; i < 79; i++) {
        const singleImg = document.createElement('img');
        const src = "sprites/trainers/trainer_" + i + ".png";
        singleImg.src = src
        singleImg.classList.add('popup-content-trainer-single-image');

        singleImg.addEventListener('click', () => {
            trainer_card.sprite = src;
            updateTrainerCard();
            const updateTrainerImgEvent = new CustomEvent("updateTrainerImgEvent", {});
            document.dispatchEvent(updateTrainerImgEvent);
            popupBackgroundContainer.remove(); // Ferme le popup en supprimant l'élément
        });
        
        imageList.appendChild(singleImg);
    }

    imageListWrapper.appendChild(imageList);
    popupContent.appendChild(titleLine);
    popupContent.appendChild(imageListWrapper);
    popupContainer.appendChild(popupContent);
    popupBackgroundContainer.appendChild(popupContainer);

    // Ajouter le popup à la page
    document.body.appendChild(popupBackgroundContainer);
}