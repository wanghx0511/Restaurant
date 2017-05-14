var UpgradeManager = (function () {
    function UpgradeManager() {
    }
    UpgradeManager.prototype.createStage = function () {
        UpgradeManager.upgrade = new StageOne(1);
        Laya.stage.addChild(StageManager.stage);
    };
    return UpgradeManager;
}());
UpgradeManager.upgrade = null;
//# sourceMappingURL=UpgradeManager.js.map