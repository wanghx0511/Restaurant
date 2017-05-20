var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//1号餐厅场景
var StageOne = (function (_super) {
    __extends(StageOne, _super);
    function StageOne(stageSn) {
        var _this = _super.call(this) || this;
        _this.configItem = new ConfigItem();
        _this.configCustomer = new ConfigCustomer();
        _this.configStage = new ConfigStage();
        _this.configKitchenware = new ConfigKitchenware();
        _this.plates = [];
        _this.pots = [];
        _this.crisper = [];
        _this.customers = [];
        //被选中的道具
        _this.selected = null;
        //站在面前的顾客
        _this.showCustomer = [];
        //队列中的顾客
        _this.ranksCustomer = [];
        //最多出现顾客的数量
        _this.maxCustomer = 0;
        //计时器，用于刷顾客
        _this.customerTimer = new Laya.Timer();
        //开始时间
        _this.startTimeStamp = 0;
        //init I
        _this.initLoop = 0;
        _this.stageSn = stageSn;
        console.log("当前关sn=" + stageSn);
        var confStage = _this.configStage.get(_this.stageSn);
        //场景图
        var bg = new Laya.Sprite();
        bg.loadImage("res/atlas/beijing.jpg");
        bg.pos(-488, 0);
        _this.addChild(bg);
        //操作台
        var caozuotai = new Laya.Sprite();
        caozuotai.loadImage("res/atlas/caozuotai.png");
        caozuotai.pos(-297, 490);
        _this.addChild(caozuotai);
        //初始化关卡物品
        var kitchenwares = eval(confStage.initKitchenware);
        var configPos = new ConfigPos();
        for (var _i = 0, kitchenwares_1 = kitchenwares; _i < kitchenwares_1.length; _i++) {
            var sn = kitchenwares_1[_i];
            var level = StageManager.data["kitchenware"][sn];
            var pos = configPos.getBy("type", 1, "itemSn", sn, "level", level);
            if (pos == null)
                continue;
            var kitchenware = eval("new " + pos.class + "(" + sn + "," + 1 + ")");
            kitchenware.pos(pos.x, pos.y);
            kitchenware.scale(pos.scaleX, pos.scaleY);
            kitchenware.pivot(pos.pivotX, pos.pivotY);
            _this.addChild(kitchenware);
            //如果是放置台则加到列表里
            if (pos.class == "Plate") {
                _this.plates.push(kitchenware);
            }
            else if (pos.class == "Pot") {
                _this.pots.push(kitchenware);
            }
            else if (pos.class == "Crisper") {
                _this.crisper.push(kitchenware);
            }
        }
        var items = eval(confStage.initItem);
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var itemSn = items_1[_a];
            level = StageManager.data["kitchenware"][sn];
            var pos = configPos.getBy("type", 2, "itemSn", itemSn, "level", level);
            if (pos == null)
                continue;
            var configItem = _this.configItem.getBy("itemSn", itemSn, "level", level);
            var item = new Item(configItem);
            item.pos(pos.x, pos.y);
            item.scale(pos.scaleX, pos.scaleY);
            item.pivot(pos.pivotX, pos.pivotY);
            _this.addChild(item);
        }
        _this.maxCustomer = confStage.maxCustomerNum;
        _this.showPosX = eval(confStage.customerShowPosX);
        _this.startTimeStamp = _this.customerTimer.currTimer;
        //计时器开始计时
        _this.customerTimer.loop(100, _this, _this.initCustomer);
        return _this;
    }
    //同步分数时调用
    StageOne.prototype.setScore = function (score) {
        this.scoreTotal = score;
    };
    StageOne.prototype.initCustomer = function () {
        var confStage = this.configStage.get(this.stageSn);
        //出现顾客sn
        var customerToShow = eval(confStage.customerSn);
        //顾客出现时间
        var timeToShow = eval(confStage.customerShowTime);
        var timeThough = this.customerTimer.currTimer - this.startTimeStamp;
        //循环检测是否需要加顾客，曾经加过的位置，就别在加了
        //如果都加完了，就直接return
        if (this.initLoop >= confStage.customerNum)
            return;
        for (var i = this.initLoop; i < confStage.customerNum; i++) {
            if (timeThough >= timeToShow[i]) {
                // console.log("时间：" + timeToShow[i] + "， 加了一个customerSn：" + customerToShow[i]);
                //如果有空位就加进去
                if (this.showCustomer.length < this.maxCustomer && this.ranksCustomer.length == 0 && this.showPosX.length > 0) {
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
                    Laya.Tween.to(customer, { x: posX }, new Utils().calcTweenNeedTime(posX), null, new Laya.Handler(customer, customer.addBubble));
                    this.addChild(customer);
                    // customer.addBubble();
                    var customerEle = [confCustomer.sn, customer];
                    this.showCustomer.push(customerEle);
                    this.initLoop = i + 1;
                }
                else {
                    // console.log("队列加一个进去， 现在有" + (this.ranksCustomer.length+1) +"个！");
                    var confCustomer = this.configCustomer.get(customerToShow[i]);
                    var customer = new Customer(confCustomer, 0);
                    this.ranksCustomer.push(customer);
                    this.initLoop = i + 1;
                }
            }
        }
    };
    //顾客走后，加个钱袋子
    StageOne.prototype.addCashBag = function (customer) {
        var cashBag = new CashBag(customer);
        // var x : number = customer.x;
        // var y : number = customer.y;
        cashBag.pos(customer.x, customer.y + customer.height);
        Laya.stage.addChild(cashBag);
    };
    return StageOne;
}(Laya.Sprite));
//# sourceMappingURL=StageOne.js.map