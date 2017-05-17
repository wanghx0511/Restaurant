class Trash extends Laya.Sprite{

    private trashCan : Laya.Sprite;
    private trashAni : Laya.Animation;

    constructor(){
        super();
        this.trashCan = new Laya.Sprite;
        this.trashCan.loadImage("stage/lajitong.png");
        this.addChild(this.trashCan);
        this.trashCan.on(Laya.Event.CLICK, this, this.onClick);
    }

    private onClick(e : Laya.Event) {
         //需要丢弃的食材
        var item: Item = StageManager.stage.selected;
        if(item == null) return;

        this.abandon(item);
        
    }

    public abandon(item: Item) {
        //销毁
        item.destroy();
        this.trashCan.loadImage("stage/lajitong2.png");
        Laya.timer.once(800, this, this.onChangeImage);

        // console.log("trash animation")
        // this.trashAni = new Laya.Animation;
        // this.trashAni.interval = 200;
        // this.addChild(this.trashAni);
        // this.trashAni.play(0, false, "trashClose");
        // this.trashAni.destroy();
        //扣分
        //gameMain.game.gameInfo.minusMoney(item.getConf().destroycost);
    }

    private onChangeImage(){
        this.trashCan.loadImage("stage/lajitong.png");
    }

}