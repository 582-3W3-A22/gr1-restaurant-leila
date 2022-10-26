<?php
    // Script PHP invoqué par la méthode "Ajax" (c'est à dire par l'entremise de 
    // JavaScript et non pas par le navigateur Web) 
    // Retourne une seule citation aléatoire (en format JSON)
    
    // Étape 1 : on inclut notre librairie de fonction
    include('lib/commun.lib.php');
    
    // Étape 2 : on utilise la fonction que nous avions déjà écrite pour obtenir
    // une citation aléatoire.
    $citation = obtenirCitationAleatoire('menu', 'fr');
    // TODO : trouver une façon de rendre dynamique la section ('menu' ou 'vins') 
    // et la langue ('fr', etc.)

    // Étape 3 : on produit la réponse du script (echo) mais auparavant on le 
    // convertit au format JSON parceque c'est le plus simple à gérer en 
    // JavaScript
    echo json_encode($citation);
?>