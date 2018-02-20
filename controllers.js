const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    displayCountdown(seconds - 1);
    let countdown = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        reject()
        displayCountdown(false);
        clearInterval(countdown);
      } else {
        displayCountdown(secondsLeft);
        resolve()
      }
    }, 1000);
  });

module.exports = {
  timer
};
