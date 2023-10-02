import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"
import { GameNightPlayer } from "./models/GameNightPlayer.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])



  gameNightPlayers = [
    new GameNightPlayer('Amanda', 'https://images.unsplash.com/photo-1523450001312-faa4e2e37f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwcGxheWluZyUyMGJhc2tldGJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'),
    new GameNightPlayer('Jeremy', 'https://images.unsplash.com/photo-1525914813433-886dc018469d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZSUyMHBsYXlpbmclMjBiYXNrZXRiYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60')
  ]

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
