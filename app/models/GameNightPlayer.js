export class GameNightPlayer {
    constructor(name, imgUrl, score) {
        this.name = name
        this.imgUrl = imgUrl
        this.score = 0
    }


    get PlayerCard() {
        return `
    <div class="col-12 col-md-4 p-4">
    <div class="bg-secondary">
    <img
        src="${this.imgUrl}"
        alt = "${this.name}" class="img-fluid player-img" >
            <div class="p-3">
                <p class="fs-2">${this.name}</p>
                <p class="fs-3">Score: ${this.score}</p>
                <div>
                    <button onclick="app.GameNightPlayersController.decreasePlayerScore('${this.name}')" class="btn btn-danger" type="button">-</button>
                    <button onclick="app.GameNightPlayersController.increasePlayerScore('${this.name}')" class="btn btn-success" type="button">+</button>
                </div>
            </div>
    </div >
</div > `
    }
}
