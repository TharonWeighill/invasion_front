class Session {
    getPlayer() {
        const body = document.getElementById('app');
        body.innerHTML = `
        <form id='player-form'>
        <h1> Alien Invasion!!! </h1>
        <label>Enter Name</label>
        <input id='player-name'/>
        <button type='submit'>START GAME</button
        </form> 
        `;
        const form = document.getElementById('player-form');
        form.addEventListener('submit', this.handleFromSubmit);
    };
    handleFromSubmit(e) {
        e.preventDefault();
        const input = document.getElementById('player-name');
        return fetch("http://localhost:3000/players", {
            method: "POST",
            body: JSON.stringify({
                name: input.value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => resp.json())
            .then((player) => console.log(player))
            .catch((error) => console.error(error));
    }
    initGame(player) {
        const body = document.getElementById('app');
        body.innerHTML = "<canvas id='game'></canvas>";
        const game = new Game(player);
        game.start;
    }
}