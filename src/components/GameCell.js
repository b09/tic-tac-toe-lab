import React from 'react';

const GameCell = (props) => {

  return(
    <div className="game-cell" id={props.index} onClick={() =>{props.changeCell(props.index)}}>
      <button >{props.cell}</button>
    </div>
  )


}

export default GameCell;
