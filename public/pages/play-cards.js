import { useCallback, useMemo, useState } from "preact/hooks"

const cards = (type, from, to) => {
  let cards = []
  for (let i = from; i <= to; i++) {
    cards.push({ type, number: i })
  }
  return cards
}

const allCards = () => {
  const commons = cards("common", 1, 15)
  const uncommons = cards("uncommon", 1, 10)
  const rares = cards("rare", 1, 5)
  const secrets = cards("secret", 1, 2)
  return [...commons, ...uncommons, ...rares, ...secrets]
}

const cardBorderColor = (type) => {
  if (type === 'secret') return 'gold'
  if (type === 'rare') return 'green'
  if (type === 'uncommon') return 'blue'
  return 'gray'
}

const CardItem = (props) => {
  const { card } = props
  const { type, number } = card
  return <div class="pcards-item-unknown" style={{ borderColor: cardBorderColor(type) }}>
  </div>
}

export default () => {
  const cards = useMemo(() => allCards(), [])
  const [displayCards, setDisplayCards] = useState(cards)

  const onTypeChange = useCallback((e) => {
    const type = e.target.value
    setDisplayCards(displayCards.filter(c => {
      if (type) return c.type === type
      return true
    }))
  }, [])

  return <section class="page-center">
    <h1>
      Play cards
      <div class="h1-sub">Collect all play cards on the blockchain.</div>
    </h1>
    <div class="pcards-filter">
      <select onChange={onTypeChange}>
        <option value="">All types</option>
        <option value="common">Common</option>
        <option value="uncommon">Uncommon</option>
        <option value="rare">Rare</option>
        <option value="secret">Secret</option>
        <option value="unique">Unique</option>
      </select>
      <div>{displayCards.length} / {displayCards.length}</div>
    </div>
    <div class="pcards-items">
      {displayCards.map(card => {
        return <CardItem card={card} />
      })}
    </div>
  </section>
}
