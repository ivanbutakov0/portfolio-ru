export type ContactType = {
	name: string
	link: string
	image: string
}

const contacts: ContactType[] = [
	{
		name: 'Github',
		link: 'https://github.com/ivanbutakov0',
		image: '/github.svg',
	},
	{
		name: 'LeetCode',
		link: 'https://leetcode.com/ivanbutakov/',
		image: '/leetcode.svg',
	},
]

export default contacts
