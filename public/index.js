import { LocationProvider, Router, Route, lazy, ErrorBoundary, hydrate, prerender as ssr, useLocation } from 'preact-iso'
import { useEffect } from 'preact/hooks'

import Home from './pages/home'
import Guides from './pages/guides/index'
import Cli from './pages/cli'
import NotFound from './pages/404'
import Roadmap from './pages/roadmap'
import Cards from './pages/cards'

import Header from './components/header'
import Footer from './components/footer'

const ScrollToAnchor = () => {
	const location = useLocation()
	useEffect(() => {
		const hash = window.location.hash
		if (hash) {
			const anchor = document.getElementById(hash.replace('#', ''))
			anchor.scrollIntoView()
		}
	}, [location])

	return null
}

export function App() {
	return (
		<LocationProvider>
			<ScrollToAnchor />
			<div>
				<Header />
				<ErrorBoundary>
					<Router>
						<Route path="/" component={Home} />
						<Route path="/cards" component={Cards} />
						<Route path="/roadmap" component={Roadmap} />
						<Route path="/guides" component={Guides} />
						<Route path="/cli" component={Cli} />
						<Route default component={NotFound} />
					</Router>
				</ErrorBoundary>
				<Footer />
			</div>
		</LocationProvider>
	);
}

hydrate(<App />)

export async function prerender(data) {
	return await ssr(<App {...data} />)
}
