class PreUpgradeInfo extends ui.PreUpgradeInfoUI{

    private type : string;
    private sn : number;
    private level : number;
    public upgrade : Upgrade;

    constructor() {
        super();
        this.on("click", this, this.onClick);
    }

    public setParam(type : string, sn : number, level : number, upgrade : Upgrade){
        this.type = type;
        this.sn = sn;
        this.level = level;
        this.upgrade = upgrade;
    }

    private onClick(){
        if(this.upgrade.getStatus()) return;
        this.visible = false;
        var upgradeInfo = new UpgradeInfo();
        upgradeInfo.setParam(this.type, this.sn, this);
        upgradeInfo.pos(this.x, this.y);
        upgradeInfo.pivot(this.pivotX, this.pivotY);
        this.parent.addChild(upgradeInfo);
        this.upgrade.upgradeStatus(true);
    }

}