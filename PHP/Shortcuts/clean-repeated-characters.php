<?php /* Clean Repeated Characters - Version 1.0.0
        
        Cleans repeated character lines in HTML content by shortening them 
        (like underscores, dashes, equal signs, etc.) that can break mobile layouts.
    
        Let me know if you have any questions.
                                        -- Jasiel Chao
    */
    function cleanRepeatedCharacters($string, $min_repeats = 20, $max_repeats = 10) {
        return preg_replace_callback(
            '/(.)\1{'.($min_repeats - 1).',}/', // Matches any character repeated at least $min_repeats times
            function ($matches) use ($max_repeats) {
                return str_repeat($matches[1], $max_repeats); // Reduces the repetition to $max_repeats times
            },
            $string
        );
    }
    
    /* Example usage
    
    $text = "Heeellooo wooorld!!!";
    echo cleanRepeatedCharacters($text, 3, 2); // Output: "Heelloo woorld!!"
    */