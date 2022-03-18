import classnames from 'classnames'
import { useLocation } from 'preact-iso'

const ActiveLink = (props) => {
	const { href, children } = props
	const { url } = useLocation()

	const isActive = href === url
	const linkClass = classnames({ 'header-active-link': isActive })
	return <a href={href} class={linkClass}>{children}</a>
}

export default function Header() {
	return (
		<div class="page-center">
			<header className="header">
				<img src="/img/dero_dragon_logo.jpg" class="header-logo" />
				<div>
					<div class="header-title">Dero & Dragons</div>
					<nav>
						<ActiveLink href="/">Home</ActiveLink>
						<ActiveLink href="/cards">Cards</ActiveLink>
						<ActiveLink href="/cli">CLI</ActiveLink>
						<ActiveLink href="/guides">Guides</ActiveLink>
						<ActiveLink href="/roadmap">Roadmap</ActiveLink>
						<ActiveLink href="/#about">About</ActiveLink>
					</nav>
				</div>
			</header>
		</div>
	)
}
