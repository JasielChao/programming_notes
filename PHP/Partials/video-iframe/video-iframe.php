<?php
    // Get Parameter
    $iframe_id = isset($args['iframe_id ']) ? $args['iframe_id '] : '';
    $additional_classes = isset($args['additional_classes']) ? $args['additional_classes'] . ' ' : '';
    $vimeo_video_id = isset($args['vimeo_video_id']) ? $args['vimeo_video_id'] : false;
    $youtube_video_id = isset($args['youtube_video_id']) ? $args['youtube_video_id'] : false;
    $iframe_title = isset($args['iframe_title']) ? $args['iframe_title'] : "Iframe Video";
    $iframe_thumb = isset($args['iframe_thumb']) ? $args['iframe_thumb'] : false;
    $iframe_thumb_small = isset($args['iframe_thumb_small']) ? $args['iframe_thumb_small'] : false;
    $iframe_lazyload = isset($args['iframe_lazyload']) ? $args['iframe_lazyload'] : false;
    $iframe_link = isset($args['iframe_link']) ? $args['iframe_link'] : false;
    $iframe_link_url = "";
    if($iframe_link){
        if($vimeo_video_id){
            $iframe_link_url = "https://vimeo.com/" . $vimeo_video_id;
        } else if($youtube_video_id){
            $iframe_link_url = "https://www.youtube.com/watch?v=" . $youtube_video_id . "?amp;autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0";
        }
    }

?>

<div class="iframe-wrap <?php echo $additional_classes; ?>">
    <?php if($vimeo_video_id) : ?>
        <iframe id="<?php echo $iframe_id; ?>" class="iframe-video vimeo-video <?php echo ($iframe_lazyload) ? 'defer-iframe' : ''; ?>" title="<?php echo $iframe_title; ?>" <?php echo ($iframe_lazyload) ? 'src="" data-' : ''; ?>src="https://player.vimeo.com/video/<?php echo $vimeo_video_id; ?>?autoplay=1&amp;loop=1&amp;muted=1&amp;background=1&amp;t=100s" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    <?php elseif($youtube_video_id) : ?>
        <iframe id="<?php echo $iframe_id; ?>" class="iframe-video youtube-video <?php echo ($iframe_lazyload) ? 'defer-iframe' : ''; ?>" title="<?php echo $iframe_title; ?>" <?php echo ($iframe_lazyload) ? 'src="" data-' : ''; ?>src="https://www.youtube.com/embed/<?php echo $youtube_video_id; ?>?autoplay=1&mute=1&playlist=<?php echo $youtube_video_id; ?>&loop=1" width="640" height="360" frameborder="0" allow="autoplay" allowfullscreen></iframe>
    <?php endif; ?>
    
    <?php if($iframe_thumb) : ?>
        <picture>
            <?php if($iframe_thumb_small) : ?>
                <source media="(max-width:650px)" srcset="<?php echo $iframe_thumb_small;?>">
            <?php endif; ?>
            <img class="iframe-thumb" src="<?php echo $iframe_thumb;?>" alt="<?php echo ($iframe_title) ? $iframe_title : 'Iframe Thumb';?> "/>
        </picture>
    <?php endif; ?>

    <?php if($iframe_link) : ?>
        <a class="iframe-link" data-fancybox href="<?php echo $iframe_link_url; ?>"></a>
    <?php endif; ?>

</div>


<style>
    /* For Global Less styles */
    .iframe-wrap {
        position: relative;
        display: block;
        width: 100%;
        height: auto;
        min-height: 250px;
        padding-top: 50%;
        overflow: hidden;
        border-radius: 0;
        z-index: 0;

        &.full-screen {
            width: 100%;
            height: 100vh;
            padding-top: 0;
            border-radius: 0;

            iframe {
                width: 115%;
                height: 400%;
            }
        }

        iframe {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: block;
            width: 120%;
            height: 180%;
            z-index: -1;
        }

        .video-thumb, .iframe-thumb {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            opacity: 1;
            transition: opacity 1.5s ease-in-out;

            &.fade-out-thumb {
                opacity: 0;
            }
        }

        a.iframe-link {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
        }

        @media(max-width: @break-laptop){

            &.full-screen {
                iframe {
                    width: 125%;
                }
            }
        }

        @media(max-width: @break-laptop-s){

            &.full-screen {
                iframe {
                    width: 185vh;
                }
            }
            
            .video-thumb, .iframe-thumb {
                max-height: 100vh;
                max-width: 100vw;
            }
        }

        @media(max-width: @break-tablet){

            &.full-screen.full-screen-responsive {
                height: 60vh;
            }
        }

        @media(max-width: @break-phone){

            &.full-screen.full-screen-responsive {
                height: 45vh;
                min-height: 380px;
                max-height: 440px;
            }

            &.full-screen.no-video {
                height: 380px;
            }
        }
    }

</style>


<!--- For Global scripts --->
<script defer>
    document.addEventListener("DOMContentLoaded", ()=>{
        /* ******************************************************
            Lazy Load Iframes Logic 
        ****************************************************** */
        let lazyIframes_Loaded = false;
        function loadIframes(){

            // Variables 
            let iframeArray = document.querySelectorAll('.defer-iframe');
            let urlHome = 'https://' + window.location.hostname;
            let urlHome2 = urlHome + '/';

            if(lazyIframes_Loaded === false){
                console.log("Searching deferred iframes");
                // Loop Iframes
                iframeArray.forEach(element => {
                    // If the Iframe have an SRC empty
                    if(element.src == "" || element.src == window.location.href){
                        //Get the data-video URL
                        let videoSRC = element.getAttribute('data-src');

                        // If have a data-video URL
                        if(videoSRC){
                            console.log("Iframe Deferred has been loaded");
                            console.log(videoSRC);
                            //Add the video URL to the Iframe
                            element.src = videoSRC;

                            //Let's fade-out the iframe thumb
                            let parent = element.parentElement;
                            let iframeThumb_tag = parent.querySelector('img');

                            if (iframeThumb_tag) {
                                setTimeout(() => {
                                    iframeThumb_tag.classList.add('fade-out-thumb');
                                }, 1000);

                                setTimeout(() => {
                                    iframeThumb_tag.remove();
                                }, 3500);
                            }
                        }
                    }
                });

                lazyIframes_Loaded = true;
            }

            document.removeEventListener("scroll", loadIframes);
            document.removeEventListener("mousemove", loadIframes);
            document.removeEventListener("touchstart", loadIframes);

            setTimeout(() => {
                loadIframes();
            }, 10000);
        }

        // Adding Event Listener Scroll
        document.addEventListener("mousemove", loadIframes, { once: true });
        document.addEventListener("scroll", loadIframes, { once: true });
        document.addEventListener("touchstart", loadIframes, { once: true });
    });
</script>