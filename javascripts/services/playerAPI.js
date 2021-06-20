class PlayerApi {
    static fetchPlayers() {
        fetch('http://localhost:3000/players')
            .then((resp) => resp.json())
            .then((player) => console.log(player))
            .catch((error) => console.error(error));
    }
}