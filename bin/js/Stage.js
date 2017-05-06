var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Stage = (function (_super) {
    __extends(Stage, _super);
    function Stage() {
        var _this = _super.call(this) || this;
        Emitter.register("nihao", _this.test, _this);
        return _this;
    }
    Stage.prototype.test = function () {
        console.log("nihao");
    };
    return Stage;
}(Laya.Node));
//# sourceMappingURL=Stage.js.map