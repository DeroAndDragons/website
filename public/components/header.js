import classnames from 'classnames'
import { useLocation } from 'preact-iso'
import { useEffect, useState } from 'preact/hooks'

const ActiveLink = (props) => {
	const { href, children } = props
	const location = useLocation()

	const isActive = href === location.url
	const linkClass = classnames({ 'header-active-link': isActive })
	return <a href={href} class={linkClass}>{children}</a>
}

export default function Header() {
	const location = useLocation()
	const [isMenuOpened, setMenuOpened] = useState(false)

	useEffect(() => {
		setMenuOpened(false)
	}, [location])

	return (
		<div class="page-center">
			<header className="header">
				<img src="/img/dero_dragon_logo.jpg" class="header-logo" />
				<div class="header-mobile">
					<div>
						<div class="header-title">Dero & Dragons</div>
						<div class="header-url">{location.url}</div>
					</div>
					<div class="header-menu-icon icon-menu" onClick={() => setMenuOpened(state => !state)} />
					{isMenuOpened && <>
						<div className="header-mobile-blur" />
						<nav class="header-mobile-nav">
							<ActiveLink href="/">Home</ActiveLink>
							<ActiveLink href="/cards">Cards</ActiveLink>
							<ActiveLink href="/cli">CLI</ActiveLink>
							<ActiveLink href="/docs">Docs</ActiveLink>
							<ActiveLink href="/roadmap">Roadmap</ActiveLink>
							<ActiveLink href="/#about">About</ActiveLink>
						</nav>
					</>}
				</div>
				<div class="header-app">
					<div>
						<div class="header-title">Dero & Dragons</div>
						<nav>
							<ActiveLink href="/">Home</ActiveLink>
							<ActiveLink href="/cards">Cards</ActiveLink>
							<ActiveLink href="/cli">CLI</ActiveLink>
							<ActiveLink href="/docs">Docs</ActiveLink>
							<ActiveLink href="/roadmap">Roadmap</ActiveLink>
							<ActiveLink href="/#about">About</ActiveLink>
						</nav>
					</div>
				</div>
			</header>
		</div>
	)
}
