var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainInfo = (function (_super) {
    __extends(MainInfo, _super);
    function MainInfo() {
        var _this = _super.call(this) || this;
        _this.start.on(Laya.Event.CLICK, _this, _this.onStageClick);
        return _this;
    }
    MainInfo.prototype.onStageClick = function (e) {
        this.removeSelf();
        //加载关卡
        var res = [
            { url: "res/atlas/stage.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/beijing.jpg", type: Laya.Loader.IMAGE },
        ];
        new Loading(res, this.stageStart, null);
    };
    //关卡开始
    MainInfo.prototype.stageStart = function () {
        var stageManager = new StageManager();
        stageManager.createStage();
    };
    return MainInfo;
}(ui.MainInfoUI));
//# sourceMappingURL=MainInfo.js.map