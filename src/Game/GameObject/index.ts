import * as PIXI from 'pixi.js-legacy'
import { PixiResources } from '../Lib/Loader'

class GameObject {

    resources: Object = PixiResources
    container: PIXI.Container
    id: number
    status: { x: number, y: number, Rotation: number, Attack: boolean }

    constructor() {
        this.container = new PIXI.Container()
        this.id = 0
        this.status = {
            x: 0,
            y: 0,
            Rotation: 0,
            Attack: false
        }
    }

}

export default GameObject