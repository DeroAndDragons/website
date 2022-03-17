import { h } from 'preact'
import menu from './components/menu'
import template from './components/template'

const page = () => {
  return h("div", null,
    menu()
  )
}

export async function onRequest(context: ServerContextType) {
  return template(page, context)
} 
