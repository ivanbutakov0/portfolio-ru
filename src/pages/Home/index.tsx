import Hero from './Hero/Hero'
import Services from './Services/Services'
import './styles.scss'

const Home = () => {
	return (
		<div className='container'>
			<Hero />
			<Services />
			<Services />
		</div>
	)
}
export default Home
