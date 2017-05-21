class StageSettlementInfo extends ui.StageSettlementUI{
    //总分
    private scoreTotal: number;
    private stageSn: number;

    constructor(stageSn: number, scoreTotal: number) {
        super();
        this.scoreTotal = scoreTotal;
        this.stageSn = stageSn;
        this.init();
    }

    private init() {
        var stageConf = StageManager.stage.configStage.get(this.stageSn);
        if(stageConf.onestar < this.scoreTotal) {
            this.victory.visible = true;
        }
        else {
            this.defeat.visible = true;
        }
        this.back.on(Laya.Event.CLICK, this, this.onClose);
    }

    private onClose() {
        StageManager.stage.removeSelf();
    }
}