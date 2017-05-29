class StageInfo extends ui.stageInfoUI{

    constructor() {
        super();
        this.pause.on(Laya.Event.CLICK, this, this.onPause);
    }

    private onPause() {
        var pauseInfo = new PauseInfo();
        this.parent.addChild(pauseInfo);
    }
}