const { timer } = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10;
  timer(seconds)
    .then(function(interval){
      clearInterval(interval)
    })
    .catch(function(){})

};

main();
