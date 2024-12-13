<?php /* Cleant Text Function - Version 1.0.1
        
        Useful Function to clean the WordPress or MLS dirty text. 

            How to use it? Here is a practical example:
                <?php echo asnet_cleanText($muh_vessel->Description); ?>

            Where find a practical example? 
                In the AYS yacht-detail-rds.php template

        Let me know if you have any questions.
                                        -- Jasiel Chao
        
    */

function asnet_cleanText($dirtyText) {
    // Remove style attributes, <br> tags, and &nbsp;
    $cleanText = preg_replace(
        array(
            '/ style=("|\')(.*?)("|\')/',   // Remove style attributes
            '/<br\s*\/?>/i',                // Remove all <br> variations
            '/&nbsp;/i',                     // Remove &nbsp;
            '/<p>\s*<\/p>/'                  // Remove empty <p> tags
        ), 
        '', 
        $dirtyText
    );
    
    // Convert text inside <h1>, <h2>, <h3> tags to capitalize
    $cleanText = preg_replace_callback(
        '/<h[1-3]>(.*?)<\/h[1-3]>/i', // Match <h1>, <h2>, and <h3> tags
        function($matches) {
            return ucfirst(strtolower($matches[0])); // Convert entire matched tag and content to capitalize
        },
        $cleanText
    );

    return $cleanText;
}

