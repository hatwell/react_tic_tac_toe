import React from 'react';
import Cell from './Cell.jsx'

class Board extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    var cells = this.props.board.map((value, index) => {
                  return <Cell clicked={this.props.clicked} id={index} className="cell">{value}</Cell>
                })
      console.log(cells)
    return (

      <div>{cells}</div>

  )
}

}

export default Board;
