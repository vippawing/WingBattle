import * as PIXI from 'pixi.js-legacy'

const Loading = new PIXI.Loader()
var PixiResources: Object

const Loader = (init: Function) => {
    Loading
    .add("BackGround", "./src/assets/img/BackGround/BackGround.png")
    .add("Player", "./src/assets/img/Boy/0.png")
    .add("PlayerAttack","./src/assets/img/Boy/Boy.json")
    .add("SilverSlime", "./src/assets/img/SilverSlime/SilverSlime.png")
    .load((loader, resources) => {
        PixiResources = resources
        init()
    })
}

Loading.onLoad.add((event, target) => {
    console.log("載入項目：" + target.name)
    console.log("目前進度：" + Loading.progress + "%")
})

export { Loader, PixiResources }