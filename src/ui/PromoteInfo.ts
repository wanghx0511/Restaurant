class PromoteInfo extends ui.FurniturePromoteUI{

    private type : string;
    private sn : number;
    private configItem: ConfigItem = new ConfigItem();
    private configKitchenware : ConfigKitchenware = new ConfigKitchenware();

    constructor() {
        super();
        this.btn_upgrade.on("click", this, this.onUpgradeClick);
        this.close.on("click", this, this.onCloseClick);
    }

    public setParam(type : string, sn : number) {
        this.type = type;
        var skin : string = "";
        if(type == "item"){
            var confItem = this.configItem.getBy("itemSn", sn, "level", StageManager.data["item"][sn]);
            skin = "stage/"+confItem.picture;
        }
        else if(type == "kitchenware") {
            var confKitchenware = this.configKitchenware.getBy("id", sn, "level", StageManager.data["kitchenware"][sn]);
            skin = "stage/"+confKitchenware.picture;
        }
        
        this.item.skin = skin;
        
    }

    private onUpgradeClick(){


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