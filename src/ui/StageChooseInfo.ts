class StageChooseInfo extends ui.StageChooseInfoUI{

    constructor() {
        super();
        this.initStageList();
        this.close.on(Laya.Event.CLICK, this, this.onClose);
    }

    private onClose() {
        this.removeSelf();
    }

    //初始化关卡列表
    private initStageList() {
        var confStage = new ConfigStage();
        var confJson = confStage.findAll();
        var i = 0;
        var initX = 40;
        var initY = 132;
        for(var conf of confJson) {
            this.createStageInfo(conf.sn, initX, initY);

        }
    }

    private createStageInfo(stageSn: number, initX: number, initY: number) {
        var stageInfo = new Laya.Sprite();
        var bg = new Laya.Image();
        bg.loadImage("ui/StageChoose/Bg_Blue.png");
        stageInfo.addChild(bg);

        var stage = new Laya.Image();
        stage.loadImage("ui/StageChoose/BT_Green.png");
        bg.addChild(stage);
        stage.pos(2, 124);

        var bgLeft = new Laya.Image();
        bgLeft.loadImage("ui/StageChoose/Star_Bg_left.png");
        bg.addChild(bgLeft);
        bgLeft.pos(-4, 43);

        var bgMid = new Laya.Image();
        bgMid.loadImage("ui/StageChoose/Star_Bg_mid.png");
        bg.addChild(bgMid);
        bgMid.pos(57, 11);

        var bgRight = new Laya.Image();
        bgRight.loadImage("ui/StageChoose/Star_Bg_right.png");
        bg.addChild(bgRight);
        bgRight.pos(141, 43);

        var dayGreen = new Laya.Image();
        dayGreen.loadImage("ui/StageChoose/Lable_Day_Green.png");
        bg.addChild(dayGreen);
        dayGreen.pos(54, 143);
        
        stageInfo.pos(initX, initY);
        this.addChild(stageInfo);
        this.on(Laya.Event.CLICK, this, this.onClick, [stageSn]);
    }


    private onClick(stageSn: number): void {
        this.removeSelf();
        //加载关卡
        var res:Array<any> = [
            {url:"res/atlas/stage.json",type:Laya.Loader.ATLAS},
            {url:"res/atlas/beijing.jpg",type:Laya.Loader.IMAGE},
            {url:"res/atlas/customer.json",type:Laya.Loader.ATLAS},
            {url:"res/atlas/sfx.json",type:Laya.Loader.ATLAS},
        ];
        new Loading(res, this.startStage, stageSn);
    }

    //关卡开始
    private startStage(context: any) {
        StageManager.createStage(context);
    }
}