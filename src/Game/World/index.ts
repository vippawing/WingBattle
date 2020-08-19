import * as PIXI from 'pixi.js-legacy'
import { PixiResources } from '../Lib/Loader'
import { Canvas } from '../Lib/Constants'

class World {

    resources: Object = PixiResources
    container: PIXI.Container
    status: { Scale: number }
    Obj: PIXI.Sprite = null
    Border: PIXI.Graphics = null

    constructor() {
        this.container = new PIXI.Container()
        this.status = {
            Scale: 2
        }

        this.drawObj()
        this.drawBorder()
    }

    drawObj() {
        this.Obj = new PIXI.Sprite(this.resources['BackGround'].texture)
        this.Obj.scale.set(this.status.Scale)
        this.container.addChild(this.Obj)
    }

    drawBorder() {
        this.Border = new PIXI.Graphics()
        this.Border.lineStyle(5, 0xEEEE00)
            .moveTo(0, 0)
            .lineTo(0, this.container.height)
            .lineTo(this.container.width, this.container.height)
            .lineTo(this.container.width, 0)
            .lineTo(0, 0)
        this.container.addChild(this.Border)
    }

    addObject(obj) {
        this.container.addChild(obj.container)
    }

    delObject(obj) {
        this.container.removeChild(obj.container)
    }

    Viewport(vx, vy) {
        this.container.x = -vx + (Canvas.width / 2)
        this.container.y = -vy + (Canvas.height / 2)
    }

}

export default World