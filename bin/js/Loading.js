var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Loading = (function (_super) {
    __extends(Loading, _super);
    function Loading(res) {
        var _this = _super.call(this) || this;
        _this.res = res;
        _this.bg = new Laya.Sprite();
        _this.bg.loadImage("res/atlas/loading.jpg");
        Laya.stage.addChild(_this.bg);
        //显示进度条图片
        _this.progressShow();
        //加载完进度条后执行onProLoaded方法
        if (res != null) {
            Laya.loader.load(res, Laya.Handler.create(_this, _this.onProLoaded));
        }
        else {
            Laya.timer.once(1000, _this, _this.onLoadFinish);
        }
        return _this;
    }
    //回调函数触发下面的方法加载游戏资源
    Loading.prototype.onProLoaded = function () {
        //设置progress Handler的第4个参数为true，根据加载文件个数获取加载进度
        Laya.loader.load(this.res, null, Laya.Handler.create(this, this.onProgress, null, false));
    };
    //显示开始游戏加载进度条
    Loading.prototype.progressShow = function () {
        //和text一样，需要先new一个进度条对象
        this.progressBar = new Laya.ProgressBar("res/atlas/progress_time.png");
        this.progressBar.width = 800;
        this.progressBar.x = (Laya.stage.width - this.progressBar.width) / 2;
        this.progressBar.y = Laya.stage.height / 1.5;
        this.progressBar.sizeGrid = "5,5,5,5";
        //当进度条发生变化的时候，我们需要下面的方法来监听其变化
        this.progressBar.changeHandler = new Laya.Handler(this, this.onChange);
        //添加进度条到舞台上
        Laya.stage.addChild(this.progressBar);
    };
    //主游戏界面加载完成后的回调函数
    Loading.prototype.onProgress = function (pro) {
        //console.log("加载了总文件的:"+pro*100+"%");
        this.progressBar.value = pro;
        if (this.progressBar.value == 1) {
            //游戏主页面资源加载完成后执行这里的代码
            //console.log("游戏加载完成咯！！");
            //延迟1秒再显示游戏主页面
            this.progressBar.value = pro;
            Laya.timer.once(1000, this, this.onLoadFinish);
        }
    };
    //进度条发生变化的时候触发下面的方法
    Loading.prototype.onChange = function (value) {
        console.log("进度: " + Math.floor(value * 100) + "%");
    };
    //加载完成后的回调函数
    Loading.prototype.onLoadFinish = function () {
        //laya.media.SoundManager.playMusic("res/atlas/bg.mp3",0);   
        //移除进度条
        Laya.stage.removeChild(this.progressBar);
        Laya.stage.removeChild(this.bg);
        Emitter.fire("nihao", "cyrwpj", 1);
    };
    return Loading;
}(Laya.Node));
//# sourceMappingURL=Loading.js.map