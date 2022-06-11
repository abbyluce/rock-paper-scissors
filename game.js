class Game {
  constructor(human, computer) {
    this.humanPlayer = human
    this.computerPlayer = computer
    this.icons = []
    this.classic = true
  }
  playGame() {
    if (this.classic) {
    this.icons.push("rock", "paper", "scissors")
  } else {
    this.icons.push("rock", "paper", "scissors", "heart", "star")
  }
    }
    countWins() {
      
    }
}




//two player instances
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
