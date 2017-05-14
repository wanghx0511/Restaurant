var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//盘子
var Plate = (function (_super) {
    __extends(Plate, _super);
    function Plate(id, level) {
        var _this = _super.call(this) || this;
        //装的食材
        _this.item = null;
        _this.configKitchenware = new ConfigKitchenware().getBy("id", id);
        _this.loadImage("stage/" + _this.configKitchenware.picture);
        return _this;
    }
    Plate.prototype.handle = function () {
        this.item = null;
    };
    Plate.prototype.getMakeItemSn = function () {
        return this.configKitchenware.itemSn;
    };
    return Plate;
}(Laya.Sprite));
//# sourceMappingURL=Plate.js.map