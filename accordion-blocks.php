<?php

/**
 * Plugin Name: Accordion Blocks
 * Description: Gutenberg blocks for creating responsive accordion drop-downs.
 * Version: 1.0.5
 * Author: Phil Buchanan
 * Author URI: https://philbuchanan.com
 * Text Domain: pb
 */

// Make sure to not redeclare the class
if (!class_exists('PB_Accordion_Blocks')) :

class PB_Accordion_Blocks {

	/**
	 * Current plugin version number
	 * Set from parent plugin file
	 */
	public $plugin_version;



	/**
	 * Class constructor
	 * Sets up the plugin, including: textdomain and registering scripts.
	 */
	function __construct() {
		$basename = plugin_basename(__FILE__);

		$this->plugin_version = $this->get_plugin_version();

		// Load text domain
		load_plugin_textdomain('accordion_blocks', false, dirname($basename) . '/languages/');

		// Register block
		add_action('init', array($this, 'register_block'));

		// Register frontend JavaScript
		add_action('enqueue_block_assets', array($this, 'enqueue_frontend_assets'));

		if (is_admin()) {
			// Add link to documentation on plugin page
			add_filter("plugin_action_links_$basename", array($this, 'add_documentation_link'));
		}
	}



	/**
	 * Current plugin version number
	 */
	private function get_plugin_version() {
		$plugin_data = get_file_data(__FILE__, array('Version' => 'Version'), false);

		return (defined('WP_DEBUG') && WP_DEBUG) ? time() : $plugin_data['Version'];
	}



	/**
	 * Register the block's assets for the editor
	 */
	public function register_block() {
		// Automatically load dependencies and version
		$asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

		wp_register_script(
			'pb-accordion-blocks-script',
			plugins_url('build/index.js', __FILE__),
			array_merge($asset_file['dependencies'], array(
				'wp-block-editor',
			)),
			$asset_file['version']
		);

		wp_register_style(
			'pb-accordion-blocks-style',
			plugins_url('css/accordion-blocks.css', __FILE__),
			array(),
			$this->get_plugin_version()
		);

		register_block_type('pb/accordion-item', array(
			'editor_script' => 'pb-accordion-blocks-script',
			'style'         => 'pb-accordion-blocks-style',
		));
	}



	/**
	 * Enqueue the block's assets for the frontend
	 */
	public function enqueue_frontend_assets() {
		$min = (defined('SCRIPT_DEBUG') && SCRIPT_DEBUG) ? '' : '.min';

		wp_enqueue_script(
			'pb-accordion-blocks-frontend-script',
			plugins_url("js/accordion-blocks$min.js", __FILE__),
			array('jquery'),
			$this->plugin_version,
			true
		);
	}



	/**
	 * Add documentation link on plugin page
	 */
	public function add_documentation_link($links) {
		array_push($links, sprintf('<a href="%s">%s</a>',
			'http://wordpress.org/plugins/accordion-blocks/',
			_x('Documentation', 'link to documentation on wordpress.org site', 'pb')
		));

		return $links;
	}

}

$PB_Accordion_Blocks = new PB_Accordion_Blocks;

endif;
