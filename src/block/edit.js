/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
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

const AccordionItemEdit = ({
	className,
	attributes,
	setAttributes,
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

	/**
	 * Set the uuid attribute to an ID that is very likely to be unique across
	 * multiple post. This fixes the issue outlined in #31.
	 */
	if (!uuid) {
		setAttributes({
			uuid: Math.floor(Math.random() * (100000 - 1 + 1) + 1),
			initiallyOpen: defaults.initiallyOpen,
			clickToClose: defaults.clickToClose,
			autoClose: defaults.autoClose,
			scroll: defaults.scroll,
			scrollOffset: defaults.scrollOffset,
		});
	}

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
				<PanelBody title={ __('Accordion Item Settings', 'pb') }>
					<ToggleControl
						label={ __('Open By Default', 'pb') }
						help={ initiallyOpen ? __('This accordion item will be open when the page loads.', 'pb') : __('This accordion item will be closed when the page loads.', 'pb') }
						checked={ initiallyOpen }
						onChange={ value => setAttributes({initiallyOpen: value}) }
					/>
					<ToggleControl
						label={ __('Click to Close', 'pb') }
						help={ clickToClose ? __('When open, this accordion item title can be clicked again to close it.', 'pb') : __('Once opened, this accordion item cannot be closed by clicking the title.', 'pb') }
						checked={ clickToClose }
						onChange={ value => setAttributes({clickToClose: value}) }
					/>
					<ToggleControl
						label={ __('Auto Close', 'pb') }
						help={ autoClose ? __('This accordion item will close when opening another item.', 'pb') : __('This accordion item will remain open when opening another item.', 'pb') }
						checked={ autoClose }
						onChange={ value => setAttributes({autoClose: value}) }
					/>
					<ToggleControl
						label={ __('Scroll to Accordion Item', 'pb') }
						help={ scroll ? __('The page will scroll to the accordion item title when it is opened.', 'pb') : __('The page will not scroll when opening accordion items.', 'pb') }
						checked={ scroll }
						onChange={ value => setAttributes({
							scroll: value,
							scrollOffset: 0,
						}) }
					/>
					{ !!scroll && (
						<RangeControl
							label={ __('Scroll Pixel Offset', 'pb') }
							value={ scrollOffset }
							onChange={ value => setAttributes({scrollOffset: value ? value : 0}) }
							min={ 0 }
							max={ 1000 }
							help={ __('A pixel offset for the final scroll position.', 'pb') }
						/>
					) }
					{ !areSettingsDefaults && (
						<Fragment>
							<hr/>
							<Button
								isLink={ true }
								onClick={ saveDefaults }
							>
								{ __('Make These Settings the Defaults', 'pb') }
							</Button>
							<p style={ {
								fontStyle: 'italic',
								marginTop: '7px',
							} }>
								{ __('Default settings only apply when creating new accordion items.', 'pb') }
							</p>
							<p>
								<Button
									isLink={ true }
									isDestructive={ true }
									onClick={ restoreDefaults }
								>
									{ __('Reset These Settings to Defaults', 'pb') }
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
					tagName={ titleTag }
					allowedFormats={ [
						'bold',
						'italic',
					] }
					placeholder={ __('Accordion item title...', 'pb') }
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
