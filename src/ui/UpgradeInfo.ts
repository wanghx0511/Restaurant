class UpgradeInfo extends ui.UpgradeInfoUI{

    private type : string;
    private sn : number;
    private sUi : PreUpgradeInfo;
    private level : number;
    private promoteInfo : PromoteInfo;

    constructor() {
        super();
        this.upgrade.on("click", this, this.onUpgradeClick);
        this.strength.on("click", this, this.onStrengthClick);
        this.on("click" , this, this.onStrengthClick);
    }

    public setParam(type : string, sn : number, sUi : PreUpgradeInfo, level: number) {
        this.type = type;
        this.sn = sn;
        this.sUi = sUi;
        this.level = level;

        this.p1.visible = false;
        this.p2.visible = false;
        this.p3.visible = false;
        this.p4.visible = false;

        if(level >= 2){
            this.p1.visible = true;
        }

        if(level >= 3) {
            this.p2.visible = true;
        }

        if(level >= 4) {
            this.p3.visible = true;
        }

        if(level >= 5) {
            this.p4.visible = true;
        }

    }

    private onUpgradeClick(){
        this.promoteInfo = new PromoteInfo();
        this.promoteInfo.setParam(this.type, this.sn, this.sUi.upgrade, this.level, this.sUi);
        this.promoteInfo.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        this.promoteInfo.pivot(this.promoteInfo.width / 2, this.promoteInfo.height /2);
        this.parent.addChild(this.promoteInfo);
        this.sUi.visible = true;
        this.removeSelf();
    }

    private onStrengthClick(){
        this.sUi.upgrade.upgradeStatus(false);
        this.sUi.visible = true;
        this.removeSelf();
    }

}