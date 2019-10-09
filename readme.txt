=== Accordion Blocks ===
Contributors: philbuchanan
Author URI: https://philbuchanan.com/
Donate Link: https://philbuchanan.com/
Tags: accordion, accordions, gutenberg, blocks, responsive accordions, accordions plugin, jquery accordions, accordions plugin wordpress, accordions plugin jquery
Requires at least: 5.0
Tested up to: 5.3
Stable tag: 1.0.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Gutenberg blocks for creating responsive accordion drop-downs.

== Description ==

Accordion Blocks is a simple plugin that adds Gutenberg blocks for adding accordion drop-downs to your pages.

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

= Why isn't the JavaScript file loading on my site? =

This is most likely caused by a poorly coded theme. This plugin makes use of the `wp_footer()` function to load the JavaScript file and it's dependancy (jQuery). Check your theme to ensure that the `wp_footer()` function is being called right before the closing `</body>` tag in your theme's footer.php file.

= Issues/Suggestions =

For bug reports or feature requests or if you'd like to contribute to the plugin you can check everything out on [Github](https://github.com/philbuchanan/Accordion-Blocks/).

== Changelog ==
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
= 1.0.3 =
Added the ability to convert a paragraph or heading into an accordion.

= 1.0.2 =
Added the ability for the block in the editor to accept custom css classes (allows for custom registration of Block Styles).

= 1.0.1 =
Updated readme.

= 1.0.0 =
ALL NEW plugin to support the new WordPress Gutenberg editor.
