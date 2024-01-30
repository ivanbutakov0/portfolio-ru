import styles from './Button.module.scss'

type ButtonType = {
	children: React.ReactNode
	style?: 'filled' | 'outlined'
	href: string
}

const Button = ({ children, style = 'filled', href }: ButtonType) => {
	const styleClass = style === 'outlined' ? styles.outlined : styles.filled

	return (
		<a href={href} className={`${styleClass} ${styles.button}`}>
			{children}
		</a>
	)
}
export default Button
