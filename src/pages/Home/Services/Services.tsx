import { motion } from 'framer-motion'
import serviceItems from 'src/data/serviceItems'
import styles from './Services.module.scss'

const variants = {
	initial: {
		opacity: 0,
		x: '-80%',
		y: '30%',
	},
	animate: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
}

const Services = () => {
	return (
		<section id='services' className={styles.services}>
			<motion.div
				className={`container ${styles.contentContainer}`}
				variants={variants}
				initial='initial'
				whileInView='animate'
			>
				<motion.div className={styles.textContainer} variants={variants}>
					<p>
						Я специализируюсь на создании современных веб-приложений <br /> для
						вас
					</p>
					<hr />
				</motion.div>

				<motion.div className={styles.titleContainer} variants={variants}>
					<div className={styles.title}>
						<img src='/people.webp' alt='happy clients' />
						<h2>
							<strong>Уникальные</strong> решения
						</h2>
					</div>

					<div className={styles.title}>
						<h2>
							<strong>для вашего</strong> бизнеса.
						</h2>
						<div className={styles.titleButton}>Что я делаю?</div>
					</div>
				</motion.div>

				<motion.div className={styles.listContainer} variants={variants}>
					{serviceItems.map(item => (
						<div className={styles.item} key={item.title}>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
							<a href='#contacts' className={styles.button}>
								{item.button}
							</a>
						</div>
					))}
				</motion.div>
			</motion.div>
		</section>
	)
}
export default Services
