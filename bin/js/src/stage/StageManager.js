var StageManager = (function () {
    function StageManager() {
    }
    StageManager.prototype.createStage = function () {
        StageManager.stage = new StageOne(1);
        Laya.stage.addChild(StageManager.stage);
    };
    return StageManager;
}());
StageManager.stage = null;
//# sourceMappingURL=StageManager.js.map