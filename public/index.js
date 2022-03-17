import { LocationProvider, Router, Route, lazy, ErrorBoundary, hydrate, prerender as ssr } from 'preact-iso'
import Home from './pages/home.js'
import NotFound from './pages/404.js'
import Header from './components/header.js'
import './styles/index.module.css'

const About = lazy(() => import('./pages/about.js'))

export function App() {
	return (
		<LocationProvider>
			<div class="app">
				<Header />
				<ErrorBoundary>
					<Router>
						<Route path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route default component={NotFound} />
					</Router>
				</ErrorBoundary>
			</div>
		</LocationProvider>
	);
}

hydrate(<App />)

export async function prerender(data) {
	return await ssr(<App {...data} />)
}
