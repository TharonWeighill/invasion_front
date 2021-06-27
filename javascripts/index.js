document.addEventListener("submit", (e) => {
    PlayerApi.handleSubmit(e)
        .then((player) => {
            const game = new Game(player);
            game.init();
        });
});


// lose POST /scores
// GET /scores
// render score index - <li> player - score 
//

