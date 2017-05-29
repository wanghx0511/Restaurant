var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PromoteInfo = (function (_super) {
    __extends(PromoteInfo, _super);
    function PromoteInfo() {
        var _this = _super.call(this) || this;
        _this.configItem = new ConfigItem();
        _this.configKitchenware = new ConfigKitchenware();
        _this.btn_upgrade.on("click", _this, _this.onUpgradeClick);
        _this.close.on("click", _this, _this.onCloseClick);
        return _this;
    }
    PromoteInfo.prototype.setParam = function (type, sn) {
        this.type = type;
        var skin = "";
        if (type == "item") {
            var confItem = this.configItem.getBy("itemSn", sn, "level", StageManager.data["item"][sn]);
            skin = "stage/" + confItem.picture;
        }
        else if (type == "kitchenware") {
            var confKitchenware = this.configKitchenware.getBy("id", sn, "level", StageManager.data["kitchenware"][sn]);
            skin = "stage/" + confKitchenware.picture;
        }
        this.item.skin = skin;
    };
    PromoteInfo.prototype.onUpgradeClick = function () {
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
    };
    PromoteInfo.prototype.onCloseClick = function () {
        this.removeSelf();
    };
    return PromoteInfo;
}(ui.FurniturePromoteUI));
//# sourceMappingURL=PromoteInfo.js.map