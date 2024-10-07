<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    // Charger le fichier JavaScript du thème enfant
    wp_enqueue_script( 'custom-script', get_stylesheet_directory_uri() . '/script.js' );
}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}

// Charger le fichier CSS et le fichier JavaScript de Swiper directement depuis un CDN
function add_swiper() {
    wp_enqueue_style( 'swiper-css', 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css', array(), '10.0.0' ); 
    wp_enqueue_script( 'swiper-js', 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js', array(), '10.0.0', true ); 
}
add_action( 'wp_enqueue_scripts', 'add_swiper' );

// Charger le fichier d'initialisation pour Swiper
function add_swiper_init() {
    wp_enqueue_script( 'swiper-init', get_stylesheet_directory_uri() . '/js/swiper-init.js', array('swiper-js'), null, true );
}
add_action( 'wp_enqueue_scripts', 'add_swiper_init' );
