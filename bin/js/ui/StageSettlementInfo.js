var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StageSettlementInfo = (function (_super) {
    __extends(StageSettlementInfo, _super);
    function StageSettlementInfo(stageSn, scoreTotal) {
        var _this = _super.call(this) || this;
        _this.scoreTotal = scoreTotal;
        _this.stageSn = stageSn;
        _this.init();
        return _this;
    }
    StageSettlementInfo.prototype.init = function () {
        //评星
        var stageConf = StageManager.stage.configStage.get(this.stageSn);
        if (stageConf.onestar <= this.scoreTotal) {
            this.victory.visible = true;
            var starLeft = this.victory.getChildByName("starLeft");
            starLeft.visible = true;
            if (stageConf.twostar <= this.scoreTotal) {
                var starMid = this.victory.getChildByName("starMid");
                starMid.visible = true;
            }
            if (stageConf.threestar <= this.scoreTotal) {
                var starRight = this.victory.getChildByName("starRight");
                starRight.visible = true;
            }
        }
        else {
            this.defeat.visible = true;
        }
        //进度条
        this.progress.value = this.scoreTotal / stageConf.threestar;
        console.log(this.progress.value);
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