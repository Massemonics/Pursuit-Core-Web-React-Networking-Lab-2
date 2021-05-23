import React from 'react'

const Game = (props) => {

   const { deckId, hand, drawOne } = props

  return (
    <div>
      <h4>Deck ID: {deckId}</h4>
      {hand.map(card => {
        return (
          <img src={card.image} alt={card.suit + card.value} key={card.code} />
        )
      })}
      <br />
      <button onClick={() => drawOne() }>Hit Me!</button>
    </div>
  )
}

export default Game
