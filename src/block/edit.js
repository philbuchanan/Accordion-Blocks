/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment, useEffect } from '@wordpress/element';
import { useSelect, dispatch } from '@wordpress/data';
import {
	BlockControls,
	InspectorControls,
	RichText,
	InnerBlocks,
} from '@wordpress/block-editor';
import {
	PanelBody,
	Toolbar,
	ToggleControl,
	RangeControl,
	Button,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import getHTMLTagIcon from './get-html-tag-icon';
import classnames from '../utils/classnames';

const uniqueIds = [];

const AccordionItemEdit = ({
	className,
	attributes,
	setAttributes,
	clientId,
}) => {
	const {
		title,
		initiallyOpen,
		clickToClose,
		autoClose,
		titleTag,
		scroll,
		scrollOffset,
		uuid,
	} = attributes;

	const isNestedAccordion = useSelect((select) => {
		const parentBlocks = select('core/block-editor').getBlockParentsByBlockName(clientId, 'pb/accordion-item');

		return !!parentBlocks.length;
	});

	const defaults = useSelect((select) => {
		return select('accordion-blocks').getDefaultSettings();
	});

	const saveDefaults = () => {
		dispatch('accordion-blocks').saveDefaultSettings({
			initiallyOpen: initiallyOpen,
			clickToClose: clickToClose,
			autoClose: autoClose,
			scroll: scroll,
			scrollOffset: scrollOffset,
		});
	};

	const restoreDefaults = () => {
		setAttributes({
			initiallyOpen: defaults.initiallyOpen,
			clickToClose: defaults.clickToClose,
			autoClose: defaults.autoClose,
			scroll: defaults.scroll,
			scrollOffset: defaults.scrollOffset,
		});
	};

	const areSettingsDefaults =
		initiallyOpen === defaults.initiallyOpen &&
		clickToClose === defaults.clickToClose &&
		autoClose === defaults.autoClose &&
		scroll === defaults.scroll &&
		scrollOffset === defaults.scrollOffset;

	useEffect(() => {
		let id = uuid;

		/**
		 * If there is no uuid set, this is a new accordion. That means the
		 * default settings should apply thos this block.
		 */
		if (!id) {
			setAttributes({
				initiallyOpen: defaults.initiallyOpen,
				clickToClose: defaults.clickToClose,
				autoClose: defaults.autoClose,
				scroll: defaults.scroll,
				scrollOffset: defaults.scrollOffset,
			});
		}

		/**
		 * Set the uuid attribute to something that is very likely to be unique
		 * across multiple posts. This fixes the issues outlined in #31 and #47.
		 */
		if (!id || uniqueIds.includes(id)) {
			id = Math.floor(Math.random() * (100000 - 1 + 1) + 1);

			setAttributes({uuid: id});
		}

		uniqueIds.push(id);

		return () => {
			uniqueIds.splice(uniqueIds.indexOf(id), 1);
		}
	}, []);

	return (
		<Fragment>
			<BlockControls>
				<Toolbar
					controls={
						['h1', 'h2', 'h3', 'h4', 'button'].map((tag) => ({
							icon: getHTMLTagIcon(tag),
							title: tag.toUpperCase(),
							isActive: titleTag === tag,
							onClick: () => setAttributes({'titleTag': tag}),
						}))
					}
				/>
			</BlockControls>
			<InspectorControls>
				{ isNestedAccordion && (
					<div
						className="components-notice is-warning"
						style={ {
							margin: '0',
							borderTop: '1px solid #f0f0f0',
						} }
					>
						{ __('This accordion item is nested inside another accordion item. It may not function as expected.', 'accordion-blocks') }
					</div>
				) }
				<PanelBody title={ __('Accordion Item Settings', 'accordion-blocks') }>
					<ToggleControl
						label={ __('Open By Default', 'accordion-blocks') }
						help={ initiallyOpen ?
							__('This accordion item will be open when the page loads.', 'accordion-blocks') :
							__('This accordion item will be closed when the page loads.', 'accordion-blocks')
						}
						checked={ initiallyOpen }
						onChange={ value => setAttributes({initiallyOpen: value}) }
					/>
					<ToggleControl
						label={ __('Click to Close', 'accordion-blocks') }
						help={ clickToClose ?
							__('When open, this accordion item title can be clicked again to close it.', 'accordion-blocks') :
							__('Once opened, this accordion item cannot be closed by clicking the title.', 'accordion-blocks')
						}
						checked={ clickToClose }
						onChange={ value => setAttributes({clickToClose: value}) }
					/>
					<ToggleControl
						label={ __('Auto Close', 'accordion-blocks') }
						help={ autoClose ?
							__('This accordion item will close when opening another item.', 'accordion-blocks') :
							__('This accordion item will remain open when opening another item.', 'accordion-blocks')
						}
						checked={ autoClose }
						onChange={ value => setAttributes({autoClose: value}) }
					/>
					<ToggleControl
						label={ __('Scroll to Accordion Item', 'accordion-blocks') }
						help={ scroll ?
							__('The page will scroll to the accordion item title when it is opened.', 'accordion-blocks') :
							__('The page will not scroll when opening accordion items.', 'accordion-blocks')
						}
						checked={ scroll }
						onChange={ value => setAttributes({
							scroll: value,
							scrollOffset: 0,
						}) }
					/>
					{ !!scroll && (
						<RangeControl
							label={ __('Scroll Pixel Offset', 'accordion-blocks') }
							value={ scrollOffset }
							onChange={ value => setAttributes({scrollOffset: value ? value : 0}) }
							min={ 0 }
							max={ 1000 }
							help={ __('A pixel offset for the final scroll position.', 'accordion-blocks') }
						/>
					) }
					{ !areSettingsDefaults && (
						<Fragment>
							<hr/>
							<Button
								isLink={ true }
								onClick={ saveDefaults }
							>
								{ __('Make These Settings the Defaults', 'accordion-blocks') }
							</Button>
							<p style={ {
								fontStyle: 'italic',
								marginTop: '7px',
							} }>
								{ __('Default settings only apply when creating new accordion items.', 'accordion-blocks') }
							</p>
							<p>
								<Button
									isLink={ true }
									isDestructive={ true }
									onClick={ restoreDefaults }
								>
									{ __('Reset These Settings to Defaults', 'accordion-blocks') }
								</Button>
							</p>
						</Fragment>
					) }
				</PanelBody>
			</InspectorControls>
			<div className={ classnames('c-accordion__item', 'js-accordion-item', className) }>
				<RichText
					className={ classnames('c-accordion__title', {
						'c-accordion__title--button': titleTag === 'button',
					}) }
					tagName={ titleTag === 'button' ? 'div' : titleTag }
					allowedFormats={ [
						'core/bold',
						'core/italic',
					] }
					placeholder={ __('Accordion item title…', 'accordion-blocks') }
					value={ title }
					onChange={ value => setAttributes({title: value}) }
				/>
				<div className="c-accordion__content">
					<InnerBlocks />
				</div>
			</div>
		</Fragment>
	);
};

export default AccordionItemEdit;
