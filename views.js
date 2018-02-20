const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");


function toMinutes(seconds){
  if(seconds == false){
    return 'TIME OUT'
  }
  let detik = seconds % 60;
  let minutes = (seconds-detik)/60;
  
  if(detik.toString().length === 1){
    detik = '0'+ detik
  }
  if(minutes.toString().length === 1){
    minutes = '0'+ minutes
  }
  return `${minutes} : ${detik}`
}

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.cyan(figlet.textSync(toMinutes(seconds))))
};

module.exports = { displayCountdown };
