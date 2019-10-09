/**
 * WordPress dependencies
 */
const {
	registerBlockType,
} = wp.blocks;

const {
	InnerBlocks,
	RichText,
} = wp.blockEditor;



/**
 * Internal dependencies
 */
import settings from './settings';

import transforms from './transforms';

import edit from './edit';



registerBlockType('pb/accordion-item', {
	...settings,

	transforms,

	edit,

	save: ({ attributes }) => {
		const {
			className,
			title,
			initiallyOpen,
			clickToClose,
			autoClose,
			titleTag,
			scroll,
			scrollOffset,
			uuid,
		} = attributes;

		var itemClasses = [
			'c-accordion__item',
			'js-accordion-item',
			'no-js',
		];

		var titleClasses = [
			'c-accordion__title',
			'js-accordion-controller',
		];

		var contentStyles = {};

		if (titleTag === 'button') {
			titleClasses.push('c-accordion__title--button');
		}

		if (initiallyOpen) {
			itemClasses.push('is-open');
		}
		else {
			contentStyles.display = 'none';
		}

		return (
			<div
				className={ [...itemClasses, className].join(' ') }
				data-initially-open={ initiallyOpen }
				data-click-to-close={ clickToClose }
				data-auto-close={ autoClose }
				data-scroll={ scroll }
				data-scroll-offset={ scrollOffset }
			>
				<RichText.Content
					id={ 'at-' + uuid }
					className={ titleClasses.join(' ') }
					tagName={ titleTag }
					tabIndex={ 0 }
					role="button"
					aria-controls={ 'ac-' + uuid }
					value={ title }
				/>
				<div
					id={ 'ac-' + uuid }
					className="c-accordion__content"
					style={ contentStyles }
				>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
});
