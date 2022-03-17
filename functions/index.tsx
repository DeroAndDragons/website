import render from 'preact-render-to-string'
import { h } from 'preact'

const App = (props) => {
  return h("html", null,
    h("body", null,
      h("div", null, "ok"),
      h("div", null, JSON.stringify(props)),
      h("img", { src: "/static/test.jpg" })
    )
  )
}

export async function onRequest(context) {
  return new Response(
    render(h(App, { context }), null, { pretty: true }),
    { headers: { 'Content-Type': 'text/html' } }
  )
} 
