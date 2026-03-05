/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

/**
 * Helper function to validate and sanitize legacy accordion attributes
 * @param {Object} attributes - Legacy block attributes
 * @returns {Object} Validated and sanitized attributes
 */
const validateAndSanitize = (attributes) => ({
	title: attributes.title || 'Accordion Item',
	titleTag: /^h[1-6]$|^button$/.test(attributes.titleTag) ? attributes.titleTag : 'h2',
	initiallyOpen: Boolean(attributes.initiallyOpen),
	autoClose: Boolean(attributes.autoClose),
	clickToClose: Boolean(attributes.clickToClose),
	scroll: Boolean(attributes.scroll),
	scrollOffset: Number(attributes.scrollOffset) || 0,
	uuid: attributes.uuid,
	anchor: attributes.anchor || '',
	className: attributes.className || ''
});

/**
 * Maps legacy titleTag to heading level number
 * @param {string} titleTag - Legacy title tag (h1-h6 or button)
 * @returns {number} Heading level (1-6)
 */
const mapTitleTag = (titleTag) => {
	if (titleTag === 'button') return 2; // Default to h2 for buttons
	const match = titleTag.match(/^h(\d)$/);
	return match ? parseInt(match[1]) : 2;
};

/**
 * Maps legacy attributes to core accordion attributes
 * @param {Object} legacyAttrs - Legacy block attributes
 * @returns {Object} Mapped attributes for core blocks
 */
const mapAttributes = (legacyAttrs) => {
	const sanitized = validateAndSanitize(legacyAttrs);
	
	return {
		accordion: {
			iconPosition: 'right',
			showIcon: true,
			autoclose: sanitized.autoClose,
			headingLevel: mapTitleTag(sanitized.titleTag)
		},
		item: {
			openByDefault: sanitized.initiallyOpen
		},
		heading: {
			title: sanitized.title,
			level: mapTitleTag(sanitized.titleTag),
			openByDefault: sanitized.initiallyOpen,
			iconPosition: 'right',
			showIcon: true,
			anchor: sanitized.anchor,
			className: sanitized.className
		},
		panel: {
			openByDefault: sanitized.initiallyOpen,
			templateLock: false
		}
	};
};

/**
 * Preserves CSS classes by filtering out legacy-specific ones
 * @param {string} className - Original class string
 * @returns {string} Filtered class string
 */
const preserveClasses = (className) => {
	if (!className) return '';
	
	const legacyClasses = ['c-accordion__item', 'js-accordion-item', 'no-js'];
	return className
		.split(' ')
		.filter(cls => cls && !legacyClasses.includes(cls))
		.join(' ');
};

/**
 * Detects nested accordion blocks within inner blocks
 * @param {Array} innerBlocks - Array of inner blocks to analyze
 * @returns {Object} Object with nestedAccordions and regularBlocks arrays
 */
const findNestedAccordions = (innerBlocks) => {
	const nestedAccordions = [];
	const regularBlocks = [];
	
	if (!Array.isArray(innerBlocks)) {
		return { nestedAccordions, regularBlocks };
	}
	
	innerBlocks.forEach(block => {
		if (block && block.name === 'pb/accordion-item') {
			nestedAccordions.push(block);
		} else if (block) {
			regularBlocks.push(block);
		}
	});
	
	return { nestedAccordions, regularBlocks };
};

/**
 * Gets the highest heading level (numerically lowest) from an array of accordion blocks
 * @param {Array} accordionBlocks - Array of accordion blocks with attributes
 * @returns {number} Highest heading level (1-6)
 */
const getHighestHeadingLevel = (accordionBlocks) => {
	if (!Array.isArray(accordionBlocks) || accordionBlocks.length === 0) {
		return 2; // Default to h2
	}
	
	let highestLevel = 6; // Start with lowest priority (h6)
	
	accordionBlocks.forEach(block => {
		if (block && block.attributes && block.attributes.titleTag) {
			const level = mapTitleTag(block.attributes.titleTag);
			if (level < highestLevel) {
				highestLevel = level;
			}
		}
	});
	
	return highestLevel;
};

/**
 * Checks if any accordion block has autoClose enabled
 * @param {Array} accordionBlocks - Array of accordion blocks with attributes
 * @returns {boolean} True if any block has autoClose enabled
 */
const hasAnyAutoClose = (accordionBlocks) => {
	if (!Array.isArray(accordionBlocks)) {
		return false;
	}
	
	return accordionBlocks.some(block => 
		block && block.attributes && Boolean(block.attributes.autoClose)
	);
};

/**
 * Transforms nested accordion blocks recursively
 * @param {Array} nestedAccordions - Array of nested accordion blocks
 * @returns {Array} Array containing nested accordion structure
 */
const transformNestedAccordions = (nestedAccordions) => {
	if (!Array.isArray(nestedAccordions) || nestedAccordions.length === 0) {
		return [];
	}
	
	try {
		// Create nested accordion structure with aggregated attributes
		const nestedAccordionAttrs = {
			iconPosition: 'right',
			showIcon: true,
			headingLevel: getHighestHeadingLevel(nestedAccordions),
			autoclose: hasAnyAutoClose(nestedAccordions)
		};
		
		// Transform each nested accordion to accordion-item
		const nestedItems = nestedAccordions.map(accordion => {
			// Process inner blocks recursively for deeper nesting
			const processedInnerBlocks = processInnerBlocks(accordion.innerBlocks || []);
			
			// Create the accordion item structure
			const mappedAttrs = mapAttributes(accordion.attributes || {});
			
			const headingBlock = createBlock('core/accordion-heading', {
				...mappedAttrs.heading,
				className: preserveClasses(mappedAttrs.heading.className)
			});
			
			const panelBlock = createBlock('core/accordion-panel', mappedAttrs.panel, processedInnerBlocks);
			
			return createBlock('core/accordion-item', mappedAttrs.item, [
				headingBlock,
				panelBlock
			]);
		});
		
		// Return nested accordion block
		return [createBlock('core/accordion', nestedAccordionAttrs, nestedItems)];
	} catch (error) {
		console.error('Nested accordion transform error:', error);
		// Return empty array on error to avoid breaking the transformation
		return [];
	}
};

/**
 * Recursively processes inner blocks, handling nested accordions
 * @param {Array} innerBlocks - Array of inner blocks to process
 * @returns {Array} Processed blocks with nested accordions transformed
 */
const processInnerBlocks = (innerBlocks) => {
	if (!Array.isArray(innerBlocks)) {
		return [];
	}
	
	try {
		const { nestedAccordions, regularBlocks } = findNestedAccordions(innerBlocks);
		
		// If no nested accordions, return regular blocks as-is
		if (nestedAccordions.length === 0) {
			return regularBlocks;
		}
		
		// Transform nested accordions and combine with regular blocks
		const transformedNestedAccordions = transformNestedAccordions(nestedAccordions);
		
		// Combine regular blocks with transformed nested accordions
		return [...regularBlocks, ...transformedNestedAccordions];
	} catch (error) {
		console.error('Process inner blocks error:', error);
		// Return original blocks on error
		return innerBlocks;
	}
};

/**
 * Transforms multiple legacy accordions to single core accordion
 * @param {Array} attributesArray - Array of attributes from selected blocks
 * @param {Array} innerBlocksArray - Array of inner blocks arrays from selected blocks
 * @returns {Object} Single core accordion containing multiple items
 */
const transformMultipleToAccordion = (attributesArray, innerBlocksArray) => {
	try {
		if (!Array.isArray(attributesArray) || !Array.isArray(innerBlocksArray)) {
			throw new Error('Invalid input arrays for multi-block transform');
		}
		
		if (attributesArray.length !== innerBlocksArray.length) {
			throw new Error('Attributes and inner blocks arrays must have same length');
		}
		
		// Aggregate attributes from all blocks
		const aggregatedAttrs = {
			iconPosition: 'right',
			showIcon: true,
			headingLevel: getHighestHeadingLevel(
				attributesArray.map((attrs, index) => ({ attributes: attrs }))
			),
			autoclose: attributesArray.some(attrs => Boolean(attrs && attrs.autoClose))
		};
		
		// Transform each legacy accordion to accordion-item
		const accordionItems = attributesArray.map((attributes, index) => {
			const innerBlocks = innerBlocksArray[index] || [];
			
			// Process inner blocks recursively for nested accordions
			const processedInnerBlocks = processInnerBlocks(innerBlocks);
			
			// Map attributes for this item
			const mappedAttrs = mapAttributes(attributes || {});
			
			// Create heading block
			const headingBlock = createBlock('core/accordion-heading', {
				...mappedAttrs.heading,
				className: preserveClasses(mappedAttrs.heading.className)
			});
			
			// Create panel block with processed inner blocks
			const panelBlock = createBlock('core/accordion-panel', mappedAttrs.panel, processedInnerBlocks);
			
			// Create accordion item
			return createBlock('core/accordion-item', mappedAttrs.item, [
				headingBlock,
				panelBlock
			]);
		});
		
		// Create parent accordion with all items
		return createBlock('core/accordion', aggregatedAttrs, accordionItems);
	} catch (error) {
		console.error('Multi-block transform error:', error);
		
		// Fallback: create accordion with minimal items
		const fallbackItems = attributesArray.map((attributes) => {
			const fallbackHeading = createBlock('core/accordion-heading', {
				title: (attributes && attributes.title) || 'Accordion Item',
				level: 2,
				openByDefault: false,
				iconPosition: 'right',
				showIcon: true
			});
			
			const fallbackPanel = createBlock('core/accordion-panel', {
				openByDefault: false,
				templateLock: false
			}, []);
			
			return createBlock('core/accordion-item', {
				openByDefault: false
			}, [fallbackHeading, fallbackPanel]);
		});
		
		return createBlock('core/accordion', {
			iconPosition: 'right',
			showIcon: true,
			autoclose: false,
			headingLevel: 2
		}, fallbackItems);
	}
};

/**
 * Transforms a single legacy accordion to core format
 * @param {Object} attributes - Legacy block attributes
 * @param {Array} innerBlocks - Array of inner blocks
 * @param {boolean} isNested - Whether this is a nested transformation
 * @returns {Object} Core accordion block structure
 */
const transformToAccordion = (attributes, innerBlocks, isNested = false) => {
	try {
		const mappedAttrs = mapAttributes(attributes);
		
		// Process inner blocks recursively to handle nested accordions
		const processedInnerBlocks = processInnerBlocks(innerBlocks || []);
		
		// Create accordion heading block
		const headingBlock = createBlock('core/accordion-heading', {
			...mappedAttrs.heading,
			className: preserveClasses(mappedAttrs.heading.className)
		});
		
		// Create accordion panel block with processed inner blocks
		const panelBlock = createBlock('core/accordion-panel', mappedAttrs.panel, processedInnerBlocks);
		
		// Create accordion item containing heading and panel
		const itemBlock = createBlock('core/accordion-item', mappedAttrs.item, [
			headingBlock,
			panelBlock
		]);
		
		// Create parent accordion block
		const accordionBlock = createBlock('core/accordion', mappedAttrs.accordion, [itemBlock]);
		
		return accordionBlock;
	} catch (error) {
		console.error('Transform error:', error);
		
		// Fallback: create minimal accordion structure
		const fallbackHeading = createBlock('core/accordion-heading', {
			title: attributes.title || 'Accordion Item',
			level: 2,
			openByDefault: false,
			iconPosition: 'right',
			showIcon: true
		});
		
		const fallbackPanel = createBlock('core/accordion-panel', {
			openByDefault: false,
			templateLock: false
		}, innerBlocks || []);
		
		const fallbackItem = createBlock('core/accordion-item', {
			openByDefault: false
		}, [fallbackHeading, fallbackPanel]);
		
		return createBlock('core/accordion', {
			iconPosition: 'right',
			showIcon: true,
			autoclose: false,
			headingLevel: 2
		}, [fallbackItem]);
	}
};

export default {
	from: [
		{
			type: 'block',
			blocks: ['core/heading'],
			transform: (attributes) => {
				return createBlock('pb/accordion-item', {
					title: attributes.content,
					titleTag: 'h' + (attributes.level <= 4 ? attributes.level : 2),
				});
			},
		},
		{
			type: 'block',
			isMultiBlock: true,
			blocks: ['core/paragraph'],
			transform: (attributes) => {
				return createBlock('pb/accordion-item', {}, attributes.map(
					item => createBlock('core/paragraph', {
						content: item.content
					})
				));
			},
		},
	],
	to: [
		{
			type: 'block',
			blocks: ['core/paragraph'],
			transform: (attributes, innerBlocks) => {
				let newBlocks = innerBlocks.map(block => createBlock(block.name, block.attributes));

				const level = attributes.titleTag !== 'button' ?
					parseInt(attributes.titleTag.replace('h', '')) : 2;

				newBlocks.splice(0, 0, createBlock('core/heading', {
					content:   attributes.title,
					anchor:    attributes.anchor,
					className: attributes.className,
					level:     level,
				}));

				return newBlocks;
			},
		},
		{
			type: 'block',
			blocks: ['core/accordion'],
			transform: (attributes, innerBlocks) => {
				return transformToAccordion(attributes, innerBlocks, false);
			},
		},
		{
			type: 'block',
			isMultiBlock: true,
			blocks: ['core/accordion'],
			transform: (attributesArray, innerBlocksArray) => {
				return transformMultipleToAccordion(attributesArray, innerBlocksArray);
			},
		},
	],
};
