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
  return <div class="card-item-unknown" style={{ borderColor: cardBorderColor(type) }}>
  </div>
}

export default () => {
  return <section class="page-center">
    <h1>Traditional NFT Cards</h1>
    <select>
      <option>Common</option>
      <option>Uncommon</option>
      <option>Rare</option>
      <option>Secret</option>
      <option>Unique</option>
    </select>
    <div class="card-items">
      {allCards().map(card => {
        return <CardItem card={card} />
      })}
    </div>
  </section>
}
