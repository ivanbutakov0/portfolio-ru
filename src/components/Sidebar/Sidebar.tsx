import { motion, useCycle } from 'framer-motion'
import { MouseEvent, createContext, useEffect, useRef } from 'react'
import { MenuToggle } from './MenuToggle/MenuToggle'
import Navigation from './Navigation/Navigation'
import styles from './Sidebar.module.scss'

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(30px at 40px 50px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
}

export const SidebarContext = createContext<any>(null)

const Sidebar = () => {
	const [isOpen, toggleOpen] = useCycle(false, true)
	const sidebarRef = useRef<HTMLDivElement | null>(null)

	const handleOutsideClick = (e: MouseEvent) => {
		if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
			toggleOpen()
			return null
		}
	}

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('click', handleOutsideClick as any)
		} else {
			document.removeEventListener('click', handleOutsideClick as any)
		}

		return () => {
			document.removeEventListener('click', handleOutsideClick as any)
		}
	}, [isOpen])

	return (
		<SidebarContext.Provider value={() => toggleOpen()}>
			<motion.nav
				className={styles.sidebar}
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
			>
				<motion.div
					className={styles.background}
					variants={sidebar}
					ref={sidebarRef}
				>
					<Navigation />
					<MenuToggle toggle={() => toggleOpen()} />
				</motion.div>
			</motion.nav>
		</SidebarContext.Provider>
	)
}
export default Sidebar
