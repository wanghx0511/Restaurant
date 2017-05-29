class PromoteInfo extends ui.FurniturePromoteUI{

    private type : string;
    private sn : number;
    private configItem: ConfigItem = new ConfigItem();
    private configKitchenware : ConfigKitchenware = new ConfigKitchenware();
    private configPos : ConfigPos = new ConfigPos();

    constructor() {
        super();
        this.btn_upgrade.on("click", this, this.onUpgradeClick);
        this.close.on("click", this, this.onCloseClick);
    }

    public setParam(type : string, sn : number) {
        this.type = type;
        this.sn = sn;
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
            // var item = new Laya.Image();
            // item.loadImage("stage/" + confItem.picture);
            // item.pos(pos.x, pos.y);
            // item.scale(pos.scaleX, pos.scaleY);
            // item.pivot(pos.pivotX, pos.pivotY);
            // this.parent.addChild(item);
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

        // if(this.type == "item") {
        //     var confItem = this.configItem.getBy("itemSn", this.listName, "level", StageManager.data["item"][this.listName] + 1);
        //     var img = this.stageOneInfo.getChildByName("item"+this.listName) as Laya.Image;
        //     // img.graphics.clear();
        //     img.skin = "stage/"+confItem.picture;
        // } 

        // else if(this.type == "kitchenware") {
        //     var confKitchenware = this.configKitchenware.getBy("id", this.listName, "level", StageManager.data["kitchenware"][this.listName] + 1);
        //     var obj = this.stageOneInfo.getChildByName("k"+this.listName) as Laya.List;
            
        //     var objList = obj._childs;
        //     var imgList : Laya.Image[] = [];
        //     var length = objList.length;
        //     for(var i = 0; i < length; i++){
        //         imgList.push(objList.pop());
        //     }
            
        //     // imgList.reverse();
        //     for (var img of imgList) {
        //         img.skin = "stage/"+confKitchenware.picture;
        //         img.visible = true;
        //         obj._childs.push(img);
        //     }
        //     var j = 0;
        //     obj._childs.reverse();
            
        // }
        // this.stageOneInfo.releaseUpdating();
        // this.removeSelf();


    }

    private onCloseClick(){
        this.removeSelf();
        
    }

}