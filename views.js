const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.green(figlet.textSync("Countdown App")));
  // Your code here...
  var mind = seconds % (60 * 60);
  var min = Math.floor(mind / 60);
  if(min<10) min = '0'+min

  var secd = mind % 60;
  var sec = Math.ceil(secd);
  if(sec<10) sec = '0'+sec
  console.log(chalk.cyan(figlet.textSync(`${min} : ${sec}`)));
};

module.exports = { displayCountdown };
