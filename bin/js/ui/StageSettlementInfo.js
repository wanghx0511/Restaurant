var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StageSettlementInfo = (function (_super) {
    __extends(StageSettlementInfo, _super);
    function StageSettlementInfo(stageSn) {
        var _this = _super.call(this) || this;
        _this.stageSn = stageSn;
        _this.init();
        return _this;
    }
    StageSettlementInfo.prototype.init = function () {
        var stage = StageManager.stage;
        var stageConf = stage.configStage.get(this.stageSn);
        //进度条宽度
        var barWidth = this.progress.width;
        //评星
        var star = 0;
        if (stageConf.onestar <= stage.scoreTotal) {
            this.victory.visible = true;
            var starLeft = this.victory.getChildByName("starLeft");
            starLeft.visible = true;
            star = 1;
            this.starOne.x = this.progress.x + barWidth * (stageConf.onestar / stageConf.threestar);
            this.starOne.gray = false;
            if (stageConf.twostar <= stage.scoreTotal) {
                var starMid = this.victory.getChildByName("starMid");
                starMid.visible = true;
                star = 2;
                this.starTwo.x = this.progress.x + barWidth * (stageConf.twostar / stageConf.threestar);
                this.starTwo.gray = false;
            }
            if (stageConf.threestar <= stage.scoreTotal) {
                var starRight = this.victory.getChildByName("starRight");
                starRight.visible = true;
                star = 3;
                this.starThree.x = this.progress.x + barWidth;
                this.starThree.gray = false;
            }
        }
        else {
            this.defeat.visible = true;
        }
        //存储通关记录
        var stageJson = Laya.LocalStorage.getJSON("stage");
        if (stageJson == null) {
            stageJson = {};
        }
        stageJson[this.stageSn] = star;
        Laya.LocalStorage.setJSON("stage", stageJson);
        //营业额
        this.money.text = stage.money + "";
        this.tip.text = stage.tip + "";
        this.manyi.text = stage.manyi + "";
        //var list: number[] = eval(stageConf.customerSn);
        var list = JSON.parse(stageConf.customerSn);
        this.bumanyi.text = list.length - stage.manyi + "";
        //进度条
        this.progress.value = stage.scoreTotal / stageConf.threestar;
        //返回
        this.back.on(Laya.Event.CLICK, this, this.onClose);
        //再来一次
        this.again.on(Laya.Event.CLICK, this, this.onAgain);
        this.retry.on(Laya.Event.CLICK, this, this.onAgain);
        stageConf = StageManager.stage.configStage.get(this.stageSn + 1);
        //下一关
        if (stageConf == null) {
            this.next.visible = false;
        }
        else {
            this.next.on(Laya.Event.CLICK, this, this.onNext);
        }
    };
    StageSettlementInfo.prototype.onClose = function () {
        StageManager.stage.removeSelf();
    };
    StageSettlementInfo.prototype.onAgain = function () {
        StageManager.stage.removeSelf();
        StageManager.createStage(this.stageSn);
    };
    StageSettlementInfo.prototype.onNext = function () {
        StageManager.stage.removeSelf();
        StageManager.createStage(this.stageSn + 1);
    };
    return StageSettlementInfo;
}(ui.StageSettlementUI));
//# sourceMappingURL=StageSettlementInfo.js.map