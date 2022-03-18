import { useLocation } from 'preact-iso'

export default function Header() {
	const { url } = useLocation()
	return (
		<div class="page-center">
			<header className="header">
				<img src="/img/dero_dragon_logo.jpg" class="header-logo" />
				<div>
					<div class="header-title">Dero & Dragons</div>
					<nav>
						<a href="/">Home</a>
						<a href="/cards">Cards</a>
						<a href="/cli">CLI</a>
						<a href="/guides">Guides</a>
						<a href="/roadmap">Roadmap</a>
						<a href="/#about">About</a>
					</nav>
				</div>
			</header>
		</div>
	)
}
