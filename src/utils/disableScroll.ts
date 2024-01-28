type DisableScroll = {
	isOpen: boolean
	styles: CSSModuleClasses
}

export default function disableScroll({ isOpen, styles }: DisableScroll) {
	if (isOpen) {
		document.body.classList.add(styles['disable-scroll'])
	} else {
		document.body.classList.remove(styles['disable-scroll'])
	}
}
