import { motion } from 'framer-motion'
import { useContext } from 'react'
import { SidebarContext } from '../Sidebar'
import styles from './MenuItem.module.scss'

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
}

type MenuItemTypes = {
	name: string
	link: string
}

const MenuItem = ({ name, link }: MenuItemTypes) => {
	const toggle = useContext(SidebarContext)
	return (
		<motion.li
			className={styles.item}
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			onClick={toggle}
		>
			<a href={link}>{name}</a>
		</motion.li>
	)
}
export default MenuItem
