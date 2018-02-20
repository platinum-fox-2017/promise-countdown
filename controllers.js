const { displayCountdown } = require("./views");

const timer = seconds =>{
  return new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    displayCountdown(seconds - 1);
    setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      // console.log(secondsLeft)
      if (secondsLeft < 0) {
        clearInterval();
        resolve('😁');
      } else {
        displayCountdown(secondsLeft);
      }
    }, 1000);
  });
}
   
module.exports = {
  timer
};
