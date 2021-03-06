import { LocationProvider, Router, Route, ErrorBoundary, hydrate, prerender as ssr } from 'preact-iso'

import './styles/normalize.css'
import './styles/index.css'
import './styles/home.css'
import './styles/tcards.css'
import './styles/dcards.css'
import './styles/icon.css'
import './styles/table.css'
import './styles/header.css'
import './styles/docs.css'
import './styles/footer.css'
import './styles/cli.css'

import Home from './pages/home'
import Docs from './pages/docs/index'
import Cli from './pages/cli'
import NotFound from './pages/404'
import Roadmap from './pages/roadmap'
import TCards from './pages/tcards'
import DCards from './pages/dcards'

import Header from './components/header'
import Footer from './components/footer'
import ScrollToAnchor from './components/scrollToAnchor'

export function App() {
	return (
		<LocationProvider>
			<ScrollToAnchor />
			<div>
				<Header />
				<ErrorBoundary>
					<Router>
						<Route path="/" component={Home} />
						<Route path="/traditional-cards" component={TCards} />
						<Route path="/dynamic-cards" component={DCards} />
						<Route path="/roadmap" component={Roadmap} />
						<Route path="/docs" component={Docs} />
						<Route path="/docs/*" component={Docs} />
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
