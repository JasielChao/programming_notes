<?php /* Clean Repeated Characters - Version 1.0.0
        
        Cleans repeated character lines in HTML content by either shortening them or replacing them entirely
        (like underscores, dashes, equal signs, etc.) that can break mobile layouts.

        Let me know if you have any questions.
                                        -- Jasiel Chao
    */
function cleanRepeatedCharacters($html, $options = []) {
    // Set default allowed tags
    $defaults = [
        'max_line_length' => 50,
        'allowed_tags' => ['p', 'span', 'strong', 'em', 'ul', 'li', 'div']
    ];
    
    // Merge user options with defaults
    $options = array_merge($defaults, $options);
    
    // Validate options
    if (!isset($options['max_line_length']) || !is_numeric($options['max_line_length']) || $options['max_line_length'] < 1) {
        throw new InvalidArgumentException('max_line_length must be a positive number');
    }
    
    if (isset($options['shortened_length']) && isset($options['replacement'])) {
        throw new InvalidArgumentException('Cannot specify both shortened_length and replacement - choose one method');
    }
    
    if (!isset($options['shortened_length']) && !isset($options['replacement'])) {
        throw new InvalidArgumentException('Must specify either shortened_length or replacement');
    }
    
    if (isset($options['shortened_length']) && 
        (!is_numeric($options['shortened_length']) || $options['shortened_length'] < 1)) {
        throw new InvalidArgumentException('shortened_length must be a positive number');
    }
    
    // The callback function that processes each match
    $processMatch = function($matches) use ($options) {
        $fullMatch = $matches[0];
        $openingTag = $matches[1];
        $prefix = $matches[3];  // Characters before the line
        $longLine = $matches[4]; // The actual long line
        $suffix = $matches[5];  // Characters after the line
        $closingTag = $matches[6];
        
        // If replacement is specified, return it
        if (isset($options['replacement'])) {
            return $options['replacement'];
        }
        
        // Otherwise shorten the line
        $shortenedLine = substr($longLine, 0, $options['shortened_length']);
        return $openingTag . $prefix . $shortenedLine . $suffix . $closingTag;
    };
    
    /**
     * Regular expression breakdown:
     * 1. (<(p|span|strong...)[^>]*>) - Opening tag (captured)
     * 2. ([^\w\s]*?) - Optional non-word characters before the line (captured)
     * 3. (([-_=*#~+])\3{X,}) - The long line of repeated chars (same character repeated X+ times)
     * 4. ([^\w\s]*?) - Optional non-word characters after the line (captured)
     * 5. (<\/\2>) - Closing tag matching the opening tag (captured)
     * 
     * Where X is (max_line_length - 1) because we capture the first character separately
     */
    $pattern = '/(<(['.implode('|', $options['allowed_tags']).'][^>]*>)([^\w\s]*?)'
        . '(([-_=*#~+])\5{'.($options['max_line_length']-1).',})([^\w\s]*?)(<\/\2>)/i';
    
    // Process the HTML with our callback function
    return preg_replace_callback($pattern, $processMatch, $html);
}

/* Example usages (use only one approach): */

// SHORTENING APPROACH
$BoatDescription = cleanRepeatedCharacters($BoatDescription, [
    'max_line_length' => 30,    // Lines longer than 30 chars will be processed
    'shortened_length' => 10,   // Will be shortened to 10 chars
    'allowed_tags' => ['p', 'span']
]);

// REPLACEMENT APPROACH
$BoatDescription = cleanRepeatedCharacters($BoatDescription, [
    'max_line_length' => 30,
    'replacement' => '<hr class="divider">',
    'allowed_tags' => ['p', 'div']
]);


// Specific example, this function would detect and remove the line: ?>
<p style="text-align: center;">
    <span style="font-size: 10pt;">
        <strong>___________________________________________________________________________</strong>
    </span>
</p>