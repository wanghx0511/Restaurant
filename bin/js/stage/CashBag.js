var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CashBag = (function (_super) {
    __extends(CashBag, _super);
    function CashBag(customer) {
        var _this = _super.call(this) || this;
        _this.customer = customer;
        _this.cashTipsPic = "stage/caopiao.png";
        _this.cashPic = "stage/caopiao.png";
        if (_this.customer.haveTips()) {
            _this.loadImage(_this.cashTipsPic);
        }
        else {
            _this.loadImage(_this.cashPic);
        }
        _this.on("click", _this, _this.onClick);
        return _this;
    }
    CashBag.prototype.onClick = function (e) {
        //有小费
        var tipAdd = 0;
        if (this.customer.haveTips()) {
            tipAdd = this.customer.moneyAdd * this.customer.confCustomer.tip / 100;
        }
        StageManager.stage.addScore(this.customer.moneyAdd, tipAdd);
        this.customer.mayDestory(1);
        this.destroy();
    };
    return CashBag;
}(Laya.Sprite));
//# sourceMappingURL=CashBag.js.map