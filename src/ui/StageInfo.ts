class StageInfo extends ui.StageInfoUI{
    private confStage;

    constructor(confStage: any) {
        super();
        this.confStage = confStage;
        this.pause.on(Laya.Event.CLICK, this, this.onPause);
        this.day.index = confStage.sn;

        var barWidth = this.progressBar.width;
        this.starLeft.x = this.progressBar.x + barWidth * (confStage.onestar / confStage.threestar);
        this.starMid.x = this.progressBar.x + barWidth * (confStage.twostar / confStage.threestar);
        this.starRight.x = this.progressBar.x + barWidth;
    }

    private onPause() {
        var pauseInfo = new PauseInfo();
        this.parent.addChild(pauseInfo);
    }

    public scoreChange(score: number) {
        this.progressBar.value = score / this.confStage.threestar;

        if(this.confStage.onestar <= score) {
            this.starLeft.gray = false;
        }
        if(this.confStage.twostar <= score) {
            this.starMid.gray = false;
        }
        if(this.confStage.threestar <= score) {
            this.starRight.gray = false;
        }
    }
}