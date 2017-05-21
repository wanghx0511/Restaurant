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
        bg.loadImage("res/atlas/beijing.jpg");
        bg.pos(-488, 0);
        _this.addChild(bg);
        //操作台
        var caozuotai = new Laya.Sprite();
        caozuotai.loadImage("res/atlas/caozuotai.png");
        caozuotai.pos(-275, 490);
        _this.addChild(caozuotai);
        //添加UI
        var stageOneInfo = new StageOneInfo();
        _this.stageOneInfo = stageOneInfo;
        _this.addChild(_this.stageOneInfo);
        //事件
        _this.stageOneInfo.start.on(Laya.Event.CLICK, _this, _this.onStageClick);
        return _this;
    }
    StageMain.prototype.onStageClick = function (e) {
        if (this.getChildByName("stageChooseInfo") != null)
            return;
        var stageChooseInfo = new StageChooseInfo();
        stageChooseInfo.name = "stageChooseInfo";
        this.addChild(stageChooseInfo);
        stageChooseInfo.pivot(stageChooseInfo.width / 2, stageChooseInfo.height / 2);
        stageChooseInfo.pos(Laya.stage.width / 2, Laya.stage.height / 2);
    };
    return StageMain;
}(Laya.Sprite));
//# sourceMappingURL=StageMain.js.map