<?php /*Read Mores options */

    // Example get Parameter
    $row_title = isset($args['row_title']) ? $args['row_title'] : false;
    $row_text = isset($args['row_text']) ? $args['row_text'] : false;
?>

<!--- --------------------------------- ---->
<!--- Option 1: Read More with Gradient ---->
<!--- --------------------------------- ---->
<div class="content-wrap">
    <?php if( $row_title) : ?>
        <h2 class="title-m"><?php echo $row_title; ?></h2>
    <?php endif; ?>

    <?php if( $row_text) : ?>
        <?php 
            $textLenght = strlen($row_text);
            if($textLenght > 900) {$classes .= ' target-readMore';};
        ?>

        <div class="text-wrap <?php echo $classes;?>">
            <?php echo $row_text;?>
        </div>

        <?php if($textLenght > 900) : ?>
            <button class="link link-read-more btn-readMore"> <span class="read-more">Read More</span> <span class="read-less">Read Less</span></button>
        <?php endif; ?>
    <?php endif; ?>
</div>

<!--- ------------------------ ---->
<!--- Option 2: Read More with Excerpt ---->
<!--- ------------------------ ---->
<div class="content-wrap">
    <?php 
        // Let's count how many characters have the text
        $textLenght = strlen($row_text);
        // If have more than 700 characters let's add the target-readMore class
        if($textLenght > 900) {$classes .= ' target-readMore read-more-v2';};

        // Let's remove all the <div> tags in the text and save the result in new var
        $cleanText = preg_replace(
            array(
                '/<\s*\/?div\s*\/?>/i',                // Remove all <div> variations
            ), 
            '',  $row_text
        );
        // Let's Split the $cleanText in characters to get an array
        $string_array = str_split($cleanText);
        $excerpt = "";
        // Loop the $string_array var
        for ($i=0; $i < count($string_array); $i++) { 
            /* If we already pass the 650 characters and the current character is a blank space let's break the loop
                -- The blank space character in the condition is to prevent cutting a word
            */
            if($i > 800 && strcmp($string_array[$i], ' ') == 0){
                break;
            }
            // Else, let's concatenate the character in the $excerpt var
            $excerpt .= $string_array[$i];
        }
    ?>

    <div class="text-wrap <?php echo $classes;?>">
        <div class="excerpt-text">
            <?php echo $excerpt . '...';?>
        </div>
        <div class="full-text">
            <?php echo $row_text;?>
        </div>
    </div>

    <?php if($textLenght > 900) : ?>
        <button class="link link-read-more btn-readMore"> <span class="read-more">Read More</span> <span class="read-less">Read Less</span></button>
    <?php endif; ?>
</div>

<script>
    /* ******************************************************
        Read More / Read Less Logic 
    ****************************************************** */
    let readMoreBtns_Array = document.querySelectorAll('.btn-readMore');

    if(readMoreBtns_Array){
        for (let i = 0; i < readMoreBtns_Array.length; i++) {

            readMoreBtns_Array[i].addEventListener("click", ()=>{

                let parentElement = readMoreBtns_Array[i].parentElement;

                if(parentElement.classList.contains("readMore-active")){
                    // Remove the class readMore-active
                    parentElement.classList.remove("readMore-active");
                }else{
                    //If not, add the class readMore-active
                    parentElement.classList.add("readMore-active");
                }

            })
        }
    }
</script>

<style>
    /* Less styles to use as reference */
    .btn-readMore-styles() {
        .color-bg-dark {

            .target-readMore {
                &::after {
                    background: @color-bg-dark;
                    background: linear-gradient(360deg, @color-bg-dark 0%, fade(@color-bg-dark, 0%) 100%);
                }
            }

        }

        .target-readMore {
            position: relative;
            max-height: 270px;
            overflow: hidden;

            &::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                display: block;
                height: 175px;
                width: 100%;
                background: #fff;
                background: linear-gradient(360deg, #fff 0%, fade(#fff, 0%) 100%);

            }

            &.active {
                max-height: 100%;

                &::after {
                    display: none;    
                }
            }

        }

        .read-more-v2 {
            max-height: unset!important;

            &::after {
                content: unset!important;
            }

            .full-text {
                display: none;
            }
        }

        .btn-readMore {

            .read-more {
                display: block;
            }

            .read-less {
                display: none;
            }
        }

        .readMore-active {

            .target-readMore {
                max-height: 100%;

                &::after {
                    display: none;    
                }
            
            }

            .read-more-v2 {
                .excerpt-text {
                    display: none;
                }

                .full-text {
                    display: block;
                }
            }

            .btn-readMore {

                .read-more {
                    display: none;
                }
            
                .read-less {
                    display: block;
                }
            }
        }


        @media(max-width: @break-phone){ 
            .target-readMore {
                max-height: 390px;
            }
        }

    }
</style>