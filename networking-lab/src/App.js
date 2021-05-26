import React, { useState } from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";
import axios from "axios";
import "./App.css";

const App = () => {
  const [deckId, setDeckId] = useState("");
  const [hand, setHand] = useState([]);
  const [playing, setPlaying] = useState(false);

  const generateDeck = async () => {
    let newDeck = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    drawTwo(newDeck.data.deck_id);
    setDeckId(newDeck.data.deck_id);
  };

  const handleChange = (e) => {
    setDeckId(e.target.value);
  };

  const loadDeck = (e) => {
    e.preventDefault();
    drawTwo(deckId);
  };

  const drawTwo = async (deck) => {
    let draw = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=2`
    );
    setHand(draw.data.cards);
    setPlaying(true);
  };

  const drawOne = async () => {
    let drawOne = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    );
    setHand(hand.concat(drawOne.data.cards));
  };

  return (
    <div className="dot">
      <div className="border">
        <div>
          <h1 spellCheck="false">Blackjack</h1>
          {playing ? (
            <Game deckId={deckId} hand={hand} drawOne={drawOne} />
          ) : (
            <Menu
              deckId={deckId}
              loadDeck={loadDeck}
              generateDeck={generateDeck}
              handleChange={handleChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
