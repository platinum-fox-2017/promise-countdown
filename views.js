const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.cyan(figlet.textSync(format(seconds))));
};

const format = seconds => {
	let result = '';

	if (Math.floor(Number(seconds) / 60 < 10)) result += '0' + (Math.floor(Number(seconds)/60)).toString();
	else result += (Math.floor(Number(seconds)/60)).toString();

	result += ':';

	if (Number(seconds%60) < 10) result += '0' + (Number(seconds%60)).toString();
	else result += (Number(seconds%60)).toString().toString();

	return result;
}

module.exports = { displayCountdown };
