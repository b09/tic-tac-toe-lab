import React from 'react';
import GameGrid from '../components/GameGrid.js';
import GameCell from '../components/GameCell.js';

class GameContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      board: ['.','.','.','.','.','.','.','.','.'],
      winningCombos: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    }
    this.handleCellSelected = this.handleCellSelected.bind(this)
  }

  handleCellSelected(index){
    console.log(index);
    const newBoard = this.state.board.slice(0)
    newBoard[index] = 'This is a hardcoded string (sorry)'
    this.setState({board: newBoard})
  }

  render(){
    return(
      <div className="game-container">
        <GameGrid
          board={this.state.board}
          changeBoardState={this.handleCellSelected}
         />
      </div>
    )
  }


}



export default GameContainer;
