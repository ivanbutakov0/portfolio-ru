import { motion } from 'framer-motion'
import Header from 'src/components/Header/Header'
import Sidebar from 'src/components/Sidebar/Sidebar'
import Button from 'src/components/ui/Button/Button'
import styles from './Hero.module.scss'

const textVariants: any = {
	initial: {
		x: -500,
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

const slidingVariants: any = {
	initial: {
		x: '100%',
	},
	animate: {
		x: '-150%',
		transition: {
			duration: 20,
			repeat: Infinity,
			ease: 'linear',
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
						animate='animate'
					>
						<motion.h2 className={styles.subtitle} variants={textVariants}>
							Hi, I'm Ivan
						</motion.h2>
						<motion.h1 variants={textVariants}>Web developer</motion.h1>
						<motion.div
							className={styles.buttonsContainer}
							variants={textVariants}
						>
							<Button href='#portfolio' style='outlined'>
								See the Latest Works
							</Button>
							<Button href='#contacts'>Contact Me</Button>
						</motion.div>
						<motion.img
							className={styles.scroll}
							variants={textVariants}
							animate='scrollButton'
							src='/scroll.png'
							alt=''
						/>
					</motion.div>
					<motion.div
						className={styles.slidingTextContainer}
						variants={slidingVariants}
						initial='initial'
						animate='animate'
					>
						Sliding text
					</motion.div>
					<div className={styles.imageContainer}>
						<img className={styles.image} src='/hero.png' alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}
export default Hero
