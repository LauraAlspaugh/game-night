import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"


function _drawGameNightPlayers() {
    const gameNightPlayers = AppState.gameNightPlayers
    let content = ''
    gameNightPlayers.forEach(player => content += player.PlayerCard)
    console.log('here is the content', content)
    setHTML('gameNightPlayers', content)
}



export class GameNightPlayersController {
    constructor() {
        console.log('Game Night Players Controller is loaded', AppState.gameNightPlayers)
        _drawGameNightPlayers()
    }

}