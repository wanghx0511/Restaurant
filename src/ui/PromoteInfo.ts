class PromoteInfo extends ui.FurniturePromoteUI{

    private type : string;
    private listName : string;
    private stageOneInfo : StageOneInfo;
    private configItem: ConfigItem = new ConfigItem();

    constructor() {
        super();
        this.btn_upgrade.on("click", this, this.onUpgradeClick);
    }

    public setParam(type : string, listName : string, stageOneInfo : StageOneInfo) {
        this.type = type;
        this.listName = listName;
        this.stageOneInfo = stageOneInfo;
    }

    private onUpgradeClick(){
        if(this.type == "item") {
            var confItem = this.configItem.getBy("itemSn", this.listName, "level", StageManager.data["item"][this.listName]);
            var img = this.stageOneInfo.getChildByName("item"+this.listName) as Laya.Image;
            img.graphics.clear();
            img.loadImage("stage/"+confItem.picture1);
        }
        this.removeSelf();
    }

}