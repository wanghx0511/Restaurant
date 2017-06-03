class PreUpgradeInfo extends ui.PreUpgradeInfoUI{

    private type : string;
    private sn : number;
    private level : number;
    public upgrade : Upgrade;

    constructor() {
        super();
        this.on("click", this, this.onClick);
    }

    public setUpgrade(upgrade : Upgrade) {
        this.upgrade = upgrade;
    }

    public setParam(type : string, sn : number, level : number){
        this.type = type;
        this.sn = sn;
        this.level = level;
        this.p1.visible = false;
        this.p2.visible = false;
        this.p3.visible = false;

        if(level >= 2){
            this.p1.visible = true;
        }

        if(level >= 3) {
            this.p2.visible = true;
        }

        if(level >= 4) {
            this.p3.visible = true;
        }

    }

    private onClick(){
        if(this.upgrade.getStatus()) return;
        this.visible = false;
        var upgradeInfo = new UpgradeInfo();
        upgradeInfo.setParam(this.type, this.sn, this, this.level);
        upgradeInfo.pos(this.x, this.y);
        upgradeInfo.pivot(this.pivotX, this.pivotY);
        this.parent.addChild(upgradeInfo);
        this.upgrade.upgradeStatus(true);
    }

}