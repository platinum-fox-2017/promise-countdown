const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;
    let count = setInterval(() => {
      var secondsLeft = Math.ceil(((then - Date.now()) / 1000)+1);
      let minutes = Math.floor(secondsLeft/60)
      let detik = secondsLeft%60
      if (secondsLeft < 0) {
        clearInterval(count);
        displayCountdown('BOOM')
        resolve('SIYAAAP');
      } else if(minutes < 10 && detik <10){
        displayCountdown('0'+minutes+':0'+detik)
        secondsLeft -= 1
      } else if (minutes < 10){
        displayCountdown('0'+minutes+':'+detik)
        secondsLeft -= 1
      } else if (detik <10){
        displayCountdown(minutes+':0'+detik)
        secondsLeft -= 1
      } else {
        displayCountdown(minutes+':'+detik)
        secondsLeft -= 1
      }
    }, 1000);
  });

module.exports = {
  timer
};
