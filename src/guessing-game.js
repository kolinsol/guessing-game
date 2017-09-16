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

module.exports = GuessingGame;
