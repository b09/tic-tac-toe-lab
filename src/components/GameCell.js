import React from 'react';

const GameCell = (props) => {

  return(
    //TODO onClick listener for button
    <div className="game-cell" id={props.index} onClick={() =>{props.changeCell(props.index)}}>
      <button >{props.cell}</button>
    </div>
  )


}

export default GameCell;
