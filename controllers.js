const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;
    let count = seconds 
    // displayCountdown(seconds - 1);
    let countdown = setInterval(() => {
      let secondsLeft = Math.floor((then - Date.now()) / 1000)+2;
      let minute = Math.floor(secondsLeft/60)
      let second = secondsLeft%60
      if(second < 10 && minute === 0){
        secondsLeft = ` 00 : 0${second} `
      } else if (second >= 10 && minute == 0){
        secondsLeft = `00 : ${second}`
      }else if (second < 10  && minute < 10){
        secondsLeft = `0${minute} : 0${second}`
      }else if(second >= 10  && minute < 10){
        secondsLeft =`0${minute} : ${second}`
      }else{
        secondsLeft = `${minute} : ${second}`
      }
      if (count === -1) {
        clearInterval(countdown);
        resolve();
      } else {
        count--
        console.log(count)
        displayCountdown(secondsLeft);
      }
    }, 1000);
  });

module.exports = {
  timer
};
