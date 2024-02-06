import styles from './Tech.module.scss'

type TechProps = {
	item: string
	img: string
}

const Tech = ({ item, img }: TechProps) => {
	return (
		<li className={styles.tech}>
			<img src={img} alt='' />
			<p>{item}</p>
		</li>
	)
}
export default Tech
