class ScoreApi {
    static url = `http://localhost:3000/scores`;

    static postPlayerScore(score, playerId) {
        return fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                player_id: playerId,
                points: score
            })

        })
            .then((resp) => resp.json())
            .then(() => this.fetchScores())
            .catch(this.handleError);
    }

    static fetchScores() {
        return fetch(this.url)
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

};