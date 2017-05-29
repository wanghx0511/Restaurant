class Customer extends Laya.Sprite{
    //配置
    public confCustomer: any;
    //顾客图
    public customerPic : string;
    //要什么食物
    public needs : number[];
    //已经给了什么食物
    public gives : number[] = [];
    //加多少分
    public moneyAdd : number = 0;
    //是否还有小费
    private tips : boolean = true;
    //气泡
    private bubble : Laya.Sprite;
    //需求图片
    private recordBubblePic : any[] = [];
    //匹配数量
    private matchNum : number = 0;
    //是否销毁，条件1
    private canDesClick : boolean = false;
    //是否销毁，条件2
    private canDesTween : boolean = false;
    //占用的x坐标
    private useX : number;
    //跑路中的就别截获了
    private isRunning : boolean = false;
    //等待过程条的value
    private value : number = 1;
    //过程条
    private bar : Laya.ProgressBar;

    constructor(confCustomer : any, posX : number) {
        super();
        //顾客
        this.confCustomer = confCustomer;
        this.customerPic = "customer/" + this.confCustomer.picture;
        this.loadImage(this.customerPic);
        this.useX = posX;
        this.on("click", this, this.onCustomerClick);
        
    }

    public haveTips() : boolean {
        return this.tips;
    }

    public addBubble () {
        //气泡
        this.bubble = new Laya.Sprite;
        this.bubble.loadImage("customer/" + this.confCustomer.bubblePic);
        this.bubble.pos(this.confCustomer.bubblePosX, -50);
        //需求
        this.needs = eval(this.confCustomer.needs);
        var needsPosY = 20;
        for(var itemSn of this.needs) {
            var configItem : ConfigItem = new ConfigItem();
            var config = configItem.getBy("itemSn", itemSn);
            // var config = configItem.get(itemSn);
            var image : Laya.Image = new Laya.Image;
            image.loadImage("stage/" + config.picture);
            image.scale(0.7,0.7);
            this.bubble.addChild(image);
            var bar = new Laya.ProgressBar();
            bar.skin = "customer/progress_patientShadow.png"
            bar.pos(this.bubble.width -  100, this.bubble.height - 30 );
            bar.value = this.value;
            bar.rotation = 270;
            bar.sizeGrid="0,0,0,0,1";
            this.bar = bar;
            Laya.timer.loop(1000, this, this.updateValue);
            this.bubble.addChild(bar);
            image.pos(25, needsPosY);
            needsPosY += 100;
            var test : [number, Laya.Image];
            test = [itemSn, image];
            this.recordBubblePic.push(test);
        }
        this.addChild(this.bubble);

        Laya.timer.once(this.confCustomer.tiptime, this, this.changeTipStatus);
        Laya.timer.once(this.confCustomer.waittime , this, this.loseCustomer);
    }

    public updateValue() : void {
        var progress = 1000 / this.confCustomer.waittime;
        this.value -= progress;
        this.bar.value = this.value;
    }

    // private onClick(e : Laya.Event) {
    //     if(this.status == 0) {
    //         this.onCustomerClick();
    //     } else {
    //         this.onCashClick();
    //     }
    // }

    //没小费了
    private changeTipStatus() {
        this.tips = false;
        console.log("已等烦");
    }

    //跑p了的
    private loseCustomer() {
        this.isRunning = true;
        if(this.moneyAdd > 0 ) {
            //有过成交，换图
            Laya.Tween.to(this, {x : Laya.stage.width}, new Utils().calcTweenNeedTime(Laya.stage.width - this.useX), null, new Laya.Handler(this, this.mayDestory,[2]));
            StageManager.stage.addCashBag(this);
            this.bubble.destroy();
        } else {
            //没成交过，gg
            this.bubble.destroy();
            Laya.Tween.to(this, {x : Laya.stage.width}, new Utils().calcTweenNeedTime(Laya.stage.width - this.useX), null, new Laya.Handler(this, this.destroy));
        }
    }

    private onCustomerClick(e : Laya.Event) {
        //当前选中的食物，给顾客了，瞎逼点的直接return
        var item: Item = StageManager.stage.selected;
        if(item == null) return;
        //跑动中的不要截获
        if(this.isRunning) return;

        //先看看是不是要的那个
        var confItem = item.getConf();
        var isNeed : boolean = false;
        var needList : number[] = [];
        for(var i = 0; i < this.needs.length; i++) {
            // if(isNeed) break;
            if(confItem.itemSn == this.needs[i]) {
                isNeed = true;
            } else {
                needList.push(this.needs[i]);
            }
        }
        this.needs = needList;
        if(!isNeed) {
            console.log("py失败，给的是" + confItem.itemSn + "， 要的是" + this.needs);
            return;
        } 
        //到这了，说明是有需求的
        var money = 0;
        for(var itemInfo of item.mergeJson) {
            money += itemInfo.price;
        }
        this.moneyAdd += money;
        this.gives.push(confItem.itemSn);
        item.destroy();
        var imageToDestory : Laya.Image;
        for(var child of this.recordBubblePic){
            if(child[0] == confItem.itemSn) {
                imageToDestory = child[1];
                break;
            }
        }
        imageToDestory.visible = false;

        //看看给齐了没有，如果没有就return
        var matchNum = this.matchNum;
        for(let need of this.needs) {
            if(matchNum != this.matchNum) break;
            for(let give of this.gives) {
                if(need == give) this.matchNum += 1;
                break;
            }
        }
        //匹配数小于需求数，说明没完成呢
        if(this.matchNum < this.needs.length) return;
        this.bubble.destroy();
        //完成了，去掉客人图，换成钱图
        Laya.Tween.to(this, {x : Laya.stage.width}, new Utils().calcTweenNeedTime(Laya.stage.width - this.useX), null, new Laya.Handler(this, this.mayDestory,[2]));
        StageManager.stage.addCashBag(this);

        // this.graphics.clear();
        // if(this.tips) {
        //     this.loadImage(this.cashTipsPic);
        // } else {
        //     this.loadImage(this.cashPic);
        // }

        Laya.timer.clear(this, this.loseCustomer);
        Laya.timer.clear(this, this.changeTipStatus);
    }

    //尝试销毁
    public mayDestory(trigger : number) : void {
        if(trigger == 1) {
            this.canDesClick = true;
        }
        if(trigger == 2) {
            this.canDesTween = true;
            this.visible = false;
        }

        if(this.canDesClick && this.canDesTween) {
            this.destroy();
        }
    }

    public destroy(): void {
        super.destroy();
        var rankList : Customer[] = StageManager.stage.ranksCustomer;
        var showList : any[] = StageManager.stage.showCustomer;
        var newShowList : any[] = [];
        var isHandled : boolean = false;
        for(var ele of showList) {
            //从showList里去掉
            if(ele[0] == this.confCustomer.sn && !isHandled) {
                isHandled = true;
                continue;
            }
            newShowList.push(ele);
        }
        if(isHandled){
            StageManager.stage.showCustomer = newShowList;
        }
        //把横坐标还回去
        StageManager.stage.showPosX.push(this.useX);
        if(rankList.length > 0) {
            //从rankList里去掉
            var customer = rankList.pop();
            var posX = StageManager.stage.showPosX.pop();
            //添加到showList里
            var customerEle : [number, Customer] = [customer.confCustomer.sn, customer];
            StageManager.stage.showCustomer.push(customerEle);
            customer.y = customer.confCustomer.posY;
            customer.useX = posX;
            Laya.Tween.to(customer, {x : posX}, new Utils().calcTweenNeedTime(posX) , null, new Laya.Handler(customer, customer.addBubble));
            StageManager.stage.addChildAt(customer, 2);
            // this.parent.addChildAt(customer, 2);
        }

        if(StageManager.stage.showCustomer.length == 0 && StageManager.stage.ranksCustomer.length == 0) {
            StageManager.stage.stageOver();
        }
    }

}