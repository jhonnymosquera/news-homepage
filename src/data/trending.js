import retroPcs from '../assets/img/image-retro-pcs.jpg';
import topLaptops from '../assets/img/image-top-laptops.jpg';
import gamingGrowth from '../assets/img/image-gaming-growth.jpg';

const trending = [
	{
		id: 1,
		title: 'Reviving Retro PCs',
		description: 'What happens when old PCs are given modern upgrades?',
		image: {
			url: retroPcs,
			alt: 'image retro pcs',
		},
	},
	{
		id: 2,
		title: 'Top 10 Laptops of 2022',
		description: 'Our best picks for various needs and budgets.',
		image: {
			url: topLaptops,
			alt: 'image top laptops',
		},
	},
	{
		id: 3,
		title: 'The Growth of Gaming',
		description: 'How the pandemic has sparked fresh opportunities.',
		image: {
			url: gamingGrowth,
			alt: 'image gaming growth',
		},
	},
];

export default trending;
