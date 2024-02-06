import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Tech from 'src/components/Techs/Tech'
import { ProjectType } from 'src/data/projects'
import styles from './Project.module.scss'

type ProjectProps = {
	project: ProjectType
}

const Project = ({ project }: ProjectProps) => {
	const sectionRef = useRef(null)

	const { scrollYProgress: sectionScrollYProgress } = useScroll({
		target: sectionRef,
	})

	const scrollY = useTransform(sectionScrollYProgress, [0, 1], [-300, 300])

	return (
		<section className={styles.project} key={project.id}>
			<div className={`container ${styles.projectContainer}`}>
				<div className={styles.imageContainer}>
					<img
						ref={sectionRef}
						className={styles.image}
						src={project.img}
						alt={project.name}
					/>
				</div>
				<motion.div className={styles.projectContent} style={{ y: scrollY }}>
					<h3 className={styles.projectTitle}>{project.name}</h3>
					<p className={styles.projectDesc}>{project.desc}</p>
					<ul className={styles.techsContainer}>
						{project.techs.map(tech => (
							<Tech key={tech.name} item={tech.name} img={tech.img} />
						))}
					</ul>
					<div className={styles.btnContainer}>
						<a
							className={styles.projectLink}
							href={project.link}
							target='_blank'
						>
							See Demo
						</a>
						<a
							className={styles.codeLink}
							href={project.github}
							target='_blank'
						>
							<img src='/github.svg' alt='' />
							<p>See Code</p>
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default Project
