"use strict";

const tips = document.querySelector("#tips");
const startButton = document.querySelector("#start");
const counts = document.querySelector("#counts");
const winMessage = document.querySelector(".win-message");
const inputField = document.querySelector("#input");
const tryAgainButton = document.querySelector("#try-again-message");

let hiddenNumber = (Math.random() * 100).toFixed(0);
let gameCount = 0;
let tryCount = 0;
let inputValue = "";

// Initialize the input field when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  inputField.value = "";
});

// Update the input value when the user types
inputField.oninput = function () {
  inputValue = inputField.value;
};

// Handle Enter key press to submit the guess
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    compareNumbers();
  }
});

// Handle click on the start button to submit the guess
startButton.addEventListener("click", () => {
  compareNumbers();
});

// Function to handle a correct guess
function guessedRight() {
  gameCount++;
  counts.innerHTML = gameCount;
  winMessage.classList.add("block");
  winMessage.firstElementChild.innerText = tryCount;
  inputField.style.background = "#00b3573d";
  tryAgainButton.classList.add("block");
  tryAgainButton.disabled = false;
  tips.style.opacity = "0";
  startButton.disabled = true;
  startButton.innerHTML = "Guessed";
}

// Handle click on the try again button to reset the game
tryAgainButton.addEventListener("click", () => {
  resetGame();
});

// Function to reset the game
function resetGame() {
  tryCount = 0;
  hiddenNumber = (Math.random() * 100).toFixed(0);
  inputField.value = "";
  inputField.style.background = "#08687e3d";
  winMessage.classList.remove("block");
  tryAgainButton.classList.remove("block");
  tryAgainButton.disabled = true;
  tips.style.opacity = "1";
  tips.innerHTML = "-";
  startButton.disabled = false;
  startButton.innerHTML = "Guess";
}

// Function to compare the guessed number with the hidden number
function compareNumbers() {
  tryCount++;
  const guessedNumber = parseInt(inputValue, 10);

  if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
    tips.innerHTML = '<h2 style="color:#e62d2d;">Only numbers from 1 to 100 are accepted</h2>';
    inputField.value = "";
  } else {
    if (guessedNumber == hiddenNumber) {
      guessedRight();
    } else if (guessedNumber > hiddenNumber) {
      tips.innerHTML = guessedNumber - hiddenNumber > 10 
        ? "Tip: The entered number is much greater" 
        : "Tip: The entered number is greater";
    } else {
      tips.innerHTML = hiddenNumber - guessedNumber > 10 
        ? "Tip: The entered number is much less" 
        : "Tip: The entered number is less";
    }
  }
}
