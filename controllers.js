const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;
    

    displayCountdown(seconds - 1);
    let interval = setInterval(() => {
      var secondsLeft = Math.floor((then - Date.now()) / 1000);
      const minute = Math.floor(secondsLeft / 60)
      if (secondsLeft < 0) {
        resolve(interval);
      } else {
        secondsLeft = Math.floor(secondsLeft % 60)
        if(secondsLeft < 10){
          secondsLeft = '0' + secondsLeft
        }
        displayCountdown(minute, secondsLeft);
      }
    }, 1000);
  });

module.exports = {
  timer
};
