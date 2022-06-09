var centerChooseYourGame = document.querySelector(".center-choose-your-game");
var centerClassicChooseYourPlayer = document.querySelector(".center-classic-choose-your-player");
var centerDiffifultChooseYourPlayer = document.querySelector(".center-difficult-choose-your-player");

var changeGameButton = document.querySelector(".change-game");
var classicGameButton = document.querySelector(".classic-game-button");
var difficultGameButton = document.querySelector(".difficult-game-button");

classicGameButton.addEventListener('click', clickClassicGame);
difficultGameButton.addEventListener('click', clickDifficultGame);
changeGameButton.addEventListener('click', clickChangeGame);

function clickClassicGame() {
  centerClassicChooseYourPlayer.classList.remove('hidden');
  centerChooseYourGame.classList.add('hidden');
  changeGameButton.classList.remove('hidden');
}

function clickDifficultGame() {
  centerChooseYourGame.classList.add('hidden');
  centerClassicChooseYourPlayer.classList.add('hidden');
  centerDiffifultChooseYourPlayer.classList.remove('hidden');
}

function clickChangeGame() {
  centerChooseYourGame.classList.remove('hidden');
  centerClassicChooseYourPlayer.classList.add('hidden');
  centerDiffifultChooseYourPlayer.classList.add('hidden');
}

function showComputerPlay() {
  displayReceivedMessage.innerHTML = '';
  var mantraIndex = Math.floor(Math.random() * mantrasArray.length);
  var mantra = mantrasArray[mantraIndex];
  displayReceivedMessage.innerText = `${mantra}`
};
