export type ProjectType = {
	id: number
	name: string
	img: string
	desc: string
	link: string
	github: string
	techs: techsType[]
}

type techsType = {
	name: string
	img: string
}

const projects: ProjectType[] = [
	{
		id: 1,
		name: 'BoardWise',
		img: '/boardwise.png',
		desc: 'The project involves creating a comprehensive project management tool centered around Kanban boards.',
		link: 'https://board-wise.vercel.app/',
		github: 'https://github.com/ivanbutakov0/board_wise',
		techs: [
			{ name: 'next.js', img: '/techs/nextjs.svg' },
			{ name: 'react', img: '/techs/react.svg' },
			{ name: 'typescript', img: '/techs/typescript.svg' },
			{ name: 'tailwind', img: '/techs/tailwind.svg' },
			{ name: 'prisma', img: '/techs/prisma.svg' },
			{ name: 'postgresql', img: '/techs/postgresql.svg' },
			{ name: 'clerk', img: '/techs/clerk.svg' },
		],
	},
	{
		id: 2,
		name: 'project',
		img: '/boardwise.png',
		desc: 'description',
		link: '/',
		github: 'https://github.com/ivanbutakov0/board_wise',
		techs: [
			{ name: 'next.js', img: '/techs/nextjs.svg' },
			{ name: 'react', img: '/techs/react.svg' },
			{ name: 'typescript', img: '/techs/typescript.svg' },
			{ name: 'tailwind', img: '/techs/tailwind.svg' },
			{ name: 'prisma', img: '/techs/prisma.svg' },
			{ name: 'postgresql', img: '/techs/postgresql.svg' },
			{ name: 'clerk', img: '/techs/clerk.svg' },
		],
	},
	{
		id: 3,
		name: 'project',
		img: '/boardwise.png',
		desc: 'description',
		link: '/',
		github: 'https://github.com/ivanbutakov0/board_wise',
		techs: [
			{ name: 'next.js', img: '/techs/nextjs.svg' },
			{ name: 'react', img: '/techs/react.svg' },
			{ name: 'typescript', img: '/techs/typescript.svg' },
			{ name: 'tailwind', img: '/techs/tailwind.svg' },
			{ name: 'prisma', img: '/techs/prisma.svg' },
			{ name: 'postgresql', img: '/techs/postgresql.svg' },
			{ name: 'clerk', img: '/techs/clerk.svg' },
		],
	},
]

export default projects
