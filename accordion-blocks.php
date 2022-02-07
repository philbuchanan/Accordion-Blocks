<?php

/**
 * Plugin Name: Accordion Blocks
 * Plugin URI: https://github.com/philbuchanan/Accordion-Blocks
 * Description: Gutenberg blocks for creating responsive accordion drop-downs.
 * Version: 1.5.0
 * Requires at least: 5.9
 * Tested up to: 5.9
 * Requires PHP: 7.3
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

		// Enqueue frontend assets
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

		// Add settings page
		add_action('admin_menu', array($this, 'add_settings_menu'));
		add_action('admin_init', array($this, 'settings_api_init'));
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
		register_block_type(__DIR__);
	}



	/**
	 * Enqueue the block's assets for the frontend
	 */
	public function enqueue_frontend_assets() {
		$load_scripts_globally = $this->should_load_scripts_globally();

		if ($load_scripts_globally || has_block('pb/accordion-item', get_the_ID())) {
			$min = (defined('SCRIPT_DEBUG') && SCRIPT_DEBUG) ? '' : '.min';

			wp_enqueue_script(
				'pb-accordion-blocks-frontend-script',
				plugins_url("js/accordion-blocks$min.js", __FILE__),
				array('jquery'),
				$this->plugin_version,
				true
			);

			wp_enqueue_style(
				'pb-accordion-blocks-style',
				plugins_url('build/index.css', __FILE__),
				array(),
				$this->plugin_version
			);
		}
	}



	/**
	 * Tell WordPress which JavaScript files contain translations
	 */
	function set_script_translations() {
		wp_set_script_translations('pb-accordion-blocks-editor-script', 'accordion-blocks');
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

		register_setting(
			'accordion_blocks_settings',
			'accordion_blocks_load_scripts_globally',
			array(
				'type' => 'boolean',
				'default' => 'on',
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



	/**
	 * Get the load_scripts_globally option and return true or false.
	 */
	private function should_load_scripts_globally() {
		/**
		 * This removes the old option (the option name had a typo), but ensures
		 *  the new option gets updated with the same setting.
		 */
		if (get_option('accordion_blocks_load_scripts_globablly') == 'on') {
			update_option('accordion_blocks_load_scripts_globally', 'on');
		}

		delete_option('accordion_blocks_load_scripts_globablly');

		$load_scripts_globally = get_option('accordion_blocks_load_scripts_globally', 'on');

		return !!$load_scripts_globally;
	}



	/**
	 * Add the admin menu settings page
	 */
	public function add_settings_menu() {
		add_options_page(
			__('Accordion Blocks Settings', 'accordion-blocks'),
			__('Accordion Blocks', 'accordion-blocks'),
			'manage_options',
			'accordion_blocks_settings',
			array($this, 'render_settings_page')
		);
	}



	/**
	 * Render the settings page
	 */
	public function render_settings_page() {
		if (!current_user_can('manage_options')) {
			wp_die(__('You do not have sufficient permissions to access this page.', 'accordion-blocks'));
		} ?>

		<div class="wrap">
			<h2><?php _e('Accordion Blocks Settings', 'accordion-blocks'); ?></h2>
			<form method="POST" action="options.php">
				<?php
					settings_fields('accordion_blocks_settings');
					do_settings_sections('accordion_blocks_settings');
					submit_button();
				?>
			</form>
		</div>
	<?php }



	/**
	 * Register setting sections and individual settings
	 */
	public function settings_api_init() {
		add_settings_section(
			'accordion_blocks_global_settings_section',
			__('Global Settings', 'accordion-blocks'),
			array($this, 'accordion_blocks_global_settings_section_callback'),
			'accordion_blocks_settings'
		);

		add_settings_field(
			'accordion_blocks_load_scripts_globally',
			__('Scripts and Styles', 'accordion-blocks'),
			array($this, 'load_scripts_globally_setting_callback'),
			'accordion_blocks_settings',
			'accordion_blocks_global_settings_section',
			array(
				'label_for' => 'accordion_blocks_load_scripts_globally',
			)
		);
	}



	/**
	 * Callback function for Accordion Blocks global settings section
	 * Add section intro copy here (if necessary)
	 */
	public function accordion_blocks_global_settings_section_callback() {}



	/**
	 * Callback function for load scripts globally setting
	 */
	public function load_scripts_globally_setting_callback() {
		$load_scripts_globally = $this->should_load_scripts_globally(); ?>
		<fieldset>
			<legend class="screen-reader-text">
				<span><?php _e('Scripts and Styles', 'accordion-blocks'); ?></span>
			</legend>
			<label for="accordion_blocks_load_scripts_globally">
				<input
					type="checkbox"
					id="accordion_blocks_load_scripts_globally"
					name="accordion_blocks_load_scripts_globally"
					aria-describedby="load-scripts-globally"
					<?php checked($load_scripts_globally); ?>
				>
				<?php _e('Load scripts and styles globally', 'accordion-blocks'); ?>
			</label>
			<div id="load-scripts-globally">
				<p class="description">
					<?php _e('Turning this off may cause accordions to stop working in some instances.', 'accordion-blocks'); ?>
				</p>
				<p class="description">
					<?php _e('Turn this on if you use accordions outside of the main content editor, or are adding accordions programatically.', 'accordion-blocks'); ?>
				</p>
			</div>
		</fieldset>
	<?php }

}

$PB_Accordion_Blocks = new PB_Accordion_Blocks;

endif;
