var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pot = (function (_super) {
    __extends(Pot, _super);
    function Pot(id, level) {
        var _this = _super.call(this) || this;
        //锅里正在加工的食材
        _this.item = null;
        _this.configKitchenware = new ConfigKitchenware().getBy("id", id, "level", level);
        _this.loadImage("stage/" + _this.configKitchenware.picture);
        return _this;
    }
    //开始加工
    Pot.prototype.machining = function () {
        //设定加工时间
        this.alpha = 1;
        Laya.timer.once(this.configKitchenware.cooldown * 1000, this, this.updateProgress, [1]);
    };
    Pot.prototype.updateProgress = function (progress) {
        if (this.item == null)
            return;
        this.item.progress = progress;
        this.item.graphics.clear();
        //熟了
        if (progress == 1) {
            this.item.loadImage("stage/" + this.item.getConf().picture1);
            //烧焦定时
            Laya.timer.once(this.configKitchenware.singetime * 1000, this, this.updateProgress, [2]);
        }
        else if (progress == 2) {
            this.item.loadImage("stage/" + this.item.getConf().picture2);
        }
    };
    Pot.prototype.getMakeItemSn = function () {
        return this.configKitchenware.itemSn;
    };
    Pot.prototype.handle = function () {
        this.item = null;
        this.clearTimer(this, this.updateProgress);
    };
    return Pot;
}(Laya.Sprite));
//# sourceMappingURL=Pot.js.map