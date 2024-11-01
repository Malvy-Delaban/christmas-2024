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

function isPastToday(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    return date < now;
}

function isDatePastOrWithinNext3Days(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const threeDaysFromNow = new Date(now);
    threeDaysFromNow.setDate(now.getDate() + 3);
  
    return date <= threeDaysFromNow;
}

function isDateWithinNext3Days(dateString) {
    const date = new Date(dateString);
    const now = new Date();
  
    // Add 1 day to the current date to exclude today
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
  
    // Add 3 days to the current date
    const threeDaysFromNow = new Date(now);
    threeDaysFromNow.setDate(now.getDate() + 3);
  
    // Check if the date is within the next 3 days only
    return date >= tomorrow && date <= threeDaysFromNow;
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