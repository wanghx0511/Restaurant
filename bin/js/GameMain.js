//游戏主入口
var WebGL = Laya.WebGL;
var GameMain = (function () {
    function GameMain() {
        //初始化引擎，设置游戏宽高
        Laya.init(1920, 1080, WebGL);
        //设置适配模式
        Laya.stage.scaleMode = "exactfit";
        //设置剧中对齐    
        Laya.stage.alignH = "center";
        //设置横竖屏
        Laya.stage.screenMode = "horizontal";
        //显示FPS
        //Laya.Stat.show(0, 0);
        var pro_res = [
            { url: "res/atlas/progress_time$bar.png", type: Laya.Loader.IMAGE },
            { url: "res/atlas/progress_time.png", type: Laya.Loader.IMAGE },
            { url: "res/atlas/loading.jpg", type: Laya.Loader.IMAGE },
        ];
        //加载完进度条后执行onProLoaded方法
        Laya.loader.load(pro_res, Laya.Handler.create(this, this.onProLoaded));
    }
    GameMain.prototype.onProLoaded = function () {
        //初始化事件
        Eventinit.init();
        var res = [
            { url: "res/json/ConfItem.json", type: Laya.Loader.JSON },
            { url: "res/json/Confkitchenware.json", type: Laya.Loader.JSON },
            { url: "res/json/ConfCustomer.json", type: Laya.Loader.JSON },
            { url: "res/json/ConfItemMerge.json", type: Laya.Loader.JSON },
            { url: "res/json/ConfStage.json", type: Laya.Loader.JSON },
            { url: "res/json/ConfWorld.json", type: Laya.Loader.JSON },
            { url: "res/json/ConfPos.json", type: Laya.Loader.JSON },
            { url: "res/atlas/ui.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ui/StageChoose.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ui/FurniturePromote.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/stage.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/beijing.jpg", type: Laya.Loader.IMAGE },
        ];
        new Loading(res, this.gameStart, null);
    };
    GameMain.prototype.gameStart = function () {
        Laya.stage.addChild(new StageMain());
    };
    return GameMain;
}());
var gameMain = new GameMain();
//# sourceMappingURL=GameMain.js.map