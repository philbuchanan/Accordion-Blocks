=== Accordion Blocks ===
Contributors: philbuchanan
Author URI: https://philbuchanan.com/
Donate Link: https://philbuchanan.com/donate/
Tags: accordion, accordions, gutenberg, block, responsive
Requires at least: 5.9
Tested up to: 5.9
Stable tag: 1.5.0
Requires PHP: 7.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Gutenberg block for creating responsive accordion drop-downs.

== Description ==

Accordion Blocks is a simple plugin that adds a Gutenberg block for adding accordion drop-downs to your pages.

The accordions should blend seamlessly with your theme. However, you may want to add custom styles to your theme.

= Features =

* Adds a Gutenberg block for adding accordions to your site.
* Supports multiple accordions with individual settings for each accordion item.
* Fully responsive.
* Support for item IDs and direct links.
* Supports nesting accordions.
* Accessible (for users requiring tabbed keyboard navigation control).

= Optional Features =

* Open individual accordion items by default.
* Disable auto closing of accordion items.
* Manually close items by clicking the title again.
* Scroll page to title when it's clicked open (including setting a scroll offset position).
* Set the HTML heading tag for the title element (h1–h6, button).
* Set defaults to be applied to all new accordion items or reset a specific accordion item to the defaults.
* Supports adding custom block styles using `wp.blocks.registerBlockStyle`.

= Output =

The plugin will ultimately output following HTML (simplified for this example):

    <div class="wp-block-pb-accordion-item c-accordion__item js-accordion-item" data-initially-open="false" data-click-to-close="true" data-auto-close="true" data-scroll="false" data-scroll-offset="0">
        <h2 id="at-76840" class="c-accordion__title js-accordion-controller" tabindex="0" role="button" aria-controls="ac-76840" aria-expanded="false">
            Title with H2 tag
        </h2>
        <div id="ac-76840" class="c-accordion__content" style="display:none" aria-hidden="true">
            <p>Content</p>
        </div>
    </div>

= Custom CSS =

You can use the following CSS classes to customize the look of the accordion.

    .c-accordion__item {} /* The accordion item container */
    .c-accordion__item.is-open {} /* is-open is added to open accordion items */
    .c-accordion__item.is-read {} /* is-read is added to accordion items that have been opened at least once */
    .c-accordion__title {} /* An accordion item title */
    .c-accordion__title--button {} /* An accordion item title that is using a `<button>` tag */
    .c-accordion__title:hover {} /* To modify the style when hovering over an accordion item title */
    .c-accordion__title:focus {} /* To modify the style when an accordion item title currently has broswer focus */
    .c-accordion__content {} /* An accordion item content container */

== Installation ==
1. Upload the 'accordion-blocks' folder to the '/wp-content/plugins/' directory.
2. Activate the plugin through the Plugins menu in WordPress.
3. Add the accordions to your content.

== Frequently Asked Questions ==

= Can I change all my existing accordion items to the defaults? =

No. It is not possible to change all your accordion item's settings (within the same page or across multiple pages) to the defaults.

Although I would like to offer this feature, based on my research it would require a significant amount of development time that I am unable to devote to a free plugin. If you are a developer and would be interested in helping implement a feature like that, please let me know.

= Why isn't the JavaScript file loading on my site? =

This is most likely caused by a poorly coded theme. This plugin makes use of the `wp_footer()` function to load the JavaScript file and it's dependancy (jQuery). Check your theme to ensure that the `wp_footer()` function is being called right before the closing `</body>` tag in your theme's footer.php file.

= Issues/Suggestions =

For bug reports or feature requests or if you'd like to contribute to the plugin you can check everything out on [Github](https://github.com/philbuchanan/Accordion-Blocks/).

== Screenshots ==

1. Accordion block settings sidebar
2. Accordion block in the editor

== Changelog ==
= 1.5.0 =
* Plugin now requires WordPress 5.9.
* Use `useInnerBlocksProps` and `useInnerBlocksProps.save()` for inner blocks handling.

= 1.4.1 =
* Fixed: Fixed UUID not generating properly in widget editor.

= 1.4.0 =
* New: Use block API v2 with useBlockProps.
* Fixed: Registering block with block.json file.
* Fixed: Use BlockControls group setting for title tag toolbar.
* Fixed: Replaced deprecated `registerStore` with `register`.
* Fixed: Reference to which script contains translations is now correct.

= 1.3.5 =
* Fixed: An issue where the global loading of scripts and styles checkbox was checked when the setting was actually off.

= 1.3.4 =
* Fixed: Made turning off global loading of scripts and styles an explicit setting. You can turn off this off in Settings > Accordion Blocks.

= 1.3.3 =
* Fixed: Rolled back deprecated `registerStore` with `register` change since it only applies to WordPress 5.7+.

= 1.3.2 =
* New: Visual indicator of bottom of block when the block is selected.
* New: Only load plugin assets when the page contains an accordion block.
* Fixed: Replaced deprecated `registerStore` with `register`.

= 1.3.1 =
* Added support for WordPress 5.7.
* New method for generating uuids that should be more reliable.

= 1.3.0 =
* New: Added h5 and h6 as options for title tag.
* New: Only users with the role of Editor or Administrator can set new default settings. All users can restore settings to defaults. This lays the groundwork for the ability to make this user definable in a settings page which may come in a future release.
* Fixed: New accordions added by Authors wouldn't function properly.

= 1.2.2 =
* Fixed: Unique IDs were not set for new accordion items for sites that didn't already have default options stored in the database.

= 1.2.1 =
* Fixed PHP error that slipped through.

= 1.2.0 =
* Added support for WordPress 5.6, including fixing jQuery Migrate issues.
* Added support for grouping accordion items.
* Added support for nested accordion items.
* Removed accordion settings API for getting and setting defaults in favour of use useEntityProp.

= 1.1.6 =
* Fixed: Use sample content (instead of real content) to preview custom blocks styles in the editor.
* Fixed: Bumped required version to WordPress 5.4.

= 1.1.5 =
* Fixed: Resolved issue with PHP notice for not setting permission_callback in REST API.

= 1.1.4 =
* Added: Support for WordPress 5.5
* Fixed: no-js styles are now specific to the accordion item block

= 1.1.3 =
* Fixed: When typing backspace on a button title, it would delete the entire accordion item instead of backspacing a character

= 1.1.2 =
* Fixed: Accordion titles once again support bold and italic formats
* Fixed: Translation should now be possible via WordPress translation site

= 1.1.1 =
* Fixed: An issue where, on some sites, accordion content would not smoothly animate open, instead just appearing instantly after a short delay
* Fixed: Duplicated accordion items now have unique IDs which should resolve the issue where clicking on the duplicate title opens the original block

= 1.1.0 =
* New: An option to set default accordion item settings that will be applied to all newly created accordions. Individual accordion items can be reset to whatever is set as the defaults.
* Fixed: Accordions not working if showing multiple posts' content on one page. Unfortunately this will only apply to newly created accordions. Old accordions will need to be replaced to work properly.
* Fixed: Users without the `unfiltered_html` permission (i.e. users with Author or lower user role) would get an "invalid content" error when viewing an accordion added by a user with the `unfiltered_html` permission (and vise-versa).

= 1.0.6 =
* Fixed typo in plugin settings

= 1.0.5 =
* Added minified versions of JS and CSS files

= 1.0.4 =
* Made plugin translatable
* Code cleanup

= 1.0.3 =
* Added the ability to convert a paragraph or heading into an accordion.

= 1.0.2 =
* Added the ability for the block in the editor to accept custom css classes (allows for custom registration of Block Styles)
* Accessibility fix: Removed aria-hidden=false from closed accordions.

= 1.0.1 =
* Updated readme.

= 1.0.0 =
* All new plugin to support the new WordPress Gutenberg editor.

== Upgrade Notice ==
= 1.5.0 =
Fixed compatibility issues with WordPress 5.9. Plugin now requires WordPress 5.9 (the changes are fundamentally incompatible with previous versions of WordPress).

= 1.4.1 =
Fixed accordions not generating UUIDs in the widgets editor, therefore breaking when returning to the widgets editor.

= 1.4.0 =
Fixed a bunch of compatibility issues with WordPress 5.8 (and the widgets block editor).

= 1.3.5 =
Fixed an issue where the global loading of scripts and styles checkbox was checked when the setting was actually off.

= 1.3.4 =
Made turning off global loading of scripts and styles an explicit setting. You can turn off this off in Settings > Accordion Blocks.

= 1.3.3 =
Rolled back deprecated `registerStore` with `register` change since it only applies to WordPress 5.7+.

= 1.3.2 =
Only load assets on pages that use the block. Added visual indicator to show bottom of block.

= 1.3.1 =
Support for WordPress 5.7 and a new method for generating uuids that should be more reliable.

= 1.3.0 =
Added h5 and h6 options for the title tag and fixed a bug where Authors may not be able to create functioning accordions.

= 1.2.2 =
Fixed an issue where all accordion item titles would open the first accordion only.

= 1.2.1 =
Fixed PHP error that slipped through in 1.2.0. Sorry about that.

= 1.2.0 =
Adds support for WordPress 5.6. Also adds support for nested and grouped accordion items.

= 1.1.6 =
Accordions now use sample content (instead of real content) to preview custom blocks styles in the editor. This should resolved slow performance in the editor if an accordion using custom block styles and has a lot of content.

= 1.1.5 =
Fixed PHP notice for API.

= 1.1.4 =
Added support for WordPress 5.5 and made no-js styles specific to the accordion item block.

= 1.1.3 =
Fixed an issue where typing backspace on a button title type would delete the entire accordion item instead of backspacing a character.

= 1.1.2 =
Restored bold and italic formatting of accordion titles and fixed translation strings.

= 1.1.1 =
Fixed a couple small bugs accidentally introduced in version 1.1.0 of the plugin.

= 1.1.0 =
Medium sized update to the plugin with a few fixes and some feature additions.

NOTE: If you have dequeued the default plugin stylesheet you may see all of your accordions animate from open to closed for a split second when the page loads. You can resolve this by adding `[data-initially-open="false"] .c-accordion__content { display: none }` to your theme stylesheet.

= 1.0.6 =
Fixed typo in plugin settings.

= 1.0.5 =
Added minified versions of JS and CSS files.

= 1.0.4 =
Made plugin translatable.

= 1.0.3 =
Added the ability to convert a paragraph or heading into an accordion.

= 1.0.2 =
Added the ability for the block in the editor to accept custom css classes (allows for custom registration of Block Styles).

= 1.0.1 =
Updated readme.

= 1.0.0 =
ALL NEW plugin to support the new WordPress Gutenberg editor.
