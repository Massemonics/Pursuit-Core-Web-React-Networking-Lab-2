import React, { useState, useEffect } from 'react'
import Menu from './components/Menu'
import Game from './components/Game'
import axios from 'axios'
import './App.css'

const App = () => {
  
  const [ deckId, setDeckId ] = useState('')
  const [ hand, setHand ] = useState([])
  const [ playing, setPlaying ] = useState(false)

  const generateDeck = async () => {

    let newDeck = await axios.get(
      'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    )
 
    drawTwo(newDeck.data.deck_id)
  } 



  const drawTwo = async (deck) => {
    console.log(deck)

    let draw = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=2`
      )
      draw.data.cards.map(card => {
        setHand( [...hand, card] )
      })
      
    setDeckId(deck)
    setPlaying( true )
  }

  const drawOne = async () => {
    let drawOne = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    )
      setHand( hand.concat(drawOne.data.cards) )
  }



  return (
      <div className='dot'>
        <div className='border'>
          <div>
            <h1 spellCheck='false'>
              Blackjack
            </h1>
            { playing ? (
              <Game
                deckId = { deckId }
                hand = { hand }
                drawOne = { drawOne }
              />
            ) : (
              <Menu
                generateDeck={generateDeck}
                loadDeck={drawTwo}
              />
            )}
          </div>
        </div>
      </div>
    )
  }

export default App
