import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import styles from './Parallax.module.scss'

type Props = {
	type: 'services' | 'portfolio'
}

const Parallax = ({ type }: Props) => {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})

	const textY = useTransform(scrollYProgress, [0, 1], ['0%', '400%'])
	const planetsY = useTransform(scrollYProgress, [0, 1], ['0%', '120%'])
	const starsY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

	return (
		<section
			ref={ref}
			className={styles.parallax}
			style={{
				background:
					type === 'services'
						? 'linear-gradient(180deg, #111132, #0c0c1d)'
						: 'linear-gradient(180deg, #111132, #505064)',
			}}
		>
			<motion.h2 className={styles.title} style={{ y: textY }}>
				{type === 'services' ? 'What I do' : 'What I did'}
			</motion.h2>
			<div
				className={styles.mountains}
				style={{
					backgroundImage: 'url(mountains.png)',
					backgroundPosition: 'bottom',
					backgroundSize: 'cover',
				}}
			></div>
			<motion.div
				className={styles.planets}
				style={{
					backgroundImage:
						type === 'services' ? 'url(planets.png)' : 'url(sun.png)',
					backgroundPosition: 'bottom',
					backgroundSize: 'cover',
					y: planetsY,
				}}
			></motion.div>
			<motion.div
				className={styles.stars}
				style={{
					x: starsY,
				}}
			></motion.div>
		</section>
	)
}
export default Parallax
