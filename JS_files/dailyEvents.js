function isToday(dateString) {
    const today = new Date();
    let date = new Date(dateString);

    if (!date)
        return false;
    
    // Créer un format pour la date en France (fuseau horaire Europe/Paris)
    const frenchDateFormat = new Intl.DateTimeFormat('fr-FR', { 
        timeZone: 'Europe/Paris', 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit'
    });

    // Formater les deux dates (celle à vérifier et aujourd'hui)
    const formattedDate = frenchDateFormat.format(date);
    const formattedToday = frenchDateFormat.format(today);

    return formattedDate === formattedToday;
}

function HealPokemons() {
    Object.keys(owned_pokemons).forEach(key => {
        owned_pokemons[key].hp = owned_pokemons[key].max_hp;
    });
}

function DailyEvents() {
    if (!isToday(trainer_card.last_loading)) {
        console.log("Premier lancement du jour");
        HealPokemons();
    }

    trainer_card.last_loading = new Date();
    updateTrainerCard();
}