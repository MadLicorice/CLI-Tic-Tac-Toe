class Tictactoe {
  constructor() {
    this.currentPlayer = 'X';
    this.tieCounter = 0;
    this.board = [
      ['', 1,  2,  3],
      [1, '', '', ''],
      [2, '', '', ''],
      [3, '', '', ''],
    ];
  }

  displayBoard() {
    console.log(this.board[0]);
    console.log(this.board[1]);
    console.log(this.board[2]);
    console.log(this.board[3]);
    checkTurn();
  }

  checkTurn() {
    console.log(`It's player ${this.currentPlayer}'s turn. Place a piece'`);
  }

  placePiece(x, y) {
    this.board[x][y] = currentPlayer;
    this.tieCounter += 1;
    this.checkWinner();
  }

  checkWinner() {
    if (this.board[1][1] === this.currentPlayer && this.board[1][2] === this.currentPlayer && this.board[1][3] === this.currentPlayer) {
      this.declareWinner(this.currentPlayer);
    } else if (this.board[2][1] === this.currentPlayer && this.board[2][2] === this.currentPlayer && this.board[2][3] === this.currentPlayer) {
      this.declareWinner(this.currentPlayer);     
    } else if (this.board[3][1] === this.currentPlayer && this.board[3][2] === this.currentPlayer && this.board[3][3] === this.currentPlayer) {
      this.declareWinner(this.currentPlayer);
    } else if (this.board[1][1] === this.currentPlayer && this.board[2][1] === this.currentPlayer && this.board[3][1] === this.currentPlayer) {
      this.declareWinner(this.currentPlayer);
    } else if (this.board[1][2] === this.currentPlayer && this.board[2][2] === this.currentPlayer && this.board[3][2] === this.currentPlayer) {
      this.declareWinner(this.currentPlayer);
    } else if (this.board[1][3] === this.currentPlayer && this.board[2][3] === this.currentPlayer && this.board[3][3] === this.currentPlayer) {
      this.declareWinner(this.currentPlayer);
    } else if (this.board[1][1] === this.currentPlayer && this.board[2][2] === this.currentPlayer && this.board[3][3] === this.currentPlayer) {
      this.declareWinner(this.currentPlayer);
    } else if (this.board[1][3] === this.currentPlayer && this.board[2][2] === this.currentPlayer && this.board[3][1] === this.currentPlayer) {
      this.declareWinner(this.currentPlayer);
    }

    if (this.tieCounter === 9) {
      this.declareWinner('tie');
    }

    this.changePlayer();
  }

  changePlayer() {
    if (this.currentPlayer === 'X') {
      this.currentPlayer = 'O';
    } else {
      this.currentPlayer = 'X';
    }

    this.displayBoard();
  }

  declareWinner(player) {
    if (player === 'tie') {
      console.log(`It's a tie! No one wins!`)
    } else {
      console.log(`Player ${this.currentPlayer} wins!!`)
    }
    this.resetGame()
  }

  resetGame() {
    this.currentPlayer = 'X';
    this.tieCounter = 0;
    this.board = [
      ['', 1, 2, 3],
      [1, '', '', ''],
      [2, '', '', ''],
      [3, '', '', ''],
    ];
    console.log('Ready to play again!')
  }

  displayInstructions() {
    console.log('Welcome to command line tic-tac-toe');
    console.log('Type "displayBoard()" to show the current state of the board');
    console.log('Type "placePiece(x, y)" to add the current player\'s piece to the board');
    console.log('Repeat until the game is won! You can also manually check \n whose turn it is by typing "checkTurn()"')
  };
};

const game = new Tictactoe();
