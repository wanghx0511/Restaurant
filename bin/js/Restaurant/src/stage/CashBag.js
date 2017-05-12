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
        _this.cashTipsPic = "atlas/lajitong.png";
        _this.cashPic = "atlas/lajitong2.png";
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
        var total = this.customer.moneyAdd + tipAdd;
        //gameMain.game.gameInfo.addMoney(total);
        this.customer.mayDestory(1);
        this.destroy();
    };
    return CashBag;
}(Laya.Sprite));
//# sourceMappingURL=CashBag.js.map