var centerChooseYourGame = document.querySelector(".center-choose-your-game");
var centerClassicChooseYourPlayer = document.querySelector(".center-classic-choose-your-player");
var centerDiffifultChooseYourPlayer = document.querySelector(".center-difficult-choose-your-player");

var changeGameButton = document.querySelector(".change-game");
var classicGameButton = document.querySelector(".classic-game-button");
var difficultGameButton = document.querySelector(".difficult-game-button");

var classicFighters = document.querySelector(".player-icons");
var difficultFighters = document.querySelector(".player-icons-difficult");

var computerWinCount = document.querySelector(".computer-win-count");
var humanWinCount = document.querySelector(".human-win-count");
var chooseSubheader = document.querySelector("h2");

var currentGame = new Game("human", "computer");

//on click of any icon you set current selection to paper, move to next turn. currentGame.humanPlayer.currentSelection
//make wrapper function for rest of steps. invoke wrapper function after humans current selection is set
//run method to have computer select random
//run method to determine establishWinner
//display whatever is needed on dom
//reset
//always going to be humans turn then computers

//event listeners for all icons, wrapper function invoked when clicked.

//EVENT LISTENERS

classicGameButton.addEventListener('click', chooseClassicGame);
difficultGameButton.addEventListener('click', chooseDifficultGame);
changeGameButton.addEventListener('click', clickChangeGame);
classicFighters.addEventListener('click', initializeGame)
difficultFighters.addEventListener('click', initializeGame)

//FUNCTIONS

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function chooseClassicGame() {
  show(centerClassicChooseYourPlayer);
  show(changeGameButton);
  hide(centerChooseYourGame);
  chooseSubheader.innerText = `CHOOSE YOUR PLAY!`
}

function chooseDifficultGame() {
  hide(centerChooseYourGame);
  hide(centerClassicChooseYourPlayer);
  show(changeGameButton)
  show(centerDiffifultChooseYourPlayer);
  chooseSubheader.innerText = `CHOOSE YOUR PLAY!`
  currentGame.classic = false;
}

function clickChangeGame() {
  show(centerChooseYourGame);
  hide(centerClassicChooseYourPlayer);
  hide(centerDiffifultChooseYourPlayer);
}

function clearGame() {
  if (currentGame.classic) {
    chooseClassicGame()
  } else {
    chooseDifficultGame()
  }
}

function initializeGame() {
  currentGame.establishFighter();
  currentGame.humanPlayer.humanTurn(event);
  currentGame.computerPlayer.computerTurn(currentGame);
  displaySelections()
  currentGame.establishWinner();
  currentGame.addPoints();
  updateResults();
  setTimeout(clearGame, 2000);
  console.log(currentGame)
}

function displaySelections() {
  if (currentGame.classic) {
    classicFighters.innerHTML = `<img src="images/${currentGame.humanPlayer.currentSelection}.png" id="${currentGame.humanPlayer.currentSelection}">
    <img src="images/${currentGame.computerPlayer.currentSelection}.png" id="${currentGame.humanPlayer.currentSelection}">`
  } else if (!currentGame.classic) {
    difficultFighters.innerHTML = `<img src="images/${currentGame.humanPlayer.currentSelection}.png" id="${currentGame.humanPlayer.currentSelection}">
    <img src="images/${currentGame.computerPlayer.currentSelection}.png" id="${currentGame.humanPlayer.currentSelection}">`
  }
}

function updateResults() {
  computerWinCount.innerHTML = `WINS: ${currentGame.computerPlayer.wins}`
  humanWinCount.innerHTML = `WINS: ${currentGame.humanPlayer.wins}`
  if (currentGame.winner === 'human') {
  chooseSubheader.innerHTML = `<img src=${currentGame.humanPlayer.token} class="human-icon-center"> You won this game! <img src=${currentGame.humanPlayer.token} class="human-icon-center">`
} else if (currentGame.winner === 'computer') {
  chooseSubheader.innerHTML = `<img src=${currentGame.computerPlayer.token} class="computer-icon-center"> This game was won by the computer! <img src=${currentGame.computerPlayer.token} class="computer-icon-center">`
} else if (currentGame.winner === 'tie') {
  chooseSubheader.innerHTML = `It's a tie!`
}
}
