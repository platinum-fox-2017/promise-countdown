const { displayCountdown } = require("./views");

const timer = seconds =>{
  return new Promise((resolve, reject) => {
    let now = Date.now();
    let then = now + seconds * 1000;
    let count =0;
    // displayCountdown(seconds-1);
    let countdown = setInterval(() => {
      let secondsLeft;
      if(count === 0 || count ===1 ){
        secondsLeft = Math.floor((then - Date.now()) / 1000)+2;
      } else {
        secondsLeft = Math.floor((then - Date.now()) / 1000);
      }
      if(Array.from(String(secondsLeft)).length === 1){
        console.log(secondsLeft);
        secondsLeft =`00:0${secondsLeft}`;
        displayCountdown(secondsLeft);
        if (secondsLeft == "00:00") {
          setTimeout(function(){
          resolve(displayCountdown('B O O M'));
          clearInterval(countdown);
          },1000);
        } 
      } else{
        console.log(secondsLeft+'111')
        let minutes = Math.floor(secondsLeft / 60);
        detik = secondsLeft - minutes * 60;
        if(Array.from(String(minutes)).length === 1)minutes =`0${minutes}`;
        if(Array.from(String(detik)).length === 1) detik = `0${detik}`;
        displayCountdown(`${minutes} : ${detik}`);
      }
    }, 1000);
  });
}
   

module.exports = {
  timer
};
