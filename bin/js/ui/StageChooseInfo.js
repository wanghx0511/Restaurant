var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StageChooseInfo = (function (_super) {
    __extends(StageChooseInfo, _super);
    function StageChooseInfo() {
        var _this = _super.call(this) || this;
        _this.close.on(Laya.Event.CLICK, _this, _this.onClose);
        return _this;
    }
    StageChooseInfo.prototype.onClose = function () {
        this.removeSelf();
    };
    return StageChooseInfo;
}(ui.StageChooseInfoUI));
//# sourceMappingURL=StageChooseInfo.js.map