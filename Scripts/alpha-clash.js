function handleKeyboardKeyUpEvent(event) {
  // pressed key
  const playerPressed = event.key;
  // what should the played need to pressed
  const currentAlphabetElement = document.getElementById("currentAlphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  // check the key what i pressed and what should i need to press
  if (playerPressed === expectedAlphabet) {
    // get the current score
    const currentScore = getTheValueStringToNumeric("current-score");
    // Improve the score of the current score
    const updatedScore = currentScore + 1;
    // set the new score to the score section
    setTheValueToElement("current-score", updatedScore);
    // Replay the game and remove the pressed key background color
    removeBackgroundColor(expectedAlphabet);
    continueGame();
  } else {
    //Get the current life
    const currentLife = getTheValueStringToNumeric("current-life");
    // Decrease the life of the current life
    const updatedLife = currentLife - 1;
    // set the new Life
    setTheValueToElement("current-life", updatedLife);
    if (updatedLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

// Capture keyboard key press
function continueGame() {
  const alphabet = getRandomAlphabets();
  currentAlphabet("currentAlphabet", alphabet);
  setBackgroundColor(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  hideElementById("final-score");

  setTheValueToElement("current-life", 3);
  setTheValueToElement("current-score", 0);
  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  // Update final score
  const score = getElementTextById("current-score");
  setTheValueToElement("game-score", score);
  // remove the last selected alphabet color
  const lastAlphabet = getElementTextById("currentAlphabet");
  removeBackgroundColor(lastAlphabet);
}

// document.getElementById("play-again").addEventListener("click", playAgain);
// function playAgain() {
//   hideElementById("final-score");
//   showElementById("play-ground");
//   continueGame();
//   setTheValueToElement("current-life", 3);
//   setTheValueToElement("current-score", 0);
//   const currentAlphabet = getElementTextById("currentAlphabet");
//   console.log(currentAlphabet);
// }
