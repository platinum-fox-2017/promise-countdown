const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    displayCountdown(display(seconds - 1));
    var time = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval(time);
        resolve();
      } else {
        displayCountdown(display(secondsLeft));
      }
    }, 1000);
  });

let display = seconds => {
  let min = Math.floor(seconds/60)
  let sec = Math.floor(seconds % 60)
  
  let printMin = (min < 10) ? `0`+ min: min
  let printSec = (sec < 10) ? `0`+ sec: sec
  
  return `${printMin}:${printSec}`
}

module.exports = {
  timer
};
