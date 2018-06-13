import React from 'react';
import GameGrid from '../components/GameGrid.js';
// import GameCell from '../components/GameCell.js';

class GameContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render(){
    return(
      <div className="game-container">
        <GameGrid />
      </div>
    )
  }


}



export default GameContainer;
