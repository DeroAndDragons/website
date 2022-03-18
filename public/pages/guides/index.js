import { ErrorBoundary, Route, Router } from "preact-iso"

import InstallCli from './install-cli'

export default () => {
  return <section class="page-center">
    <div>
      <div>CLI</div>
      <ul>
        <li><a href="/guides/install-cli">Install CLI</a></li>
        <li><a href="/guides/cli-basics">CLI basics</a></li>
        <li><a href="/guides/buy-packs">Buy packs</a></li>
        <li><a href="/guides/buy-sell-card">Buy / sell card</a></li>
        <li><a href="/guides/transfer-card">Transfer card</a></li>
        <li><a href="/guides/create-unique-card">Create unique card</a></li>
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

