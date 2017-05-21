class UpgradeInfo extends ui.UpgradeInfoUI{

    private type : string;
    private listName : string;
    private stageOneInfo : StageOneInfo;
    private uiVar : string;
    private stageManager : StageManager = new StageManager();
    private promoteInfo : PromoteInfo;

    constructor() {
        super();
        this.upgrade.on("click", this, this.onUpgradeClick);
        this.strength.on("click", this, this.onStrengthClick);
        this.info.on("click", this, this.onInfoClick);
    }

    public setParam(type : string, listName : string, stageOneInfo : StageOneInfo, uiVar : string) {
        this.type = type;
        this.listName = listName;
        this.stageOneInfo = stageOneInfo;
        this.uiVar = uiVar;
    }

    private onUpgradeClick(){
        this.promoteInfo = new PromoteInfo();
        this.promoteInfo.setParam(this.type, this.listName, this.stageOneInfo);
        this.promoteInfo.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        this.promoteInfo.pivot(this.promoteInfo.width / 2, this.promoteInfo.height /2);
        this.stageOneInfo.addChild(this.promoteInfo);
        eval("this.stageOneInfo." + this.uiVar + ".visible = true;");
        this.removeSelf();
    }

    private onStrengthClick(){

    }

    private onInfoClick(){
        this.removeSelf();
        eval("this.stageOneInfo." + this.uiVar + ".visible = true;");
        this.stageOneInfo.releaseUpdating();
    }

}