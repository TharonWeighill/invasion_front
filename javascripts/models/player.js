class Player {
    static all = [];

    constructor({ name }) {
        this.name = name;
        Player.all.push(this);
    }

    static findByName(name) {
        return this.all.find(function (player) { player.name === name; });
    }
}

// initGame(player) {
//     const body = document.getElementById('app');
//     body.innerHTML = "<canvas id='game'></canvas>";
//     const game = new Game(player);
//     game.start;
// }