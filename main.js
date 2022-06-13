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

classicGameButton.addEventListener('click', chooseClassicGame);
difficultGameButton.addEventListener('click', chooseDifficultGame);
changeGameButton.addEventListener('click', clickChangeGame);
classicFighters.addEventListener('click', initializeGame);
difficultFighters.addEventListener('click', initializeGame);

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
  clearGame();
  // chooseSubheader.innerText = `CHOOSE YOUR PLAY!`;
}

function chooseDifficultGame() {
  currentGame.classic = false;
  hide(centerChooseYourGame);
  hide(centerClassicChooseYourPlayer);
  show(changeGameButton);
  show(centerDiffifultChooseYourPlayer);
  clearGame();
  // chooseSubheader.innerText = `CHOOSE YOUR PLAY!`;

}

function clickChangeGame() {
  show(centerChooseYourGame);
  hide(centerClassicChooseYourPlayer);
  hide(centerDiffifultChooseYourPlayer);
  hide(changeGameButton);
  chooseSubheader.innerText = `CHOOSE YOUR GAME!`;
}

function initializeGame() {
  currentGame.establishFighter();
  currentGame.humanPlayer.humanTurn(event);
  currentGame.computerPlayer.computerTurn(currentGame);
  displaySelections();
  currentGame.establishWinner();
  currentGame.addPoints();
  updateHeader();
  setTimeout(clearGame, 2500);
}

function displaySelections() {
  if (currentGame.classic) {
    classicFighters.innerHTML = `<img src="images/${currentGame.humanPlayer.currentSelection}.png" id="${currentGame.humanPlayer.currentSelection}">
    <img src="images/${currentGame.computerPlayer.currentSelection}.png" id="${currentGame.humanPlayer.currentSelection}">`;
  } else if (!currentGame.classic) {
    difficultFighters.innerHTML = `<img src="images/${currentGame.humanPlayer.currentSelection}.png" id="${currentGame.humanPlayer.currentSelection}">
    <img src="images/${currentGame.computerPlayer.currentSelection}.png" id="${currentGame.humanPlayer.currentSelection}">`;
  }
}

function updateHeader() {
  computerWinCount.innerHTML = `WINS: ${currentGame.computerPlayer.wins}`;
  humanWinCount.innerHTML = `WINS: ${currentGame.humanPlayer.wins}`;
  if (currentGame.winner === 'human') {
    chooseSubheader.innerHTML = `<img src=${currentGame.humanPlayer.token} class="human-icon-center"> You won this game! <img src=${currentGame.humanPlayer.token} class="human-icon-center">`;
  } else if (currentGame.winner === 'computer') {
    chooseSubheader.innerHTML = `<img src=${currentGame.computerPlayer.token} class="computer-icon-center"> This game was won by the computer! <img src=${currentGame.computerPlayer.token} class="computer-icon-center">`;
  } else if (currentGame.winner === 'tie') {
    chooseSubheader.innerHTML = `It's a tie!`;
  }
}

function clearGame() {
  if (currentGame.classic) {
    chooseSubheader.innerText = `CHOOSE YOUR PLAY!`;
    classicFighters.innerHTML =
    `<img src="images/paper.png" alt="Paper" id="paper">
    <img src="images/rock.png" alt="Rock" id="rock">
    <img src="images/scissors.png" alt="Scissors" id="scissors">`
  } else if (!currentGame.classic) {
    chooseSubheader.innerText = `CHOOSE YOUR PLAY!`;
    difficultFighters.innerHTML =
    `<img src="images/paper.png" alt="Paper" id="paper">
    <img src="images/rock.png" alt="Rock" id="rock">
    <img src="images/scissors.png" alt="Scissors" id="scissors">
    <img src="images/heart.png" alt="Heart" id="heart">
    <img src="images/star.png" alt="Star" id="star">`
  }
}
