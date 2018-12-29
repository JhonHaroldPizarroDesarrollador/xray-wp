<?php
/**
 * Plugin Name: Xray
 * Plugin URI: http://jhonpizarro.com
 * Description: This plugin is for show the Pryect Availability
 * Version: 1.0.0
 * Author: Jhon Pizarro
 * Author URI: http://jhonpizarro.com
 * License: GPL2
 **/
//require_once ABSPATH . '/wp-content/plugins/image-map-pro-wordpress/image-map-pro-wordpress.php';
    function xray_js_file() {
        wp_enqueue_script( 'my-script', plugin_dir_url( __FILE__ ) . 'js/xray.js', array( 'jquery' ), '2.0', true );
    }
    add_action( 'wp_enqueue_scripts', 'xray_js_file' );
//// 
