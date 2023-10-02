import { AppState } from "../../../ping-pong/app/AppState.js"
import { GameNightPlayer } from "../models/GameNightPlayer.js"

class GameNightPlayersService {
    createGameNightPlayer(GameNightPlayerData) {
        const newGameNightPlayer = new GameNightPlayer(GameNightPlayerData.name, GameNightPlayerData.imgUrl)
        console.log('here is your new pic', newGameNightPlayer);
        AppState.gameNightPlayers.push(newGameNightPlayer)
    }
}
decreasePlayerScore(GameNightPlayerName){
    const foundPlayer = AppState.gameNightPlayers.find
}