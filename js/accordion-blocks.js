(function($) {
	'use strict';

	// Remove the 'no-js' class since JavaScript is enabled
	$('.js-accordion-item').removeClass('no-js');



	/**
	 * Accordion Blocks plugin function
	 *
	 * @param object options Plugin settings to override the defaults
	 */
	$.fn.accordionBlockItem = function(options) {
		var settings = $.extend({
			// Set default settings
			initiallyOpen: false,
			autoClose:     true,
			clickToClose:  true,
			scroll:        false,
			scrollOffset:  false,
		}, options);

		var duration = 250;
		var hashID = window.location.hash.replace('#', '');

		var item = {};

		item.self       = $(this);
		item.id         = $(this).attr('id');
		item.controller = $(this).children('.js-accordion-controller');
		item.uuid       = getAccordionItemUUID(item.self);
		item.content    = $('#ac-' + item.uuid);
		item.accordionGroupItems = [item.uuid];
		item.accordionAncestorItems = [];



		/**
		 * Initial setup
		 * Set the scroll offset, and figure out which items should be open by
		 * default.
		 */
		(function initialSetup() {
			/**
			 * Set up some defaults for this controller
			 * These cannot be set in the blocks `save` function because
			 * WordPress strips `tabindex` and `aria-controls` attributes from
			 * saved post content. See `_wp_add_global_attributes` function in
			 * wp-includes/kses.php for list of allowed attributes.
			 */
			item.controller.attr({
				'tabindex': 0,
				'aria-controls': 'ac-' + item.uuid,
			});

			settings.scrollOffset = Math.floor(parseInt(settings.scrollOffset, 10)) || 0;

			/**
			 * Add any sibling accordion items to the accordionGroupItems array.
			 */
			$.each(item.self.siblings('.js-accordion-item'), function(index, ele) {
				var uuid = getAccordionItemUUID(ele);

				item.accordionGroupItems.push(uuid);
			});

			/**
			 * Add any parent accordion items to the accordionAncestorItems array.
			 */
			$.each(item.self.parents('.js-accordion-item'), function(index, ele) {
				var uuid = getAccordionItemUUID(ele);

				item.accordionAncestorItems.push(uuid);
			});

			// If this item has `initially-open prop` set to true, open it
			if (settings.initiallyOpen) {
				/**
				 * We aren't opening the item here (only setting open attributes)
				 * because the openItem() function fires the `openAccordionItem`
				 * event which, if `autoClose` is set, would override the users
				 * defined initiallyOpen settings.
				 *
				 * Only setting open attributes is fine since the item's content
				 * display (`display: none|block`) is already set by the plugin.
				 */
				setOpenItemAttributes();
			}
			// If the hash matches this item, open it
			else if (item.id === hashID) {
				/**
				 * Unlike the `initiallyOpen` case above, if a hash is detected
				 * that matches one of the accordion items, we probably _want_
				 * the other items to close so the user can focus on this item.
				 */
				openItem();

				// Open ancestors if necessary
				$.each(item.accordionAncestorItems, function(index, uuid) {
					$(document).trigger('openAncestorAccordionItem', uuid);
				});
			}
			// Otherwise, close the item
			else {
				/**
				 * Don't use closeItem() function call since it animates the
				 * closing. Instead, we only need to set the closed attributes.
				 */
				setCloseItemAttributes();
			}
		})();



		/**
		 * Default click function
		 * Called when an accordion controller is clicked.
		 */
		function clickHandler() {
			// Only open the item if item isn't already open
			if (!item.self.hasClass('is-open')) {
				// Open clicked item
				openItem();
			}
			// If item is open, and click to close is set, close it
			else if (settings.clickToClose) {
				closeItem();
			}

			return false;
		}



		/**
		 * Get the accordion item UUID for a given accordion item DOM element.
		 */
		function getAccordionItemUUID(ele) {
			return $(ele).children('.js-accordion-controller').attr('id').replace('at-', '');
		}



		/**
		 * Opens an accordion item
		 * Also handles accessibility attribute settings.
		 */
		function openItem() {
			setOpenItemAttributes();

			// Clear/stop any previous animations before revealing content
			item.content.clearQueue().stop().slideDown(duration, function() {
				// Scroll page to the title
				if (settings.scroll) {
					// Pause scrolling until other items have closed
					setTimeout(function() {
						$('html, body').animate({
							scrollTop: item.self.offset().top - settings.scrollOffset
						}, duration);
					}, duration);
				}
			});

			$(document).trigger('openAccordionItem', item);
		}



		/**
		 * Set open item attributes
		 * Mark accordion item as open and read and set aria attributes.
		 */
		function setOpenItemAttributes() {
			item.self.addClass('is-open is-read');
			item.controller.attr('aria-expanded', true);
			item.content.prop('hidden', false);
		}



		/**
		 * Closes an accordion item
		 * Also handles accessibility attribute settings.
		 */
		function closeItem() {
			// Close the item
			item.content.slideUp(duration, function() {
				setCloseItemAttributes();
			});
		}



		/**
		 * Set closed item attributes
		 * Mark accordion item as closed and set aria attributes.
		 */
		function setCloseItemAttributes() {
			item.self.removeClass('is-open');
			item.controller.attr('aria-expanded', false);
			item.content.attr('hidden', true);
		}



		/**
		 * Close all items if auto close is enabled
		 */
		function maybeCloseItem() {
			if (settings.autoClose && item.self.hasClass('is-open')) {
				closeItem();
			}
		}



		/**
		 * Add event listeners
		 */
		item.controller.on('click', clickHandler);



		/**
		 * Listen for other accordion items opening
		 *
		 * The `openAccordionItem` event is fired whenever an accordion item is
		 * opened after initial plugin setup.
		 */
		$(document).on('openAccordionItem', function(event, ele) {
			/**
			 * Only trigger potential close these conditions are met:
			 *
			 * 1. This isn't the item the user just clicked to open.
			 * 2. This accordion is in the same group of accordions as the one
			 *    that was just clicked to open.
			 * 3. This accordion is not an ancestor of the item that was just
			 *    clicked to open.
			 *
			 * This serves two purposes:
			 *
			 * 1. It allows nesting of accordions to work.
			 * 2. It allows users to group accordions to control independently
			 *    of other groups of accordions.
			 * 3. It allows child accordions to be opened via hash change
			 *    without automatically closing the parent accordion, therefore
			 *    hiding the accordion the user just indicated they wanted open.
			 */
			if (
				ele !== item &&
				ele.accordionGroupItems.indexOf(item.uuid) > 0 &&
				ele.accordionAncestorItems.indexOf(item.uuid) === -1
			) {
				maybeCloseItem();
			}
		});



		/**
		 * Listen for ancestor opening requests
		 *
		 * The `openAncestorAccordionItem` event is fired whenever a nested
		 * accordion item is opened, but the ancestors may also need to be
		 * opened.
		 */
		$(document).on('openAncestorAccordionItem', function(event, uuid) {
			if (uuid === item.uuid) {
				openItem();
			}
		});



		item.controller.on('keydown', function(event) {
			var code = event.which;

			if (item.controller.prop('tagName') !== 'BUTTON') {
				// 13 = Return, 32 = Space
				if ((code === 13) || (code === 32)) {
					// Simulate click on the controller
					$(this).click();
				}
			}

			// 27 = Esc
			if (code === 27) {
				maybeCloseItem();
			}
		});

		// Listen for hash changes (in page jump links for accordions)
		$(window).on('hashchange', function() {
			hashID = window.location.hash.replace('#', '');

			// Only open this item if the has matches the ID
			if (hashID === item.id) {
				var ele = $('#' + hashID);

				// If there is a hash and the hash is on an accordion item
				if (ele.length && ele.hasClass('js-accordion-item')) {
					// Open clicked item
					openItem();

					// Open ancestors if necessary
					$.each(item.accordionAncestorItems, function(index, uuid) {
						$(document).trigger('openAncestorAccordionItem', uuid);
					});
				}
			}
		});

		return this;
	};



	// Loop through accordion settings objects
	// Wait for the entire page to load before loading the accordion
	$(window).on('load', function() {
		$('.js-accordion-item').each(function() {
			$(this).accordionBlockItem({
				// Set default settings
				initiallyOpen: $(this).data('initially-open'),
				autoClose:     $(this).data('auto-close'),
				clickToClose:  $(this).data('click-to-close'),
				scroll:        $(this).data('scroll'),
				scrollOffset:  $(this).data('scroll-offset'),
			});
		});
	});
}(jQuery));
