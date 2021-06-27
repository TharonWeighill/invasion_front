class ScoreApi {
    static url = `http://localhost:3000/scores`;

    static fetchScores() {
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

};