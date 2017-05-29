class StageInfo extends ui.StageInfoUI{

    constructor(stageSn: number) {
        super();
        this.pause.on(Laya.Event.CLICK, this, this.onPause);
        this.day.index = stageSn;
    }

    private onPause() {
        var pauseInfo = new PauseInfo();
        this.parent.addChild(pauseInfo);
    }
}