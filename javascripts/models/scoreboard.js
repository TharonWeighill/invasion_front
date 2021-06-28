class Scoreboard {
    constructor(scores) {
        this.scores = scores;
    }

    render(score) {
        // hide game
        const canvas = document.getElementById("game");
        canvas.classList.add("hidden");
        // show the score board
        const scoreboard = document.getElementById("scoreboard");
        scoreboard.classList.remove("hidden");
        // show player score
        const playerScore = document.getElementById("player-score");
        playerScore.innerText = `Your Score: ${score}`;
        // show top scores
        const topScores = document.getElementById("top-scores");
        this.scores.forEach((score) => {
            const playerName = score.player.name;
            const li = document.createElement('li');
            li.innerText = `${playerName ? playerName : 'Unknown Player'} - ${score.points}`;
            topScores.appendChild(li);
        });
    }
}