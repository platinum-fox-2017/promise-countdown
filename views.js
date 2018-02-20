const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = (minute, second) => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.blue(figlet.textSync(minute + ' : ' + second)))

  // Your code here...
};

module.exports = { displayCountdown };
