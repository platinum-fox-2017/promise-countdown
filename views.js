const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
    clear();
    console.log(chalk.cyan(figlet.textSync("Countdown App")));
    // Your code here...
    if (parseInt(seconds.slice(5, 7)) < 10)
        console.log(chalk.red(figlet.textSync(seconds)));
    else
        console.log(chalk.yellow(figlet.textSync(seconds)));
};

module.exports = {
    displayCountdown
};
