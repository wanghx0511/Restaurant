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
        for (var id in StageManager.data["kitchenware"]) {
            var confKitchenware = _this.configKitchenware.getBy("id", id, "level", StageManager.data["kitchenware"][id]);
            var obj = _this.getChildByName("k" + id);
            if (obj == null)
                continue;
            var objList = obj._childs;
            var imgList = [];
            var length = objList.length - StageManager.data["kitchenware"][id];
            objList.reverse();
            for (var i = 0; i < length; i++) {
                imgList.push(objList.pop());
            }
            for (var _i = 0, imgList_1 = imgList; _i < imgList_1.length; _i++) {
                var img = imgList_1[_i];
                img.visible = false;
                obj._childs.push(img);
            }
        }
        // this.on("click", this, this.onClosePanel);
        _this.i1.on("click", _this, _this.onI1Click);
        _this.i2.on("click", _this, _this.onI2Click);
        _this.i3.on("click", _this, _this.onI3Click);
        _this.i4.on("click", _this, _this.onI4Click);
        _this.i5.on("click", _this, _this.onI5Click);
        _this.i6.on("click", _this, _this.onI6Click);
        _this.i7.on("click", _this, _this.onI7Click);
        _this.k1.on("click", _this, _this.onK1Click);
        _this.k2.on("click", _this, _this.onK2Click);
        _this.k3.on("click", _this, _this.onK3Click);
        _this.k4.on("click", _this, _this.onK4Click);
        _this.k5.on("click", _this, _this.onK5Click);
        _this.k6.on("click", _this, _this.onK6Click);
        _this.k7.on("click", _this, _this.onK7Click);
        return _this;
    }
    StageOneInfo.prototype.onI1Click = function () {
        if (this.isUpgrading)
            return;
        this.isUpgrading = true;
        this.uiVar = "i1";
        this.i1.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "1", this, "i1");
        this.addChild(this.upgradeUI);
    };
    StageOneInfo.prototype.onI2Click = function () {
        if (this.isUpgrading)
            return;
        this.isUpgrading = true;
        this.uiVar = "i2";
        this.i2.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "2", this, "i2");
        this.addChild(this.upgradeUI);
    };
    StageOneInfo.prototype.onI3Click = function () {
        if (this.isUpgrading)
            return;
        this.isUpgrading = true;
        this.uiVar = "i3";
        this.i3.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "3", this, "i3");
        this.addChild(this.upgradeUI);
    };
    StageOneInfo.prototype.onI4Click = function () {
        if (this.isUpgrading)
            return;
        this.isUpgrading = true;
        this.uiVar = "i4";
        this.i4.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "4", this, "i4");
        this.addChild(this.upgradeUI);
    };
    StageOneInfo.prototype.onI5Click = function () {
        if (this.isUpgrading)
            return;
        this.isUpgrading = true;
        this.uiVar = "i5";
        this.i5.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "5", this, "i5");
        this.addChild(this.upgradeUI);
    };
    StageOneInfo.prototype.onI6Click = function () {
        if (this.isUpgrading)
            return;
        this.isUpgrading = true;
        this.uiVar = "i6";
        this.i6.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "6", this, "i6");
        this.addChild(this.upgradeUI);
    };
    StageOneInfo.prototype.onI7Click = function () {
        if (this.isUpgrading)
            return;
        this.isUpgrading = true;
        this.uiVar = "i7";
        this.i7.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "7", this, "i7");
        this.addChild(this.upgradeUI);
    };
    StageOneInfo.prototype.onK1Click = function () {
        if (this.isUpgrading)
            return;
        this.isUpgrading = true;
        this.uiVar = "k1";
        this.k1.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("kitchenware", "1", this, "k1");
        this.addChild(this.upgradeUI);
    };
    StageOneInfo.prototype.onK2Click = function () {
        if (this.isUpgrading)
            return;
        this.isUpgrading = true;
        this.uiVar = "k2";
        this.k2.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("kitchenware", "2", this, "k2");
        this.addChild(this.upgradeUI);
    };
    StageOneInfo.prototype.onK3Click = function () {
        if (this.isUpgrading)
            return;
        this.isUpgrading = true;
        this.uiVar = "k3";
        this.k3.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("kitchenware", "3", this, "k3");
        this.addChild(this.upgradeUI);
    };
    StageOneInfo.prototype.onK4Click = function () {
        if (this.isUpgrading)
            return;
        this.isUpgrading = true;
        this.uiVar = "k4";
        this.k4.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("kitchenware", "4", this, "k4");
        this.addChild(this.upgradeUI);
    };
    StageOneInfo.prototype.onK5Click = function () {
        if (this.isUpgrading)
            return;
        this.isUpgrading = true;
        this.uiVar = "k5";
        this.k5.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("kitchenware", "5", this, "k5");
        this.addChild(this.upgradeUI);
    };
    StageOneInfo.prototype.onK6Click = function () {
        if (this.isUpgrading)
            return;
        this.isUpgrading = true;
        this.uiVar = "k6";
        this.k6.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("kitchenware", "6", this, "k6");
        this.addChild(this.upgradeUI);
    };
    StageOneInfo.prototype.onK7Click = function () {
        if (this.isUpgrading)
            return;
        this.isUpgrading = true;
        this.uiVar = "k7";
        this.k7.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("kitchenware", "7", this, "k7");
        this.addChild(this.upgradeUI);
    };
    StageOneInfo.prototype.releaseUpdating = function () {
        this.isUpgrading = false;
    };
    StageOneInfo.prototype.onClosePanel = function () {
        console.log(111);
        if (!this.isUpgrading)
            return;
        console.log(222);
        this.upgradeUI.removeSelf();
        this.isUpgrading = false;
        eval("this." + this.uiVar + ".visible = true;");
    };
    return StageOneInfo;
}(ui.StageOneInfoUI));
//# sourceMappingURL=StageOneInfo.js.map