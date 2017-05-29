class UpgradeInfo extends ui.UpgradeInfoUI{

    private type : string;
    private sn : number;
    private sUi : PreUpgradeInfo;
    private promoteInfo : PromoteInfo;

    constructor() {
        super();
        this.upgrade.on("click", this, this.onUpgradeClick);
        this.strength.on("click", this, this.onStrengthClick);
    }

    public setParam(type : string, sn : number, sUi : PreUpgradeInfo) {
        this.type = type;
        this.sn = sn;
        this.sUi = sUi;
    }

    private onUpgradeClick(){
        this.promoteInfo = new PromoteInfo();
        this.promoteInfo.setParam(this.type, this.sn);
        this.promoteInfo.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        this.promoteInfo.pivot(this.promoteInfo.width / 2, this.promoteInfo.height /2);
        this.parent.addChild(this.promoteInfo);
        this.sUi.visible = true;
        this.removeSelf();
    }

    private onStrengthClick(){
        this.sUi.visible = true;
        this.removeSelf();
    }

}