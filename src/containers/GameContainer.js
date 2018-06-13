import React from 'react';
import GameGrid from '../components/GameGrid.js';
import GameCell from '../components/GameCell.js';

class GameContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      board: [null,'X',null,null,null,null,null,null,null],
      currentCell: null,
      winningCombos: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    }
  }

  // handleCellSelected(index){
  //   const selectedCell = this.state.board[index]
  //   this.setState({currentCell: selectedCell})
  // }

  render(){
    return(
      <div className="game-container">
        <GameGrid
          board={this.state.board}
         />
      </div>
    )
  }


}



export default GameContainer;
