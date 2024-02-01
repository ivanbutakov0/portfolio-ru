import Parallax from 'src/pages/Home/Parallax/Parallax'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import './styles.scss'

const Home = () => {
	return (
		<>
			<Hero />
			<Parallax type='services' />
			<Services />
			<Parallax type='portfolio' />
			<Services />
		</>
	)
}
export default Home
