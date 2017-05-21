//游戏主场景
class StageMain extends Laya.Sprite{
    //主场景UI
    public stageOneInfo: StageOneInfo;

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

        //添加UI
        var stageOneInfo = new StageOneInfo();
        this.stageOneInfo = stageOneInfo;
        this.addChild(this.stageOneInfo);

        //事件
        this.stageOneInfo.start.on(Laya.Event.CLICK, this, this.onStageClick);
    }

    private onStageClick(e: Laya.Event) {
        var stageChooseInfo = new StageChooseInfo();
        this.addChild(stageChooseInfo);
        stageChooseInfo.pivot(stageChooseInfo.width/2, stageChooseInfo.height/2);
        stageChooseInfo.pos(Laya.stage.width/2, Laya.stage.height/2);
        
    }

    //关卡开始
    private stageStart(): void {
        this.removeSelf();
        //加载关卡
        var res:Array<any> = [
            {url:"res/atlas/stage.json",type:Laya.Loader.ATLAS},
            {url:"res/atlas/beijing.jpg",type:Laya.Loader.IMAGE},
            {url:"res/atlas/customer.json",type:Laya.Loader.ATLAS},
            {url:"res/atlas/sfx.json",type:Laya.Loader.ATLAS},
        ];
        new Loading(res, this.stageStart, null);
    }
}