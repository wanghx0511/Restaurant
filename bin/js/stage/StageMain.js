var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//游戏主场景
var StageMain = (function (_super) {
    __extends(StageMain, _super);
    function StageMain() {
        var _this = _super.call(this) || this;
        //场景图
        var bg = new Laya.Sprite();
        bg.loadImage("res/atlas/MapBG01_1.jpg");
        _this.addChild(bg);
        //添加UI
        var mainInfo = new MainInfo();
        _this.mainInfo = mainInfo;
        _this.addChild(_this.mainInfo);
        //事件
        _this.mainInfo.start.on(Laya.Event.CLICK, _this, _this.onStageClick);
        return _this;
    }
    StageMain.prototype.onStageClick = function (e) {
        var stageChooseInfo = new StageChooseInfo();
        this.addChild(stageChooseInfo);
        stageChooseInfo.pivot(stageChooseInfo.width / 2, stageChooseInfo.height / 2);
        stageChooseInfo.pos(Laya.stage.width / 2, Laya.stage.height / 2);
    };
    //关卡开始
    StageMain.prototype.stageStart = function () {
        this.removeSelf();
        //加载关卡
        var res = [
            { url: "res/atlas/stage.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/beijing.jpg", type: Laya.Loader.IMAGE },
            { url: "res/atlas/customer.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/sfx.json", type: Laya.Loader.ATLAS },
        ];
        new Loading(res, this.stageStart, null);
    };
    return StageMain;
}(Laya.Sprite));
//# sourceMappingURL=StageMain.js.map