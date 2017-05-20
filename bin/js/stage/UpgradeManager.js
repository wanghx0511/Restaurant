var UpgradeManager = (function () {
    function UpgradeManager() {
    }
    UpgradeManager.prototype.createStage = function () {
        UpgradeManager.upgrade = new Upgrade(1);
        Laya.stage.addChild(UpgradeManager.upgrade);
    };
    return UpgradeManager;
}());
UpgradeManager.upgrade = null;
//# sourceMappingURL=UpgradeManager.js.map