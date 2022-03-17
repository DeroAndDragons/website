import render from 'preact-render-to-string'
import { h } from 'preact'

const App = h("html", null,
  h("body", null,
    h("div", null, "ok"),
  ),
)

export async function onRequest(context) {
  return new Response(
    render(App, null, { pretty: true }),
    { headers: { 'Content-Type': 'text/html' } }
  )
} 
