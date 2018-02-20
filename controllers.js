const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {

    const now = Date.now();
    const then = now + seconds * 1000;
   
    let menit = Math.floor(seconds / 60)
    let detik = Math.floor(seconds % 60)

    if (menit < 10) {
      if (detik <= 10) {
        data = '0' + menit + ':0' + (detik-1)
      } else {
          data = '0' + menit + ':' + (detik - 1)
      }
    } else {
      data = menit + '' + detik
    }

    displayCountdown(data);

    let countdown = setInterval(() => {
    
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      
      let menit = Math.floor(secondsLeft / 60)
      let detik = Math.floor(secondsLeft % 60)
      
      if (menit < 10) {
        data = '0' + menit + ':' + detik
        if (detik < 10) {
          data = '0' + menit + ':0' + detik
        }
      } else {
        data = menit + ':' + detik
      }
      if (secondsLeft === 0) {
        displayCountdown('00:00');
      }
      
      if (secondsLeft === 0) {
        clearInterval(countdown);
        resolve(`Done!`);
      } else {
        displayCountdown(data);
      }
    }, 1000);
  });

module.exports = {
  timer
};