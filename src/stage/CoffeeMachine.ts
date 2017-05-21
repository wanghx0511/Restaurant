class CoffeeMachine extends Laya.Sprite{
    //配置
    private configKitchenware: any;
    private item: Item = null;
    private ani: Laya.Animation;

    constructor(id: number, level: number) {
        super();
        this.configKitchenware = new ConfigKitchenware().getBy("id", id, "level", level);
        this.loadImage("stage/" + this.configKitchenware.picture);
        Laya.Animation.createFrames("res/atlas/sfx.json", "sfx");
        //注册点击事件
        this.on(Laya.Event.CLICK, this, this.onClick);
        this.on(Laya.Event.ADDED, this, this.onAdded);
    }

    public onAdded() {
        if(!this.configKitchenware.automatic) return;
        this.handle();
    }

    public handle() {
        this.createAnimation();
        Laya.timer.once(this.configKitchenware.cooldown * 1000, this, this.finish);
    }

    private finish() {
        //产出道具
        var itemSn = this.configKitchenware.itemSn;
        var configItem: ConfigItem = new ConfigItem();
        var confItem = configItem.getBy("itemSn", itemSn, "level", 1);
        var item = new Item(confItem);
        this.item = item;
        item.box = this;
        item.state = true;
        item.pos(this.x, this.y);
        this.stage.addChild(item);
        this.ani.clear();
    }

    
    private onClick(e: Laya.Event) {
        //自动的无需点击
        if(this.configKitchenware.automatic) return;

        if(this.item != null) return;
        this.handle();
    }

    private createAnimation(): void {
			this.ani = new Laya.Animation();
			this.ani.interval = 300; // 设置播放间隔（单位：毫秒）
            this.addChild(this.ani);
			this.ani.play(0, true, "sfx"); // 播放图集动画

            this.ani.pos(48, 156);
	}
}