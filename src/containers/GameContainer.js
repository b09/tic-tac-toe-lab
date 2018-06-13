import React from 'react';
import GameGrid from '../components/GameGrid.js';

class GameContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      board: ['.','.','.','.','.','.','.','.','.'],
      winningCombos: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    }
    this.handleCellSelected = this.handleCellSelected.bind(this)
    this.crossesTurn = true
  }

  handleCellSelected(index){
    const newBoard = this.state.board.slice(0)
    if (this.crossesTurn === true) {
      newBoard[index] = 'X'
      this.crossesTurn = false
    } else {
      newBoard[index] = 'O'
      this.crossesTurn = true
    }
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
