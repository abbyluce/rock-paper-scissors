class Player {
  constructor(name, token) {
    this.name = name
    this.token = token
    this.wins = 0
    this.currentSelection
  }

  takeTurn(currentGame) {
    if (this.name === "computer") {
      this.currentSelection = currentGame.fighters[Math.floor(Math.random() *
        currentGame.fighters.length)];
    } else {
      this.currentSelection = event.target.id;
    }
  }

    addWin() {
      // update inner text
      return `${this.token} This game was won by the ${this.name}! ${this.token}`
    }
    itsADraw() {
    }
  }




// computer player to have randomizer.
//takeTurn telling computer to choose a fighter, conditional for if the game is
//classic or difficult
//write out all rules within conditionals
//
