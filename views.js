const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.bgWhite.black(figlet.textSync("Countdown App",{
    font: 'Acrobatic',
  })));
  // Your code here...
  console.log(chalk.bgWhite.red(figlet.textSync(seconds)))
};

module.exports = { displayCountdown };
