const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.green(figlet.textSync(secondsToString(seconds), {font: 'Ghost',})))
};


const secondsToString = seconds => {
  let secondsSTR = '';
  let min = Math.floor(seconds/60);
  let sec = seconds%60;
  secondsSTR = (min<10 ? '0'+min : min) +":"+(sec<10 ? '0'+sec : sec);
  return secondsSTR
}

module.exports = { displayCountdown };
