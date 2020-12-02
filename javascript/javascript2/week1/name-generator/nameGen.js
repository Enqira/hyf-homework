"use strict";
const spiritAnimals = [
  "The black Cat",
  "The Flying Dragon",
  "The strong Lion",
  "The long Snake",
  "the fearless Crocodile",
  "The jumping Monkey",
  "The sleepy Bird",
  "The Smart Eagle",
  "The African Tiger",
  "The black puma",
];

document.getElementById("button").addEventListener("click", btnClicked);
document.getElementById("ser-button").addEventListener("click", secBtnClicked);

function btnClicked() {
  let ranNum = GetRanNum();
  const userInput = document.getElementById("user-input");
  const fText = document.getElementById("displayed-text");
  const firstBtn = document.getElementById("button");
  const secBtn = document.getElementById("sec-button");
  const spirit = userInput.value + " - " + spiritAnimals[ranNum];

  if (userInput.value == "") {
    fText.innerHTML = "Please write your name!";
  } else {
    fText.style.display = "block";
    fText.innerHTML = spirit;
    userInput.value = "";
    userInput.style.display = "none";
    firstBtn.style.display = "none";
    secBtn.style.display = "block";
  }
}

function secBtnClicked() {
  document.getElementById("user-input").style.display = "block";
  document.getElementById("button").style.display = "block";
  document.getElementById("sec-button").style.display = "none";
  document.getElementById("displayed-text").style.display = "none";
}

function GetRanNum() {
  return Math.floor(Math.random() * 10);
}
