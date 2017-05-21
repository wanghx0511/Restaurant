var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StageSettlementInfo = (function (_super) {
    __extends(StageSettlementInfo, _super);
    function StageSettlementInfo(stageSn, scoreTotal) {
        var _this = _super.call(this) || this;
        _this.scoreTotal = scoreTotal;
        _this.stageSn = stageSn;
        _this.init();
        return _this;
    }
    StageSettlementInfo.prototype.init = function () {
        var stageConf = StageManager.stage.configStage.get(this.stageSn);
        if (stageConf.onestar < this.scoreTotal) {
            this.victory.visible = true;
        }
        else {
            this.defeat.visible = true;
        }
        this.back.on(Laya.Event.CLICK, this, this.onClose);
    };
    StageSettlementInfo.prototype.onClose = function () {
        StageManager.stage.removeSelf();
    };
    return StageSettlementInfo;
}(ui.StageSettlementUI));
//# sourceMappingURL=StageSettlementInfo.js.map