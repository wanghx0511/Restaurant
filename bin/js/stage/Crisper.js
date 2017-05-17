var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Crisper = (function (_super) {
    __extends(Crisper, _super);
    function Crisper(id, level) {
        var _this = _super.call(this) || this;
        _this.item = null;
        _this.configKitchenware = new ConfigKitchenware().getBy("id", id, "level", level);
        _this.loadImage("stage/" + _this.configKitchenware.picture);
        return _this;
    }
    Crisper.prototype.addItem = function (item) {
        this.item = item;
        this.item.box.handle();
        this.item.pos(this.x, this.y);
        this.item.box = this;
    };
    Crisper.prototype.handle = function () {
        this.item = null;
    };
    return Crisper;
}(Laya.Sprite));
//# sourceMappingURL=Crisper.js.map