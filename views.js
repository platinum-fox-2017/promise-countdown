const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App",{
    font : 'Banner'
  })));
  // Your code here...
  console.log(chalk.redBright(figlet.textSync(seconds,{
    font : 'Acrobatic'
  })))
};

module.exports = { displayCountdown };
