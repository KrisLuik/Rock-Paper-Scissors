var computerSelection = "";
var playerSelection = "";

var options = ["🪨", "📃", "✂️ "];
var currentOptionNumber = 0;
var shuffleIntervalID = setInterval(shuffleOptions, 150);

var playerSelectionContainer = document.querySelector(
  "#player-selection-container"
);
var shuffleOptionsElement = document.querySelector("#shuffle-options");

playerSelectionContainer.addEventListener("click", handlePlayerSelection);

function shuffleOptions() {
  computerSelection = options[currentOptionNumber];
  shuffleOptionsElement.textContent = computerSelection;

  if (currentOptionNumber < options.length - 1) {
    currentOptionNumber++;
  } else {
    currentOptionNumber = 0;
  }
}

function handlePlayerSelection(event) {
  if (!event.target.classList.contains("options")) return;

  playerSelection = event.target.textContent;
  playerSelectionContainer.innerHTML = `<p class="options">${playerSelection}</p>`;
  clearInterval(shuffleIntervalID);
  gameWinner();
}

function gameWinner() {
  var gameResultMessageElement = document.querySelector("#game-result-message");
  var gameResultMessage = "";

  if (playerSelection === computerSelection) {
    gameResultMessage = "It's a tie!";
    // Note the extra space in the scissors emoji!
  } else if (playerSelection === "🪨" && computerSelection === "✂️ ") {
    gameResultMessage = "Player wins!";
  } else if (playerSelection === "📄" && computerSelection === "🪨") {
    gameResultMessage = "Player wins!";
  } else if (playerSelection === "✂️ " && computerSelection === "📄") {
    gameResultMessage = "Player wins!";
  } else {
    gameResultMessage = "Computer wins!";
  }
  gameResultMessageElement.textContent =
    gameResultMessage + " Refresh to play again!";
}
