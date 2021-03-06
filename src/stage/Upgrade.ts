class Upgrade extends Laya.Sprite{

    private stageSn : number;
    private configStage : ConfigStage = new ConfigStage();
    private configItem: ConfigItem = new ConfigItem();
    private configKitchenware : ConfigKitchenware = new ConfigKitchenware();
    private upgradeUI : PreUpgradeInfo;
    private isUpdating : boolean = false;

    constructor(stageSn : number) {
        super();
        this.stageSn = stageSn;
        console.log("当前关sn=" + stageSn);
        var confStage = this.configStage.get(this.stageSn);

        //场景图
        var bg = new Laya.Sprite();
        bg.loadImage("res/atlas/beijing.jpg");
        bg.pos(-488, 0);
        this.addChild(bg);

        //操作台
        var caozuotai = new Laya.Sprite();
        caozuotai.loadImage("res/atlas/caozuotai.png");
        caozuotai.pos(-297, 490);
        this.addChild(caozuotai);

        //临时，退出升级的按钮
        var img = new Laya.Image();
        img.loadImage("ui/StageChoose/BT_Close.png");
        img.on("click", this, this.onClose);
        this.addChild(img);

        var upgradeJson = Laya.LocalStorage.getJSON("upgrade");
        if(upgradeJson == null) upgradeJson = StageManager.data;

        //图片形式生成餐具
        //初始化关卡物品
        var kitchenwares = eval(confStage.initKitchenware);
        var configPos = new ConfigPos();
        for(var sn of kitchenwares) {
            var level = upgradeJson["kitchenware"][sn];
            var configKitchenware = this.configKitchenware.getBy("id", sn, "level", level);
            var posX = 0;var posY = 0; var scaleX=0; var scaleY = 0;var pivotX=0; var pivotY=0;
            for(var p=1; p <= configKitchenware.spacenum; p++){
                var pos = configPos.getBy("type", 1, "itemSn", sn, "level", p);
                if(pos == null) continue;
                var kitchenware = new Laya.Image;//eval("new " + pos.class + "(" + sn + "," + 1 + ")");
                kitchenware.loadImage("stage/" + configKitchenware.picture);
                kitchenware.pos(pos.x, pos.y);
                kitchenware.scale(pos.scaleX, pos.scaleY);
                kitchenware.pivot(pos.pivotX, pos.pivotY);
                //在level=1的东西下边加一个ui
                if(p == 1) {
                    posX = pos.uX; posY = pos.uY;scaleX=pos.uScaleX; scaleY=pos.uScaleY;pivotX=pos.uPivotX;pivotY=pos.uPivotY;
                    // var ui = new PreUpgradeInfo();
                    // ui.pos(pos.uX, pos.uY);
                    // ui.scale(pos.uScaleX, pos.uScaleY);
                    // ui.pivot(pos.uPivotX, pos.uPivotY);
                    // ui.setParam("kitchenware", sn, level);
                    // ui.setUpgrade(this);
                    // this.addChild(ui);
                }
                kitchenware.name = "kitchenware_"+sn+"_"+p;
                this.addChildAt(kitchenware, 3);
            }
            var ui = new PreUpgradeInfo();
            ui.pos(posX, posY);
            ui.scale(scaleX, scaleY);
            ui.pivot(pivotX, pivotY);
            ui.setParam("kitchenware", sn, level);
            ui.setUpgrade(this);
            this.addChild(ui);
            
        }

        var items = eval(confStage.initItem);
        var posX = 0;var posY = 0; var scaleX=0; var scaleY = 0;var pivotX=0; var pivotY=0;
        for(var itemSn of items) {
            var level = upgradeJson["kitchenware"][itemSn];
            var pos = configPos.getBy("type", 2, "itemSn", itemSn, "level", level);
            if(pos == null) continue;
            var configItem = this.configItem.getBy("itemSn", itemSn, "level", level);
            var item = new Laya.Image();//Item(configItem);
            item.loadImage("stage/" + configItem.picture);
            item.pos(pos.x, pos.y);
            item.scale(pos.scaleX, pos.scaleY);
            item.pivot(pos.pivotX, pos.pivotY);
            //在level=1的东西下边加一个ui
            if(level == 1) {
                posX = pos.uX; posY = pos.uY;scaleX=pos.uScaleX; scaleY=pos.uScaleY;pivotX=pos.uPivotX;pivotY=pos.uPivotY;
                // var ui = new PreUpgradeInfo();
                // ui.pos(pos.uX, pos.uY);
                // ui.scale(pos.uScaleX, pos.uScaleY);
                // ui.pivot(pos.uPivotX, pos.uPivotY);
                // ui.setParam("item", itemSn, level);
                // ui.setUpgrade(this);
                // this.addChild(ui);
            }
            item.name = "item" + itemSn;
            this.addChild(item);
        }
        var ui = new PreUpgradeInfo();
        ui.pos(posX, posY);
        ui.scale(scaleX, scaleY);
        ui.pivot(pivotX, pivotY);
        ui.setParam("item", itemSn, level);
        ui.setUpgrade(this);
        this.addChild(ui);

    }

    private onClose(){
        var mainTown = this.parent.getChildByName("mainTown") as MainTown;
        mainTown.initImg();
        this.removeSelf();
        // Laya.LocalStorage.removeItem("upgrade");
    }

    public upgradeStatus(isUpdating : boolean){
        this.isUpdating = isUpdating;
    }

    public getStatus() : boolean{
        return this.isUpdating;
    }
}