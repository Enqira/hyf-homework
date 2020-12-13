"use strict";
// 1
const domLoaded = () =>
  setTimeout(() => {
    console.log("Called after 2.5 seconds");
  }, 2500);
document.addEventListener("DOMContentLoaded", domLoaded);

// 2
function delayedLog(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}
delayedLog(3, "loged after 3 seconds");

// 3
document
  .getElementById("btn")
  .addEventListener("click", () => delayedLog(5, "Loged after 5 seconds"));

// 4
const earthLogger = () => console.log("Earth");
const saturnLogger = () => console.log("Saturn");

function planetLogFunction(funcToCall) {
  funcToCall();
}
planetLogFunction(earthLogger);

// 5 coordinates
function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(latitude, longitude);
}
function error() {
  console.log("Cannot get location");
}

function logLocation() {
  navigator.geolocation.getCurrentPosition(success, error);
}

document.getElementById("location-btn").addEventListener("click", logLocation);

// 7 delay + callback
function logSomething() {
  console.log("something has been logged");
}

function runAfterDelay(delay, callback) {
  setTimeout(() => callback(), delay * 1000);
}
runAfterDelay(10, function () {
  console.log("should be logged after 5 seconds");
});

// 8 double click
window.onclick = (event) => {
  if (event.detail === 1) {
    // it was a single click
  } else if (event.detail === 2) {
    console.log("double click!");
  }
};

// 9 jokeCreator
const logFunnyJoke = () =>
  console.log("Where did the computer go dancing? The disc-o!");

const logBadJoke = () =>
  console.log("What do you call a hippie's wife? A Mississippi!");

function jokeCreator(shouldTellFunnyJoke) {
  shouldTellFunnyJoke === true ? logFunnyJoke() : logBadJoke();
}
jokeCreator(true);
