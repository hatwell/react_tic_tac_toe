import React from 'react';

class Board extends React.Component {
  constructor(props){
      this.state= ({
        board = ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']
      })
      this.createBoard = this.createBoard.bind(this)
  }

  render(){
    this.createBoard(this.state.board);
  }

  createBoard(board){
    board.forEach(function(value){
      <Cell>{value}
    })
  }
}
