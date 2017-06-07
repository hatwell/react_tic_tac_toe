var TicTacToe = function(){
  this.board = ['f', '', '', '', '', '', '', '', '']
  this.turnCounter = 0;

}

TicTacToe.prototype = {

  whoseTurn(){
    var token;
    token = (this.turnCounter % 2 === 0) ? "X" : "O";
    return token;
  },

  takeTurn(position){
    var token = this.whoseTurn();
    this.board[position] = token;
    this.turnCounter +=1;
  }


}

module.exports = TicTacToe;
