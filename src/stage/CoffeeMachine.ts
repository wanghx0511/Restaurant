class CoffeeMachine extends Laya.Sprite{
    //配置
    private configKitchenware: any;
    private item: Item = null;

    constructor(id: number, level: number) {
        super();
        this.configKitchenware = new ConfigKitchenware().getBy("id", id, "level", level);
        this.loadImage("stage/" + this.configKitchenware.picture);

        //如果是自动的就开始工作
        if(this.configKitchenware.automatic) {
            this.handle();
        }
         //注册点击事件
        this.on(Laya.Event.CLICK, this, this.onClick);
    }

    public handle() {
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
        item.pos(this.x, this.y + 120);
        Laya.stage.addChild(item);
    }

    
    private onClick(e: Laya.Event) {
        //自动的无需点击
        if(this.configKitchenware.automatic) return;

        if(this.item != null) return;
        this.handle();
    }
}