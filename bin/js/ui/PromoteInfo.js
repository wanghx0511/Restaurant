var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PromoteInfo = (function (_super) {
    __extends(PromoteInfo, _super);
    function PromoteInfo() {
        var _this = _super.call(this) || this;
        _this.configItem = new ConfigItem();
        _this.configKitchenware = new ConfigKitchenware();
        _this.configPos = new ConfigPos();
        _this.btn_upgrade.on("click", _this, _this.onUpgradeClick);
        _this.close.on("click", _this, _this.onCloseClick);
        return _this;
    }
    PromoteInfo.prototype.setParam = function (type, sn, upgrade) {
        this.type = type;
        this.sn = sn;
        this.upgrade = upgrade;
        var skin = "";
        if (type == "item") {
            var level = StageManager.data["item"][sn];
            var confItem = this.configItem.getBy("itemSn", sn, "level", level);
            if (confItem == null)
                return;
            skin = "stage/" + confItem.picture;
        }
        else if (type == "kitchenware") {
            var level = StageManager.data["kitchenware"][sn];
            var confKitchenware = this.configKitchenware.getBy("id", sn, "level", level);
            if (confKitchenware == null)
                return;
            skin = "stage/" + confKitchenware.picture;
        }
        this.item.skin = skin;
    };
    PromoteInfo.prototype.onUpgradeClick = function () {
        if (this.type == "item") {
            var level = StageManager.data["item"][this.sn];
            var confItem = this.configItem.getBy("itemSn", this.sn, "level", level + 1);
            var pos = this.configPos.getBy("type", 2, "itemSn", this.sn, "level", level + 1);
            var item = this.parent.getChildByName("item" + this.sn);
            item.skin = "stage/" + confItem.picture;
        }
        else if (this.type == "kitchenware") {
            var level = StageManager.data["kitchenware"][this.sn];
            var confKitchenware = this.configKitchenware.getBy("id", this.sn, "level", level + 1);
            var pos = this.configPos.getBy("type", 1, "itemSn", this.sn, "level", level + 1);
            var kitchenware = new Laya.Image(); //eval("new " + pos.class + "(" + sn + "," + 1 + ")");
            kitchenware.loadImage("stage/" + confKitchenware.picture);
            kitchenware.pos(pos.x, pos.y);
            kitchenware.scale(pos.scaleX, pos.scaleY);
            kitchenware.pivot(pos.pivotX, pos.pivotY);
            var kitchenwareOld = this.parent.getChildByName("kitchenware_" + this.sn + "_" + level);
            kitchenwareOld.skin = "stage/" + confKitchenware.picture;
            this.parent.addChild(kitchenware);
        }
        this.removeSelf();
        this.upgrade.upgradeStatus(false);
    };
    PromoteInfo.prototype.onCloseClick = function () {
        this.removeSelf();
        this.upgrade.upgradeStatus(false);
    };
    return PromoteInfo;
}(ui.FurniturePromoteUI));
//# sourceMappingURL=PromoteInfo.js.map