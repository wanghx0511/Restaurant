var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Upgrade = (function (_super) {
    __extends(Upgrade, _super);
    function Upgrade(stageSn) {
        var _this = _super.call(this) || this;
        _this.configStage = new ConfigStage();
        _this.configItem = new ConfigItem();
        _this.configKitchenware = new ConfigKitchenware();
        _this.stageSn = stageSn;
        console.log("当前关sn=" + stageSn);
        var confStage = _this.configStage.get(_this.stageSn);
        //场景图
        var bg = new Laya.Sprite();
        bg.loadImage("res/atlas/beijing.jpg");
        bg.pos(-488, 0);
        _this.addChild(bg);
        //操作台
        var caozuotai = new Laya.Sprite();
        caozuotai.loadImage("res/atlas/caozuotai.png");
        caozuotai.pos(-275, 490);
        _this.addChild(caozuotai);
        //图片形式生成餐具
        //初始化关卡物品
        var kitchenwares = eval(confStage.initKitchenware);
        var configPos = new ConfigPos();
        for (var _i = 0, kitchenwares_1 = kitchenwares; _i < kitchenwares_1.length; _i++) {
            var sn = kitchenwares_1[_i];
            var level = StageManager.data["kitchenware"][sn];
            var pos = configPos.getBy("type", 1, "itemSn", sn, "level", level);
            if (pos == null)
                continue;
            var confKitchenware = _this.configKitchenware.getBy("id", sn, "level", level);
            var kitchenware = new Laya.Image(); //eval("new " + pos.class + "(" + sn + "," + 1 + ")");
            kitchenware.loadImage("stage/" + confKitchenware.picture);
            kitchenware.pos(pos.x, pos.y);
            kitchenware.scale(pos.scaleX, pos.scaleY);
            kitchenware.pivot(pos.pivotX, pos.pivotY);
            //在level=1的东西下边加一个ui
            if (level == 1) {
                var ui = new PreUpgradeInfo();
                ui.pos(pos.uX, pos.uY);
                ui.scale(pos.uScaleX, pos.uScaleY);
                ui.pivot(pos.uPivotX, pos.uPivotY);
                ui.setParam("kitchenware", sn, level);
                _this.addChild(ui);
            }
            _this.addChild(kitchenware);
        }
        var items = eval(confStage.initItem);
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var itemSn = items_1[_a];
            level = StageManager.data["kitchenware"][sn];
            var pos = configPos.getBy("type", 2, "itemSn", itemSn, "level", level);
            if (pos == null)
                continue;
            var configItem = _this.configItem.getBy("itemSn", itemSn, "level", level);
            var item = new Laya.Image(); //Item(configItem);
            item.loadImage("stage/" + configItem.picture);
            item.pos(pos.x, pos.y);
            item.scale(pos.scaleX, pos.scaleY);
            item.pivot(pos.pivotX, pos.pivotY);
            //在level=1的东西下边加一个ui
            if (level == 1) {
                var ui = new PreUpgradeInfo();
                ui.pos(pos.uX, pos.uY);
                ui.scale(pos.uScaleX, pos.uScaleY);
                ui.pivot(pos.uPivotX, pos.uPivotY);
                ui.setParam("item", sn, level);
                _this.addChild(ui);
            }
            _this.addChild(item);
        }
        return _this;
    }
    return Upgrade;
}(Laya.Sprite));
//# sourceMappingURL=Upgrade.js.map