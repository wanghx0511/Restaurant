var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StageOneUpgradeInfo = (function (_super) {
    __extends(StageOneUpgradeInfo, _super);
    function StageOneUpgradeInfo() {
        var _this = _super.call(this) || this;
        _this.startGame.on("click", _this, _this.onStartGame);
        return _this;
    }
    StageOneUpgradeInfo.prototype.onStartGame = function () {
        var stageManager = new StageManager();
        stageManager.createStage();
    };
    return StageOneUpgradeInfo;
}(ui.StageOneUpgradeUI));
//# sourceMappingURL=StageOneUpgradeInfo.js.map