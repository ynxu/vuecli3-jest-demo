function timerGame(callback) {
  console.log("ready");
  setTimeout(() => {
    console.log("timer exec");
    callback && callback();
  }, 1000);
}

function infiniteTimerGame(callback) {
  console.log("infinite timer ready");
  setTimeout(() => {
    console.log("infinite -outer  timer exec");
    callback && callback();
    setTimeout(() => {
      infiniteTimerGame(callback);
    }, 200);
  }, 100);

}

module.exports = {timerGame, infiniteTimerGame};