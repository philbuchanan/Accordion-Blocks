=== Accordion Blocks ===
Contributors: philbuchanan
Author URI: https://philbuchanan.com/
Donate Link: https://philbuchanan.com/donate/
Tags: accordion, accordions, gutenberg, block, responsive
Requires at least: 5.0
Tested up to: 5.5
Stable tag: 1.1.5
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
* Accessible (for users requiring tabbed keyboard navigation control).

= Optional Features =

* Open individual accordion items by default.
* Disable auto closing of accordion items.
* Manually close items by clicking the title again.
* Scroll page to title when it's clicked open (including setting a scroll offset position).
* Set the HTML heading tag for the title element (h1–h4, button).
* Set defaults to be applied to all new accordion items or reset a specific accordion item to the defaults.

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
