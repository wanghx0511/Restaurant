class StageOneInfo extends ui.StageOneInfoUI{

    private isUpgrading : boolean = false;
    private upgradeUI : UpgradeInfo;
    private uiVar : string;
    private configKitchenware : ConfigKitchenware = new ConfigKitchenware();

    constructor() {
        super();
        // for(var id in StageManager.data["kitchenware"]){
        //     var confKitchenware = this.configKitchenware.getBy("id", id, "level", StageManager.data["kitchenware"][id]);
        //     var obj = this.getChildByName("k"+id) as Laya.List;
        //     if(obj == null) continue;
        //     var objList = obj._childs;
        //     var imgList : Laya.Image[] = [];
        //     var length = objList.length - StageManager.data["kitchenware"][id];
        //     objList.reverse();
        //     for(var i = 0; i < length ; i++){
        //         imgList.push(objList.pop());
        //     }
        //     for(var img of imgList) {
        //         img.visible = false;
        //         obj._childs.push(img);
        //     }

        // }
        
        // this.on("click", this, this.onClosePanel);
        // this.i1.on("click", this, this.onI1Click);
        // this.i2.on("click", this, this.onI2Click);
        // this.i3.on("click", this, this.onI3Click);
        // this.i4.on("click", this, this.onI4Click);
        // this.i5.on("click", this, this.onI5Click);
        // this.i6.on("click", this, this.onI6Click);
        // this.i7.on("click", this, this.onI7Click);

        // this.k1.on("click", this, this.onK1Click);
        // this.k2.on("click", this, this.onK2Click);
        // this.k3.on("click", this, this.onK3Click);
        // this.k4.on("click", this, this.onK4Click);
        // this.k5.on("click", this, this.onK5Click);
        // this.k6.on("click", this, this.onK6Click);
        // this.k7.on("click", this, this.onK7Click);

    }

    // private onI1Click(){
    //     if(this.isUpgrading) return;
    //     this.isUpgrading = true;
    //     this.uiVar = "i1";
    //     this.i1.visible = false;
    //     this.upgradeUI = new UpgradeInfo();
    //     this.upgradeUI.pos(this.width / 2, this.height / 2);
    //     this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
    //     this.upgradeUI.setParam("item", "1", this, "i1");
    //     this.addChild(this.upgradeUI);
    // }

    // private onI2Click(){
    //     if(this.isUpgrading) return;
    //     this.isUpgrading = true;
    //     this.uiVar = "i2";
    //     this.i2.visible = false;
    //     this.upgradeUI = new UpgradeInfo();
    //     this.upgradeUI.pos(this.width / 2, this.height / 2);
    //     this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
    //     this.upgradeUI.setParam("item", "2", this, "i2");
    //     this.addChild(this.upgradeUI);
    // }

    // private onI3Click(){
    //     if(this.isUpgrading) return;
    //     this.isUpgrading = true;
    //     this.uiVar = "i3";
    //     this.i3.visible = false;
    //     this.upgradeUI = new UpgradeInfo();
    //     this.upgradeUI.pos(this.width / 2, this.height / 2);
    //     this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
    //     this.upgradeUI.setParam("item", "3", this, "i3");
    //     this.addChild(this.upgradeUI);
    // }

    // private onI4Click(){
    //     if(this.isUpgrading) return;
    //     this.isUpgrading = true;
    //     this.uiVar = "i4";
    //     this.i4.visible = false;
    //     this.upgradeUI = new UpgradeInfo();
    //     this.upgradeUI.pos(this.width / 2, this.height / 2);
    //     this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
    //     this.upgradeUI.setParam("item", "4", this, "i4");
    //     this.addChild(this.upgradeUI);
    // }

    // private onI5Click(){
    //     if(this.isUpgrading) return;
    //     this.isUpgrading = true;
    //     this.uiVar = "i5";
    //     this.i5.visible = false;
    //     this.upgradeUI = new UpgradeInfo();
    //     this.upgradeUI.pos(this.width / 2, this.height / 2);
    //     this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
    //     this.upgradeUI.setParam("item", "5", this, "i5");
    //     this.addChild(this.upgradeUI);
    // }

    // private onI6Click(){
    //     if(this.isUpgrading) return;
    //     this.isUpgrading = true;
    //     this.uiVar = "i6";
    //     this.i6.visible = false;
    //     this.upgradeUI = new UpgradeInfo();
    //     this.upgradeUI.pos(this.width / 2, this.height / 2);
    //     this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
    //     this.upgradeUI.setParam("item", "6", this, "i6");
    //     this.addChild(this.upgradeUI);
    // }

    // private onI7Click(){
    //     if(this.isUpgrading) return;
    //     this.isUpgrading = true;
    //     this.uiVar = "i7";
    //     this.i7.visible = false;
    //     this.upgradeUI = new UpgradeInfo();
    //     this.upgradeUI.pos(this.width / 2, this.height / 2);
    //     this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
    //     this.upgradeUI.setParam("item", "7", this, "i7");
    //     this.addChild(this.upgradeUI);
    // }

    // private onK1Click(){
    //     if(this.isUpgrading) return;
    //     this.isUpgrading = true;
    //     this.uiVar = "k1";
    //     this.k1.visible = false;
    //     this.upgradeUI = new UpgradeInfo();
    //     this.upgradeUI.pos(this.width / 2, this.height / 2);
    //     this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
    //     this.upgradeUI.setParam("kitchenware", "1", this, "k1");
    //     this.addChild(this.upgradeUI);
    // }
    // private onK2Click(){
    //     if(this.isUpgrading) return;
    //     this.isUpgrading = true;
    //     this.uiVar = "k2";
    //     this.k2.visible = false;
    //     this.upgradeUI = new UpgradeInfo();
    //     this.upgradeUI.pos(this.width / 2, this.height / 2);
    //     this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
    //     this.upgradeUI.setParam("kitchenware", "2", this, "k2");
    //     this.addChild(this.upgradeUI);
    // }
    // private onK3Click(){
    //     if(this.isUpgrading) return;
    //     this.isUpgrading = true;
    //     this.uiVar = "k3";
    //     this.k3.visible = false;
    //     this.upgradeUI = new UpgradeInfo();
    //     this.upgradeUI.pos(this.width / 2, this.height / 2);
    //     this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
    //     this.upgradeUI.setParam("kitchenware", "3", this, "k3");
    //     this.addChild(this.upgradeUI);
    // }
    // private onK4Click(){
    //     if(this.isUpgrading) return;
    //     this.isUpgrading = true;
    //     this.uiVar = "k4";
    //     this.k4.visible = false;
    //     this.upgradeUI = new UpgradeInfo();
    //     this.upgradeUI.pos(this.width / 2, this.height / 2);
    //     this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
    //     this.upgradeUI.setParam("kitchenware", "4", this, "k4");
    //     this.addChild(this.upgradeUI);
    // }
    // private onK5Click(){
    //     if(this.isUpgrading) return;
    //     this.isUpgrading = true;
    //     this.uiVar = "k5";
    //     this.k5.visible = false;
    //     this.upgradeUI = new UpgradeInfo();
    //     this.upgradeUI.pos(this.width / 2, this.height / 2);
    //     this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
    //     this.upgradeUI.setParam("kitchenware", "5", this, "k5");
    //     this.addChild(this.upgradeUI);
    // }
    // private onK6Click(){
    //     if(this.isUpgrading) return;
    //     this.isUpgrading = true;
    //     this.uiVar = "k6";
    //     this.k6.visible = false;
    //     this.upgradeUI = new UpgradeInfo();
    //     this.upgradeUI.pos(this.width / 2, this.height / 2);
    //     this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
    //     this.upgradeUI.setParam("kitchenware", "6", this, "k6");
    //     this.addChild(this.upgradeUI);
    // }
    // private onK7Click(){
    //     if(this.isUpgrading) return;
    //     this.isUpgrading = true;
    //     this.uiVar = "k7";
    //     this.k7.visible = false;
    //     this.upgradeUI = new UpgradeInfo();
    //     this.upgradeUI.pos(this.width / 2, this.height / 2);
    //     this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
    //     this.upgradeUI.setParam("kitchenware", "7", this, "k7");
    //     this.addChild(this.upgradeUI);
    // }

    // public releaseUpdating(){
    //     this.isUpgrading = false;
    // }

    // private onClosePanel(){
    //     console.log(111);
    //     if(!this.isUpgrading) return;
    //     console.log(222);
    //     this.upgradeUI.removeSelf();
    //     this.isUpgrading = false;
    //     eval("this." + this.uiVar + ".visible = true;");
    // }

}