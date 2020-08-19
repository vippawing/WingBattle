import * as PIXI from 'pixi.js-legacy'
import Character from "../index"

class Player extends Character {

    Obj: PIXI.AnimatedSprite = null
    HpBar: PIXI.Graphics = null

    constructor() {
        super()
        this.container.position.set(this.status.x, this.status.y)
        this.drawObj()
        this.drawHpBar()
    }

    drawObj() {
        const sheetBoy = this.resources['PlayerAttack'].spritesheet
        this.Obj = new PIXI.AnimatedSprite(sheetBoy.animations["Boy"])
        this.Obj.position.set(0, 0)
        this.Obj.anchor.set(0.5)
        this.Obj.scale.set(0.15)
        this.Obj.loop = false
        this.container.addChild(this.Obj)
    }

    drawHpBar() {
        this.HpBar = new PIXI.Graphics()
        this.HpBar.beginFill(0xFF0000)
        this.HpBar.lineStyle(3, 0x42D00, 1)
        this.HpBar.drawRect(-40, -70, 75, 7)
        this.HpBar.endFill()
        this.container.addChild(this.HpBar)
    }

    UpdateStatus(KeyPressed, Rotation) {
        this.ActionEvent()
        this.Move(KeyPressed, Rotation)
        if (this.status.Attack) this.Obj.play()
        this.Obj.onComplete = () => { this.status.Attack = false, this.Obj.gotoAndStop(0) }
    }

    Move(KeyPressed, Rotation) {
        if (KeyPressed.w == true) {
            this.status.y -= 5
        } else if (KeyPressed.s == true) {
            this.status.y += 5
        }
        if (KeyPressed.a == true) {
            this.status.x -= 5
        } else if (KeyPressed.d == true) {
            this.status.x += 5
        }
        this.Obj.rotation = Rotation
    }


}

export default Player