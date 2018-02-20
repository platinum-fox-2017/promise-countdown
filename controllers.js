const { displayCountdown } = require("./views");

const timer = seconds => {
  let promise = new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    displayCountdown(seconds - 1);
    let interval = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval(interval);
        resolve('Waktu Habisss!!');
      } else {
        displayCountdown(secondsLeft);
      }
    }, 1000);
  });
  return promise;
}

module.exports = {
  timer
};
