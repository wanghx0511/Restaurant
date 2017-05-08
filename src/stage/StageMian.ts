//游戏主场景
class StageMain extends Laya.Sprite{
    //主场景UI
    public mainInfo: MainInfo;

    constructor() {
        super();
        //创建游戏信息UI
        var mainInfo = new MainInfo();
        this.mainInfo = mainInfo;

        //场景图
        var bg = new Laya.Sprite();
        bg.loadImage("res/atlas/MapBG01_1.jpg");
        this.addChild(bg);
        
        //添加UI
        this.addChild(this.mainInfo);
        this.mainInfo.start.on(Laya.Event.CLICK, this, this.onStageClick);
    }

    private onStageClick(e: Laya.Event) {
        this.removeSelf();
        //加载关卡
        var res:Array<any> = [
            //{url:"res/atlas/stage.json",type:Laya.Loader.ATLAS},
            {url:"res/atlas/beijing.jpg",type:Laya.Loader.IMAGE},
        ];
        new Loading(res, this.stageStart, null);
    }

    //关卡开始
    private stageStart(): void {
        var stageManager = new StageManager();
        stageManager.createStage();
    }
}