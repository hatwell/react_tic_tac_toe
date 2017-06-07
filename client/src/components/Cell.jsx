import React from 'react'

class Cell extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="cellContents">
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default Cell;
