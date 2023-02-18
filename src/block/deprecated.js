/**
 * WordPress dependencies
 */
import { InnerBlocks, RichText } from '@wordpress/block-editor';

const deprecated = [
	{
		attributes: {
			title: {
				type: 'array',
				source: 'children',
				selector: '.c-accordion__title',
			},
			initiallyOpen: {
				type: 'boolean',
				default: false,
			},
			openBreakpoint: {
				type: 'number',
				default: 0,
			},
			clickToClose: {
				type: 'boolean',
				default: true,
			},
			autoClose: {
				type: 'boolean',
				default: true,
			},
			titleTag: {
				type: 'string',
				default: 'h2',
			},
			scroll: {
				type: 'boolean',
				default: false,
			},
			scrollOffset: {
				type: 'number',
				default: 0,
			},
			uuid: {
				type: 'number',
			},
		},

		supports: {
			anchor: true,
		},

		save: ({ attributes }) => {
			const {
				className,
				title,
				initiallyOpen,
				openBreakpoint,
				clickToClose,
				autoClose,
				titleTag,
				scroll,
				scrollOffset,
				uuid,
			} = attributes;

			let itemClasses = [
				'c-accordion__item',
				'js-accordion-item',
				'no-js',
			];

			let titleClasses = [
				'c-accordion__title',
				'js-accordion-controller',
			];

			let contentStyles = {};

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
					className={[...itemClasses, className].join(' ')}
					data-initially-open={initiallyOpen}
					data-open-breakpoint={openBreakpoint}
					data-click-to-close={clickToClose}
					data-auto-close={autoClose}
					data-scroll={scroll}
					data-scroll-offset={scrollOffset}
				>
					<RichText.Content
						id={'at-' + uuid}
						className={titleClasses.join(' ')}
						tagName={titleTag}
						tabIndex={0}
						role="button"
						aria-controls={'ac-' + uuid}
						value={title}
					/>
					<div
						id={'ac-' + uuid}
						className="c-accordion__content"
						style={contentStyles}
					>
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	},
];

export default deprecated;
