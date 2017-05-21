class StageOneInfo extends ui.StageOneInfoUI{

    private isUpgrading : boolean = false;
    private upgradeUI : UpgradeInfo;
    private uiVar : string;

    constructor() {
        super();
        // this.on("click", this, this.onClosePanel);
        this.i1.on("click", this, this.onI1Click);
        this.i2.on("click", this, this.onI2Click);
        this.i3.on("click", this, this.onI3Click);
        this.i4.on("click", this, this.onI4Click);
        this.i5.on("click", this, this.onI5Click);
        this.i6.on("click", this, this.onI5Click);
        this.i7.on("click", this, this.onI5Click);

    }

    private onI1Click(){
        this.isUpgrading = true;
        this.uiVar = "i1";
        this.i1.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "1", this, "i1");
        this.addChild(this.upgradeUI);
    }

    private onI2Click(){
        this.isUpgrading = true;
        this.uiVar = "i2";
        this.i1.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "2", this, "i2");
        this.addChild(this.upgradeUI);
    }

    private onI3Click(){
        this.isUpgrading = true;
        this.uiVar = "i3";
        this.i1.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "3", this, "i3");
        this.addChild(this.upgradeUI);
    }

    private onI4Click(){
        this.isUpgrading = true;
        this.uiVar = "i4";
        this.i1.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "4", this, "i4");
        this.addChild(this.upgradeUI);
    }

    private onI5Click(){
        this.isUpgrading = true;
        this.uiVar = "i5";
        this.i1.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "5", this, "i5");
        this.addChild(this.upgradeUI);
    }

    private onI6Click(){
        this.isUpgrading = true;
        this.uiVar = "i6";
        this.i1.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "6", this, "i6");
        this.addChild(this.upgradeUI);
    }

    private onI7Click(){
        this.isUpgrading = true;
        this.uiVar = "i7";
        this.i1.visible = false;
        this.upgradeUI = new UpgradeInfo();
        this.upgradeUI.pos(this.width / 2, this.height / 2);
        this.upgradeUI.pivot(this.upgradeUI.width / 2, this.upgradeUI.height / 2);
        this.upgradeUI.setParam("item", "7", this, "i7");
        this.addChild(this.upgradeUI);
    }

    private onClosePanel(){
        console.log(111);
        if(!this.isUpgrading) return;
        console.log(222);
        this.upgradeUI.removeSelf();
        this.isUpgrading = false;
        eval("this." + this.uiVar + ".visible = true;");
    }

}