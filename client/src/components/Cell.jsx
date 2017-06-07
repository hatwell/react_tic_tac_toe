import React from 'react'

class Cell extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="cellContents" onClick={this.clickFunction.bind(this)}>

        <button onClick={this.clickFunction.bind(this)}>hi</button>
      </div>
    );
  }

  clickFunction(){
    console.log("i have been clicked")
  }
}

export default Cell;
