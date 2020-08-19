import * as PIXI from 'pixi.js-legacy'
import { Canvas } from './Lib/Constants'
import { KeyPressed } from './Lib/Keyboard'
import World from './World'
import Player from './GameObject/Character/Player'

class Game extends PIXI.Application {

    World: World
    Player: Player

    constructor(props: Object) {
        super(props)
        this.renderer.view.style.position = 'absolute'
        this.renderer.view.style.display = 'block'
        this.renderer.autoDensity = true
        this.renderer.resize(Canvas.width, Canvas.height)
        this.stage.interactive = true
    }

    setWorld() {
        this.World = new World()
        this.stage.addChild(this.World.container)
    }

    setPlayer() {
        this.Player = new Player()
        this.World.addObject(this.Player)
    }

    EventHandler() {
        this.stage.on('click', () => {
            if (!this.Player.status.Attack) {
                this.Player.status.Attack = true
            }
        })

        let MouseX = this.renderer.plugins.interaction.mouse.global.x
        let MouseY = this.renderer.plugins.interaction.mouse.global.y
        let PlayerX = MouseX - (Canvas.width / 2)
        let PlayerY = MouseY - (Canvas.height / 2)

        this.World.Viewport(this.Player.container.x, this.Player.container.y)
        this.Player.UpdateStatus(KeyPressed, Math.atan2(PlayerY, PlayerX))
    }

    set GameLoop(CallBack) {
        this.ticker.add(CallBack)
    }

}

export default Game