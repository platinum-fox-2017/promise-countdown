const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  let menit = seconds / 60;
  menit = Math.floor(menit);
  if (menit < 1) {
    menit = "00";
  } else if (String(menit).length == 1){
    menit = `0${menit}`;
  }
  let sisaDetik = seconds % 60;
  if (String(sisaDetik).length === 1) {
    sisaDetik = `0${sisaDetik}`;
  }
  let waktu = `${menit}:${sisaDetik}`;
  console.log(chalk.cyan(figlet.textSync(waktu)));
};

module.exports = { displayCountdown };
