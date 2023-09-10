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

    endwhile;
?>

<!-- To get the header and footer -->
<?php 
    get_header(); 
    get_footer();    
?>

<!-- To get partials files, don't use the partial-file extension -->
<?php
    get_template_part('template-parts/partial-file');
?>

