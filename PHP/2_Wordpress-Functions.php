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
        #Here all the functions to get the main post info
    endwhile;
?>
