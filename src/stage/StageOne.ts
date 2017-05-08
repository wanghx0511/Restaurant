//1号餐厅场景
class StageOne extends Laya.Sprite{
    //public gameInfo: GameInfo;
    private configItem: ConfigItem = new ConfigItem();
    private configCustomer : ConfigCustomer = new ConfigCustomer();
    private configStage : ConfigStage = new ConfigStage();
    public plates: any[] = [];
    public pots: any[] = [];
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
        caozuotai.pos(-275, 490);
        this.addChild(caozuotai);

        //创建游戏信息UI
        //this.gameInfo = new GameInfo(confStage);
        //添加到舞台上
        //Laya.stage.addChild(this.gameInfo);

        // this.maxCustomer = confStage.maxCustomerNum;
        // this.showPosX = eval(confStage.customerShowPosX);

        // this.startTimeStamp = this.customerTimer.currTimer;
        // //计时器开始计时
        // this.customerTimer.loop(100, this, this.initCustomer);

        // //垃圾桶
        // var trashCan = new Trash();
        // trashCan.pos(47, 832);
        // Laya.stage.addChild(trashCan);
        // this.trashCanObj = trashCan;

        // //汉堡面包
        // var bread1 = this.configItem.getBy("itemSn", 1, "level", 1);
        // var item1 = new Item(bread1);
        // item1.pos(803, 780);
        // Laya.stage.addChild(item1);

        // //热狗面包
        // var bread2 = this.configItem.getBy("itemSn", 4, "level", 1);
        // var item2 = new Item(bread2);
        // item2.pos(803, 885);
        // Laya.stage.addChild(item2);

        // //肉排
        // var sausage = this.configItem.getBy("itemSn", 5, "level", 1);
        // var item3 = new Item(sausage);
        // item3.pos(1576, 970);
        // Laya.stage.addChild(item3);

        // //香肠
        // var stake = this.configItem.getBy("itemSn", 6, "level", 1);
        // var item4 = new Item(stake);
        // item4.pos(1730, 970);
        // Laya.stage.addChild(item4);

        // //盘子
        // var plate = new Plate(5);
        // plate.pos(935, 768);
        // Laya.stage.addChild(plate);
        // this.plates.push(plate);

        // //盘子
        // var plate2 = new Plate(6);
        // plate2.pos(1140, 768);
        // Laya.stage.addChild(plate2);
        // this.plates.push(plate2);

        // //烤锅
        // var pot = new Pot(3, 1);
        // pot.pos(1583, 840);
        // Laya.stage.addChild(pot);
        // this.pots.push(pot);

        // var pot2 = new Pot(4, 1);
        // pot2.pos(1700, 840);
        // Laya.stage.addChild(pot2);
        // this.pots.push(pot2);

        // //咖啡机
        // var coffeeMachine = new CoffeeMachine(2, 1);
        // coffeeMachine.pos(468, 730);
        // Laya.stage.addChild(coffeeMachine);
        
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
                    Laya.stage.addChild(customer);
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
        cashBag.pos(customer.x, customer.y);
        Laya.stage.addChild(cashBag);
    }
}