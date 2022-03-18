import { useLocation } from 'preact-iso'

export default function Header() {
	const { url } = useLocation()
	return (
		<header className="header">
			<div>DERO CARD</div>
			<nav>
				<a href="/">Home</a>
				<a href="/cards">Cards</a>
				<a href="/cli">CLI</a>
				<a href="/guides">Guides</a>
				<a href="/roadmap">Roadmap</a>
				<a href="/#about">About</a>
			</nav>
		</header>
	)
}
