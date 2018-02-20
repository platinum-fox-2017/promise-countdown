const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  console.log(chalk.yellowBright(figlet.textSync(seconds, {
    font: '3D Diagonal',
    horizontalLayout: 'full',
    verticalLayout: 'full'
})))
};

module.exports = { displayCountdown };
