import Parallax from 'src/pages/Home/Parallax/Parallax'
import Hero from './Hero/Hero'
import Portfolio from './Portfolio/Portfolio'
import Services from './Services/Services'
import './styles.scss'

const Home = () => {
	return (
		<>
			<Hero />
			<Parallax type='services' />
			<Services />
			<Parallax type='portfolio' />
			<Portfolio />
			<Services />
		</>
	)
}
export default Home
