// currentGame = new Game();

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

var human = new Player("human", "https://www.pngkey.com/png/full/75-750996_stick-figure-transparent-background-male-icon-white-png.png")
var computer = new Player("computer", "http://assets.stickpng.com/images/588a6ad0d06f6719692a2d29.png")


classicGameButton.addEventListener('click', chooseClassicGame);
difficultGameButton.addEventListener('click', chooseDifficultGame);
changeGameButton.addEventListener('click', clickChangeGame);

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
  show(centerDiffifultChooseYourPlayer);
}

function clickChangeGame() {
  show(centerChooseYourGame);
  hide(centerClassicChooseYourPlayer);
  hide(centerDiffifultChooseYourPlayer);
}

function classicComputerSelection() {
  var classicIndex = Math.floor(Math.random() * this.classicPlayers.length);
  var classicSelection = this.classicPlayers[classicIndex];
  return classicSelection;
}

function playClassic() {
   if (human === "rock") {

   }
}
