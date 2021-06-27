class PlayerApi {

    static url = `http://localhost:3000/players`;


    static fetchPlayer() {
        fetch(this.url)
            .then(resp => resp.json())
            .catch(this.handleError);
    }

    static handleError(error) {
        flash().innerText = error;
        flash().classList.remove("hide");
        setTimeout(() => {
            flash().innerText = "";
            flash().classList.add("hide");
        }, 5000);
    }

    static handleSubmit(e) {
        e.preventDefault();
        const data = {
            name: playerName().value,
        };
        return fetch(this.url, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((resp) => {
                const playerForm = document.getElementById("player-form");
                playerForm.classList.add("hidden");
                return resp.json();
            })
            .catch((error) => console.error(error));
    }

}
