import * as PIXI from 'pixi.js-legacy'
import { Loader } from './Game/Lib/Loader'
import { Canvas } from './Game/Lib/Constants'
import { KeyDownListener, KeyUpListener } from './Game/Lib/Keyboard'
import Game from './Game'

var Games: Game

const init = () => {
    Games = new Game({width: window.innerWidth, height: window.innerHeight, backgroundColor: 0xCCCCCC})
    document.body.appendChild(Games.view)
    Games.setWorld()
    Games.setPlayer()
    Games.GameLoop = GameLoop
    document.addEventListener('keydown', KeyDownListener)
    document.addEventListener('keyup', KeyUpListener)
}

const GameLoop = () => {
    Games.EventHandler()
}

window.addEventListener('resize', () => {
    Canvas.width = window.innerWidth
    Canvas.height = window.innerHeight
    if (Games) {
        Games.renderer.resize(Canvas.width, Canvas.height)
        Games.stage.width = Canvas.width
        Games.stage.height = Canvas.height
        console.log(Canvas.width, Canvas.height)
    }
})

Loader(init)