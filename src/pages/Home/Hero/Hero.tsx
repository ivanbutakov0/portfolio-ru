import Header from 'src/components/Header/Header'
import Sidebar from 'src/components/Sidebar/Sidebar'
import Button from 'src/components/ui/Button/Button'
import styles from './Hero.module.scss'

const Hero = () => {
	return (
		<section id='homepage' className={styles.homepage}>
			<div className='container'>
				<Sidebar />
				<Header />
				<div className={styles.contentContainer}>
					<div className={styles.textContainer}>
						<h2 className={styles.subtitle}>Hi, I'm Ivan</h2>
						<h1>Web developer</h1>
						<div className={styles.buttonsContainer}>
							<Button href='#portfolio' style='outlined'>
								See the Latest Works
							</Button>
							<Button href='#contacts'>Contact Me</Button>
						</div>
						<img className={styles.scroll} src='/scroll.png' alt='' />
					</div>
					<div className={styles.imageContainer}>
						<img className={styles.image} src='/hero.png' alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}
export default Hero
