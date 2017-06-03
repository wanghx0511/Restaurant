var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainTown = (function (_super) {
    __extends(MainTown, _super);
    function MainTown() {
        var _this = _super.call(this) || this;
        _this.configStage = new ConfigStage();
        _this.configItem = new ConfigItem();
        _this.configKitchenware = new ConfigKitchenware();
        _this.initImg();
        Laya.SoundManager.playMusic("res/music/MainBGM.mp3");
        return _this;
    }
    //提出来，退出升级的时候调用一下
    MainTown.prototype.initImg = function () {
        //先清掉，在重新生成
        this.removeChildren();
        //场景图
        var bg = new Laya.Sprite();
        bg.loadImage("res/atlas/beijing.jpg");
        bg.pos(-488, 0);
        this.addChild(bg);
        this.name = "mainTown";
        //操作台
        var caozuotai = new Laya.Sprite();
        caozuotai.loadImage("res/atlas/caozuotai.png");
        caozuotai.pos(-297, 490);
        this.addChild(caozuotai);
        var confStage = this.configStage.get(1);
        var upgradeJson = Laya.LocalStorage.getJSON("upgrade");
        if (upgradeJson == null)
            upgradeJson = StageManager.data;
        //图片形式生成餐具
        //初始化关卡物品
        var kitchenwares = eval(confStage.initKitchenware);
        var configPos = new ConfigPos();
        for (var _i = 0, kitchenwares_1 = kitchenwares; _i < kitchenwares_1.length; _i++) {
            var sn = kitchenwares_1[_i];
            var level = upgradeJson["kitchenware"][sn];
            var configKitchenware = this.configKitchenware.getBy("id", sn, "level", level);
            for (var p = 1; p <= configKitchenware.spacenum; p++) {
                var pos = configPos.getBy("type", 1, "itemSn", sn, "level", p);
                if (pos == null)
                    continue;
                var kitchenware = new Laya.Image(); //eval("new " + pos.class + "(" + sn + "," + 1 + ")");
                kitchenware.loadImage("stage/" + configKitchenware.picture);
                kitchenware.pos(pos.x, pos.y);
                kitchenware.scale(pos.scaleX, pos.scaleY);
                kitchenware.pivot(pos.pivotX, pos.pivotY);
                this.addChildAt(kitchenware, 2);
            }
        }
        var items = eval(confStage.initItem);
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var itemSn = items_1[_a];
            level = upgradeJson["kitchenware"][sn];
            var pos = configPos.getBy("type", 2, "itemSn", itemSn, "level", level);
            if (pos == null)
                continue;
            var configItem = this.configItem.getBy("itemSn", itemSn, "level", level);
            var item = new Laya.Image(); //Item(configItem);
            item.loadImage("stage/" + configItem.picture);
            item.pos(pos.x, pos.y);
            item.scale(pos.scaleX, pos.scaleY);
            item.pivot(pos.pivotX, pos.pivotY);
            this.addChild(item);
        }
    };
    return MainTown;
}(Laya.Sprite));
//# sourceMappingURL=MainTown.js.map