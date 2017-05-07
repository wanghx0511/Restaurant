class Utils {

    constructor(){
        
    }

    public calcTweenNeedTime(duration : number) : number  {
        //没秒走多少像素，duration是像素差,全屏1920，假如用4秒走过
        return duration / 0.5;
    }

    public getStarPosX (score : number, max : number ) : number {
        var startPosX = 150;        //起始横坐标
        var ratio = 200;            //星间距系数
        //星星横坐标
        return startPosX + (score / max * ratio) ;
    }

}