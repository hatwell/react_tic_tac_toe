import React from 'react';
import Board from '../components/Board';
import TicTacToe from '../services/ticTacToe';

class MainContainer extends React.Component {
  constructor(props){
    super(props);
    this.ticTacToe = new TicTacToe();
    this.state = {
      board: this.ticTacToe.board
    };

  }

  render(){

    return (
      <div>
        <h2>Main container</h2>
        <Board board = {this.state.board} clicked = {this.handleClickEvent.bind(this)}/>
      </div>
    );
  }

  handleClickEvent(index){
    this.ticTacToe.takeTurn(index);
    this.setState({board: this.ticTacToe.board});
  }
}

export default MainContainer;
