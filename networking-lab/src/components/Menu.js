import React from "react";

const Menu = ({ deckId, handleChange, generateDeck, loadDeck }) => {
  return (
    <div className="neonMenu">
      <button onClick={() => generateDeck()}>Generate Deck</button>
      <br />
      <form onSubmit={loadDeck}>
        <label htmlFor="input">
          <sub>Input Existing Dec</sub>
        </label>
        <br />
        <input type="text" id="input" value={deckId} onChange={handleChange} />
        <br />
        <button type="submit">Draw</button>
      </form>
    </div>
  );
};

export default Menu;
