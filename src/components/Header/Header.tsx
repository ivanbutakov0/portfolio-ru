import Contacts from '../Navbar/Contacts'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<span>Web-Dev</span>
			<Contacts />
		</header>
	)
}
export default Header
