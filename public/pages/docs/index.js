import { ErrorBoundary, Route, Router } from "preact-iso"

import InstallCli from './install-cli'

export default () => {
  return <section class="page-center docs">
    <div>
      <div>CLI</div>
      <ul>
        <li><a href="/docs/install-cli">Install CLI</a></li>
        <li><a href="/docs/cli-basics">CLI basics</a></li>
        <li><a href="/docs/buy-packs">Buy packs</a></li>
        <li><a href="/docs/buy-sell-card">Buy / sell card</a></li>
        <li><a href="/docs/transfer-card">Transfer card</a></li>
        <li><a href="/docs/create-unique-card">Create unique card</a></li>
      </ul>
    </div>
    <ErrorBoundary>
      <Router>
        <Route path="/install-cli" component={InstallCli} />
        <Route path="/cli-basics" component={null} />
      </Router>
    </ErrorBoundary>
  </section>
}

