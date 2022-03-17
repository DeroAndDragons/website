import render from 'preact-render-to-string'
import { createContext, h, VNode } from 'preact'
import { useContext } from 'preact/hooks'

const ServerContext = createContext<ServerContextType>(null)

export const useServerContext = () => useContext(ServerContext)

export default (app: () => VNode<any>, context: ServerContextType) => {
  const template = h("html", null,
    h("head", null,
      h("link", { href: "/styles/index.css", rel: "stylesheet" })
    ),
    h("body", null,
      h(ServerContext.Provider, { value: context, children: h(app, null) }),
      h("script", { src: "/js/index.js", type: "module" })
    )
  )

  return new Response(
    render(template, null, { pretty: true }),
    { headers: { 'Content-Type': 'text/html' } }
  )
}
