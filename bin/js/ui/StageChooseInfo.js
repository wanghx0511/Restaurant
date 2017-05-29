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
        var initX = 53;
        var initY = 132;
        for (var _i = 0, confJson_1 = confJson; _i < confJson_1.length; _i++) {
            var conf = confJson_1[_i];
            this.createStageInfo(conf.sn, initX, initY);
            initX += 250;
            i++;
            if (i % 5 == 0) {
                initX = 53;
                initY += 230;
            }
        }
    };
    StageChooseInfo.prototype.createStageInfo = function (stageSn, initX, initY) {
        var stageInfo;
        var stageJson = Laya.LocalStorage.getJSON("stage");
        if (stageJson == null)
            stageJson = {};
        if (stageSn == 1 || stageJson[stageSn - 1] != null) {
            stageInfo = new ui.StageOpenUI();
            if (stageJson[stageSn] != null) {
                if (stageJson[stageSn] >= 1) {
                    stageInfo.starLeft.visible = true;
                }
                if (stageJson[stageSn] >= 2) {
                    stageInfo.starMid.visible = true;
                }
                if (stageJson[stageSn] >= 3) {
                    stageInfo.starRight.visible = true;
                }
            }
            stageInfo.on(Laya.Event.CLICK, this, this.onClick, [stageSn]);
        }
        else {
            stageInfo = new ui.StageCloseUI();
        }
        stageInfo.stageSn.index = stageSn;
        stageInfo.pos(initX, initY);
        stageInfo.size(stageInfo.width, stageInfo.height);
        this.addChild(stageInfo);
    };
    StageChooseInfo.prototype.onClick = function (stageSn) {
        this.removeSelf();
        //加载关卡
        var res = [
            { url: "res/atlas/stage.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/beijing.jpg", type: Laya.Loader.IMAGE },
            { url: "res/atlas/customer.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/sfx.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ui/StageSettlement.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ui/Pause.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ui/Level.json", type: Laya.Loader.ATLAS },
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