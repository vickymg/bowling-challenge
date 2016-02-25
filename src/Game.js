function Game() {
  this.startNewFrame();
  this.frames = [];
  this.totalScore = 0;
}

Game.prototype.bowl = function(){
  if (this.isGameOver()) {
    return 'Game over!'
  }
  else {
    this.currentFrame.calculateScore(this.getFrameScore());
    // this.checkStrike(this.getFrameScore());
    this.checkFrameOver();
  }
};
//
// Game.prototype.checkStrike = function(ballScore){
//   if (ballScore === 10){
//     this.addFrame(this.currentFrame);
//     this.startNewFrame();
//   }
// };

Game.prototype.checkFrameOver = function(){
  if (this.currentFrame.score.length >= 2){
    this.totalScore += (this.getFrameScore());
    this.addFrame(this.currentFrame);
    this.startNewFrame();
  }
    else if (this.currentFrame.score[0] === 10){
      this.totalScore += (this.getFrameScore());
      this.addFrame(this.currentFrame);
      this.startNewFrame();
    }
};

Game.prototype.startNewFrame = function(){
  this.currentFrame = new Frame();
};

Game.prototype.addFrame = function(frame){
  this.frames.push(frame);
};

Game.prototype.getFrameScore = function(){
  var sum = this.currentFrame.score.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  return sum
};

Game.prototype.isGameOver = function(){
  if (this.frames.length === 10) {
    return true
  }
};
