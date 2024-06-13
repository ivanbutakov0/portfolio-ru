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
		name: 'uFUTURE',
		img: '/uFUTURE-main.png',
		desc: 'This project involved creating a massive open online course (MOOC) platform using the MERN stack.',
		link: 'https://u-future-client.vercel.app/',
		github: 'https://github.com/ivanbutakov0/u-future',
		techs: [
			{ name: 'react', img: '/techs/react.svg' },
			{ name: 'typescript', img: '/techs/typescript.svg' },
			{ name: 'materialUI', img: '/techs/materialui.svg' },
			{ name: 'redux', img: '/techs/redux.svg' },
			{ name: 'express.js', img: '/techs/express.svg' },
			{ name: 'mongoDB', img: '/techs/mongodb.svg' },
			{ name: 'mongoose', img: '/techs/mongoose.svg' },
		],
	},
	{
		id: 3,
		name: 'Super Estate',
		img: '/boardwise.png',
		desc: 'I developed a full-fledged real estate platform called "Super Estate" using the MERN stack (MongoDB, Express.js, React.js, and Node.js).',
		link: 'https://super-estate-client.vercel.app/',
		github: 'https://github.com/ivanbutakov0/super_estate',
		techs: [
			{ name: 'react', img: '/techs/react.svg' },
			{ name: 'typescript', img: '/techs/typescript.svg' },
			{ name: 'tailwind', img: '/techs/tailwind.svg' },
			{ name: 'redux', img: '/techs/redux.svg' },
			{ name: 'express.js', img: '/techs/express.svg' },
			{ name: 'mongoDB', img: '/techs/mongodb.svg' },
			{ name: 'mongoose', img: '/techs/mongoose.svg' },
		],
	},
]

export default projects
