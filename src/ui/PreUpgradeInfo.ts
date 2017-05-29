class PreUpgradeInfo extends ui.PreUpgradeInfoUI{

    private type : string;
    private sn : number;
    private level : number;

    constructor() {
        super();
        this.on("click", this, this.onClick);
    }

    public setParam(type : string, sn : number, level : number){
        this.type = type;
        this.sn = sn;
        this.level = level;
    }

    private onClick(){
        this.visible = false;
        var upgradeInfo = new UpgradeInfo();
        upgradeInfo.setParam(this.type, this.sn, this);
        upgradeInfo.pos(this.x, this.y);
        upgradeInfo.pivot(this.pivotX, this.pivotY);
        this.parent.addChild(upgradeInfo);
    }

}