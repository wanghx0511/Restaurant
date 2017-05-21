var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UpgradeInfo = (function (_super) {
    __extends(UpgradeInfo, _super);
    function UpgradeInfo() {
        var _this = _super.call(this) || this;
        _this.stageManager = new StageManager();
        _this.upgrade.on("click", _this, _this.onUpgradeClick);
        _this.strength.on("click", _this, _this.onStrengthClick);
        _this.info.on("click", _this, _this.onInfoClick);
        return _this;
    }
    UpgradeInfo.prototype.setParam = function (type, listName, stageOneInfo, uiVar) {
        this.type = type;
        this.listName = listName;
        this.stageOneInfo = stageOneInfo;
        this.uiVar = uiVar;
    };
    UpgradeInfo.prototype.onUpgradeClick = function () {
        this.promoteInfo = new PromoteInfo();
        this.promoteInfo.setParam(this.type, this.listName, this.stageOneInfo);
        this.stageOneInfo.addChild(this.promoteInfo);
        eval("this.stageOneInfo." + this.uiVar + ".visible = true;");
        this.removeSelf();
    };
    UpgradeInfo.prototype.onStrengthClick = function () {
    };
    UpgradeInfo.prototype.onInfoClick = function () {
    };
    return UpgradeInfo;
}(ui.UpgradeInfoUI));
//# sourceMappingURL=UpgradeInfo.js.map