const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    displayCountdown(seconds - 1);
    let time = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval(time);
        resolve(displayCountdown('BOOOOMMM'));
      } else {
        let minute = Math.floor(secondsLeft/60)
        let newSecond = secondsLeft % 60
        if(minute < 10) {
          resolve(displayCountdown('0' + minute + ':' + '0' + newSecond))
        } else if(newSecond < 10) {
          resolve()
        }
      }
    }, 1000);
  });

module.exports = {
  timer
};
