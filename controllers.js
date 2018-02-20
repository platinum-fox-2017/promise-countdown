const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    // displayCountDown(seconds - 1)
    let interval = setInterval(() => {
      let secondsLeft = Math.floor((then - Date.now()) / 1000);

      if (secondsLeft < 1) {
        clearInterval(interval);
        resolve('selesai')
      }

      let minute = Math.floor(secondsLeft / 60)
      let second = Math.floor(secondsLeft % 60)
      if (minute < 10) {
        minute = '0' + minute
      }
      if (second < 10) {
        second = '0' + second
      }
      displayCountdown(minute, second)
      second -= 1
    }, 1000);
  });

module.exports = {
  timer
};
