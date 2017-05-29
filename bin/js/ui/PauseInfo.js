var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PauseInfo = (function (_super) {
    __extends(PauseInfo, _super);
    function PauseInfo() {
        var _this = _super.call(this) || this;
        _this.close.on(Laya.Event.CLICK, _this, _this.onClose);
        _this.continue.on(Laya.Event.CLICK, _this, _this.onClose);
        _this.quit.on(Laya.Event.CLICK, _this, _this.onClose);
        _this.timer.once(10, _this, _this.onAdded);
        return _this;
    }
    PauseInfo.prototype.onClose = function () {
        Laya.timer.scale = 1;
        this.removeSelf();
    };
    PauseInfo.prototype.onAdded = function () {
        Laya.timer.scale = 0;
    };
    return PauseInfo;
}(ui.PauseInfoUI));
//# sourceMappingURL=PauseInfo.js.map