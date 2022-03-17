import render from 'preact-render-to-string'
import { h } from 'preact'

const App = <div class="foo">content</div>

export async function onRequest(context) {
  return new Response(
    render(App),
    { headers: { 'Content-Type': 'text/html' } }
  )
} 
