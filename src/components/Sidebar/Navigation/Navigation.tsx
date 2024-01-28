import { motion } from 'framer-motion'
import sections from 'src/data/sections'
import MenuItem from '../MenuItem/MenuItem'
import styles from './Navigation.module.scss'

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
}

const Navigation = () => {
	return (
		<motion.ul variants={variants} className={styles.list}>
			{sections.map(section => (
				<MenuItem key={section.name} name={section.name} link={section.link} />
			))}
		</motion.ul>
	)
}
export default Navigation
