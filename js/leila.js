// Gestion du clic sur la citation
let eltCitation = document.querySelector('.citation blockquote');

if(eltCitation !== null) {
    // Associer l'écouteur d'événement 'clic'
    eltCitation.addEventListener('click', changerCitation);
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
    
    // 1a : requête au serveur et capture de la réponse du serveur
    let reponse = await fetch("_ajax_citation.php");
    console.log("La réponse de la fonction fetch() est : ", reponse);
    // 1b : extraire le contenu JSON de la réponse du serveur
    let citationJson = await reponse.json();
    // Remarquez que la méthode json() retourne un objet JS représentant 
    // la chaîne JSON
    console.log("Le contenu JSON dans la réponse de la fonction fetch() : ", citationJson);

    // Étape 2 : une fois que j'ai la citation, l'intégrer dans la page HTML
    // pour remplacer la citation actuelle : 
    // 2a : Injecter le texte de la citation
    eltCitation.querySelector('.citation-texte').innerHTML = citationJson.texte;
    // 2b : Injecter l'auteur de la citation
    eltCitation.querySelector('cite').innerHTML ='- '+ citationJson.auteur;
}