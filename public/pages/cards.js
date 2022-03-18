import { useCallback, useMemo, useState } from "preact/hooks"

const traditionalCards = (type, from, to) => {
  let cards = []
  for (let i = from; i <= to; i++) {
    cards.push({ type, number: i })
  }
  return cards
}

const allTraditionalCards = () => {
  const commons = traditionalCards("common", 1, 15)
  const uncommons = traditionalCards("uncommon", 1, 10)
  const rares = traditionalCards("rare", 1, 5)
  const secrets = traditionalCards("secret", 1, 2)
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
  return <div class="card-item-unknown" style={{ borderColor: cardBorderColor(type) }}>
  </div>
}

export default () => {
  const traditionalCards = useMemo(() => allTraditionalCards(), [])
  const [displayTraditionalCards, setDisplayTraditionalCards] = useState(traditionalCards)

  const onTypeChange = useCallback((e) => {
    const type = e.target.value
    setDisplayTraditionalCards(traditionalCards.filter(c => {
      if (type) return c.type === type
      return true
    }))
  }, [])

  return <section class="page-center">
    <div class="cards-tab">
      <div class="cards-tab-item">Traditional NFT Cards</div>
      <div class="cards-tab-item">Dynamic NFT Stats Cards</div>
    </div>
    <div class="filter-cards">
      <select onChange={onTypeChange}>
        <option value="">All types</option>
        <option value="common">Common</option>
        <option value="uncommon">Uncommon</option>
        <option value="rare">Rare</option>
        <option value="secret">Secret</option>
        <option value="unique">Unique</option>
      </select>
      <div>{displayTraditionalCards.length} / {displayTraditionalCards.length}</div>
    </div>
    <div class="filter-cards">
      <select>
        <option value="">All races</option>
      </select>
      <select>
        <option value="">All genders</option>
      </select>
      <select>
        <option value="">All class</option>
      </select>
      <select>
        <option value="">All items</option>
      </select>
      <div>1000 / 1000</div>
    </div>
    <div class="card-items">
      {displayTraditionalCards.map(card => {
        return <CardItem card={card} />
      })}
    </div>
  </section>
}
