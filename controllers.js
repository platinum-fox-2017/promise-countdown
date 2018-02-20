const { displayCountdown } = require("./views");

const convertTime = seconds => {
  let minutes = Math.floor(seconds / 60)
  let secs = seconds % 60
  let time;
  if (minutes < 10 && secs < 10) {
    time = minutes = '0' + minutes + ' : ' + '0' + secs
  } else if (minutes < 10) {
    time = '0' + minutes + ' : ' + secs
  } else if (secs < 10) {
    time = minutes + ' : ' + '0' + seconds
  }
  displayCountdown(time);
}

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    convertTime(seconds)
    
    let stopper = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval(stopper);
        resolve();
      } else {
        convertTime(secondsLeft)
      }
    }, 1000);
  });  

module.exports = {
  timer
};
