import style from './FormMessage.module.scss'

type FormMessageType = {
	type: 'error' | 'success'
	children: React.ReactNode
}

const FormMessage = ({ children, type }: FormMessageType) => {
	const className = type === 'error' ? style.error : style.success

	return <div className={className}>{children}</div>
}
export default FormMessage
