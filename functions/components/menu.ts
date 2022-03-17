import { h } from 'preact'
import { useServerContext } from './template'

export default () => {
  return h("div", null,
    h("a", { href: "/" }, "home"),
    h("a", { href: "/about" }, "about"),
    h("a", { href: "/cards" }, "cards")
  )
}
