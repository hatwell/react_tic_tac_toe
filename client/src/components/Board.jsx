import React from 'react';
import Cell from './Cell.jsx'


class Board extends React.Component {
  constructor(props){
    super(props)
      this.state= ({
        board: [' ', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']
      })

  }

  render(){
    var cells = this.state.board.map(function(value, index){
                  return <Cell id={index} className="cell col-md-2">{value}</Cell>
                })
      console.log(cells)
    return (
      <div>{cells}</div>
  )
}

}

export default Board;
