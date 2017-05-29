class PauseInfo extends ui.PauseInfoUI{

    constructor() {
        super();

        this.close.on(Laya.Event.CLICK, this, this.onClose);
        this.continue.on(Laya.Event.CLICK, this, this.onClose);
        this.quit.on(Laya.Event.CLICK, this, this.onClose);

        this.timer.once(100, this, this.onAdded);
    }

    private onClose() {
        Laya.timer.scale = 1;
        this.removeSelf();
    }

    private onAdded() {
        Laya.timer.scale = 0;
    }
}