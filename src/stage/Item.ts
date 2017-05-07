class Item extends Laya.Sprite{
    //配置
    private confItem: any;
    //是否出售状态
    public state: boolean = false; 
    public box: any;
    //加工进度0: 生， 1：熟 2：焦
    public progress: number;

    constructor(confItem: any) {
        super();
        this.confItem = confItem;
        this.loadImage("atlas/" + this.confItem.picture);

        //注册点击事件
        this.on(Laya.Event.CLICK, this, this.onClick);
    }

    public getConf() : any{
        return this.confItem;
    }

    //道具点击
    private onClick(e: Laya.Event) {
        //已经取出的道具，并且是生的
        if(this.box != null && this.progress == 0) return;
        //还是生的
        if(this.progress == 0){
            return;
        }
        //熟了直接找
        else if(this.progress == 1) {
            var plates = gameMain.game.plates;
            for(var i = 0; i < plates.length; i++) {
                var plate: Plate = plates[i];
                if(plate.item != null && this.meger(plate.item)) {
                    return;
                }
            }
        }
        //焦了直接扔垃圾桶
        else if(this.progress == 2) {
            gameMain.game.trashCanObj.abandon(this);
            return;
        }

        //已经选中的道具是否能合当前道具合成
        var selectedItem: Item = gameMain.game.selected;
        if(selectedItem != null) {
            selectedItem.alpha = 1;
        }

        //新的道具
        if(!this.state) {
            //找到空盘子放进去
            if(this.confItem.ripe) {
                var plates = gameMain.game.plates;
                for(var i = 0; i < plates.length; i++) {
                    var plate: Plate = plates[i];
                    if(plate.item == null && plate.getMakeItemSn() == this.confItem.itemSn) {
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
            //找个锅做熟
            else {
                var pots = gameMain.game.pots;
                for(var i = 0; i < pots.length; i++) {
                    var pot: Pot = pots[i];
                    if(pot.item == null && pot.getMakeItemSn() == this.confItem.itemSn) {
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
        //已经摆上柜台的道具点击选中
        else {
            this.alpha = 0.5;
            gameMain.game.selected = this;
        }
    }

    public destroy(): void {
        super.destroy();
        gameMain.game.selected = null;
        if(this.box == null) return;
        this.box.handle();
        gameMain.game.selected = null;
    }

    //道具合成
    private meger(item: Item): boolean {
        if(item.progress != 1) return;
        
        var itemSn = item.confItem.itemSn;
        //此道具是否可与本对象合成
        var configItemMerge: ConfigItemMerge = new ConfigItemMerge();
        var config = configItemMerge.getBy("itemSn", itemSn, "part", this.confItem.itemSn);

        //匹配可以合成
        if(config != null) {
            this.destroy();
            item.graphics.clear();
            var configItem: ConfigItem = new ConfigItem();
            item.confItem = configItem.getBy("itemSn", config.mergeId, "level", 1);
            item.loadImage("atlas/" + item.confItem.picture);
            return true;
        }
        return false;
    }
} 