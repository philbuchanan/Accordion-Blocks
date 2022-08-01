/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment, useEffect, useState } from '@wordpress/element';
import { useInstanceId } from '@wordpress/compose';
import { useSelect, dispatch } from '@wordpress/data';
import {
	BlockControls,
	InspectorControls,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import {
	BaseControl,
	PanelBody,
	ToolbarGroup,
	ToggleControl,
	RangeControl,
	Button,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import HtmlTagIcon from './html-tag-icon';
import classNames from 'classnames';

const AccordionItemEdit = ({
	attributes,
	setAttributes,
	clientId,
}) => {
	const {
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

	// An accordion item is considered new if it doesn't have a UUID yet
	const [isNew, setIsNew] = useState(!uuid);

	/**
	 * UUID is generated as a combination of the post ID and this block's
	 * instance ID.
	 *
	 * This ensures the UUID is unique not just in this post, but across all
	 * posts. This is necessary since accordions from multiple posts may be
	 * displayed on the same page (e.g. an archive page that shows the full post
	 * content). See issue #31.
	 *
	 * We use instanceId so a new UUID is generated even if the accordion item
	 * is duplicated. See issue #47.
	 *
	 * TODO: The one downside to this approach is that sometimes accordion
	 * items' UUIDs change when the editor is reloaded. For example, if the user
	 * removes a block and saves the page, when the editor loads again, it will
	 * assign new instanceIds to each block.
	 */
	const instanceId = useInstanceId(AccordionItemEdit);
	const entityId = useSelect((select) => {
		return select('core/editor') !== null
			? select('core/editor').getCurrentPostId() : 0;
	});

	useEffect(() => {
		const id = Number(`${entityId}${instanceId}`);

		if (id !== uuid) {
			setAttributes({ uuid: id });
		}
	}, [instanceId]);

	const isNestedAccordion = useSelect((select) => {
		const parentBlocks = select('core/block-editor').getBlockParentsByBlockName(clientId, 'pb/accordion-item');

		return !!parentBlocks.length;
	});

	const userCanSetDefaults = useSelect((select) => {
		/**
		 * Only Administrators and Editors may set new default settings. Only
		 * editors and above can create pages, so we use that as a proxy for
		 * editor role and above.
		 */
		return select('core').canUser('create', 'pages');
	});

	const defaults = useSelect((select) => {
		return select('accordion-blocks').getDefaultSettings();
	});

	const settingsAreDefaults =
		!(defaults === undefined || defaults === null) &&
		initiallyOpen === defaults.initiallyOpen &&
		openBreakpoint === defaults.openBreakpoint &&
		clickToClose === defaults.clickToClose &&
		autoClose === defaults.autoClose &&
		scroll === defaults.scroll &&
		scrollOffset === defaults.scrollOffset;

	useEffect(() => {
		/**
		 * We only set this accordion item's attributes to defaults if it is new
		 * and its attributes aren't already the defaults.
		 */
		if (isNew && !settingsAreDefaults) {
			setAttributes({
				initiallyOpen: defaults.initiallyOpen,
				openBreakpoint: defaults.openBreakpoint,
				clickToClose: defaults.clickToClose,
				autoClose: defaults.autoClose,
				scroll: defaults.scroll,
				scrollOffset: defaults.scrollOffset,
			});
		}
	}, [defaults]);

	const blockProps = useBlockProps({
		className: classNames(
			'c-accordion__item',
			'js-accordion-item',
		)
	});

	blockProps.class = blockProps.className;
	blockProps.className = null;

	const contentProps = {
		id: 'ac-' + uuid,
		className: 'c-accordion__content',
		'hidden': initiallyOpen ? undefined : 'until-found'
	};

	const innerBlocksProps = useInnerBlocksProps({
		className: 'c-accordion__content-wrapper'
	});

	return (
		<Fragment>
			<BlockControls group="block">
				<ToolbarGroup
					icon={<HtmlTagIcon tag={titleTag} />}
					label={__('Change accordion title tag', 'pb')}
					controls={[
						{
							tag: 'h1',
							label: __('Heading 1', 'accordion-blocks'),
						},
						{
							tag: 'h2',
							label: __('Heading 2', 'accordion-blocks'),
						},
						{
							tag: 'h3',
							label: __('Heading 3', 'accordion-blocks'),
						},
						{
							tag: 'h4',
							label: __('Heading 4', 'accordion-blocks'),
						},
						{
							tag: 'h5',
							label: __('Heading 5', 'accordion-blocks'),
						},
						{
							tag: 'h6',
							label: __('Heading 6', 'accordion-blocks'),
						},
						{
							tag: 'button',
							label: __('Button', 'accordion-blocks'),
						},
					].map((control) => {
						return {
							name: control.tag,
							icon: <HtmlTagIcon tag={control.tag} />,
							title: control.label,
							isActive: titleTag === control.tag,
							onClick: () => setAttributes({ 'titleTag': control.tag }),
						}
					})}
					isCollapsed={true}
				/>
			</BlockControls>
			<InspectorControls>
				{isNestedAccordion && (
					<div
						className="components-notice is-warning"
						style={{
							margin: '0',
							borderTop: '1px solid #f0f0f0',
						}}
					>
						{__('This accordion item is nested inside another accordion item. While this will work, it may not be what you intended.', 'accordion-blocks')}
					</div>
				)}
				<PanelBody title={__('Accordion Item Settings', 'accordion-blocks')}>
					<ToggleControl
						label={__('Open By Default', 'accordion-blocks')}
						help={initiallyOpen ?
							__('This accordion item will be open when the page loads.', 'accordion-blocks') :
							__('This accordion item will be closed when the page loads.', 'accordion-blocks')
						}
						checked={initiallyOpen}
						onChange={value => setAttributes({ initiallyOpen: value, openBreakpoint: value ? openBreakpoint : 0 })}
					/>
					{initiallyOpen && (
						<BaseControl
							label={__('Breakpoint', 'accordion-blocks')}
							help={__('Only open this accordion by default on devices larger than a given width.', 'accordion-blocks')}
						>
							<NumberControl
								value={openBreakpoint}
								onChange={value => setAttributes({ openBreakpoint: parseInt(value, 10) })}
							/>
						</BaseControl>
					)}
					<ToggleControl
						label={__('Click to Close', 'accordion-blocks')}
						help={clickToClose ?
							__('When open, this accordion item title can be clicked again to close it.', 'accordion-blocks') :
							__('Once opened, this accordion item cannot be closed by clicking the title.', 'accordion-blocks')
						}
						checked={clickToClose}
						onChange={value => setAttributes({ clickToClose: value })}
					/>
					<ToggleControl
						label={__('Auto Close', 'accordion-blocks')}
						help={autoClose ?
							__('This accordion item will close when opening another item.', 'accordion-blocks') :
							__('This accordion item will remain open when opening another item.', 'accordion-blocks')
						}
						checked={autoClose}
						onChange={value => setAttributes({ autoClose: value })}
					/>
					<ToggleControl
						label={__('Scroll to Accordion Item', 'accordion-blocks')}
						help={scroll ?
							__('The page will scroll to the accordion item title when it is opened.', 'accordion-blocks') :
							__('The page will not scroll when opening accordion items.', 'accordion-blocks')
						}
						checked={scroll}
						onChange={value => setAttributes({
							scroll: value,
							scrollOffset: 0,
						})}
					/>
					{!!scroll && (
						<RangeControl
							label={__('Scroll Pixel Offset', 'accordion-blocks')}
							value={scrollOffset}
							onChange={value => setAttributes({ scrollOffset: parseInt(value, 10) ? parseInt(value, 10) : 0 })}
							min={0}
							max={1000}
							help={__('A pixel offset for the final scroll position.', 'accordion-blocks')}
						/>
					)}
					{!settingsAreDefaults && (
						<Fragment>
							<hr />
							{userCanSetDefaults && (
								<Fragment>
									<Button
										isLink={true}
										onClick={() => {
											dispatch('accordion-blocks').saveDefaultSettings({
												initiallyOpen: initiallyOpen,
												clickToClose: clickToClose,
												autoClose: autoClose,
												scroll: scroll,
												scrollOffset: scrollOffset,
											});
										}}
									>
										{__('Make These Settings the Defaults', 'accordion-blocks')}
									</Button>
									<p style={{
										fontStyle: 'italic',
										marginTop: '7px',
									}}>
										{__('Default settings only apply when creating new accordion items.', 'accordion-blocks')}
									</p>
								</Fragment>
							)}
							<p>
								<Button
									isLink={true}
									isDestructive={true}
									onClick={() => {
										setAttributes({
											initiallyOpen: defaults.initiallyOpen,
											openBreakpoint: defaults.openBreakpoint,
											clickToClose: defaults.clickToClose,
											autoClose: defaults.autoClose,
											scroll: defaults.scroll,
											scrollOffset: defaults.scrollOffset,
										});
									}}
								>
									{__('Reset These Settings to Defaults', 'accordion-blocks')}
								</Button>
							</p>
						</Fragment>
					)}
				</PanelBody>
			</InspectorControls>
			<accordion-item {...blockProps}>
				<RichText
					id={'at-' + uuid}
					role='button'
					className={classNames('c-accordion__title', 'js-accordion-controller', {
						'c-accordion__title--button': titleTag === 'button'
					})}
					tagName={titleTag === 'button' ? 'div' : titleTag}
					allowedFormats={[
						'core/bold',
						'core/italic',
					]}
					placeholder={__('Accordion item title…', 'accordion-blocks')}
					value={title}
					onChange={value => setAttributes({ title: value })}
				/>
				<div {...contentProps}>
					<div {...innerBlocksProps}></div>
				</div>
			</accordion-item>
		</Fragment>
	);
};

export default AccordionItemEdit;
