const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  let menit = String(Math.floor(seconds/60));
  let detik = String(seconds%60);
  if(menit.length===1){
    var formatMenit = `0${menit}`;
  } else {
    formatMenit = `${menit}`;
  }
  if(detik.length===1){
    var formatDetik = `0${detik}`;
  } else {
    formatDetik = `${detik}`;
  }
  console.log(chalk.cyan(figlet.textSync(`Countdown App`)));
  if(seconds>=0){
    console.log(chalk.cyan(figlet.textSync(`                        ${formatMenit}:${formatDetik}`)));
  } else {
    console.log(chalk.cyan(figlet.textSync(`                    Selesai!`)));
  }
};

module.exports = { displayCountdown };
