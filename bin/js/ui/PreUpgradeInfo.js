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
    PreUpgradeInfo.prototype.setUpgrade = function (upgrade) {
        this.upgrade = upgrade;
    };
    PreUpgradeInfo.prototype.setParam = function (type, sn, level) {
        this.type = type;
        this.sn = sn;
        this.level = level;
        this.p1.visible = false;
        this.p2.visible = false;
        this.p3.visible = false;
        this.p4.visible = false;
        if (level >= 2) {
            this.p1.visible = true;
        }
        if (level >= 3) {
            this.p2.visible = true;
        }
        if (level >= 4) {
            this.p3.visible = true;
        }
        if (level >= 5) {
            this.p4.visible = true;
        }
    };
    PreUpgradeInfo.prototype.onClick = function () {
        if (this.upgrade.getStatus())
            return;
        this.visible = false;
        var upgradeInfo = new UpgradeInfo();
        upgradeInfo.setParam(this.type, this.sn, this, this.level);
        upgradeInfo.pos(this.x, this.y);
        upgradeInfo.pivot(this.pivotX, this.pivotY);
        this.parent.addChild(upgradeInfo);
        this.upgrade.upgradeStatus(true);
    };
    return PreUpgradeInfo;
}(ui.PreUpgradeInfoUI));
//# sourceMappingURL=PreUpgradeInfo.js.map