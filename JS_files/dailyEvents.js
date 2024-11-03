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

function isPastTodayOrToday(dateString) {
    const date = new Date(dateString);

    // Obtenir la date actuelle dans le fuseau horaire Europe/Paris
    const now = new Date();
    const frenchDateFormat = new Intl.DateTimeFormat('fr-FR', { 
        timeZone: 'Europe/Paris', 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit'
    });

    // Formater les dates (celle passée en paramètre et celle de l'heure actuelle)
    const formattedDate = frenchDateFormat.format(date);
    const formattedNow = frenchDateFormat.format(now);

    // Vérifier si la date est dans le passé ou aujourd'hui
    return formattedDate <= formattedNow;
}

function isPastToday(dateString) {
    const date = new Date(dateString);

    // Obtenir la date actuelle dans le fuseau horaire Europe/Paris
    const now = new Date();
    const frenchDateFormat = new Intl.DateTimeFormat('fr-FR', { 
        timeZone: 'Europe/Paris', 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit'
    });

    // Formater les dates
    const formattedDate = frenchDateFormat.format(date);
    const formattedNow = frenchDateFormat.format(now);

    // Comparer les deux dates en utilisant les dates formatées
    return formattedDate < formattedNow;
}

function isDatePastOrWithinNext3Days(dateString) {
    const date = new Date(dateString);
    
    // Obtenir la date actuelle et la date dans 3 jours dans le fuseau horaire Europe/Paris
    const now = new Date();
    const threeDaysFromNow = new Date(now);
    threeDaysFromNow.setDate(now.getDate() + 3);

    const frenchDateFormat = new Intl.DateTimeFormat('fr-FR', {
        timeZone: 'Europe/Paris',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    // Formater les dates pour la comparaison
    const formattedDate = frenchDateFormat.format(date);
    const formattedNow = frenchDateFormat.format(now);
    const formattedThreeDaysFromNow = frenchDateFormat.format(threeDaysFromNow);

    return formattedDate <= formattedThreeDaysFromNow;
}

function isDateWithinNext3Days(dateString) {
    const date = new Date(dateString);
    
    // Obtenir la date actuelle et les dates de demain et dans 3 jours dans le fuseau horaire Europe/Paris
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);

    const threeDaysFromNow = new Date(now);
    threeDaysFromNow.setDate(now.getDate() + 3);

    const frenchDateFormat = new Intl.DateTimeFormat('fr-FR', {
        timeZone: 'Europe/Paris',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    // Formater les dates pour la comparaison
    const formattedDate = frenchDateFormat.format(date);
    const formattedTomorrow = frenchDateFormat.format(tomorrow);
    const formattedThreeDaysFromNow = frenchDateFormat.format(threeDaysFromNow);

    // Vérifier si la date est entre demain et dans 3 jours (inclus)
    return formattedDate >= formattedTomorrow && formattedDate <= formattedThreeDaysFromNow;
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