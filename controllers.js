const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    displayCountdown(convertTime(seconds - 1));
    let handle =  setInterval(() => {
                    const secondsLeft = Math.floor((then - Date.now()) / 1000);
                    if (secondsLeft < 0) {
                      clearInterval(handle);
                      resolve();
                    } else {
                      displayCountdown(convertTime(secondsLeft));
                    }
                  }, 1000);
  });

let convertTime = seconds => {
  let convertResult = '';
  let bagi = Math.floor(seconds / 60);
  if(bagi >= 10) {
    convertResult = convertResult + bagi + ":"; 
    let sisa = seconds - (60 * bagi);
    if(sisa >= 10) {
      convertResult = convertResult + sisa;
    } else if (sisa >= 1) {
      convertResult = convertResult + "0" + sisa;
    } else {  
      convertResult = convertResult + "00";
    }
  } else if(bagi >= 1) {
    convertResult = convertResult + "0" + bagi + ":"; 
    let sisa = seconds - (60 * bagi);
    if(sisa >= 10) {
      convertResult = convertResult + sisa;
    } else if (sisa >= 1) {
      convertResult = convertResult + "0" + sisa;
    } else {  
      convertResult = convertResult + "00";
    }
  } else {
    convertResult = convertResult + "00:";
    if(seconds >= 10) {
      convertResult = convertResult + seconds;
    } else {
      convertResult = convertResult + "0" + seconds;
    }
  }
  return convertResult;
}


module.exports = {
  timer
};