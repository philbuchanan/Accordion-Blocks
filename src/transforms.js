/**
 * WordPress dependencies
 */
const {
	createBlock,
} = wp.blocks;



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
				var newBlocks = innerBlocks.map(block => createBlock(block.name, block.attributes));

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
	],
};
