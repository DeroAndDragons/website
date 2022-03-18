import { useLocation } from "preact-iso"
import { useEffect } from "preact/hooks"

export default () => {
  const location = useLocation()
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const anchor = document.getElementById(hash.replace('#', ''))
      anchor.scrollIntoView({ behavior: "smooth" })
    }
  }, [location])

  return null
}
