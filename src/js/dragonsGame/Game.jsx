import React, { useState } from 'react';

// Define the card types
const DRAGON_TYPES = ['type1', 'type2', 'type3', 'type4', 'type5', 'type6', 'type7', 'type8', 'type9', 'type10'];
const CROW_TYPES = ['type1', 'type2', 'type3', 'type4'];

// Define the initial state of the game
const INITIAL_STATE = {
  players: [
    { cards: [], coins: 0 },
    { cards: [], coins: 0 }
  ],
  deck: [],
  openPiles: [[], []],
  currentPlayer: 0
};

const gameStartBtn = document.querySelector("#gameStart");


function Game() {
  const [state, setState] = useState(INITIAL_STATE);

  // Shuffle the deck, deal the cards, etc.
  function startGame() {
    // ...
  }
  gameStartBtn.addEventListener("click", startGame);

  // Handle a player's turn
  function takeTurn() {
    // ...
  }

  // Check if the game is over
  function checkGameOver() {
    // ...
  }
  //console.log("Game.js loaded");
  // Render the game
  return (
    <>
      <h1>Dragons</h1>
      <div>
        <h2>Player 1</h2>
        <p>Cards: {state.players[0].cards.join(', ')}</p>
        <p>Coins: {state.players[0].coins}</p>
      </div>
      <div>
        <h2>Player 2</h2>
        <p>Cards: {state.players[1].cards.join(', ')}</p>
        <p>Coins: {state.players[1].coins}</p>
      </div>
      <div>
        <h2>Deck</h2>
        <p>Remaining cards: {state.deck.length}</p>
      </div>
      <div>
        <h2>Open Piles</h2>
        <p>Player 1: {state.openPiles[0].join(', ')}</p>
        <p>Player 2: {state.openPiles[1].join(', ')}</p>
      </div>
      <div>
        <h2>Current Player</h2>
        <p>{state.currentPlayer === 0 ? 'Player 1' : 'Player 2'}</p>
      </div>
      <button id='gameStart' onClick={startGame}>Start Game</button>
      <button onClick={takeTurn}>Take Turn</button>
    </>
  );
}

export default Game;
