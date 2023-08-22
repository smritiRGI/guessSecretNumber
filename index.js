"use strict";

let highScore = window.localStorage.getItem("highscore") || 0;
let score = 20;
let randomNumber = Math.floor(Math.random() * 20) + 1;
// console.log(randomNumber)
const startAgain = function () {
  document.querySelector(".check").disabled = false;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".input-number").value = "";
  document.querySelector("#message").textContent = "Start Guessing...";
  document.querySelector("#score").textContent = "Score: 20";
  document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.703)";
  score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
};

const check = function () {
  const userInput = document.querySelector(".input-number").value;
  let message = "";
  if (randomNumber == Number(userInput)) {
    message = "Correct Number";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = userInput;
    if (highScore < score) {
      highScore = score;
      window.localStorage.setItem("highscore", highScore);
    }
    document.querySelector(
      "#high-score"
    ).textContent = `Highscore: ${highScore}`;
    document.querySelector(".check").disabled = true;
  } else {
    if (userInput == "" || Number(userInput) < 1 || Number(userInput) > 20)
      message = "Enter a number between 1 & 20";
    else if (randomNumber < Number(userInput)) message = "Too High";
    else message = "Too Low";
    if (score > 1) score -= 1;
    else {
      score = 0;
      message = "You lost!";
      document.querySelector(".check").disabled = true;
    }
  }
  document.querySelector("#message").textContent = message;
  document.querySelector("#score").textContent = `Score: ${score}`;
};

document.querySelector(".start-again").addEventListener("click", startAgain);
document.querySelector(".check").addEventListener("click", check);

document.querySelector("#high-score").innerHTML = `Highscore: ${highScore}`;
