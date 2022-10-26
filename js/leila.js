// Gestion du clic sur la citation
let laCitation = document.querySelector('.citation blockquote');

if(laCitation !== null) {
    // Associer l'écouteur d'événement 'clic'
    laCitation.addEventListener('click', changerCitation);
}

/**
 * Requiert une nouvelle citation aléatoire au serveur.
 * 
 */
async function changerCitation() {
    // Étape 1 : chercher avec JS une nouvelle citation en invoquant un 
    // script au serveur : 
    // On va utiliser l'API 'Fetch'
    // Docs : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    
    // 1a : réponse du serveur
    let reponse = await fetch("_ajax_citation.php");
    console.log("La réponse de la fonction fetch() est : ", reponse);
    // 1b : extraire le contenu JSON de la réponse
    let citationJson = await reponse.json();
    console.log("Le contenu JSON dans la réponse de la fonction fetch() : ", citationJson);

    // Étape 2 : une fois que j'ai la citation, l'intégrer dans la page HTML
    // pour remplacer la citation actuelle : 


}