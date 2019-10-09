/**
 * WordPress dependencies
 */
const {
	createBlock,
} = wp.blocks;

const {
	create,
	join,
	split,
	toHTMLString,
} = wp.richText;



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
};
