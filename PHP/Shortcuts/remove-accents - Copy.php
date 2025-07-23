<?php /* Get Excerpt - Version 1.0.0
        -- Jasiel Chao
    */

/* Cut String without cutting a word */
function cusodev_getExcerpt($string, $limit = 170) {
     // Remove <a> tags but keep their content
    $string = preg_replace('/<a\b[^>]*>(.*?)<\/a>/i', '$1', $string);

    // Allow certain HTML tags (e.g., <p>, <br>, <strong>, etc.)
    $allowed_tags = '<p><br><strong><em><ul><ol><li>';
    $string = strip_tags($string, $allowed_tags);

    // Remove extra whitespace
    $string = trim(preg_replace('/\s+/', ' ', $string));

    // Truncate without cutting words
    if (strlen(strip_tags($string)) > $limit) {
        $excerpt = mb_substr($string, 0, $limit);
        // Ensure we cut at the last space before the limit
        $excerpt = mb_substr($excerpt, 0, mb_strrpos($excerpt, ' '));
        $excerpt .= '...';
    } else {
        $excerpt = $string;
    }

    return $excerpt;
}
