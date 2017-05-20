class StageManager{
    public static stage: StageOne = null;
    //模拟服务端发的数据
    public static data : any = {"item":{1:1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1}, "kitchenware":{1:1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1}}; 

    public createStage() {
        // Laya.stage.destroy();
        StageManager.stage = new StageOne(1);
        Laya.stage.addChild(StageManager.stage);
        console.log(StageManager.data["kitchenware"][7]);
    }
}