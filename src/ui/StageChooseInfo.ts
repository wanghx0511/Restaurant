class StageChooseInfo extends ui.StageChooseInfoUI{

    constructor() {
        super();
        this.initStageList();
        this.close.on(Laya.Event.CLICK, this, this.onClose);
        this.panel.vScrollBarSkin = "";
    }

    private onClose() {
        this.removeSelf();
    }

    //初始化关卡列表
    private initStageList() {
        var confStage = new ConfigStage();
        var confJson = confStage.findAll();
        var i = 0;
        var initX = 15;
        var initY = 30;
        
        for(var conf of confJson) {
            this.createStageInfo(conf.sn, initX, initY);
            initX += 250;
            i++;
            if(i % 5 == 0) {
                initX = 15;
                initY += 230;
            }
        }
    }

    private createStageInfo(stageSn: number, initX: number, initY: number) {
        var stageInfo: any;
        var stageJson = Laya.LocalStorage.getJSON("stage");
        if(stageJson == null) stageJson = {};

        if(stageSn == 1 || stageJson[stageSn - 1] != null) {
            stageInfo = new ui.StageOpenUI();
            if(stageJson[stageSn] != null) {
                if(stageJson[stageSn] >= 1) {
                    stageInfo.starLeft.visible = true;
                }
                if(stageJson[stageSn] >= 2) {
                    stageInfo.starMid.visible = true;
                }
                if(stageJson[stageSn] >= 3) {
                    stageInfo.starRight.visible = true;
                }
            }

            stageInfo.on(Laya.Event.CLICK, this, this.onClick, [stageSn]);
        }
        else {
            stageInfo = new ui.StageCloseUI();
        }
        stageInfo.stageSn.index = stageSn;
        stageInfo.pos(initX, initY);
        stageInfo.size(stageInfo.width, stageInfo.height);
        this.panel.addChild(stageInfo);
    }


    private onClick(stageSn: number): void {
        this.removeSelf();
        //加载关卡
        var res:Array<any> = [
            {url:"res/atlas/stage.json",type:Laya.Loader.ATLAS},
            {url:"res/atlas/beijing.jpg",type:Laya.Loader.IMAGE},
            {url:"res/atlas/customer.json",type:Laya.Loader.ATLAS},
            {url:"res/atlas/sfx.json",type:Laya.Loader.ATLAS},
            {url:"res/atlas/ui/StageSettlement.json",type:Laya.Loader.ATLAS},
            {url:"res/atlas/ui/Pause.json",type:Laya.Loader.ATLAS},
            {url:"res/atlas/ui/Level.json",type:Laya.Loader.ATLAS},
        ];
        new Loading(res, this.startStage, stageSn);
    }

    //关卡开始
    private startStage(context: any) {
        StageManager.createStage(context);
    }
}