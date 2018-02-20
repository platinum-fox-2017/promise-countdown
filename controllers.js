const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    displayCountdown(second_to_string(seconds - 1));
    setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval();
        resolve();
      } else {
        displayCountdown(second_to_string(secondsLeft));
      }
    }, 1000);
  });



  function second_to_string(seconds) {
      let minuteStr = Math.floor(seconds / 60);
      let secondStr = seconds % 60;
      return ((minuteStr < 10) ? ((minuteStr = 0)?'00':'0'+minuteStr) : minuteStr) + " : " + ((secondStr<10)?'0'+secondStr:secondStr) ;
  }

module.exports = {
  timer
};
