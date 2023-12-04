'use strict';

// const { get } = require('lodash');

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
const clock = document.querySelector('#time');
function addCurrentTime() {
  const now = new Date();
  const time = now.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  clock.textContent = time;
  console.log(time);
}

setInterval(addCurrentTime, 1000);

window.addEventListener('load', addCurrentTime);
