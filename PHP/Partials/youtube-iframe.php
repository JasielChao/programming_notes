<?php # Partial file to have a dynamic YouTube iframe with a lazy load

    # Get Parameter
    $youTube_videoId = isset($args['youTube_videoId']) ? $args['youTube_videoId'] : "";
    $youTube_videoTitle = isset($args['youTube_videoTitle']) ? 'the ' . $args['youTube_videoTitle'] : " a yacht in the sea";
?>


<div class="youtube-video-container">
    <iframe  width="560" height="315"
        title="Youtube video of <?php echo $youTube_videoTitle; ?>"
        id ="iframe-<?php echo $youTube_videoId;?>"
        data-video="https://www.youtube.com/embed/<?php echo $youTube_videoId;?>?playlist=<?php echo $youTube_videoId;?>&loop=1&autoplay=1&mute=1modestbranding=1"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>

<style>
    .youtube-video-container {
        position: relative;
        padding-bottom: 56.25%; /* Aspect ratio 16:9 */
        height: 0;
        overflow: hidden;
        max-width: 100%;
    }
    .youtube-video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>

<script defer>
    document.addEventListener('DOMContentLoaded', ()=>{

        /* Lazy YouTube Iframe  */
        let iframeLoaded_<?php echo $youTube_videoId; ?>= false;

        function lazyIframe_<?php echo $youTube_videoId; ?> (scroll, mouse){
            // Getting empty Iframe
            let deferIframe = document.getElementById('iframe-<?php echo $youTube_videoId;?>');

            if(deferIframe && iframeLoaded_<?php echo $youTube_videoId; ?>== false){

                //Get the data-video URL
                let videoSRC = deferIframe.getAttribute('data-video');
                // Set Iframe URL
                deferIframe.src = videoSRC;
                // Update variable
                iframeLoaded_<?php echo $youTube_videoId; ?>= true;
            }

            if(scroll){
                document.removeEventListener("scroll", lazyIframe_<?php echo $youTube_videoId; ?>);
            }

            if(mouse){
                document.removeEventListener("mousemove", lazyIframe_<?php echo $youTube_videoId; ?>);
            }
        }

        setTimeout(() => {
            lazyIframe_<?php echo $youTube_videoId; ?>();
        }, 9000);

        document.addEventListener("scroll",  lazyIframe_<?php echo $youTube_videoId; ?>);
        document.addEventListener("mousemove",  lazyIframe_<?php echo $youTube_videoId; ?>);
        /* Lazy YouTube Iframe Ends */
    })
</script>
