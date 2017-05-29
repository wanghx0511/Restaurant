var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StageInfo = (function (_super) {
    __extends(StageInfo, _super);
    function StageInfo(confStage) {
        var _this = _super.call(this) || this;
        _this.confStage = confStage;
        _this.pause.on(Laya.Event.CLICK, _this, _this.onPause);
        _this.day.index = confStage.sn;
        var barWidth = _this.progressBar.width;
        _this.starLeft.x = _this.progressBar.x + barWidth * (confStage.onestar / confStage.threestar);
        _this.starMid.x = _this.progressBar.x + barWidth * (confStage.twostar / confStage.threestar);
        _this.starRight.x = _this.progressBar.x + barWidth;
        return _this;
    }
    StageInfo.prototype.onPause = function () {
        var pauseInfo = new PauseInfo();
        this.parent.addChild(pauseInfo);
    };
    StageInfo.prototype.scoreChange = function (score) {
        this.progressBar.value = score / this.confStage.threestar;
        if (this.confStage.onestar <= score) {
            this.starLeft.gray = false;
        }
        if (this.confStage.twostar <= score) {
            this.starMid.gray = false;
        }
        if (this.confStage.threestar <= score) {
            this.starRight.gray = false;
        }
    };
    return StageInfo;
}(ui.StageInfoUI));
//# sourceMappingURL=StageInfo.js.map