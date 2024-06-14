import { motion } from 'framer-motion'
import Header from 'src/components/Header/Header'
import Sidebar from 'src/components/Sidebar/Sidebar'
import Button from 'src/components/ui/Button/Button'
import styles from './Hero.module.scss'

const textVariants: any = {
	initial: {
		x: '-100%',
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
	scrollButton: {
		opacity: 0,
		y: -10,
		transition: {
			duration: 1,
			repeat: Infinity,
			repeatType: 'reverse',
		},
	},
}

const Hero = () => {
	return (
		<section id='homepage' className={styles.homepage}>
			<div className='container'>
				<Sidebar />
				<Header />
				<div className={styles.contentContainer}>
					<motion.div
						className={styles.textContainer}
						variants={textVariants}
						initial='initial'
						whileInView='animate'
					>
						<motion.h2 className={styles.subtitle} variants={textVariants}>
							Привет! Меня зовут Иван
						</motion.h2>
						<motion.h1 className={styles.title} variants={textVariants}>
							Frontend developer
						</motion.h1>
						<motion.div
							className={styles.buttonsContainer}
							variants={textVariants}
						>
							<Button href='#portfolio' style='outlined'>
								Перейти к последним работам
							</Button>
							<Button href='#contacts'>Свяжись со мной</Button>
						</motion.div>
						<motion.img
							className={styles.scroll}
							variants={textVariants}
							animate='scrollButton'
							src='/scroll.png'
							alt=''
						/>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
export default Hero
