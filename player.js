class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.currentSelection;
  }

  computerTurn(currentGame) {
    if (this.name === "computer") {
      this.currentSelection = currentGame.fighters[Math.floor(Math.random() *
        currentGame.fighters.length)];
      }
  }

  humanTurn(event) {
      this.currentSelection = event.target.id;
  }
}
