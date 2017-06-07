import React from 'react'

class Cell extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="cellContents" onClick={this.clickFunction.bind(this)}>
        <button onClick={this.clickFunction.bind(this)}>
          {this.props.children}
        </button>
      </div>
    );
  }

  clickFunction(){
    var position = this.props.id;
    console.log(position);
    this.props.clicked(position);
  }
}

export default Cell;
