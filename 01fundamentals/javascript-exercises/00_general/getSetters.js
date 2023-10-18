const score = {
    you: 0,
    machine: 0,
    draw: 0,
    get youScore() {
      return this.you;
    },
    set youScore(vYS) {
        this.you += vYS;
      },
  };
  console.log(score.youScore, typeof score.youScore); // "test"
  score.youScore = 1;
  console.log(score.youScore);