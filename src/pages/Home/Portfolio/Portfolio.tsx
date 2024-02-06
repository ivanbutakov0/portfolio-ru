import { useRef } from 'react'
import styles from './Portfolio.module.scss'

import { motion, useScroll, useSpring } from 'framer-motion'
import projects from 'src/data/projects'
import Project from './portfolioComponents/Project/Project'

const Portfolio = () => {
	const portfolioRef = useRef(null)

	const { scrollYProgress } = useScroll({
		target: portfolioRef,
		offset: ['end end', 'start start'],
	})

	const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

	return (
		<div ref={portfolioRef} className={styles.portfolio} id='portfolio'>
			<div className={styles.progress}>
				<h2>Featured Works</h2>
				<motion.div
					style={{ scaleX }}
					className={styles.progressBar}
				></motion.div>
			</div>

			{projects.map(project => (
				<Project key={project.id} project={project} />
			))}
		</div>
	)
}
export default Portfolio
