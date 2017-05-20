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
        //创建UI
        _this.uiInfo = new StageOneUpgradeInfo();
        _this.addChild(_this.uiInfo);
        var stageManager = new StageManager();
        var sprites = stageManager.data;
        for (var sn in sprites["item"]) {
            var configItem = _this.configItem.getBy("itemSn", sn, "level", sprites["item"][sn]);
            var item = new Item(configItem);
            var uiItem = _this.uiInfo.getChildByName("itemSn" + sn);
            if (uiItem == null)
                continue;
            item.pos(uiItem.x, uiItem.y);
            item.scale(uiItem.scaleX, uiItem.scaleY);
            item.pivot(uiItem.pivotX, uiItem.pivotY);
            _this.addChild(item);
            //替换后删除
            _this.uiInfo.removeChildByName("itemSn" + sn);
            var uiView = _this.uiInfo.getChildByName("itemSn" + sn + "_ui");
            if (uiView == null) {
                console.log("warning::::: 缺少ui，name=itemSn" + sn + "_ui");
                continue;
            }
            uiView.on("click", _this, _this.onUIClick, ["i" + ":" + sn + ":" + sprites["item"][sn]]);
        }
        for (var id in sprites["kitchenware"]) {
            var configKitchenware = _this.configKitchenware.getBy("id", id, "level", sprites["kitchenware"][id]);
            for (var i = 1; i <= configKitchenware.spacenum; i++) {
                var uiKitchenware = _this.uiInfo.getChildByName("kitchenwareSn" + id + "_" + i);
                if (uiKitchenware == null)
                    continue;
                var kitchenware = eval("new " + configKitchenware.type + "(" + id + "," + i + ")");
                kitchenware.pos(uiKitchenware.x, uiKitchenware.y);
                kitchenware.scale(uiKitchenware.scaleX, uiKitchenware.scaleY);
                kitchenware.pivot(uiKitchenware.pivotX, uiKitchenware.pivotY);
                _this.addChild(kitchenware);
                // //如果是放置台则加到列表里
                // if(configKitchenware.type == "Plate") {
                //     StageManager.stage.plates.push(kitchenware);
                // }
                // //如果是锅则加到列表里
                // else if(configKitchenware.type == "Pot") {
                //     StageManager.stage.pots.push(kitchenware);
                // }
                //替换后删除
                _this.uiInfo.removeChildByName("kitchenwareSn" + id + "_" + i);
            }
            var uiView = _this.uiInfo.getChildByName("kitchenwareSn" + id + "_" + configKitchenware.spacenum + "_ui");
            if (uiView == null) {
                console.log("warning::::: 缺少ui，name=kitchenwareSn" + id + "_" + configKitchenware.spacenum + "_ui");
                continue;
            }
            uiView.visible = true;
            uiView.on("click", _this, _this.onUIClick, ["k" + ":" + id + ":" + configKitchenware.spacenum]);
        }
        Laya.stage.addChild(_this);
        return _this;
    }
    Upgrade.prototype.onUIClick = function (param) {
        var type = param[0];
        var sn = param[2];
        var level = param[4];
        if (type == "k") {
            var uiView = this.uiInfo.getChildByName("kitchenwareSn" + sn + "_" + level + "_ui");
            this.upgradeUiInfo = new UpgradeInfo("kitchenware", sn, level);
            this.upgradeUiInfo.pos(uiView.x, uiView.y);
            this.upgradeUiInfo.pivot(uiView.pivotX, uiView.pivotY);
            this.upgradeUiInfo.scale(uiView.scaleX, uiView.scaleY);
            this.addChild(this.upgradeUiInfo);
            this.uiInfo.removeChildByName("kitchenwareSn" + sn + "_" + level + "_ui");
        }
        if (type == "i") {
            var uiView = this.uiInfo.getChildByName("itemSn" + sn + "_" + level + "_ui");
            this.upgradeUiInfo = new UpgradeInfo("item", sn, level);
            this.upgradeUiInfo.pos(uiView.x, uiView.y);
            this.upgradeUiInfo.pivot(uiView.pivotX, uiView.pivotY);
            this.upgradeUiInfo.scale(uiView.scaleX, uiView.scaleY);
            this.addChild(this.upgradeUiInfo);
            this.uiInfo.removeChildByName("itemSn" + sn + "_" + level + "_ui");
        }
    };
    return Upgrade;
}(Laya.Sprite));
//# sourceMappingURL=Upgrade.js.map