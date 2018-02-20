const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = (minute, second) => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  console.log(chalk.green(figlet.textSync(minute +' : '+second)));
};

module.exports = { displayCountdown };
