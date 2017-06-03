var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CoffeeMachine = (function (_super) {
    __extends(CoffeeMachine, _super);
    function CoffeeMachine(id, level) {
        var _this = _super.call(this) || this;
        _this.item = null;
        _this.configKitchenware = new ConfigKitchenware().getBy("id", id, "level", level);
        _this.loadImage("stage/" + _this.configKitchenware.picture);
        Laya.Animation.createFrames("res/atlas/sfx.json", "sfx");
        //注册点击事件
        _this.on(Laya.Event.CLICK, _this, _this.onClick);
        _this.on(Laya.Event.ADDED, _this, _this.onAdded);
        return _this;
    }
    CoffeeMachine.prototype.onAdded = function () {
        if (!this.configKitchenware.automatic)
            return;
        this.handle();
    };
    CoffeeMachine.prototype.handle = function () {
        this.createAnimation();
        Laya.timer.once(this.configKitchenware.cooldown * 1000, this, this.finish);
    };
    CoffeeMachine.prototype.finish = function () {
        //产出道具
        var itemSn = this.configKitchenware.itemSn;
        var configItem = new ConfigItem();
        var confItem = configItem.getBy("itemSn", itemSn, "level", 1);
        var item = new Item(confItem);
        this.item = item;
        item.box = this;
        item.state = true;
        item.pos(this.x, this.y);
        this.parent.addChild(item);
        this.ani.clear();
    };
    CoffeeMachine.prototype.onClick = function (e) {
        //自动的无需点击
        if (this.configKitchenware.automatic)
            return;
        if (this.item != null)
            return;
        this.handle();
    };
    CoffeeMachine.prototype.createAnimation = function () {
        this.ani = new Laya.Animation();
        this.ani.interval = 300; // 设置播放间隔（单位：毫秒）
        this.addChild(this.ani);
        this.ani.play(0, true, "sfx"); // 播放图集动画
        this.ani.pos(48, 156);
    };
    return CoffeeMachine;
}(Laya.Sprite));
//# sourceMappingURL=CoffeeMachine.js.map