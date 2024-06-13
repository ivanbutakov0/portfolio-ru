type ServiceItemType = {
	title: string
	text: string
	button: string
}

const serviceItems: ServiceItemType[] = [
	{
		title: 'UI/UX Design',
		text: `I can help you design user interfaces and user experiences that are both beautiful and functional. This includes everything from designing the layout of your website or app to creating wireframes and prototypes.`,
		button: 'Contact me',
	},
	{
		title: 'Frontend Development',
		text: `I can turn your UI/UX designs into a real, functional website or app. This includes writing the code that makes your website or app work.`,
		button: 'Contact me',
	},
	{
		title: 'Backend Development',
		text: `I can create the server-side functionality for your website or app. This includes writing the code that stores and manages your data.`,
		button: 'Contact me',
	},
]

export default serviceItems
