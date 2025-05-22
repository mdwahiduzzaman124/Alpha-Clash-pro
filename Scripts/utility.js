function hideElementById(elementId) {
  document.getElementById(elementId).classList.add("hidden");
}
function showElementById(elementId) {
  document.getElementById(elementId).classList.remove("hidden");
}

// Get or create a random alphabet
function getRandomAlphabets() {
  const alphabetsString = "abcdefghijklmnopqrstuvwxyz";
  const alphabetsArray = alphabetsString.split("");

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const randomAlphabet = alphabetsArray[index];
  return randomAlphabet;
}

// set the alphabet
function currentAlphabet(elementId, alphabet) {
  document.getElementById(elementId).innerText = alphabet;
}

// add and remove background color
function setBackgroundColor(elementId) {
  document.getElementById(elementId).classList.add("bg-[#FFA500]");
}

function removeBackgroundColor(elementId) {
  document.getElementById(elementId).classList.remove("bg-[#FFA500]");
}

// Get the value and convert it into numeric
function getTheValueStringToNumeric(eventID) {
  const element = document.getElementById(eventID);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

// setAny value to the element you want
function setTheValueToElement(elementID, value) {
  const element = document.getElementById(elementID);
  element.innerText = value;
}

// get any element by ID
function getElementTextById(elementID) {
  const element = document.getElementById(elementID);
  const text = element.innerText;
  return text;
}
