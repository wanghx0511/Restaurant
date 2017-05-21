var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StageChooseInfo = (function (_super) {
    __extends(StageChooseInfo, _super);
    function StageChooseInfo() {
        var _this = _super.call(this) || this;
        _this.initStageList();
        _this.close.on(Laya.Event.CLICK, _this, _this.onClose);
        return _this;
    }
    StageChooseInfo.prototype.onClose = function () {
        this.removeSelf();
    };
    //初始化关卡列表
    StageChooseInfo.prototype.initStageList = function () {
        var confStage = new ConfigStage();
        var confJson = confStage.findAll();
        var i = 0;
        for (var _i = 0, confJson_1 = confJson; _i < confJson_1.length; _i++) {
            var conf = confJson_1[_i];
            this.createStageInfo(conf.sn);
        }
    };
    StageChooseInfo.prototype.createStageInfo = function (stageSn) {
        var stageInfo = new Laya.Sprite();
        var bg = new Laya.Image();
        bg.loadImage("ui/StageChoose/Bg_Blue.png");
        stageInfo.addChild(bg);
        var stage = new Laya.Image();
        stage.loadImage("ui/StageChoose/BT_Green.png");
        bg.addChild(stage);
        stage.pos(2, 124);
        var bgLeft = new Laya.Image();
        bgLeft.loadImage("ui/StageChoose/Star_Bg_left.png");
        bg.addChild(bgLeft);
        bgLeft.pos(-4, 43);
        var bgMid = new Laya.Image();
        bgMid.loadImage("ui/StageChoose/Star_Bg_mid.png");
        bg.addChild(bgMid);
        bgMid.pos(57, 11);
        var bgRight = new Laya.Image();
        bgRight.loadImage("ui/StageChoose/Star_Bg_right.png");
        bg.addChild(bgRight);
        bgRight.pos(141, 43);
        var dayGreen = new Laya.Image();
        dayGreen.loadImage("ui/StageChoose/Lable_Day_Green.png");
        bg.addChild(dayGreen);
        dayGreen.pos(54, 143);
        stageInfo.pos(40, 132);
        this.addChild(stageInfo);
        this.on(Laya.Event.CLICK, this, this.onClick, [stageSn]);
    };
    StageChooseInfo.prototype.onClick = function (stageSn) {
        this.removeSelf();
        //加载关卡
        var res = [
            { url: "res/atlas/stage.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/beijing.jpg", type: Laya.Loader.IMAGE },
            { url: "res/atlas/customer.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/sfx.json", type: Laya.Loader.ATLAS },
        ];
        new Loading(res, this.startStage, stageSn);
    };
    //关卡开始
    StageChooseInfo.prototype.startStage = function (context) {
        StageManager.createStage(context);
    };
    return StageChooseInfo;
}(ui.StageChooseInfoUI));
//# sourceMappingURL=StageChooseInfo.js.map