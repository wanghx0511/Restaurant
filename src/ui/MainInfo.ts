class MainInfo extends ui.MainInfoUI{

    constructor() {
        super();
        this.start.on(Laya.Event.CLICK, this, this.onStageClick);
    }

    private onStageClick(e: Laya.Event) {
        this.removeSelf();
        //加载关卡
        var res:Array<any> = [
            {url:"res/atlas/stage.json",type:Laya.Loader.ATLAS},
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