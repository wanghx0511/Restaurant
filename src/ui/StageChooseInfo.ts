class StageChooseInfo extends ui.StageChooseInfoUI{

    constructor() {
        super();
        this.close.on(Laya.Event.CLICK, this, this.onClose);
    }

    private onClose() {
        this.removeSelf();
    }
}