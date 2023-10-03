import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"
import { getFormData } from "../utils/FormHandler.js"
import { gameNightPlayersService } from "../services/GameNightPlayersServices.js"

function _drawGameNightPlayers() {
    const gameNightPlayers = AppState.gameNightPlayers
    let content = ''
    gameNightPlayers.forEach(player => content += player.PlayerCard)
    console.log('here is the content', content);
    setHTML('gameNightPlayers', content)
}



export class GameNightPlayersController {
    constructor() {
        console.log('Game Night Players Controller is loaded', AppState.gameNightPlayers);
        _drawGameNightPlayers()
    }

    increasePlayerScore(gameNightPlayerName) {
        console.log('you clicked the increase score button', gameNightPlayerName);
        gameNightPlayersService.increasePlayerScore(gameNightPlayerName)
        _drawGameNightPlayers()
    }

    decreasePlayerScore(gameNightPlayerName) {
        gameNightPlayersService.decreasePlayerScore(gameNightPlayerName)
        _drawGameNightPlayers()
    }
    createGameNightPlayer(event) {
        event.preventDefault()
        const form = event.target
        const GameNightPlayerData = getFormData(form)
        gameNightPlayersService.createGameNightPlayer(GameNightPlayerData)
        _drawGameNightPlayers()
    }
}



