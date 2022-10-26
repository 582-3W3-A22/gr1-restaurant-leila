<?php
    // Retourner une seule citation aléatoire (en format JSON)
    include('lib/commun.lib.php');

    $citation = obtenirCitationAleatoire('menu', 'fr');

    echo json_encode($citation);
?>