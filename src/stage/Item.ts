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
        this.loadImage("stage/" + this.confItem.picture);

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
            var plates = StageManager.stage.plates;
            for(var i = 0; i < plates.length; i++) {
                var plate: Plate = plates[i];
                if(plate.item != null && this.meger(plate.item)) {
                    return;
                }
            }
            if(this.box instanceof Pot) {
                var crispers = StageManager.stage.crisper;
                for(var i = 0; i < crispers.length; i++) {
                    var crisper: Crisper = crispers[i];
                    if(crisper.item == null) {
                        crisper.addItem(this);
                        return;
                    }
                }
            }
        }
        //焦了直接扔垃圾桶
        else if(this.progress == 2) {
            StageManager.stage.trashCanObj.abandon(this);
            return;
        }

        //已经选中的道具是否能合当前道具合成
        var selectedItem: Item = StageManager.stage.selected;
        if(selectedItem != null) {
            selectedItem.alpha = 1;
        }

        //新的道具
        if(!this.state) {
            if(this.confItem.ripe) {
                var plates = StageManager.stage.plates;
                for(var i = 0; i < plates.length; i++) {
                    var plate: Plate = plates[i];
                    //是否有可以合成的
                    if(plate.item != null && this.meger(plate.item)) {
                        break;
                    }
                    //是否有盘子可以放
                    else if(plate.item == null && plate.getMakeItemSn() == this.confItem.itemSn) {
                        var item = new Item(this.confItem);
                        item.state = true;
                        item.box = plate;
                        item.progress = 1;
                        item.pivot(this.pivotX, this.pivotY);
                        item.pos(plate.x, plate.y);
                        StageManager.stage.addChild(item);

                        plate.item = item;
                        break;
                    }
                }
            }
            //找个锅做熟
            else {
                var pots = StageManager.stage.pots;
                for(var i = 0; i < pots.length; i++) {
                    var pot: Pot = pots[i];
                    if(pot.item == null && pot.getMakeItemSn() == this.confItem.itemSn) {
                        var item = new Item(this.confItem);
                        item.state = true;
                        item.box = pot;
                        item.progress = 0;
                        item.pivot(this.pivotX, this.pivotY);
                        item.pos(pot.x, pot.y);
                        StageManager.stage.addChild(item);

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
            StageManager.stage.selected = this;
        }
    }

    public destroy(): void {
        super.destroy();
        StageManager.stage.selected = null;
        if(this.box == null) return;
        this.box.handle();
        StageManager.stage.selected = null;
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
            if(!this.confItem.ripe) this.destroy();
            item.graphics.clear();

            var configItem: ConfigItem = new ConfigItem();
            item.confItem = configItem.getBy("itemSn", config.mergeId, "level", 1);
            item.loadImage("stage/" + item.confItem.picture);
            return true;
        }
        return false;
    }
} 