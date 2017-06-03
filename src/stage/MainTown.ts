class MainTown extends Laya.Sprite{

    private configStage : ConfigStage = new ConfigStage();
    private configItem: ConfigItem = new ConfigItem();
    private configKitchenware : ConfigKitchenware = new ConfigKitchenware();

    constructor() {
        super();
        var confStage = this.configStage.get(1);

        var upgradeJson = Laya.LocalStorage.getJSON("upgrade");
        if(upgradeJson == null) upgradeJson = StageManager.data;
        //场景图
        var bg = new Laya.Sprite();
        bg.loadImage("res/atlas/beijing.jpg");
        bg.pos(-488, 0);
        this.addChild(bg);

        //操作台
        var caozuotai = new Laya.Sprite();
        caozuotai.loadImage("res/atlas/caozuotai.png");
        caozuotai.pos(-297, 490);
        this.addChild(caozuotai);

        //图片形式生成餐具
        //初始化关卡物品
        var kitchenwares = eval(confStage.initKitchenware);
        var configPos = new ConfigPos();
        for(var sn of kitchenwares) {
            var level = upgradeJson["kitchenware"][sn];
            var configKitchenware = this.configKitchenware.getBy("id", sn, "level", level);
            for(var p=1; p <= configKitchenware.spacenum; p++){
                var pos = configPos.getBy("type", 1, "itemSn", sn, "level", p);
                if(pos == null) continue;
                var kitchenware = new Laya.Image();//eval("new " + pos.class + "(" + sn + "," + 1 + ")");
                kitchenware.loadImage("stage/" + configKitchenware.picture);
                kitchenware.pos(pos.x, pos.y);
                kitchenware.scale(pos.scaleX, pos.scaleY);
                kitchenware.pivot(pos.pivotX, pos.pivotY);
                this.addChildAt(kitchenware, 2);
            }
        }

        var items = eval(confStage.initItem);
        for(var itemSn of items) {
            level = upgradeJson["kitchenware"][sn];
            var pos = configPos.getBy("type", 2, "itemSn", itemSn, "level", level);
            if(pos == null) continue;
            var configItem = this.configItem.getBy("itemSn", itemSn, "level", level);
            var item = new Laya.Image();//Item(configItem);
            item.loadImage("stage/" + configItem.picture);
            item.pos(pos.x, pos.y);
            item.scale(pos.scaleX, pos.scaleY);
            item.pivot(pos.pivotX, pos.pivotY);
            this.addChild(item);
        }

        Laya.SoundManager.playMusic("res/music/MainBGM.mp3");
    }

}