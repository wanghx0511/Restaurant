var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UpgradeInfo = (function (_super) {
    __extends(UpgradeInfo, _super);
    function UpgradeInfo() {
        var _this = _super.call(this) || this;
        _this.upgrade.on("click", _this, _this.onUpgradeClick);
        _this.strength.on("click", _this, _this.onStrengthClick);
        _this.on("click", _this, _this.onStrengthClick);
        return _this;
    }
    UpgradeInfo.prototype.setParam = function (type, sn, sUi, level) {
        this.type = type;
        this.sn = sn;
        this.sUi = sUi;
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
    UpgradeInfo.prototype.onUpgradeClick = function () {
        this.promoteInfo = new PromoteInfo();
        this.promoteInfo.setParam(this.type, this.sn, this.sUi.upgrade, this.level, this.sUi);
        this.promoteInfo.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        this.promoteInfo.pivot(this.promoteInfo.width / 2, this.promoteInfo.height / 2);
        this.parent.addChild(this.promoteInfo);
        this.sUi.visible = true;
        this.removeSelf();
    };
    UpgradeInfo.prototype.onStrengthClick = function () {
        this.sUi.upgrade.upgradeStatus(false);
        this.sUi.visible = true;
        this.removeSelf();
    };
    return UpgradeInfo;
}(ui.UpgradeInfoUI));
//# sourceMappingURL=UpgradeInfo.js.map