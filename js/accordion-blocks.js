/* plain JS slideToggle https://github.com/ericbutler555/plain-js-slidetoggle */
function _s(o, i, p, l) { void 0 === i && (i = 400), void 0 === l && (l = !1), o.style.overflow = "hidden", l && (o.style.display = "block"); var n, t = window.getComputedStyle(o), s = parseFloat(t.getPropertyValue("height")), a = parseFloat(t.getPropertyValue("padding-top")), r = parseFloat(t.getPropertyValue("padding-bottom")), y = parseFloat(t.getPropertyValue("margin-top")), d = parseFloat(t.getPropertyValue("margin-bottom")), g = s / i, m = a / i, h = r / i, u = y / i, x = d / i; window.requestAnimationFrame(function t(e) { void 0 === n && (n = e); e -= n; l ? (o.style.height = g * e + "px", o.style.paddingTop = m * e + "px", o.style.paddingBottom = h * e + "px", o.style.marginTop = u * e + "px", o.style.marginBottom = x * e + "px") : (o.style.height = s - g * e + "px", o.style.paddingTop = a - m * e + "px", o.style.paddingBottom = r - h * e + "px", o.style.marginTop = y - u * e + "px", o.style.marginBottom = d - x * e + "px"), i <= e ? (o.style.height = "", o.style.paddingTop = "", o.style.paddingBottom = "", o.style.marginTop = "", o.style.marginBottom = "", o.style.overflow = "", l || (o.style.display = "none"), "function" == typeof p && p()) : window.requestAnimationFrame(t) }) } HTMLElement.prototype.slideToggle = function (t, e) { 0 === this.clientHeight ? _s(this, t, e, !0) : _s(this, t, e) }, HTMLElement.prototype.slideUp = function (t, e) { _s(this, t, e) }, HTMLElement.prototype.slideDown = function (t, e) { _s(this, t, e, !0) };

class AccordionItem extends HTMLElement {
	static get defaultConfig() {
		return {
			// Set default settings
			initiallyOpen: false,
			openBreakpoint: 0,
			autoClose: true,
			clickToClose: true,
			scroll: false,
			scrollOffset: false,
		}
	}

	static get class() {
		return 'js-accordion-item';
	}

	static get duration() {
		return 250;
	}

	/**
	 * Initialize component
	 */
	constructor() {
		super();

		this.toggle = this.toggle.bind(this);
		this.onkeydown = this.onkeydown.bind(this);

		this.isOpen = false;
		this.uuid = parseInt(this.dataset.uuid, 10);
		this.classList.remove('no-js');

		// Get ancestors and siblings
		this.ancestors = this.getAncestors();
		this.siblings = this.getSiblings();

		// Save children elements
		this.controller = this.querySelector(':scope > #at-' + this.uuid);
		this.content = this.querySelector(':scope > #ac-' + this.uuid);

		// Add Listeners
		this.controller.addEventListener('click', this.toggle);
		this.controller.addEventListener('keydown', this.onkeydown);

		// Set basic attributes
		this.controller.setAttribute('tabindex', 0);
		this.controller.setAttribute('aria-controls', '#ac-' + this.uuid);

		// Get the config from the dataset
		this.getConfig();

		// Set default attributes
		this.setAttributes(this.isOpen);
	}

	/**
	 * Go up the DOM tree to retrieve ancestors accordion items (in case of nested items)
	 * @returns array
	 */
	getAncestors() {
		let current = this;
		let list = [];

		while (current.parentNode != null && current.parentNode != document.documentElement) {
			if (current.parentNode.classList.contains(AccordionItem.class)) {
				list.push(current.parentNode);
			}
			current = current.parentNode;
		}
		return list;
	}

	/**
	 * Get immediately adjacent Accordion items
	 * @returns array
	 */
	getSiblings() {
		const siblings = [];
		['previous', 'next'].forEach(dir => {
			let element = this;
			while (element) {
				if (element[dir + 'ElementSibling'] && element[dir + 'ElementSibling'].nodeName === 'ACCORDION-ITEM') {
					element = element[dir + 'ElementSibling'];
					siblings.push(element);
				} else {
					element = null;
				}
			}
		});

		return siblings;
	}

	/**
	 * Retrieve item configuration by looking at dataset
	 * then sets the inital state of the component
	 */
	getConfig() {
		const nodeConfig = {};
		for (const key in this.dataset) {
			nodeConfig[key] = this.maybeParse(this.dataset[key]);
		}
		this.config = Object.assign({}, AccordionItem.defaultConfig, nodeConfig);

		const shouldOpen = this.config.initiallyOpen && window.innerWidth >= this.config.openBreakpoint;

		if (shouldOpen || this.isInHash()) {
			this.isOpen = true;
			this.checkAncestors();
		}
	}

	/**
	 * Checks if the window hash matches the compenent uuid
	 * @returns Boolean
	 */
	isInHash() {
		return parseInt(location.hash.replace('#', ''), 10) === this.uuid;
	}

	/**
	 * Try parsing a string and returns the result
	 * @param {string} string
	 * @returns mixed
	 */
	maybeParse(string) {
		return (() => {
			try {
				return JSON.parse(string);
			} catch (error) {
				return string;
			}
		})();
	}

	/**
	 * Handles Escape, Space & Enter key
	 * @param {KeyboardEvent} event
	 */
	onkeydown(event) {
		if (event.key === 'Escape') {
			this.close();
		}

		if (event.code === 'Space' || event.key === 'Enter') {
			if (this.controller.nodeName !== 'BUTTON') {
				event.preventDefault();
				event.stopPropagation();
				this.toggle();
			}
		}
	}

	/**
	 * Opens the item
	 * @param {object} option
	 */
	open(option = {}) {
		const { noSiblingsCheck, noScroll, noAncestorsCheck, noChecksAndScroll, noAnim } = option;
		this.isOpen = true;
		this.content.removeAttribute('hidden');

		this.content.slideDown(noAnim ? 0 : AccordionItem.duration, () => {
			this.setAttributes(true);
			this.triggerResize();
		});

		if (!noChecksAndScroll) {
			if (!noScroll) {
				this.scrollToElement();
			}

			if (!noAncestorsCheck) {
				this.checkAncestors();
			}

			if (!noSiblingsCheck) {
				this.checkSiblings();
			}
		}

	}

	maybeOpen() {
		if (!this.isOpen && !this.isRead && this.config.initiallyOpen && window.innerWidth >= this.config.openBreakpoint) {
			this.open({ noSiblingsCheck: true, noScroll: true });
		}
	}

	/**
	 * Closes the item
	 * @param {object} options
	 */
	close(options = {}) {
		const { noAnim, force } = options;
		if ((this.config.clickToClose || force) && this.isOpen) {
			this.isOpen = false;
			this.content.slideUp(noAnim ? 0 : AccordionItem.duration, () => {
				this.setAttributes(false);
				this.triggerResize();
			});
		}
	}

	/**
	 * Toggles the item
	 */
	toggle() {
		this[this.isOpen ? 'close' : 'open']();
	}

	/**
	 * Scroll the window to the item's position
	 */
	scrollToElement() {
		if (this.config.scroll) {
			setTimeout(() => {
				requestIdleCallback(() => {
					const currentPos = this.getBoundingClientRect().top;
					scrollTo({
						top: (currentPos + document.documentElement.scrollTop) - this.config.scrollOffset,
						behavior: 'smooth'
					});
				});
			}, AccordionItem.duration + 150);
		}
	}

	/**
	 * Set attributes and classes according to the current state
	 * @param {boolean} open
	 */
	setAttributes(open = true) {
		if (open) {
			this.classList.add('is-read', 'is-open');
			this.isRead = true;
		} else {
			this.classList.remove('is-open');
		}

		this.controller.setAttribute('aria-expanded', this.isOpen);
		open ? this.content.removeAttribute('hidden') : this.content.setAttribute('hidden', !!window.chrome ? 'until-found' : '');
		this.content.style = null;
	}

	/**
	 * Automatically opens ancestors when opening the item
	 */
	checkAncestors() {
		this.ancestors.forEach(element => {
			if (!element.isOpen) {
				element.open({ noSiblingsCheck: true });
			}
		});
	}

	/**
	 * Automatically closes siblings when opening then item
	 */
	checkSiblings() {
		this.siblings.forEach(element => {
			if (element.config.autoClose) {
				element.close({ force: true });
			}
		});
	}

	/**
	 * Dispatch a resize event after opening or closing the item
	 */
	triggerResize() {
		const event = new Event('resize');
		event.isAfterToggle = true;
		dispatchEvent(event);
	}
}

/**
 * Register custom elements & hashchange listener
 */
if (typeof customElements !== 'undefined') {
	customElements.define('accordion-item', AccordionItem);

	const items = document.querySelectorAll('accordion-item');
	const eventParams = { capture: false };
	let resizeDebounce;

	addEventListener('hashchange', () => {
		const hash = location.hash.replace('#', '');
		const match = document.querySelector(`[data-uuid="${hash}"]`);

		if (match && match instanceof AccordionItem) {
			match.open();
		}
	}, eventParams);

	addEventListener('resize', (event) => {
		if (!event.isTrusted) return;

		clearTimeout(resizeDebounce);
		resizeDebounce = setTimeout(() => {
			items.forEach(item => item.maybeOpen());
		}, 150);
	}, eventParams);

	// Open all items on cmd/ctrl F on browser without until-found support
	if (!window.chrome) {
		addEventListener('keydown', (event) => {
			if ((event.ctrlKey || event.metaKey) && event.code === 'KeyF') {
				items.forEach(item => item.open());
			}
		});
	}
}
