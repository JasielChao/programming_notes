<?php /* Remove Accents - Version 1.0.0
        -- Jasiel Chao
        
    */

function remove_accents($string) {
    // Mapping of accented vowels to unaccented ones
    $accents = [
        'á' => 'a',
        'é' => 'e',
        'í' => 'i',
        'ó' => 'o',
        'ú' => 'u',
        'Á' => 'A',
        'É' => 'E',
        'Í' => 'I',
        'Ó' => 'O',
        'Ú' => 'U',
    ];

    // Replace accented vowels
    return strtr($string, $accents);
}

// Example usage
$text = "Canción, Árbol, útil, país, corazón";
echo remove_accents($text); // Output: "Cancion, Arbol, util, pais, corazon"
