<!-- General Wordpress PHP  -->

<!-- Wordpress Query  -->   
<div>
    <!-- First Way  -->   
    <div>
            $query = new WP_Query( array( 'post_type' => 'page' ) );
            $posts = $query->posts;

            foreach($posts as $post) {
                // Do your stuff, e.g.
                // echo $post->post_name;
            }
    </div>

    <!-- Second Way  -->   
    <div>
        $query = new WP_Query( $args );
        if ( $query->have_posts() ) {

            // some code here if you want.
            while ( $query->have_posts() ) {

                $query->the_post();
                // now $query->post is WP_Post Object, use:
                // $query->post->ID, $query->post->post_title, etc.
            }
        }
    </div>

</div>

<!-- Get ID Post -->   
<div>
    <!-- First Way  -->   
    <div>
        <!-- From Query -->
        <?php echo $posts[0] -> ID ; ?>
    </div>

    <!-- Second Way  -->   
    <div>
        <!-- Inside the Post -->
        <?php $id = get_the_ID();?>
    </div>

</div>

<!-- Post Metas  -->   
<?php 

    # Create a Post Meta
    add_post_meta( $id_Post, 'meta_key', 'meta_value', true ); 

    # Get a Post Meta
    get_post_meta( $id_Post, 'meta_key', true);

    # Check if exist a Post Meta
    /* Note: in 'post' leave 'post' */
    if(metadata_exists( 'post', $id_Post, 'meta_key')){
        echo 'Yes, the Meta Post exists';
    }else{
        echo 'No, the Meta Post dont exists';
    }

    # Update a Post Meta
    $prev_value = get_post_meta( $id_Post, '_test', true);
    /* Note: in 'post' leave 'post' */
    if(metadata_exists( 'post', $id_Post, '_test')){
        update_metadata( 'post', $id_Post, 'meta_key', 'new_meta_value', $prev_value );
    }
?>


