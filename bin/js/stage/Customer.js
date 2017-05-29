var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Customer = (function (_super) {
    __extends(Customer, _super);
    function Customer(confCustomer, posX) {
        var _this = _super.call(this) || this;
        //已经给了什么食物
        _this.gives = [];
        //加多少分
        _this.moneyAdd = 0;
        //是否还有小费
        _this.tips = true;
        //需求图片
        _this.recordBubblePic = [];
        //匹配数量
        _this.matchNum = 0;
        //是否销毁，条件1
        _this.canDesClick = false;
        //是否销毁，条件2
        _this.canDesTween = false;
        //跑路中的就别截获了
        _this.isRunning = false;
        //等待过程条的value
        _this.value = 1;
        //顾客
        _this.confCustomer = confCustomer;
        _this.customerPic = "customer/" + _this.confCustomer.picture;
        _this.loadImage(_this.customerPic);
        _this.useX = posX;
        _this.on("click", _this, _this.onCustomerClick);
        return _this;
    }
    Customer.prototype.haveTips = function () {
        return this.tips;
    };
    Customer.prototype.addBubble = function () {
        //气泡
        this.bubble = new Laya.Sprite;
        this.bubble.loadImage("customer/" + this.confCustomer.bubblePic);
        this.bubble.pos(this.confCustomer.bubblePosX, -50);
        //需求
        this.needs = eval(this.confCustomer.needs);
        var needsPosY = 20;
        for (var _i = 0, _a = this.needs; _i < _a.length; _i++) {
            var itemSn = _a[_i];
            var configItem = new ConfigItem();
            var config = configItem.getBy("itemSn", itemSn);
            // var config = configItem.get(itemSn);
            var image = new Laya.Image;
            image.loadImage("stage/" + config.picture);
            image.scale(0.7, 0.7);
            this.bubble.addChild(image);
            var bar = new Laya.ProgressBar();
            bar.skin = "customer/progress_patientShadow.png";
            bar.pos(this.bubble.width - 100, this.bubble.height - 30);
            bar.value = this.value;
            bar.rotation = 270;
            bar.sizeGrid = "0,0,0,0,1";
            this.bar = bar;
            Laya.timer.loop(1000, this, this.updateValue);
            this.bubble.addChild(bar);
            image.pos(25, needsPosY);
            needsPosY += 100;
            var test;
            test = [itemSn, image];
            this.recordBubblePic.push(test);
        }
        this.addChild(this.bubble);
        Laya.timer.once(this.confCustomer.tiptime, this, this.changeTipStatus);
        Laya.timer.once(this.confCustomer.waittime, this, this.loseCustomer);
    };
    Customer.prototype.updateValue = function () {
        var progress = 1000 / this.confCustomer.waittime;
        this.value -= progress;
        this.bar.value = this.value;
    };
    // private onClick(e : Laya.Event) {
    //     if(this.status == 0) {
    //         this.onCustomerClick();
    //     } else {
    //         this.onCashClick();
    //     }
    // }
    //没小费了
    Customer.prototype.changeTipStatus = function () {
        this.tips = false;
        console.log("已等烦");
    };
    //跑p了的
    Customer.prototype.loseCustomer = function () {
        this.isRunning = true;
        if (this.moneyAdd > 0) {
            //有过成交，换图
            Laya.Tween.to(this, { x: Laya.stage.width }, new Utils().calcTweenNeedTime(Laya.stage.width - this.useX), null, new Laya.Handler(this, this.mayDestory, [2]));
            StageManager.stage.addCashBag(this);
            this.bubble.destroy();
        }
        else {
            //没成交过，gg
            this.bubble.destroy();
            Laya.Tween.to(this, { x: Laya.stage.width }, new Utils().calcTweenNeedTime(Laya.stage.width - this.useX), null, new Laya.Handler(this, this.destroy));
        }
    };
    Customer.prototype.onCustomerClick = function (e) {
        //当前选中的食物，给顾客了，瞎逼点的直接return
        var item = StageManager.stage.selected;
        if (item == null)
            return;
        //跑动中的不要截获
        if (this.isRunning)
            return;
        //先看看是不是要的那个
        var confItem = item.getConf();
        var isNeed = false;
        var needList = [];
        for (var i = 0; i < this.needs.length; i++) {
            // if(isNeed) break;
            if (confItem.itemSn == this.needs[i]) {
                isNeed = true;
            }
            else {
                needList.push(this.needs[i]);
            }
        }
        this.needs = needList;
        if (!isNeed) {
            console.log("py失败，给的是" + confItem.itemSn + "， 要的是" + this.needs);
            return;
        }
        //到这了，说明是有需求的
        var money = 0;
        for (var _i = 0, _a = item.mergeJson; _i < _a.length; _i++) {
            var itemInfo = _a[_i];
            money += itemInfo.price;
        }
        this.moneyAdd += money;
        this.gives.push(confItem.itemSn);
        item.destroy();
        var imageToDestory;
        for (var _b = 0, _c = this.recordBubblePic; _b < _c.length; _b++) {
            var child = _c[_b];
            if (child[0] == confItem.itemSn) {
                imageToDestory = child[1];
                break;
            }
        }
        imageToDestory.visible = false;
        //看看给齐了没有，如果没有就return
        var matchNum = this.matchNum;
        for (var _d = 0, _e = this.needs; _d < _e.length; _d++) {
            var need = _e[_d];
            if (matchNum != this.matchNum)
                break;
            for (var _f = 0, _g = this.gives; _f < _g.length; _f++) {
                var give = _g[_f];
                if (need == give)
                    this.matchNum += 1;
                break;
            }
        }
        //匹配数小于需求数，说明没完成呢
        if (this.matchNum < this.needs.length)
            return;
        this.bubble.destroy();
        //完成了，去掉客人图，换成钱图
        Laya.Tween.to(this, { x: Laya.stage.width }, new Utils().calcTweenNeedTime(Laya.stage.width - this.useX), null, new Laya.Handler(this, this.mayDestory, [2]));
        StageManager.stage.addCashBag(this);
        // this.graphics.clear();
        // if(this.tips) {
        //     this.loadImage(this.cashTipsPic);
        // } else {
        //     this.loadImage(this.cashPic);
        // }
        Laya.timer.clear(this, this.loseCustomer);
        Laya.timer.clear(this, this.changeTipStatus);
    };
    //尝试销毁
    Customer.prototype.mayDestory = function (trigger) {
        if (trigger == 1) {
            this.canDesClick = true;
        }
        if (trigger == 2) {
            this.canDesTween = true;
            this.visible = false;
        }
        if (this.canDesClick && this.canDesTween) {
            this.destroy();
        }
    };
    Customer.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        var rankList = StageManager.stage.ranksCustomer;
        var showList = StageManager.stage.showCustomer;
        var newShowList = [];
        var isHandled = false;
        for (var _i = 0, showList_1 = showList; _i < showList_1.length; _i++) {
            var ele = showList_1[_i];
            //从showList里去掉
            if (ele[0] == this.confCustomer.sn && !isHandled) {
                isHandled = true;
                continue;
            }
            newShowList.push(ele);
        }
        if (isHandled) {
            StageManager.stage.showCustomer = newShowList;
        }
        //把横坐标还回去
        StageManager.stage.showPosX.push(this.useX);
        if (rankList.length > 0) {
            //从rankList里去掉
            var customer = rankList.pop();
            var posX = StageManager.stage.showPosX.pop();
            //添加到showList里
            var customerEle = [customer.confCustomer.sn, customer];
            StageManager.stage.showCustomer.push(customerEle);
            customer.y = customer.confCustomer.posY;
            customer.useX = posX;
            Laya.Tween.to(customer, { x: posX }, new Utils().calcTweenNeedTime(posX), null, new Laya.Handler(customer, customer.addBubble));
            StageManager.stage.addChildAt(customer, 2);
        }
        if (StageManager.stage.showCustomer.length == 0 && StageManager.stage.ranksCustomer.length == 0) {
            StageManager.stage.stageOver();
        }
    };
    return Customer;
}(Laya.Sprite));
//# sourceMappingURL=Customer.js.map