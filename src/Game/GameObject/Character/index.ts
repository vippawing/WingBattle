import { Map } from '../../Lib/Constants'
import GameObject from '../../GameObject'

class Character extends GameObject{
    
    constructor() {
        super()
    }

    ActionEvent() {
        this.CheckMoveToBorder()
    }

    CheckMoveToBorder() {
        if (this.status.x < 0) {
            this.status.x = 0
        } else if (this.status.x > Map.width) {
            this.status.x = Map.width
        }
        if (this.status.y < 0) {
            this.status.y = 0
        } else if (this.status.y > Map.height) {
            this.status.y = Map.height
        }
        this.container.x = this.status.x
        this.container.y = this.status.y
    }

}

export default Character