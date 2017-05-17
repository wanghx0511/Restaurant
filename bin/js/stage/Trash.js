var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Trash = (function (_super) {
    __extends(Trash, _super);
    function Trash() {
        var _this = _super.call(this) || this;
        _this.trashCan = new Laya.Sprite;
        _this.trashCan.loadImage("stage/lajitong.png");
        _this.addChild(_this.trashCan);
        _this.trashCan.on(Laya.Event.CLICK, _this, _this.onClick);
        return _this;
    }
    Trash.prototype.onClick = function (e) {
        //需要丢弃的食材
        var item = StageManager.stage.selected;
        if (item == null)
            return;
        this.abandon(item);
    };
    Trash.prototype.abandon = function (item) {
        //销毁
        item.destroy();
        this.trashCan.loadImage("stage/lajitong2.png");
        Laya.timer.once(800, this, this.onChangeImage);
        // console.log("trash animation")
        // this.trashAni = new Laya.Animation;
        // this.trashAni.interval = 200;
        // this.addChild(this.trashAni);
        // this.trashAni.play(0, false, "trashClose");
        // this.trashAni.destroy();
        //扣分
        //gameMain.game.gameInfo.minusMoney(item.getConf().destroycost);
    };
    Trash.prototype.onChangeImage = function () {
        this.trashCan.loadImage("stage/lajitong.png");
    };
    return Trash;
}(Laya.Sprite));
//# sourceMappingURL=Trash.js.map