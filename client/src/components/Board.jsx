import React from 'react';
import Cell from './Cell'

class Board extends React.Component {
  constructor(props){
    super(props)
      this.state= ({
        board: ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']
      })
      this.createBoard = this.createBoard.bind(this)
  }

  render(){
    return  (
      board.forEach(function(value){
        <Cell>{value}</Cell>
  })
)}

  // createBoard(board){
  //   board.forEach(function(value){
  //     <Cell>{value}</Cell>
  //   })
  // }
}

export default Board;
