const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    // displayCountdown(seconds - 1);
    let counter = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval(counter);
        resolve();
      }
      else {
        let minute = secondsLeft % 60
        let hour = Math.floor(secondsLeft / 60)
        if (hour <= 9 && minute <= 9) {
          displayCountdown('0'+hour + ':' +'0'+ minute)
          minute -= 1
          if (minute < 0 && hour == 0) {
            clearInterval(counter)
            displayCountdown('B O O M !')
          }
          else if (minute < 0) {
            hour -= 1
            minute = 59
          }
        }
        else if (minute > 9){
          displayCountdown('0' +hour + ':' + minute)
          minute -= 1
          if (minute < 0 && hour == 0) {
            clearInterval(counter)
            displayCountdown('B O O M !')
          }
          else if (minute < 0) {
            hour -= 1
            minute = 59
          }
        }
      }
    }, 1000);
  });

module.exports = {
  timer
};
