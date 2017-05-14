class UpgradeManager{
    public static upgrade : StageOne = null;

    public createStage() {
        UpgradeManager.upgrade = new StageOne(1);
        Laya.stage.addChild(StageManager.stage);
    }
}