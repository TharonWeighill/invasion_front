document.addEventListener("submit", (e) => {
    PlayerApi.handleSubmit(e)
        .then((player) => {
            const game = new Game(player);
            game.init();
        });
});


