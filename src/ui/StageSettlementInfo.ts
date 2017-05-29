class StageSettlementInfo extends ui.StageSettlementUI{
    private stageSn: number;

    constructor(stageSn: number) {
        super();
        this.stageSn = stageSn;
        this.init();
    }

    private init() {
        var stage = StageManager.stage;
        var stageConf = stage.configStage.get(this.stageSn);

        //进度条宽度
        var barWidth = this.progress.width;

        //评星
        var star = 0;
        if(stageConf.onestar <= stage.scoreTotal) {
            this.victory.visible = true;
            var starLeft = this.victory.getChildByName("starLeft") as Laya.Sprite;
            starLeft.visible = true;
            star = 1;

            this.starOne.x = this.progress.x + barWidth * (stageConf.onestar / stageConf.threestar);
            this.starOne.gray = false;
            if(stageConf.twostar <= stage.scoreTotal) {
                var starMid = this.victory.getChildByName("starMid") as Laya.Sprite;
                starMid.visible = true;
                star = 2;

                this.starTwo.x = this.progress.x + barWidth * (stageConf.twostar / stageConf.threestar);
                this.starTwo.gray = false;
            }
            if(stageConf.threestar <= stage.scoreTotal) {
                var starRight = this.victory.getChildByName("starRight") as Laya.Sprite;
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
        if(stageJson == null) {
            stageJson = {};
        }
        if(stageJson[this.stageSn] == null || stageJson[this.stageSn] < star) {
            stageJson[this.stageSn] = star;
            Laya.LocalStorage.setJSON("stage", stageJson);
        }

        //营业额
        this.money.text = stage.money + "";
        this.tip.text = stage.tip + "";
        this.manyi.text = stage.manyi + "";

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