//游戏主场景
class StageMain extends Laya.Sprite{
    //主场景UI
    public mainTownInfo: MainTownInfo;

    constructor() {
        super();
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

        //主界面
        var mainTown = new MainTown();
        this.addChild(mainTown);
        //测试升级用代码
        // var upgrade = new Upgrade(1);
        // this.addChild(upgrade);
        //添加UI
        var mainTownInfo = new MainTownInfo();
        this.mainTownInfo = mainTownInfo;
        this.addChild(this.mainTownInfo);
        
        //事件
        this.mainTownInfo.start.on(Laya.Event.CLICK, this, this.onStageClick);
        this.mainTownInfo.upgrade.on(Laya.Event.CLICK, this, this.onUpgradeClick);
    }

    private onStageClick(e: Laya.Event) {
        if(this.getChildByName("stageChooseInfo") != null) return;

        var stageChooseInfo = new StageChooseInfo();
        stageChooseInfo.name = "stageChooseInfo";
        this.addChild(stageChooseInfo);
        stageChooseInfo.pivot(stageChooseInfo.width/2, stageChooseInfo.height/2);
        stageChooseInfo.pos(Laya.stage.width/2, Laya.stage.height/2);
    }

    private onUpgradeClick(e: Laya.Event){
        var upgrade = new Upgrade(1);
        this.addChild(upgrade);
    }

}