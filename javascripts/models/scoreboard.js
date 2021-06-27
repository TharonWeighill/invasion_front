class Scoreboard {

    constructor({ player, score }) {
        this.player = player;
        this.score = score;
        Scoreboard.all.push(this);
    }
}