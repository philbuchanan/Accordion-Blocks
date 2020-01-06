/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	Fragment,
} = wp.element;

const {
	compose,
	withInstanceId,
} = wp.compose;

const {
	BlockControls,
	InspectorControls,
	RichText,
	InnerBlocks,
} = wp.blockEditor;

const {
	PanelBody,
	Toolbar,
	ToggleControl,
	RangeControl,
} = wp.components;



/**
 * Internal dependencies
 */
import getHTMLTagIcon from './get-html-tag-icon';



const AccordionItemEdit = ({
	className,
	attributes,
	setAttributes,
	instanceId,
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

	setAttributes({
		uuid: instanceId,
	});

	var titleClasses = [
		'c-accordion__title',
	];

	if (titleTag === 'button') {
		titleClasses.push('c-accordion__title--button');
	}

	var itemClasses = [
		'c-accordion__item',
		'js-accordion-item',
	];

	return  (
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
						onChange={ value => setAttributes({scroll: value}) }
					/>
					<RangeControl
						label={ __('Scroll Pixel Offset', 'pb') }
						value={ scrollOffset }
						onChange={ value => setAttributes({scrollOffset: value ? value : 0}) }
						min={ 0 }
						max={ 1000 }
						help={ __('A pixel offset for the final scroll position.', 'pb') }
					/>
				</PanelBody>
			</InspectorControls>
			<div className={ [...itemClasses, className].join(' ') }>
				<RichText
					className={ titleClasses.join(' ') }
					tagName={ titleTag }
					allowedFormats={[
						'bold',
						'italic',
					]}
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

export default compose([
	withInstanceId,
])(AccordionItemEdit);
