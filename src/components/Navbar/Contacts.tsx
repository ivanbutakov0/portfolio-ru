import contacts from 'src/data/contacts.js'
import styles from './Contacts.module.scss'

const Contacts = () => {
	return (
		<div>
			<ul className={styles.list}>
				{contacts.map(contact => (
					<li className={styles.item} key={contact.name}>
						<a href={contact.link} target='_blank'>
							<img
								className={styles.image}
								src={contact.image}
								alt={contact.name}
							/>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
export default Contacts
