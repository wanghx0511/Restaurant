//1号餐厅场景
class StageOne extends Laya.Sprite{
    public uiInfo: StageOneInfo;
    private configItem: ConfigItem = new ConfigItem();
    private configCustomer : ConfigCustomer = new ConfigCustomer();
    public configStage : ConfigStage = new ConfigStage();
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
    public scoreTotal : number = 0;
    //付帐
    public money: number = 0;
    //小费
    public tip: number = 0;
    //满意客人数
    public manyi: number = 0;

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

        var stageInfo = new StageInfo();
        this.addChild(stageInfo);

        //操作台
        var caozuotai = new Laya.Sprite();
        caozuotai.loadImage("res/atlas/caozuotai.png");
        caozuotai.pos(-297, 490);
        this.addChild(caozuotai);

        //初始化关卡物品
        var kitchenwares = eval(confStage.initKitchenware);
        var configPos = new ConfigPos();
        for(var sn of kitchenwares) {
            var level = StageManager.data["kitchenware"][sn];
            var pos = configPos.getBy("type", 1, "itemSn", sn, "level", level);
            if(pos == null) continue;
            var kitchenware = eval("new " + pos.class + "(" + sn + "," + 1 + ")");
            kitchenware.pos(pos.x, pos.y);
            kitchenware.scale(pos.scaleX, pos.scaleY);
            kitchenware.pivot(pos.pivotX, pos.pivotY);
            this.addChild(kitchenware);
            //如果是放置台则加到列表里
            switch(pos.class) {
                case "Plate": {
                    this.plates.push(kitchenware);
                    break;
                }
                case "Pot": {
                    this.pots.push(kitchenware);
                    break;
                }
                case "Crisper": {
                    this.crisper.push(kitchenware);
                    break;
                }
                case "Trash": {
                    this.trashCanObj = new Trash();
                    break;
                }
                
            }
        }

        var items = eval(confStage.initItem);
        for(var itemSn of items) {
            level = StageManager.data["kitchenware"][sn];
            var pos = configPos.getBy("type", 2, "itemSn", itemSn, "level", level);
            if(pos == null) continue;
            var configItem = this.configItem.getBy("itemSn", itemSn, "level", level);

            var item = new Item(configItem);
            item.pos(pos.x, pos.y);
            item.scale(pos.scaleX, pos.scaleY);
            item.pivot(pos.pivotX, pos.pivotY);
            this.addChild(item);
        }

        this.maxCustomer = confStage.maxCustomerNum;
        this.showPosX = eval(confStage.customerShowPosX);

        this.startTimeStamp = this.customerTimer.currTimer;
        //计时器开始计时
        this.customerTimer.loop(100, this, this.initCustomer);
    }

    //同步分数时调用
    public addScore(money : number, tip: number){
        this.money += money;
        this.tip += tip;
        this.scoreTotal = this.money + this.tip;
        if(tip > 0) this.manyi += 1;
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

    public stageOver() {
        var stageSettlementInfo = new StageSettlementInfo(this.stageSn);
        this.addChild(stageSettlementInfo);
    }
}