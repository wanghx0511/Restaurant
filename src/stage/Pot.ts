class Pot extends Laya.Sprite{
     //配置
    private configKitchenware: any;
    //锅里正在加工的食材
    public item: Item = null;
    
    constructor(id: number, level: number) {
        super();
        this.configKitchenware = new ConfigKitchenware().getBy("id", id, "level", level);
        this.loadImage("stage/" + this.configKitchenware.picture);
    }


    //开始加工
    public machining(): void {
        //设定加工时间
        this.item.pos(this.x, this.y);
        this.alpha = 1;
        Laya.timer.once(this.configKitchenware.cooldown * 1000, this, this.updateProgress, [1]);
    }

    private updateProgress(progress: any):void {
        if(this.item == null) return;

        this.item.progress = progress;
        this.item.graphics.clear();
        //熟了
        if(progress == 1) {
            this.item.loadImage("atlas/lettuce.png");
            //烧焦定时
            Laya.timer.once(this.configKitchenware.singetime * 1000, this, this.updateProgress, [2]);
        }
        else if(progress == 2){
            this.item.loadImage("atlas/water.png");
        }

    }

    public getMakeItemSn() {
        return this.configKitchenware.itemSn;
    }

    public handle() {
        this.item = null;
    }
}