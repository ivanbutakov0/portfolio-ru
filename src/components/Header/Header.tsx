import Contacts from '../Contacts/Contacts'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<span>WebDev</span>
			<Contacts />
		</header>
	)
}
export default Header
