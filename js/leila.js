// Gestion du clic sur la citation
let laCitation = document.querySelector('.citation blockquote');
console.log("Le bloc HTML qui contient la citation : ", laCitation);
if(laCitation !== null) {
    // Associer l'écouteur d'événement 'clic'
    laCitation.addEventListener('click', changerCitation);
}

/**
 * Requiert une nouvelle citation aléatoire au serveur.
 * 
 */
function changerCitation() {
    console.log("On change la citation (comment ????)");
    // ON NE VEUT PAS FAIRE ÇA :
    // Requête SYNCHRONE qui demande au browser de reloader la page (c'est à dire
    // refaire la requête HTTP au serveur : ce n'est pas ce que l'on
    // veut !!!!) 
    // window.location.reload();

    // ON VEUT PLUTÔT FAIRE ÇA : 
    // Chercher avec JS une nouvelle citation en invoquant un script au serveur
    // Utiliser l'API "fetch" de JavaScript
}