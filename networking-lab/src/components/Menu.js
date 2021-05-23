import React, { useState } from 'react'


const Menu = (props) => {

  const { generateDeck, loadDeck } = props
  const [ deckId, setDeckId ] = useState('')

  const handleChange = (e) => {
    setDeckId( e.target.value )
  }

  return (
    <div className='neonMenu'>
      <button onClick={ () => generateDeck() }>Generate Deck</button>
      <br />
      <form onSubmit={loadDeck}>
        <label htmlFor='input'>
          <sub>Input Existing Dec</sub>
        </label>
        <br />
        <input type='text' id='input' onChange={handleChange} />
        <br />
        <button type='submit'>Draw</button>
      </form>
    </div>
  )
}

export default Menu
