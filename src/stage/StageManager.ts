class StageManager{
    public static stage: Laya.Sprite = null;

    public createStage() {
        StageManager.stage = new StageOne(1);
        Laya.stage.addChild(StageManager.stage);
    }
}