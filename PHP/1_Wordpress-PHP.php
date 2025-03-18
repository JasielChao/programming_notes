<!-- General Wordpress PHP  -->

<!-- Get Post Data  -->
<?php  
    /* Post Data */
    $post_id = get_the_ID();
    $post_url = get_post_permalink();
    $post_slug = get_post_field( 'post_name', get_post() );
    $post_title = get_the_title();
    $post_published_date = get_the_date();
    $post_category = get_the_category( $post_id);
    $post_category[0]->cat_name;

    # post thumbnail
    $post_thumbnail = get_the_post_thumbnail_url();
    $post_thumbnail = get_the_post_thumbnail_url(get_the_ID(), 'large');
    $post_thumbnail = get_the_post_thumbnail_url(get_the_ID(), 'medium_large');

    // Get caption for featured image
    $post_thumbnail_Caption = get_post(get_post_thumbnail_id())->post_excerpt; 

    # post thumbnail Sizes

    //Default WordPress
    the_post_thumbnail( 'thumbnail' );     // Thumbnail (150 x 150 hard cropped)
    the_post_thumbnail( 'medium' );        // Medium resolution (300 x 300 max height 300px)
    the_post_thumbnail( 'medium_large' );  // Medium Large (added in WP 4.4) resolution (768 x 0 infinite height)
    the_post_thumbnail( 'large' );         // Large resolution (1024 x 1024 max height 1024px)
    the_post_thumbnail( 'full' );          // Full resolution (original size uploaded)

    //With WooCommerce
    the_post_thumbnail( 'shop_thumbnail' ); // Shop thumbnail (180 x 180 hard cropped)
    the_post_thumbnail( 'shop_catalog' );   // Shop catalog (300 x 300 hard cropped)
    the_post_thumbnail( 'shop_single' );    // Shop single (600 x 600 hard cropped)

    // Carbon fields
    $customCardImg = get_post_thumbnail_id(); // O el ID de la imagen que quieres
    $img_size = 'medium'; // Puedes usar 'thumbnail', 'medium', 'large', 'full' o tamaños personalizados

    $image = wp_get_attachment_image_src($customCardImg, $img_size);

    if ($image) {
        $img_url = $image[0]; // La URL de la imagen en el tamaño especificado
        echo '<img src="' . esc_url($img_url) . '" alt="Custom Image">';
    }

    $img_thumbnail = wp_get_attachment_image_src($customCardImg, 'thumbnail')[0]; // 150x150 
    $img_medium = wp_get_attachment_image_src($customCardImg, 'medium')[0]; // 300x300
    $img_large = wp_get_attachment_image_src($customCardImg, 'large')[0]; // 1024x1024
    $img_full = wp_get_attachment_image_src($customCardImg, 'full')[0]; // Tamaño original

    // Si necesitas un tamaño personalizado, puedes registrarlo en functions.php con:
    add_image_size('custom-size', 400, 300, true); // 400x300px, recorte exacto
    // Y luego obtenerlo con:
    $img_custom = wp_get_attachment_image_src($customCardImg, 'custom-size')[0];

    // Get caption for image
    $imgCaption = wp_get_attachment_caption($customCardImg);
?>

<!-- Get the Current Route Source Dynamically -->
<?php echo get_template_directory_uri();?>

<!-- To include a partial file-->
<?php include get_template_directory() . '/template-parts/cognitos/cognito-form-1.php' ?>

<!--  Get File Name -->
<?php $fileName = substr(basename(__FILE__), 0, strrpos(basename(__FILE__), ".")); ?>

<!-- Wordpress Query  -->   
<div>
    <!-- First Way  -->   
    <?php

            $query = new WP_Query( array( 'post_type' => 'page' ) );
            $posts = $query->posts;

            foreach($posts as $post) {
                // Do your stuff, e.g.
                // echo $post->post_name;
            }

            // Restore original Post Data.
            wp_reset_postdata();

    ?>

    <!-- Second Way  -->   
    <?php
        $query = new WP_Query( $args );
        if ( $query->have_posts() ) {

            // some code here if you want.
            while ( $query->have_posts() ) {

                $query->the_post();
                // now $query->post is WP_Post Object, use:
                // $query->post->ID, $query->post->post_title, etc.
            }
        }

        // Restore original Post Data.
        wp_reset_postdata();
    ?>
    <!-- Count total post  --> 
    <?php
        $totalpost = $the_query->found_posts; 
    ?>

</div>

<!-- Wordpress Query - Category -->   
<div>
    <?php # Get all post with a specific category
			$args = array(
				'post_type' => 'post',
				'category_name'=> 'event',
                'orderby' => 'date',
                'order' => 'DESC',
				'posts_per_page' => -1,

			);
			$the_query = new WP_Query( $args ); 
    ?>


    <?php # Get all post that doesn't have a specific category

        # Gets the ID of the 'event' category
        $event_category = get_category_by_slug('event');

        # Check if the category exists before continuing
        if ($event_category) {
            $args = array(
                'post_type'      => 'post',
                'posts_per_page' => -1,
                'category__not_in' => array($event_category->term_id), # Excludes the "event" category
            );
        } else {
            $args = array(
                'post_type'      => 'post',
                'posts_per_page' => -1,
            );
        }

        $the_query = new WP_Query($args);
    ?>


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

<!-- Get Post Template -->   
<div>
    <?php echo get_page_template() ?>

</div>


<!-- Load Partials files -->   
<div>
    <?php 
        foreach(glob(get_template_directory() . "/assets/css*.php") as $file){
            require $file;
        }

    ?>

</div>

<!-- Get the template slug -->   
<div>
    <?php 
        function get_templete_name() {
            //Get the template slug
            $template_slug = get_page_template_slug();
            // Remove "templates/" and ".php"
            $template_slug = str_replace("templates/", "", $template_slug);
            $template_slug = str_replace(".php", "", $template_slug);

            return $template_slug;
        }
    ?>

</div>

<!-- To get the Main Post page -->
<?php
    while(have_posts()) : the_post();
        # Here all the functions to get the main post info

            # Function to get the post title
            the_title("<h1 class='text-center'>","</h1>");

            # Function to get the post Feature imagen
            the_post_thumbnail();
            # With parameters
            the_post_thumbnail('full', array("class" => "name-class"));

            # Function to get the post content
            the_content();

            # Get The link
            get_post_permalink();


    endwhile;
?>

<!-- Count post -->
<?php 
	if($wp_query->found_posts > 0 ) {
		 // Do somenthing
	}
?>

<!-- To get the header and footer -->
<?php 
    get_header(); 
    get_footer();    
?>

<!-- To get partials files, don't use the partial-file extension -->
<?php
	// get_template_part( string $slug, string $name = null, array $args = null  )
	
    get_template_part('template-parts/partial-file');

	// Example Parameter
	get_template_part( 'template-parts/partial-file', null, 
		array( 
			'class' => 'featured-home',
			'data'  => array(
				'size' => 'large',
				'is-active' => true,
			)
		) 
	);

	// Example get Parameter
	$class = isset($args['class']) ? $args['class'] : "";
?>



<!-- To remove all inline styles -->
<?php
    add_filter('the_content', function( $content ){
        //--Remove all inline styles--
        $content = preg_replace('/ style=("|\')(.*?)("|\')/','',$content);
        return $content;
    }, 20);

    # or just
    echo preg_replace('/ style=("|\')(.*?)("|\')/','',$content);
?>
<!-- Example Pagination --->
<section class="news-posts">
	<div class="results">
		<?php
        $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
		$args = array(
			'post_type' => 'news',
			'posts_per_page' => 9,
			'paged' => $paged
		);
		$the_query = new WP_Query( $args ); ?>
		<?php if ( $the_query->have_posts() ) : ?>
			<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
				<a class="result" href="<?php echo get_permalink(); ?>">
					<div class="image">
						<img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="">
					</div>
					<div class="date"><?php echo get_the_date(); ?></div>
					<div class="title">
						<h2><?php echo get_the_title(); ?></h2>
					</div>
					<div class="excerpt">
						<p><?php echo get_the_excerpt(); ?></p>
					</div>
					<div class="button">READ MORE <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/button-arrow.svg" alt=""></div>
				</a>
			<?php endwhile; ?>
			<?php wp_reset_postdata(); ?>
		<?php else : ?>
			<p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
		<?php endif; ?>
	</div>
	<div class="pagination">
		<?php 
			echo paginate_links( array(
				'base'         => str_replace( 999999999, '%#%', esc_url( get_pagenum_link( 999999999 ) ) ),
				'total'        => $the_query->max_num_pages,
				'current'      => max( 1, get_query_var( 'paged' ) ),
				'format'       => '?paged=%#%',
				'show_all'     => false,
				'type'         => 'plain',
				'end_size'     => 2,
				'mid_size'     => 1,
				'prev_next'    => true,
				'prev_text'    => sprintf( '<i></i> %1$s', __( '<img src="/wp-content/themes/asnet-core/assets/images/button-arrow.svg" />', 'text-domain' ) ),
				'next_text'    => sprintf( '%1$s <i></i>', __( '<img src="/wp-content/themes/asnet-core/assets/images/button-arrow.svg" />', 'text-domain' ) ),
				'add_args'     => false,
				'add_fragment' => '#articles',
			) );
		?>
	</div>
</section>

<?php
 // Add to functions.php
/* ********************************************  */
/* Fix pagination on archive pages */
/* ********************************************  */
add_action('init', function() {
	add_rewrite_rule('(.?.+?)/page/?([0-9]{1,})/?$', 'index.php?pagename=$matches[1]&paged=$matches[2]', 'top');
});
?>
