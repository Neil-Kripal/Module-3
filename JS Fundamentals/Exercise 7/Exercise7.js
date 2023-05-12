const basketballGame = {
    score: 0,
    foulCount: 0,
    freeThrow() {
      this.score++;
      return this;
    },
    basket() {
      this.score += 2;
      return this;
    },
    threePointer() {
      this.score += 3;
      return this;
    },
    halfTime() {
      console.log(`Halftime score is ${this.score}, with ${this.foulCount} fouls.`);
      return this;
    },
    fullTime() {
      console.log(`Final score is ${this.score}, with ${this.foulCount} fouls.`);
      return this;
    },
    foul() {
      this.foulCount++;
      return this;
    }
  }

  basketballGame.threePointer().freeThrow().freeThrow().basket().threePointer().halfTime().threePointer().basket().foul().foul().fullTime();
