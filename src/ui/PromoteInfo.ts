class PromoteInfo extends ui.FurniturePromoteUI{

    private type : string;
    private sn : number;
    private upgrade : Upgrade;
    private configItem: ConfigItem = new ConfigItem();
    private configKitchenware : ConfigKitchenware = new ConfigKitchenware();
    private configPos : ConfigPos = new ConfigPos();

    constructor() {
        super();
        this.btn_upgrade.on("click", this, this.onUpgradeClick);
        this.close.on("click", this, this.onCloseClick);
    }

    public setParam(type : string, sn : number, upgrade : Upgrade) {
        this.type = type;
        this.sn = sn;
        this.upgrade = upgrade;
        var skin : string = "";
        if(type == "item"){
            var level = StageManager.data["item"][sn];
            var confItem = this.configItem.getBy("itemSn", sn, "level", level);
            if(confItem == null) return;
            skin = "stage/"+confItem.picture;
        }
        else if(type == "kitchenware") {
            var level = StageManager.data["kitchenware"][sn];
            var confKitchenware = this.configKitchenware.getBy("id", sn, "level", level);
            if(confKitchenware == null) return;
            skin = "stage/"+confKitchenware.picture;
        }
        
        this.item.skin = skin;
        
    }

    private onUpgradeClick(){
        if(this.type == "item") {
            var level = StageManager.data["item"][this.sn];
            var confItem = this.configItem.getBy("itemSn", this.sn, "level", level+1);
            var pos = this.configPos.getBy("type", 2, "itemSn", this.sn, "level", level+1);
            var item = this.parent.getChildByName("item"+this.sn) as Laya.Image;
            item.skin = "stage/" + confItem.picture;
        } 
        else if (this.type == "kitchenware") {
            var level = StageManager.data["kitchenware"][this.sn];
            var confKitchenware = this.configKitchenware.getBy("id", this.sn, "level", level+1);
            var pos = this.configPos.getBy("type", 1, "itemSn", this.sn, "level", level+1);
            var kitchenware = new Laya.Image();//eval("new " + pos.class + "(" + sn + "," + 1 + ")");
            kitchenware.loadImage("stage/" + confKitchenware.picture);
            kitchenware.pos(pos.x, pos.y);
            kitchenware.scale(pos.scaleX, pos.scaleY);
            kitchenware.pivot(pos.pivotX, pos.pivotY);
            var kitchenwareOld = this.parent.getChildByName("kitchenware_"+this.sn+"_"+level) as Laya.Image;
            kitchenwareOld.skin = "stage/" + confKitchenware.picture;
            this.parent.addChild(kitchenware);
        }
        this.removeSelf();
        this.upgrade.upgradeStatus(false);
    }

    private onCloseClick(){
        this.removeSelf();
        this.upgrade.upgradeStatus(false);
    }

}