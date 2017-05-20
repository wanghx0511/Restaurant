var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UpgradeInfo = (function (_super) {
    __extends(UpgradeInfo, _super);
    function UpgradeInfo(type, sn, level) {
        var _this = _super.call(this) || this;
        _this.stageManager = new StageManager();
        _this.type = type;
        _this.sn = sn;
        _this.level = level;
        _this.upgrade.on("click", _this, _this.onUpgradeClick);
        _this.strength.on("click", _this, _this.onStrengthClick);
        _this.info.on("click", _this, _this.onInfoClick);
        return _this;
    }
    UpgradeInfo.prototype.onUpgradeClick = function () {
        if (this.type == "item") {
            var levelNow = this.level + 1;
            this.stageManager.data["item"][this.sn] = levelNow;
        }
        if (this.type == "kitchenware") {
            var levelNow = this.level + 1;
            this.stageManager.data["kitchenware"][this.sn] = levelNow;
        }
        console.log(this.sn);
        console.log(this.stageManager.data["kitchenware"] + ":::" + this.stageManager.data["kitchenware"][this.sn]);
    };
    UpgradeInfo.prototype.onStrengthClick = function () {
    };
    UpgradeInfo.prototype.onInfoClick = function () {
    };
    return UpgradeInfo;
}(ui.UpgradeInfoUI));
//# sourceMappingURL=UpgradeInfo.js.map