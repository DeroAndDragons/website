import { h } from 'preact'
import menu from './components/menu'
import template from './components/template'

const App = () => {
  return h("div", null,
    menu(),
    h("img", { src: "/static/img/test.jpg" }, null)
  )
}

export async function onRequest(context: ServerContextType) {
  return template(App, context)
} 
