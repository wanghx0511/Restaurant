class Upgrade extends Laya.Sprite{

    private stageSn : number;
    private configStage : ConfigStage = new ConfigStage();
    private configItem: ConfigItem = new ConfigItem();
    private configKitchenware : ConfigKitchenware = new ConfigKitchenware();
    private upgradeUI : PreUpgradeInfo;

    constructor(stageSn : number) {
        super();
        this.stageSn = stageSn;
        console.log("当前关sn=" + stageSn);
        var confStage = this.configStage.get(this.stageSn);

        //场景图
        var bg = new Laya.Sprite();
        bg.loadImage("res/atlas/beijing.jpg");
        bg.pos(-488, 0);
        this.addChild(bg);

        //操作台
        var caozuotai = new Laya.Sprite();
        caozuotai.loadImage("res/atlas/caozuotai.png");
        caozuotai.pos(-275, 490);
        this.addChild(caozuotai);

        //图片形式生成餐具
        //初始化关卡物品
        var kitchenwares = eval(confStage.initKitchenware);
        var configPos = new ConfigPos();
        for(var sn of kitchenwares) {
            var level = StageManager.data["kitchenware"][sn];
            var pos = configPos.getBy("type", 1, "itemSn", sn, "level", level);
            if(pos == null) continue;
            var confKitchenware = this.configKitchenware.getBy("id", sn, "level", level);
            var kitchenware = new Laya.Image();//eval("new " + pos.class + "(" + sn + "," + 1 + ")");
            kitchenware.loadImage("stage/" + confKitchenware.picture);
            kitchenware.pos(pos.x, pos.y);
            kitchenware.scale(pos.scaleX, pos.scaleY);
            kitchenware.pivot(pos.pivotX, pos.pivotY);
            //在level=1的东西下边加一个ui
            if(level == 1) {
                var ui = new PreUpgradeInfo();
                ui.pos(pos.uX, pos.uY);
                ui.scale(pos.uScaleX, pos.uScaleY);
                ui.pivot(pos.uPivotX, pos.uPivotY);
                ui.setParam("kitchenware", sn, level);
                this.addChild(ui);
            }
            this.addChild(kitchenware);
        }

        var items = eval(confStage.initItem);
        for(var itemSn of items) {
            level = StageManager.data["kitchenware"][sn];
            var pos = configPos.getBy("type", 2, "itemSn", itemSn, "level", level);
            if(pos == null) continue;
            var configItem = this.configItem.getBy("itemSn", itemSn, "level", level);
            var item = new Laya.Image();//Item(configItem);
            item.loadImage("stage/" + configItem.picture);
            item.pos(pos.x, pos.y);
            item.scale(pos.scaleX, pos.scaleY);
            item.pivot(pos.pivotX, pos.pivotY);
            //在level=1的东西下边加一个ui
            if(level == 1) {
                var ui = new PreUpgradeInfo();
                ui.pos(pos.uX, pos.uY);
                ui.scale(pos.uScaleX, pos.uScaleY);
                ui.pivot(pos.uPivotX, pos.uPivotY);
                ui.setParam("item", sn, level);
                this.addChild(ui);
            }
            this.addChild(item);
        }

    }

}