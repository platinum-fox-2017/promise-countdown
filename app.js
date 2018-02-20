const { timer } = require("./controllers");
const figlet = require('figlet')

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10;
  timer(seconds).then(()=>{console.log(figlet.textSync('finished'))}).catch();
};

main();
