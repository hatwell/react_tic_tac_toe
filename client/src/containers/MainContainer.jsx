import React from 'react';
import Board from '../components/Board';
import TicTacToe from '../services/ticTacToe';

class MainContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {};

    const ticTacToe = new TicTacToe();
  }

  render(){

    return (
      <div>
        <h2>Main container</h2>
        <Board />
      </div>
    );
  }
}

export default MainContainer;
