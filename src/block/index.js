/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import {
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './index.scss';
import './editor.scss';
import settings from './settings';
import transforms from './transforms';
import edit from './edit';
import deprecated from './deprecated';

import classNames from 'classnames';

registerBlockType('pb/accordion-item', {
	...settings,

	transforms,

	edit,

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

		let contentStyles = {};

		if (initiallyOpen) {
			itemClasses.push('is-open');
		} else {
			contentStyles.display = 'none';
		}

		const blockProps = useBlockProps.save({
			className: [...itemClasses, className].join(' '),
			'data-initially-open': initiallyOpen,
			'data-open-breakpoint': openBreakpoint,
			'data-click-to-close': clickToClose,
			'data-auto-close': autoClose,
			'data-scroll': scroll,
			'data-scroll-offset': scrollOffset,
			'data-uuid': uuid
		});

		const innerBlocksProps = useInnerBlocksProps.save({
			className: 'c-accordion__content-wrapper',
		});

		const contentProps = {
			id: 'ac-' + uuid,
			className: 'c-accordion__content',
			'hidden': initiallyOpen ? undefined : 'until-found'
		};

		return (
			<accordion-item {...blockProps}>
				<RichText.Content
					id={'at-' + uuid}
					className={classNames('js-accordion-controller', 'c-accordion__title', {
						'c-accordion__title--button': titleTag === 'button'
					})}
					tagName={titleTag}
					value={title}
					role='button' />
				<div {...contentProps}>
					<div {...innerBlocksProps}></div>
				</div>
			</accordion-item>
		);
	},

	deprecated,
});
