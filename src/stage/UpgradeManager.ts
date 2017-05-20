class UpgradeManager{
    public static upgrade : Upgrade = null;

    public createStage() {
        UpgradeManager.upgrade = new Upgrade(1);
        Laya.stage.addChild(UpgradeManager.upgrade);
    }
}