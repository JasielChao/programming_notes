<?php /* Cleant Text Function - Version 1.0.4
        
        Useful Function to clean the WordPress or MLS dirty text. 

            How to use it? Here is a practical example:
                <?php echo asnet_cleanText($muh_vessel->Description); ?>

            Where find a practical example? 
                In the AYS yacht-detail-rds.php template

        Let me know if you have any questions.
                                        -- Jasiel Chao
        
    */

# Cleant Text Function - Version 1.0.4
function asnet_cleanText($dirtyText, $capitalize = false, $removeH1Tag = false) {
    // Remove style attributes, <br> tags, and &nbsp;
    $cleanText = preg_replace(
        array(
            '/ style=("|\')(.*?)("|\')/',   // Remove style attributes
            '/<br\s*\/?>/i',                // Remove all <br> variations
            '/&nbsp;/i',                    // Remove &nbsp;
            '/<p>\s*<\/p>/'                 // Remove empty <p> tags
        ), 
        '', 
        $dirtyText
    );
    
    // Replace <h1> tags (with any attributes) with <h2> tags if $removeH1Tag is true
    if ($removeH1Tag === true) {
        $cleanText = preg_replace('/<h1(.*?)>(.*?)<\/h1>/i', '<h2$1>$2</h2>', $cleanText);
    }
    
    if ($capitalize === true) {
        // Convert text inside <h1>, <h2>, <h3> tags to capitalize
        $cleanText = preg_replace_callback(
            '/<h[1-3]>(.*?)<\/h[1-3]>/i', // Match <h1>, <h2>, and <h3> tags
            function($matches) {
                // Keep the original tag but capitalize the content
                $tag_match = preg_match('/<h[1-3]>/i', $matches[0], $tag);
                $content = preg_replace('/<h[1-3]>(.*?)<\/h[1-3]>/i', '$1', $matches[0]);
                
                return $tag[0] . ucfirst(strtolower($content)) . str_replace('<', '</', $tag[0]);
            },
            $cleanText
        );
    }

    return $cleanText;
}