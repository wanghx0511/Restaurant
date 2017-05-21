class PromoteInfo extends ui.FurniturePromoteUI{

    private type : string;
    private listName : string;
    private stageOneInfo : StageOneInfo;
    private configItem: ConfigItem = new ConfigItem();
    private configKitchenware : ConfigKitchenware = new ConfigKitchenware();

    constructor() {
        super();
        this.btn_upgrade.on("click", this, this.onUpgradeClick);
        this.close.on("click", this, this.onCloseClick);
    }

    public setParam(type : string, listName : string, stageOneInfo : StageOneInfo) {
        this.type = type;
        this.listName = listName;
        this.stageOneInfo = stageOneInfo;
        var skin : string = "";
        if(type == "item"){
            var confItem = this.configItem.getBy("itemSn", this.listName, "level", StageManager.data["item"][this.listName]);
            skin = "stage/"+confItem.picture;
        }
        else if(type == "kitchenware") {
            var confKitchenware = this.configKitchenware.getBy("id", this.listName, "level", StageManager.data["kitchenware"][this.listName]);
            skin = "stage/"+confKitchenware.picture;
        }
        
        this.item.skin = skin;
        
    }

    private onUpgradeClick(){
        if(this.type == "item") {
            var confItem = this.configItem.getBy("itemSn", this.listName, "level", StageManager.data["item"][this.listName] + 1);
            var img = this.stageOneInfo.getChildByName("item"+this.listName) as Laya.Image;
            // img.graphics.clear();
            img.skin = "stage/"+confItem.picture;
        } 

        else if(this.type == "kitchenware") {
            var confKitchenware = this.configKitchenware.getBy("id", this.listName, "level", StageManager.data["kitchenware"][this.listName] + 1);
            var obj = this.stageOneInfo.getChildByName("k"+this.listName) as Laya.List;
            
            var objList = obj._childs;
            var imgList : Laya.Image[] = [];
            var length = objList.length;
            for(var i = 0; i < length; i++){
                imgList.push(objList.pop());
            }
            
            // imgList.reverse();
            for (var img of imgList) {
                img.skin = "stage/"+confKitchenware.picture;
                img.visible = true;
                obj._childs.push(img);
            }
            var j = 0;
            obj._childs.reverse();
            // for(var object of obj._childs) {
            //     j++;
            //     if(j > (StageManager.data["kitchenware"][this.listName] + 2)) {
            //         object.visible = false;
            //     }
            // }
            
        }
        this.stageOneInfo.releaseUpdating();
        this.removeSelf();
    }

    private onCloseClick(){
        this.removeSelf();
        this.stageOneInfo.releaseUpdating();
    }

}