var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StageInfo = (function (_super) {
    __extends(StageInfo, _super);
    function StageInfo() {
        var _this = _super.call(this) || this;
        _this.pause.on(Laya.Event.CLICK, _this, _this.onPause);
        return _this;
    }
    StageInfo.prototype.onPause = function () {
        var pauseInfo = new PauseInfo();
        this.parent.addChild(pauseInfo);
    };
    return StageInfo;
}(ui.stageInfoUI));
//# sourceMappingURL=StageInfo.js.map