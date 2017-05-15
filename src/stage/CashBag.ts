class CashBag extends Laya.Sprite {

    private customer : Customer;
    //钱有小费
    public cashTipsPic : string;
    //钱没小费
    public cashPic : string;

    constructor (customer : Customer) {
        super();
        this.customer = customer;
        this.cashTipsPic = "stage/caopiao.png";
        this.cashPic = "stage/caopiao.png";
        if(this.customer.haveTips()) {
            this.loadImage(this.cashTipsPic);
        } else {
            this.loadImage(this.cashPic);
        }
        this.on("click", this, this.onClick);
    }

    private onClick(e : Laya.Event) : void {
        //有小费
        var tipAdd: number = 0;
        if(this.customer.haveTips()) {
            tipAdd = this.customer.moneyAdd * this.customer.confCustomer.tip / 100;
        }

        var total : number = this.customer.moneyAdd + tipAdd;
        //gameMain.game.gameInfo.addMoney(total);
        this.customer.mayDestory(1);
        this.destroy();
    }

}