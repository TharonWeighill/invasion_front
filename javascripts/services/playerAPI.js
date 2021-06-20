class PlayerApi {

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

    static handleError(error) {
        flash().innerText = error;
        flash().classList.remove("hide");
        setTimeout(() => {
            flash().innerText = "";
            flash().classList.add("hide");
        }, 5000);
    }

}

// static fetchPlayer() {
//     fetch(this.url)
//         .then(resp => resp.json())
//         .then(json => json.forEach(playObj => {
//             Player.findOrCreateBy(playObj);
//         }))
//         .catch(this.handleError);
// }
//     getPlayer() {
    //         const body = document.getElementById('app');
    //         body.innerHTML = `
    //         <form id='player-form'>
    //         <h1> Alien Invasion!!! </h1>
    //         <label>Enter Name</label>
    //         <input id='player-name'/>
    //         <button type='submit'>START GAME</button
    //         </form> 
    //         `;
    //         const form = document.getElementById('player-form');
    //         form.addEventListener('submit', this.handleFromSubmit);
    //     };
// static handleSubmit(e) {
//     e.preventDefault();
//     const input = document.getElementById('player-name');
//     const data = {
//         name: playerName().value,
//     };
//     fetch(playerApi.baseUrl, {
//         method: 'POST',
//         headers: {
//             "Content-Type": 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//         .then(resp => resp.json())
//         .then(json => {
//             let play = new Player(json);

//         });
// }
