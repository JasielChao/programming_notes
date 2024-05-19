<!----------------- -------------------  ---------------------->
<!----------------- Wordpress Functions  ---------------------->
<!----------------- -------------------  ---------------------->

<!-- Get the Current Route Source Dynamically -->
<?php echo get_template_directory_uri();?>

<!-- To include a partial file-->
<?php include get_template_directory() . '/template-parts/cognitos/cognito-form-1.php' ?>


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