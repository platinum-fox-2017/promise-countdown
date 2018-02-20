const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    // displayCountdown(seconds - 1);
    let time = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      let menit = Math.floor(secondsLeft / 60)
      let detik = secondsLeft % 60
      if(menit < 10){
        menit = '0' + menit
      }
      if(detik < 10){
        detik = '0' + detik
      }
      let display = menit + ' : ' + detik
      if (secondsLeft < 0) {
        clearInterval(time);
        resolve()
      } else {
        displayCountdown(display);
        
      }
    }, 1000);
  });

module.exports = {
  timer
};
