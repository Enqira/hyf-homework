"use strict";

// counter for L
let totalL = 0;
const elL = document.querySelector("#countL");
const pressedL = (e) => {
  if (e.keyCode == 76) {
    totalL++;
    elL.innerHTML = totalL;
  }
};
function counterL() {
  document.addEventListener("keydown", pressedL);
}
// counter for S

let totalS = 0;
const elS = document.querySelector("#countS");
const pressedS = (e) => {
  if (e.keyCode == 83) {
    totalS++;
    elS.innerHTML = totalS;
  }
};
function counterS() {
  document.addEventListener("keydown", pressedS);
}

// setting the time of the game
const startButton = document
  .getElementById("timeButton")
  .addEventListener("click", startGame);
function startGame() {
  const timeSet = document.getElementById("playTimeSet").value;
  const label = document.getElementById("label");
  if (timeSet < 1) {
    label.innerHTML = "Please set the time!";
    return;
  } else {
    label.innerHTML = "Game started!";
  }
  counterL();
  counterS();
  totalS = 0;
  totalL = 0;
  setTimeout(() => {
    console.log("game finished");
    if (totalS > totalL) {
      label.innerHTML = "S is the WINNER!";
    } else if (totalL > totalS) {
      label.innerHTML = "L is the WINNER!";
    } else {
      label.innerHTML = "TIE!";
    }
    document.removeEventListener("keydown", pressedL);
    document.removeEventListener("keydown", pressedS);
  }, timeSet * 1000);
}
