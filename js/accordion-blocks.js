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
		item.content    = $('#' +  item.controller.attr('aria-controls'));



		/**
		 * Initial setup
		 * Set the scroll offset, and figure out which items should be open by
		 * default.
		 */
		(function initialSetup() {
			settings.scrollOffset = Math.floor(parseInt(settings.scrollOffset)) | 0;

			// If this item has `initally-open prop` set to true, open it
			if (settings.initiallyOpen) {
				/**
				 * We aren't opening the item here (only setting open attributes)
				 * becuase the openItem() function fires the `openAccordionItem`
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
			}
			// Otherwise, close the item
			else {
				/**
				 * Don't use closeItem() function call since it animates the
				 * closing. Insteady, we only need to set the closed attributes.
				 */
				setCloseItemAttributes();
			}
		})();



		/**
		 * Defualt click function
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
		 * Opens an accordion item
		 * Also handles accessibility attribute settings.
		 */
		function openItem() {
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

			setOpenItemAttributes();

			$(document).trigger('openAccordionItem', item);
		}



		/**
		 * Set open item attributes
		 * Mark accordion item as open and read and set aria attributes.
		 */
		function setOpenItemAttributes() {
			item.self.addClass('is-open is-read');
			item.controller.attr({
				'aria-expanded': 'true',
			});
			item.content.removeAttr('aria-hidden');
		}



		/**
		 * Closes an accordion item
		 * Also handles accessibility attribute settings.
		 */
		function closeItem() {
			// Close the item
			item.content.slideUp(duration);

			setCloseItemAttributes();
		}



		/**
		 * Set closed item attributes
		 * Mark accordion item as closed and set aria attributes.
		 */
		function setCloseItemAttributes() {
			item.self.removeClass('is-open');
			item.controller.attr({
				'aria-expanded': 'false',
			});
			item.content.attr({
				'aria-hidden': 'true',
			});
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
		item.controller.click(clickHandler);



		/**
		 * Listen for other accordion items opening
		 *
		 * The `openAccordionItem` event is fired whenever an accordion item is
		 * opened after initial plugin setup.
		 */
		$(document).on('openAccordionItem', function(event, ele) {
			if (ele !== item) {
				maybeCloseItem();
			}
		});

		item.controller.keydown(function(event) {
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
