var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StageOneInfo = (function (_super) {
    __extends(StageOneInfo, _super);
    function StageOneInfo() {
        var _this = _super.call(this) || this;
        _this.isUpgrading = false;
        _this.configKitchenware = new ConfigKitchenware();
        return _this;
        // for(var id in StageManager.data["kitchenware"]){
        //     var confKitchenware = this.configKitchenware.getBy("id", id, "level", StageManager.data["kitchenware"][id]);
        //     var obj = this.getChildByName("k"+id) as Laya.List;
        //     if(obj == null) continue;
        //     var objList = obj._childs;
        //     var imgList : Laya.Image[] = [];
        //     var length = objList.length - StageManager.data["kitchenware"][id];
        //     objList.reverse();
        //     for(var i = 0; i < length ; i++){
        //         imgList.push(objList.pop());
        //     }
        //     for(var img of imgList) {
        //         img.visible = false;
        //         obj._childs.push(img);
        //     }
        // }
        // this.on("click", this, this.onClosePanel);
        // this.i1.on("click", this, this.onI1Click);
        // this.i2.on("click", this, this.onI2Click);
        // this.i3.on("click", this, this.onI3Click);
        // this.i4.on("click", this, this.onI4Click);
        // this.i5.on("click", this, this.onI5Click);
        // this.i6.on("click", this, this.onI6Click);
        // this.i7.on("click", this, this.onI7Click);
        // this.k1.on("click", this, this.onK1Click);
        // this.k2.on("click", this, this.onK2Click);
        // this.k3.on("click", this, this.onK3Click);
        // this.k4.on("click", this, this.onK4Click);
        // this.k5.on("click", this, this.onK5Click);
        // this.k6.on("click", this, this.onK6Click);
        // this.k7.on("click", this, this.onK7Click);
    }
    return StageOneInfo;
}(ui.StageOneInfoUI));
//# sourceMappingURL=StageOneInfo.js.map