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
        // //场景图
        // var bg = new Laya.Sprite();
        // bg.loadImage("res/atlas/beijing.jpg");
        // bg.pos(-488, 0);
        // this.addChild(bg);
        // //操作台
        // var caozuotai = new Laya.Sprite();
        // caozuotai.loadImage("res/atlas/caozuotai.png");
        // caozuotai.pos(-275, 490);
        // this.addChild(caozuotai);
        //主界面
        var mainTown = new MainTown();
        _this.addChild(mainTown);
        //测试升级用代码
        // var upgrade = new Upgrade(1);
        // this.addChild(upgrade);
        //添加UI
        var mainTownInfo = new MainTownInfo();
        _this.mainTownInfo = mainTownInfo;
        _this.addChild(_this.mainTownInfo);
        //事件
        _this.mainTownInfo.start.on(Laya.Event.CLICK, _this, _this.onStageClick);
        _this.mainTownInfo.upgrade.on(Laya.Event.CLICK, _this, _this.onUpgradeClick);
        //临时测试，在点设置的时候清数据
        _this.mainTownInfo.setting.on(Laya.Event.CLICK, _this, _this.onClearLocalData);
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
    StageMain.prototype.onUpgradeClick = function (e) {
        var upgrade = new Upgrade(1);
        this.addChild(upgrade);
    };
    StageMain.prototype.onClearLocalData = function (e) {
        Laya.LocalStorage.clear();
        var mainTown = this.getChildByName("mainTown");
        mainTown.initImg();
    };
    return StageMain;
}(Laya.Sprite));
//# sourceMappingURL=StageMain.js.map