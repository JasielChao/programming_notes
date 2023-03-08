<!-- General Notes PHP  -->

<!-- Conditinoal to Include HTML Blocks  -->
<?php if($var == true): ?>
    <div>This going to Show up</div>
<?php else: ?>
    <div>This NOT going to Show up</div>
<?php endif; ?>

<!-- Var_Dump PHP    -->   
<div style="display: none;">
    <pre>
    <?php var_dump($variableName); ?>
    </pre>
</div>

<!-- Substring PHP -->
<?php 
   /* The substr() function returns a part of a string.
      substr(string,start,length)                        */
      echo substr("Hello world",0 ,6);
?>

<!-- Wordpress Query  -->   
<div>

<!-- One Way  -->   
<div>
        $query = new WP_Query( array( 'post_type' => 'page' ) );
        $posts = $query->posts;

        foreach($posts as $post) {
            // Do your stuff, e.g.
            // echo $post->post_name;
        }
</div>

<!-- Two Way  -->   
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

