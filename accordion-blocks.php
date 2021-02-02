<?php

/**
 * Plugin Name: Accordion Blocks
 * Plugin URI: https://github.com/philbuchanan/Accordion-Blocks
 * Description: Gutenberg blocks for creating responsive accordion drop-downs.
 * Version: 1.3.0
 * Requires at least: 5.5
 * Author: Phil Buchanan
 * Author URI: https://philbuchanan.com
 * License: GPLv2 or later
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
	 * Sets up the plugin, including registering scripts.
	 */
	function __construct() {
		$basename = plugin_basename(__FILE__);

		$this->plugin_version = $this->get_plugin_version();

		// Register block
		add_action('init', array($this, 'register_block'));

		// Register frontend JavaScript
		add_action('wp_enqueue_scripts', array($this, 'enqueue_frontend_assets'));

		// Tell WordPress which JavaScript files contain translations
		add_action('init', array($this, 'set_script_translations'));

		if (is_admin()) {
			// Add link to documentation on plugin page
			add_filter("plugin_action_links_$basename", array($this, 'add_documentation_link'));
		}

		// Register defaults site setting
		add_action('rest_api_init', array($this, 'register_settings'));
		add_action('admin_init', array($this, 'register_settings'));

		// Add API endpoint to get and set settings
		add_action('rest_api_init', array($this, 'register_rest_routes'));
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
			$asset_file['dependencies'],
			$asset_file['version']
		);

		wp_register_style(
			'pb-accordion-blocks-style',
			plugins_url('build/index.css', __FILE__),
			array(),
			$asset_file['version']
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
	 * Tell WordPress which JavaScript files contain translations
	 */
	function set_script_translations() {
		wp_set_script_translations('pb-accordion-blocks-script', 'accordion-blocks');
	}



	/**
	 * Register accordion defaults site setting
	 */
	public function register_settings() {
		register_setting(
			'general',
			'accordion_blocks_defaults',
			array(
				'type' => 'object',
				'show_in_rest' => array(
					'schema' => array(
						'type' => 'object',
						'properties' => array(
							'initiallyOpen'  => array(
								'type' => 'boolean',
							),
							'clickToClose' => array(
								'type' => 'boolean',
							),
							'autoClose' => array(
								'type' => 'boolean',
							),
							'scroll' => array(
								'type' => 'boolean',
							),
							'scrollOffset' => array(
								'type' => 'integer',
							),
						),
					),
				),
				'default' => array(
					'initiallyOpen' => false,
					'clickToClose'  => true,
					'autoClose'     => true,
					'scroll'        => false,
					'scrollOffset'  => 0,
				),
			)
		);
	}



	/**
	 * Register rest endpoint to get and set plugin defaults
	 */
	public function register_rest_routes() {
		register_rest_route('accordion-blocks/v1', '/defaults', array(
			'methods' => WP_REST_Server::READABLE,
			'callback' => array($this, 'api_get_defaults'),
			'permission_callback' => function() {
				return current_user_can('edit_posts');
			}
		));

		register_rest_route('accordion-blocks/v1', '/defaults', array(
			'methods' => WP_REST_Server::EDITABLE,
			'callback' => array($this, 'api_set_defaults'),
			'permission_callback' => function() {
				return current_user_can('publish_pages');
			}
		));
	}



	/**
	 * Get accordion block default settings
	 *
	 * @return object Default accordion block settings object
	 */
	public function api_get_defaults(WP_REST_Request $request) {
		$response = new WP_REST_Response(get_option('accordion_blocks_defaults'));
		$response->set_status(200);

		return $response;
	}



	/**
	 * Set accordion block default settings
	 *
	 * @param data object The date passed from the API
	 * @return object Default accordion block settings object
	 */
	public function api_set_defaults($request) {
		$old_defaults = get_option('accordion_blocks_defaults');

		$new_defaults = json_decode($request->get_body());

		$new_defaults = (object) array(
			'initiallyOpen' => isset($new_defaults->initiallyOpen) ? $new_defaults->initiallyOpen : $old_defaults->initiallyOpen,
			'clickToClose'  => isset($new_defaults->clickToClose)  ? $new_defaults->clickToClose  : $old_defaults->clickToClose,
			'autoClose'     => isset($new_defaults->autoClose)     ? $new_defaults->autoClose     : $old_defaults->autoClose,
			'scroll'        => isset($new_defaults->scroll)        ? $new_defaults->scroll        : $old_defaults->scroll,
			'scrollOffset'  => isset($new_defaults->scrollOffset)  ? $new_defaults->scrollOffset  : $old_defaults->scrollOffset,
		);

		$updated = update_option('accordion_blocks_defaults', $new_defaults);

		$response = new WP_REST_Response($new_defaults);
		$response->set_status($updated ? 201 : 500);

		return $response;
	}



	/**
	 * Add documentation link on plugin page
	 */
	public function add_documentation_link($links) {
		array_push($links, sprintf('<a href="%s">%s</a>',
			'http://wordpress.org/plugins/accordion-blocks/',
			_x('Documentation', 'link to documentation on wordpress.org site', 'accordion-blocks')
		));

		array_push($links, sprintf('<a href="%s">%s</a>',
			'https://philbuchanan.com/donate/',
			__('Donate', 'accordion-blocks')
		));

		return $links;
	}

}

$PB_Accordion_Blocks = new PB_Accordion_Blocks;

endif;
