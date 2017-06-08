var Loading = (function () {
    function Loading(res, callback, context) {
        /** 回调函数 */
        this.callback = null;
        /** 上下文 */
        this.context = null;
        this.res = res;
        this.callback = callback;
        this.context = context;
        this.bg = new Laya.Sprite();
        this.bg.loadImage("res/atlas/Loading.png");
        Laya.stage.addChild(this.bg);
        //显示进度条图片
        this.progressShow();
        //加载完进度条后执行onProLoaded方法
        if (res != null) {
            Laya.loader.load(res, Laya.Handler.create(this, this.onProLoaded));
        }
        else {
            Laya.timer.once(1000, this, this.onLoadFinish);
        }
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
        this.progressBar.height = 40;
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
        //回调
        if (this.callback != null)
            this.callback.call(this.context, this.context);
    };
    return Loading;
}());
//# sourceMappingURL=Loading.js.map