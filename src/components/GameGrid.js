import React from 'react';
import GameCell from './GameCell.js';

const GameGrid = (props) => {

  const gameCells = props.board.map((cell, index) => {
    return <GameCell />
  })

  return(
    <div>
    {gameCells}
    </div>
  )
}

export default GameGrid;
