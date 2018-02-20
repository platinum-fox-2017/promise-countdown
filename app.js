const { timer } = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10;
  // Your code here...
  timer(seconds).then(function(interval){
    clearInterval(interval)
  }).catch(function(err){
    console.log(err)
  })
};

main();
