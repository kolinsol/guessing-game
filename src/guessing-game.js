class GuessingGame {
    constructor() {
      this.min = null;
      this.max = null;
      this.currentGuess = null;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      this.currentGuess = Math.ceil((this.max - this.min) / 2) + this.min;
      return this.currentGuess;
    }

    lower() {
      this.max = this.currentGuess;
    }

    greater() {
      this.min = this.currentGuess;
    }
}

let a = new GuessingGame();
let n = 12345;
let result = null;
a.setRange(0, 200000);
while(result !== n) {
  result = a.guess();
  console.log(result);
  if (result > n) a.lower();
  if (result < n) a.greater();
}

module.exports = GuessingGame;
