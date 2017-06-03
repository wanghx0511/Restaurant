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
    PromoteInfo.prototype.setParam = function (type, sn, upgrade, level, sUi) {
        this.type = type;
        this.sn = sn;
        this.upgrade = upgrade;
        this.level = level;
        this.sUi = sUi;
        this.sb1.visible = false;
        this.s1.visible = false;
        this.sb2.visible = false;
        this.s2.visible = false;
        this.sb3.visible = false;
        this.s3.visible = false;
        this.p1.visible = false;
        this.p2.visible = false;
        this.p3.visible = false;
        var btn_visible = true;
        if (type == "kitchenware") {
            var confsKitchenware = this.configKitchenware.findBy("id", sn);
            if (level >= confsKitchenware.length) {
                btn_visible = false;
            }
        }
        if (type == "item") {
            var confsKitchenware = this.configKitchenware.findBy("id", sn);
            if (level >= confsKitchenware.length) {
                btn_visible = false;
            }
        }
        if (!btn_visible) {
            this.btn_upgrade.gray = true;
        }
        if (level >= 2) {
            this.p1.visible = true;
        }
        if (level >= 3) {
            this.p2.visible = true;
        }
        if (level >= 4) {
            this.p3.visible = true;
        }
        var skin = "";
        if (type == "item") {
            var confItem = this.configItem.getBy("itemSn", sn, "level", level);
            if (confItem == null)
                return;
            skin = "stage/" + confItem.picture;
        }
        else if (type == "kitchenware") {
            var confKitchenware = this.configKitchenware.getBy("id", sn, "level", level);
            if (confKitchenware == null)
                return;
            skin = "stage/" + confKitchenware.picture;
        }
        this.item.skin = skin;
    };
    PromoteInfo.prototype.onUpgradeClick = function () {
        if (this.btn_upgrade.gray)
            return;
        var upgradeJson = Laya.LocalStorage.getJSON("upgrade");
        if (upgradeJson == null)
            upgradeJson = StageManager.data;
        if (this.type == "item") {
            var confItem = this.configItem.getBy("itemSn", this.sn, "level", this.level + 1);
            var pos = this.configPos.getBy("type", 2, "itemSn", this.sn, "level", this.level + 1);
            var item = this.parent.getChildByName("item" + this.sn);
            item.skin = "stage/" + confItem.picture;
        }
        else if (this.type == "kitchenware") {
            var confKitchenware = this.configKitchenware.getBy("id", this.sn, "level", this.level + 1);
            var pos = this.configPos.getBy("type", 1, "itemSn", this.sn, "level", this.level + 1);
            var kitchenware = new Laya.Image(); //eval("new " + pos.class + "(" + sn + "," + 1 + ")");
            kitchenware.loadImage("stage/" + confKitchenware.picture);
            kitchenware.pos(pos.x, pos.y);
            kitchenware.scale(pos.scaleX, pos.scaleY);
            kitchenware.pivot(pos.pivotX, pos.pivotY);
            for (var l = 1; l <= this.level; l++) {
                var kitchenwareOld = this.parent.getChildByName("kitchenware_" + this.sn + "_" + l);
                if (kitchenwareOld == null)
                    continue;
                kitchenwareOld.skin = "stage/" + confKitchenware.picture;
            }
            var nameLevel = this.level + 1;
            kitchenware.name = "kitchenware_" + this.sn + "_" + nameLevel;
            this.parent.addChildAt(kitchenware, 3);
        }
        upgradeJson[this.type][this.sn] = this.level + 1;
        Laya.LocalStorage.setJSON("upgrade", upgradeJson);
        this.sUi.setParam(this.type, this.sn, this.level + 1);
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