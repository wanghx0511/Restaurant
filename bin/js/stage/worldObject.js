var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var WorldObject = (function (_super) {
    __extends(WorldObject, _super);
    function WorldObject() {
        var _this = _super.call(this) || this;
        _this.startTime = 0;
        return _this;
    }
    WorldObject.prototype.onLoop = function () {
    };
    return WorldObject;
}(Laya.Sprite));
//# sourceMappingURL=worldObject.js.map