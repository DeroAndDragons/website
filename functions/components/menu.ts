import { h } from 'preact'
import { useServerContext } from './template'

export default () => {
  const test = useServerContext()
  return h("div", null, JSON.stringify(test))
}
