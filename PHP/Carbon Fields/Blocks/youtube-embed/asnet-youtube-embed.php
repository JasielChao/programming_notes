<?php
    /* ********************************************  */
    /* YouTube Embed - Block v1.0.0                 */
    /* ********************************************  */

    use Carbon_Fields\Block;
    use Carbon_Fields\Field;

    $dir_uri = get_template_directory_uri();

	// Block filename
	$blockFile = substr(basename(__FILE__), 0, strrpos(basename(__FILE__), "."));

    /* Register Image Separator */
    add_action( 'carbon_fields_register_fields', 'image_separator' );
    
    function image_separator() {
        Block::make( __( 'YouTube Embed' ) )
        ->add_fields( array(
             /* Video ID */
            Field::make( 'text', 'youtube_video_id', __( 'YouTube Video ID' ) )
                ->set_classes( 'quarter-container subtitle-label' ),
            /* WP Label: Youtube Example */
            Field::make( 'html', 'title_v0' )
                ->set_html( '<img src="' .  $dir_uri . '/assets/images/example-youtube-video-id.png" alt="">' )
                ->set_classes( 'half-container second-half' ),
        ) )
        ->set_category( 'custom-category', __( 'Advantage Services' ), 'heart' )
        ->set_keywords( [ __( 'asnet' ) ] )
        ->set_icon( 'embed-generic' )
        ->set_description( __( 'Embed a YouTube video.' ) )
        ->set_inner_blocks( true )
		->set_mode( 'edit' )
        ->set_render_callback( function ( $fields, $attributes, $inner_blocks ) {
			
            # Start Frontend HTML struture of the Block
            $youtube_video_id = $fields['youtube_video_id'];

            if($youtube_video_id) :
		?>

            <style data-note="asnet-youtube-embed-styles">
                <?php include_once  $dir_uri . "/assets/css/blocks/asnet-youtube-embed.css"; ?>
            </style>

            <div class="asnet-youtube-embed">
                <iframe width="960" height="540" class="iframe-video youtube-video" title="Youtube video" 
                    src="https://www.youtube.com/embed/<?php echo $youtube_video_id; ?>?autoplay=1&mute=1&playlist=<?php echo $youtube_video_id; ?>&loop=1" 
                    width="640" height="360" frameborder="0" allow="autoplay" allowfullscreen
                ></iframe>
            </div>

        <?php  endif;
			# End Frontend HTML struture of the Block
        } );
    }

?>