// console.clear();

let timerInterval;
let prevTimer = 0;
let currentTimer;

function runTimer(e, start = getCurrentTime()) {
  timerInterval = setInterval(() => {
    currentTimer = round( convertMstoS( getPassedSeconds(getCurrentTime(), start)) ) + prevTimer;
    showTime( currentTimer );
  }, 1000);
}


function getCurrentTime() {
  return Date.now();
}

function convertMstoS (ms) {
  return ms / 1000;
}

function getPassedSeconds(currentTime, start) {
  return currentTime - start;
}

function round(n) {
  return Math.round(n);
}





function pauseTimer() {
  prevTimer = currentTimer;
  clearTimer();
}


function resetTimer() {
  clearTimer();
  prevTimer = 0;
  currentTimer = 0;
  showTime(currentTimer);
}




function clearTimer() {
  clearInterval(timerInterval);
}



function showTime(sec) {
  display.textContent = sec;
}

const startButton = document.querySelector('.start-button');
const resetButton = document.querySelector('.reset-button');
const pauseButton = document.querySelector('.pause-button');
const display = document.querySelector('.display');



function addEventListeners() {
  startButton.addEventListener('click', runTimer);
  pauseButton.addEventListener('click', pauseTimer);
  resetButton.addEventListener('click', resetTimer);

}

addEventListeners();





/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = timer;  // allows CommonJS/Node.js require()
}
