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
        // this.on("click", this, this.onClosePanel);
        _this.i1.on("click", _this, _this.onI1Click);
        _this.i2.on("click", _this, _this.onI2Click);
        _this.i3.on("click", _this, _this.onI3Click);
        _this.i4.on("click", _this, _this.onI4Click);
        _this.i5.on("click", _this, _this.onI5Click);
        _this.i6.on("click", _this, _this.onI5Click);
        _this.i7.on("click", _this, _this.onI5Click);
        return _this;
    }
    StageOneInfo.prototype.onI1Click = function () {
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
        this.isUpgrading = true;
        this.uiVar = "i2";
        this.i1.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "2", this, "i2");
        this.addChild(this.upgradeUI);
    };
    StageOneInfo.prototype.onI3Click = function () {
        this.isUpgrading = true;
        this.uiVar = "i3";
        this.i1.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "3", this, "i3");
        this.addChild(this.upgradeUI);
    };
    StageOneInfo.prototype.onI4Click = function () {
        this.isUpgrading = true;
        this.uiVar = "i4";
        this.i1.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "4", this, "i4");
        this.addChild(this.upgradeUI);
    };
    StageOneInfo.prototype.onI5Click = function () {
        this.isUpgrading = true;
        this.uiVar = "i5";
        this.i1.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "5", this, "i5");
        this.addChild(this.upgradeUI);
    };
    StageOneInfo.prototype.onI6Click = function () {
        this.isUpgrading = true;
        this.uiVar = "i6";
        this.i1.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "6", this, "i6");
        this.addChild(this.upgradeUI);
    };
    StageOneInfo.prototype.onI7Click = function () {
        this.isUpgrading = true;
        this.uiVar = "i7";
        this.i1.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "7", this, "i7");
        this.addChild(this.upgradeUI);
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