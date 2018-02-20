const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    //displayCountdown(seconds - 1);
    let countDown = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      let minute = Math.floor(secondsLeft/60)
      let second = secondsLeft % 60
      minute = minute < 10 ? '0' + minute : minute
      second = second < 10 ? '0' + second : second
      let jam = minute +' : '+second
      if (secondsLeft < 0) {
        clearInterval(countDown);
        resolve(':D');
      } else {
        displayCountdown(jam);
      }
    }, 1000);
  });

module.exports = {
  timer
};
