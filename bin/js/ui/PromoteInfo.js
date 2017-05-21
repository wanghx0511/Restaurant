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
        _this.btn_upgrade.on("click", _this, _this.onUpgradeClick);
        return _this;
    }
    PromoteInfo.prototype.setParam = function (type, listName, stageOneInfo) {
        this.type = type;
        this.listName = listName;
        this.stageOneInfo = stageOneInfo;
    };
    PromoteInfo.prototype.onUpgradeClick = function () {
        if (this.type == "item") {
            var confItem = this.configItem.getBy("itemSn", this.listName, "level", StageManager.data["item"][this.listName]);
            var img = this.stageOneInfo.getChildByName("item" + this.listName);
            img.graphics.clear();
            img.loadImage("stage/" + confItem.picture1);
        }
        this.removeSelf();
    };
    return PromoteInfo;
}(ui.FurniturePromoteUI));
//# sourceMappingURL=PromoteInfo.js.map