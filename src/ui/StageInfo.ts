class StageInfo extends ui.StageInfoUI{

    constructor() {
        super();
        this.pause.on(Laya.Event.CLICK, this, this.onPause);
    }

    private onPause() {
        var pauseInfo = new PauseInfo();
        this.parent.addChild(pauseInfo);
    }
}