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
        //评星
        var stageConf = StageManager.stage.configStage.get(this.stageSn);
        if(stageConf.onestar <= this.scoreTotal) {
            this.victory.visible = true;
            var starLeft = this.victory.getChildByName("starLeft") as Laya.Sprite;
            starLeft.visible = true;
            if(stageConf.twostar <= this.scoreTotal) {
                var starMid = this.victory.getChildByName("starMid") as Laya.Sprite;
                starMid.visible = true;
            }
            if(stageConf.threestar <= this.scoreTotal) {
                var starRight = this.victory.getChildByName("starRight") as Laya.Sprite;
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
        if(stageConf == null) {
            this.next.visible = false;
        }
        else {
            this.next.on(Laya.Event.CLICK, this, this.onNext);
        }
    }

    private onClose() {
        StageManager.stage.removeSelf();
    }

    private onAgain() {
        StageManager.stage.removeSelf();
        StageManager.createStage(this.stageSn);
    }

    private onNext() {
        StageManager.stage.removeSelf();
        StageManager.createStage(this.stageSn + 1);
    }
}