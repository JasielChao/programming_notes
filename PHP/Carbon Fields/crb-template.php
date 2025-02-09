<?php
# Carbon Fields for a specific template

// Names and Slug defined by filename. Feel free to change as needed.
$fileName = substr(basename(__FILE__), 0, strrpos(basename(__FILE__), "."));
$data = array(
    'name' => ucwords(str_replace(array('-', '_'), ' ', $fileName)),
    'slug' => strtolower(str_replace(array('-', ' '), '_', $fileName)), // Use underscores instead of dashes or spaces.
    'template' => strtolower(str_replace(' ', '-', $fileName))
);

use Carbon_Fields\Container;
use Carbon_Fields\Field;

// Create Fields
add_action('carbon_fields_register_fields', function () use ($data) {

    Container::make( 'post_meta', $data['name'] .  ' Fields' )
        ->where( function( $condition ) use ($data) {
            $condition->where( 'post_template', '=', 'templates/' . $data['template'] . '.php' );
        } )
        ->add_tab( __( 'Intro Section' ), array(
            Field::make( 'rich_text', 'intro_paragraph', __( 'Intro Paragraph' ) ),
        ) )
        ->add_tab( __( 'Tab 2' ), array(
            Field::make( 'rich_text', 'intro_paragraph', __( 'Intro Paragraph' ) ),
        ) )
      ;
});




