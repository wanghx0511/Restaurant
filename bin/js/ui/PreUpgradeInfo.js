var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PreUpgradeInfo = (function (_super) {
    __extends(PreUpgradeInfo, _super);
    function PreUpgradeInfo() {
        var _this = _super.call(this) || this;
        _this.on("click", _this, _this.onClick);
        return _this;
    }
    PreUpgradeInfo.prototype.setParam = function (type, sn, level) {
        this.type = type;
        this.sn = sn;
        this.level = level;
    };
    PreUpgradeInfo.prototype.onClick = function () {
        this.visible = false;
        var upgradeInfo = new UpgradeInfo();
        upgradeInfo.setParam(this.type, this.sn, this);
        this.parent.addChild(upgradeInfo);
    };
    return PreUpgradeInfo;
}(ui.PreUpgradeInfoUI));
//# sourceMappingURL=PreUpgradeInfo.js.map