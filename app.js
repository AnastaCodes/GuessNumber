"use strict";
const tips = document.querySelector("#tips");
const start = document.querySelector("#start");
const counts = document.querySelector("#counts");
const winMessage = document.querySelector(".win-message");
const inputField = document.querySelector("#input");
const tryAgainMessage = document.querySelector("#try-again-message");
let hiddenNumber = (Math.random() * 100).toFixed(0);
let gameCount = 0;
let tryCount = 0;
let inputValue = "";

document.addEventListener("DOMContentLoaded", () => {
  inputField.value = "";
});

inputField.oninput = function () {
  inputValue = inputField.value;
};

start.addEventListener("click", () => {
  tryCount++;
  parseInt(inputValue);

  if ((inputValue.length > 2) & (inputValue !== 100)) {
    tips.innerHTML =
      '<h2 style="color:#e62d2d;">Only numbers from 1 to 100 are accepted</h2>';
    inputField.value = "";
  } else if (inputValue.length === 0) {
    tips.innerHTML = '<h2 style="color:#e62d2d;">Enter a valid number</h2>';
  } else {
    if (inputValue === hiddenNumber) {
      guessedRight();
    } else if (inputValue > hiddenNumber) {
      if (inputValue - hiddenNumber > 10) {
        tips.innerHTML =
          "Tip: The entered number is much greater than the guessed number";
      } else {
        tips.innerHTML =
          "Tip: The entered number is greater than the guessed number";
      }
    } else if (inputValue < hiddenNumber) {
      if (hiddenNumber - inputValue > 10) {
        tips.innerHTML =
          "Tip: The entered number is much less than the guessed number";
      } else {
        tips.innerHTML =
          "Tip: The entered number is less than the guessed number";
      }
    } else {
      alert("Unknown error");
    }
  }
});

function beginn() {}

function guessedRight() {
  gameCount++;
  counts.innerHTML = gameCount;
  winMessage.classList.add("block");
  winMessage.firstElementChild.innerText = tryCount;
  inputField.style.background = "#00b3573d";
  tryAgainMessage.classList.add("block"); 
  tryAgainMessage.disabled = false;
  tips.style.opacity = "0";
  start.disabled = true;
  start.innerHTML = "Guessed";
}

tryAgainMessage.addEventListener("click", () => {
  tryCount = 0;
  hiddenNumber = (Math.random() * 100).toFixed(0);
  inputField.value = "";
  inputField.style.background = "#08687e3d";
  winMessage.classList.remove("block");
  tryAgainMessage.classList.remove("block");
  tryAgainMessage.disabled = true;
  tips.style.opacity = "1";
  tips.innerHTML = "-";
  start.disabled = false;
  start.innerHTML = "Guess";
});
