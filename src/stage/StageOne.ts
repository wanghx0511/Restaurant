//1号餐厅场景
class StageOne extends Laya.Sprite{
    public uiInfo: StageOneInfo;
    private configItem: ConfigItem = new ConfigItem();
    private configCustomer : ConfigCustomer = new ConfigCustomer();
    private configStage : ConfigStage = new ConfigStage();
    private configKitchenware : ConfigKitchenware = new ConfigKitchenware();
    public plates: any[] = [];
    public pots: any[] = [];
    public crisper: any[] = [];
    public customers : any[] = [];
    //被选中的道具
    public selected: any = null;
    public trashCanObj: Trash;

    //站在面前的顾客
    public showCustomer : any[] = [];
    //队列中的顾客
    public ranksCustomer : Customer[] = [];
    //最多出现顾客的数量
    public maxCustomer : number = 0;
    //当前关卡sn
    public stageSn : number;
    //计时器，用于刷顾客
    public customerTimer : Laya.Timer = new Laya.Timer();
    //开始时间
    public startTimeStamp : number = 0;
    //init I
    public initLoop : number = 0;
    //顾客出现的横坐标集
    public showPosX : number[];
    //总分
    private scoreTotal : number;

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

        //创建UI
        this.uiInfo = new StageOneInfo();
        this.addChild(this.uiInfo);

        //垃圾桶
        var trashCan = new Trash();
        var uiTrash = this.uiInfo.getChildByName("trash") as Laya.Sprite;
        trashCan.pos(uiTrash.x, uiTrash.y);
        trashCan.scale(uiTrash.scaleX, uiTrash.scaleY);
        this.trashCanObj = trashCan;
        this.addChild(this.trashCanObj);
        //替换后删除
        this.uiInfo.removeChildByName("trash");

        this.maxCustomer = confStage.maxCustomerNum;
        this.showPosX = eval(confStage.customerShowPosX);

        this.startTimeStamp = this.customerTimer.currTimer;
        //计时器开始计时
        this.customerTimer.loop(100, this, this.initCustomer);
        
        //创建场景内精灵
        var stageManager = new StageManager();
        var sprites = stageManager.data;
        for(var sn in sprites["item"]){
            var configItem = this.configItem.getBy("itemSn", sn, "level", sprites["item"][sn]);
            var item = new Item(configItem);
            var uiItem = this.uiInfo.getChildByName("itemSn" + sn) as Laya.Sprite;
            item.pos(uiItem.x, uiItem.y);
            item.scale(uiItem.scaleX, uiItem.scaleY);
            item.pivot(uiItem.pivotX, uiItem.pivotY);
            this.addChild(item);
            //替换后删除
            this.uiInfo.removeChildByName("itemSn" + sn);
        }

        for(var id in sprites["kitchenware"]) {
            var configKitchenware = this.configKitchenware.getBy("id", id, "level", sprites["kitchenware"][id]);
            for(var i = 1; i <= configKitchenware.spacenum; i++) {
                var uiKitchenware = this.uiInfo.getChildByName("kitchenwareSn" + id + "_" + i) as Laya.Sprite;
                if(uiKitchenware == null) continue;

                var kitchenware = eval("new " + configKitchenware.type + "(" + id + "," + i + ")");
                kitchenware.pos(uiKitchenware.x, uiKitchenware.y);
                kitchenware.scale(uiKitchenware.scaleX, uiKitchenware.scaleY);
                kitchenware.pivot(uiKitchenware.pivotX, uiKitchenware.pivotY);
                this.addChild(kitchenware);

                //如果是放置台则加到列表里
                if(configKitchenware.type == "Plate") {
                    this.plates.push(kitchenware);
                }
                //如果是锅则加到列表里
                else if(configKitchenware.type == "Pot") {
                    this.pots.push(kitchenware);
                }
                //如果是保温炉加到列表里
                else if(configKitchenware.type == "Crisper") {
                    this.crisper.push(kitchenware);
                }
                //替换后删除
                this.uiInfo.removeChildByName("kitchenwareSn" + id + "_" + i);
            }
        }
    }

    //同步分数时调用
    public setScore(score : number){
        this.scoreTotal = score;
    }

    public initCustomer() {
        var confStage = this.configStage.get(this.stageSn);
        //出现顾客sn
        var customerToShow = eval(confStage.customerSn);
        //顾客出现时间
        var timeToShow = eval(confStage.customerShowTime);
        var timeThough = this.customerTimer.currTimer-this.startTimeStamp;
        //循环检测是否需要加顾客，曾经加过的位置，就别在加了
        //如果都加完了，就直接return
        if(this.initLoop >= confStage.customerNum) return;
        for(var i = this.initLoop ; i < confStage.customerNum; i ++ ) {
            if(timeThough >= timeToShow[i] ){
                // console.log("时间：" + timeToShow[i] + "， 加了一个customerSn：" + customerToShow[i]);
                //如果有空位就加进去
                if(this.showCustomer.length < this.maxCustomer && this.ranksCustomer.length == 0 && this.showPosX.length > 0) {
                    // console.log("空位加一个进去， 现在有" + (this.showCustomer.length+1) +"个！");
                    //配置中第i个顾客sn
                    var customerSn = customerToShow[i];
                    var confCustomer = this.configCustomer.get(customerSn);
                    //取当前空位的x坐标
                    var posX = this.showPosX.pop();
                    //初始化一个顾客
                    var customer = new Customer(confCustomer, posX);
                    customer.y = confCustomer.posY;
                    //入场动画结束后 ，出现气泡
                    Laya.Tween.to(customer, {x : posX}, new Utils().calcTweenNeedTime(posX), null, new Laya.Handler(customer, customer.addBubble));
                    this.addChild(customer);
                    // customer.addBubble();
                    var customerEle : [number, Customer] = [confCustomer.sn, customer];
                    this.showCustomer.push(customerEle);
                    this.initLoop = i + 1;
                } else {
                    // console.log("队列加一个进去， 现在有" + (this.ranksCustomer.length+1) +"个！");
                    var confCustomer = this.configCustomer.get(customerToShow[i]);
                    var customer = new Customer(confCustomer, 0);
                    this.ranksCustomer.push(customer);
                    this.initLoop = i + 1;
                }
            }
        }

    }

    //顾客走后，加个钱袋子
    public addCashBag(customer : Customer) : void {
        var cashBag : CashBag = new CashBag(customer);
        // var x : number = customer.x;
        // var y : number = customer.y;
        cashBag.pos(customer.x, customer.y + customer.height);
        Laya.stage.addChild(cashBag);
    }
}