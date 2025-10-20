<?php
/**
 * Gets the YouTube video ID from its URL, supporting all possible variants.
 *
 * @param string $url The full video URL.
 * @return string|null The 11-character video ID or null if not found.
 */
function getYoutubeVideoId(string $url): ?string {
    $videoId = null;

    // Pattern 1: Handles short URLs (youtu.be) and long URLs (watch?v=, embed/, etc.).
    // Searches for the 11-character ID.
    $pattern = '/(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([a-zA-Z0-9_-]{11})(?:[?&].*)?$/i';

    if (preg_match($pattern, $url, $matches)) {
        // The video ID is captured in group 1 of the regular expression.
        $videoId = $matches[1];
    } 
    // Pattern 2: Handles cases where the ID is passed as a 'v' parameter (e.g., inside a playlist link).
    else {
        $query = parse_url($url, PHP_URL_QUERY);
        if ($query) {
            parse_str($query, $params);
            // Checks if the 'v' parameter exists and if it is a valid 11-character ID.
            if (isset($params['v']) && preg_match('/^[a-zA-Z0-9_-]{11}$/', $params['v'])) {
                $videoId = $params['v'];
            }
        }
    }

    return $videoId;
}

/* Examples of use:

    $url1 = 'https://youtu.be/db34Q7m7wk4?si=tfy5st2Di8VqhANa';
    $url2 = 'https://youtu.be/db34Q7m7wk4?si=nykSA5ETFRNC8LdI&t=16';
    $url3 = 'https://www.youtube.com/watch?v=db34Q7m7wk4';
    $url4 = 'https://www.youtube.com/embed/db34Q7m7wk4';
    $url5 = 'http://youtube.com/v/db34Q7m7wk4';

    echo "URL 1 ID: " . getYoutubeVideoId($url1) . "\n";
    echo "URL 2 ID: " . getYoutubeVideoId($url2) . "\n";
    echo "URL 3 ID: " . getYoutubeVideoId($url3) . "\n";
    echo "URL 4 ID: " . getYoutubeVideoId($url4) . "\n";
    echo "URL 5 ID: " . getYoutubeVideoId($url5) . "\n";
*/
?>
