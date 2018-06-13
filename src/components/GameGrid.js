import React from 'react';
import GameCell from './GameCell.js';

const GameGrid = (props) => {

  const gameCells = props.board.map((cell, index) => {
    return <GameCell cell={cell} index={index} key={index} changeCell={props.changeBoardState}/>
  })

  return(
    <div id="blah">
    {gameCells}
    </div>
  )
}

export default GameGrid;
