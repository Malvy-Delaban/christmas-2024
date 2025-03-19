function isSameDay(date1, date2) {
    if (!date1 || !date2)
        return false;
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
}

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

    // Obtenir la date actuelle (sans l'heure) pour comparer avec la date donnée
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Réinitialise l'heure à 00:00:00.000

    // Réinitialiser l'heure de la date donnée
    date.setHours(0, 0, 0, 0);

    // Comparer directement les timestamps
    return date.getTime() <= now.getTime();
}

function isPastToday(dateString) {
    const date = new Date(dateString);

    // Obtenir la date actuelle à minuit (sans l'heure)
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    // Réinitialiser l'heure de la date donnée
    date.setHours(0, 0, 0, 0);

    // Comparer directement les timestamps
    return date.getTime() < now.getTime();
}

function isInXDays(dateString, x) {
    const targetDate = new Date(dateString);

    // Get the current date at midnight
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    // Set the target date to midnight
    targetDate.setHours(0, 0, 0, 0);

    // Calculate the difference in days
    const diffInDays = (targetDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);

    // Check if the difference matches x
    return diffInDays === x;
}

function getDateInXDay(x) {
    // Obtenir la date actuelle
    const now = new Date();

    // Ajouter ou soustraire x jours
    now.setDate(now.getDate() + x);

    // Réinitialiser l'heure à minuit
    now.setHours(0, 0, 0, 0);

    return now;
}

function isDatePastOrWithinNext3Days(dateString) {
    const date = new Date(dateString);
    
    // Obtenir la date actuelle et la date dans 3 jours
    const now = new Date();
    const threeDaysFromNow = new Date();
    threeDaysFromNow.setDate(now.getDate() + 3);
    
    // Comparer les valeurs de temps (timestamps)    
    return date.getTime() <= threeDaysFromNow.getTime();
}

function isDateWithinNext3Days(dateString) {
    const date = new Date(dateString);

    // Obtenir la date actuelle et les limites des 3 prochains jours
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Réinitialiser à minuit

    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);

    const threeDaysFromNow = new Date(now);
    threeDaysFromNow.setDate(now.getDate() + 3);

    // Vérifier si la date est entre demain et dans 3 jours inclus
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

    GenerateRoutesRandomly();
}