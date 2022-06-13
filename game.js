class Game {
  constructor(human, computer) {
    this.humanPlayer = new Player(human, "https://www.pngkey.com/png/full/75-750996_stick-figure-transparent-background-male-icon-white-png.png")
    this.computerPlayer = new Player(computer, "http://assets.stickpng.com/images/588a6ad0d06f6719692a2d29.png")
    this.fighters = []
    this.classic = true
    this.winner;
  }
  establishFighter() {
    if (this.classic) {
    this.fighters = ["rock", "paper", "scissors"]
  } else {
    this.fighters = ["rock", "paper", "scissors", "heart", "star"]
  }
  }
  establishWinner() {
      if (this.humanPlayer.currentSelection === this.computerPlayer.currentSelection) {
        this.winner = "tie";
      } else if
        ((this.humanPlayer.currentSelection === "rock" &&
        (this.computerPlayer.currentSelection === "scissors"
        || this.computerPlayer.currentSelection === "heart")) ||
        (this.humanPlayer.currentSelection === "paper" &&
        (this.computerPlayer.currentSelection === "rock"
        || this.computerPlayer.currentSelection === "star")) ||
        (this.humanPlayer.currentSelection === "scissors" &&
        this.computerPlayer.currentSelection === "paper") ||
        (this.humanPlayer.currentSelection === "heart" &&
        (this.computerPlayer.currentSelection === "scissors" ||
        this.computerPlayer.currentSelection === "paper")) ||
        (this.humanPlayer.currentSelection === "star" &&
        (this.computerPlayer.currentSelection === "rock" ||
        this.computerPlayer.currentSelection === "scissors"))) {
        this.winner = "human"
      } else {
        this.winner = "computer"
      }
  }

  addPoints() {
    if (this.winner === "human") {
      this.humanPlayer.wins++
    } else if (this.winner === "computer") {
      this.computerPlayer.wins++
    }
  }
}




//two player instances
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
