var centerChooseYourGame = document.querySelector(".center-choose-your-game");
var centerClassicChooseYourPlayer = document.querySelector(".center-classic-choose-your-player");
var centerDiffifultChooseYourPlayer = document.querySelector(".center-difficult-choose-your-player");

var changeGameButton = document.querySelector(".change-game");
var classicGameButton = document.querySelector(".classic-game-button");
var difficultGameButton = document.querySelector(".difficult-game-button");

var rock = document.querySelector(".rock-icon")
var paper = document.querySelector(".paper-icon")
var scissors = document.querySelector(".scissors-icon")
var heart = document.querySelector(".heart-icon")
var star = document.querySelector(".star-icon")

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
rock.addEventListener('click', selectRock)
// paper.addEventListener('click', playGame)
// scissors.addEventListener('click', playGame)
// heart.addEventListener('click', playGame)
// star.addEventListener('click', playGame)

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
}

function chooseDifficultGame() {
  hide(centerChooseYourGame);
  hide(centerClassicChooseYourPlayer);
  show(changeGameButton)
  show(centerDiffifultChooseYourPlayer);
  currentGame.classic = false;
}

function clickChangeGame() {
  show(centerChooseYourGame);
  hide(centerClassicChooseYourPlayer);
  hide(centerDiffifultChooseYourPlayer);
}

function selectRock() {
  currentGame.humanPlayer.currentSelection = "rock"
  currentGame.establishFighter()
  currentGame.computerPlayer.takeTurn(currentGame)
  currentGame.establishWinner()
  console.log(currentGame)
}
