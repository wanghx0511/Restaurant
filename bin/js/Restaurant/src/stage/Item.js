var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Item = (function (_super) {
    __extends(Item, _super);
    function Item(confItem) {
        var _this = _super.call(this) || this;
        //是否出售状态
        _this.state = false;
        _this.confItem = confItem;
        _this.loadImage("atlas/" + _this.confItem.picture);
        //注册点击事件
        _this.on(Laya.Event.CLICK, _this, _this.onClick);
        return _this;
    }
    Item.prototype.getConf = function () {
        return this.confItem;
    };
    //道具点击
    Item.prototype.onClick = function (e) {
        //已经取出的道具，并且是生的
        if (this.box != null && this.progress == 0)
            return;
        //还是生的
        if (this.progress == 0) {
            return;
        }
        else if (this.progress == 1) {
            var plates = StageManager.stage.plates;
            for (var i = 0; i < plates.length; i++) {
                var plate = plates[i];
                if (plate.item != null && this.meger(plate.item)) {
                    return;
                }
            }
        }
        else if (this.progress == 2) {
            StageManager.stage.trashCanObj.abandon(this);
            return;
        }
        //已经选中的道具是否能合当前道具合成
        var selectedItem = StageManager.stage.selected;
        if (selectedItem != null) {
            selectedItem.alpha = 1;
        }
        //新的道具
        if (!this.state) {
            //找到空盘子放进去
            if (this.confItem.ripe) {
                var plates = StageManager.stage.plates;
                for (var i = 0; i < plates.length; i++) {
                    var plate = plates[i];
                    if (plate.item == null && plate.getMakeItemSn() == this.confItem.itemSn) {
                        var item = new Item(this.confItem);
                        item.state = true;
                        item.box = plate;
                        item.progress = 1;
                        item.pos(plate.x + 30, plate.y + 60);
                        Laya.stage.addChild(item);
                        plate.item = item;
                        break;
                    }
                }
            }
            else {
                var pots = StageManager.stage.pots;
                for (var i = 0; i < pots.length; i++) {
                    var pot = pots[i];
                    if (pot.item == null && pot.getMakeItemSn() == this.confItem.itemSn) {
                        var item = new Item(this.confItem);
                        item.state = true;
                        item.box = pot;
                        item.progress = 0;
                        Laya.stage.addChild(item);
                        pot.item = item;
                        pot.machining();
                        break;
                    }
                }
            }
        }
        else {
            this.alpha = 0.5;
            StageManager.stage.selected = this;
        }
    };
    Item.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        StageManager.stage.selected = null;
        if (this.box == null)
            return;
        this.box.handle();
        StageManager.stage.selected = null;
    };
    //道具合成
    Item.prototype.meger = function (item) {
        if (item.progress != 1)
            return;
        var itemSn = item.confItem.itemSn;
        //此道具是否可与本对象合成
        var configItemMerge = new ConfigItemMerge();
        var config = configItemMerge.getBy("itemSn", itemSn, "part", this.confItem.itemSn);
        //匹配可以合成
        if (config != null) {
            this.destroy();
            item.graphics.clear();
            var configItem = new ConfigItem();
            item.confItem = configItem.getBy("itemSn", config.mergeId, "level", 1);
            item.loadImage("atlas/" + item.confItem.picture);
            return true;
        }
        return false;
    };
    return Item;
}(Laya.Sprite));
//# sourceMappingURL=Item.js.map